## **DOCUMENTACIÓN**
#### *Analía Ortega*
### Cómo se realizó el proceso de visualización. Pasos y decisiones tomadas.

En primer lugar, analicé todos los datos de la base limpia que entregué para el encargo N°2. Guiándome por la hipótesis de nuestro trabajo y los antecedentes recopilados, tenía una idea de aquello que quería representar en mi visualización. Me di cuenta de que los datos que más destacaban eran la cantidad de conciertos que se realizaron al año según recinto para eventos masivos, ya que el Movistar Arena y el Teatro Caupolicán acapararon la mayoría de los eventos musicales. Pese a que ya tenía clara la idea, decidí que, antes de empezar a trabajar con los datos para la visualización en Colab, debía limpiar algunos signos presentes en el csv para que no hubiera errores en el camino. 

Por ello, eliminé todas las tildes, los signos de peso y las palabras combinadas con números en las casillas de precio. Con la base de datos ya despejada, la subí nuevamente a Google Drive con el nombre de "concierto_database_limpia_2" para poder trabajar sobre esta la visualización. Luego, busqué en la biblioteca de Python una gráfica que se adecuara con lo que buscaba representar, en este caso, un gráfico de dispersión de puntos. Escogí inicialmente el código para "Scatter Plot with Href". 

Importe panda, altair, la base de datos y, antes de incluir el código de la visualización, le pedí a Colab que ordenara las fechas desde la más antigua a la más reciente, ya que inicialmente el documento de Excel estaba ordenado por recinto, y también le pedí que solo considerara aquellos eventos que en la columna de cancelados tuvieran el valor 0, es decir, que no considerara aquellos eventos que no se llevaron a cabo.Luego, introduje el código y cambié los datos básicos referidos a la fuente y los ejes; no obstante, me di cuenta de que no se visualizaba como yo deseaba, pues los puntos se encontraban demasiado dispersos y ordenados solo en función del recinto. Esto debido a que consideré como eje Y la columna de ID. 

Por sugerencia, agregue una dispersión en el eje Y random para utilizar el efecto sin necesariamente usar una dimensión ahí. Además, oculté el eje Y. Entonces, antes de la visualización, importé numpy, pandas y añadí la columna Y aleatoria para separar los puntos verticalmente. Luego, ingresé el código de la visualización y modifiqué los ejes y los elementos relacionados con el estilo.

### Base de datos (CSV). Cómo la procesaron hasta dejarla lista para usar en la visualización y por qué la seleccionaron.



Ejemplos sobre preguntas que puede responder su visualización de datos final (o el conjunto de visualizaciones que crearon).