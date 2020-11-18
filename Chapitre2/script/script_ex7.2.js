var prop1 = ["T1","T2"];
var prop2 = ["T1","T3"];
var prop3 = ["T2","T3"];
var prop = [prop1,prop2,prop3];

var propo = ["A","B","C"];
var rep1 = ["c","d","e"];

var prop41 = ["E3","C1"];
var prop42 = ["A2","T3"];
var prop43 = ["C2","T1"];
var prop44 = ["T2","A3"];
var prop4=[prop41,prop42,prop43,prop44];

var rep = ["a1","a2","a3"];
var rep2 = ["t1s2t2","t1s2t3","t2s2t3"];

var rep4 = ["E3S1ABDGS3C1","A2S4ECBS2T3","C2S3GDBS2T1","T2S2BCES4A3"];

var nb = 0;
var nb2 = [0,0];
var nb4 = [0,0];

function init1()
{
    var n = Math.floor(Math.random() * 3);
    choix=prop[n];
    document.write("<b>"+choix[0]+"</b> souhaite envoyer un <b>paquet</b> à la machine <b>"+choix[1]+"</b>");
    nb=n;
}

function init2()
{
    var n = Math.floor(Math.random() * 3);
    choix=propo[n];
    document.write(choix);
    nb2[0]=n;
}

function init21()
{
    var n = Math.floor(Math.random() * 3);
    while(n == nb2[0])
    {
        n = Math.floor(Math.random() * 3);
    }
    choix=propo[n];
    document.write(choix);
    nb2[1]=n;
}

function init3()
{
    var n = Math.floor(Math.random() * 4);
    choix="<b>"+prop4[n][0]+"</b> à la machine <b>"+prop4[n][1]+"</b>";
    document.write(choix);
    nb4[0]=n;
}

function init4()
{
    var n = Math.floor(Math.random() * 4);
    while (n==nb4[0])
    {
        n = Math.floor(Math.random() * 4);
    }
    choix="<b>"+prop4[n][0]+"</b> à la machine <b>"+prop4[n][1]+"</b>";
    document.write(choix);
    nb4[1]=n;
}

function verif1(nom_form)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    if (repon == rep[0] || repon == rep[1] || repon == rep[2])
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

function verif2(nom_form)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    repon = repon.replace(/-/g,"");
    if (repon == rep2[nb])
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

function verif3(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    repon = repon.replace("routeur","");
    repon = repon.replace(/-/g,"");
    if (repon == rep1[nb2[ind]])
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

function verif4(nom_form,nom_zone,ind)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var reponse = document.forms[nom_form].elements[nom_zone].value.toUpperCase();
    for (i=1;i<10;i++)
    {
      reponse=reponse.replace('-','');
      reponse=reponse.replace('-','');
    }
    if (reponse==rep4[nb4[ind]])
    {
        sp[0].innerHTML="<img src='../.images/.croix_verte.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_juste'>  Bonne réponse !</span>";
    }
    else
    {
        sp[0].innerHTML="<img src='../.images/.croix_rouge.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
        //document.forms[nom_form].elements[nom_zone].value="";
    }
}

function verif(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    if (repon == rep[ind])
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
            +"<a class='abas' href='int_exercice7.3.html' > Exercice 7.3</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c2p7e2',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
