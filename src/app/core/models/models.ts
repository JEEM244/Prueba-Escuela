export type Role = 'ADMIN' | 'ALUMNO' | 'PADRE' | 'SOPORTE';
export type TaskStatus = 'PENDIENTE' | 'EN_PROGRESO' | 'COMPLETADA';
export type Priority = 'BAJA' | 'MEDIA' | 'ALTA';
export type ReportStatus = 'PENDIENTE' | 'EN_REVISION' | 'EN_PROCESO' | 'RESUELTO';

export interface User { id: string; nombre: string; email: string; password: string; rol: Role; activo: boolean; alumnoId?: string; hijos?: string[]; }
export interface Student { id: string; nombre: string; grupo: string; grado: string; padreId: string; }
export interface Task { id: string; alumnoId: string; titulo: string; descripcion: string; materia: string; fecha: string; prioridad: Priority; estado: TaskStatus; fechaCreacion: string; }
export interface Subject { id: string; nombre: string; profesor: string; grupo: string; horario: string; aula: string; }
export interface Platform { id: string; nombre: string; url: string; descripcion: string; tipo: string; }
export interface Report { id: string; ubicacion: string; descripcion: string; usuarioId: string; fecha: string; estado: ReportStatus; comentarios: string[]; }
export interface Notice { id: string; titulo: string; contenido: string; fecha: string; importancia: string; autor: string; }
export interface EventItem { id: string; titulo: string; fecha: string; tipo: string; alumnoId?: string; }
export interface Database { usuarios: User[]; alumnos: Student[]; padres: Array<{ id: string; nombre: string; hijos: string[] }>; tareas: Task[]; materias: Subject[]; plataformas: Platform[]; reportes: Report[]; avisos: Notice[]; eventos: EventItem[]; }
