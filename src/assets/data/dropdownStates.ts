import { CardType } from '../../app/core/models/cards';
import { DropDownNames } from '../../app/core/models/dropDownNames';

export const dropdownNames: DropDownNames = {
  type: [{
    state: 'Тип',
    value: '',
  },{
    state: 'Снять',
    value: CardType.rent,
  }, {
    state: 'Купить',
    value: CardType.sell,
  }],
  price: [{
    state: 'Цена',
    value: ''
  }, {
    state: 'менее 50 000$',
    value: '50000'
  }, {
    state: 'менее 150 000$',
    value: '150000'
  }, {
    state: 'более 150 000$',
    value: '150000'
  }],
  rooms: [{
    state: 'Кол-во комнат',
    value: ''
  }, {
    state: '1-комнатную',
    value: '1'
  }, {
    state: '2-комнатную',
    value: '2'
  }, {
    state: '3-комнатную',
    value: '3'
  }, {
    state: '4-комнатную',
    value: '4'
  }, {
    state: '5-комнатную',
    value: '5'
  }, {
    state: '6-комнатную',
    value: '6'
  }],
  region: [{
    state: 'Область',
    value: ''
  }, {
    state: 'г.Минск',
    value: 'г.Минск'
  }, {
    state: 'Минская',
    value: 'Минская'
  }, {
    state: 'Гродненская',
    value: 'Гродненская'
  }, {
    state: 'Могилёвская',
    value: 'Могилёвская'
  }, {
    state: 'Брестская',
    value: 'Брестская'
  }, {
    state: 'Витебская',
    value: 'Витебская'
  }, {
    state: 'Гомельская',
    value: 'Гомельская'
  }]
};
