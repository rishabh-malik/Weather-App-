const request= require('request');

var getWeather=(lat,lng ,callback)=>{
request({
    url:`https://api.darksky.net/forecast/ac5bb14864d28c1f73575f86f20227f5/${lat},${lng}`,
    json:true
},(error,response,body)=>{
    if(!error && response.statusCode === 200){
        callback(undefined,{
            temperature:body.currently.temperature,
        apparentTemperature:body.currently.apparentTemperature});
  }else {
       callback('Unable to fetch weather');
  }
});
}
module.exports.getWeather=getWeather;