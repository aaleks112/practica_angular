import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


interface Producto {
  nombre: string;
  costo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  

})
export class AppComponent {
  title = 'practica_angular';

  productos: Producto[] = [
    { nombre: 'Producto A',
      costo: '$1000'
     },
    { nombre: 'Producto B',
      costo: '$2000'
    },
    { nombre: 'Producto C',
      costo: '$3000'
    },
    { nombre: 'Producto D',
      costo: '$4000'
     }
  ];

  
  mostrarLista = true;

  lista() {
    this.mostrarLista = !this.mostrarLista;
  }

  
}
