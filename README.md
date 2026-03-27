En el presente trabajo práctico realicé mi portafolio web utilizando:
  - HTML para la estructura de la web.
  - TailwindCSS para los estilos.
  - Javascript para agregarle iteración a la página.
  - Formspreed para la recepción de los menajes del formulario de contacto.
  - Vercel para el alojamiento estático de la web.

La idea principal fue respetar la consigna del trabajo ya que podría haber implementado React para un desarrollo por componentes y es una tecnología que ya trabajé. Utilicé javascript para tener un manejo del DOM y poder agregar
funcionalidades como el cambio de temas (entre claro y oscuro) de la página así como también el guardado en el localStorage, apertura del menú en resoluciones mobiles y tambien para animaciones dependiendo el viewport del usuario.

Funcionalidades:
  - Modo oscuro / claro
  - Diseño responsive
  - Menú hamburguesa para mobile / tablet
  - Botón de retorno a la sección inicial
  - Formulario de contacto funcional
  - Página de confirmación de envío de formulario
  - Redirección automática al portafolio
  - Opición de cancelación de redirección automática+

Formulario de contacto:
El formulario está conectado con Formspree, lo que permite enviar mensajes sin necesidad de backend propio.

Lo mejoré con un poco de javascript para:
  - Evitar redirecciones externas
  - Controlar el envío con fetch
  - Redirigir manualmente a una página de confirmación

Deploy:
Lo hice con vercel y lo podes ver online acá:
👉 https://tu-link.vercel.app

