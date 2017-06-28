// const yargs= require('yargs')
// const geocode=require('./geocode/geocode.js')

// //taking input
// const argv=yargs
// .options({
//     a:{
//         demand:true,
//         alias:'address',
//         describe:'Address to fetch weather for',
//         string: true
//     }
// })
// .help()
// .alias('help','h')
// .argv;

// geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
//  if(errorMessage){
//      console.log(errorMessage);
//  }else{
//      console.log(JSON.stringify(results,undefined,2));
//  }
// });

//ac5bb14864d28c1f73575f86f20227f5

const request= require('request');
request({
    url:'https://api.darksky.net/forecast/ac5bb14864d28c1f73575f86f20227f5/28.6589251,77.1457614',
    json:true
},(error,response,body)=>{
    if  (!error && response.statusCode === 200){
        console.log(body.currently.temperature);
  }else {
       console.log('Unable to fetch weather');
  }

})
