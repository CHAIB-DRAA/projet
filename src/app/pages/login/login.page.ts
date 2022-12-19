import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

   dataUser = {
    email: '',
    password: ''
  };
  connected!: boolean;
  userId!: string;
  mail!: string;
  method: any;
  afAuth:any;
  constructor(
    public toastController: ToastController,
  ) {

  }

  login() {

     console.log(`email :  ${this.dataUser.email}`);
     console.log(`password :  ${this.dataUser.password}`);

  }}
