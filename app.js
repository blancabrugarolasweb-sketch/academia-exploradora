const app = document.getElementById("app");
const STORAGE_KEY = "martina_exploradora_state_v10";
const AUTH_KEY = "martina_exploradora_auth_v10";
const ACCESS_PASSWORD = "martina.v";

let state = loadState();
let authenticated = localStorage.getItem(AUTH_KEY) === "ok";
let route = "home";
let currentLesson = null;
let currentLessonQuiz = null;
let currentCard = null;
let currentExercise = null;
let feedback = null;
let puzzle = null;

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const base = {
    stars: 0,
    unlockedCards: [],
    cycleIndex: 0,
    completedExercises: 0,
    earnedBadges: []
  };
  if (!saved) return base;
  return { ...base, ...JSON.parse(saved) };
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function botanyWorld() { return GAME_DATA.worlds.find(w => w.id === "botanica"); }
function totalCards() { return botanyWorld().cards.length; }
function unlockedCount() { return state.unlockedCards.length; }
function lockedCards() { return botanyWorld().cards.filter(c => !state.unlockedCards.includes(c.id)); }
function go(next) { route = next; feedback = null; render(); }
function screen(kind, content) {
  app.innerHTML = `<div class="screen ${kind}"><main class="stage">${content}</main></div>`;
}
function render() {
  if (!authenticated) return renderLogin();
  if (route === "home") return renderHome();
  if (route === "botanica") return renderBotany();
  if (route === "lesson") return renderLesson();
  if (route === "lessonQuiz") return renderLessonQuiz();
  if (route === "lessonResult") return renderLessonResult();
  if (route === "exercise") return renderExercise();
  if (route === "album") return renderAlbum();
  if (route === "cardIntro") return renderCardIntro();
  if (route === "cardPuzzle") return renderCardPuzzle();
  if (route === "cardDetail") return renderCardDetail();
  if (route === "unlock") return renderUnlock();
  if (route === "chest") return renderChest();
}

function renderLogin() {
  app.innerHTML = `<div class="screen login-screen"><main class="stage login-stage">
    <section class="login-card">
      <div class="academy-wordmark">Academia de Exploradoras</div>
      <p class="welcome-line">Bienvenida, Martina</p>
      <form class="login-form" onsubmit="handleLogin(event)">
        <input class="login-input" type="password" autocomplete="current-password" placeholder="Contraseña" aria-label="Contraseña" autofocus>
        <button class="btn btn-primary" type="submit">Entrar</button>
      </form>
      ${feedback ? `<p class="login-error">${feedback}</p>` : ""}
    </section>
  </main></div>`;
}

function handleLogin(event) {
  event.preventDefault();
  const input = event.target.querySelector("input");
  if (input.value === ACCESS_PASSWORD) {
    authenticated = true;
    localStorage.setItem(AUTH_KEY, "ok");
    feedback = null;
    return render();
  }
  feedback = "Contraseña incorrecta.";
  renderLogin();
}

function renderProgressHud() {
  return `<div class="progress-hud">
    <div class="hud-pill"><span>Estrellas</span><strong>${state.stars}</strong></div>
    <div class="hud-pill"><span>Cromos</span><strong>${unlockedCount()}/${totalCards()}</strong></div>
    <div class="hud-pill"><span>Insignias</span><strong>${state.earnedBadges.length}</strong></div>
  </div>`;
}

function renderHome() {
  const worlds = GAME_DATA.worlds.map(w => `
    <button class="world-card ${w.status === "locked" ? "locked" : "active"}" aria-label="${w.name}" ${w.status === "active" ? `onclick="go('botanica')"` : ""} style="background-image:url('${w.homeImage || ''}')"></button>`).join("");
  screen("home-screen", `
    <div class="academy-wordmark">Academia de Exploradoras</div>
    <section class="home-card">
      <p class="welcome-line">Bienvenida, Martina</p>
      <p class="question">¿Qué aventura quieres explorar hoy?</p>
      ${renderProgressHud()}
      <div class="world-carousel">${worlds}</div>
    </section>`);
}

