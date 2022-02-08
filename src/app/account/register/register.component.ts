import { Component } from '@angular/core';
import { FormConfig } from '../../core/models/formConfig';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  {

  public formConfig: FormConfig = {
    title: 'Создать аккаунт',
    register: true,
    edit: false,
  }

}
