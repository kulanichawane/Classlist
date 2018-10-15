import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertOptions, AlertController } from 'ionic-angular';
import arr from '../../app/arrclass';
import { HomePage } from '../home/home';
import { classlist } from '../../app/class';
/**
 * Generated class for the ClasslistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classlist',
  templateUrl: 'classlist.html',
})
export class ClasslistPage {

  list = arr;
  check;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {
  }

  next() {

    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClasslistPage');


    console.log(this.list.length);

    
    if (this.list.length == 0) {

      this.check = "There are no students added";


    }




  }

  delete(a) {

    arr.splice(a, 1);

    
    if (this.list.length == 0) {

      this.check = "There are no students added";


    }

  }

  update(a) {

    const alert = this.alert.create({

      title: '',
      message: '',
      inputs: [


        {
          name: 'name',
          placeholder: 'Name :'
        },
        {
          name: 'surname',
          placeholder: 'Surname: '
        },
        {
          name: 'gender',
          placeholder: 'Gender'
        },

        {
          name: 'stdno',
          placeholder: 'Student number:'
        },

        {
          name: 'address',
          placeholder: 'Address :'
        },


      ],
      buttons: [{
        text: 'cancel'
      },
      {
        text: 'Save',
        handler: data => {

          let insatnce = new classlist(data.name, data.surname, data.gender, data.stdno, data.address);
          arr.splice(a, 1, insatnce);
        }


      }],


    })

    alert.present();
  }

}
