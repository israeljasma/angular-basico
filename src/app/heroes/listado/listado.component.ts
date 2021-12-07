import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  heroes: string[] = ['Thor', 'Spiderman', 'Ironman', 'Hulk', 'Capitán América'];
  heroeBorrado: string= '';

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || ''
  }
}
