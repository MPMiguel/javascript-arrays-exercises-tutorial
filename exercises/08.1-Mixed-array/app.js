let mix = [42, true, "towel", [2, 1], 'hello', 34.4, { "name": "juan" }];
let allMix = [];

const contain = arr => {
  for (let i = 0; i < mix.length; i++) {
    allMix.push(typeof mix[i]);
    // console.log(typeof mix[i]);
  }
};

contain(mix);
console.log(allMix);

