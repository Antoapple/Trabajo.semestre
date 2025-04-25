# Documentación
### Recintos para conciertos/festivales
#### Antonia Appelgren



**EXPLICACIÓN**

La limpieza de datos realizada se inició con la búsqueda de la información y el establecimiento de los límites para esta búsqueda. Ante esta investigación previa llegamos al consenso, junto a mi grupo, de hacer 12 recintos que se utilizan para conciertos. Todos dentro de la Región Metropolitana y que cumplen con el requisito mínimo de capacidad para eventos masivos (3.000 personas). En el caso específico de mi base de datos, se agregó un recinto más (Claro Arena), ya que es un lugar en el que aún no se han realizado eventos, pero ya tiene programados conciertos para el futuro de este año.

Al comenzar con esta investigación, queríamos hacer de los recintos en todo el país, pero no existen bases de datos completas con aquella información (ya sea el nombre del recinto, ubicación, capacidad, etc) y, además, la cantidad de conciertos y festivales iba a ser mucho mayor. 

Una vez que dejamos los límites claros para nuestra investigación, comencé el proceso de crear una tabla en Excel, desde cero. Esto sin duda tuvo un peso mayor en la carga, ya que otras veces, en ejercicios en clases, habiamos realizado el proceso de abrir archivos CSV en Excel. De todas formas, no se me complicó el usar la aplicación. Pude ocupar la función en separar en dos columnas la sección de 'dirección', ya que, originalmente, se encontraba la dirección como tal y la comuna, solo separadas con una coma. 
Luego de realizada la tabla, la guarde como un archivo CSV. Esto me permitio poder subirlo a google colab y poder leerlo en la biblioteca de panda. 

En cuanto a las variables usadas en la tabla, opte por esas ocho (nombre, dirección, comuna, capacidad, butacas, zona residencial, propietario y si el recinto es abierto o cerrado) porque son variables que nos ayudarían en nuestro reportaje. En la capacidad quise hacer esta diferencia con las butacas ya que algunos recintos pierden su capacidad de cancha, dependiendo del tipo de evento. 
Un problema que encontre en el camino fue que quería agregar la variable de precio (cuánto cuesta arrendar estos recintos) pero en muchos lados la información salía confusa, ya que, por ejemplo, el Movistar Arena tiene diferentes formas de ser arrendado: total con salones vips y sillas, medio, solo salon normal, entre otras. Aun así, conversando con mis compañeras, nos gustaría tener esta información para más adelante, pero tendríamos que ver la mejor opción de cómo poner los precios (poner el precio más alto, precio mínimo o máximo, aproximarlo, etc).


**LISTA DE FUENTES**

Ahora mostraré las fuentes que fueron consultadas para esta tabla. No tiene un orden específico. 
1. [Agenda musical](https://www.agendamusical.cl/venues-santiago-chile/): Esta página me sirvió para ver capacidad y dirección de algunos recintos que se siguen usando. El único problema en esta fuente fue que es información antigua, por lo que aparecen lugares que ya no se usan. 
2. [Transfermarkt](https://www.transfermarkt.es/csd-colo-colo/stadion/verein/2433): Esta página está destinada al fútbol, y la use principalmente para ver la información sobre el Estadio Monumental David Arellano (estadio de Colo-Colo); también pude corroborar información sobre el Claro Arena (ex estadio San Carlos de Apoquindo o estadio de la Universidad Cátolica). Y, por último, corroborar información del Estadio Santa Laura (correspondiente a la Unión Española).
3. [Concierto](https://www.concierto.cl/): Este medio me ayudo a corroborar datos que salen en google sobre la capacidad de los recintos. Siendo una ventaja que sea información actualizada hace menos de 10 días. 
4. [Página oficial Movistar Arena](https://www.movistararena.cl/sobre-nosotros/): Esta página, al ser la oficial de un recinto, me sirvió para terminar de corroborar la información que aparece en las otras. 
5. [Página oficial Teatro Caupolicán](https://teatrocaupolican.cl/nosotros/): Al igual que la página anterior, en este medio pude confirmar la información de este recinto (Teatro Caupolicán). 
6. [Página oficial Espacio Riesco](https://www.espacioriesco.cl/salones-y-espacios/): Al igual que en las anteriores, una forma de corroborar información sobre los recintos. Este lugar en particular me complicó un poco ya que es un recinto que cuenta con diferentes espacios, diferentes capacidad y puede ser cerrado o abierto. 

**EJEMPLOS SOBRE PREGUNTAS**

La mayor parte de mis datos son, por decirlo de alguna forma, más objetivos. Aun así, nos podemos hacer algunas preguntas al respecto: 
1. ¿Cuál es el recinto que presenta una mayor capacidad de personas?
2. ¿Qué recinto proporciona una mayor cantidad de butacas?
3. ¿Cuál es el recinto que queda más cercano a mi? (esto en el caso de cada persona)
4. ¿En que comuna se alberga una mayor cantidad de recintos?
5. ¿Cuántos de los recintos son abiertos?
