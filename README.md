<p align="center"> <img src="https://github.com/MarGo-20/BOG001-data-lovers/blob/master/src/images/pokemonLogo.png" width="300"> </p>

# PokemonDeta (Proyecto - Data Lovers)

## Índice

1. Descripción del proyecto
2. Investigación UX
3. Historias de Usuarios
4. Prototipos de baja y Alta fidelidad (Responsive)
5. Testeos de usabilidad
6. Objetivos de aprendizaje
7. Checklist

***

## 1. Descripción del proyecto

PokémonDeta (Pokémon: Monstruos de bolsillo, Deta: Datos), es una app que permite al usuario consultar información acerca de los pokemones y facilitar su experiencia en el juego de PokémonGo.

Nuestros principales usuarios serán los jugadores de pokémon Go y todas las personas interesadas en conocer más acerca de los pokemones. 
Siempre que lo deseen podrán acceder de manera eficiente a la información de los pokémones que sean de su interés.

* Buscar sus pokemones por nombre o por número.
* Filtar sus pokemones por tipo y debilidad.
* Ordernarlos de manera ascendente y descendente por número.
* Al seleccionar un pokémon puede ver las caracteristicas, evoluciones y demás información correspondiente al mismo.
* Conocer de la historia pokémon.


## 2. Investigación UX

Dentro de la investigación UX realizada a los usuarios del juego PokémonGo se identificaron varios hallazgos:

* Los Pokémon tienen características únicas que determinan las decisiones que toma el usuario (tipo, debilidad, peso, multiplicador, etc.)
* Un maestro Pokémon antes de salir a casar los Pokémon tienen que: saber el top 10 de frecuencia de aparición de los Pokémon.
* Los Pokémon tienen distintos tipos y debilidades de combate. Estas características son importantes cuando un maestro Pokémon elige al Pokémon más adecuado para su batalla. Hay veces que tiene que elegir a los que tienen menos cantidad de debilidades y saber de que tipo son. Por ello, es importante para un maestro Pokémon poder ordenarlos por estas 2 características.
* Los Pokémon evolucionan y es importante para un maestro Pokémon saber cuántas y cuáles son las evoluciones que tienen antes y después.
* Los Pokémon se alimentan de caramelos y un maestro Pokémon necesita saber cuántos caramelos necesita un Pokémon para evolucionar.


Partiendo de lo anterior trabajamos las siguientes historias de usuario:

* H1: Yo como jugador de Pokémon quisiera ver el listado de todos los Pokémon con sus características para conocer nuevos pokemones.
* H2: Yo como jugador Pokémon necesito conocer cuántas y cuáles son las evoluciones que tiene cada pokémon antes y después para saber que tanto puede evolucionar y qué tan fuerte puede llegar a ser.
* H3: Yo como jugador pokémon quisiera poder filtrar los pokemones por nombre o número para encontrar rápido el pokémon que busco en específico.
* H4: Yo como jugador de Pokémon quiero poder filtrar por tipo para saber cuál elegir en cada batalla.
* H5: Yo como jugador de Pokémon quiero filtrar por debilidad de combate para saber cuál elegir en mi batalla.


Criterios de aceptación:

* Que sea responsive.
* Que tenga nombre del pokémon, imágen y que su número asignado se visualice en la interfaz.
* En sus características incluir tipo, multiplicador, debilidades, evoluciones anteriores y posteriores, caramelos y cantidad necesarios para evolucionar.
* Que permita filtrar y ordenar la data.


Definición de Terminado:

* Pair programming.
* Test de usabilidad con 3 usuarios, incorporando las mejoras que se identifican con la iteración del test.
* Feedback con coaches.
* Manejo del código usando git y git hub.
* Realizar repositorio y git hub pages.
* Test Unitarios, verificar si las funciones pasan dichos test.


## 3. Prototipos de baja y Alta fidelidad (Responsive)

Posterior a la investigación UX y nuestras historias de usuario, construimos los prototipos de baja fidelidad para poder ralizar las primeras iteraciones con usuarios y poder ajustar el diseño de la app.

