import { Component } from '@angular/core';
import { FormConfig } from '../../core/models/formConfig';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {

  public formConfig: FormConfig = {
    title: 'Изменить профиль',
    register: false,
    edit: true,
  }
}
