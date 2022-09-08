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

  textValue: any;
  enableSubmit = false;

  constructor(private enlacesService: EnlacesService,
    private storage: StorageService) { }

  ngOnInit() {
    this.link =this.storage.getItem('links') != "" ? this.storage.getItem('links'): this.link;
    this.linkStorage = this.link.length > 0 ? this.link.reverse() : this.link;
  }

  onKeyUp(event: any) {
    this.enableSubmit = /^(http(s)?:\/\/)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(this.post.url);
  }

  createAlias(){
    this.enlacesService.postEnlaces (this.post)
    .subscribe( resp => {
       this.link.push(resp);
       this.saveStorage();
      });
  }

  saveStorage(){
    this.storage.setItem('links', this.link);
    this.getStorage();
  }

  getStorage(){
    this.linkStorage =this.storage.getItem('links');
    console.log(`LINKSTORAGE${this.linkStorage}`)
    console.log(this.storage.getItem('links').length);
  }

}
