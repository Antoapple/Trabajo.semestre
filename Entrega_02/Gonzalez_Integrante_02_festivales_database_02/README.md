# **Documentación – Entrega n°2**
### *Nombre: Luciana González*
## **Tema de la base de datos: Festivales realizados en recintos con capacidad para albergar eventos masivos.**

### **1. Proceso de realización de limpieza de datos:** 
La base de datos sobre festivales fue creada desde cero y mediante la recopilación manual de información de sitios web disponibles en el buscador de Google. Antes de comenzar con la recolección propiamente tal, definí las variables que encabezarían cada columna de la tabla. Estas variables fueron dispuestas de mayor a menor grado de importancia y especificidad. El orden en el que están dispuestas es el siguiente: Festival; Recinto; Productora/ organizadora; Tiquetera; Fecha; Número de asistentes; Tipo de artista; Artista; Rango de precios; Preventas realizadas; Cancelado; y Cambio de recinto. Cada fila contienen el nombre de algún festival, y estos fueron ordenados por fecha (desde el 20 de enero de 2024 al 15 de diciembre de 2024) para facilitar la visualización y comprensión de los datos. 
Para la recopilación de datos, tomé como base una nota de Radio Cooperativa titulada  Cartelera de conciertos en Chile 2024. Esta incluye los nombres de los festivales realizados (o, en su defecto, de los artistas que participaron en el festival), la fecha,  y el lugar donde se realizó. Me enfoqué solo en aquellos festivales organizados en recintos que tuvieran una capacidad para más de 3.000 asistentes (es decir, para eventos masivos) y se localizaran en Santiago. Omití el resto.
A partir de los datos provistos por el artículo de Cooperativa, busqué y recopilé los datos faltantes desde diversas fuentes: sitios web de medio de comunicación, sitios de las tiqueteras, y cuentas de Instagram oficiales. 
Para corroborar la veracidad de la información, procuré que cada dato recopilado apareciera en más de una fuente, y contrasté la información que sale en los medios de comunicación con aquella que aparece en las cuentas de Instagram oficiales. 
Por último, como herramienta de búsqueda, recurrí en numerosas ocasiones al sitio Wayback Machine para rastrear algunos datos que ya nos están disponibles en las versiones más actuales de los sitios web de las tiqueteras. Este fue el caso de los precios de las entradas. De esta manera, pude “retroceder” a la fecha en la que salieron a la venta las primeras entradas, y así pude obtener información sobre los primeros precios de las preventas en verde, hasta la venta general de entradas. Cabe destacar que la página web de las tiqueteras te redirige al inicio o señala que la información no está disponible cuando se busca un evento pasado. 
La base de datos cuenta con una versión inicial, la que incluye tildes y cuatro filas (348 a 351) que combinaban variables cuantitativas y cualitativas. La versión final no tiene tildes (Excel las reconocía al importar la base como un archivo CSV) y las cuatro filas mencionadas quedaron solo con números.  
### **2. Lista de fuentes de datos**:
Las fuentes utilizadas para la construcción de la base datos se pueden agrupar en tres categorías: 
- Sitios de medio de comunicación: Recurrí a La Tercera, Radio Duna, El Mostrador, CNN Chile, Pulso Mag, Radio Corazón, Los 40, Futuro, Radio Cooperativa, RedGol, La Cuarta, BioBioChile, y Parlante.cl. Recurrí a estos porque todos ellos subieron notas con datos útiles sobre alguno de los festivales que seleccioné, y la información que publican está verificada (al menos, en teoría). 
- Cuentas oficiales de Instagram de los festivales o de la productora responsable del evento: @ultrafest, @magikgardenofficial, @knotfestchile, @vibrafest.cl, @iguana.cl, @glovox, etc. Son canales de información oficiales y es a través de estas cuentas que los organizadores o productores suben avisos o actualizaciones de los eventos musicales. 
- Sitios web de las tiqueteras: PuntoTicket, Passline, Ticketmaster, Ticketplus, LiveTickets, y Tu Acceso. Los utilicé porque en estos está el detalle de los artistas, ubicaciones, precios, etc., de cada festival.
- Wikipedia, cuando busqué un dato muy preciso, como la nacionalidad de todos los artistas de un evento. En ese sentido, la elegí únicamente con ese fin. 

### **3. Preguntas que se pueden responder con la base de datos:** 
- ¿Qué tiquetera que predominó en la venta de entradas ? 
- ¿Cuáles fueron los recintos que albergaron más festivales en 2024? ¿Y los que fueron menos utilizados?
- ¿Los festivales tendieron a realizarse en recintos cerrados o abiertos? 
- ¿Qué recinto recibió a más artistas internacionales el año pasado? ¿Cuál recibió a más artistas nacionales? 
- ¿Qué productora organizó más festivales en 2024? 
