# Ficha técnica
## Recintos para conciertos/festivales
#### Antonia Appelgren





**Fuente de los datos:** 
1. [Agenda musical](https://www.agendamusical.cl/venues-santiago-chile/)
2. [Transfermarkt](https://www.transfermarkt.es/csd-colo-colo/stadion/verein/2433)
3. [Concierto](https://www.concierto.cl/)
4. [Página oficial Movistar Arena](https://www.movistararena.cl/sobre-nosotros/) 
5. [Página oficial Teatro Caupolicán](https://teatrocaupolican.cl/nosotros/)
6. [Página oficial Espacio Riesco](https://www.espacioriesco.cl/salones-y-espacios/)

**Metodología de la construcción de la base**
La metodología usada fue hacer una base de datos manual, ya que no se encontre una base de datos completa con todos los puntos que se tuvo que realizar. Esto sin duda hizo más lenta la tarea pero quedo de acuerdo a las variables que queriamos usar. 

**Alcance de los datos**
Esta base de datos contempla 13 recintos que se utilizan para la realización de conciertos y festivales dentro de la Región Metropolitana. El criterio principal fue que albergaran una capacidad mínima de 3.000 personas, además de estar dentro de la región. El objetivo fue reunir esta información para poder generar las visuales que tenemos pensadas (tarjetas de cada recinto); además de poder compararlos entre sí.  

**Característica de los datos**
Como ya mencione anteriormente, los datos fueron recolectados de forma manual, desde fuentes de medios hasta páginas oficiales, siempre priorizando la información de estás últimas. La base de datos tiene tanto variables cuantitativas como cualitativas, siendo pensada para utilizarla principalmente con fines informativos para nuestra investigación.

**Variables incorporadas**
1. NOMBRE RECINTO: Para poder identificar cada recinto. Se uso su nombre real y no el "popular". 
2. DIRECCIÓN: Para saber donde quedan ubicados los recintos. Esto nos ayudara con las tarjetas de presentación que queremos hacer de los recintos. 
3. COMUNA: Al igual que la anterior, para saber con certeza donde queda el recinto. Esto también nos ayuda a ver que comuna es la que tiene mayores espacios para conciertos y festivales.
4. CAPACIDAD: Esto nos ayuda a saber cuántas personas pueden entrar a los recintos. El problema aquí fue con los lugares sin butacas, ya que es más díficil determinar la cantidad de personas. También, esta variable se acompaña de si los eventos usan la capacidad máxima de los recintos, si cierran una parte, o ante cualquier eventualidad. 
5. BUTACAS: Para poder saber que recintos cuentan con asientos incluidos y cuanto es su cantidad. Este número esta contemplado dentro de la capacidad máxima (variable anterior).
6. ZONA RESIDENCIAL: Una forma de saber si los recintos pueden presentar incomodidad a los vecinos. 
7. PROPIETARIO: Una forma de saber quienes son los dueños, incluido ne caso de querer saber si son recintos particulares o públicos. 
8. ABIERTO O CERRADO: Esta variable nos permite saber si existe un mayor número de recintos que tienen techo o aquellos que no lo tienen, algo que puede ayudarnos, más adelante, a ver temas de acústica e infraestructura de los escenarios. 

**Otras observaciones que tengan sobre la base**
En general, es una base de datos pequeña. El problema surgió con la poca claridad de datos, ya que normalmente me encontraba con información que no coincidia con lo que yo había visto antes (capacidad de personas por ejemplo). 