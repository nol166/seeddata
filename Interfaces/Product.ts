export interface Product {
  productName: string;
  price: string | number;
  description: string;
  instock: boolean;
  image: string;
  category: string;
  inventory: number;
  onBackorder: boolean;
}
