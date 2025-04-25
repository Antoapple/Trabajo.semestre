# **Documentación - Entrega 02**
### *Nombre: Analía Ortega*
## **Tema: Conciertos realizados en recintos con capacidad para albergar eventos masivos en 2024**

### **1. Proceso de realización de limpieza de datos**

La base de datos para los conciertos realizados en 2024 fue creada desde cero a travás de la recopilación manual de información de diversos sitios web públicos. 

En primer lugar, establecí las variables que encabezarían cada columna de la tabla de Excel, las cuales se organizaron de acuerdo con el nivel de relevancia que, como grupo, le asignamos en torno a la hipótesis definida. El orden en que se dispusieron las variables fue: Concierto (entiéndase como nombre del evento), recinto, productora, tiquetera, fecha, número de asientos vendidos, tipo de artista (nacional o internacional), rango de precios, opción de descuento, preventa, cancelado (sí o no), cambio de recinto (sí o no) y género musical. 

Cada fila se organiza según cada evento realizado en los distintos establecimientos por orden alfabético. Por lo mismo, como grupo también definimos al inicio los recintos a contemplar (Club Hípico, Espacio Riesco, Espacio Bicentenario de La Florida, Estadio Monumental David Arellano, Estadio Nacional, Estadio Santa Laura, Hipódromo Chile, Movistar Arena, Parque Estadio Nacional Julio Martínez Prádanos, Parque Bicentenario de Cerrillos, Parque Padre Hurtado y Teatro Caupolicán) para facilitar la comprensión de los datos a favor de la hipótesis a corroborar. 

En segundo lugar, ya con las variables definidas, continué con la recopilación de datos. Es necesario mencionar que nos basamos en un inicio en las listas que Cooperativa publicó mes a mes con los conciertos que se aproximaban en el país y también en una nota de The Clinic con los eventos musicales que se realizaron en 2024. Ambas listas incluían el nombre de los artistas a presentarse, las fechas y los establecimientos. Aquellos conciertos programados en recintos pequeños como el Teatro Cariola o el Teatro Coliseo fueron descartados. 

A partir de esos datos, comencé a buscar en Google, específicamente en la página de cada tiquetera y establecimiento, los datos faltantes para completar el resto de las columnas. También contemplé la información proporcionada por medios de comunicación para rellenar algunas casillas como número de asistentes (no disponible para todos los eventos), nacionalidad de los artistas o género musical. 

Cabe señalar que para la mayoría de los eventos, no estaba posible o se bloqueaba la información de las tiqueteras. Si bien, en la mayoría de los casos pude volver a la página inicial sin el anuncio de que el evento ya se había realizado y bloqueaba la pantalla, en algunos casos recurrí a Wayback Machine para rastrear aquellos datos retrocediendo a versiones más antiguas del sitio Esta herramienta la utilicé principalmente al inicio de la creación de la base de datos.

La base de datos cuenta con una versión inicial y una versión final o limpia que consiste en aquella importada como archivo CSV.

### **2. Lista de fuentes de datos**

Las fuentes utilizadas para crear la base de datos se pueden agrupar según:

- Sitios web de tiqueteras y productoras: PuntoTicket, Passline, Ticketmaster, TicketPlus, DGMedios, Bizarro Live, Lotus, Fenix Entertainment, etc. A través de estos pude obtener la información sobre el precio de las entradas, los descuentos disponibles y las preventas, en caso de contar con ellas. También, utilicé en menor medida la información disponible en el sitio web del Movistar Arena para corroborar información sobre nombre del tour o gira o características de los artistas. 

- Sitios de medios de comunicación: La Tercera, Radio Duna, Los 40, Radio Futuro, Cooperativa, The Clinic, El Mostrador, CNN Chile, RedGol, La Cuarta, BioBioChile, Radio Activa, RedHoy y Agenda Musical. Utilicé todos estos medios, ya que subieron notas respecto a la cartelera de conciertos para 2024 y sobre los eventos en particular. En especial, me sirvió para obtener información sobre los conciertos cancelados o reprogramados.

- Cuentas oficiales de Instagram de las productoras o recintos de eventos: @puntoticket, @bizarrolivecl, @lotuscl, @passline_oficial, @dgmedios, @movistararena, @teatrocaupolican, etc. Estos canales de información oficiales de las empresas me permitieron corroborar ciertos datos como fechas, si los conciertos efectivamente se realizaron y actualizaciones respecto a, por ejemplo, disponibilidad de entradas o nuevas fechas.


### **3. Preguntas que se pueden responder con la base de datos**

A. ¿Cuáles fueron los recintos que albergaron más conciertos?

B. ¿Qué características destacan de los artistas que se presentaron?

C. ¿Se presentaron más artistas internacionales o nacionales? ¿En qué recintos se presentaron más artistas internacionales? ¿Y los nacionales?

D. ¿Qué tiquetera predominó en la venta de entradas?

E. ¿Cuáles fueron los artistas que vendieron más fechas?

F. ¿Qué productora organizó más conciertos en 2024?

G. ¿Cuál es la moda respecto al género musical en los artistas que se presentaron el año pasado?
