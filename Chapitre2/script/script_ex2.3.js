function derexo()
{
    if(typeof localStorage!='undefined') 
    {
        localStorage.setItem('c2p2e3',1);
    }
}

function xdecimal2()
{
  decimal = document.getElementById("decimal");
  binaire = document.getElementById("binaire");
  binaire.value = (decimal.value-0).toString(2);
  while(binaire.value.length<8)
  {
    binaire.value = '0'+binaire.value;
  }
}

function xbinaire2()
{
  decimal = document.getElementById("decimal");
  binaire = document.getElementById("binaire");
  decimal.value = parseInt(binaire.value,2);
}

