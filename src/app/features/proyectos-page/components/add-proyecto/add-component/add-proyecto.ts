import { ChangeDetectionStrategy, Component, Output, EventEmitter, signal, output } from '@angular/core';

@Component({
  selector: 'app-add-proyecto',
  imports: [],
  templateUrl: './add-proyecto.html',
  styleUrl: './add-proyecto.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AddProyecto {
  name = signal('');
  description = signal('');

  newProyecto = output<Proyecto>();
  deleteProyecto = output<number>();

  dellProyecto(id: number) {
    this.deleteProyecto.emit(id);
  }
  addProyecto() {
    const newProyecto: Proyecto = {
      id: Math.floor(Math.random() * 1000),
      nombre: this.name(),
      descripcion: this.description(),

    };
    this.newProyecto.emit(newProyecto);
    this.name.set('');
    this.description.set('');
  }

  changeName(value: string) {
    this.name.set(value);
  }

  changeDescription(value: string) {
    this.description.set(value);
  }
}
