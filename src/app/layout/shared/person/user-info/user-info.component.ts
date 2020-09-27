import { UserInfo } from './../../../../models/registers/user-info';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonService } from './../../../../services/register/person.service';
import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../../../models/registers/person';
import { FormBaseComponent } from '../../../../components/controls/form-base.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: []
})
export class UserInfoComponent extends FormBaseComponent<Person> implements OnInit {

  @Input() personService: PersonService;

  static equalTo(): {[key: string]: boolean} {
    return undefined;
  }

  constructor(public formBuilder: FormBuilder, private http: HttpClient) {
    super();
  }

  ngOnInit(): void {
    this.formGroupRules = this.formBuilder.group({
      userName: this.formBuilder.control('', [Validators.required, Validators.minLength(8)]),
      userEmail: this.formBuilder.control('', [Validators.required]),
      userPassword: this.formBuilder.control('', [Validators.required, Validators.minLength(8)]),
      userPasswordAux: this.formBuilder.control('', [Validators.required, Validators.minLength(8)])
    }, {validator: UserInfoComponent.equalTo()});
  }

  savePerson(form: UserInfo): void {

  }


}
