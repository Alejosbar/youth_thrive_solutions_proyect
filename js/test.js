const tests = {
  habilidades: [
    // Comunicación
    { question: "Cuando necesitas dar feedback a un compañero, ¿cómo lo haces?", options: ["Evito dar feedback para no ofender", "Lo digo directamente, sin rodeos", "Busco un momento privado y uso un lenguaje constructivo", "Envío un correo electrónico impersonal"], correct: 2, category: "Comunicación" },
    { question: "En una reunión, si no estás de acuerdo con una idea, ¿qué haces?", options: ["Me quedo en silencio", "Interrumpo para expresar mi desacuerdo", "Espero mi turno para hablar y presento mis argumentos con respeto", "Muestro mi desacuerdo con gestos"], correct: 2, category: "Comunicación" },
    { question: "Al recibir instrucciones complejas, ¿cuál es tu reacción?", options: ["Asumo que entendí todo", "Pido que me lo repitan varias veces", "Hago preguntas para aclarar dudas y resumo para confirmar", "Me siento abrumado y no pregunto"], correct: 2, category: "Comunicación" },
    { question: "¿Con qué frecuencia compartes información relevante con tu equipo?", options: ["Solo si me lo piden", "Constantemente, incluso si no es relevante", "De forma proactiva cuando es útil para el equipo", "Casi nunca, prefiero guardármela"], correct: 2, category: "Comunicación" },

    // Trabajo en Equipo
    { question: "Un miembro de tu equipo está atrasado con su parte del proyecto. ¿Qué haces?", options: ["Me quejo con mi superior", "Hago su trabajo para no retrasar al resto", "Le ofrezco mi ayuda y buscamos una solución juntos", "Lo ignoro, es su responsabilidad"], correct: 2, category: "Trabajo en Equipo" },
    { question: "Al iniciar un proyecto en grupo, ¿qué es lo primero que haces?", options: ["Empezar a trabajar en mi parte inmediatamente", "Esperar a que alguien más organice el trabajo", "Proponer una reunión para definir roles, objetivos y plazos", "Tomar el control y asignar tareas sin consultar"], correct: 2, category: "Trabajo en Equipo" },
    { question: "Si hay un conflicto entre dos compañeros, ¿cómo actúas?", options: ["Tomo partido por uno de ellos", "Me mantengo al margen para no involucrarme", "Intento mediar para que encuentren un punto en común", "Fomento la discusión para que se resuelva rápido"], correct: 2, category: "Trabajo en Equipo" },
    { question: "Valora tu disposición para aceptar ideas de otros en un proyecto grupal.", options: ["Prefiero que se haga a mi manera", "Acepto las ideas de otros solo si coinciden con las mías", "Escucho y valoro todas las ideas, aunque sean diferentes", "Dejo que los demás decidan todo"], correct: 2, category: "Trabajo en Equipo" },

    // Resolución de Problemas
    { question: "Te enfrentas a un problema inesperado que afecta tu trabajo. ¿Qué haces?", options: ["Entro en pánico y no sé por dónde empezar", "Busco a alguien que lo resuelva por mí", "Analizo la situación, identifico las causas y planteo posibles soluciones", "Aplico la primera solución que se me ocurre"], correct: 2, category: "Resolución de Problemas" },
    { question: "Cuando una solución que implementaste no funciona, ¿cómo reaccionas?", options: ["Me frustro y abandono el problema", "Insisto con la misma solución una y otra vez", "Analizo por qué falló y pruebo un enfoque diferente", "Culpó a factores externos"], correct: 2, category: "Resolución de Problemas" },
    { question: "Prefieres trabajar en tareas que...", options: ["Son rutinarias y no presentan desafíos", "Tienen instrucciones claras y detalladas", "Requieren pensamiento crítico y creatividad para ser resueltas", "Son imposibles de resolver"], correct: 2, category: "Resolución de Problemas" },
    { question: "Ante un recurso limitado (tiempo, presupuesto), ¿cómo abordas una tarea?", options: ["Reduzco la calidad para cumplir", "Pido más recursos sin justificarlo", "Priorizo las tareas más importantes y optimizo el uso del recurso", "Me quejo de la falta de recursos"], correct: 2, category: "Resolución de Problemas" },

    // Liderazgo
    { question: "En un grupo sin un líder asignado, ¿tiendes a tomar la iniciativa?", options: ["Nunca, prefiero seguir a otros", "A veces, si nadie más lo hace", "Frecuentemente, me siento cómodo organizando y motivando al grupo", "Siempre, e impongo mis ideas"], correct: 2, category: "Liderazgo" },
    { question: "Un miembro del equipo está desmotivado. ¿Qué harías?", options: ["Ignorarlo, su motivación es su problema", "Decirle que debe mejorar su actitud", "Hablar con él para entender sus preocupaciones y ofrecerle apoyo", "Informar a un superior para que tome medidas"], correct: 2, category: "Liderazgo" },
    { question: "A la hora de tomar una decisión importante para el equipo, ¿qué haces?", options: ["La tomo yo solo para ser más rápido", "Dejo que el equipo decida por votación sin dar mi opinión", "Fomento la discusión, escucho todas las opiniones y luego tomo una decisión informada", "Evito tomar la decisión"], correct: 2, category: "Liderazgo" },
    { question: "¿Cómo reaccionas cuando tu equipo alcanza un objetivo?", options: ["Lo considero normal, es su trabajo", "Me atribuyo el mérito del éxito", "Reconozco y celebro el esfuerzo de todo el equipo", "Inmediatamente asigno la siguiente tarea sin comentarios"], correct: 2, category: "Liderazgo" },

    // Adaptabilidad
    { question: "La empresa introduce una nueva herramienta de software. ¿Cuál es tu actitud?", options: ["Me quejo del cambio y tardo en usarla", "La uso a regañadientes, prefiriendo el método antiguo", "Me intereso por aprender a usarla y exploro sus beneficios", "Espero a que sea absolutamente obligatorio para aprender"], correct: 2, category: "Adaptabilidad" },
    { question: "Te cambian de rol o de proyecto inesperadamente. ¿Cómo lo tomas?", options: ["Me resisto y expreso mi descontento", "Siento mucha ansiedad y mi rendimiento baja", "Lo veo como una oportunidad para aprender algo nuevo y me adapto", "Acepto sin decir nada, pero internamente estoy molesto"], correct: 2, category: "Adaptabilidad" },
    { question: "El mercado cambia y las prioridades de tu trabajo se modifican. ¿Qué haces?", options: ["Sigo trabajando en las prioridades antiguas", "Me siento perdido y no sé qué hacer", "Reajusto mi plan de trabajo para alinearlo con las nuevas prioridades", "Pido que me digan exactamente qué hacer paso a paso"], correct: 2, category: "Adaptabilidad" },
    { question: "Recibes críticas constructivas sobre tu trabajo. ¿Cómo reaccionas?", options: ["Me pongo a la defensiva", "Me siento mal y dudo de mis capacidades", "Agradezco el feedback y lo uso para mejorar", "Ignoro las críticas"], correct: 2, category: "Adaptabilidad" },

    // Gestión del Tiempo
    { question: "Tienes varias tareas urgentes. ¿Cómo decides por cuál empezar?", options: ["Por la más fácil", "Por la que más me gusta", "Priorizo según su impacto y fecha límite", "Empiezo varias a la vez sin un orden claro"], correct: 2, category: "Gestión del Tiempo" },
    { question: "Para organizar tu día de trabajo, ¿qué método usas?", options: ["No uso ningún método, voy improvisando", "Tengo una idea mental de lo que debo hacer", "Uso una lista de tareas (to-do list) o un calendario para planificar", "Dejo que los correos y las interrupciones dicten mi día"], correct: 2, category: "Gestión del Tiempo" },
    { question: "¿Cómo manejas las distracciones (redes sociales, notificaciones) mientras trabajas?", options: ["Me dejo llevar por ellas constantemente", "Lucho contra ellas, pero a menudo pierdo", "Establezco bloques de tiempo para concentrarme y silencio las notificaciones", "Creo que no me afectan"], correct: 2, category: "Gestión del Tiempo" },
    { question: "Cuando se acerca una fecha de entrega, ¿cómo te sientes?", options: ["Suelo trabajar a última hora bajo mucho estrés", "Me agobio y mi calidad de trabajo disminuye", "Normalmente tengo el trabajo avanzado y hago los ajustes finales", "A menudo no cumplo con las fechas de entrega"], correct: 2, category: "Gestión del Tiempo" },
  ],
  socioeconomico: [
    // Educación y Capacitación
    { question: "¿Cuál es tu máximo nivel de estudios finalizado?", options: ["Primaria o ninguna", "Secundaria", "Técnico o tecnólogo", "Universitario o postgrado"], scores: [1, 2, 3, 4], category: "Educación y Capacitación" },
    { question: "En el último año, ¿has realizado algún curso o capacitación para mejorar tus habilidades laborales?", options: ["Ninguno", "Uno", "Dos o tres", "Más de tres"], scores: [1, 2, 3, 4], category: "Educación y Capacitación" },
    { question: "¿Te sientes seguro con tus habilidades para el trabajo que buscas?", options: ["No, siento que me falta mucho", "Más o menos, podría mejorar", "Sí, me siento competente", "Sí, y además aprendo rápido nuevas habilidades"], scores: [1, 2, 3, 4], category: "Educación y Capacitación" },
    { question: "¿Consideras que el acceso a la educación ha sido un obstáculo para ti?", options: ["Sí, un obstáculo muy grande", "Sí, algo limitante", "No, he tenido las oportunidades que he necesitado", "No, y he buscado activamente oportunidades adicionales"], scores: [1, 2, 3, 4], category: "Educación y Capacitación" },

    // Situación Laboral
    { question: "¿Cuál es tu situación laboral actual?", options: ["Desempleado por más de 6 meses", "Desempleado por menos de 6 meses", "Trabajo informal o por horas", "Trabajo formal a tiempo completo/parcial"], scores: [1, 2, 3, 4], category: "Situación Laboral" },
    { question: "La mayor parte de tu experiencia laboral ha sido:", options: ["Sin experiencia o en trabajos no calificados", "En trabajos con contratos temporales", "En trabajos estables pero fuera de mi área de interés", "En trabajos estables y relacionados con mi carrera"], scores: [1, 2, 3, 4], category: "Situación Laboral" },
    { question: "¿Cuentas con una red de contactos profesionales que te pueda ayudar a encontrar empleo?", options: ["No tengo a nadie a quien recurrir", "Tengo algunos amigos o familiares", "Conozco a algunas personas en mi sector", "Tengo una red de contactos activa y en crecimiento"], scores: [1, 2, 3, 4], category: "Situación Laboral" },
    { question: "¿Recibes algún tipo de prestación social en tu trabajo actual (salud, pensión, etc.)?", options: ["No, ninguna", "Solo algunas", "Sí, las de ley", "Sí, y beneficios adicionales"], scores: [1, 2, 3, 4], category: "Situación Laboral" },

    // Estabilidad Financiera
    { question: "El ingreso total de tu hogar alcanza para cubrir los gastos básicos (comida, arriendo, servicios)?", options: ["Nunca o casi nunca", "A veces, con dificultad", "Generalmente sí", "Sí, y además podemos ahorrar"], scores: [1, 2, 3, 4], category: "Estabilidad Financiera" },
    { question: "¿Tienes capacidad de ahorro mensual?", options: ["No, es imposible ahorrar", "Ahorro una cantidad muy pequeña e irregularmente", "Intento ahorrar una cantidad fija cada mes", "Tengo un plan de ahorro definido y lo cumplo"], scores: [1, 2, 3, 4], category: "Estabilidad Financiera" },
    { question: "Si tuvieras una emergencia económica inesperada (ej: un gasto médico), ¿podrías cubrirla?", options: ["No, tendría que pedir prestado", "Con mucha dificultad, usando todos mis recursos", "Sí, tengo un pequeño fondo de emergencia", "Sí, sin que afecte gravemente mis finanzas"], scores: [1, 2, 3, 4], category: "Estabilidad Financiera" },
    { question: "¿Tienes deudas de consumo (tarjetas de crédito, préstamos) que consideras difíciles de manejar?", options: ["Sí, y me generan mucho estrés", "Sí, pero las estoy pagando poco a poco", "Tengo algunas, pero están bajo control", "No tengo deudas de consumo o son muy bajas"], scores: [1, 2, 3, 4], category: "Estabilidad Financiera" },

    // Condiciones de Vivienda y Entorno
    { question: "El lugar donde vives es:", options: ["Propiedad de un familiar (sin pagar arriendo)", "En arriendo", "Propia, pero con hipoteca", "Propia y totalmente pagada"], scores: [2, 2, 3, 4], category: "Condiciones de Vivienda" },
    { question: "Tu vivienda cuenta con todos los servicios públicos básicos (agua, luz, alcantarillado)?", options: ["Falta más de un servicio", "Falta un servicio o son intermitentes", "Sí, todos funcionan correctamente", "Sí, y además tengo acceso a otros como gas natural o internet fijo"], scores: [1, 2, 3, 4], category: "Condiciones de Vivienda" },
    { question: "¿Consideras que el barrio donde vives es seguro y tiene buen acceso a transporte público?", options: ["No, es inseguro y con mal transporte", "Es regular en uno de los dos aspectos", "Sí, es adecuado en ambos aspectos", "Sí, es excelente y con múltiples opciones"], scores: [1, 2, 3, 4], category: "Condiciones de Vivienda" },
    { question: "¿En tu hogar, cada persona tiene un espacio adecuado para descansar y tener privacidad?", options: ["No, vivimos en condiciones de hacinamiento", "Con algunas limitaciones de espacio", "Sí, el espacio es suficiente", "Sí, tenemos espacio cómodo para todos"], scores: [1, 2, 3, 4], category: "Condiciones de Vivienda" },

    // Acceso a Salud y Bienestar
    { question: "¿Estás afiliado al sistema de salud (régimen contributivo o subsidiado)?", options: ["No estoy afiliado", "Estoy en proceso de afiliación", "Sí, al régimen subsidiado", "Sí, al régimen contributivo"], scores: [1, 2, 3, 4], category: "Acceso a Salud" },
    { question: "Cuando necesitas atención médica, ¿el acceso a citas o servicios es fácil?", options: ["Muy difícil, tardo semanas o meses", "Difícil, con largas esperas", "Relativamente fácil", "Fácil y rápido"], scores: [1, 2, 3, 4], category: "Acceso a Salud" },
    { question: "¿Dedicas tiempo a actividades de ocio, deporte o cultura?", options: ["Casi nunca, no tengo tiempo ni dinero", "Muy de vez en cuando", "Regularmente, al menos una vez a la semana", "Frecuentemente, es parte importante de mi rutina"], scores: [1, 2, 3, 4], category: "Acceso a Salud" },
    { question: "En general, ¿cómo calificarías tu nivel de estrés en el día a día?", options: ["Muy alto, me siento abrumado constantemente", "Alto, pero manejable", "Moderado, con picos ocasionales", "Bajo, me siento tranquilo la mayor parte del tiempo"], scores: [1, 2, 3, 4], category: "Acceso a Salud" },

    // Conectividad y Recursos
    { question: "¿Tienes acceso regular a un computador o portátil para buscar trabajo o estudiar?", options: ["No tengo acceso", "Acceso limitado (ej: en un café internet)", "Comparto uno en casa", "Tengo mi propio computador"], scores: [1, 2, 3, 4], category: "Conectividad y Recursos" },
    { question: "¿Cuentas con una conexión a internet estable en tu hogar?", options: ["No tengo internet en casa", "Tengo internet móvil (datos), pero es inestable o limitado", "Sí, pero es de baja velocidad", "Sí, tengo una conexión de banda ancha estable"], scores: [1, 2, 3, 4], category: "Conectividad y Recursos" },
    { question: "¿Participas en alguna red comunitaria, grupo de apoyo o asociación?", options: ["No, en ninguna", "Rara vez", "A veces participo en actividades", "Sí, soy miembro activo de al menos un grupo"], scores: [1, 2, 3, 4], category: "Conectividad y Recursos" },
    { question: "¿Conoces y has utilizado programas de apoyo del gobierno o de ONGs para jóvenes (empleo, educación, etc.)?", options: ["No los conozco", "Los conozco pero no los he usado", "He intentado usarlos pero ha sido difícil", "Sí, he sido beneficiario o sé cómo acceder a ellos"], scores: [1, 2, 3, 4], category: "Conectividad y Recursos" },
  ],
  cv: [
    // Datos Personales y Contacto
    { question: "¿Cuál de estos correos es más profesional para tu CV?", options: ["gatito_cool_98@email.com", "nombre.apellido@email.com", "apodo_divertido@email.com", "solo_nombre@email.com"], correct: 1, category: "Datos Personales" },
    { question: "Al poner tu número de teléfono, ¿qué es lo más importante?", options: ["Que sea un número que casi no usas", "Asegurarte de que sea tu número móvil personal y esté activo", "Poner el teléfono de tu casa", "Poner varios números de contacto"], correct: 1, category: "Datos Personales" },
    { question: "¿Es recomendable incluir un enlace a tu perfil de LinkedIn?", options: ["No, es información privada", "Solo si la empresa lo pide explícitamente", "Sí, si tu perfil está actualizado y es profesional", "Sí, aunque no lo hayas actualizado en años"], correct: 2, category: "Datos Personales" },
    { question: "Sobre tu dirección, ¿qué es lo más adecuado?", options: ["Poner tu dirección completa con número de apartamento", "No poner ninguna información de ubicación", "Poner solo la ciudad y el país (ej: Bogotá, Colombia)", "Poner el nombre de tu barrio"], correct: 2, category: "Datos Personales" },

    // Perfil Profesional
    { question: "¿Qué extensión debe tener el 'Perfil Profesional' o 'Resumen'?", options: ["Una página completa", "Un párrafo de 10 líneas", "Unas 3 a 5 líneas concisas y potentes", "Una sola frase"], correct: 2, category: "Perfil Profesional" },
    { question: "¿Cuál de estos perfiles es más efectivo?", options: ["'Busco una oportunidad laboral para crecer'", "'Profesional con 5 años de experiencia en ventas, logrando un aumento del 20% en ingresos el último año. Busco aplicar mis habilidades en...' ", "'Soy una persona trabajadora y responsable'", "'Tengo muchas ganas de aprender'"], correct: 1, category: "Perfil Profesional" },
    { question: "El perfil profesional debe ser...", options: ["El mismo para todas las ofertas de trabajo", "Adaptado para resaltar lo que es relevante para la vacante específica", "Una lista de todos tus trabajos anteriores", "Una copia de la descripción del trabajo"], correct: 1, category: "Perfil Profesional" },
    { question: "¿Qué debes evitar en tu perfil profesional?", options: ["Usar palabras clave de la industria", "Mencionar tus años de experiencia", "Usar clichés como 'trabajo bien bajo presión' sin dar ejemplos", "Mostrar tu objetivo profesional"], correct: 2, category: "Perfil Profesional" },

    // Experiencia Laboral
    { question: "¿En qué orden debes listar tu experiencia laboral?", options: ["De la más antigua a la más reciente (cronológico)", "Sin ningún orden en particular", "De la más reciente a la más antigua (cronológico inverso)", "Agrupada por tipo de empresa"], correct: 2, category: "Experiencia Laboral" },
    { question: "¿Cuál descripción de una tarea es más impactante?", options: ["'Responsable de las redes sociales'", "'Incrementé el engagement en redes sociales en un 30% mediante la creación de contenido de video y campañas interactivas'", "'Publicaba contenido en Facebook e Instagram'", "'Manejaba las cuentas de la empresa'"], correct: 1, category: "Experiencia Laboral" },
    { question: "Si no tienes experiencia laboral formal, ¿qué puedes incluir?", options: ["Dejar la sección en blanco", "Proyectos personales, voluntariado, prácticas o trabajos informales relevantes", "Inventar un trabajo", "Poner los trabajos de tus familiares"], correct: 1, category: "Experiencia Laboral" },
    { question: "Para cada experiencia, ¿qué información es esencial?", options: ["Solo el nombre de la empresa", "Nombre del puesto, empresa, ciudad y fechas (mes/año)", "El salario que ganabas", "El nombre de tu jefe directo"], correct: 1, category: "Experiencia Laboral" },

    // Educación
    { question: "Si tienes un título universitario, ¿es necesario incluir tu educación secundaria?", options: ["Sí, siempre debes incluir todos tus estudios", "Solo si te graduaste con honores", "No, generalmente no es necesario", "Sí, pero al final del CV"], correct: 2, category: "Educación" },
    { question: "Si aún estás estudiando, ¿cómo lo indicas?", options: ["No lo mencionas hasta que te gradúes", "Lo pones como si ya te hubieras graduado", "Indicas el título, la institución y la fecha de graduación prevista (ej: 'Graduación esperada: Dic 2025')", "Lo pones en una sección aparte llamada 'Estudios Futuros'"], correct: 2, category: "Educación" },
    { question: "¿Qué información es clave en la sección de educación?", options: ["El nombre de todos tus profesores", "Título obtenido, institución educativa y año de finalización", "Las notas de todas tus materias", "La dirección de la universidad"], correct: 1, category: "Educación" },
    { question: "Cursos o certificaciones relevantes (ej: un curso de Excel Avanzado) ¿dónde los pones?", options: ["No se deben incluir", "En una sección propia de 'Cursos' o 'Desarrollo Profesional'", "Dentro de la descripción de un trabajo", "En el perfil profesional"], correct: 1, category: "Educación" },

    // Habilidades
    { question: "¿Cómo deberías presentar tus habilidades?", options: ["En un párrafo largo y único", "Divididas en categorías (ej: Habilidades Técnicas, Idiomas, Software)", "Mezcladas con tu experiencia laboral", "No incluirlas, se asumen con la experiencia"], correct: 1, category: "Habilidades" },
    { question: "Al listar un idioma, ¿qué nivel de dominio es más claro?", options: ["'Hablo inglés'", "'Inglés: Básico'", "'Inglés: Nivel conversacional'", "'Inglés: Nivel Nativo / Bilingüe (C2)'"], correct: 3, category: "Habilidades" },
    { question: "¿Es útil incluir habilidades blandas como 'Liderazgo' o 'Comunicación'?", options: ["No, los reclutadores no las leen", "Sí, pero es aún mejor demostrarlas con ejemplos en la sección de experiencia", "Solo si no tienes habilidades técnicas", "Sí, en una lista larga con más de 20 habilidades"], correct: 1, category: "Habilidades" },
    { question: "Si una oferta pide 'conocimiento en SAP', ¿qué debes hacer?", options: ["Ignorarlo si no lo sabes", "Poner 'SAP' en tus habilidades aunque solo lo hayas visto una vez", "Si tienes la habilidad, asegurarte de que esté visible en la sección de habilidades", "Decir que estás dispuesto a aprenderlo"], correct: 2, category: "Habilidades" },

    // Formato y Diseño
    { question: "¿Cuál es la longitud ideal para un CV si tienes menos de 10 años de experiencia?", options: ["Tres páginas para mostrar todo", "Una sola página, concisa y clara", "Media página es suficiente", "No importa la longitud"], correct: 1, category: "Formato y Diseño" },
    { question: "¿Qué tipo de letra es más recomendable?", options: ["Una fuente muy decorativa y artística como Comic Sans", "Una fuente profesional y legible como Arial, Calibri o Times New Roman", "Usar 5 tipos de letra diferentes para ser creativo", "Letra muy pequeña para que quepa más información"], correct: 1, category: "Formato y Diseño" },
    { question: "Al guardar tu CV para enviarlo, ¿qué formato es el más seguro?", options: ["Documento de Word (.docx) para que lo puedan editar", "Archivo de texto (.txt)", "Formato PDF para mantener el diseño intacto", "Una imagen (.jpg)"], correct: 2, category: "Formato y Diseño" },
    { question: "El uso de colores en el CV debe ser...", options: ["Abundante, usando todos los colores del arcoíris", "Nulo, todo debe ser en blanco y negro", "Moderado y profesional, usando uno o dos colores para resaltar títulos", "Solo en la foto"], correct: 2, category: "Formato y Diseño" },
  ]
};

