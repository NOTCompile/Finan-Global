# [FinanGLobal](https://finan-global.netlify.app/)

Este proyecto sienta las bases para el fortalecimiento de FinanGlobal S.A.C. en el mercado financiero regional mediante la incorporación de servicios digitales de alto valor agregado.

## Tecnologías Utilizadas
1. Angular CLI version 20.3.3
2. Bootstrap version 5.3.8
3. Flaticon version 3.3.1

## Servidor Local de Desarrollo
Para levantar el servidor de desarrollo con recarga en vivo (si editas un archivo, se refresca automáticamente el navegador).
Realizar los siguientes pasos:
1. Clonar el repositorio.
2. Instalar las dependencias con:

 ```bash 
npm install
 ```

3. Situarse dentro de la carpeta del proyecto e iniciar el servidor con:

```bash
ng serve
```

4. En su navegador web ingresar a `http://localhost:4200/`

## Compilación en modo desarrollo
En Angular, el término build se refiere al proceso de compilar y empaquetar tu aplicación para que pueda ejecutarse de manera óptima en un navegador o en un servidor.
1. Ejecutar el comando:

```bash
ng build
```

En Angular, el término `build` se refiere al proceso de compilar y empaquetar tu aplicación para que pueda ejecutarse de manera óptima en un navegador o en un servidor.

2. El resultado del build aparece en la siguiente ruta: `dist/FinanGlobal/browser`

## Visulización Online mediante [Netlify](https://www.netlify.com/)
Netlify es una plataforma en la nube que te permite desplegar aplicaciones web (estáticas y JAMstack) de manera sencilla y rápida.
1. Crear una cuenta en Netlify e iniciar sesión
2. Crear un nuevo proyecto y completar con su información
3. Subir la carpeta `browser` que esta dentro de la ruta `dist/FinanGloba/`
4. Visualizar la página mediante el link proporcionado por Netlify