# **Ficha Técnica – Entrega n°2**

### *Nombre: Luciana González*

## **Tema de la base de datos: Festivales realizados en recintos con capacidad para albergar eventos masivos.**


### **FUENTE DE LOS DATOS**:

- Fuentes que fueron esenciales para construir la base:

1. Cartelera de conciertos en Chile 2024 – [Radio Cooperativa](https://cooperativa.cl/noticias/magazine/musica/shows-en-vivo/cartelera-de-conciertos-en-chile-2024/2024-01-01/183840.html)

2. Cartelera de espectáculos 2024: revisa los festivales y conciertos agendados en Chile – [El Mostrador](https://www.elmostrador.cl/datos-utiles/2024/01/26/cartelera-de-espectaculos-2024-revisa-los-festivales-y-conciertos-agendados-en-chile/)

3. ¿Qué hacer en verano en Santiago?: 15 panoramas imperdibles – [Radio Duna](https://www.duna.cl/cultura/2024/01/05/que-hacer-en-verano-en-santiago-15-panoramas-imperdibles/#)

- Sitios web de medios de comunicación nacionales:

La Tercera, por ejemplo [Comienza la venta de entradas a Fauna Primavera 2024: revisa los precios](https://www.latercera.com/servicios/noticia/fauna-primavera-2024-revisa-los-precios-y-cuando-es-la-venta-de-entradas/MZYAFLVMZFB2HFDFMSKR356QHY/)

Los 40, por ejemplo [Creamfields Chile 2024: Conoce los horarios de cada artista](https://los40.cl/2024/10/29/creamfields-chile-2024-conoce-los-horarios-de-cada-artista/)

CNN Chile, por ejemplo [Gran Rancherazo 2024, el evento que reunirá lo mejor de la música ranchera: Lugar, fecha y entradas](https://www.cnnchile.com/cultura/gran-rancherazo-2024-musica-ranchera-entradas-asistir-comprar_20241108/)

BioBioChile, por ejemplo [Lollapalooza Chile 2024: ¿qué artistas se presentarán cada día en el festival de música?](https://www.biobiochile.cl/noticias/servicios/toma-nota/2024/03/13/lollapalooza-chile-2024-que-artistas-se-presentaran-cada-dia-en-el-festival-de-musica.shtml)

Redgol, por ejemplo [Bierfest Oktober Santiago 2024: Revisa los artistas que estarán en la fiesta de la cerveza](https://redgol.cl/tendencias/bierfest-oktober-santiago-2024-lineup-artistas-regresa-festival-de-cerveza-glup-tronic-gufi)

La Cuarta, por ejemplo [Fiesta del Memo 2024: artistas y venta de entradas]( https://www.lacuarta.com/servicios/noticia/fiesta-del-memo-2024-artistas-y-venta-de-entradas/U73SBMKT4JFZZPUJZW2DEH27RU/)


Parlante.cl, por ejemplo [Festival “All At Once” confirma line up y cambia de recinto]( https://www.parlante.cl/festival-all-at-once-confirma-line-up-y-cambia-de-recinto/)

Pulso Mag, por ejemplo [Baum Festival estrena su primera edición en Chile con más de 35 DJs Internacionales](https://www.pulsomag.com/2024/03/13/baum-festival-estrena-su-primera-edicion-en-chile-con-mas-de-35-djs-internacionales/)

Futuro, por ejemplo [Cervezas, motores y rock: Festival Shop Motor Rock confirma a Kuervos del Sur y Hermanos Ilabaca en Espacio Carén]( https://www.futuro.cl/2024/10/cervezas-motores-y-rock-festival-shop-motor-rock-confirma-a-kuervos-del-sur-y-hermanos-ilabaca-en-espacio-caren/)

Radio Corazón, por ejemplo [La Gran Noche de la Corazón 2024: Volvemos con el mejor evento del año]( https://www.corazon.cl/2024/03/la-gran-noche-de-la-corazon-2024-volvemos-con-el-mejor-evento-del-ano/)

- Cuentas oficiales de Instagram de los festivales o de la productora responsable del evento:

@piknicscl

@santiagorocks.cl

@decora.festival

@lafiestadelmemo

@baumfestivalchile

@noix_entertainment

@memoentertainmentcl

@lotuscl, entre otras.

-S itios web de las tiqueteras PuntoTicket, Passline, Ticketmaster, Ticketplus, LiveTickets, y Tu Acceso.


### **METODOLOGÍA DE LA CONSTRUCCIÓN DE LA BASE**: Recolección manual de datos a través de la búsqueda de información en sitios web, disponibles en Google.

### **ALCANCE DE LOS DATOS**: Datos de festivales musicales que hayan convocado a más de 3.000 personas, y que ofrecieron una parrilla variada de artistas. Fueron realizados en Santiago de Chile, entre el 20 de enero de 2024 y el 15 de diciembre de 2024, en recintos habilitados para recibir a más de 3.000 asistentes y que son habitualmente ocupados para hacer festivales o conciertos de gran magnitud.

### **CARACTERÍSTICAS DE LOS DATOS**: Son datos procesados, estructurados, tanto cuantitativos como cualitativos, obtenidos de una investigación de campo y de fuentes abiertas.

### **VARIABLES INCORPORADAS**:

- ID: número de identificación de cada festival.

- Festival: nombre del festival en cuestión.

- Recinto: Lugar en el cual se realizó el festival.

- Productora/ organizadora: nombre de la productora u organizadora detrás del festival.

- Tiquetera: empresa en particular que estuvo a cargo de la venta de entradas de cada festival.

- Fecha: día, mes, y año en que se realizó el festival.

- Numero_asistentes: cifra de personas que asistieron al evento.

- Tipo_artista: indica si el artista es nacional, internacional pero latinoamericano, o derechamente internacional (toda región o país que no sea de Latinoamérica).

- Artista: nombre del artista o banda.

- Rango_precios: alude al precio más barato y al más costoso de cada venta de entradas.

- Preventas_realizadas: indica el número de preventas que realizó la productora u organizadora, donde 0 significa que no hubo preventa.

- Cancelado: indica si el evento fue cancelado.

- Cambio_recinto: señala si el evento experimentó un cambio de lugar antes de su realización.


### **OTRAS OBSERVACIONES**: La columna Numero_asistentes cuenta con pocas cifras, debido a que no son datos que estén disponible en la web, o, al menos, no fueron publicados por ninguna clase de medio, página web, o cuenta oficial. Es por esto que muchas casillas ponen “sin datos”. Además, hay casillas de la columna Rango_precios donde se incluye solo un precio. En esos casos, esa fue la única cifra a la cual se pudo acceder.