const improvementTips = {
  "Comunicación": "Practica la escucha activa: presta total atención a quien habla antes de responder. Estructura tus ideas antes de comunicarlas. Pide feedback sobre tu claridad al hablar. Participa en debates o grupos de discusión para ganar confianza.",
  "Trabajo en Equipo": "Ofrece tu ayuda a compañeros proactivamente. Asume la responsabilidad de tus tareas y errores. Celebra los éxitos del equipo. Fomenta un ambiente de respeto donde todas las opiniones son bienvenidas, incluso si difieren de la tuya.",
  "Resolución de Problemas": "Cuando enfrentes un problema, divídelo en partes más pequeñas. Haz una lluvia de ideas de posibles soluciones sin juzgarlas al principio. Aprende de los errores en lugar de frustrarte. Investiga y analiza la causa raíz del problema.",
  "Liderazgo": "Toma la iniciativa en proyectos pequeños para ganar confianza. Aprende a delegar tareas confiando en tu equipo. Motiva a tus compañeros reconociendo su buen trabajo. Sé un ejemplo a seguir con tu propia ética de trabajo y actitud positiva.",
  "Adaptabilidad": "Mantén una mentalidad abierta hacia los cambios, viéndolos como oportunidades. Sal de tu zona de confort y aprende nuevas habilidades o tecnologías. Sé flexible con tus planes y prepárate para ajustarlos. Pide feedback constructivo y úsalo para crecer.",
  "Gestión del Tiempo": "Usa herramientas como calendarios o apps de listas de tareas. Aplica la técnica Pomodoro (trabajar en bloques de 25 minutos con descansos de 5). Identifica tus mayores distracciones y busca formas de minimizarlas. Establece metas diarias y semanales realistas."
};

