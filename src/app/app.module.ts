import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { explorePage } from '../pages/explore/explore';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { RootPage } from '../pages/root/root';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';

import { Geolocation, Geoposition} from '@ionic-native/geolocation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    explorePage,
    ContactPage,
    HomePage,
    TabsPage,
    RootPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    explorePage,
    ContactPage,
    HomePage,
    TabsPage,
    RootPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
