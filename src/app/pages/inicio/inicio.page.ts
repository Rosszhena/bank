import { Component, OnInit } from '@angular/core';
import { EnlacesService } from '../../services/enlaces.service';
import { RespuestaEnlace, Links, post } from '../../interfaces/interfaces';

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

  enlaces: RespuestaEnlace[] = [];
  link: Links[] = [];
  post = { url: ''};

  constructor(private enlacesService: EnlacesService) { }

  ngOnInit() {
    this.next();
  }

  crearEnlace(){
    this.enlacesService.postEnlaces (this.post)
    .subscribe( resp => {
       this.link.push(resp);
       console.log(this.link.length)
       console.log("pruebalinkcon this.link" + this.link);
       console.log("pruebaenlaces con resp" + resp);
     });
  }


  next( event?  ) {
    this.enlacesService.getEnlaces()
    .subscribe( resp => {
      this.enlaces.push(resp);

      if ( event ) {
        event.target.complete();
        if(this.enlaces.length === 0 ){
        event.target.disabled = true;
        }
      }
    });
  }
}
