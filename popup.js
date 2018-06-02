
const request = new XMLHttpRequest();
const url = 'https://tgd.kr/nanajam777'; 
request.open('GET', url, true);
request.onload = function () {
  console.log(request.responseText); 
};
request.send();
