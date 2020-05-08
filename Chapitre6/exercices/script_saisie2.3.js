var prop = ["A","B","C","D","E","F","G","H","I","J"];
var rep1 = ['40°N105°O','10°S60°O','50°S75°O','70°N45°O','20°S30°E',
            '70°S45°E','30°S135°E','50°N120°E','60°N75°E','70°N30°E'];

var nb = [0,0,0];
nbp = 10;

function init1()
{    
    var n = Math.floor(Math.random() * nbp);
    sol=prop[n];
    document.write(sol);
    nb[0]=n;
}

function init2()
{
    var n = Math.floor(Math.random() * nbp);
    while (n==nb[0])
    {
        n = Math.floor(Math.random() * nbp);
    }
    sol=prop[n];
    document.write(sol);
    nb[1]=n;
}

function init3()
{
    var n = Math.floor(Math.random() * nbp);
    while (n==nb[0] || n==nb[1])
    {
        n = Math.floor(Math.random() * nbp);
    }
    sol=prop[n];
    document.write(sol);
    nb[2]=n;
}

function verif1(nom_form,nom_zone,nu)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var repo = document.forms[nom_form].elements[nom_zone].value;
    repo = repo.toUpperCase();
    repo=repo.replace(/ /g,"");
    repo=repo.replace(/\(/g,"");
    repo=repo.replace(/\)/g,"");
    repo=repo.replace(/,/g,"");
    repo=repo.replace(/;/g,"");
    repo=repo.replace(/NORD/g,"N");
    repo=repo.replace(/SUD/g,"S");
    repo=repo.replace(/EST/g,"E");
    repo=repo.replace(/OUE/g,"O");
    if (repo==rep1[nb[nu]])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='SNT_GL_exercice2.4.html' > Exercice 2.4</a></span>";
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}