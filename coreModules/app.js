const fs = require("fs");
const { json } = require("node:stream/consumers");

// menulis dengan sinkronus

try {
  fs.writeFileSync("data/test", "halo septiawan");
} catch (error) {
  console.log("terjadi masalah");
}

// menulis ke asinkronus dengan file
fs.writeFile("data/test.txt", "halo septiawan", (err) => {
  console.log(err);
});

const data = fs.readFileSync("data/test.txt", "utf-8", (err, data) => {
  if (err) throw data;
  console.log(data);
});
console.log(data);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("masukkan nama anada", (nama) => {
  rl.question("masukkan nama asal sekolah", (sklh) => {
    const myData = {
      nama,
      sklh,
    };
    const fileBuffer = fs.readFileSync("data/text.json", "utf-8");
    const data = JSON.parse(fileBuffer);
    data.push(myData);

    fs.writeFileSync("data/text.json", JSON.stringify(data));

    console.log();
    rl.close();
  });
});
