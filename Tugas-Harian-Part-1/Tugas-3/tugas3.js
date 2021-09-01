//soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var kalimat = kataPertama.concat(
  " ",
  kataKedua.charAt(0).toUpperCase(),
  kataKedua.substring(1),
  " ",
  kataKetiga.substr(0, kataKetiga.length - 1),
  kataKetiga.charAt(kataKetiga.length - 1).toUpperCase(),
  " ",
  kataKeempat.toUpperCase()
);

console.log(kalimat);

//soal 2
var panjangPersegiPanjang = "8";
var lebarPersegiPanjang = "5";
var alasSegitiga = "6";
var tinggiSegitiga = "7";

var kelilingPersegiPanjang =
  2 * Number(panjangPersegiPanjang) + 2 * Number(lebarPersegiPanjang);
var luasSegitiga = (1 / 2) * Number(alasSegitiga) * Number(tinggiSegitiga);

console.log("Keliling Persegi Panjang:", kelilingPersegiPanjang);
console.log("Luas Segitiga:", luasSegitiga);

//soal 3
var sentences = "wah javascript itu keren sekali";

var firstWord = sentences.substring(0, 3);
var secondWord = sentences.substring(4, 14);
var thirdWord = sentences.substring(15, 18);
var fourthWord = sentences.substring(19, 24);
var fifthWord = sentences.substring(25, 31);

console.log("Kata Pertama: " + firstWord);
console.log("Kata Kedua: " + secondWord);
console.log("Kata Ketiga: " + thirdWord);
console.log("Kata Keempat: " + fourthWord);
console.log("Kata Kelima: " + fifthWord);

//soal 4
var nilaiJohn = 80;
var nilaiDoe = 50;
var indeksJohn;
var indeksDoe;

if (nilaiJohn >= 80) {
  indeksJohn = "A";
} else if (nilaiJohn >= 70 && nilaiJohn < 80) {
  indeksJohn = "B";
} else if (nilaiJohn >= 60 && nilaiJohn < 70) {
  indeksJohn = "C";
} else if (nilaiJohn >= 50 && nilaiJohn < 60) {
  indeksJohn = "D";
} else {
  indeksJohn = "E";
}

if (nilaiDoe >= 80) {
  indeksDoe = "A";
} else if (nilaiDoe >= 70 && nilaiDoe < 80) {
  indeksDoe = "B";
} else if (nilaiDoe >= 60 && nilaiDoe < 70) {
  indeksDoe = "C";
} else if (nilaiDoe >= 50 && nilaiDoe < 60) {
  indeksDoe = "D";
} else {
  indeksDoe = "E";
}

console.log("Indeks John:", indeksJohn);
console.log("Indeks Doe", indeksDoe);

//soal 5
var tanggal = 31;
var bulan = 7;
var tahun = 2000;

switch (bulan) {
  case 1:
    bulan = "Januari";
    break;
  case 2:
    bulan = "Februari";
    break;
  case 3:
    bulan = "Maret";
    break;
  case 4:
    bulan = "April";
    break;
  case 5:
    bulan = "Mei";
    break;
  case 6:
    bulan = "Juni";
    break;
  case 7:
    bulan = "Juli";
    break;
  case 8:
    bulan = "Agustus";
    break;
  case 9:
    bulan = "September";
    break;
  case 10:
    bulan = "Oktober";
    break;
  case 11:
    bulan = "November";
    break;
  case 12:
    bulan = "Desember";
    break;
  default:
    bulan = "";
}

console.log(tanggal, bulan, tahun);
