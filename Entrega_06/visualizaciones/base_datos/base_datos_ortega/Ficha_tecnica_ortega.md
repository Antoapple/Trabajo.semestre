# Ficha técnica
#### Analía Ortega

### Características de los datos:
1. Procesados
2. Estructurados
3. Cualitativos que se transformaron en cuantitativos (fueron cuantificados). Los conciertos se transformaron en un valor
4. Obtenidos de una investigación de campo
5. De fuentes abiertas (provienen de la primera base de datos correspondiente a conciertos)

### Variables incorporadas:

**Recinto**: Se refiere a los nombres de los diez recintos donde se realizaron o se agendaron (considerando aquellos cancelados) conciertos masivos de música en 2024.

**Fecha**: Alude a todas las fechas (día/mes/año) en que se realizaron o agendaron conciertos masivos durante 2024.
Se organizan por mes en el eje X para facilitar la visualización.

*Para Tooltip*

**Conciertos**: Considera los nombres de todos los conciertos realizados durante 2024.

**Artista**: Agrupa todos los artistas que participaron en los conciertos realizados en 2024.

**Fecha**

### Observaciones sobre la base de datos:

El CSV incluye otras variables como ID, productora/organizadora, tiquetera, numero_asistentes   tipo_ artista, artista, rango_precios, opcion_descuento_entrada, preventa, cancelado, cambio_recinto, genero_musical. Considerando el CSV de la entrega N°2, este ya no cuenta con tildes, signos de peso o palabras en las casillas de asistentes que se mezclen con números, aunque de estas columnas no utilice ninguna información. También me parece importante mencionar que, si bien no quise alterar la base para afectar sustancialmente los datos, en Colab sí utilicé códigos para filtrar por fecha (no ID), considerar solo un concierto, pese a que más de un artista se presentó en esa fecha (artistas invitados, por ejemplo), y no considerar los eventos cancelados. No quise limpiar estos datos como tal del CSV debido a que no quería transmitir, en los datos limpios, que estos conciertos no existieron, por ejemplo, en el caso de los eventos cancelados. 
