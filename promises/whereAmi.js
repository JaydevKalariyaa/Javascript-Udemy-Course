const getPos = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function (lat, lag) {
  getPos()
    .then((pos) => {
      return fetch(
        `https://geocode.xyz/${pos.coords.latitude},${pos.coords.longitude}?geoit=json`
      );
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.country, data.city);
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log('something went wrong', err);
    });
};
whereAmI();

// let obj = {
//   firstname: 'jaydev',
//   lastname: 'kalariya',
// };
// let newobj = obj;
// let newobj2 = cloneDeep(obj);
// obj.firstname = 'jk';
// console.log(newobj);
// console.log(newobj2);
