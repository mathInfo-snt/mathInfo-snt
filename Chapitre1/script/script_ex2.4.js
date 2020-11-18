var dom = ["blogmax.fr","monsiteperso.ch","msecurity.com"];
var che = ["/doc/pages/","/temp/docu/","/document/temp/"];
var fic = ["page2.html","page41.htm","fichier8.php"];

var nb = [0,0,0];
var url = ["",""];

function init(tab,i)
{
    var n = Math.floor(Math.random() * 3);
    document.write(tab[n]);
    nb[i] = n;
}

function verif(nom_form,nom_zone,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements[nom_zone];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    url[0] = 'http://www.'+dom[nb[0]]+che[nb[1]]+fic[nb[2]];
    url[1] = "http://info.cern.ch/hypertext/www/theproject.html";
    if (repon == url[ind])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer au quizz suivant : <a class='abas' href='web_exercice2.5.html' > Exercice 2.5 </a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c1p2e4',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}

