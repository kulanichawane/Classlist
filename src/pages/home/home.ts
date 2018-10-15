import { Component } from '@angular/core';
import { NavController, Thumbnail } from 'ionic-angular';
import arr from '../../app/arrclass'
import {classlist} from '../../app/class';
import {ClasslistPage} from '../../pages/classlist/classlist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  
  name;
  surname;
  gender;
  stdno;
  address


  add(){

let instance = new classlist(this.name,this.surname,this.gender,this.stdno,this.address);

arr.push(instance);

console.log(instance);

this.navCtrl.push(ClasslistPage);
  }

}
