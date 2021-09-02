// soal 1
console.log("LOOPING PERTAMA");
var i = 0;
while (i < 20) {
  i += 2;
  console.log(i, " - I love coding");
}
console.log("LOOPING KEDUA");
i = 20;
while (i > 0) {
  console.log(i, " - I will become a frontend developer");
  i -= 2;
}

// soal 2
for (var i = 1; i <= 20; i++) {
  if (i % 2 === 1) {
    if (i % 3 === 0) {
      console.log(i, " - I Love Coding");
    } else {
      console.log(i, " - Santai");
    }
  } else {
    console.log(i, " - Berkualitas");
  }
}

// soal 3
var c = "#";
var d = "";
for (var i = 1; i <= 7; i++) console.log((d += c));

// soal 4
var kalimat = [
  "aku",
  "saya",
  "sangat",
  "sangat",
  "senang",
  "belajar",
  "javascript",
];
kalimat.splice(0, 1);
kalimat.splice(1, 1);
console.log(kalimat.join(" "));

// soal 5
var sayuran = [];
sayuran.push("Kangkung");
sayuran.push("Bayam");
sayuran.push("Buncis");
sayuran.push("Kubis");
sayuran.push("Timun");
sayuran.push("Seledri");
sayuran.push("Tauge");
sayuran.sort();
for (var i = 0; i < sayuran.length; i++)
  console.log((i + 1).toString() + ". " + sayuran[i]);
