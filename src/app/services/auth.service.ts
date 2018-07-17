import { Injectable } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

export class Auth {}

@Injectable()

export class AuthService {
  auths: FirebaseListObservable<Auth[]> = null; // Data storage
  userId: string;

  provider = new firebase.auth.GoogleAuthProvider();
  constructor(
    private db: AngularFirestore,
    private fbAuth: AngularFireAuth,
    ) {

  }
}
