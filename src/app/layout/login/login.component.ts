import { FormBase } from './../../components/controls/form-base';
import { Router } from '@angular/router';
import { AccountService } from './../../services/shared/account.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private accountService: AccountService, private router: Router, public formBuilder: FormBuilder) {
    super();
    this.service = this.accountService;
  }

  ngOnInit(): void {
    this.formGroupRules = this.formBuilder.group({
      userName: this.formBuilder.control('', [Validators.required]),
      userPassword: this.formBuilder.control('', [Validators.required])
    }, {validator: null});
  }

  async onSubmit(form: any): Promise<any> {
    try {
      const result = await this.accountService.login(this.login);
      console.log(`Login efetuado: ${result}`);

      this.router.navigate(['']);
    } catch (error) {
      console.error(error);
    }
  }

}
