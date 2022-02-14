import { SelectedOption } from './selectedOption';
import { CardType } from './cards';

export interface DropDownNames  {
  type: Array<{
    state: string,
    value: string | CardType,
  }>,
  price: Array<{
    state: string,
    value: string,
  }>,
  rooms: Array<{
    state: string,
    value: string,
  }>,
  region: Array<{
    state: string,
    value: string,
  }>,
}
