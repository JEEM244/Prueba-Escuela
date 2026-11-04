# Centro Escolar

Centro Escolar es un prototipo local de una plataforma para organizar algunas funciones escolares. Lo estoy usando para practicar Angular, rutas, componentes y manejo de datos en el navegador.

No tiene un servidor ni una base de datos. Todo funciona en la computadora donde se abre el proyecto.

## Qué tiene

- Inicio y cierre de sesión de demostración.
- Pantallas distintas según el rol.
- Secciones para usuarios, materias y avisos.
- Tareas personales.
- Calendario.
- Reportes de soporte.
- Datos de prueba.
- Guardado en localStorage.

## Cómo ejecutarlo

Necesitas Node.js 20.19 o superior.

```bash
npm install
npm start
```

Después abre:

```text
http://localhost:4200
```

Para compilar:

```bash
npm run build
```

## Cómo está organizado

La aplicación usa componentes standalone de Angular. Las rutas separan las secciones y los servicios se encargan de leer y guardar los datos en localStorage.

## Importante sobre la seguridad

Este proyecto es solamente una demostración local. La sesión y los datos están en el navegador, por lo que no sirve para manejar información escolar real.

No tiene autenticación segura en servidor, contraseñas protegidas ni permisos que puedan considerarse seguros. Los usuarios de demostración son únicamente para probar la interfaz.

## Qué falta

Para convertirlo en una aplicación real habría que crear un backend, conectar una base de datos, implementar autenticación segura y validar los permisos desde el servidor.

Este proyecto me ayuda a practicar Angular y a entender cómo se conectan las rutas, los componentes y los servicios.
