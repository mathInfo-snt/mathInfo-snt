var tabnf = ['c3p7q7','c3p7e1','c3p7e2','c3p7e3'];

var tnf = ['href="ima_quiz7.html">Quiz 7</a>',
           'href="ima_exercice7.1.html">Exercice 7.1</a>',
           'href="ima_exercice7.2.html">Exercice 7.2</a>',
           'href="ima_exercice7.3.html">Exercice 7.3</a>'];

var nexnf = 4;

function fait()
{
    if(typeof localStorage!='undefined') 
    {
        affnf = "";
        fnf = 0;
        for(knf=0;knf<nexnf;knf++)
        {
            var nf = localStorage.getItem(tabnf[knf]);
            if(nf!=null) 
            {
                nf = parseInt(nf);
            } 
            else 
            {
                nf = 0;
                localStorage.setItem(tabnf[knf],nf);
            }
            if (nf == 1)
            {
                affnf = affnf + "<li><a class='li2' "+tnf[knf]+"</li>";
                fnf++
            }
            else
            {
                affnf = affnf + "<li><a class='li1' "+tnf[knf]+"</li>";
            }     
        }
        if (fnf == nexnf)
        {
            localStorage.setItem('c3p7',1);
        }
    }
    else
    {
        affnf = "";
        for(knf=0;knf<nexnf;knf++)
        {
            affnf = affnf + "<li><a class='li3' "+tnf[knf]+"</li>"; 
        }
    }
    document.getElementById('nf').innerHTML = affnf;
}

function xdecimal()
{
  decimal = document.getElementById("decimal");
  binaire = document.getElementById("binaire");
  binaire.value = (decimal.value-0).toString(2);
  while(binaire.value.length<8)
  {
    binaire.value = '0'+binaire.value;
  }
}

function xbinaire()
{
  decimal = document.getElementById("decimal");
  binaire = document.getElementById("binaire");
  decimal.value = parseInt(binaire.value,2);
}

function xcara()
{
  cara = document.getElementById("caractere");
  code = document.getElementById("code");
  code.value = cara.value.charCodeAt(0);
}

function xcode()
{
  cara = document.getElementById("caractere");
  code = document.getElementById("code");
  cara.value = String.fromCharCode(code.value);
}