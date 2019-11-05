import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  text:string;
  chatRef:any;
  uid:string;

  constructor(public af: AngularFireAuth,public fs: AngularFirestore) {
    this.uid=localStorage.getItem('userid');
    this.chatRef = this.fs.collection('chats',ref=>ref.orderBy('Timestamp')).valueChanges();
   }

  ngOnInit() {
  }
  send(){
    if(this.text != ''){
      this.fs.collection('chats').add({
        Name: this.af.auth.currentUser.displayName,
        Message:this.text,
        UserID:this.af.auth.currentUser.uid,
        Timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      });
      this.text = '';
    }
  }

}
