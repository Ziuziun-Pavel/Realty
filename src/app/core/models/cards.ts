export interface ICard {
  type: CardType,
  url: string,
  price: number,
  square: number,
  street: string,
  region: string,
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
