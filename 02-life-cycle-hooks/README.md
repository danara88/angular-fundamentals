# Lifesycle hook methods

Los hooks son metodos que utilizamos en nuestros componentes para controlar su ciclo de vida. Ejemplo:

- Hacer alguna acción si el componente se destruye.
- Hacer alguna acción si el componente es inicializado.
- Hacer alguna acción si el componente detecta cambios en si mismo.

---

## constructor()

Este no es considerado un hook, pero el constructor siempre se ejecuta primero.

## ngOnChanges()

Los componentes pueden tener propiedades input, los cuales son denotadas por el decorador `@Input`.
Este hook se va a ejecutar siempre y cuando el valor de una propiedad input cambie.

## ngOnInIt()

Este hook se ejecuta cuando el componente es inicializado.

## ngDoCheck()

Este hook se ejecuta cuando detecta cualquier cambio dentro de nuestro componente.
Sirve para detectar cambios que el ngOnChanges no puede detectar. Por ejemplo, si se hizo click en un boton, si se esta escribiendo dentro de un input de un formulario, etc.
Permite hacer detección de cambios personalizados del componente.

## ngAfterContentInit

Este hook solo se ejecuta una sola vez después de haber inicializado el contenido del componente (contenido proyecto o insertado en el componente por medio del `<ng-content>`).
Es decir, después de que Angular ha insertado el contenido en el componente. Este contenido tiene que ser inserdatdo por medio de la etiqueta `<ng-content>` en un componente padre.

Contenido proyectado: Se refiere al HTML que se inserta en un componente.

OJO: Se ejecuta cuando el contenido del componente se inicializa, esto no incluye sus componentes hijos (views). No se ocupa de las vistas internas ni de los componentes hijos.

## ngAfterContentChecked

A diferencia del hook ngAfterContentInit que se ejcuta una sola vez, el hook ngAfterContentChecked se ejecuta cada vez que Angular detecta cambios en el contenido proyectado del componente.

## ngAfterViewInit

Este hook se ejecuta una sola vez despupes de haber inicializado las vistas del componente y sus vistas hijas.
Esto significa que tanto la vista del componente en sí como cualquier vista de los componentes hijos ya están completamente inicializadas.
Este es útil para trabajar con el DOM y realizas configuraciones que dependan en gran medida de las vistas completas del componente y de sus hijos.

## ngAfterViewChecked

Este hook se ejecuta cuando se detecta un cambio en la vista del componente o de sus vistas hijas.
¿Cuál es la diferencia entre este hook y ngDoCheck?
ngDoCheck permite implemente detección de cambios personalizados dentro de nuestro componente, mientas que ngAfterViewChecked no.

## ngOnDestroy

Este hook se ejecuta antes de que el componente se destruya.