function renderBotany() {
  const lessons = botanyWorld().lessons.map(l => `
    <button class="learn-image-card" onclick="openLesson('${l.id}')"><img src="${l.cardImage}" alt="${l.title}"></button>`).join("");
  screen("botany-screen", `
    <section class="panel botany-hub">
      <div class="btn-row" style="justify-content:flex-end; margin-top:0; margin-bottom:8px;"><button class="btn btn-secondary" onclick="go('home')">Inicio</button></div>
      <div class="world-title">Jardín Secreto</div>
      ${renderProgressHud()}
      <div class="learn-grid">${lessons}</div>
      <div class="action-row">
        <button class="image-action" onclick="startRandomCycleExercise()"><img src="assets/button_play.png" alt="Jugar"></button>
        <button class="image-action" onclick="go('album')"><img src="assets/button_album.png" alt="Álbum de cromos"></button>
      </div>
    </section>`);
}

function openLesson(id) {
  currentLesson = botanyWorld().lessons.find(l => l.id === id);
  feedback = null;
  route = "lesson";
  render();
}

function renderLesson() {
  const l = currentLesson;
  screen("lesson-screen", `
    <section class="panel lesson-panel">
      <img class="lesson-hero" src="${l.infographic}" alt="Infografía ${l.title}">
      <div class="btn-row">
        <button class="btn btn-primary" onclick="startLessonQuiz()">Hacer reto de la Academia</button>
        <button class="btn btn-secondary" onclick="go('botanica')">Volver</button>
      </div>
    </section>`);
}

function startLessonQuiz() {
  const questionPool = shuffle(currentLesson.quizQuestions).slice(0, 6);
  currentLessonQuiz = { questions: questionPool, index: 0, score: 0, selected: null, checked: false };
  route = "lessonQuiz";
  render();
}

function renderLessonQuiz() {
  const q = currentLessonQuiz.questions[currentLessonQuiz.index];
  const options = q.options.map(option => {
    let cls = "";
    if (currentLessonQuiz.checked) {
      if (option === q.answer) cls = "correct";
      else if (option === currentLessonQuiz.selected) cls = "wrong";
    } else if (option === currentLessonQuiz.selected) {
      cls = "selected";
    }
    return `<button class="option ${cls}" onclick="selectLessonOption('${safe(option)}')">${option}</button>`;
  }).join("");

  screen("quiz-screen", `
    <section class="question-box">
      <div class="step">Reto de la Academia</div>
      <h2>${currentLesson.title}</h2>
      <div class="quiz-progress">Pregunta ${currentLessonQuiz.index + 1} de ${currentLessonQuiz.questions.length}</div>
      <p><strong>${q.q}</strong></p>
      <div class="options">${options}</div>
      ${currentLessonQuiz.checked ? `<div class="explanation"><strong>${currentLessonQuiz.selected === q.answer ? "¡Correcto!" : "Casi."}</strong><p style="margin:8px 0 0;">${q.explanation}</p></div>` : ""}
      <div class="btn-row">
        ${!currentLessonQuiz.checked ? `<button class="btn btn-primary" onclick="checkLessonAnswer()">Comprobar</button>` : `<button class="btn btn-primary" onclick="nextLessonQuestion()">${currentLessonQuiz.index === currentLessonQuiz.questions.length - 1 ? "Ver resultado" : "Siguiente pregunta"}</button>`}
        <button class="btn btn-secondary" onclick="go('lesson')">Volver a la lección</button>
      </div>
    </section>`);
}
function selectLessonOption(option) { currentLessonQuiz.selected = option; render(); }
function checkLessonAnswer() {
  if (!currentLessonQuiz.selected) return;
  const q = currentLessonQuiz.questions[currentLessonQuiz.index];
  if (currentLessonQuiz.selected === q.answer) { currentLessonQuiz.score += 1; state.stars += 1; saveState(); }
  currentLessonQuiz.checked = true;
  render();
}
function nextLessonQuestion() {
  currentLessonQuiz.index += 1;
  if (currentLessonQuiz.index >= currentLessonQuiz.questions.length) {
    if (currentLessonQuiz.score >= 5 && !state.earnedBadges.includes(currentLesson.badgeName)) {
      state.earnedBadges.push(currentLesson.badgeName); state.stars += 3; saveState();
    }
    route = "lessonResult"; return render();
  }
  currentLessonQuiz.selected = null; currentLessonQuiz.checked = false; render();
}
function renderLessonResult() {
  const score = currentLessonQuiz.score; const passed = score >= 5;
  screen("quiz-screen", `<section class="question-box"><div class="step">Resultado</div><h2>Reto completado</h2><p><strong>${score}/6 respuestas correctas</strong></p><div class="result-badge"><div style="font-size:52px; margin-bottom:8px;">${passed ? "🏅" : "🌱"}</div><div class="result-badge-title">${passed ? currentLesson.badgeName : "Buen intento"}</div><p>${passed ? "Has conseguido una insignia de la Academia." : "Puedes repetir el reto para conseguir la insignia."}</p></div><div class="btn-row"><button class="btn btn-primary" onclick="startLessonQuiz()">Repetir reto</button><button class="btn btn-secondary" onclick="go('lesson')">Volver a la lección</button><button class="btn btn-secondary" onclick="go('botanica')">Volver al jardín</button></div></section>`);
}

