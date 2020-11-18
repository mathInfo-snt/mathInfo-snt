var prop = ["câble à paires torsadées avec un débit maximum de 10 Mbits/s",
            "câble coaxial fin avec un débit maximum de 10 MBits/s",
            "câble coaxial épais avec un débit maximum de 10 MBits/s",
            "câble à paires torsadées avec un débit maximum de 100 Mbits/s",
            "câble à fibre optique avec un débit maximum de 100 MBits/s",
            "câble à paires torsadées avec un débit maximum de 1000 Mbits/s",
            "câble à fibre optique avec un débit maximum de 1000 MBits/s"];
var nb = [0,0];

function init1()
{
    var n = Math.floor(Math.random()*7);
    document.write(prop[n]);
    nb[0]=n;
}

function init2()
{
    var n = Math.floor(Math.random()*7);
    while (n == nb[0])
    {
        n = Math.floor(Math.random()*7);
    }
    document.write(prop[n]);
    nb[1]=n;
}

function verif1(nom_form,ind)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var i = document.forms[nom_form].Liste.selectedIndex;
    var reponse = document.forms[nom_form].Liste.options[i].value;
    if (i==nb[ind])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : " 
            +"<a class='abas' href='int_exercice11.2.html' > Exercice 11.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c2p11e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
