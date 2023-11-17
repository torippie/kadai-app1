
const url = require('url');
const my_url = "http://localhost:3000/user?country=japan&city=Tokyo"
const url_Object = url.parse(my_url,true);

console.log(url_Object.host);
console.log(url_Object.pathname);
console.log(url_Object.search);

const queryData = url_Object.query
console.log(queryData.country);
console.log(queryData.city);