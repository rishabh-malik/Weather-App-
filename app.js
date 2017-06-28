const request = require('request');
const yargs= require('yargs')

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

console.log(argv);

//used to request the http in this case google maps api
request(
    {url:'http://maps.googleapis.com/maps/api/geocode/json?address=%20wz%2098%20ram%20garh%20colony%20new%20delhi',
     json:true
},(error,response,body)=>{
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Address: ${body.results[0].geometry.location.lng}`);
});