import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private users: User[] = [
    new User(
      'Bob',
      'test',
      'bob.test@admin.fr',
      'eau',
      ['foot', 'basket']
    )
  ];
  userSubject = new Subject<User[]>();

  emitUsers(): any {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User): any {
    this.users.push(user);
    this.emitUsers();
  }

  constructor() {
  }
}
