const time = document.getElementById("clock")
//const time = document.body.querySelector('#clock')

setInterval(function()
{
    let date = new Date();
    time.innerHTML = date.toLocaleString()
} , 1000)
