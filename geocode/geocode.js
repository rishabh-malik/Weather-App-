const request = require('request');

var geocodeAddress=(address)=>{
//encoding the user input so that it can be send for request
var encodedAddress= encodeURIComponent(address);

//used to request the http in this case google maps api
request(
    {url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
     json:true
},(error,response,body)=>{
  //error handling  
  if  (error){
      console.log('Unable to connect to google servers');
  }else if(body.status === 'ZERO_RESULTS'){
      console.log('Unable to find address.');
  }else{
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Address: ${body.results[0].geometry.location.lng}`);
}});
};

module.exports.geocodeAddress=geocodeAddress;