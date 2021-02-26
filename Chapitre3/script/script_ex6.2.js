var prop = ['P287','P346'];

function verif1()
{
    var tab = document.querySelectorAll(".caseP");
    var reponse="";
    var sp1 = document.getElementById("ic1");
    var sp2 = document.getElementById("m1");
    for (var i=0; i<3; i++)
    {
        reponse=reponse+tab[i].value;
    }
    reponse=reponse.replace(/ /g,"");
    reponse=reponse.toUpperCase();
    if (reponse==prop[0] )
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

function verif2()
{
    var tab = document.querySelectorAll(".caseP");
    var reponse="";
    var sp1 = document.getElementById("ic2");
    var sp2 = document.getElementById("m2");
    for (var i=3; i<6; i++)
    {
        reponse=reponse+tab[i].value;
    }
    reponse=reponse.replace(/ /g,"");
    reponse=reponse.toUpperCase();
    if (reponse==prop[1] )
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

function verif3()
{
    var sp1 = document.getElementById("ic3");
    var sp2 = document.getElementById("m3");
    var affi = document.getElementById('scim1').value;
    if (affi=="trois lignes horizontales grises sur fond noir")
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

function verif4()
{
    var sp1 = document.getElementById("ic4");
    var sp2 = document.getElementById("m4");
    var affi = document.getElementById('scim2').value;
    if (affi=="un damier rouge et vert")
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
        +"<a class='abas' href='ima_exercice6.3.html' > Exercice 6.3</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c3p6e2',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}