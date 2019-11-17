import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: any;
  age: any;
  email: any;
  password: any;
  username: any;

  modelName = {
    form: null
  }
  modelUsername = {
    form: null
  }
  modelAge = {
    form: null
  }
  modelEmail = {
    form: null
  }
  modelPassword = {
    form: null
  }

  constructor(private router: Router, private alertController: AlertController) { }
  async presentAlertConfirm(){
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to submit this form?',
      buttons: [
        {
          text: 'No!',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Yes!',
          handler: () => {
            console.log('Confirm Send');
            let navigationExtras: NavigationExtras = {
              state: {
                name: this.name,
                username: this.username,
                age: this.age,
                email: this.email,
                password: this.password
              }
            }
            this.router.navigate(['view-info'], navigationExtras);
          }
        }
      ]
    })
    await alert.present();
  }

  submit(form: NgForm) {
    this.name = form.value.name;
    this.username = form.value.username;
    this.age = form.value.age;
    this.email = form.value.email;
    this.password = form.value.password;

    console.log("Name is ", this.name);
    console.log("Username is ", this.username);
    console.log("Age is ", this.age);
    console.log("Email is ", this.email);
    console.log("Password is ", this.password);

    if(this.name == null || this.age == null || 
      this.email == null || this.password == null || this.username == null) {
      console.log("No Data")
    } else {
      this.presentAlertConfirm();
    }
  }

}
