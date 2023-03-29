#! /usr/bin/env node

import { Command } from "commander";
import { generatePerson } from "./actions/generatePerson";
import { generateProduct } from "./actions/generateProduct";
const program = new Command();


program
.name("mdb_seed_generator")
.description("Generate seed data for MongoDB, or insert it directly")
.version("0.0.1");
// CLI options
program
.option('-c, --cstring <string>', 'connection string for the mdb deployment')
.option('-a, --amount <amount>', 'amount of documents to generate', '100')
.option("-t, --type <type>", "type of documents to generate", "person")
.option("-o, --output <output>", "output file to write to", "output.json")
.option("-i --insert <insert>", "insert documents into a database")
.option("-db, --database <database>", "database to insert documents into")
.option("-coll, --collection <collection>", "collection to insert documents into")
.action((options) => {
  generatePerson(options, options.amount || 100);
})
.action((options) => {
  generateProduct(options, options.amount)
})

program.parse(process.argv);

if (process.argv.length < 3) {
  program.help();
}

