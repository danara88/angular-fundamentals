# ARQUITECTURA DE UNA APLICACIÓN DE ANGULAR

- **node_modules**: Aquí estan todas las dependencias que han instalado para su proyecto. Este archivo se genera automaticamente al ejecutar el comando `npm install`.

- **public**: Sirve para alamacenar archivos estáticos como imágenes, archivos, etc. En otros frameworks podemos encontrar un archivo llamado "/assets", lo cual es lo mismo que la carpeta "/public".

- **src**: Aquí se encuentra el corazón de tu proyecto; este es el directorio principal donde se encuentra el código fuente.

  - **app/**: Aquí estan nuestros componentes, módulos, directivas, pipes, guards, entre otros elementos que constituyen nuestra aplicación.
  - **main.ts**: Punto de entrada de nuestra aplicación.
  - **styles.css**: Estilos globales. Esta se puede configurar en el archivo angular.json
  - **index.html**: HTML principal de nuestra aplicación.

- **angular.json**: Este archivo sirve para configurar tu proyecto de Angular. Puedes agregar la hoja de estilos global de tu aplicación, establecer reglas de compilación, scripts, etc. En general aqui se encuentran configuraciones globales de tu proyecto.

- **package.json**: Aqui se encuentra las depencias de producción y de desarrollo instaladas en tu proyecto junto con su versionamiento. Este archivo se genera ya que estamos usando node JS para generar los proyectos de Angular.

- **package-lock.json**: Este archivo se genera automaticamente al ejecutar el comando `npm install`. Este complementa al archivo package.json y lleva el registro de las dependencias instaladas, entre otras funcionalidades.

- **tsconfig.json**: Archivo de configuración de TypeScript.
