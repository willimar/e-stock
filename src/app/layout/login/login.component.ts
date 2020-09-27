import { Router } from '@angular/router';
import { AccountService } from './../../services/shared/account.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from '../../models/registers/person';
import { FormBaseComponent } from '../../components/controls/form-base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent extends FormBaseComponent<Person> implements OnInit {

  login = {
    email: '',
    password: ''
  };

  constructor(public service: AccountService, private router: Router, public formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.formGroupRules = this.formBuilder.group({
      userName: this.formBuilder.control('', [Validators.required]),
      userPassword: this.formBuilder.control('', [Validators.required])
    }, {validator: null});
  }

  async onSubmit(form: any): Promise<any> {
    try {
      const result = await this.service.login(this.login);
      console.log(`Login efetuado: ${result}`);

      this.router.navigate(['']);
    } catch (error) {
      console.error(error);
    }
  }

}
