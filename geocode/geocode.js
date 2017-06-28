const request = require('request');

var geocodeAddress=(address,callback)=>{
//encoding the user input so that it can be send for request
var encodedAddress= encodeURIComponent(address);

//used to request the http in this case google maps api
request(
    {url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
     json:true
},(error,response,body)=>{
  //error handling  
  if  (error){
      callback('Unable to connect to google servers');
  }else if(body.status === 'ZERO_RESULTS'){
      callback('Unable to find address');
  }else{
  callback(undefined,{
    address: body.results[0].formatted_address,
    latitude: body.results[0].geometry.location.lat,
    longitude: body.results[0].geometry.location.lng
  });    
}});
};

module.exports.geocodeAddress=geocodeAddress;