const cvImprovementTips = {
  "Datos Personales": "Utiliza un correo electrónico profesional (nombre.apellido@email.com). Incluye tu número de celular principal. Agrega tu perfil de LinkedIn si está actualizado. Es suficiente con poner tu ciudad y país, no es necesaria la dirección completa.",
  "Perfil Profesional": "Debe ser un resumen de 3 a 5 líneas. Adáptalo a cada oferta de trabajo. Enfócate en tus logros y lo que puedes aportar, usando datos cuantificables. Evita frases genéricas como 'soy muy trabajador'.",
  "Experiencia Laboral": "Ordénala de la más reciente a la más antigua. Describe tus funciones con verbos de acción y resultados medibles (ej: 'Aumenté las ventas un 15%'). Incluye voluntariado o proyectos si no tienes experiencia formal.",
  "Educación": "Si tienes título universitario, no es necesario poner el colegio. Si estás estudiando, indica la fecha de graduación esperada. Incluye cursos y certificaciones relevantes en una sección aparte.",
  "Habilidades": "Organiza tus habilidades en categorías (ej: Técnicas, Idiomas). Sé específico con tu nivel, especialmente en idiomas (ej: 'Inglés - B2 Intermedio-alto'). Demuestra tus habilidades blandas con ejemplos en tu experiencia laboral.",
  "Formato y Diseño": "Intenta que tu CV no ocupe más de una página. Usa una fuente legible (Arial, Calibri). Guarda y envía tu CV siempre en formato PDF. Usa el color de forma sutil y profesional para mantener la legibilidad."
}

