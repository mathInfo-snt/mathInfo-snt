var prop1 = '1972197119731964197019651966196319691968';
var prop2 = '20062010200820092007';

function verif1(nom_form)
{
    var tab = document.forms[nom_form].querySelectorAll(".caseP");
    var reponse="";
    var sp1 = document.getElementById("ic1");
    var sp2 = document.getElementById("m1");
    for (var i=0; i<10; i++)
    {
        reponse=reponse+tab[i].value;
    }
    reponse=reponse.replace(/ /g,"");
    if (reponse==prop1)
    {
        sp1.innerHTML="<img src='images/croix_verte.png' width='20' height='20'>";
        sp2.style.color="green";
        sp2.innerHTML="<b>Bonne réponse !</b>";
    }
    else
    {
        sp1.innerHTML="<img src='images/croix_rouge.png' width='20' height='20'>";
        sp2.style.color="red";
        sp2.innerHTML="<b>Mauvaise réponse ! Recommencez !</b>";
    }
}

function verif2(nom_form)
{
    var tab = document.forms[nom_form].querySelectorAll(".caseP");
    var reponse="";
    var sp1 = document.getElementById("ic2");
    var sp2 = document.getElementById("m2");
    for (var i=0; i<5; i++)
    {
        reponse=reponse+tab[i].value;
    }
    reponse=reponse.replace(/ /g,"");
    if (reponse==prop2)
    {
        sp1.innerHTML="<img src='images/croix_verte.png' width='20' height='20'>";
        sp2.style.color="green";
        sp2.innerHTML="<b>Bonne réponse !</b>";
    }
    else
    {
        sp1.innerHTML="<img src='images/croix_rouge.png' width='20' height='20'>";
        sp2.style.color="red";
        sp2.innerHTML="<b>Mauvaise réponse ! Recommencez !</b>";
    }
}

function verif(nom_form)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    if (repon=='28')
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! \
        Vous pouvez passer à l'exercice suivant : <a class='abas' href='don_exercice4.2.html' > Exercice 4.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c4p4e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}