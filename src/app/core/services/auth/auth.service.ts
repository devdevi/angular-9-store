import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public af: AngularFireAuth
  ) { }

  createUser(email: string, password: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }
  login(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    return this.af.auth.signOut()
  }
  hasUser() {
    return this.af.authState
/*     .subscribe(user => {
      console.error(user === null)
    }) */
  }
}