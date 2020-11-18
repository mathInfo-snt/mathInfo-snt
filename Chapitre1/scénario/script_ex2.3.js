var prop1 = ["http","www","site-snt.fr","/documents/pages/","page4.html"];
var prop2 = ["http","www","fnac.info.com","/doc/info/","info-dvd.html"];
var prop3 = ["https","www","impots.gouv.fr","/base/fichiers/","page-impots.shtml"];
var prop4 = ["http","www","blog-bob.1987.ch","/perso/","imp1206.htm"];
var prop5 = ["https","www","mpsecurite.com","/document/","fiche11.shtm"];
var prop6 = ["https","www","new-site.en","/temp/doc/","pagesec.php"];
var prop7 = ["http","webmail","site.fr","/webmail/fr_FR/","inbox.html"];
var prop8 = ["http","forum","site-snt.fr","/forums/","geraniums.html"];

var prop = [prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8];
var nb = 0;

function init()
{
    var n = Math.floor(Math.random() * 8);
    url=prop[n][0]+'://'+prop[n][1]+'.'+prop[n][2]+prop[n][3]+prop[n][4];
    document.write(url);
    nb=n;
}

function verif(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.replace(/ /g,"");
    repon = repon.replace(/:\/\//g,"");
    if (repon == prop[nb][ind])
    {
        sp1.innerHTML = "<img src='images/croix_verte.png' width='20' height='20'>";
        sp2.innerHTML = "<span class='reponse_juste'>  Bonne réponse !</span>";
    }
    else
    {
        sp1.innerHTML = "<img src='images/croix_rouge.png' width='20' height='20'>";
        sp2.innerHTML = "<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
        repon = "";
    }
}

function verif_exo(no)
{
    var somme=0;
    var prop = document.querySelectorAll(".spanquiz");
    for (var i=0; i<no; i++)
    {
        if (prop[i].innerHTML == '<img src="images/croix_verte.png" width="20" height="20">')
        {
            somme++;
        }
    }
    var m=document.querySelector(".reponse");
    if (somme == no)
    {
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='web_exercice2.4.html' > Exercice 2.4 </a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c1p2e3',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}

