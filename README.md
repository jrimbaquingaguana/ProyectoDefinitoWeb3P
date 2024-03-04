# EasyClass - Plataforma Educativa en Línea

## Integrantes

- Ricardo Rivadeneira
- Jose Imbaquinga

## NRC

14949

## GitHub del Proyecto

[EasyClass GitHub Repository](https://github.com/jrimbaquingaguana/ProyectoDefinitoWeb3P)

## Informe de Proyecto Tecnológico

### Tema

EasyClass es una plataforma educativa en línea diseñada para ofrecer una gestión eficiente de cursos, permitiendo a los estudiantes acceder a contenido educativo y a los administradores (profesores) gestionar los cursos a través de una interfaz intuitiva y amigable.

### Problema

La gestión de cursos en entornos educativos convencionales puede ser compleja, ineficiente y consume mucho tiempo. La falta de herramientas automatizadas dificulta la experiencia de aprendizaje y la eficiencia en la gestión académica.

### Objetivos

#### Objetivo General

Desarrollar EasyClass, una plataforma educativa en línea que simplifique y mejore la gestión de cursos, ofreciendo una experiencia de usuario óptima para estudiantes y profesores.

#### Objetivos Específicos

- Facilitar el acceso a contenidos educativos.
- Proporcionar una interfaz intuitiva para la gestión de cursos.
- Implementar tecnologías avanzadas para garantizar la calidad y eficiencia del sistema.

### Justificación

EasyClass busca mejorar la gestión académica y la experiencia de aprendizaje al ofrecer acceso fácil a materiales educativos, seguimiento de progreso, y una interfaz interactiva para una gestión eficiente de los cursos.

### Marco Teórico

El proyecto se inspira en la evolución de los MOOCs y la necesidad de adaptar metodologías educativas para satisfacer las demandas de estudiantes en entornos no formales de aprendizaje.

### Metodología

Se utiliza un modelo en cascada con elementos ágiles para el desarrollo del proyecto, permitiendo flexibilidad y adaptabilidad en el proceso de desarrollo.

### Fases del Desarrollo

1. **Requisitos**: Definición y documentación de los requisitos de EasyClass.
2. **Diseño**: Creación de diseños detallados para la plataforma.
3. **Implementación**: Desarrollo de los componentes de EasyClass.
4. **Pruebas**: Verificación de la funcionalidad y estabilidad del sistema.
5. **Despliegue**: Instalación y configuración en un entorno de producción.

### Conclusiones

- Se han definido claramente los casos de uso y requisitos para EasyClass.
- La metodología híbrida adoptada ha resultado en un proceso de desarrollo eficiente.
- Las pruebas iterativas han mejorado la calidad y fiabilidad de la plataforma.

### Recomendaciones

- Implementar pruebas continuas e iterativas.
- Adoptar elementos de metodologías ágiles para mantener la flexibilidad.
- Priorizar la seguridad y privacidad de los datos desde el inicio.

### Anexos

#### Casos de Uso

- **Crear cuenta de usuario**
- **Iniciar sesión**
- **Crear nuevo curso**
- **Editar información de los cursos**

#### Requisitos No Funcionales

- Usabilidad, Rendimiento, Seguridad, Disponibilidad, Almacenamiento, Confiabilidad.

### Implementación Final

Vistas de los cursos desde perspectivas de profesor y estudiante, edición de cursos, perfil de usuario, creación de nuevo curso, registro de estudiantes, login y página de bienvenida.

## Herramientas

- Nodejs
- Mysql
- Babel
- Docker

## Pasos para Ejecutar el Proyecto

Para poner en marcha EasyClass en tu entorno local, sigue estos pasos detalladamente:

1. **Clonar el Repositorio**: Primero, necesitas tener el código fuente en tu máquina local. Abre una terminal y ejecuta el siguiente comando para clonar el repositorio de GitHub:

    ```bash
    git clone https://github.com/jrimbaquingaguana/ProyectoDefinitoWeb3P.git
    ```

2. **Instalar Dependencias**: Una vez clonado el repositorio, navega al directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

    ```bash
    cd ProyectoDefinitoWeb3P
    npm install
    ```

3. **Ejecutar Docker Compose**: Con Docker Desktop ya instalado y ejecutándose en tu máquina, utiliza Docker Compose para crear e iniciar los contenedores necesarios para el proyecto:

    ```bash
    docker-compose up -d
    ```

4. **Verificar el Contenedor en Docker Desktop**: Asegúrate de que el contenedor se ha creado y está ejecutándose correctamente abriendo Docker Desktop y buscando el contenedor de EasyClass en la lista de contenedores activos.

5. **Iniciar el Proyecto**: Con las dependencias instaladas y los contenedores en ejecución, es momento de iniciar el servidor de desarrollo de EasyClass:

    ```bash
    npm run dev
    ```

6. **Acceder a EasyClass**: Finalmente, abre tu navegador web preferido e ingresa la siguiente URL para acceder a EasyClass:

    ```
    http://localhost:4000
    ```

¡Listo! Ahora deberías tener EasyClass ejecutándose localmente en tu máquina. Sigue las instrucciones en pantalla para comenzar a explorar todas las funcionalidades de la plataforma.

