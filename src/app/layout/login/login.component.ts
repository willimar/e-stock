import { FormBase } from './../../components/controls/form-base';
import { Router } from '@angular/router';
import { AccountService } from './../../services/shared/account.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent extends FormBase implements OnInit {

  login = {
    email: '',
    password: ''
  };

  constructor(private accountService: AccountService, private router: Router) {
    super();
  }

  ngOnInit(): void {
  }

  getErrors(): any[] {
    const result: any[] = [];
    this.accountService.errorMessages.forEach(item => {
      result.push(item);
    });

    return result;
  }

  async onSubmit(): Promise<any> {
    try {
      const result = await this.accountService.login(this.login);
      console.log(`Login efetuado: ${result}`);

      this.router.navigate(['']);
    } catch (error) {
      console.error(error);
    }
  }

}
