# Angular forms

---

## Template-based forms

Templase-base forms usan two-way data binding para actualizar información relacionada a un modelo de un componente.
Este usa directivas para su construcción.

---

## Reactive forms

Los formularios reactivos son aquellos que son creados utilizando el componente.
Los formularios reactivos son una herramienta que nos provee Angular para crear formularios inmutables y poder crearlo sin usar two-way data binding.

---

# Data Binding

- **Interpolation**: Ejemplo: `{{ product.name }}`

- **Property Binding**: Ejemplo: `<img [src]="product.image" />`

- **Event Binding**: Ejemplo: `<img (click)="toggleImage()" />`

- **Two-way Binding**: Ejemplo: `<input [(ngModle)]="product.name" />`
