var xhr = new XMLHttpRequest();
xhr.open("GET", "/api/continents");
xhr.responseType = "json";
xhr.onload = function() {
    document.getElementById("value1").textContent = this.response['NA'];
    document.getElementById("value2").textContent = this.response['SA'];
    document.getElementById("value3").textContent = this.response['EU'];
    document.getElementById("value4").textContent = this.response['AS'];
    document.getElementById("value5").textContent = this.response['OC'];
    document.getElementById("value6").textContent = this.response['AF'];
    document.getElementById("value7").textContent = this.response['AN'];
}
xhr.send();