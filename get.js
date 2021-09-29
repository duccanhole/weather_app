var Name = document.getElementById('name'),
condition = document.getElementById('con'),
temp = document.getElementById('temp')
humidity = document.getElementById('hum'),
wind = document.getElementById('wind');
function getData(){
    let cityName = document.getElementById('cityname').value;
    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=8dd3399efb163e5a7a5f94b9359f035c';
    return url;
} 
function getApi(){
    fetch(getData())
    .then(res=>res.json())
    .then(data=>{
        let notice = data["message"];
        if(notice !== undefined){
            alert(notice);
            return;
        }
        Name.innerText=data["name"]+' ('+data["sys"]["country"]+')';
        condition.innerText='Condition: '+data["weather"][0]["main"];
        temp.innerText='Temperature: '+(data["main"]["temp"]-273.15).toFixed(2)+'(C)';
        humidity.innerText='Humidity: '+data["main"]["humidity"]+'%';
        wind.innerText='Windspeed: '+data["wind"]["speed"]+'m/s';
    })
}
//----------Taks: ----------
/* - Learn nodejs
 * - Advance react skill
 * - Do exercise form leetcode
 * - Complete weather app project
*/
