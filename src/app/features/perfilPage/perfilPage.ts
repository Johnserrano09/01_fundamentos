import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-perfil-page',
  standalone: true,
  templateUrl: './perfilPage.html',

})
export class PerfilPage {
  name = signal('Adrian');
  lastName = signal('Lazo');
  age = signal(26);


  getFullName() {
    return `${this.name()} ${this.lastName()} con edad ${this.age()} años`;
  }


  changeData() {
    this.name.set('Ana');
    this.lastName.set('Gonzales');
    this.age.set(25);
  }


  changeAge() {
    this.age.set(18);
  }

  resetData() {
    this.name.set('Adrian');
    this.lastName.set('Lazo');
    this.age.set(26);
  }
}
