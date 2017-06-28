const request = require('request');
//used to request the google maps api
request(
    {url:'http://maps.googleapis.com/maps/api/geocode/json?address=%20wz%2098%20ram%20garh%20colony%20new%20delhi',
     json:true
},(error,response,body)=>{
  console.log(JSON.stringify(body, undefined, 2));
});