import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from  '../home/home';
import { App, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  data = { nickname:"" };

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  enterNickname() {
    //this.rootPage = RootPage;
     this.navCtrl.pop();
//this.navCtrl.parent.select(1)
  // this.navCtrl.parent.push(HomePage, {
  //   nickname: this.data.nickname
  // });
}

}
