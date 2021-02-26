var prop = ['RVB(192,58,36)','RVB(81,17,106)','RVB(201,49,137)','RVB(163,34,212)',
            'RVB(175,128,0)','RVB(64,32,180)','RVB(254,111,176)','RVB(29,147,241)',
            'RVB(12,184,70)','RVB(30,158,217)','RVB(252,99,141)','RVB(68,122,236)'];

var rep = ['#c03a24','#51116a','#c93189','#a322d4',
            '#af8000','#4020b4','#fe6fb0','#1d93f1',
            '#0cb846','#1e9ed9','#fc638d','#447aec'];
var nb=[0,0];
var nr1=0;
var nr2=0;

function init1()
{
    var n = Math.floor(Math.random() * 12);
    while (n==nb[0])
    {
        n = Math.floor(Math.random() * 12);
    }
    document.getElementById("prvb").innerHTML = prop[n];
    nb[0]=n;
}

function init2()
{
    var n = Math.floor(Math.random() * 12);
    while (n==nb[1] || n==nb[0])
    {
        n = Math.floor(Math.random() * 12);
    }
    document.getElementById("phex").innerHTML = rep[n];
    nb[1]=n;
}

function verif1(nom_form,nom_zone)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var aff = document.forms[nom_form].elements[nom_zone].value;
    aff=aff.toLowerCase();
    aff=aff.replace(/ /g,"");
    if (nr1<2)
    {
        if (aff==rep[nb[0]])
        {
            nr1++;
            sp[0].innerHTML="<img src='images/vide.png' width='20' height='20'>";
            sp[1].innerHTML="<span class='reponse_juste'>  Bonne réponse !</span>";
            texte="Nombre de réponses justes d'affilée : "+nr1;
            document.getElementById("nrj").innerHTML = texte;
            document.forms[nom_form].elements[nom_zone].value="#";
            init1();
        }
        else
        {
            nr1=0;
            sp[0].innerHTML="<img src='images/croix_rouge.png' width='20' height='20'>";
            sp[1].innerHTML="<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
            //document.forms[nom_form].elements[nom_zone].value="";
            texte="Nombre de réponses justes d'affilée : "+nr1;
            document.getElementById("nrj").innerHTML = texte;
        }
    }
    if (nr1>=2)
    {
        texte = "La question 1. est validée ! Vous pouvez passer à la question 2.";
        sp[0].innerHTML="<img src='images/croix_verte.png' width='20' height='20'>";
        document.getElementById("val1").innerHTML = texte;
    }
}

function verif2(nom_form,nom_zone)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var aff = document.forms[nom_form].elements[nom_zone].value;
    aff=aff.toUpperCase();
    aff=aff.replace(/ /g,"");
    if (nr2<2 && nr1>=2)
    {
        if (aff==prop[nb[1]])
        {
            nr2++;
            sp[0].innerHTML="<img src='images/vide.png' width='20' height='20'>";
            sp[1].innerHTML="<span class='reponse_juste'>  Bonne réponse !</span>";
            texte="Nombre de réponses justes d'affilée : "+nr2;
            document.getElementById("nrj2").innerHTML = texte;
            document.forms[nom_form].elements[nom_zone].value="RVB(";
            init2();
        }
        else
        {
            nr2=0;
            sp[0].innerHTML="<img src='images/croix_rouge.png' width='20' height='20'>";
            sp[1].innerHTML="<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
            //document.forms[nom_form].elements[nom_zone].value="RVB(";
            texte="Nombre de réponses justes d'affilée : "+nr2;
            document.getElementById("nrj2").innerHTML = texte;
        }
    }
    if (nr2>=2)
    {
        texte = "La question 2. est validée !";
        sp[0].innerHTML="<img src='images/croix_verte.png' width='20' height='20'>";
        document.getElementById("val2").innerHTML = texte;
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='ima_exercice3.2.html' > Exercice 3.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c3p3e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}


function xdecimal()
{
  decimal = document.getElementById("decimal");
  hexa = document.getElementById("hexa");
  decimal.value = decimal.value.replace(/ /g,"");
  hexa.value = (decimal.value-0).toString(16);
  while(hexa.value.length<2)
  {
    hexa.value = '0'+hexa.value;
  }
}

function xhexa()
{
  decimal = document.getElementById("decimal");
  hexa = document.getElementById("hexa");
  hexa.value = hexa.value.replace(/ /g,"");
  decimal.value = parseInt(hexa.value,16);
}
