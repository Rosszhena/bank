import { Component, OnInit } from '@angular/core';
import { EnlacesService } from '../../services/enlaces.service';
import { RespuestaEnlace, Links, post } from '../../interfaces/interfaces';
import { StorageService } from '../../services/storage.service';

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

  constructor(private enlacesService: EnlacesService,
                      storage: StorageService) { }

  ngOnInit() {
    this.next();
  }

  crearEnlace(){
    this.enlacesService.postEnlaces (this.post)
    .subscribe( resp => {
       this.link.push(resp);
       console.log(this.link);
       console.log("pruebalinkcon this.link" + JSON.stringify(this.link[0]._links.short));
       console.log("pruebaenlaces >con resp" + JSON.stringify(resp._links.self));
       this.saveStorage();
      });
  }

  saveStorage(){
    this.storage.setItem('links', this.link);

  }
  /*este es para obtener del localstorga ya guyardadpo
this.storage.getItem('links');

este es para setearlo, guardar en localstorage
this.storage.setItem('links', this.aca_es_el_Nombre_del_Arreglo_a_Gardar) */

  refresh( event? ){
    this.next (event, true );

  }

  next( event?, pull: boolean = false  ) {
    if ( pull){
      this.enlaces = [];
    }
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
