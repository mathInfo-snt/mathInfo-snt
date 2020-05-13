var prop1 = ['AUVERGNE-RHÔNE-ALPES','PROVENCE-ALPES-CÔTE D\'AZUR','BRETAGNE','NOUVELLE-AQUITAINE'];
var prop2 = ['SAVOIE',' JURA','FINISTERE','GIRONDE'];
var rep1 = ['69759.11','31378.93','27207.91','84060.29'];
var rep11 = ['69.759.11','31.378.93','27.207.91','84.060.29'];
var rep2 = ['LYON','MARSEILLE','RENNES','BORDEAUX'];
var rep3 = ['6028.25','4999.18','6733','10000.16'];
var rep31 = ['6.028.25','4.999.18','6.733','10.000.16'];
var rep4 = ['CHAMBERY','LONS-LE-SAUNIER','QUIMPER','BORDEAUX'];

var repA = [rep1,rep2];
var repB = [rep11,rep2];
var repC = [rep3,rep4];
var repD = [rep31,rep4];

var nb = [0,0];
var nbp = 4;
var nberr = 0;

function init1()
{
    var n = Math.floor(Math.random() * nbp);
    sol=prop1[n];
    document.write(sol);
    nb[0]=n;
}

function init2()
{
    var n = Math.floor(Math.random() * nbp);
    sol=prop2[n];
    document.write(sol);
    nb[1]=n;
}

function verif1(nom_form,nom_zone,nu)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var repo = document.forms[nom_form].elements[nom_zone].value;
    repo = repo.toUpperCase();
    repo = repo.replace(/ /g,"");
    repo = repo.replace(/KM²/g,"");
    repo = repo.replace(/,/g,".");
    if (repo == repA[nu][nb[0]] || repo == repB[nu][nb[0]])
    {
        sp[0].innerHTML="<img src='../images/croix_verte.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_juste'>  Bonne réponse !</span>";
    }
    else
    {
        sp[0].innerHTML="<img src='../images/croix_rouge.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
    }
}

function verif2(nom_form,nom_zone,nu)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var repo = document.forms[nom_form].elements[nom_zone].value;
    repo = repo.replace(/é/g,"E");
    repo = repo.toUpperCase();
    repo = repo.replace(/ /g,"");
    repo = repo.replace(/KM²/g,"");
    repo = repo.replace(/,/g,".");
    if (repo == repC[nu][nb[1]] || repo == repD[nu][nb[1]])
    {
        sp[0].innerHTML="<img src='../images/croix_verte.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_juste'>  Bonne réponse !</span>";
    }
    else
    {
        sp[0].innerHTML="<img src='../images/croix_rouge.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
    }
}

function verif_exo(no)
{
    var somme=0;
    var tab = document.querySelectorAll(".spanquiz");
    for (var i=0; i<no; i++)
    {
        if (tab[i].innerHTML == '<img src="../images/croix_verte.png" width="20" height="20">')
        {
            somme++;
        }
    }
    var m=document.querySelector(".reponse");
    if (somme == no)
    {
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='SNT_GL_exercice5.2.html' > Exercice 5.2</a></span>";
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}

