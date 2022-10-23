import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { birds } from '../birds';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  indexQuestion: number = 0;

  questions = [
    {
      id: 'ojos',
      question: '¿De qué color son los ojos?',
    },
    {
      id: 'cuerpo',
      question: '¿De qué color es el cuerpo?',
    },
    {
      id: 'cara',
      question: '¿De qué color es la cara?',
    },
    {
      id: 'cere',
      question: '¿De qué color es el cere?',
    },
    {
      id: 'pico',
      question: '¿De qué color es el pico?',
    },
    {
      id: 'pico_ancho',
      question: '¿Cuál es el ancho del pico?',
    },
    {
      id: 'cola',
      question: '¿De qué color es la cola?',
    },
    {
      id: 'cola_largo',
      question: '¿Cuál es el largo de la cola?',
    },
    {
      id: 'cola_forma',
      question: '¿Cuál es la forma de la cola?',
    },
    {
      id: 'espalda',
      question: '¿De qué color es la espalda?',
    },
    {
      id: 'alas',
      question: '¿De qué color son las alas?',
    },
    {
      id: 'patas',
      question: '¿De qué color son las patas?',
    },
    {
      id: 'plumas_vuelo',
      question: '¿De qué color son las plumas de vuelo?',
    },
    {
      id: 'franjas',
      question: '¿De qué color son las franjas?',
    },
    {
      id: 'cabeza',
      question: '¿De qué color es la cabeza?',
    },
    {
      id: 'maxila',
      question: '¿De qué color es la maxila?',
    },
    {
      id: 'pecho',
      question: '¿De qué color es el pecho?',
    },
    {
      id: 'vientre',
      question: '¿De qué color es el vientre?',
    },
    {
      id: 'anillo_ocular',
      question: '¿De qué color es el anillo ocular?',
    },
    {
      id: 'banda_subterminal',
      question: '¿De qué color es la banda subterminal?',
    },
    {
      id: 'corona',
      question: '¿De qué color es la corona?',
    },
    {
      id: 'marca',
      question: '¿Tiene alguna marca?',
    },
    {
      id: 'habitat',
      question: '¿Cuál es su habitat?',
    },
    {
      id: 'alimentacion_principal',
      question: '¿Cuál es su alimento principal?',
    },
    {
      id: 'color_plumaje',
      question: '¿Cuál es el color del plumaje?',
    },
    {
      id: 'coloracion',
      question: '¿Cuál es la coloración?',
    },
    {
      id: 'plumas_primarias',
      question: '¿De qué color son las plumas primarias?',
    },
    {
      id: 'cobertoras_cola',
      question: '¿De qué color son las cobertoras de cola?',
    },
    {
      id: 'tarsos',
      question: '¿Cuál es el color de los tarsos?',
    },
    {
      id: 'loras',
      question: '¿De qué color son las loras?',
    },
    {
      id: 'zona_malar',
      question: '¿De qué color es la zona malar?',
    },
    {
      id: 'garganta',
      question: '¿De qué color es la garganta?',
    },
    {
      id: 'nuca',
      question: '¿De qué color es la nuca?',
    },
    {
      id: 'rabadilla',
      question: '¿De qué color es la rabadilla?',
    },
    {
      id: 'auriculares',
      question: '¿De qué color son los auriculares?',
    },
    {
      id: 'mandibula',
      question: '¿De qué color es la mandibula?',
    },
    {
      id: 'barras_alares',
      question: '¿De qué color son las barras laterales?',
    }
  ]

  filteredBirds: Array<any> = [];

  value: string = '';

  found: boolean = false;

  values: Array<any> = [];

  constructor(private fb: FormBuilder) {

    this.filteredBirds = birds;


    // const datos = [
    //   {nombre: 'ave1', color: 'rojo'},
    //   {nombre: 'ave2', color: 'verde'},
    //   {nombre: 'ave3', color: 'blanco'},
    //   {nombre: 'ave4', color: 'azul'},
    //   {nombre: 'ave5', color: 'rojo'},
    //   {nombre: 'ave6', color: 'rojo'},
    //   {nombre: 'ave7', color: 'negro'},
    //   {nombre: 'ave8', color: 'rojo'},
    // ];

    // const filtered = datos.filter((ave: any) => {
    //   return ave.color === 'amarillo';
    // });
    // console.log(filtered)


    //  const ave: any = {
    //   name: 'ave1',
    //   color: 'rojo',
    //  }

    //  const prop = 'name'

    //  console.log(ave.caract?.test)

  }

  ngOnInit(): void {
  }

  search() {
    
    const formatedValues = this.getAnds(this.value);
    console.log('User value',formatedValues)
    this.filteredBirds = this.getBirdsMatchs(formatedValues);
    console.log('filteredBirds', this.filteredBirds)
    
    if(this.filteredBirds.length === 0) { 
      Swal.fire({
        title: 'No encontramos ninguna coincidencia',
      });
      return;
    }
    
    if(this.value != '') {
      this.values.push({
        property: this.questions[this.indexQuestion].id,
        value: this.value
      });
    }
    this.value = '';

    this.indexQuestion++;

    while( this.indexQuestion < this.questions.length - 1 && !this.isNecesaryQuestion()) {
      this.indexQuestion++;
    }

    if(this.indexQuestion === this.questions.length - 1 && this.filteredBirds.length === 1) {
      this.found = true;
      console.log(this.values);
      return;
    }
  }

  getBirdsMatchs(values: Array<string>) {
    return this.filteredBirds.filter(bird => {
      let match = false;
      // console.log('Propiedad', this.questions[this.indexQuestion].id);
      const birdValues = bird[this.questions[this.indexQuestion].id];
      // console.log('birdValues',birdValues);
      if(values.length > 1 ) {
        // match = true;
        let coincidences = 0;
        birdValues.forEach((birdValue: any) => {
          // console.log(birdValue)
          if(typeof birdValue === 'object') {
            // match = true;
            console.log('birdValue object',birdValue)
            birdValue.forEach((birdValueAnd: any) => {
              console.log('birdValueAnd',birdValueAnd)
              if(values.includes(birdValueAnd) ) {
                coincidences ++;
                // match = false;
              }
              if(values.length === coincidences) match = true;
            })
          }
        });
      } else {
        if(birdValues.includes(values[0])) {
          match = true;
        }
      }
      return match;
    });
  }

  isNecesaryQuestion() {
    let theresValues = false;
    this.filteredBirds.forEach(bird => {
      if( this.questions[this.indexQuestion] && ( bird[ this.questions[this.indexQuestion].id ]?.length > 1 || (bird[ this.questions[this.indexQuestion].id ] && bird[ this.questions[this.indexQuestion].id ][0] !== ''))) {
        theresValues = true;
      }
    });
    return theresValues;
  }

  getAnds(str: string ) {
    const ands = str.toLocaleLowerCase().split(' y ');
    return ands;
  }

}
