import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [],
  template: `<p>Formulario works!</p>`,
  templateUrl: './formulario.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Formulario { 
  onSubmit() {
    console.log(this.myForm.value);

    
  }

  private fb = inject(FormBuilder);
  
  myForm: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(3)]],
    edad: ['',[Validators.required, Validators.min(18)]],
    email: ['',[Validators.required, Validators.email]]
  });

}
