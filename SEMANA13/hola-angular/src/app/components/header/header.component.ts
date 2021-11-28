import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  texto: string = 'Vacaciones';

  actividades: Array<string> = [
    'Ver peliculas',
    'Viajar',
    'Probar comida nueva',
    'Nadar',
    'Respirar',
    'Escuchar Musica',
    'Salir a cenar',
  ];

  losQuiere: boolean = false;

  urlImagen: string = 'https://picsum.photos/400';

  nuevaActividad: string = '';

  agregarActividad() {
    console.log(this.nuevaActividad);
  }

  constructor() {}

  ngOnInit(): void {}
}
