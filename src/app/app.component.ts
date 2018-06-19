import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'Firebase';

const config = {
  apiKey: "AIzaSyCyR8M-JUGCX2EVGrATUi9yYFaFpUGtgIE",
  authDomain: "mideas-1090.firebaseapp.com",
  databaseURL: "https://mideas-1090.firebaseio.com",
  projectId: "mideas-1090",
  storageBucket: "mideas-1090.appspot.com",
  messagingSenderId: "580112437383"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
