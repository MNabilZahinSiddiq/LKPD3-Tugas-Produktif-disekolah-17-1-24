// No.1
let jeruk = Number(prompt("No.1 masukan harga jeruk per KG:"));
let hargaAsli = jeruk * 5000;
let diskon = (5 / 100) * hargaAsli;
let hasilDiskon = hargaAsli - diskon;
console.log(
  `No.1 jadi berat jeruk yang di beli adalah ${jeruk} KG dengan harga ${hargaAsli} dan mendapatkan diskon sebesar ${diskon} jadi uang yang harus dibayar adalah Rp ${hasilDiskon}`
);

// No.2
let bilanganAsli = prompt("No.2 masukan angka:");
let bilangan = parseInt(bilanganAsli);

let satuan = bilangan % 10;
let puluhan = Math.floor((bilangan % 100) / 10);
let ratusan = Math.floor((bilangan / 100) % 10);

console.log(
  `N0.2 ${bilanganAsli} memiliki ${satuan} satuan, ${puluhan} puluhan, dan ${ratusan} ratusan`);

// No.3
let temperatur = prompt("No.3 masukan suhu saat ini (dalam farenheit):");
let keadaan = (temperatur - 32) * 5/9

if (keadaan < 250) {
  cuaca = "dingin";
} else if (keadaan >= 250 && keadaan < 300) {
  cuaca = "normal";
} else {
  cuaca = "panas";
}

console.log(`No.3 keadaan saat ini adalah ${keadaan} yang menandakan cuaca saat ini adalah ${cuaca}`);
