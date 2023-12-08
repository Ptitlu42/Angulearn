import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <app-layout-core>
    <div>
      <button>Liste des héros</button>
      <button>Détails d'un héros</button>
    </div>
  </app-layout-core>
  `,
})

export class AppComponent {
  title = 'angulearn';
}