function cromoBg(card) { const col = card.sheetIndex % 5; const row = Math.floor(card.sheetIndex / 5); return `background-position: ${col * 25}% ${row * 100}%;`; }
function cardTease(card) {
  if (card.id === "hortensia-rosa") return "Flor redonda";
  if (card.id === "boj") return "Bolita verde";
  if (card.id === "agapanto") return "Tallo alto";
  if (card.id === "menta") return "Huele fresco";
  if (card.id === "hierbabuena") return "Aroma suave";
  if (card.id === "rosa") return "Puede pinchar";
  if (card.id === "acebo") return "Hoja brillante";
  if (card.id === "hiedra") return "Trepa";
  return "Pista secreta";
}
function renderCromoCard(card) {
  const unlocked = state.unlockedCards.includes(card.id);
  return `<button class="cromo ${unlocked ? "unlocked" : "locked"}" onclick="openCard('${card.id}')"><div class="cromo-thumb" style="${cromoBg(card)}"></div>${unlocked ? "" : `<span class="cromo-tease">${cardTease(card)}</span>`}</button>`;
}
function renderAlbum() {
  const complete = unlockedCount() === totalCards();
  screen("album-screen", `<section class="album-header"><div class="btn-row" style="justify-content:center; margin-top:0; margin-bottom:10px;"><button class="btn btn-secondary" onclick="go('botanica')">Volver al jardín</button><button class="btn btn-secondary" onclick="go('home')">Inicio</button></div><h1>Álbum Botánico</h1>${renderProgressHud()}</section><section class="panel album-panel"><div class="album-grid">${botanyWorld().cards.map(renderCromoCard).join("")}</div><div class="album-chest"><img class="chest-img" src="${complete ? "assets/chest_open.png" : "assets/chest_locked.png"}" alt="${complete ? "Cofre abierto" : "Cofre cerrado"}"><p><strong>${unlockedCount()}/${totalCards()} cromos</strong></p><button class="btn btn-gold" onclick="go('chest')">${complete ? "Ver premio" : "Ver cofre"}</button></div></section>`);
}

