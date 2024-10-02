function cetakNama(nama) {
  return `halo ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
  nama: "septiawan",
  umur: 21,
  cetakMhs() {
    return `halo ${this.nama} dan saya berumur ${this.umur}`;
  },
};

class Orang {
  constructor() {
    console.log("objek orang telah dibuat");
  }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   mahasiswa: mahasiswa,
//   Orang: Orang,
// };

module.exports = { cetakNama, PI, mahasiswa, Orang };
