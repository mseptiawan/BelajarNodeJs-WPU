const { tulisPertanyaan, simpanContact } = require("./contacts");
const main = async () => {
  const nama = await tulisPertanyaan("masukkan nama anda");
  const email = await tulisPertanyaan("masukkan email anda");
  const noHP = await tulisPertanyaan("masukkan no hp: ");

  simpanContact(nama, email, noHP);
};
main();
