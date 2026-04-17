/**
 * data.js — Fuente única de datos del sitio Isma Rivera
 * Editá aquí para actualizar discos, libros, videos, contacto y redes.
 */

const DATA = {
  // ── DISCOS ────────────────────────────────────────────────
  albums: [
    {
      title: "La última cena de los buitres",
      year: 2019,
      description: "Primer disco solista de Isma Rivera.",
      image: "./assets/img/discos/ultimacena.png",
      spotify:
        "https://open.spotify.com/intl-es/album/6CtCJ71uUcKSs59ZmALo08?si=vQ_4hc5oQPex5WhYBRHzwQ",
      bandcamp: "selloprecario.bandcamp.com/album/la-ltima-cena-de-los-buitres",
      resena:
        "Primer disco solista de Isma Rivera. Una propuesta que combina escritura, voz y experimentación sonora, cruzando el punk con la tradición folclórica latinoamericana.",
      tracklist: [
        {
          numero: 1,
          titulo: "La última cena de los buitres",
          duracion: "4:12",
          letra: `Dile a la muerte que sentado la espero
          con el humo compañía en los rincones
          con los ojos negras chispas
          con las manos fuego negro.
          Dile a la muerte que dios no viene al baile
          con su banquete preparado hambre viene
          con el ciego inmasticable
          con la sed de la carroña.

          Dile a la muerte que no hay hijos del miedo
          que se vista con sus nombres, dile puntual
          que prepare mueca triste
          con el llanto piedra en mano.
          Dile a la muerte que bailando la espero
          con el sudor de traje en la piel desnuda
          con la sangre hecha jirones
          con la tinta de mis cuerpos.
          Será el descuelgue de los sin nombre
          será el roncar de los gritos
          caudal del que rió la rabia y arrasó el camino.
          Pies descalzos en el precipicio, como cabras
          seremos el riesgo que habita en el risco.`,
        },
        {
          numero: 2,
          titulo: "Sin importar cuán grande sea la bandera",
          duracion: "0.12",
          letra: `Sin importar cuán grande sea
la bandera
jamás podrá cubrir su propio charco
de sangre.`,
        },
        {
          numero: 3,
          titulo: "A mí también me duele Chile",
          duracion: "3:38",
          letra: `A mí también me duele Chile
su sombra neoliberal proyectada
en televisores cavernas, sus universidades
moldeadoras de mano de obra intelectual
sus ropas tendidas
esperando al tiempo.
A mí también me duele Chile
mi patriotismo cuando el fútbol y no más
mi desconfianza policiática
oculta tras el polvo de moneda
mi insomnio ideológico
cultivado en memorias ajenas
mis oídos incrédulos.

A mí también me duele Chile
tu absoluta falta
de médula conducta
tu palabra voluble
en intolerancia gráfica
y geográfica
tu pliegue tensado
por polos morales
marchitos.`,
        },
        {
          numero: 4,
          titulo: "Exhumar con la escritura",
          duracion: "1:31",
          letra: `Los años han hecho que la tierra ostente su dureza
pisadas tantas, militares y civiles, de la esquina y la
academia
redujeron las palabras al ombligo de sí mismas.
Por montones escasean los huemules, pero abundan
solitarias
colas de avestruces asomando en el horizonte
estatuas de sal con la cabeza y los oídos cerrados.
Dónde fueron las manos dejándose las uñas
al intentar desenterrar un sentido
posible al horror y entender que es más
mucho más que su ronquido y sus ojos abiertos.
El lenguaje es cartílago
aperitivo de lombrices apenas
cuando sirve a su vanidad.

Pero es hueso el lenguaje
es la única justicia posible
en la lengua de las muertas
es testigo, recuerdo y porfía
en la lengua de los muertos.
Hunde las garras, no la cabeza avestruz
y cava aquí y allá cava también

que no hay número ni palabra para decir
cuántos nos faltan
cuántas nos faltan
no dejes la palabra de carroña a los buitres,
siempre con hambre
vendrán después por ti
y cava allá y aquí cava también
que la tierra donde escondes tu cabeza
solo conoce el sabor metálico de la sangre.`,
        },
        {
          numero: 5,
          titulo: "La tormenta",
          duracion: "1:52",
          letra: `El rayo se vuelve trueno,
el trueno se vuelve rayo
Y truena en el cielo el viento
como un tropel de caballos.
Truenan los potros, Padre
Palos y piedras
Y un relámpago negro
desata hiedras.

Desata hiedras, sí,
zaranda y zumba
¡Mira al rayo, arrasando
piedras y tumbas!
¡Ronca que ronca el rayo
de los caballos!`,
        },
        {
          numero: 6,
          titulo: "Letras en la llaga",
          duracion: "3:55",
          letra: `Letra de fantasía.

En el umbral del tiempo detenido
las palabras se vuelven ceniza fría,
cada sílaba un río contenido
que busca cauce en la melancolía.

No hay muro que resista la memoria
ni olvido que no tenga su fisura,
la llaga guarda toda nuestra historia
y en ella escribe el tiempo su escritura.`,
        },
        {
          numero: 7,
          titulo: "Canción del simple",
          duracion: "3:21",
          letra: `Letra de fantasía.

Simple como el agua que desciende
simple como el viento en la llanura,
el corazón que busca y no comprende
la extraña geometría de la altura.

Todo lo que fue se vuelve sombra
todo lo que es se vuelve lo que fue,
y en esa danza que al final nos nombra
aprendemos a ser lo que no sé.`,
        },
        {
          numero: 8,
          titulo: "La marcha de los sin nombre",
          duracion: "4:44",
          letra: `Letra de fantasía.

Marchan los que nunca tuvieron bandera
marchan los que el tiempo borró del mapa,
su voz es el eco de una primavera
que ningún invierno del todo tapa.

Son la raíz que nadie ve ni nombra
son el silencio antes del grito claro,
marchan envueltos en su propia sombra
hacia un amanecer que aún es raro.`,
        },
        {
          numero: 9,
          titulo: "El festín",
          duracion: "3:38",
          letra: `Letra de fantasía.

Siéntate a la mesa del festín eterno
donde los comensales son de hueso y viento,
prueba el vino amargo del invierno
y el pan cocido al fuego del tormento.

Nadie sale intacto del banquete
nadie sale igual de la función,
la noche siempre cobra su jinete
y el alba siempre pide su porción.`,
        },
      ],
    },
    {
      title: "El Silencio",
      year: 2022,
      description: "Sencillo",
      image: "./assets/img/discos/el_silencio.png",
      spotify: "https://open.spotify.com/intl-es/album/292XdmKQX3BFwkFgs2jecB",
      bandcamp: "https://ismarivera.bandcamp.com/album/el-silencio",
      resena: "Sencillo de 2022.",
      tracklist: [
        {
          numero: 1,
          titulo: "El Silencio",
          duracion: "3:50",
          letra: `Letra de fantasía.

El silencio tiene dientes
el silencio tiene manos,
el silencio es más urgente
que los gritos más lejanos.

Cuando todo calla adentro
cuando afuera ruge el mundo,
el silencio es un encuentro
con lo propio más profundo.`,
        },
      ],
    },
    {
      title: "Errantes",
      year: 2015,
      description: "Desbautízame",
      image: "/assets/img/discos/errantes.png",
      spotify: "https://open.spotify.com/album/ejemplo3",
      bandcamp: "https://selloprecario.bandcamp.com/album/desbaut-zame",
      resena: "Disco del proyecto Errantes.",
      tracklist: [
        {
          numero: 1,
          titulo: "Errante I",
          duracion: "4:10",
          letra: `Letra de fantasía.

Errante por los bordes de la patria
errante por los márgenes del río,
cargando con la herencia de una hazaña
que nadie reclamó bajo este frío.`,
        },
        {
          numero: 2,
          titulo: "Errante II",
          duracion: "3:55",
          letra: `Letra de fantasía.

El camino no pregunta de dónde vienes
el camino solo sabe que estás yendo,
y entre los pies y el polvo que sostienes
vas dejando lo que fuiste construyendo.`,
        },
        {
          numero: 3,
          titulo: "Desbautízame",
          duracion: "5:12",
          letra: `Letra de fantasía.

Desbautízame del nombre que me dieron
desbautízame del miedo que sembraron,
que caigan los apellidos que me pusieron
y quede lo que soy tras lo que borraron.`,
        },
      ],
    },
  ],

  // ── VIDEOS ────────────────────────────────────────────────
  videos: [
    {
      youtubeId: "K0JE1jFJG4w",
      title: "La última cena de los buitres",
      year: 2019,
      shortDesc:
        "Video oficial inspirado en la canción que abre el disco homónimo de Isma Rivera. Colección «Videos Precarios». Sello Precario 2019.",
      longDesc:
        "Sobre un escenario sórdido comen y beben personajes paganos de todos los tiempos. Un ojo agudo observa atento y distante el momento. Lo registra en su retina como un álbum de fotos que devela poco a poco un secreto.",
      credits: [
        {
          rol: "Realización",
          nombre:
            "Daniel Jesús Díaz — «La Pieza Oscura», estudio andante. Marzo 2019, entre Ñuñoa, Santiago y Copiapó, Atacama, Chile.",
        },
        { rol: "Autor e interpretación", nombre: "Ismael Rivera L." },
        {
          rol: "Compositores",
          nombre: "Paloma Soto, Cristián «Gato» Olea e Ismael Rivera",
        },
        {
          rol: "Guitarra eléctrica",
          nombre: "Cristián «Gato» Olea — arreglos e interpretación",
        },
        {
          rol: "Bajo, guitarra rítmica, base y teclado",
          nombre: "Daniel Jesús Díaz — arreglos e interpretación",
        },
        {
          rol: "Producción, grabación, mezcla y masterización",
          nombre:
            "Daniel Jesús Díaz — «La Pieza Oscura», estudio andante. San Miguel, Copiapó y Bahía Inglesa, Chile.",
        },
      ],
    },
    {
      youtubeId: "G89Pbwi0TlE",
      title: "A mí también me duele Chile",
      year: 2019,
      shortDesc:
        "Video oficial inspirado en el 2do sencillo del disco «La última cena de los buitres» de Isma Rivera. Colección «Videos Precarios». Sello Precario 2019.",
      longDesc: "",
      credits: [
        { rol: "Dirección y cámara", nombre: "Maritza Farías Cerpa" },
        { rol: "Corrección de color", nombre: "Violeta Paus" },
        { rol: "Fotografía", nombre: "Carla Motto Tejada" },
        { rol: "Protagonista", nombre: "Mónica Ríos Contreras" },
        { rol: "Letra y arreglos de voz", nombre: "Ismael Rivera L." },
        {
          rol: "Composición, arreglos, interpretación, grabación y producción",
          nombre: "Daniel Jesús Díaz — «La pieza oscura», estudio andante",
        },
      ],
    },
    {
      youtubeId: "Od2zkAa2_q4",
      title: "Pelea de perros",
      year: 2020,
      shortDesc:
        "Video ensamble artístico. Se conjugan música, poesía, documentación audiovisual y obra visual. Canción del disco «La última cena de los buitres» (Sello Precario, 2019).",
      longDesc: "",
      credits: [
        { rol: "Autora e idea original", nombre: "Daniela Castillo C." },
        {
          rol: "Realizadores",
          nombre: "Isma Rivera, Claudio Meza, Daniela Castillo C.",
        },
        { rol: "Música", nombre: "Daniel Jesús Díaz" },
        { rol: "Poesía y voz", nombre: "Isma Rivera" },
        { rol: "Documentación audiovisual", nombre: "Claudio Meza" },
        { rol: "Fecha", nombre: "21 de noviembre de 2020" },
      ],
    },
    {
      youtubeId: "uJBwLT5c1RE",
      title: "Canción del simple",
      year: 2019,
      shortDesc:
        "Video oficial inspirado en el 4to sencillo del disco «La última cena de los buitres» de Isma Rivera. Canción original del trovador cubano Freddy Laffita. Sello Precario, 2019.",
      longDesc: "",
      credits: [
        { rol: "Dirección y cámara", nombre: "Maritza Farías Cerpa" },
        { rol: "Corrección de color", nombre: "Daniela Castillo Cortéz" },
        { rol: "Fotografía", nombre: "Carla Motto Tejada" },
        { rol: "Protagonista", nombre: "Carolina Jullian Suárez" },
        { rol: "Composición y letra", nombre: "Freddy Laffita" },
        { rol: "Voz", nombre: "Ismael Rivera L." },
        {
          rol: "Arreglos, interpretación, grabación y producción",
          nombre: "Ramírez Neira — «La pieza oscura», estudio andante",
        },
      ],
    },
  ],

  // ── LIBROS ────────────────────────────────────────────────
  books: [
    {
      title: "Desbautízame",
      year: 2015,
      type: "Poesía",
      image: "./assets/img/libros/desbautizamelibro.png",
      resena:
        "El poemario plantea un gesto de ruptura: enfrentarse a Dios desde la igualdad, no desde la sumisión. Desbautizarse es afirmar libertad sin poder desprenderse del pasado. La experiencia deja de ser individual y se vuelve generacional, marcada por la tensión permanente entre lo humano y lo divino. Por Luis Aránguiz",
      comprar: "",
      poemas: [
        {
          titulo: "Letras en la llaga",
          texto: `Do you have enough bone-broken limbs to cover the sun?
          Hand me over your dead and give me the list of their names
          in one thousand two hundred word limit.
          Today, my body was a TV d massacre that had to fit into sound-bites
          and word limits and moves those that are desensitized to terrorist blood.
          (Rafeef Ziadah)
          Mi nombre está marcado por el fuego
          de doce tribus como doce semillas
          quemadas por el fósforo blanco
          Mi nombre está marcado por la guerra
          el odio al padre, el desprecio del hijo
          la lucha de clanes
          con manos de sangre.
          
          Mi nombre está marcado por el huacho
          aquel forzado a partir lejos
          el abandonado en la orilla contraria
          frente a la arena cristiana.
          
          Mi nombre está marcado por la tierra
          del gitano sediento de vida
          niño bastardo expuesto a filo de cuchillo.
          
          ¡Agar madre esclava!
          No pudieron con tu fuerza
          nada consiguieron con el destierro
          de una madre y su hijo
          de la estrella nación.
        tigres fuimos
        somos tigres
        habitamos el desierto.`,
        },
        {
          titulo: "Desbautízame",
          texto: `Me niegas la caída al pozo
          a manos de este yo cansado
          aun cuando es claro que es tarde
          que como resonaron las palabras de otro
          no merece la pena matarse, siempre
          lo hace uno demasiado tarde.
          
          carnada entre buitres hambrientos.
          
          Se entregó su cuerpo al látigo
          con la docilidad del clavo
          o del suicidio implacable:
          la espina.
          Lo asististe —hipócrita de hipócritas—
          en su frente. No me digas
          que ese pobre es tu hijo.
          
          Y entre adorar y orar te dieron oro.
          
          Cruzaste la vereda sobre la cruz de tu hijo
          condenas el autosacrificio
          te sentaste a la mesa de los llenos
          engulliste manjares
          
          manchados de sangre salada, las costras
          de los que no aceptamos cruzar
          de los que damos el pellejo cuando cruje
          serán astillas en sus tráqueas.
          
          Han parido en un lugar del Edén
          el génesis de este rojo apocalipsis.
          
          Nada más podrá nacer de la tierra que el polvo
          tu regalo fue el frío y el olvido
          la piedra que no suda ni llora
          la mancha en la sotana, la culpa
          Pero arrojaste a tu hijo a cargarla
          del vacío ante el plato de comida.`,
        },
      ],
    },
    {
      title: "Tizne",
      year: 2019,
      type: "Poesía",
      image: "./assets/img/libros/tizne.png",
      resena:
        "El libro gira en torno a la imagen del tizne como huella que mancha y oculta, pero también revela una violencia latente. Más que una denuncia directa, la escritura sugiere una herida en la dignidad humana, utilizando la poesía como espacio de insinuación antes que de afirmación explícita. Por Verónica Jiménez Dotte",
      comprar: "",
      poemas: [
        {
          titulo: "Sin titulo",
          texto: `Sin importar cuán grande
          sea la bandera
          jamás podrá cubrir
          su propio charco
          de sangre.`,
        },
        {
          titulo: "Sin titulo",
          texto: `¿Se puede hacer una fiesta escondiendo
          a los muertos bajo la alfombra?
          Pregunta el desdentado
          Con los rieles en los pies.`,
        },
      ],
    },
    {
      title: "Rincones",
      year: 2010,
      type: "Poesía",
      image: "./assets/img/libros/rincones.png",
      resena:
        "El prólogo construye una metáfora donde la araña representa una lucha contra el tiempo y la muerte. Su tejido no es solo supervivencia, sino estrategia: un intento constante por retrasar el final. El libro se instala así en una tensión entre lo inevitable y su postergación. Por Rafael Rubio",
      comprar: "",
      poemas: [
        {
          titulo: "Sin Titulo",
          texto: `“A veces me siento 
          una araña colgando  de un único hilo 
          en el viento aferrado 
          para no caer otra vez 
          en la tristeza.”`,
        },
        {
          titulo: "Irónico",
          texto: `Es irónico que la ironía sea
          pero es patético que el cinismo sea
          el arma del irónico sin convicción.
          Me considero patéticamente cínico:
          el arma del cínico sin argumentos
          una ironía.`,
        },
      ],
    },
    {
      title: "Colonia Penal",
      year: 2023,
      type: "Poesía",
      image: "./assets/img/libros/coloniapenal.png",
      resena:
        "El libro trabaja sobre la memoria y la ausencia, devolviendo voz a cuerpos silenciados por la historia reciente. Construye una imagen fragmentada del encierro —isla, colonia, celda, cuerpo— donde el lenguaje intenta resistir el olvido. Es un gesto de duelo y testimonio que insiste en recordar lo que se quiso borrar.",
      comprar: "",
      poemas: [
        {
          titulo: "Sin titulo",
          texto: `Los acantilados son una invitación gentil
          Saltar por voluntad propia
          devolver a la carne la dignidad del vuelo.
          Dicen que el corazón colapsa antes del encuentro.
          Cuentan seis segundos eternos quienes han visto
          para los oídos que lo precisan.
          el descenso a las piedras.`,
        },
        {
          titulo: "Sin titulo",
          texto: `Esta isla quiso también escapar de su encierro continente.
          la tensión incrustada en la piedra
          en la palabra que nos despedaza por orden de la otra orilla
          sentencia de quienes no se atreven a mirar el color de la carne.
          Esta isla quiso ser más que un matadero
          mucho más que la escritura del castigo.
          En su intento de escape estuvo su condena.
          Un surco testifica su escape y la ata a su pasado
          
          Una isla te rodea como el mar que la circunda.`,
        },
        {
          titulo: "Sin titulo",
          texto: `El cuerpo es una caja de resonancia 
          sigue hablando tras el silencio
          por eso se calla al cuerpo
          hundido en el olvido
          estallado en la piedra.
          
          Susurre la espuma justicia.`,
        },
      ],
    },
  ],

  // ── CONTACTO Y REDES ──────────────────────────────────────
  contact: {
    email: "contacto@ismarivera.com",
    whatsapp: "56912345678",
    instagram: "https://instagram.com/ismarivera",
    youtube: "https://youtube.com/@ismarivera",
    bandcamp: "https://ismarivera.bandcamp.com",
    spotify: "https://open.spotify.com/intl-es/artist/1m1mEMI4Yw5jr8aoguhgy8",
  },

  // ── SITIO ─────────────────────────────────────────────────
  site: {
    title: "Isma Rivera",
    subtitle: "Poeta Cantor",
  },
};

window.ISMA_DATA = DATA;
