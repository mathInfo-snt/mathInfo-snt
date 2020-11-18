var prop1 = ["ma page","mon site","page1","page HTML"];
var prop2 = ["Code HTML","Site SNT","Ma page Web","Mon code HTML"];

var tab = [prop1, prop2];
var tabpro = ["",""];
var nb = [0,0];

var rep1 = ["<title>mapage</title>","<title>monsite</title>","<title>page1</title>","<title>pagehtml</title>"];
var rep2 = ["<h1>codehtml</h1>","<h1>sitesnt</h1>","<h1>mapageweb</h1>","<h1>moncodehtml</h1>"];

var tabrep = [rep1,rep2];

function init(ind)
{
    var n = Math.floor(Math.random() * 4);
    ndd=tab[ind][n];
    document.write(ndd);
    nb[ind]=n;
}

function verif(nom)
{
    var sp1 = document.forms[nom].querySelector(".spanquiz");
    var sp2 = document.forms[nom].querySelector(".spanmes");
    var tabprop = document.forms[nom].querySelectorAll(".caseP2");
    var test = true;
    for (j=0;j<2;j++)
    {
        tabpro[j] = tabprop[j].value;
        tabpro[j] = tabpro[j].toLowerCase();
        tabpro[j] = tabpro[j].replace(/ /g,"");
        if (tabrep[j][nb[j]] != tabpro[j])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à la page suivante <a class='abas' href='web_exercice8.2.html' > Exercice 8.2 </a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c1p8e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}

