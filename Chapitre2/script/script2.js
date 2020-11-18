var tabnf = ['c2p2q2','c2p2e1','c2p2e2','c2p2e3'];

var tnf = ['href="int_quiz2.html">Quiz 2</a>',
           'href="int_exercice2.1.html">Exercice 2.1</a>',
           'href="int_exercice2.2.html">Exercice 2.2</a>',
           'href="int_exercice2.3.html">Exercice 2.3</a>'];

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
            localStorage.setItem('c2p2',1);
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
  hexa = document.getElementById("hexa");
  binaire.value = (decimal.value-0).toString(2);
  hexa.value = (decimal.value-0).toString(16);
  while(binaire.value.length<8)
  {
    binaire.value = '0'+binaire.value;
  }
  while(hexa.value.length<4)
  {
    hexa.value = '0'+hexa.value;
  }
}

function xbinaire()
{
  decimal = document.getElementById("decimal");
  binaire = document.getElementById("binaire");
  hexa = document.getElementById("hexa");
  decimal.value = parseInt(binaire.value,2);
  hexa.value = (parseInt(binaire.value,2)).toString(16);
  while(hexa.value.length<4)
  {
    hexa.value = '0'+hexa.value;
  }
}

function xhexa()
{
  decimal = document.getElementById("decimal");
  binaire = document.getElementById("binaire");
  hexa = document.getElementById("hexa");
  decimal.value = parseInt(hexa.value,16);
  binaire.value = (parseInt(hexa.value,16)).toString(2);
  while(binaire.value.length<8)
  {
    binaire.value = '0'+binaire.value;
  }
}