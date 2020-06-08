module app.domain {
  export interface IProduct {
    productId: number;
    productName: string;
    price: number;
  }

  export class Product implements IProduct {
    constructor(
      public productId: number,
      public productName: string,
      public price: number
    ) {}
    calculateDiscount(percent: number): number {
      return (this.price = (this.price * percent) / 100);
    }
  }
}
