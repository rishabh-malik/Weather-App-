const request = require('request');
//used to request the google maps api
request(
    {url:'http://maps.googleapis.com/maps/api/geocode/json',
     json:true
},(error,response,body)=>{
  console.log(body);
});