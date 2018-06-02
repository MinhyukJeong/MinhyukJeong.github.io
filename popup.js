
const request = new XMLHttpRequest();
const url = 'https://minhyukjeong.github.io/popup.html'; 
request.open('GET', url, true);
request.onload = function () {
  console.log(request.responseText); 
};
request.send();
