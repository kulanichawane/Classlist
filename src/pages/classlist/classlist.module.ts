import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClasslistPage } from './classlist';

@NgModule({
  declarations: [
    ClasslistPage,
  ],
  imports: [
    IonicPageModule.forChild(ClasslistPage),
  ],
})
export class ClasslistPageModule {}
