import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { TokenService } from '../token.service';
import { pipe } from 'rxjs';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public af: AngularFireAuth,
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  createUser(email: string, password: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }
  login(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    return this.af.auth.signOut();
  }
  hasUser() {
    return this.af.authState;
/*     .subscribe(user => {
      console.error(user === null)
    }) */
  }
  loginRestApi(email: string, password: string) {
    return this.http.post('https://platzi-store.herokuapp.com/auth', {
      email,
      password
    })
    .pipe(
      tap((data: {token: any}) => {
        const token = data.token;
        this.tokenService.saveToken(token);
      })
    );
  }
}
