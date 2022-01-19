export interface ICard {
  type: CardType,
  url: string,
  price: string,
  square: string,
  street: string,
  metro: string,
  seller: string,
  numberOfRooms: number,
  floor: number,
  maxFloor: number,
  typeOfHouse: string,
  balcony: string,
  heightOfCeiling: number,
  yearOfBuilding: number,
  telNumber: string,
  description: string,
  id: string
}

export enum CardType {
  sell = 'sell',
  rent = 'rent',
}
