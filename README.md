<p align="center"> <img src="https://github.com/MarGo-20/BOG001-data-lovers/blob/master/src/images/pokemonLogo.png" width="350"> </p>

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

* Buscar sus pokemones por nombre o por número.
* Filtar sus pokemones por tipo y debilidad.
* Ordernarlos de manera ascendente y desendente por número.
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

## 3. Prototipos de baja y Alta fidelidad (Responsive)

Posterior a la investigación UX y nuestras historias de usuario, construimos los prototipos de baja fidelidad para poder ralizar las primeras iteraciones con usuarios y poder ajustar el diseño de la app.

<p align="center"> <img src= "" width="350"> </p>



Luego de estas iteraciones resivimos feedback para ajustar algunas de las opciones de busqueda y de la visual que tendria el usuario.

<p align="center"> <img src= "" width="350"> </p>


Finalizando este proceso, desarrollamos nuestro prototipo de alta fidelidad para dar incio con la maquetación del proyecto.

<p align="center"> <img src= "" width="350"> </p>

Link: 


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
