// soal 1
const luasLingkaran = (r) => {
  return (22 / 7) * r ** 2;
};
const kelilingLingkaran = (r) => {
  return ((2 * 22) / 7) * r;
};

console.log(luasLingkaran(7));
console.log(kelilingLingkaran(7));

// soal 2
const introduce = (...identitas) => {
  let [nama, usia, jenis_kelamin, pekerjaan] = identitas;
  return `${
    jenis_kelamin === "Laki-Laki" ? "Pak" : "Bu"
  } ${nama} adalah seorang ${pekerjaan} yang berusia ${usia} tahun`;
};

// kode di bawah ini jangan diubah atau dihapus sama sekali
const perkenalan = introduce("John", "30", "Laki-Laki", "penulis");
console.log(perkenalan); // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

// soal 3
const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: () => console.log(`${firstName} ${lastName}`),
  };
};

// kode di bawah ini jangan diubah atau dihapus sama sekali
console.log(newFunction("John", "Doe").firstName);
console.log(newFunction("Richard", "Roe").lastName);
newFunction("William", "Imoh").fullName();

// soal 4
let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020,
  colors: ["Mystic Bronze", "Mystic White", "Mystic Black"],
};
// kode diatas ini jangan di rubah atau di hapus sama sekali

const [phoneName, phoneBrand, year] = [phone.name, phone.brand, phone.year];
const [colorBronze, colorWhite, colorBlack] = phone.colors;

// kode di bawah ini jangan dirubah atau dihapus
console.log(phoneBrand, phoneName, year, colorBlack, colorBronze);

//soal 5
let warna = ["biru", "merah", "kuning", "hijau"];

let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020,
};

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul: ["hitam"],
};
// kode diatas ini jangan di rubah atau di hapus sama sekali

dataBukuTambahan = { ...buku, ...dataBukuTambahan };
dataBukuTambahan.warnaSampul = [...dataBukuTambahan.warnaSampul, ...warna];
console.log(dataBukuTambahan);
