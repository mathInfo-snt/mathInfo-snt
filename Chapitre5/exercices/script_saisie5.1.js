prop1 = ['2014','2015','2016'];
rep1 = ['92,2','95,3','97,3'];
rep2 = ['92,1','95,2','97,2'];

var nb=[0,0];

function init1()
{
    var n = Math.floor(Math.random() * 3);
    af=prop1[n];
    document.write(af);
    nb[0]=n;
}

function init2()
{
    var n = Math.floor(Math.random() * 3);
    while (n==nb[0])
    {
        n = Math.floor(Math.random() * 3);
    }
    af=prop1[n];
    document.write(af);
    nb[1]=n;
}

function verif1(nom_form,nom_zone,nu)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var repo = document.forms[nom_form].elements[nom_zone].value;
    repo=repo.replace(/ /g,"");
    repo=repo.replace(/%/g,"");
    repo=repo.replace(/\./g,",");
    if (repo==rep1[nb[nu]] || repo==rep2[nb[nu]])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='SNT_RS_exercice5.2.html' > Exercice 5.2</a></span>";
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}