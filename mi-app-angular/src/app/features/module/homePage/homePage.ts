import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './homePage.html',
  standalone: true,
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  constructor(){
    setInterval(() => {
      console.log("*")
      this.counterSignal.update((v) => v+1);
    }, 1000
    );
  }

  counter = 0;
  counterSignal = signal(0);

  changeValue(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  resetValue(value: number){
    this.counter = value;
    this.counterSignal.set(value);
  }
}
