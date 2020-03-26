var prop = ['Facebook','Twitter','Instagram','LinkedIn'];
var rep1 = ['2004','2006','2010','2003'];
var rep2 = ['N ≥ 2 milliardsgénéraliste','300 millions ≤ N < 400 millionsmicroblogage',
            '1 milliard ≤ N < 2 milliardsvisuel','200 millions ≤ N < 300 millionsprofessionnel'];

var nb = [0,0];

function init1()
{
    var n = Math.floor(Math.random() * 4);
    sol=prop[n];
    document.write(sol);
    nb[0]=n;
}

function init2()
{
    var n = Math.floor(Math.random() * 4);
    while (n==nb[0])
    {
        n = Math.floor(Math.random() * 4);
    }
    sol=prop[n];
    document.write(sol);
    nb[1]=n;
}

function verif1(nom_form,nom_zone,nu)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var repo = document.forms[nom_form].elements[nom_zone].value;
    repo = repo.toLowerCase();
    repo=repo.replace(/ /g,"");
    if (repo==rep1[nb[nu]])
    {
        sp[0].innerHTML="<img src='../images/croix_verte.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_juste'>  Bonne réponse !</span>";
    }
    else
    {
        sp[0].innerHTML="<img src='../images/croix_rouge.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
        //document.forms[nom_form].elements[nom_zone].value="";
    }
}

function verif2(nom_form)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var rp1 = document.getElementById('s1').value;
    var rp2 = document.getElementById('s2').value;
    var propo = rp1+rp2;
    var m=document.querySelector(".reponse2");
    if (rep2[nb[0]]==propo)
    {
        sp[0].innerHTML="<img src='../images/croix_verte.png' width='20' height='20'>";
        m.innerHTML="<span class='reponse_juste'> Bonne réponse !</span>";
    }
    else
    {
        sp[0].innerHTML="<img src='../images/croix_rouge.png' width='20' height='20'>";
        m.innerHTML="<span class='reponse_fausse'>Mauvaise réponse ! Recommencez !</span>";
    }
}

function verif3(nom_form)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var rp1 = document.getElementById('s3').value;
    var rp2 = document.getElementById('s4').value;
    var propo = rp1+rp2;
    var m=document.querySelector(".reponse4");
    if (rep2[nb[1]]==propo)
    {
        sp[0].innerHTML="<img src='../images/croix_verte.png' width='20' height='20'>";
        m.innerHTML="<span class='reponse_juste'> Bonne réponse !</span>";
    }
    else
    {
        sp[0].innerHTML="<img src='../images/croix_rouge.png' width='20' height='20'>";
        m.innerHTML="<span class='reponse_fausse'>Mauvaise réponse ! Recommencez !</span>";
    }
}

function verif_exo(no)  // Fonction pour vérifier un quizz
{
    var somme=0;  // Variable pour compter le nombre de bonnes réponses
    var tab = document.querySelectorAll(".spanquiz");  // Tableau qui contient les emplacements des icones croix rouges et vertes
    for (var i=0; i<no; i++)  // Boucle pour chaque question de l'exercice
    {
        if (tab[i].innerHTML == '<img src="../images/croix_verte.png" width="20" height="20">')
        {
            somme++;
        }
    }
    var m=document.querySelector(".reponse");
    if (somme == no)
    {
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='SNT_RS_exercice2.2.html' > Exercice 2.2</a></span>";
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}