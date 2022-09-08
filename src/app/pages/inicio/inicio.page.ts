import { Component, OnInit } from '@angular/core';
import { EnlacesService } from '../../services/enlaces.service';
import { RespuestaEnlace, Links } from '../../interfaces/interfaces';
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
  linkStorage: Links[] = [];

  constructor(private enlacesService: EnlacesService,
    private storage: StorageService) { }

  ngOnInit() {
    this.getStorage();
  }

  crearEnlace(){
    this.enlacesService.postEnlaces (this.post)
    .subscribe( resp => {
       this.link.push(resp);
       //console.log(this.link);
       //console.log("pruebalinkcon this.link" + JSON.stringify(this.link[0]._links.short));
       //console.log("pruebaenlaces >con resp" + JSON.stringify(resp._links.self));
       this.saveStorage();
      });
  }

  saveStorage(){
    this.storage.setItem('links', this.link);

  }
  getStorage(){
    //console.log("desde componenteInicio storage" + JSON.stringify(this.storage.getItem('links')));

    this.linkStorage =this.storage.getItem('links');
    console.log(`LINKSTORAGE${this.linkStorage}`)
    console.log(this.storage.getItem('links').length);
  }


  refresh(event) {
    console.log('Begin async operation');
    this.getStorage();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

}