function openCard(id) { currentCard = botanyWorld().cards.find(c => c.id === id); feedback = null; puzzle = null; route = state.unlockedCards.includes(id) ? "cardDetail" : "cardIntro"; render(); }
function renderCardIntro() {
  const c = currentCard;
  const canExplore = state.stars >= 5;
  screen("card-screen", `<section class="panel"><div class="card-layout"><div class="card-preview"><div class="mystery">?</div></div><div>${renderProgressHud()}<div class="step">Pista real</div><h2>Cromo oculto</h2><p>La Academia ha encontrado una planta misteriosa en el jardín.</p><div class="notebook"><h3>Tu pista</h3><p>${c.clue}</p></div>${canExplore ? `<p class="energy-note">Este cromo cuesta 5 estrellas. Se descontarán cuando lo resuelvas.</p>` : `<p class="energy-note">Necesitas ${5 - state.stars} estrella${state.stars === 4 ? "" : "s"} más para intentar desbloquear este cromo.</p>`}<div class="btn-row" style="justify-content:flex-start">${canExplore ? `<button class="btn btn-primary" onclick="startCardPuzzle()">Resolver palabra</button>` : `<button class="btn btn-primary" onclick="startRandomCycleExercise()">Conseguir estrellas jugando</button>`}<button class="btn btn-secondary" onclick="go('album')">Volver al álbum</button></div></div></div></section>`);
}
function startCardPuzzle() {
  if (state.stars < 5) return startRandomCycleExercise();
  feedback = null;
  puzzle = makePuzzle(currentCard.targetWord);
  route = "cardPuzzle";
  render();
}
function makePuzzle(word) { const letters = word.split("").map((char, i) => ({ id: i + "-" + char, char })); return { target: word, placed: [], bank: shuffle(letters) }; }
function renderCardPuzzle() {
  const slots = Array.from({ length: puzzle.target.length }).map((_, i) => { const item = puzzle.placed[i]; return `<button class="slot" onclick="removePuzzleLetter(${i})">${item ? item.char : ""}</button>`; }).join("");
  const letters = puzzle.bank.map((item, i) => { const used = puzzle.placed.some(p => p.id === item.id); return `<button class="letter ${used ? "used" : ""}" onclick="addPuzzleLetter(${i})">${item.char}</button>`; }).join("");
  screen("card-screen", `<section class="question-box"><div class="step">Palabra secreta</div><h2>Descubre la planta</h2><p>Ordena las letras para formar el nombre de la planta misteriosa.</p><div class="puzzle-slots">${slots}</div><div class="letter-bank">${letters}</div>${feedback ? `<p><strong>${feedback}</strong></p>` : ""}<div class="btn-row"><button class="btn btn-primary" onclick="checkPuzzle()">Comprobar</button><button class="btn btn-secondary" onclick="clearPuzzle()">Borrar</button><button class="btn btn-secondary" onclick="go('cardIntro')">Volver</button></div></section>`);
}
function addPuzzleLetter(index) { const item = puzzle.bank[index]; if (!item) return; if (puzzle.placed.some(p => p.id === item.id)) return; if (puzzle.placed.length >= puzzle.target.length) return; puzzle.placed.push(item); feedback = null; render(); }
function removePuzzleLetter(index) { puzzle.placed.splice(index, 1); feedback = null; render(); }
function clearPuzzle() { puzzle.placed = []; feedback = null; render(); }
function checkPuzzle() { const guess = puzzle.placed.map(i => i.char).join(""); if (guess.length < puzzle.target.length) { feedback = "Faltan letras."; return render(); } if (guess === puzzle.target) { if (state.stars < 5) { feedback = "Necesitas 5 estrellas para desbloquear este cromo."; return render(); } unlockCard(currentCard.id); } else { feedback = "Casi. Prueba a cambiar el orden."; render(); } }
function renderCardDetail() {
  const c = currentCard;
  screen("card-screen", `<section class="panel"><div class="plant-detail-grid"><div class="card-preview"><div class="cromo-thumb" style="${cromoBg(c)}"></div></div><div><div class="step">Cromo conseguido</div><h2 class="plant-detail-title">${c.name}</h2><p>${c.mysteryLearn}</p><div class="plant-info-stack"><div class="plant-info-card"><h3>Sobre esta planta</h3><ul>${c.info.map(item => `<li>${item}</li>`).join("")}</ul></div><div class="plant-info-card"><h3>Sus cuidados</h3><ul>${c.care.map(item => `<li>${item}</li>`).join("")}</ul></div></div><div class="btn-row" style="justify-content:flex-start"><button class="btn btn-primary" onclick="go('album')">Volver al álbum</button><button class="btn btn-secondary" onclick="go('botanica')">Volver al jardín</button></div></div></div></section>`);
}
function unlockCard(id) { if (!state.unlockedCards.includes(id)) { state.unlockedCards.push(id); state.stars = Math.max(0, state.stars - 5); saveState(); } currentCard = botanyWorld().cards.find(c => c.id === id); route = "unlock"; render(); }
function renderUnlock() {
  const c = currentCard;
  screen("unlock-screen", `<section class="panel narrow"><div class="reward-card"><div class="cromo-thumb" style="${cromoBg(c)}"></div></div><h2 class="reward-title">¡Muy bien!</h2><p style="text-align:center"><strong>${c.name}</strong></p><p style="text-align:center">Dibuja esta planta en tu cuaderno de exploradora.</p><div class="btn-row"><button class="btn btn-primary" onclick="go('cardDetail')">Ver información de la planta</button><button class="btn btn-secondary" onclick="go('album')">Ver álbum</button></div></section>`);
}
function renderChest() {
  const complete = unlockedCount() === totalCards();
  screen("chest-screen", `<section class="panel narrow"><div class="album-chest"><img class="chest-img" src="${complete ? "assets/chest_open.png" : "assets/chest_locked.png"}" alt="${complete ? "Cofre abierto" : "Cofre cerrado"}"><h2>${complete ? "¡Cofre abierto!" : "Cofre cerrado"}</h2><p><strong>${unlockedCount()}/${totalCards()} cromos conseguidos</strong></p><p>${complete ? botanyWorld().chestReward : "Cuando consigas los 8 cromos, se romperán las cadenas."}</p><div class="btn-row"><button class="btn btn-primary" onclick="go('album')">Ver álbum</button><button class="btn btn-secondary" onclick="go('botanica')">Volver</button><button class="btn btn-secondary" onclick="go('home')">Inicio</button></div></div></section>`);
}

