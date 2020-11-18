var prop1 = ["/doc/temp/","im7.png","www.site.snt.fr","Safari 2.0","macOS Mojave 10.14","image/png",];
var prop2 = ["/documents/","page15.html","www.exemple.com","Mozilla/5.0","windows 10","text/html"];
var prop3 = ["/doc/images/","image51.gif","www.doc.info.ch","Mozilla/5.0","windows 10","image/gif"];
var prop4 = ["/doc/","page12.html","www.monsite.fr","Chrome/56.1","Ubuntu 18.04","text/html",];

var tab = [prop1, prop2, prop3, prop4];
var nb = 0;

function init()
{
    var n = Math.floor(Math.random() * 4);
    prop='GET '+tab[n][0]+tab[n][1]+' HTTP/1.1<br>'+'Host: '+tab[n][2]+'<br>User-Agent: '+tab[n][3]+' (compatible; '+tab[n][4]+')<br>Accept: '+tab[n][5];
    document.write(prop);
    nb=n;
}

function verif(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.replace(/ /g,"");
    propo = tab[nb][ind].replace(/ /g,"");
    if (repon == propo)
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='web_exercice4.2.html' > Exercice 4.2 </a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c1p4e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}