const socioeconomicImprovementTips = {
  "Educación y Capacitación": "Explora cursos gratuitos en plataformas como Coursera, edX o Google Actívate. Investiga sobre los programas de formación técnica y tecnológica del SENA en Colombia. No subestimes el valor de las certificaciones cortas para mejorar tu perfil.",
  "Situación Laboral": "Activa y actualiza tu perfil en LinkedIn. Informa a tu red de contactos que estás buscando empleo. Adapta tu CV para cada oferta. Considera registrar tu hoja de vida en agencias de empleo públicas y privadas.",
  "Estabilidad Financiera": "Crea un presupuesto simple para controlar tus ingresos y gastos. Busca reducir gastos pequeños ('gastos hormiga'). Si tienes deudas, intenta negociar las condiciones o busca asesoría financiera gratuita en cajas de compensación.",
  "Condiciones de Vivienda": "Investiga sobre subsidios de vivienda ofrecidos por el gobierno o cajas de compensación. Asegúrate de que tu comunidad tenga una junta de acción comunal activa para reportar problemas con servicios públicos o seguridad.",
  "Acceso a Salud": "Verifica tu estado de afiliación en la página del ADRES. Conoce la red de hospitales y centros de salud de tu EPS. Aprovecha las jornadas de salud preventiva. Busca actividades de bienestar gratuitas en parques o centros comunitarios.",
  "Conectividad y Recursos": "Utiliza las bibliotecas públicas y los Puntos Vive Digital, que ofrecen acceso gratuito a computadores e internet. Infórmate sobre programas gubernamentales como 'Jóvenes en Acción' que ofrecen apoyos económicos y formativos."
};

