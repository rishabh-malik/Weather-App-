const request = require('request');
const yargs= require('yargs')

//taking input
const argv=yargs
.options({
    a:{
        demand:true,
        alias:'address',
        describe:'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help','h')
.argv;

//encoding the user input so that it can be send for request
var encodedAddress= encodeURIComponent(argv.address);

//used to request the http in this case google maps api
request(
    {url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
     json:true
},(error,response,body)=>{
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Address: ${body.results[0].geometry.location.lng}`);
});