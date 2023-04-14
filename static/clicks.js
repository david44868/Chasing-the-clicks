var xhr = new XMLHttpRequest();
xhr.open("GET", "/api/clicks");
xhr.responseType = "json";
xhr.onload = function() {
    document.getElementById("value").textContent = this.response;
}
xhr.send();

function clicked() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/counter");
    xhr.responseType = "json";
    xhr.onload = function() {
        document.getElementById("value").textContent = this.response;
    }
    xhr.send();
    geo()              
}

function geo() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ipapi.co/json");
    xhr.responseType = "json";
    xhr.onload = function() {
        if(this.response["continent_code"] == "NA") {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "https://api.countapi.xyz/hit/mysite.com/2na");
                xhr.responseType = "json";
                xhr.onload = function() {
                    document.getElementById("value1").textContent = this.response.value;
                }
                xhr.send();
        }
        if(this.response["continent_code"] == "SA") {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://api.countapi.xyz/hit/mysite.com/1sa");
            xhr.responseType = "json";
            xhr.onload = function() {
                document.getElementById("value2").textContent = this.response.value;
            }
            xhr.send();
        }
        if(this.response["continent_code"] == "EU") {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://api.countapi.xyz/hit/mysite.com/2eu");
            xhr.responseType = "json";
            xhr.onload = function() {
                document.getElementById("value3").textContent = this.response.value;
            }
            xhr.send();
        }
        if(this.response["continent_code"] == "AS") {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://api.countapi.xyz/hit/mysite.com/2as");
            xhr.responseType = "json";
            xhr.onload = function() {
                document.getElementById("value4").textContent = this.response.value;
            }
            xhr.send();
        }
        if(this.response["continent_code"] == "AF") {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://api.countapi.xyz/hit/mysite.com/1af");
            xhr.responseType = "json";
            xhr.onload = function() {
                document.getElementById("value6").textContent = this.response.value;
            }
            xhr.send();
        }
        if(this.response["continent_code"] == "OC") {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://api.countapi.xyz/hit/mysite.com/1oc");
            xhr.responseType = "json";
            xhr.onload = function() {
                document.getElementById("value5").textContent = this.response.value;
            }
            xhr.send();
        }
        if(this.response["continent_code"] == "AN") {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://api.countapi.xyz/hit/mysite.com/1an");
            xhr.responseType = "json";
            xhr.onload = function() {
                document.getElementById("value7").textContent = this.response.value;
            }
            xhr.send();
        } 
    }                  
    xhr.send();
}