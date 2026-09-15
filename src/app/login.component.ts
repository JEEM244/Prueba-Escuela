import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';

@Component({
  standalone: true, imports: [FormsModule],
  template: `<main class="login-page"><section class="intro"><div class="brand-mark">CE</div><p class="eyebrow">PLATAFORMA ESCOLAR</p><h1>Todo el ciclo escolar,<br><em>en un mismo lugar.</em></h1><p class="intro-copy">Organiza materias, tareas, avisos y reportes con una experiencia sencilla para toda la comunidad.</p><div class="signals"><span><b>01</b> Acceso por rol</span><span><b>02</b> Datos siempre a la mano</span></div></section><section class="login-panel"><div class="panel-top"><span class="live-dot"></span> Portal activo</div><h2>Bienvenido de vuelta</h2><p class="muted">Ingresa para continuar con tu jornada.</p><form (ngSubmit)="submit()" #form="ngForm"><label for="email">Correo institucional</label><input id="email" name="email" type="email" [(ngModel)]="email" required autocomplete="email" placeholder="nombre@centro.edu"><label for="password">Contraseña</label><input id="password" name="password" [type]="showPassword ? 'text' : 'password'" [(ngModel)]="password" required autocomplete="current-password" placeholder="Tu contraseña"><button class="password-toggle" type="button" (click)="showPassword=!showPassword">{{ showPassword ? 'Ocultar' : 'Mostrar' }}</button>@if (error) {<p class="error" role="alert">{{ error }}</p>}<button class="submit" type="submit" [disabled]="form.invalid">Entrar al portal <span>→</span></button></form><div class="demo-heading"><span>CUENTAS DE DEMOSTRACIÓN</span><i></i></div><div class="demo-list">@for (demo of demos; track demo.email) {<button class="demo" type="button" (click)="useDemo(demo.email)"><span class="avatar">{{ demo.initials }}</span><span><strong>{{ demo.label }}</strong><small>{{ demo.email }}</small></span><b>↗</b></button>}</div><p class="security-note">▣ Prototipo local. Los datos se guardan en este dispositivo.</p></section></main>`
})
export class LoginComponent {
  private readonly auth = inject(AuthService); private readonly router = inject(Router);
  email = ''; password = ''; error = ''; showPassword = false;
  demos = [{ label: 'Administrador', email: 'admin@test.com', initials: 'AD' }, { label: 'Alumno', email: 'alumno@test.com', initials: 'AA' }, { label: 'Padre de familia', email: 'padre@test.com', initials: 'CP' }, { label: 'Soporte', email: 'soporte@test.com', initials: 'SP' }];
  useDemo(email: string): void { this.email = email; this.password = '123456'; this.error = ''; }
  submit(): void { const user = this.auth.login(this.email, this.password); if (!user) { this.error = 'Revisa tu correo y contraseña e inténtalo de nuevo.'; return; } void this.router.navigateByUrl(`/${user.rol.toLowerCase()}`); }
}
