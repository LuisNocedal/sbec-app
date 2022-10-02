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

  // form: FormGroup;

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
      question: '¿Cuál es el color de los taros?',
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

  constructor(private fb: FormBuilder) {

    // this.form = this.fb.group({
    //     ojos: ['negro y azul'],
    //     cuerpo: [''],
    //     cara: [''],
    //     cere: [''],
    //     pico: [''],
    //     pico_ancho: [''],
    //     pico_forma: [''],
    //     cola: [''],
    //     cola_largo: [''],
    //     cola_forma: [''],
    //     espalda: [''],
    //     alas: [''],
    //     patas: [''],
    //     plumas_vuelo: [''],
    //     franjas: [''],
    //     cabeza: [''],
    //     maxila: [''],
    //     pecho: [''],
    //     vientre: [''],
    //     anillo_ocular: [''],
    //     banda_subterminal: [''],
    //     corona: [''],
    //     marca: [''],
    //     habitat: [''],
    //     alimentacion_principal: [''],
    //     color_plumaje: [''],
    //     coloracion: [''],
    //     plumas_primarias: [''],
    //     cobertoras_cola: [''],
    //     tarsos: [''],
    //     loras: [''],
    //     zona_malar: [''],
    //     garganta: [''],
    //     nuca: [''],
    //     rabadilla: [''],
    //     auriculares: [''],
    //     mandibula: [''],
    //     barras_alares: [''],
    // });

    // const strTest = 'Morados y negros, blancos';
    // const orRes = strTest.split(',');

    // const andRes = orRes.map(res => {
    //   const res1 = res.split(' y ');
    //   return (res1.length > 1)? res1 : res1[0].trim();
    // })

    // console.log(andRes);

    this.filteredBirds = birds;
  }

  ngOnInit(): void {
  }

  search() {
    
    // Swal.fire('Any fool can use a computer')

    // const backups = [...this.filteredBirds];

    console.log('Respuesta - ' + this.questions[this.indexQuestion].id );
    const formatedValues = this.getAnds(this.value);
    console.log(formatedValues);
    console.log('--------------')
    console.log('Birds - ' + this.questions[this.indexQuestion].id )
    this.filteredBirds = this.getBirdsMatchs(formatedValues);
    console.log('filteredBirds', this.filteredBirds);
    this.value = '';

    if(this.filteredBirds.length === 0) { 
      Swal.fire({
        title: 'No encontramos ninguna coincidencia',
      });
      // this.filteredBirds = [...backups];
      return;
    }

    this.indexQuestion++;

    while( this.indexQuestion < this.questions.length - 1 && !this.isNecesaryQuestion()) {
      this.indexQuestion++;
    }

    if(this.indexQuestion === this.questions.length - 1 && this.filteredBirds.length === 1) {
      this.found = true;
      return;
      // Swal.fire({
      //   icon: 'success',
      //   title: 'Encontramos tu ave!',
      //   text: 'Su nombre es ' + this.filteredBirds[0].nombre[0],
      // })
    }

    console.log(this.questions.length)
    console.log('indexQuestion', this.indexQuestion);


    // console.log('Valid question',this.isNecesaryQuestion());

  }

  getBirdsMatchs(values: Array<string>) {
    return this.filteredBirds.filter(bird => {
      let match = false;
      const birdValues = bird[this.questions[this.indexQuestion].id];
      console.log(birdValues)
      if(values.length > 1 ) {
        birdValues.forEach((birdValue: any) => {
          if(typeof birdValue === 'object') {
            birdValue.forEach((birdValueAnd: any) => {
              if(values.includes(birdValueAnd.toLocaleLowerCase())) {
                match = true;
              }
            })
          }
        });
      } else {
        if(birdValues.includes(values[0].toLocaleLowerCase())) {
          match = true;
        }
      }
      // console.log(match)
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
    console.log('question', this.questions[this.indexQuestion]?.id)
    console.log('isNecesaryQuestion', theresValues);
    return theresValues;
  }

  // verify(){
  //   const features = this.form.value;
  //   const featuresKeys = Object.keys(features);

  //   let featuresMaped: any = {};
    
  //   for(const key of featuresKeys){
  //     if(features[key] !== ''){
  //       featuresMaped[key] = this.getAndsOrs(features[key]);
  //     }
  //   }

  //   for(const bird of birds) {
  //     const featuresMapedKeys = Object.keys(featuresMaped);
  //     for(const key of featuresMapedKeys){
  //       console.log(bird[key]);
  //       console.log(featuresMaped[key]);
  //       featuresMaped[key].forEach((feature: any) => {
  //         console.log(bird[key].findIndex((birdFeature: any) => { return birdFeature === feature }))
  //       });
  //     }
  //   }

  // }

  getAnds(str: string ) {
    const ands = str.split(' y ');
    return ands;
  }

}
