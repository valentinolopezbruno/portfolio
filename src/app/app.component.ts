import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portafoli-angular';

  windowWidth: number;
  
  constructor() {
    this.windowWidth = window.innerWidth;
  }

  // Esta variable es para iterar entre la navbar y el usuario la informacion a mostrar
  InfoSeleccionada: string = 'Información'
  // Esta variable es la encargada del navbar dentro de portfolio
  // Los proyectos son separados en el html
  InfoSeleccionadaProyectos:string = "Todos"

  mostrarRedes: boolean = false; 

  cambiarInfoSeleccinada(info:string):void{
    this.InfoSeleccionada = info;
  }

  mostrarRedesSociales() {
    this.mostrarRedes = !this.mostrarRedes;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;

    // Mostrar las redes si el ancho de la pantalla es mayor o igual a 500
    if (this.windowWidth >= 1250) {
      this.mostrarRedes = true;
    }
  }

  ngOnInit(): void {
    // Verificar el ancho de la pantalla al inicio
    this.windowWidth = window.innerWidth;
    if (this.windowWidth >= 1250) {
      this.mostrarRedes = true;
    }
   
  }


}
