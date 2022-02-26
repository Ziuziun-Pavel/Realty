import { Injectable } from '@angular/core';
import { ICard } from '../../../core/models/cards';

@Injectable({
  providedIn: 'root',
})

export class MockFilterService {

  public filterCards(): ICard[] {
    return [];
  }

}
