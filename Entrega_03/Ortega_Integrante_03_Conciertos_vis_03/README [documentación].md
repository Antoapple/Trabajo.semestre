# **DOCUMENTACIÓN**
#### *Analía Ortega*

### Cómo se realizó el proceso de visualización. Pasos y decisiones tomadas.

En primer lugar, analicé todos los datos de la base limpia que entregué para el encargo N°2. Guiándome por la hipótesis de nuestro trabajo y los antecedentes recopilados, tenía una idea de aquello que quería representar en mi visualización. Me di cuenta de que los datos que más destacaban eran la cantidad de conciertos que se realizaron al año según recinto para eventos masivos, ya que el Movistar Arena y el Teatro Caupolicán acapararon la mayoría de los eventos musicales. Pese a que ya tenía clara la idea, decidí que, antes de empezar a trabajar con los datos para la visualización en Colab, debía limpiar algunos signos presentes en el CSV para que no hubiera errores en el camino. 

Por ello, eliminé todas las tildes, los signos de peso y las palabras combinadas con números en las casillas de precio. Con la base de datos ya despejada, la subí nuevamente a Google Drive con el nombre de "concierto_database_limpia_2" para poder trabajar sobre esta la visualización. Luego, busqué en la biblioteca de Python una gráfica que se adecuara con lo que buscaba representar, en este caso, un gráfico de dispersión de puntos. Escogí inicialmente el código para "Scatter Plot with Href". 

Importe panda, altair, la base de datos y, antes de incluir el código de la visualización, le pedí a Colab que ordenara las fechas desde la más antigua a la más reciente, ya que inicialmente el documento de Excel estaba ordenado por recinto, y también le pedí que solo considerara aquellos eventos que en la columna de cancelados tuvieran el valor 0, es decir, que no considerara aquellos eventos que no se llevaron a cabo.Luego, introduje el código y cambié los datos básicos referidos a la fuente y los ejes; no obstante, me di cuenta de que no se visualizaba como yo deseaba, pues los puntos se encontraban demasiado dispersos y ordenados solo en función del recinto. Esto debido a que consideré como eje Y la columna de ID. 

Por sugerencia, agregue una dispersión en el eje Y random para utilizar el efecto sin necesariamente usar una dimensión ahí. Además, oculté el eje Y. Entonces, antes de la visualización, importé numpy, pandas y añadí la columna Y aleatoria para separar los puntos verticalmente. Luego, ingresé el código de la visualización y modifiqué los ejes y los elementos relacionados con el estilo. Por ejemplo, me di cuenta de que las fechas estaban en inglés, por lo que le pedí a ChatGPT un código para cambiar las fechas a español. Este me indicó que antes del código de visualización, debía crear un diccionario para traducir los meses y crear una columna de fecha en español para el tooltip (donde quería que estuviera la fecha exacta). Además, para evitar que los círculos en los bordes del gráfico quedaran cortados en Altair, incluí un poco de padding temporal al eje X con la guía de ChatGPT. Por último, cambié los colores, pidiéndole a ChatGPT una paleta similar a "set1", pero con colores más marcados, parecidos al del arcoíris pero a la inversa, de manera que se notara la diferencia entre recintos.
Antes de finalizar, me di cuenta que se repetían algunos puntos, por lo que le pedí a ChatGPT que me orientara con los códigos para eliminar aquellos conciertos cancelados (Cancelado=1) y me guíe por los ejercicios de la tarea 2 y reforzamiento en clases para mantener solo un concierto si tiene misma fecha y mismo recinto, señalando que source = source.drop_duplicates(subset=['Fecha', 'Recinto']).


### Base de datos (CSV). Cómo la procesaron hasta dejarla lista para usar en la visualización y por qué la seleccionaron.

Para la base de datos, me basé en el mismo CSV que entregué en el encargo N°2. Luego, este lo modifiqué según los comentarios realizados a la entrega pasada, eliminando las tildes, las palabras en las casillas de asistentes y los signos de peso en las casillas correspondientes a la columna de precio. Luego, cree una tabla aparte solo con las columnas que considere más relevantes para la visualización (concierto, fecha y recinto). No obstante, si bien pensé inicialmente trabajar solo con esas casillas, consideré que para el tooltip sería necesario incluir otros datos como el nombre del artista, por lo que descargué el CSV tal cual estaba antes de separar esas tres columnas. La base la seleccioné, pues sirve para expresar los conciertos que se realizaron durante todo un año (2024), y decidí no modificarla más, puesto que había datos que aún no estaba segura de si los iba a utilizar en el tooltip. Dentro de Colab, incluí códigos para delimitar el gráfico, como excluir aquellas filas que estaban marcadas con 1 en la columna de cancelado o eliminar aquellos conciertos que se repetían, pues incluían distintos artistas, pero era la misma fecha y el mismo recinto.


### Preguntas que puede responder la visualización de datos final (o el conjunto de visualizaciones que crearon).

**Respecto a la visualización que realicé:**

1. ¿Cuántos eventos musicales masivos, sin considerar festivales, se realizaron durante el 2024?
2. ¿Cuáles fueron los recintos que albergaron más conciertos?
3. ¿Cuál fue el mes o la temporada más alta de conciertos?

**Sobre las visualizaciones de mis compañeras:**

1. ¿Cómo se caracterizan demográficamente los artistas que visitaron el país en 2024 para realizar festivales?
2. ¿Qué tipo de artista predominó en 2024?
3. ¿Cuántos eventos se llevaron a cabo sumando festivales y conciertos en recintos masivos en 2024?