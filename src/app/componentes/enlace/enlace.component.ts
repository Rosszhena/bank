import { Component, Input, OnInit } from '@angular/core';
import { RespuestaEnlace } from '../../interfaces/interfaces'
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-enlace',
  templateUrl: './enlace.component.html',
  styleUrls: ['./enlace.component.scss'],
})
export class EnlaceComponent implements OnInit {

    @Input() enlace: RespuestaEnlace = {
      url: ''
    };

  constructor( private storage: StorageService) { }

  ngOnInit() {
   // this.getStorage();
  }
 /* getStorage(){
    console.log("desde componenteenlaces storage" + JSON.stringify(this.storage.getItem('links')));
  }*/


}
