import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  verificado: boolean = false;
  informacion: any = {}
  intentos: number = 0;


  prensaHabilidata = [
    {
      Nombre: 'Milagros Simonetta',
      Dni: '43610607',
      HabilitadoPor: ['FutFem', 'LVF']
    }
  ]

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.verificado = false;
    this.form = this.fb.group({
      Dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]]
    });
  }

  

  submitForm(){
    this.prensaHabilidata.forEach(persona => {
      if (+persona.Dni === this.form.value.Dni){
        this.verificado = true;
        this.informacion = persona;
      }
    });
    if (!this.verificado){ 
      this.intentos += 1;
    }
  }
}