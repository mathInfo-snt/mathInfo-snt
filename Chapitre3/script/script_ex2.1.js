var prop = ['images/pixel1.png','images/pixel2.png','images/pixel3.png','images/pixel4.png',
            'images/pixel5.png','images/pixel6.png'];

var trouge = [115,127,104,109,173,146];
var tvert = [55,64,154,69,89,108];
var tbleu = [214,231,130,137,115,222];

var rep = [trouge,tvert,tbleu];
var nb = [0,0];

function init1()
{
    var n = Math.floor(Math.random() * 6);
    afim = document.getElementById("ima1");
    var chemin = "<center><img src='"+prop[n]+"' alt='Pixel' title='Pixel' /></center>";
    afim.innerHTML=chemin;
    nb[0]=n;
}

function init2()
{
    var n = Math.floor(Math.random() * 6);
    while (n==nb[0])
    {
        n = Math.floor(Math.random() * 6);
    }
    afim = document.getElementById("ima2");
    var chemin = "<center><img src='"+prop[n]+"' alt='Pixel' title='Pixel' /></center>";
    afim.innerHTML=chemin;
    nb[1]=n;
}

function verif(nom_form,ind,num)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    if (repon == rep[ind][nb[num]])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='ima_exercice2.2.html' > Exercice 2.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c3p2e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
