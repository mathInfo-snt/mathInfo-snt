var rep = ["2001.0db8.3c4d.0015.0000.0000.1a2f.1a2b", "2001.0db8.0000.85a3.0000.0000.ac1f.8001",
            "2001.0db8.00f1.001a.0000.0000.ac3f.2003"];
var prop = ["8193.3512.15437.21.0.0.6703.6699", "8193.3512.0.34211.0.0.44063.32769","8193.3512.241.26.0.0.44095.8195" ];

var repons = [rep,prop];

nb = [0,0];

function init1()
{
    var n = Math.floor(Math.random() * 3);
    ipv4=prop[n];
    document.write(ipv4);
    nb[0] = n;
}

function init2()
{
    var n = Math.floor(Math.random() * 3);
    while(n==nb[0])
    {
      n = Math.floor(Math.random() * 3);
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer au quizz suivant : <a class='abas' href='int_exercice2.3.html' > Exercice 2.3</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c2p2e2',1);
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
  hexa = document.getElementById("hexa");
  hexa.value = (decimal.value-0).toString(16);
  while(hexa.value.length<4)
  {
    hexa.value = '0'+hexa.value;
  }
}

function xhexa2()
{
  decimal = document.getElementById("decimal");
  hexa = document.getElementById("hexa");
  decimal.value = parseInt(hexa.value,16);
}
