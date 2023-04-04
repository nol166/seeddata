import { faker } from "@faker-js/faker";
import fs from "fs";
import { Person as IPerson } from "../Interfaces/Person";

type Person = {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  address: string;
  phone: string;
  avatar: string;
  birthday: Date;
  numberOfReferences: number;
  skills: string[];
};

export const generatePerson = (options: any, amount: number) => {
  console.log(amount)
  if (options.type === "person") {
    console.log("Generating people")
    let people: IPerson[] = [];
    for (let i = 0; i < amount; i++) {
      let bday = faker.date.birthdate();
      let person: Person = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        fullName: faker.name.fullName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        phone: faker.phone.number(),
        avatar: faker.image.avatar(),
        birthday: bday,
        numberOfReferences: Math.floor(Math.random() * 100),
        skills: Array.from({ length: 10 }, () => faker.name.jobTitle())
      };
      people.push(person);
    }
    fs.writeFile(options.output, JSON.stringify(people), (err: Error | null) => {
      if (err) {
        console.log(err);
      }
      console.log("Successfully wrote people to file");
    });
  }
};
