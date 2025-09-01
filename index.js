console.log("Hello World");

//2 eseguo il file dal terminale con node index.js

//3 lancio lo script con npm start

//4 lancio il live reload con npm run watch, per tornare a scrivere nel terminale CTRL+C

//5 bonus

const hello = process.argv[2] || "Boolean";
console.log(process.argv);
console.log(`Hello ${hello}`);