import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { explorePage } from '../explore/explore';
import { ContactPage } from '../contact/contact';

import { ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = explorePage;
  tab3Root = ContactPage;

  constructor(public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    this.Login();
  }

  Login() {
    const modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

}
