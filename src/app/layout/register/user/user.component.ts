import { FormBuilder } from '@angular/forms';
import { PersonService } from './../../../services/register/person.service';
import { FormBase } from './../../../components/controls/form-base';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent extends FormBase implements OnInit {

  constructor(formBuilder: FormBuilder, public personService: PersonService) {
    super();

    this.service = this.personService;
    this.formBuilder = formBuilder;
  }

  ngOnInit(): void {
    this.formGroupRules = this.formBuilder.group({

    }, {});
  }

}
