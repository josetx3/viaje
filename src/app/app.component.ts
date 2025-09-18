import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  diasRestantes!: number;
  horasRestantes!: number;
  minutosRestantes!: number;
  segundosRestantes!: number;

  ngOnInit() {
    this.calcularTiempoRestante();
    setInterval(() => {
      this.calcularTiempoRestante();
    }, 1000); // actualiza cada segundo
  }

  calcularTiempoRestante() {
    const ahora = new Date();
    const destino = new Date(ahora.getFullYear(), 8, 19, 20, 0, 0); // 8 = septiembre

    if (ahora > destino) {
      this.diasRestantes = 0;
      this.horasRestantes = 0;
      this.minutosRestantes = 0;
      this.segundosRestantes = 0;
      return;
    }

    const diferencia = destino.getTime() - ahora.getTime(); // en milisegundos

    this.diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    this.horasRestantes = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutosRestantes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    this.segundosRestantes = Math.floor((diferencia % (1000 * 60)) / 1000);
  }
}
