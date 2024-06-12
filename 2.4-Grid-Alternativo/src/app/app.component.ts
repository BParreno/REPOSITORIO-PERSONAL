import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa el módulo CommonModule necesario para usar directivas estructurales como ngFor

@Component({
  selector: 'app-root', // Selector del componente
  standalone: true, // Este componente es independiente y no está asociado a un módulo específico
  imports: [CommonModule], // Importa el módulo CommonModule necesario para usar directivas estructurales como ngFor
  templateUrl: './app.component.html', // Ruta del archivo HTML asociado a este componente
  styleUrls: ['./app.component.css'] // Ruta del archivo CSS asociado a este componente
})
export class AppComponent {
  numbers: number[] = []; // Arreglo para almacenar los números del 0 al 100
  nonPrimeColors: Map<number, string> = new Map<number, string>(); // Mapa para almacenar colores de los números no primos

  constructor() {
    this.generateNumbers(); // Llama al método para generar los números y colores
  }

  // Genera los números del 0 al 100 y asigna colores a los números no primos
  generateNumbers() {
    for (let i = 0; i <= 100; i++) { // Itera del 0 al 100
      this.numbers.push(i); // Agrega el número al arreglo
      if (!this.isPrime(i)) { // Si el número no es primo
        this.nonPrimeColors.set(i, this.generateRandomColor()); // Asigna un color aleatorio al número no primo
      }
    }
  }

  // Verifica si un número es primo
  isPrime(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  // Genera un color hexadecimal aleatorio
  generateRandomColor(): string {
    return '#' + (Math.random().toString(16) + '000000').substring(2, 8);
  }

  // Devuelve el color asignado al número no primo, o blanco si no tiene color
  getNonPrimeColor(num: number): string {
    return this.nonPrimeColors.get(num) || '#ffffff';
  }
}
