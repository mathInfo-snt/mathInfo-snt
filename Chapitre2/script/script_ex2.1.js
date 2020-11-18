var prop = ["192.168.0.2","192.168.0.1","172.0.2.11","124.10.2.11","178.12.255.24","18.29.172.1","208.11.12.33","106.154.213.23" ];
var rep = ["11000000.10101000.00000000.00000010", "11000000.10101000.00000000.00000001","10101100.00000000.00000010.00001011",
            "01111100.00001010.00000010.00001011", "10110010.00001100.11111111.00011000","00010010.00011101.10101100.00000001",
            "11010000.00001011.00001100.00100001", "01101010.10011010.11010101.00010111" ];

repons = [rep,prop];
 
nb = [0,0];

function init1()
{
    var n = Math.floor(Math.random() * 8);
    ipv4=prop[n];
    document.write(ipv4);
    nb[0] = n;
}

function init2()
{
    var n = Math.floor(Math.random() * 8);
    while(n==nb[0])
    {
      n = Math.floor(Math.random() * 8);
    }
    ipv4=rep[n];
    document.write(ipv4);
    nb[1] = n;
}

function verif(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    if (repon == repons[ind][nb[ind]])
    {
        sp1.innerHTML = "<img src='images/croix_verte.png' width='20' height='20'>";
        sp2.innerHTML = "<span class='reponse_juste'>  Bonne réponse !</span>";
    }
    else
    {
        sp1.innerHTML = "<img src='images/croix_rouge.png' width='20' height='20'>";
        sp2.innerHTML = "<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
    }
}

function verif_exo(no)
{
    var somme=0;
    var tab = document.querySelectorAll(".spanquiz");
    for (var i=0; i<no; i++)
    {
        if (tab[i].innerHTML == '<img src="images/croix_verte.png" width="20" height="20">')
        {
            somme++;
        }
    }
    var m=document.querySelector(".reponse");
    if (somme == no)
    {
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='int_exercice2.2.html' > Exercice 2.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c2p2e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
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
