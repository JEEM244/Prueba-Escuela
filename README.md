# Centro Escolar

Prototipo local de una plataforma escolar con Angular standalone, Router y dashboards diferenciados por rol. Las páginas legacy se conservan como respaldo durante la migración.

## Cómo ejecutar

1. Instala Node.js 20.19 o superior.
2. Abre una terminal en esta carpeta.
3. Ejecuta `npm install`.
4. Ejecuta `npm start` y abre `http://localhost:4200`.

Para generar una versión de producción usa `npm run build`. El resultado queda en `dist/centro-escolar`.

No necesita PHP, MySQL, Docker ni backend.

## Usuarios de prueba

Todos usan la contraseña `123456`.

- `admin@test.com` — ADMIN
- `alumno@test.com` — ALUMNO
- `padre@test.com` — PADRE
- `soporte@test.com` — SOPORTE

## Qué contiene

- Login y logout.
- Sesión local.
- Protección básica de páginas por rol.
- Dashboard distinto para cada rol.
- Administración de usuarios, materias y avisos.
- Tareas personales para alumnos.
- Calendario.
- Materias.
- Accesos directos a plataformas mediante enlaces.
- Reportes de soporte, cambio de estados y comentarios.
- Datos iniciales de prueba.
- Persistencia con localStorage.
- Diseño responsive y modo oscuro.

## Angular

La entrada está implementada con componentes standalone en `src/app`. `AuthService` conserva la sesión en `localStorage` con la clave `ce_session`, y `roleGuard` protege `/admin`, `/alumno`, `/padre` y `/soporte`. `StorageService` centraliza toda la lectura y escritura de datos. SOPORTE solo gestiona reportes y comentarios; ADMIN conserva el control global.

## Almacenamiento

Los datos se guardan en `localStorage`. Pertenecen al navegador y a la computadora donde se ejecuta el prototipo; no son una base de datos compartida entre computadoras.

Si quieres reiniciar todos los datos del prototipo, elimina el almacenamiento del sitio desde las herramientas/configuración del navegador.

## Limitaciones y seguridad

Esto es solamente un prototipo local. Las contraseñas y la sesión están manejadas en JavaScript/localStorage, por lo que el sistema **NO es seguro para producción**. No hay backend, hashing de contraseñas, autorización real en servidor, base de datos compartida ni control de acceso confiable.

Los enlaces de SIASE y otras plataformas son solamente accesos directos. El proyecto no intenta iniciar sesión automáticamente, no inventa APIs y no integra datos privados de esas plataformas.

## Siguiente arquitectura

La migración futura puede hacerse así:

`localStorage → API → base de datos`

En esa etapa se podrá implementar autenticación real, hashing de contraseñas, sesiones/tokens seguros, permisos en backend, validación del servidor y una base de datos real.
"# Prueba-Escuela" 
