var prop1 = ["/doc/temp/","im7.png","www.site.snt.fr","Safari 2.0","macOS Mojave 10.14","image/png",];
var prop2 = ["/documents/","page15.html","www.exemple.com","Mozilla/5.0","windows 10","text/html"];
var prop3 = ["/doc/images/","image51.gif","www.doc.info.ch","Mozilla/5.0","windows 10","image/gif"];
var prop4 = ["/doc/","fiche_exemple.html","www.monsite.fr","Chrome/56.1","Ubuntu 18.04","text/html",];

var tab=[prop1,prop2,prop3,prop4];

var tabrep = ["","","",""];
var tabpro = ["","","",""];
var tabid = ["in1","in2","in3","in4"];
var nb=0;

function init()
{
    var n = Math.floor(Math.random() * 3);
    nb=n;
    tabrep[0] = "GET "+tab[n][0]+tab[n][1]+" HTTP/1.1";
    tabrep[1] = "Host: "+tab[n][2];
    tabrep[2] = "User-Agent: "+tab[n][3]+" (compatible; "+tab[n][4]+")";
    tabrep[3] = "Accept: "+tab[n][5];
}

function ecrit(i)
{
    document.write(tab[nb][i]);
}

function verif(nom)
{
    var sp1 = document.forms[nom].querySelector(".spanquiz");
    var sp2 = document.forms[nom].querySelector(".spanmes");
    var tabprop = document.forms[nom].querySelectorAll(".caseP2");
    var test = true;
    for (j=0;j<4;j++)
    {
        tabpro[j] = tabprop[j].value;
        tabpro[j] = tabpro[j].toLowerCase();
        tabpro[j] = tabpro[j].replace(/ /g,"");
        tabrep[j] = tabrep[j].toLowerCase();
        tabrep[j] = tabrep[j].replace(/ /g,"");
        if (tabrep[j] != tabpro[j])
        {
            test = false;
        }
        if (test)
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à la suite : <a class='abas' href='web_exercice4.3.html' > Exercice 4.3 </a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c1p4e2',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}

init();

