## Ejercicios Bootcamp JavaScript - Módulo 5 - Funciones y Eventos - Extra

  
  ### Calculadora Secuencial
  
  # Carpeta ./Calcuuladora_secuencial

Repite el ejercicio de la calculadora pero esta vez hagamos una calculadora secuencial. Esto es:

Solo es necesario un único campo numérico.
Mantén los 4 botones de las 4 operaciones.
Añade un botón de igual o resultado ( "=" ).
Una calculadora secuencial funciona del siguiente modo:

El usuario introduce un primer número.
Clicka una operación.
A continuación introduce un segundo número.
Clicka de nuevo otra operación.
Y así sucesivamente... hasta que pulsa el botón de resultado.
Si te fijas, la clave de este algoritmo es ir acumulando el resultado parcial. Para ello, con cada click que el usuario hace en una operación, deberás:

Extraer el operando que hay en el input.
Actualizar el resultado parcial, que será aplicar la operación anterior guardada, usando como operandos el resultado parcial y el nuevo operando.
Almacenar la operación actual para la siguiente vez.
NOTA: Gran parte de las funciones que vimos en la calculadora básica podrían servirte aqui también.

### Reservas en un Hotel
Vamos a simular un formulario de reserva de un hotel. Para ello añade los siguientes inputs a tu HTML:

Selector de tipo de habitación, a elegir entre Standard, Junior Suite y Suite (< select >)
Checkbox para hacer uso del SPA o no (< input > tipo checkbox)
Selector para indicar la ocupación de la habitación, a elegir entre Individual, Doble o Triple (< select >)
Número de noches (< input > tipo número)
Cuantas noches de parking se desea (< input > tipo número)
Finalmente un botón de 'Calcular' para mostrar por pantalla el coste total de la estancia.
Para calcular el coste de la estancia ten en cuenta lo siguiente:

La tarifa de la habitación por noche es de 100€ para categoría Standard, 120€ Junior Suite y 150€ Suite.
El uso del SPA incrementa la tarifa anterior en 20€.
Una vez tengas la tarifa en función de la categoría y el SPA, la ocupación (individual o triple) actúa como un factor de decremento o incremento, siendo la opción de doble el estándar. Es decir, el uso individual reduce un 25% la tarifa por noche, mientras que el uso triple la incrementa en un 25%. El uso doble la deja tal cual.
Cada noche de parking suma 10€.
Un ejemplo de estancia sería:

5 noches x Hab. Estándar con SPA de uso individual + 2 noches de parking. En este caso la tarifa por noche sería: (100€ noche + 20€ spa) al 75% por uso individual = 90€/noche x 5 noches = 450€ + (10€ parking x 2 noches) = 470€ TOTAL.

#### OPCIONAL

Prescinde del botón calcular y muestra el resultado total a medida que el usuario va haciendo cambios en el formulario.
