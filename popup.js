
const request = new XMLHttpRequest();
const url = 'MinhyukJeong.github.io/setnumber.html'; 
request.open('GET', url, true);
request.onload = function () {
  console.log(request.responseText); 
};
request.send();