let currentTest = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let myChart = null;
let improvementModal = null;

function startTest(type) {
  currentTest = type;
  currentQuestionIndex = 0;
  userAnswers = [];
  document.querySelector('.row').style.display = 'none';
  document.getElementById('results-container').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
  if (myChart) {
    myChart.destroy();
  }
  showQuestion();
}

function showQuestion() {
  const question = tests[currentTest][currentQuestionIndex];
  const container = document.getElementById('question-container');
  container.innerHTML = `
    <h3>${question.question}</h3>
    ${question.options.map((option, index) => `
      <div class="form-check">
        <input class="form-check-input" type="radio" name="answer" value="${index}">
        <label class="form-check-label">${option}</label>
      </div>
    `).join('')}
  `;
  document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) return;

  const answer = parseInt(selected.value);
  const question = tests[currentTest][currentQuestionIndex];

  userAnswers.push({
    question: question,
    answer: answer
  });

  currentQuestionIndex++;
  if (currentQuestionIndex < tests[currentTest].length) {
    showQuestion();
  } else {
    showResults();
  }
}

function getCategoryScores() {
  const scores = {};
  const questionsPerCategory = {};

  tests[currentTest].forEach(q => {
    if (currentTest === 'socioeconomico') {
      // Max score is the sum of the highest score for each question in the category
      const maxScore = Math.max(...q.scores);
      questionsPerCategory[q.category] = (questionsPerCategory[q.category] || 0) + maxScore;
    } else {
      questionsPerCategory[q.category] = (questionsPerCategory[q.category] || 0) + 1;
    }
    scores[q.category] = 0;
  });

  userAnswers.forEach(ans => {
    if (currentTest === 'socioeconomico') {
      scores[ans.question.category] += ans.question.scores[ans.answer];
    } else {
      if (ans.question.correct !== null && ans.answer === ans.question.correct) {
        scores[ans.question.category]++;
      }
    }
  });

  // Convert to percentage
  for (const category in scores) {
    if (currentTest === 'socioeconomico') {
      // For socioeconomic, the denominator is the max possible score
      scores[category] = (scores[category] / questionsPerCategory[category]) * 100;
    } else {
      // For other tests, it's the number of questions
      scores[category] = (scores[category] / questionsPerCategory[category]) * 100;
    }
  }
  return scores;
}

