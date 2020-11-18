var prop1 = ["198.167.12.1","199.168.24.5","192.164.56.3","196.234.16.4"];
var prop2 = ["1027","1086","1045","1078"];
var prop3 = ["202.156.15.32","205.108.35.12","212.164.16.3","214.185.17.8"];

var nb1 = [-1,-1];
var nb2 = [-1,-1];
var nb3 = [-1,-1];

function init1(ind)
{
    var n = Math.floor(Math.random() * 4);
    while(n==nb1[1-ind])
    {
        n = Math.floor(Math.random() * 4);
    }
    val=prop1[n];
    document.write(val);
    nb1[ind]=n;
}

function init2(ind)
{
  var n = Math.floor(Math.random() * 4);
  while(n==nb2[1-ind])
    {
        n = Math.floor(Math.random() * 4);
    }
  val=prop2[n];
  document.write(val);
  nb2[ind]=n;
}

function init3(ind)
{
    var n = Math.floor(Math.random() * 4);
    while(n==nb3[1-ind])
    {
        n = Math.floor(Math.random() * 4);
    }
    val=prop3[n];
    document.write(val);
    nb3[ind]=n;
}

function verif(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    repon = repon.replace(/[()]/g,"");
    rep = prop1[nb1[ind]]+":"+prop2[nb2[ind]]+","+prop3[nb3[ind]]+":80";
    if (repon == rep)
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='int_exercice4.2.html' > Exercice 4.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c2p4e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
