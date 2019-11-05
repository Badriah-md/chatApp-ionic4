import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { InjectionToken, NgZone } from '@angular/core';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { config } from '@ionic/core';


var firebaseConfig = {
  
  apiKey: 'AIzaSyDFsjs5VkQIHndkdtc7J8ZyoisOXVmFb28',
  authDomain: 'chatapp-54693.firebaseapp.com',
  databaseURL: 'https://chatapp-54693.firebaseio.com',
  projectId: 'chatapp-54693',
  storageBucket: 'chatapp-54693.appspot.com',
  messagingSenderId: '465012923993',
  appId: '1:465012923993:web:9850c4202b676845089b48'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  // tslint:disable-next-line: max-line-length
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule.enablePersistence(), AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
