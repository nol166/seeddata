import { faker } from "@faker-js/faker";
import fs from "fs";
import { Product as IProduct } from "../Interfaces/Product";

type Product = {
  productName: string;
  price: string | number;
  description: string;
  instock: boolean;
  image: string;
  category: string;
  inventory: number;
  onBackorder: boolean;
};

export const generateProduct = (options: any, amount: number) => {
  console.log(amount)
  if (options.type === "Product" || options.type === "product") {
    let products: IProduct[] = [];
    for (let i = 0; i < amount; i++) {
      let product: Product = {
        productName: faker.commerce.product(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        instock: faker.datatype.boolean(),
        image: faker.image.image(),
        category: faker.commerce.department(),
        inventory: faker.datatype.number(),
        onBackorder: faker.datatype.boolean(),
      };
      products.push(product);
    }
    fs.writeFile(options.output, JSON.stringify(products), (err: any) => {
      if (err) {
        console.log(err);
      }
      console.log("Successfully wrote product to file");
    });
  }
};
