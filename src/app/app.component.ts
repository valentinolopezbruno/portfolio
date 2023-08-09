import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafoli-angular';

  windowWidth: number;
  
  constructor() {
    this.windowWidth = window.innerWidth;
  }

  InfoSeleccionada: string = 'Información'

 
  mostrarRedes: boolean = false; 

  cambiarInfoSeleccinada(info:string):void{
    this.InfoSeleccionada = info;
  }

  mostrarRedesSociales() {
    this.mostrarRedes = !this.mostrarRedes;
    console.log("asdasdas")
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;

    // Mostrar las redes si el ancho de la pantalla es mayor o igual a 768
    if (this.windowWidth >= 768) {
      this.mostrarRedes = true;
    }
  }


}
