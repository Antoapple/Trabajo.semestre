#**Ficha Técnica – Entrega n°2**
### *Nombre: Analía Ortega*

## **Tema de la base de datos: Festivales realizados en recintos con capacidad para albergar eventos masivos**

###**FUENTE DE LOS DATOS**

- *Fuentes que fueron esenciales para construir la base:*

1. Cartelera de conciertos en Chile 2024. [Radio Cooperativa](https://cooperativa.cl/noticias/magazine/musica/shows-en-vivo/cartelera-de-conciertos-en-chile-2024/2024-01-01/183840.html)

2. Cartelera de espectáculos 2024: revisa los festivales y conciertos agendados en Chile. [El Mostrador](https://www.elmostrador.cl/datos-utiles/2024/01/26/cartelera-de-espectaculos-2024-revisa-los-festivales-y-conciertos-agendados-en-chile/)

3. 

4.

- *Sitios web de medios de comunicación:*

1. 

2.

3.

- *Cuentas oficiales de Instagram de los recintos, tiqueteras o productoras responsables del evento como :*

1. @lotuscl

2. @dgmedios

3. @

- *Sitios web de las tiqueteras PuntoTicket, Passline, Ticketmaster, Ticketplus, etc. Es especial las primeras tres.*

1. 

2.

3.


### **METODOLOGÍA DE LA CONSTRUCCIÓN DE LA BASE**

Recolección manual de datos a través de la búsqueda de información en sitios web de acceso público disponibles en Google.

### **ALCANCE DE LOS DATOS**

Datos de presentaciones de artistas musicales que hayan convocado a más de 3.000 personas y que se hayan definido como conciertos, es decir, que no correspondan a festivales, incluso si convocan a más de un artista. Deben haber sido realizados en Santiago de Chile durante el año 2024 en recintos habilitados para recibir a más de 3.000 asistentes y que comúnmente reciban este tipo de espectáculos (locaciones que solo realicen un evento en el año no fueron consideradas).

###**CARACTERÍSTICAS DE LOS DATOS**

Son datos procesados, estructurados, tanto cuantitativos como cualitativos, obtenidos de una investigación de campo y de fuentes abiertas.

###**VARIABLES INCORPORADAS**

- ID: número de identificación de cada concierto.

- Concierto: nombre del tour, gira o concierto en cuestión.

- Recinto: Lugar en el cual se llevó a cabo el concierto. 

- Productora: nombre de la productora a cargo de la realización del concierto.

- Tiquetera: empresa en particular que estuvo a cargo de la venta de entradas de cada concierto.

- Fecha: día, mes, y año en que se realizó el concierto.

- Numero_asistentes: cifra de personas que asistieron al evento o aproximado.

- Tipo_artista: indica si el artista es nacional o internacional.

- Artista: nombre del artista o banda.

- Rango_precios: alude al precio más barato y al más costoso de cada venta de entradas.

- Opcion_descuento_entradas: Indica las opciones de descuento o promociones que se ofrecieron para cada evento. Si el concierto no contó con ninguna de las opciones, se señala con 0. 

- Preventas_realizadas: indica si hubo o no preventa/s para cada concierto. 0 significa que no hubo preventa y 1 que sí hubo. 

-Cancelado: indica si el evento fue cancelado. 0 significa que no fue cancelado y 1 que sí lo fue.

-Cambio_recinto: señala si el evento experimentó un cambio de lugar antes de su realización. 0 significa que no hubo cambió de recinto y 1 implica que si hubo un cambio de recinto. 

- Genero_musical: Tipo de género musical predominante de cada artista.


### **OTRAS OBSERVACIONES** 

La columna Numero_asistentes cuenta con pocas cifras, debido a que no son datos que estén disponibles en la web, o, al menos, no fueron publicados por ninguna clase de medio, página web, o cuenta oficial. Es por esto que muchas casillas ponen “sin datos”. Asimismo, se incluye "no aplica", para aquellos eventos que fueron cancelados, pues no hubo asistentes en esa fecha.

También, hay casillas de la columna Rango_precios donde se incluye "sin datos", pues fueron eventos a los que no se pudo acceder a información de libre acceso sobre el rango de precios de las entradas. 

Otra observación es que ocurrió en algunos conciertos que se cancelaron, pero se reprogramaron. En ese caso, se incluye el evento cancelado (con ambas casillas en las columnas de cancelado y cambio_recinto marcadas con 1) y el concierto con la nueva fecha y nuevo recinto. 

Otro dato a considerar, respecto a la consideración de los eventos, es que hay conciertos que se realizan por dos o tres artistas, sin embargo, o son artistas invitados o son colaboraciones. No se consideran festivales, pues son eventos únicos. En la misma línea, es importante señalar que hay eventos registrados con el mismo ID, por el mismo motivo. Se registra un artista diferente, pero sigue siendo la misma fecha, por lo que se conserva el ID.


