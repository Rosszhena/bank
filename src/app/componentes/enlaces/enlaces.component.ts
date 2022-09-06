import { Component, Input, OnInit } from '@angular/core';
import { RespuestaEnlace } from '../../interfaces/interfaces';

@Component({
  selector: 'app-enlaces',
  templateUrl: './enlaces.component.html',
  styleUrls: ['./enlaces.component.scss'],
})
export class EnlacesComponent implements OnInit {

  @Input() enlaces: RespuestaEnlace[] = [];
  constructor() { }

  ngOnInit() {
    console.log(this.enlaces);
  }

}
