# MÓDULOS Y COMPONENTES

## ¿Qué es un módulo?

Un módulo es un contenedor que esta dedicado a una parte específica de tu aplicación.
Ejemplo:

- Módulo de usuarios
- Módulo de ordenes
- Módulo de compras

---

## ¿Qué es un componente?

Un componente es un bloque lógico el cual forma parte de tu aplicación.
Los componentes constituyen las vistas (conocidas como view) de tu aplicación.
Ejemplo:

- NavbarComponent
- SidebarComponent
- PostComponent
- CardComponent

Los componentes son útiles para evitar duplicar código, ya que pueden ser reutilizados.

---

## ¿Qué son los decoradores?

Los decoradores nos permiten añadir funcionalidades extras a una clase, propiedad o parámetro.
En angular es común usar los decoradores para destinguir la responsabilidad de cada clase.
Ejemplo:

- Si una clase de tiene que comportar como módulo, le añadimos el decorador: **@NgModule**
- Si una clase de tiene que comportar como componente, le añadimos el decorador: **@Component**
- Si una propiedad se tiene que comportar como un input le añadimos el decorador: **@Input**
- Si una propiedad se tiene que comportar como un output le añadimos el decorador: **@Output**
