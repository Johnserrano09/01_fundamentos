import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-perfil-page',
  imports: [RouterLink],
  templateUrl: './perfilPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilPage {
  name = signal('John');
  lastName = signal('Serrano');
  age = signal(21);

  getFullName() {
    return `${this.name()} ${this.lastName()} con edad ${this.age()} años`;
  }

  changeData() {
    this.name.set('Maria');
    this.lastName.set('Serrano');
    this.age.set(25);
  }

  resetData() {
    this.name = signal('John');
    this.lastName = signal('Serrano');
    this.age = signal(21);
  }

  changeAge() {
    this.age.set(18);
  }
}
