var prop1 = ['Télésiège des Mossettes','Télésiège des Lindarets','Télésiège de la Léchère','Télésiège des Prolays'];
var rep1 = [2.2,1.1,1,1.4];
var rep2 = [670,370,110,440];

var repA = [rep1,rep2];
var pre = [0.1,10];

var nb = 0;
var nbp = 4;



function init1()
{
    var n = Math.floor(Math.random() * nbp);
    sol=prop1[n];
    document.write(sol);
    nb=n;
}

function curseur(cur,vcur)
{
    document.getElementById(vcur).textContent = document.getElementById(cur).value;
}

function verif1(nom_form,cur,nu)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var repo = document.getElementById(cur).value;
    if ( (repo >= repA[nu][nb]-pre[nu]) && (repo <= repA[nu][nb]+pre[nu]) )
    {
        sp[0].innerHTML="<img src='images/croix_verte.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_juste'>  Bonne réponse !</span>";
    }
    else
    {
        sp[0].innerHTML="<img src='images/croix_rouge.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
    }
}

function verif2(nom_form,cur)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var repo = document.getElementById(cur).value;
    if (repo >= 15000 && repo <=16000)
    {
        sp[0].innerHTML="<img src='images/croix_verte.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_juste'>  Bonne réponse !</span>";
    }
    else
    {
        sp[0].innerHTML="<img src='images/croix_rouge.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='gl_exercice5.3.html' > Exercice 5.3</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c6p5e2',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}