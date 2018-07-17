import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {  Router } from '@angular/router';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/internal/operators';
import {Observable} from 'rxjs';

export interface User {
  displayName: string;
  email: any;
  photoURL: string;
  uid: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  createUser: Observable<any[]>;
  private userCollection: AngularFirestoreCollection<User>;
  users: Observable<any[]>;

  constructor(
    private db: AngularFirestore,
    private router: Router,
  ) {
    this.createUser = db.collection('userProfile').valueChanges();
    console.log(this.createUser);
    this.userCollection = this.db.collection<User>('userProfile');
    this.users = this.userCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  ngOnInit() {
  }

}
