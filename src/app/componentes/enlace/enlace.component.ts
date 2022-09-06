import { Component, Input, OnInit } from '@angular/core';
import { RespuestaEnlace } from '../../interfaces/interfaces'

@Component({
  selector: 'app-enlace',
  templateUrl: './enlace.component.html',
  styleUrls: ['./enlace.component.scss'],
})
export class EnlaceComponent implements OnInit {

    @Input() enlace: RespuestaEnlace = {
      url: ''
    };

  constructor() { }

  ngOnInit() {}

}
