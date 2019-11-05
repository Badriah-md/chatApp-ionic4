import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  email: string;
  pwd: string;
  username: string;

  constructor(public nav: NavController, public af: AngularFireAuth, public fs: AngularFirestore) { }

  ngOnInit() {
  }
  signup() {
    this.af.auth.createUserWithEmailAndPassword(this.email, this.pwd).then(() => {
      localStorage.setItem('userid', this.af.auth.currentUser.uid);
      this.af.auth.currentUser.updateProfile({
        displayName: this.username,
        photoURL: ''
      }).then(() => {
        this.nav.navigateRoot('/main');
      }).catch(err => {
        alert(err.message);
      });
    });
  }
  goToLogin() {
    this.nav.navigateForward('/home');
  }

}
