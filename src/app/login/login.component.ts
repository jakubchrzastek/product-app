import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.authenticationService.logout();
  }

  onSubmit() {
    this.authenticationService.login(this.username, this.password)
      .map(res => res.json())
      .subscribe(response => {
        localStorage.setItem('token', response.access_token);
        this.router.navigate(['product']);
      })
  }
}
