var rep1 = ["61°27'18\"N","58°36'27\"S","74°6'45\"N","19°51'54\"S",
            "4°39'9\"N","83°51'18\"S","46°12'45\"N","35°15'36\"S"];

var rep2 = ["33°21'18\"E","49°39'27\"O","75°9'9\"E","17°57'54\"O",
            "156°42'36\"E","114°48'18\"O","172°24'45\"E","137°15'54\"O"];

var lat = ['61,455','-58,6075','74,1125','-19,865',
            '4,6525','-83,855','46,2125','-35,26'];
var long = ['33,355','-49,6575','75,1525','-17,965',
            '156,71','-114,805','172,4125','-137,265'];
var nb1=[100,100];
var nb2=[100,100];
var i1=Math.floor(Math.random() * 2);
var i2=Math.floor(Math.random() * 2);
var nr1=0;
var nr2=0;

function init1()
{
    var n = 2*Math.floor(Math.random() * 4) + i1%2;
    while ( n==nb1[0] || n==nb1[1] )
    {
        n = 2*Math.floor(Math.random() * 4) + i1%2;
    }
    i1=(i1+1)%2;
    nb1[i1]=n;
    document.getElementById("lati").innerHTML = lat[n];
}

function init2()
{
    var n = 2*Math.floor(Math.random() * 4) + i2%2;
    while (n==nb2[0] || n==nb2[1])
    {
        n = 2*Math.floor(Math.random() * 4) + i2%2;
    }
    i2=(i2+1)%2;
    nb2[i2]=n;
    document.getElementById("longi").innerHTML = long[n];
}

function verif1(nom_form,nom_zone)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var aff = document.forms[nom_form].elements[nom_zone].value;
    aff=aff.toUpperCase();
    aff=aff.replace(/ /g,"");
    aff=aff.replace(/''/g,"\"");
    aff=aff.replace("ORD","");
    aff=aff.replace("UD","");
    if (nr1<2)
    {
        if (aff==rep1[nb1[i1]])
        {
            nr1++;
            sp[0].innerHTML="<img src='images/vide.png' width='20' height='20'>";
            sp[1].innerHTML="<span class='reponse_juste'>  Bonne réponse !</span>";
            texte="Nombre de réponses justes d'affilée : "+nr1;
            document.getElementById("nrj").innerHTML = texte;
            document.forms[nom_form].elements[nom_zone].value="";
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
    aff=aff.replace(/''/g,"\"");
    aff=aff.replace("UEST","");
    aff=aff.replace("ST","");
    if (nr2<2 && nr1>=2)
    {
        if (aff==rep2[nb2[i2]])
        {
            nr2++;
            sp[0].innerHTML="<img src='images/vide.png' width='20' height='20'>";
            sp[1].innerHTML="<span class='reponse_juste'>  Bonne réponse !</span>";
            texte="Nombre de réponses justes d'affilée : "+nr2;
            document.getElementById("nrj2").innerHTML = texte;
            document.forms[nom_form].elements[nom_zone].value="";
            init2();
        }
        else
        {
            nr2=0;
            sp[0].innerHTML="<img src='images/croix_rouge.png' width='20' height='20'>";
            sp[1].innerHTML="<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
            //document.forms[nom_form].elements[nom_zone].value="";
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : "
        +"<a class='abas' href='ima_exercice5.3.html' > Exercice 5.3</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c3p5e2',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}