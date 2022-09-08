import { Component, Input, OnInit } from '@angular/core';
import { RespuestaEnlace } from '../../interfaces/interfaces';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-enlaces',
  templateUrl: './enlaces.component.html',
  styleUrls: ['./enlaces.component.scss'],
})
export class EnlacesComponent implements OnInit {

  @Input() enlaces: RespuestaEnlace[] = [];
  constructor(private storage: StorageService) { }

  ngOnInit() {
  }

}
