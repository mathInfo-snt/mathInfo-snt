var prop1 = ["00110101 0 10110101 0","11001000 0 11011000 0","11101100 1 01101100 1","01010101 1 01110101 1",
             "10101010 1 10100010 1","10110111 0 10100111 0","11101110 1 11001110 1","00010110 1 00110110 1"];
var rep1 = ["00110101","11011000", "11101100","01110101","10100010","10110111","11001110","00010110"];
var nb = 0;
var nr=0;

function init1()
{
    var n = Math.floor(Math.random()*8);
    nb = n;
    document.getElementById("id_21").innerHTML = prop1[n];
}

function verif1(nom_form,nom_zone,ind)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var reponse = document.forms[nom_form].elements[nom_zone].value.toUpperCase();
    reponse = reponse.replace(/ /g,"");
    if (reponse==rep1[nb])
    {
        nr++;
        init1();
        sp[0].innerHTML="<img src='images/croix_verte.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_juste'>  Bonne réponse !</span>";
        texte="Nombre de réponses justes d'affilée : "+nr;
        document.getElementById("id_22").innerHTML = texte;
        document.forms[nom_form].elements[nom_zone].value="";
    }
    else
    {
        nr=0;
        sp[0].innerHTML="<img src='images/croix_rouge.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
        document.forms[nom_form].elements[nom_zone].value="";
        texte="Nombre de réponses justes d'affilée : "+nr;
        document.getElementById("id_22").innerHTML = texte;
    }
    if (nr>=3)
    {
        texte = "L'exercice est validé ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='int_exercice12.4.html' > Exercice 12.4</a></span>";
        document.getElementById("id_23").innerHTML = texte;
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c2p12e3',1);
            fait();
        }
    }
}