# Store

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### Construyendo una directiva propia
``` ng g d highlight 
ng g m admin --routing
```


### Introducción al NgModule
Modularize nuestra app por dominios, módulos especiales el modulo core y el modulo share
Los módulos y rutas sirven para dividir y abstraer mejor por dominio la aplicación.

Los componentes que hacen parte de una página en particular se pueden encapsular en un mismo módulo.

Los módulos especiales son core y shared.

Core: guarda todos los servicios y componentes que usaremos a lo largo de todos los otros módulos.
Shared: podemos almacenar componentes y servicios compartidos.

### Implementación del Lazy Loading
Preparar el proyecto para Lazy Loading
Ésta técnica se encarga de fragmentar el archivo generado main.js para que cargue más rápido la aplicación, basada en la técnica “divide y vencerás”, cargando siempre el código JavaScript necesario para que la vista funcione de manera adecuada.

Con ésto claro, un pre-requisito fundamental es modularizar la aplicación. Un módulo encapsula varios elementos de la aplicación (components, directivas, servicios, etc)

Modularizando home:

Crear archivo home/home.module.ts
ng g module components/home

Crear carpeta home/components
Copiar y pegar los componentes que el módulo home va a utilizar
Eliminar el componente del array de declarations de otros módulos e importarlo al módulo creado
Crear el routing para el módulo Home. En angular cada módulo debe tener un routing
cd src/app/components/home
ng g module home-routing --flat --module=home

### Esta clase es oro. La clave para separar los módulos es:

Crear una carpeta que contendrá el módulo
Crear un módulo que llame a todos los componentes que utilizará
Crear un módulo para sus rutas
Cambiar la importación dentro del routing principal
Eliminar referencias o errores que surjan por el movimiento

### Ambientes en Angular
Un entorno de aplicación en Angular (environment) es información de configuración JSON que le dice al sistema de compilación qué archivos cambiar cuando usa ng build y ng serve.
.
La recomendación es hacer ambientes dentro del directorio environments/environment.[nombre].ts, y para registrarlo necesitas modificar el archivo angular.json
.
Para agregar un nuevo ambiente al angular.json se necesitan duplicar el environment de build y de serve dentro de projects.<project-name>.architect.build.configurations.nameOfNewEnvironment y de projects.<project-name>.architect.serve.configurations.production y cambiar production por el nombre que quieras que reciba tu environment, como staging o local, etc.
.
Recuerda que es muy delicado este archivo y que lo tienes que hacer a conciencia, además de que tienes que colocar la ruta de tu archivo de environments en fileReplacements, porque lo que hace este archivo es reemplazar las ocurrencias de importación de src/environments/environment.ts por el archivo de ambiente que le indiques.


```
{
  projects: {
    nameOfProject: {
      ...
      architect: {
        build: {
          ...
          production: {} <-- Duplicar este objeto
        },
        serve: {
          configurations: {
            ...
            production: {} <-- Duplicar este objeto
          }
        }
      }
    }
  }
}

```

```
ng serve -c=stag
<!-- Productivo -->

ng build -c=stag
```