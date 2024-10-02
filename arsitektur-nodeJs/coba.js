const getUserSync = (id) => {
  const nama = id === 1 ? "septiawan" : "andika";
  return { id, nama };
};

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userSatu);

const halo = "Septiawan print";
console.log(halo);
