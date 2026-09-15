import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { StorageService } from './core/services/storage.service';

@Component({
  selector: 'ce-root', standalone: true, imports: [RouterOutlet], template: '<router-outlet />'
})
export class AppComponent implements OnInit {
  private readonly storage = inject(StorageService);
  private readonly auth = inject(AuthService);
  async ngOnInit(): Promise<void> { await this.storage.init(); this.auth.restore(); }
}
