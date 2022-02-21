import { CardType } from './cards';

export interface SelectedOption {
  state: string,
  value: string | CardType,
}
