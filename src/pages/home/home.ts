import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { RootPage } from '../root/root';
import { LoginPage } from '../login/login';
import { ChatsPage } from '../chats/chats';
import { explorePage } from '../explore/explore';
import { ModalController } from 'ionic-angular';
import { ModalPage } from './modal-page';

import * as firebase from 'Firebase';

import { AddChatPage } from '../add-chat/add-chat';
import { HomePage } from '../home/home';
import * as firebase from 'Firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public rootPage: any = explorePage;
  public content: any = ChatsPage;

  rooms = [];
  ref = firebase.database().ref('chatrooms/');

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    this.ref.on('value', resp => {
      this.rooms = [];
      this.rooms = snapshotToArray(resp);
    });
  }


  category: any;

  setCategory(category) {
   switch (category) {
     case 'root':
       this.rootPage = RootPage;
       break;
     case 'explore':
       this.rootPage = explorePage;
       break;
   }
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }

  Login() {
    const modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }


  addRoom() {
    this.navCtrl.push(AddChatPage);
  }

  joinRoom(key) {
  this.navCtrl.setRoot(HomePage, {
    key:key,
    nickname:this.navParams.get("nickname")
    });
  }

}



  export const snapshotToArray = snapshot => {
      let returnArr = [];

      snapshot.forEach(childSnapshot => {
          let item = childSnapshot.val();
          item.key = childSnapshot.key;
          returnArr.push(item);
      });

      return returnArr;
  };
