var prop1 = ["Un réseau qui relie les ordinateurs de votre école :",
    "Un réseau qui relie les ordinateurs d’une société sur tout le Maroc :",
    "Un réseau qui relie les ordinateurs dans une société commerciale :",
    "Le réseau qui relie tous les sous réseaux administratifs de la ville de Lyon :",
    "Un réseau qui relie les ordinateurs du concessionnaire renault :",
    "Le réseau des différents appareils connectés chez vous à votre box :",
    "Un réseau qui relie les ordinateurs d'une grande compagnie industrielle :"];
var rep = ["LAN","WAN","LAN","MAN","VAN","PAN","CAN"];
var nb = [0,0,0,0,0,0,0];
var tab = [0,0,0,0,0,0,0];

function init1()
{
    var n = Math.floor(Math.random()*7);
    for(var i=0;i<7;i++)
    {
        n = Math.floor(Math.random()*7);
        while(tab[n]==1)
        {
            n = Math.floor(Math.random()*7);
        }
        nb[i]=n;
        tab[n] = 1;
    }
}

function afficher(ind)
{
  document.write(prop1[nb[ind]]);
}

function verif(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toUpperCase();
    repon = repon.replace(/ /g,"");
    if (repon == rep[nb[ind]])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : " 
            +"<a class='abas' href='int_exercice10.2.html' > Exercice 10.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c2p10e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
