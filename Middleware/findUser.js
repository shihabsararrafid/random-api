module.exports.findUser = (arr, id) => {
  //console.log(arr);
  let xl = -1;
 // console.log(id);
  arr.map((v, x) => {
    if (v.Id === id) {
      //  console.log("ed " + x);
      xl = x;
      return;
    }
  });
  return xl;
};
