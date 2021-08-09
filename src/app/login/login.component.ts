import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = new FormControl(null, [Validators.required]);
  password = new FormControl(null, []);
  showSpinner:Boolean=false;
  private _router:Router;
  constructor(router:Router) {
    this._router = router;
   }

  ngOnInit(): void {
  }

  login(){
    console.log('from login button', "login button clicked");
    this.showSpinner=true;
    var router = this._router;
    setTimeout(function(){
      router.navigateByUrl('/dashboard');
    }, 500);
  }

  getErrorMessageName(){
    if(this.name.hasError('required')){
      return 'Username is required';
    }
    return this.name.hasError('name');
  }
  getErrorMessagePassword(){
    return this.password.hasError('password');
  }
}