function getColor(value) {
  if (value <= 40) return 'rgba(255, 99, 132, 0.5)'; // Red
  if (value <= 70) return 'rgba(255, 206, 86, 0.5)'; // Yellow
  return 'rgba(75, 192, 192, 0.5)'; // Green
}

function showResults() {
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('results-container').style.display = 'block';

  // Detailed results for all tests
  document.getElementById('resultsChart').style.display = 'block';
  const scores = getCategoryScores();
  let tips, chartLabel;

  if (currentTest === 'habilidades') { tips = improvementTips; chartLabel = 'Puntuación por Habilidad (%)'; }
  else if (currentTest === 'cv') { tips = cvImprovementTips; chartLabel = 'Conocimiento por Sección del CV (%)'; }
  else { tips = socioeconomicImprovementTips; chartLabel = 'Índice de Bienestar por Área (%)'; }

  const ctx = document.getElementById('resultsChart').getContext('2d');
  const labels = Object.keys(scores);
  const data = Object.values(scores);
  const backgroundColors = data.map(score => getColor(score));

  myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: chartLabel,
        data: data,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors.map(color => color.replace('0.5', '1')),
        borderWidth: 1
      }]
    },
    options: {
      onClick: (e, elements) => {
        if (elements.length > 0) {
          const elementIndex = elements[0].index;
          const category = labels[elementIndex];
          const score = data[elementIndex];
          if (score <= 40) { // Only show modal for red scores
            const modalTitle = document.getElementById('improvementCategory');
            const modalBody = document.getElementById('improvementTip');
            modalTitle.textContent = `Cómo mejorar en: ${category}`;
            modalBody.textContent = tips[category];
            if (!improvementModal) {
              improvementModal = new bootstrap.Modal(document.getElementById('improvementModal'));
            }
            improvementModal.show();
          }
        }
      },
      scales: {
        y: { beginAtZero: true, max: 100 }
      }
    }
  });

  const summary = document.getElementById('summary');
  if (currentTest === 'habilidades') {
    summary.innerHTML = `<p class="mt-3">Estos son tus resultados. Las habilidades en <span class="fw-bold text-danger">rojo</span> son áreas de oportunidad clave. Haz clic sobre ellas en la gráfica para obtener consejos de mejora.</p>`;
  } else if (currentTest === 'cv') {
    summary.innerHTML = `<p class="mt-3">Este es tu diagnóstico. Las secciones en <span class="fw-bold text-danger">rojo</span> son las que más necesitan tu atención. Haz clic sobre ellas en la gráfica para obtener consejos prácticos y mejorar tu CV.</p>`;
  } else { // Socioeconomic test
    summary.innerHTML = `<p class="mt-3">Este es tu análisis socioeconómico. Las áreas en <span class="fw-bold text-danger">rojo</span> indican puntos donde podrías buscar apoyo o recursos. Haz clic sobre ellas en la gráfica para ver sugerencias y rutas de acción.</p>`;
  }
}

document.getElementById('next-btn').addEventListener('click', nextQuestion);
