// soal 1
function luasPersegiPanjang(p, l) {
  return p * l;
}

function kelilingPersegiPanjang(p, l) {
  return 2 * (p + l);
}

function volumeBalok(p, l, t) {
  return p * l * t;
}

var panjang = 12;
var lebar = 4;
var tinggi = 8;

var luasPersegiPanjang = luasPersegiPanjang(panjang, lebar);
var kelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar);
var volumeBalok = volumeBalok(panjang, lebar, tinggi);

console.log(luasPersegiPanjang);
console.log(kelilingPersegiPanjang);
console.log(volumeBalok);

// soal 2
function introduce(name, age, address, hobby) {
  return (
    "Nama saya " +
    name +
    ", umur saya " +
    age.toString() +
    " tahun, alamat saya di " +
    address +
    ", dan saya punya hobby yaitu " +
    hobby +
    "!"
  );
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan); // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di Jalan belum jadi, dan saya punya hobby yaitu Gaming!"

// soal 3
var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];

var arrayDaftarPeserta = {
  nama: arrayDaftarPeserta[0],
  jenis_kelamin: arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  tahun_lahir: arrayDaftarPeserta[3],
};

console.log(arrayDaftarPeserta);

// soal 4
n_data = 4;
nama = ["Nanas", "Jeruk", "Semangka", "Pisang"];
warna = ["Kuning", "Oranye", "Hijau & Merah", "Kuning"];
biji = ["tidak", "ada", "ada", "tidak"];
harga = [9000, 8000, 10000, 5000];

data = [];
for (var i = 0; i < n_data; i++) {
  data.push({
    nama: nama[i],
    warna: warna[i],
    ada_biji: biji[i],
    harga: harga[i],
  });
}

data.forEach(function (item) {
  if (item.ada_biji == "tidak") console.log(item);
});

// soal 5
function tambahDataFilm(nama, durasi, genre, tahun) {
  dataFilm.push({
    nama: nama,
    durasi: durasi,
    genre: genre,
    tahun: tahun,
  });
}

var dataFilm = [];

tambahDataFilm("LOTR", "2 jam", "action", "1999");
tambahDataFilm("avenger", "2 jam", "action", "2019");
tambahDataFilm("spiderman", "2 jam", "action", "2004");
tambahDataFilm("juon", "2 jam", "horror", "2004");
console.log(dataFilm);
