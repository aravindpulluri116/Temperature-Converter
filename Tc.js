let ctf = document.getElementById("ctf")
let ftc = document.getElementById("ftc")
let result = document.getElementById("result")
let submit = document.getElementById("submit")
let input = document.getElementById("input")

submit.onclick=function()
{
    
    if(ctf.checked)
     {
        let x = Number(Math.trunc(input.value))
        let k 
        k= (x * (9/5)) + 32;
        result.textContent=`${k}°F`
     }
    else if (ftc.checked)
     {
        let x = Number(Math.trunc(input.value))
        let k 
        k= (x - 32) * (5/9);
        result.textContent=`${k}°C`
     }
}