function createOptions(answer, candidates) {
  const options = [];
  [answer, ...candidates].forEach(candidate => {
    if (!options.some(item => String(item) === String(candidate))) options.push(candidate);
  });
  if (typeof answer === "number") {
    let delta = 2;
    while (options.length < 3) {
      const candidate = Math.max(0, answer + delta);
      if (!options.includes(candidate)) options.push(candidate);
      delta += 1;
    }
  }
  return shuffle(options.slice(0, 3));
}

function createOperationBanks() {
  const add = []; const subtract = [];
  GAME_DATA.objectBank.forEach(obj => {
    for (let a = 1; a <= 7; a++) for (let b = 1; b <= 5; b++) add.push({ title: "Suma botánica", prompt: `${a} ${obj.plural} + ${b} ${obj.plural} = ?`, visual: `${obj.emoji.repeat(a)} + ${obj.emoji.repeat(b)}`, answer: a+b, options: createOptions(a+b, [a+b+1, a+b-1]) });
    for (let a = 3; a <= 9; a++) for (let b = 1; b < a && b <= 5; b++) subtract.push({ title: "Resta botánica", prompt: `${a} ${obj.plural} - ${b} ${obj.plural} = ?`, visual: `${obj.emoji.repeat(a)} → se van ${b}`, answer: a-b, options: createOptions(a-b, [a-b+1, a-b-1]) });
  });
  return { add, subtract };
}
const OP_BANKS = createOperationBanks();
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }
function nextExerciseType() { const type = GAME_DATA.exerciseCycle[state.cycleIndex % GAME_DATA.exerciseCycle.length]; state.cycleIndex += 1; saveState(); return type; }
function startRandomCycleExercise() { currentCard = null; feedback = null; startExercise(nextExerciseType()); }
function startExercise(type) { currentExercise = makeExercise(type); route = "exercise"; render(); }
function makeExercise(type) {
  if (type === "add") { const ex = pick(OP_BANKS.add); return { type, ...ex, options: shuffle(ex.options) }; }
  if (type === "subtract") { const ex = pick(OP_BANKS.subtract); return { type, ...ex, options: shuffle(ex.options) }; }
  if (type === "word") { const w = pick(GAME_DATA.wordBank); return { type, title: "Completa la palabra", prompt: w.display, visual: w.word.replace(/./g, "• "), answer: w.answer, options: shuffle(w.options) }; }
  if (type === "count") { const obj = pick(GAME_DATA.objectBank); const n = Math.floor(Math.random() * 8) + 2; return { type, title: "Cuenta y completa", prompt: `¿Cuántas ${obj.plural} hay?`, visual: obj.emoji.repeat(n), answer: n, options: createOptions(n, [n+1, n-1]) }; }
  if (type === "syllables") { const w = pick(GAME_DATA.wordBank); return { type, title: "Cuenta sílabas", prompt: `¿Cuántas sílabas tiene ${w.word.toLowerCase()}?`, visual: w.word, answer: w.syllables, options: createOptions(w.syllables, [w.syllables+1, w.syllables-1]) }; }
  if (type === "sentence") { const s = pick(GAME_DATA.sentenceBank); return { type, title: "Cuenta palabras", prompt: "¿Cuántas palabras tiene esta frase?", visual: s.text, answer: s.words, options: createOptions(s.words, [s.words+1, s.words-1]) }; }
  if (type === "previousNext") { const n = Math.floor(Math.random() * 7) + 2; const prev = Math.random() > .5; const answer = prev ? n-1 : n+1; return { type, title: "Anterior y posterior", prompt: prev ? `¿Qué número va antes de ${n}?` : `¿Qué número va después de ${n}?`, visual: prev ? `__  ${n}` : `${n}  __`, answer, options: shuffle([answer, n, prev ? n+1 : n-1]) }; }
}
function renderExercise() {
  const e = currentExercise;
  const options = e.options.map(o => {
    let cls = "";
    if (feedback !== null) { if (String(o) === String(e.answer)) cls = "correct"; else if (String(o) === String(feedback)) cls = "wrong"; }
    return `<button class="option ${cls}" onclick="answerExercise('${safe(String(o))}')">${o}</button>`;
  }).join("");
  screen("exercise-screen", `<section class="question-box">${renderProgressHud()}<div style="display:flex; justify-content:space-between; gap:12px; align-items:flex-start;"><div><div class="step">Juego aleatorio</div><h2>${e.title}</h2></div><button class="btn btn-secondary" onclick="go('botanica')">← Jardín</button></div><p><strong>${e.prompt}</strong></p><div class="exercise-visual">${e.visual}</div><div class="options">${options}</div>${feedback !== null ? `<div class="explanation"><strong>${String(feedback) === String(e.answer) ? rewardFeedback() : "Casi. La respuesta correcta era " + e.answer + "."}</strong></div><div class="btn-row"><button class="btn btn-primary" onclick="startRandomCycleExercise()">Otro juego</button><button class="btn btn-secondary" onclick="go('botanica')">Volver</button><button class="btn btn-secondary" onclick="go('album')">Ver cromos</button></div>` : ""}</section>`);
}
function rewardFeedback() {
  return state.stars >= 5 ? "¡Muy bien! Ya tienes estrellas para desbloquear un cromo." : "¡Muy bien! Has ganado 1 estrella.";
}
function answerExercise(option) {
  feedback = option;
  if (String(option) === String(currentExercise.answer)) {
    state.stars += 1;
    state.completedExercises += 1;
    saveState();
  }
  render();
}

function safe(str) { return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'"); }

render();
