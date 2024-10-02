const getUser = (id, callback) => {
  const time = id === 1 ? 3000 : 2000;
  setTimeout(() => {
    const nama = id === 1 ? "septiawan" : "andika";
    callback({ id, nama });
  }, time);
};

const userSatu = getUser(1, (user) => {
  console.log(user);
});
const userDua = getUser(2, (user) => {
  console.log(user);
});

const halo = "Septiawan print";
console.log(halo);
