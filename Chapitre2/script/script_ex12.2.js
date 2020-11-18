var prop1 = ["00110101","11001000","11101100","01010101","10111011",
             "00111101","11010110","01110111","1100011","10110101"];

var rep1 = ['0','1','1','0','0','1','1','0','0','1'];
var nb = 0;
var nr = 0;
var nt = 0;

function init1()
{
    var n = Math.floor(Math.random()*10);
    nb = n;
    document.getElementById("id_21").innerHTML = "<b><u>Octet :</u></b> &emsp;" + prop1[n];
}

function verif1(nom_form,nom_zone,ind)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var reponse = document.forms[nom_form].elements[nom_zone].value.toUpperCase();
    nt++;
    if (reponse==rep1[nb])
    {
        nr++;
        init1();
        sp[1].innerHTML="<img src='images/croix_verte.png' width='20' height='20'>";
        sp[2].innerHTML="<span class='reponse_juste'>  Bonne réponse ! </span>";
        texte="Nombre de réponses justes d'affilée : "+nr;
        document.getElementById("id_22").innerHTML = texte;
        document.forms[nom_form].elements[nom_zone].value="";
    }
    else
    {
        nr=0;
        sp[1].innerHTML="<img src='images/croix_rouge.png' width='20' height='20'>";
        sp[2].innerHTML="<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
        document.forms[nom_form].elements[nom_zone].value="";
        texte="Nombre de réponses justes d'affilée : "+nr;
        document.getElementById("id_22").innerHTML = texte;
    }
    if (nr>=5)
    {
        texte = "L'exercice est validé ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='int_exercice12.3.html' > Exercice 12.3</a></span>";
        document.getElementById("id_23").innerHTML = texte;
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c2p12e2',1);
            fait();
        }
    }
}