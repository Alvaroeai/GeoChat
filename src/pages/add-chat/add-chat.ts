import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';

@IonicPage()
@Component({
  selector: 'page-add-chat',
  templateUrl: 'add-chat.html',
})
export class AddChatPage {

  data = { roomname:'' };
  ref = firebase.database().ref('chatrooms/');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddChatPage');
  }

  addRoom() {
  let newData = this.ref.push();
  newData.set({
    roomname:this.data.roomname
  });
  this.navCtrl.pop();
}

}
