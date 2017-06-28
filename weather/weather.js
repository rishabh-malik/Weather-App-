const request= require('request');

var getWeather=()=>{


request({
    url:'https://api.darksky.net/forecast/ac5bb14864d28c1f73575f86f20227f5/28.6589251,77.1457614',
    json:true
},(error,response,body)=>{
    if  (!error && response.statusCode === 200){
        console.log(body.currently.temperature);
  }else {
       console.log('Unable to fetch weather');
  }
});
}
module.exports.getWeather=getWeather;
