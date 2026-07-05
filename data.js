
const GAME_DATA = {
  worlds: [
    {
      id: "botanica",
      name: "Jardín Secreto",
      icon: "🌿",
      status: "active",
      description: "Plantas, flores, pistas y cromos botánicos.",
      homeImage: "assets/world_jardin_secreto.png",
      chestReward: "Visita al vivero y elige una planta o flor para cuidar.",
      lessons: [
        {
          id: "planta-por-dentro",
          title: "La planta por dentro",
          cardImage: "assets/learn_planta_card.png",
          infographic: "assets/lesson_planta_infografia.png",
          icon: "🌱",
          intro: "Cómo funciona una planta completa: raíz, tallo, hojas, flor, fruto y semilla.",
          badgeName: "Anatomista vegetal",
          video: {
            title: "Vídeo para ampliar",
            note: "Aquí podremos enlazar más adelante un vídeo educativo sobre partes de la planta."
          },
          sections: [
            { emoji: "🟫", title: "Raíz", text: "La raíz suele estar bajo la tierra. Sujeta la planta y absorbe agua y sales minerales." },
            { emoji: "🪵", title: "Tallo", text: "El tallo sostiene la planta y transporta agua y otras sustancias hacia las hojas, flores y frutos." },
            { emoji: "🍃", title: "Hojas", text: "Las hojas captan luz y aire. Son muy importantes para fabricar alimento." },
            { emoji: "🌸", title: "Flor", text: "La flor es una parte especial de muchas plantas. Puede ayudar a formar semillas y frutos." },
            { emoji: "🍎", title: "Fruto", text: "En algunas plantas, el fruto protege o guarda las semillas." },
            { emoji: "🫘", title: "Semilla", text: "La semilla puede germinar y convertirse en una nueva planta si tiene buenas condiciones." }
          ],
          summary: [
            "La raíz absorbe agua y sujeta la planta.",
            "El tallo sostiene y transporta.",
            "Las hojas ayudan a fabricar alimento.",
            "La flor, el fruto y la semilla participan en el ciclo de la vida."
          ],
          quizQuestions: [
            { q: "¿Qué parte suele estar bajo tierra?", options: ["Raíz", "Flor", "Pétalo"], answer: "Raíz", explanation: "La raíz está bajo tierra y ayuda a absorber agua." },
            { q: "¿Qué parte sostiene la planta?", options: ["Tallo", "Semilla", "Nube"], answer: "Tallo", explanation: "El tallo ayuda a mantener la planta erguida." },
            { q: "¿Qué parte recibe mucha luz del sol?", options: ["Hojas", "Raíces", "Piedras"], answer: "Hojas", explanation: "Las hojas suelen recibir la luz y usarla para fabricar alimento." },
            { q: "¿Qué parte puede guardar semillas en algunas plantas?", options: ["Fruto", "Tallo", "Tierra"], answer: "Fruto", explanation: "En muchas plantas, el fruto protege o contiene las semillas." },
            { q: "Si una planta no tuviera raíz, ¿qué le costaría hacer?", options: ["Absorber agua", "Oír música", "Volar"], answer: "Absorber agua", explanation: "La raíz ayuda a beber agua de la tierra." },
            { q: "Si se rompe el tallo, ¿qué puede pasar?", options: ["Puede costar que el agua llegue a las hojas", "La planta aprende a correr", "La flor se convierte en luna"], answer: "Puede costar que el agua llegue a las hojas", explanation: "El tallo es una vía de transporte dentro de la planta." },
            { q: "¿De qué puede nacer una planta nueva?", options: ["De una semilla", "De una cuchara", "De una nube"], answer: "De una semilla", explanation: "Si una semilla germina, puede convertirse en una nueva planta." },
            { q: "¿Qué parte de la planta puede convertirse en fruto?", options: ["La flor", "La piedra", "El zapato"], answer: "La flor", explanation: "Después de la flor, en algunas plantas puede aparecer un fruto." }
          ]
        },
        {
          id: "fabrica-verde",
          title: "La fábrica verde",
          cardImage: "assets/learn_fabrica_card.png",
          infographic: "assets/lesson_fabrica_infografia.png",
          icon: "☀️",
          intro: "Fotosíntesis, clorofila, luz, aire y qué pasa de día y de noche.",
          badgeName: "Guardiana de la clorofila",
          video: {
            title: "Vídeo para ampliar",
            note: "Aquí podremos enlazar un vídeo educativo sobre fotosíntesis y clorofila."
          },
          sections: [
            { emoji: "🍃", title: "Las hojas son fábricas", text: "Las hojas ayudan a la planta a fabricar su alimento." },
            { emoji: "🟢", title: "Clorofila", text: "La clorofila es una sustancia verde que tienen muchas plantas y les ayuda a captar la luz del sol." },
            { emoji: "☀️", title: "Fotosíntesis", text: "Con luz del sol, agua y dióxido de carbono del aire, la planta fabrica alimento y libera oxígeno." },
            { emoji: "💧", title: "Agua", text: "El agua llega hasta las hojas y forma parte del proceso." },
            { emoji: "🌬️", title: "Aire", text: "Las plantas toman dióxido de carbono del aire para hacer fotosíntesis." },
            { emoji: "🌗", title: "Día y noche", text: "De día, si hay luz, la planta puede hacer fotosíntesis. De noche no hace fotosíntesis, pero sigue respirando." }
          ],
          summary: [
            "La clorofila ayuda a captar la luz del sol.",
            "La fotosíntesis ocurre principalmente en las hojas.",
            "La planta usa luz, agua y aire para fabricar alimento.",
            "De noche sigue viva y respirando, aunque no hace fotosíntesis."
          ],
          quizQuestions: [
            { q: "¿Dónde fabrica alimento la planta principalmente?", options: ["En las hojas", "En las piedras", "En los zapatos"], answer: "En las hojas", explanation: "Las hojas son muy importantes para fabricar alimento." },
            { q: "¿Qué ayuda a la planta a captar la luz?", options: ["La clorofila", "El chocolate", "La arena"], answer: "La clorofila", explanation: "La clorofila es una sustancia verde que ayuda a captar la luz." },
            { q: "¿De qué color suele ser la clorofila?", options: ["Verde", "Azul brillante", "Negra"], answer: "Verde", explanation: "La clorofila es la responsable de gran parte del color verde de las plantas." },
            { q: "¿Cómo se llama el proceso por el que la planta fabrica alimento con luz?", options: ["Fotosíntesis", "Excavación", "Navegación"], answer: "Fotosíntesis", explanation: "Ese proceso se llama fotosíntesis." },
            { q: "¿Qué necesita la planta para hacer fotosíntesis?", options: ["Luz, agua y aire", "Cuentos y juguetes", "Zapatos y música"], answer: "Luz, agua y aire", explanation: "La planta usa luz, agua y dióxido de carbono del aire." },
            { q: "¿Qué pasa por la noche?", options: ["La planta sigue respirando, pero no hace fotosíntesis sin luz", "La planta desaparece", "La planta se convierte en animal"], answer: "La planta sigue respirando, pero no hace fotosíntesis sin luz", explanation: "Sin luz no puede hacer fotosíntesis, pero sigue viva y respirando." },
            { q: "¿Qué libera la planta durante la fotosíntesis?", options: ["Oxígeno", "Chocolate", "Arena"], answer: "Oxígeno", explanation: "Durante la fotosíntesis, la planta libera oxígeno." },
            { q: "¿Por qué muchas hojas son verdes?", options: ["Porque tienen clorofila", "Porque comen hierba", "Porque viven con ranas"], answer: "Porque tienen clorofila", explanation: "La clorofila les da ese color verde." }
          ]
        },
        {
          id: "flor-por-dentro",
          title: "La flor por dentro",
          cardImage: "assets/learn_flor_card.png",
          infographic: "assets/lesson_flor_infografia.png",
          icon: "🌺",
          intro: "Pétalos, sépalos, estambres, polen, pistilo, estigma y ovario.",
          badgeName: "Detective de flores",
          video: {
            title: "Vídeo para ampliar",
            note: "Aquí podremos enlazar un vídeo educativo sobre las partes de la flor."
          },
          sections: [
            { emoji: "🌸", title: "Pétalos", text: "Son las partes coloridas de muchas flores. Pueden atraer insectos." },
            { emoji: "🌿", title: "Sépalos", text: "Son pequeñas hojitas que protegen la flor cuando todavía es un botón." },
            { emoji: "✨", title: "Estambres", text: "Son la parte masculina de la flor. Producen polen." },
            { emoji: "🟡", title: "Polen", text: "Es un polvito fino que participa en la reproducción de la planta." },
            { emoji: "🎯", title: "Pistilo", text: "Es la parte femenina de la flor. Suele estar en el centro." },
            { emoji: "🫛", title: "Estigma y ovario", text: "El estigma puede recibir el polen. El ovario está en la base del pistilo y dentro puede haber óvulos." }
          ],
          summary: [
            "Los pétalos atraen insectos.",
            "Los sépalos protegen el botón floral.",
            "Los estambres producen polen.",
            "El pistilo recibe el polen y participa en la formación de semillas."
          ],
          quizQuestions: [
            { q: "¿Qué parte de la flor suele tener colores llamativos?", options: ["Pétalos", "Raíces", "Piedras"], answer: "Pétalos", explanation: "Los pétalos suelen ser las partes más vistosas de la flor." },
            { q: "¿Qué parte protege la flor cuando todavía está cerrada?", options: ["Sépalos", "Zapatos", "Nubes"], answer: "Sépalos", explanation: "Los sépalos protegen la flor cuando aún es un botón." },
            { q: "¿Qué producen los estambres?", options: ["Polen", "Agua del mar", "Arena"], answer: "Polen", explanation: "Los estambres producen polen." },
            { q: "¿Dónde puede pegarse el polen?", options: ["En el estigma", "En una cuchara", "En una nube"], answer: "En el estigma", explanation: "El estigma es la parte que puede recibir el polen." },
            { q: "¿Qué parte suele estar en el centro de la flor?", options: ["Pistilo", "Raíz", "Maceta"], answer: "Pistilo", explanation: "El pistilo suele estar en el centro de la flor." },
            { q: "¿Para qué sirven muchas flores?", options: ["Para ayudar a formar semillas", "Para hacer ruido", "Para esconder piedras"], answer: "Para ayudar a formar semillas", explanation: "La flor participa en la reproducción de muchas plantas." },
            { q: "¿Qué parte de la flor es masculina?", options: ["Estambres", "Pistilo", "Raíz"], answer: "Estambres", explanation: "Los estambres son la parte masculina." },
            { q: "¿Qué parte de la flor es femenina?", options: ["Pistilo", "Pétalos", "Sépalos"], answer: "Pistilo", explanation: "El pistilo es la parte femenina de la flor." }
          ]
        },
        {
          id: "flor-a-semilla",
          title: "De flor a semilla",
          cardImage: "assets/learn_semilla_card.png",
          infographic: "assets/lesson_semilla_infografia.png",
          icon: "🫘",
          intro: "Polinización, fruto, semilla y germinación contados como un ciclo.",
          badgeName: "Exploradora de semillas",
          video: {
            title: "Vídeo para ampliar",
            note: "Aquí podremos enlazar un vídeo educativo sobre polinización y germinación."
          },
          sections: [
            { emoji: "🐝", title: "Polinización", text: "El polen puede viajar de una flor a otra gracias al viento o a animales como las abejas." },
            { emoji: "🦋", title: "Abejas y mariposas", text: "Cuando visitan flores, pueden llevar polen pegado en su cuerpo." },
            { emoji: "🌸", title: "Después de la flor", text: "Si todo va bien, algunas flores pueden ayudar a formar frutos y semillas." },
            { emoji: "🍎", title: "Fruto", text: "En algunas plantas, el fruto protege las semillas." },
            { emoji: "🫘", title: "Semilla", text: "La semilla puede viajar, caer a la tierra y quedarse lista para crecer." },
            { emoji: "🌱", title: "Germinación", text: "Si una semilla tiene agua y buenas condiciones, puede germinar: primero sale una pequeña raíz y luego un brote." }
          ],
          summary: [
            "El polen puede viajar entre flores.",
            "Muchas flores terminan formando frutos y semillas.",
            "Las semillas pueden germinar si tienen buenas condiciones.",
            "Así nace una nueva planta."
          ],
          quizQuestions: [
            { q: "¿Qué pueden mover las abejas de flor en flor?", options: ["Polen", "Piedras", "Zapatos"], answer: "Polen", explanation: "Las abejas pueden transportar polen mientras visitan flores." },
            { q: "¿Cómo se llama el viaje del polen?", options: ["Polinización", "Natación", "Excavación"], answer: "Polinización", explanation: "El movimiento del polen forma parte de la polinización." },
            { q: "¿Qué puede aparecer después de algunas flores?", options: ["Fruto", "Coche", "Sombrero"], answer: "Fruto", explanation: "En algunas plantas, después de la flor aparece un fruto." },
            { q: "¿Qué puede haber dentro de un fruto?", options: ["Semillas", "Nubes", "Lápices"], answer: "Semillas", explanation: "Muchos frutos guardan semillas dentro." },
            { q: "¿Qué significa germinar?", options: ["Que una semilla empieza a crecer", "Que una flor canta", "Que una hoja se esconde"], answer: "Que una semilla empieza a crecer", explanation: "Germinar es empezar a crecer." },
            { q: "¿Qué necesita una semilla para empezar a crecer?", options: ["Agua y buenas condiciones", "Una corona", "Un castillo"], answer: "Agua y buenas condiciones", explanation: "Las semillas necesitan agua y condiciones adecuadas para germinar." },
            { q: "¿Qué animales visitan flores y pueden ayudar a la polinización?", options: ["Abejas y mariposas", "Tiburones y ballenas", "Elefantes y jirafas"], answer: "Abejas y mariposas", explanation: "Muchos insectos ayudan a transportar polen." },
            { q: "¿Qué suele salir primero cuando germina una semilla?", options: ["Una pequeña raíz", "Una nube", "Un zapato"], answer: "Una pequeña raíz", explanation: "Al germinar, suele salir primero la raíz." }
          ]
        }
      ],
      cards: [
        {
          id: "hortensia-rosa",
          name: "Hortensia rosa",
          targetWord: "HORTENSIA",
          sheetIndex: 0,
          clue: "Busca una planta con flores grandes, redondas y rosadas. Parece una nube de flores.",
          mysteryLearn: "La hortensia tiene muchas flores pequeñas agrupadas. Por eso parece una bola grande de color.",
          notebook: ["Nombre", "Color", "Forma", "Dibujo"],
          info: ["Es un arbusto con flores grandes agrupadas.", "Puede cambiar ligeramente de tono según la tierra y el agua.", "Le gusta llamar la atención por su tamaño y color."],
          care: ["Prefiere riego regular.", "Le gusta la semisombra o el sol suave.", "Conviene vigilar que la tierra no se seque demasiado."]
        },
        {
          id: "boj",
          name: "Boj",
          targetWord: "BOJ",
          sheetIndex: 1,
          clue: "Busca un arbusto verde con hojas pequeñas. Puede parecer una bolita o un borde verde.",
          mysteryLearn: "El boj es un arbusto. Tiene muchas hojas pequeñas y suele crecer muy compacto.",
          notebook: ["Nombre", "¿Árbol o arbusto?", "Cómo son sus hojas", "Dibujo"],
          info: ["Es una planta muy usada para formar setos o figuras.", "Sus hojas son pequeñas y numerosas.", "Suele verse como una masa verde compacta."],
          care: ["Se puede podar para darle forma.", "Le gusta un riego moderado.", "Agradece estar en exterior con buena luz."]
        },
        {
          id: "agapanto",
          name: "Agapanto",
          targetWord: "AGAPANTO",
          sheetIndex: 2,
          clue: "Busca una planta con un tallo largo y flores moradas o azuladas agrupadas arriba.",
          mysteryLearn: "El agapanto suele tener muchas flores juntas al final de un tallo.",
          notebook: ["Nombre", "Color", "Número de flores que ves", "Dibujo"],
          info: ["Forma ramilletes de flores al final de tallos altos.", "Suele ser azul, lila o morado claro.", "Es elegante y muy fácil de reconocer."],
          care: ["Le gusta la luz abundante.", "Necesita riego regular, sin encharcar.", "Se desarrolla bien en jardines soleados."]
        },
        {
          id: "menta",
          name: "Menta",
          targetWord: "MENTA",
          sheetIndex: 3,
          clue: "Busca una planta de hojas verdes que huela fresco. Pide permiso antes de tocarla u olerla.",
          mysteryLearn: "La menta es una planta aromática. Sus hojas suelen oler frescas y agradables.",
          notebook: ["Nombre", "Olor", "Forma de la hoja", "Dibujo"],
          info: ["Es una planta aromática muy conocida.", "Sus hojas desprenden un olor fresco.", "Se usa a menudo en infusiones y recetas."],
          care: ["Agradece riego frecuente.", "Le gusta la tierra fresca.", "Mejor si tiene luz pero sin calor extremo todo el día."]
        },
        {
          id: "hierbabuena",
          name: "Hierbabuena",
          targetWord: "HIERBABUENA",
          sheetIndex: 4,
          clue: "Busca una planta parecida a la menta, también con olor fresco. Compara sus hojas con las de la menta.",
          mysteryLearn: "La hierbabuena es otra planta aromática. Se parece a la menta, pero no es exactamente la misma.",
          notebook: ["Nombre", "Olor", "¿Se parece a la menta?", "Dibujo"],
          info: ["También es una planta aromática.", "Se parece a la menta y puede confundirse con ella.", "Sus hojas son verdes y olorosas."],
          care: ["Necesita riego frecuente.", "Agradece un lugar luminoso.", "Crece mejor si la tierra no se seca del todo."]
        },
        {
          id: "rosa",
          name: "Rosa",
          targetWord: "ROSA",
          sheetIndex: 5,
          clue: "Busca una flor con pétalos suaves. Puede ser amarilla, blanca, rosa o de otro color. Cuidado: puede tener espinas.",
          mysteryLearn: "Las rosas tienen pétalos y a veces espinas. Hay rosas de muchos colores.",
          notebook: ["Nombre", "Color", "¿Tiene espinas?", "Dibujo"],
          info: ["Es una de las flores más famosas del jardín.", "Puede tener muchos pétalos y colores distintos.", "En sus tallos puede haber espinas."],
          care: ["Necesita buena luz.", "Conviene regarla sin encharcar.", "Hay que tener cuidado al tocarla por las espinas."]
        },
        {
          id: "acebo",
          name: "Acebo",
          targetWord: "ACEBO",
          sheetIndex: 8,
          clue: "Busca una planta con hojas duras, brillantes y con bordes que pueden pinchar.",
          mysteryLearn: "El acebo suele tener hojas brillantes y duras. Algunas hojas tienen pinchos en el borde.",
          notebook: ["Nombre", "Cómo son sus hojas", "¿Pinchan?", "Dibujo"],
          info: ["Tiene hojas verdes oscuras y brillantes.", "Los bordes de sus hojas pueden pinchar.", "Es una planta fácil de distinguir por su forma."],
          care: ["Le gusta estar al aire libre.", "Necesita riego moderado.", "Mejor observarlo sin manipular demasiado sus hojas."]
        },
        {
          id: "hiedra",
          name: "Hiedra",
          targetWord: "HIEDRA",
          sheetIndex: 9,
          clue: "Busca una planta que trepa o se extiende por paredes, suelo, troncos o muros.",
          mysteryLearn: "La hiedra es una planta trepadora. Se agarra y crece extendiéndose por superficies.",
          notebook: ["Nombre", "Dónde crece", "Forma de la hoja", "Dibujo"],
          info: ["Es una planta trepadora.", "Puede cubrir muros, troncos o suelos.", "Sus hojas suelen tener una forma muy reconocible."],
          care: ["Aguanta bien en exterior.", "Necesita riego moderado.", "Hay que vigilar por dónde se extiende porque crece bastante."]
        }
      ]
    },
    { id: "planetas", name: "Observatorio Espacial", icon: "🪐", status: "locked", description: "Próximamente", homeImage: "assets/world_observatorio_locked.png" },
    { id: "geografia", name: "Mapa del Mundo", icon: "🌍", status: "locked", description: "Próximamente", homeImage: "assets/world_mapa_locked.png" },
    { id: "cuentos", name: "Biblioteca Encantada", icon: "📚", status: "locked", description: "Próximamente", homeImage: "assets/world_biblioteca_locked.png" },
    { id: "arte", name: "Galería de Arte", icon: "🎨", status: "locked", description: "Próximamente", homeImage: "assets/world_galeria_locked.png" },
    { id: "historia", name: "Máquina del Tiempo", icon: "🏰", status: "locked", description: "Próximamente", homeImage: "assets/world_tiempo_locked.png" }
  ],
  wordBank: [
    { word: "SOL", display: "S _ L", answer: "O", options: ["O", "A", "E"], syllables: 1 },
    { word: "HOJA", display: "H _ J A", answer: "O", options: ["O", "U", "A"], syllables: 2 },
    { word: "FLOR", display: "F L _ R", answer: "O", options: ["A", "O", "E"], syllables: 1 },
    { word: "AGUA", display: "A G _ A", answer: "U", options: ["U", "O", "I"], syllables: 2 },
    { word: "LUZ", display: "L _ Z", answer: "U", options: ["A", "U", "E"], syllables: 1 },
    { word: "RAÍZ", display: "R _ Í Z", answer: "A", options: ["A", "O", "E"], syllables: 2 },
    { word: "TALLO", display: "T A L L _", answer: "O", options: ["O", "A", "U"], syllables: 2 },
    { word: "PLANTA", display: "P L A N T _", answer: "A", options: ["A", "E", "O"], syllables: 2 },
    { word: "SEMILLA", display: "S E M _ L L A", answer: "I", options: ["I", "A", "O"], syllables: 3 },
    { word: "JARDÍN", display: "J A R D _ N", answer: "Í", options: ["Í", "A", "O"], syllables: 2 },
    { word: "MENTA", display: "M E N T _", answer: "A", options: ["A", "O", "E"], syllables: 2 },
    { word: "HIEDRA", display: "H I E D R _", answer: "A", options: ["A", "E", "O"], syllables: 2 },
    { word: "ACEBO", display: "A C E B _", answer: "O", options: ["O", "U", "A"], syllables: 3 },
    { word: "ROSA", display: "R _ S A", answer: "O", options: ["A", "O", "E"], syllables: 2 },
    { word: "MACETA", display: "M A C E T _", answer: "A", options: ["A", "E", "I"], syllables: 3 },
    { word: "ABEJA", display: "A B _ J A", answer: "E", options: ["E", "A", "O"], syllables: 3 },
    { word: "MARIPOSA", display: "M A R I P _ S A", answer: "O", options: ["O", "A", "E"], syllables: 4 },
    { word: "AGAPANTO", display: "A G A P A N T _", answer: "O", options: ["O", "A", "U"], syllables: 4 },
    { word: "HORTENSIA", display: "H O R T E N S _ A", answer: "I", options: ["I", "A", "E"], syllables: 3 },
    { word: "HIERBABUENA", display: "H I E R B A B U E N _", answer: "A", options: ["A", "O", "I"], syllables: 5 },
    { word: "BOJ", display: "B _ J", answer: "O", options: ["O", "A", "U"], syllables: 1 }
  ],
  objectBank: [
    { singular: "hoja", plural: "hojas", emoji: "🍃" },
    { singular: "flor", plural: "flores", emoji: "🌸" },
    { singular: "semilla", plural: "semillas", emoji: "🫘" },
    { singular: "gota", plural: "gotas", emoji: "💧" },
    { singular: "abeja", plural: "abejas", emoji: "🐝" },
    { singular: "mariposa", plural: "mariposas", emoji: "🦋" },
    { singular: "maceta", plural: "macetas", emoji: "🪴" },
    { singular: "pétalo", plural: "pétalos", emoji: "🌼" }
  ],
  sentenceBank: [
    { text: "LA FLOR ES ROSA.", words: 4 },
    { text: "LA HOJA ES VERDE.", words: 4 },
    { text: "MARTINA RIEGA LA PLANTA.", words: 4 },
    { text: "EL SOL DA LUZ.", words: 4 },
    { text: "LA SEMILLA CRECE.", words: 3 },
    { text: "LA ABEJA VUELA.", words: 3 },
    { text: "LA MENTA HUELE BIEN.", words: 4 },
    { text: "LA HIEDRA TREPA.", words: 3 },
    { text: "LA ROSA ES AMARILLA.", words: 4 },
    { text: "EL BOJ TIENE HOJAS.", words: 4 },
    { text: "EL AGAPANTO TIENE FLORES.", words: 4 },
    { text: "LA HORTENSIA ES GRANDE.", words: 4 }
  ],
  exerciseCycle: ["add", "word", "subtract", "count", "syllables", "sentence", "previousNext", "add", "word", "subtract"]
};