Visualizacion tamaño Escritotio
<p align="center"> <img src= "https://github.com/MarGo-20/BOG001-data-lovers/blob/master/src/images/Visual%20Desktop%20v1.jpeg"  height="400" width="1000"> </p>

Visualizacion tamaño Móvil
<p align="center"> <img src= "https://github.com/MarGo-20/BOG001-data-lovers/blob/master/src/images/prototype%20movil%20v1.1.jpg"  height="400" width="950"> </p>

Luego de estas iteraciones recibimos feedback para ajustar algunas de las opciones de busqueda y de la visual que tendria el usuario.

Visualizacion tamaño Móvil ajustada
<p align="center"> <img src= "https://github.com/MarGo-20/BOG001-data-lovers/blob/master/src/images/prototype%20movil%20v1.2.jpg" height="450" width="950"> </p>


Finalizando este proceso, desarrollamos nuestro prototipo de alta fidelidad para dar incio con la maquetación del proyecto.

Link: https://www.figma.com/file/RPnK1MIEGEeDAzqmlegFs7/Pokemon-Deta?node-id=0%3A1

Prototipo de alta fidelidad para escritorio.
<p align="center"> <img src= "https://github.com/MarGo-20/BOG001-data-lovers/blob/master/src/images/prototype%20figma%20escritorio.jpg" height="250 width="750"> </p>
Prototipo de alta fidelidad para tablet.
<p align="center"> <img src= "https://github.com/MarGo-20/BOG001-data-lovers/blob/master/src/images/prototype%20figma%20tablet.jpg" height="350 width="550"> </p>
Prototipo de alta fidelidad para móvil.
<p align="center"> <img src= "https://github.com/MarGo-20/BOG001-data-lovers/blob/master/src/images/prototype%20figma%20movil.jpg" height="300 width="400"> </p>

Paleta de colores.
<p align="center"> <img src= "https://github.com/MarGo-20/BOG001-data-lovers/blob/master/src/images/palette%20color.jpg" height="150 width="700"> </p>
Para el desarrollo de este prototipo tuvimos encuenta una paleta de colores frios Vs calidos para generar contraste con los tonos frios, acento con los tonos calidos e implementación de tonos neutros para dar balance. Teniendo en cuenta la jerarquía del mensaje y el contenido en general. 


## 4. Testeos de usabilidad

Realizados nuestros testeos de usuabilidad con varios usuarios, recibimos aportes que nos ayudaron a ajustar nuestro diseño de maquetación para mejorar la UI.
Varios de estos aportes fueron orientados a la visual del menú de opciones y a la presentacion del template (Tarjeta informativa de los pokémones).


## 5. Objetivos de aprendizaje

### HTML y CSS

* [x] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [x] Uso de selectores de CSS.
* [x] Construir tu aplicación respetando el diseño realizado (maquetación).
* [x] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [x] Uso de selectores del DOM.
* [x] Manejo de eventos del DOM.
* [x] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [x] Uso de condicionales (if-else | switch | operador ternario)
* [x] Uso de bucles (for | for..in | for..of | while)
* [x] Uso de funciones (parámetros | argumentos | valor de retorno)
* [x] Manipular arrays (filter | map | sort | reduce)
* [x] Manipular objects (key | value)
* [x] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [x] Diferenciar entre expression y statements.
* [x] Diferenciar entre tipos de datos atómicos y estructurados.

### Testing

* [x] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [x] Organizar y dividir el código en módulos (Modularización)
* [x] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [x] Uso de linter (ESLINT)

### Git y GitHub

* [x] Uso de comandos de git (add | commit | pull | status | push)
* [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [x] Colaboración en Github (branches | pull requests | |tags)

### UX

* [x] Diseñar la aplicación pensando y entendiendo al usuario.
* [x] Crear prototipos para obtener feedback e iterar.
* [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [x] Planear y ejecutar tests de usabilidad.


## 6. Checklist

* [x] Usa VanillaJS.
* [x] No hace uso de `this`.
* [x] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [x] Incluye link a Zeplin o Figma en `README.md`.
* [x] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.
