import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionsPageRoutingModule } from './options-routing.module';

import { OptionsPage } from './options.page';
import { ProdutosPageComponent } from './produtos-page/produtos-page.component';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionsPageRoutingModule,
    SharedModule
  ],
  declarations: [
    OptionsPage, 
    ProdutosFormComponent,
    ProdutosPageComponent
  ]
})
export class OptionsPageModule {}
