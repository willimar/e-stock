import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../../models/registers/person';
import { PersonService } from '../../../services/register/person.service';
import { FormBaseComponent } from '../../../components/controls/form-base.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent extends FormBaseComponent<Person> implements OnInit {

  constructor(formBuilder: FormBuilder, public service: PersonService) {
    super();

    this.formBuilder = formBuilder;
  }

  ngOnInit(): void {
    this.formGroupRules = this.formBuilder.group({

    }, {});
  }

  isValid(): boolean {
    let result = true;

    if (this.service.formGroup === undefined) {
      return true;
    }

    //result = result && this.service.formGroup.valid;
    this.service.formGroup.forEach(element => {
      result = result && element.valid;
    });

    return result;
  }
}
