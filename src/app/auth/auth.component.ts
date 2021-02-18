import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  logIn(): any {
    this.authService.login().then(
      () => {
        console.log('Connexion réussie');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['posts']);
      }
    );
  }

  logOut(): any {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }
}
