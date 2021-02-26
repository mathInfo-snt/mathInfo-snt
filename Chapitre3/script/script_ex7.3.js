function derexo()
{
    if(typeof localStorage!='undefined') 
    {
        localStorage.setItem('c3p7e3',1);
    }
}

function xbin()
{
    bin = document.getElementById("binaire");
    dec = document.getElementById("decimal");
    car = document.getElementById("caractere");
    dec.value = parseInt(bin.value,2);
    car.value = String.fromCharCode(dec.value);
}

function xdec()
{
    bin = document.getElementById("binaire");
    dec = document.getElementById("decimal");
    car = document.getElementById("caractere");
    car.value = String.fromCharCode(dec.value);
    bin.value = (dec.value-0).toString(2);
    while(bin.value.length<8)
    {
        bin.value = '0'+bin.value;
    }
}

function xcar()
{
    bin = document.getElementById("binaire");
    dec = document.getElementById("decimal");
    car = document.getElementById("caractere");
    dec.value = car.value.charCodeAt(0);
    bin.value = (dec.value-0).toString(2);
    while(bin.value.length<8)
    {
        bin.value = '0'+bin.value;
    }
}

