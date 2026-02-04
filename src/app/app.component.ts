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
    },{
      Nombre: 'Fabrizio Biazotto',
      Dni: '41411288',
      HabilitadoPor: ['FbPhotoDesign']
    },{
      Nombre: 'Joaquín Malandra',
      Dni: '36551869',
      HabilitadoPor: ['JM Deportes']
    },{
      Nombre: 'Matias Holgado',
      Dni: '29793463',
      HabilitadoPor: ['PRENSA ALUMNI']
    },{
      Nombre: 'Ricardo Fabian Passero',
      Dni: '20600581',
      HabilitadoPor: ['El Diario', 'Di Gol Pro']
    },{
      Nombre: 'Leandro Jesús Farias',
      Dni: '28700702',
      HabilitadoPor: ['Radio Alto Alegre 105.5']
    },{
      Nombre: 'Miguel Ángel Noriega',
      Dni: '14523728',
      HabilitadoPor: ['CADENA SOMOS', 'Radio Tv']
    },{
      Nombre: 'Juan Pablo Morre',
      Dni: '30771712',
      HabilitadoPor: ['El Diario', 'Cooperativa Comunicar']
    },{
      Nombre: 'Marcelo Daniel Rebuffo',
      Dni: '20528512',
      HabilitadoPor: ['Radio show Villa María 106.5']
    },{
      Nombre: 'Julián Eduardo Lopez',
      Dni: '39325001',
      HabilitadoPor: ['Tiempo Extra']
    },{
      Nombre: 'Martina Ornella Torres',
      Dni: '42787509',
      HabilitadoPor: ['Tiempo Extra']
    },{
      Nombre: 'Christian Horacio Gambatezza',
      Dni: '30771707',
      HabilitadoPor: ['Arroyo Cabral Noticias', 'Cadena Somos']
    },{
      Nombre: 'Gonzalo Moyano',
      Dni: '41033721',
      HabilitadoPor: ['Furia Sports']
    },{
      Nombre: 'Leonardo Pierantonelli ',
      Dni: '41033774',
      HabilitadoPor: ['Villa María Ya']  
    },{
      Nombre: 'Martina Milagros Casas',
      Dni: '43133351',
      HabilitadoPor: ['martinafdeportiva']
    },{
      Nombre: 'Bianca Soppeno ',
      Dni: '45351482',
      HabilitadoPor: ['CM Sport club Colón']
    },{
      Nombre: 'Martin Gabriel Cesano ',
      Dni: '44433060',
      HabilitadoPor: ['CM Sport Club Colon']
    },{
      Nombre: 'Joaquin Peretti',
      Dni: '39612411',
      HabilitadoPor: ['Sport Club Colon','Woxicom Media']
    },{
      Nombre: 'Augusto Falco',
      Dni: '43474760',
      HabilitadoPor: ['@augustofalcob']
    },{
      Nombre: 'Natalia Cecilia Marco',
      Dni: '27444586',
      HabilitadoPor: ['Radio Regional 107.5']
    },{
      Nombre: 'Jonatan Alberto Arévalo',
      Dni: '35637844',
      HabilitadoPor: ['Johnydepor7']
    },{
      Nombre: 'Marcos Figueredo',
      Dni: '35246254',
      HabilitadoPor: ['Diario del centro del país','Radio Regional Villa María']
    },{
      Nombre: 'Norma Galván',
      Dni: '17371101',
      HabilitadoPor: ['Cadena Somos RTV']
    },{
      Nombre: 'Antonio Gabriel Mie Besso', 
      Dni: '38884503',
      HabilitadoPor: ['El Diario']
    },{
      Nombre: 'Daniel Alejandro Rodriguez',
      Dni: '34200372',
      HabilitadoPor: [' El Diario de Villa Maria']
    },{
      Nombre: 'Jesus Horacio Marco',
      Dni: '8439045', 
      HabilitadoPor: ['Radio Regional 107.5']
    },{
      Nombre: 'Marcelo Carlos Zona',
      Dni: '18158322',
      HabilitadoPor: ['RRSS Unión Central']
    },{
      Nombre: 'María Victoria Bazán',
      Dni: '36849300',
      HabilitadoPor: ['prensa Leandro N. Alem']
    },{
      Nombre: 'Sergio Dellamaggiore',
      Dni: '8439293',
      HabilitadoPor: ['FM Horizonte 106.7 Arroyo Cabral']
    },{
      Nombre: 'Axel Gabriel Villalon',
      Dni: '43609291',
      HabilitadoPor: ['Geminis Deportes en vivo']  
    },{
      Nombre: 'Pedro Alberto Villalon',
      Dni: '22597764',
      HabilitadoPor: ['F M Geminis 90.3 Ticino']
    },{
      Nombre: 'Edgar Scauso',
      Dni: '20804566',
      HabilitadoPor: ['Diario Puntal Villa María.']
    },{
      Nombre: 'Edgar Eduardo Camargo',
      Dni: '29815588',
      HabilitadoPor: ['Prensa Atl. Ticino']
    },{
      Nombre: 'Lourdes Cativelli',
      Dni: '43603246',
      HabilitadoPor: ['prensa Ricardo Gutiérrez']
    },{
      Nombre: 'Ariela Cecilia Pedraza',
      Dni: '37125865',
      HabilitadoPor: ['Prensa C. D. Universitario']
    },{
      Nombre: 'Rocio Torno',
      Dni: '45351314',
      HabilitadoPor: ['Prensa Hipolito Yrigoyen']
    },{
      Nombre: 'Tamara María Giovanini',
      Dni: '33269580',
      HabilitadoPor: ['Prensa Nueve de Julio Pasco']
    },{
      Nombre: 'Augusto Niedfeld',
      Dni: '37195916',
      HabilitadoPor: ['El Picado (web)']
    },{
      Nombre: 'Gonzalo Eduardo Moreno',
      Dni: '39325119',
      HabilitadoPor: ['gonzamoreno.fotograria']
    },{
      Nombre: 'Lucas Emanuel Fernandez',
      Dni: '45351219',
      HabilitadoPor: ['Prensa Club Atletico Argentino']
    },{
      Nombre: 'Jorge Alberto Bitar',
      Dni: '13409004',
      HabilitadoPor: ['Fm.Horizonte']
    },{
      Nombre: 'Richard Abrile',
      Dni: '16990931',
      HabilitadoPor: ['Fm.Horizonte']
    },{
      Nombre: 'Nelso Novillo',
      Dni: '23141595',
      HabilitadoPor: ['Fm.Horizonte']
    },{
      Nombre: 'Osvaldo Federico Martinez',
      Dni: '28269958',
      HabilitadoPor: ['Radio Patria']
    },{
      Nombre: 'Alberto Blas Jose Arce',
      Dni: '14665327',
      HabilitadoPor: ['FM Sport 91.7']
    },{
      Nombre: 'Alberto Cesar Arce ',
      Dni: '32156019',
      HabilitadoPor: ['Villa María Noticias']
    },{
      Nombre: 'Martin Giachello',
      Dni: '34277772',
      HabilitadoPor: ['Que Pasa VM']
    },{
      Nombre: 'Angel Antonio Alves',
      Dni: '24617856',
      HabilitadoPor: ['El Diario']
    },{
      Nombre: 'Pablo Alberto Pieckensteiner',
      Dni: '31731418',
      HabilitadoPor: ['El Diario']
    },{
      Nombre: 'Roberto Antonio Zayas',
      Dni: '13015173',
      HabilitadoPor: ['El Diario']
    },{
      Nombre: 'Victor Alvez',
      Dni: '11785673',
      HabilitadoPor: ['El Diario'] 
    },{
      Nombre: 'Luciana Gabbianni',
      Dni: '42696496',
      HabilitadoPor: ['El Diario']
    },{
      Nombre: 'Martínez Priscila Ayelen',
      Dni: '47987248',
      HabilitadoPor: ['Prensa Juventud River Plate']
    },{
      Nombre: 'Julieta Pérez Gottardi',
      Dni: '45094903',
      HabilitadoPor: ['PRENSA Juventud de River Plate Ausonia']
    },{
      Nombre: 'Florencia Aldana Ghirardi',
      Dni: '38018849',
      HabilitadoPor: ['Prensa C. A. Alumni']
    },{
      Nombre: 'Ayala Valentina',
      Dni: '42304769',
      HabilitadoPor: ['Prensa C. A. Alumni']
    },{
      Nombre: 'María Victoria Galvez Juárez',
      Dni: '43963359',
      HabilitadoPor: ['Prensa C. A. Alumni']
    },{
      Nombre: 'Micaela Climaco',
      Dni: '38021999',
      HabilitadoPor: ['Liga Villamariense','Ente Deporte y Turismo']
    },{
      Nombre: 'Conrero Micaela Beatriz',
      Dni: '37225266',
      HabilitadoPor: ['Prensa Silvio Pellico']
    },{
      Nombre: 'María Daniela Dubois',
      Dni: '23395207',
      HabilitadoPor: ['daniphodxt']
    },{
      Nombre: 'Julieta Lucia Muñoz',
      Dni: '44813784',
      HabilitadoPor: ['Prensa Silvio Pellico']
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
    this.verificado = false;
    this.informacion = {};
    const dni = this.form.value.Dni;
    const persona = this.prensaHabilidata.find(persona => +persona.Dni === dni);
    if (persona) {
      this.verificado = true;
      this.informacion = persona;
    } else {
      this.intentos++;
    }
  }
}