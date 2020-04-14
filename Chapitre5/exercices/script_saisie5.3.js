prop1 = ['2011','2012','2013','2014','2015'];
rep1 = ['522,2','972,3','1528,5','2218,8','2990,7'];
rep2 = ['49,9','56,2','59,6','59,8','62,7'];
rep3 = ['50','56,3','59,5','59,9','62,8'];
repa = [rep1,rep2,rep2];
repb = [rep1,rep3,rep3];

var nb=[0,0,0];

function init1()
{
    var n = Math.floor(Math.random() * 5);
    af=prop1[n];
    document.write(af);
    nb[0]=n;
    nb[1]=n;
}

function init2()
{
    var n = Math.floor(Math.random() * 5);
    while (n==nb[0])
    {
        n = Math.floor(Math.random() * 5);
    }
    af=prop1[n];
    document.write(af);
    nb[2]=n;
}

function verif1(nom_form,nom_zone,nu)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var repo = document.forms[nom_form].elements[nom_zone].value;
    repo=repo.replace(/ /g,"");
    repo=repo.replace(/%/g,"");
    repo=repo.replace(/\./g,",");
    if (repo==repa[nu][nb[nu]] || repo==repb[nu][nb[nu]])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='SNT_RS_exercice5.4.html' > Exercice 5.4</a></span>";
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}