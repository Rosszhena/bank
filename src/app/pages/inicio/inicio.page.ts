import { Component, OnInit } from '@angular/core';
import { EnlacesService } from '../../services/enlaces.service';
import { RespuestaEnlace } from '../../interfaces/interfaces';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'bandage-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'

    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alert',
      redirectTo: '/alert'

    }
  ];

  enlaces: RespuestaEnlace[] = [];

  constructor(private enlacesService: EnlacesService) { }

  ngOnInit() {
    this.enlacesService.getEnlaces()
    .subscribe( resp => {
     console.log(resp);
      this.enlaces.push( resp);
    });
  }

  tempImages:string[] = [];

  post = {
    url: ''
  }

  crearEnlace(){
    console.log("console postcrear Enlace" + this.post.url);
    this.enlacesService.postEnlaces (this.post)
    .subscribe( resp => {
      console.log(resp);
       this.enlaces.push( resp);
     });
  }
}
