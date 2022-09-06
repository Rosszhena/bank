import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { EnlaceComponent } from './enlace/enlace.component';


@NgModule({
  declarations: [
    HeaderComponent,
    EnlacesComponent,
    EnlaceComponent
  ],
  exports: [
    HeaderComponent,
    EnlacesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
