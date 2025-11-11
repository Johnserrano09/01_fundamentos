import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-perfil-page',
  standalone: true,
  templateUrl: './perfilPage.html',

})
export class PerfilPage {
  name = signal(' John');
  lastName = signal('Serrano');
  age = signal(21);


  getFullName() {
    return `${this.name()} ${this.lastName()} con edad ${this.age()} años`;
  }


  changeData() {
    this.name.set('Maria ');
    this.lastName.set('Serrano');
    this.age.set(25);
  }


  changeAge() {
    this.age.set(20);
  }

  resetData() {
    this.name.set('John');
    this.lastName.set('Serrano');
    this.age.set(26);
  }
}
