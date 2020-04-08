var prop = ['../images/grapheA.png','../images/grapheB.png','../images/grapheC.png'];

var tab1 = ['0','1','1','1','1','1',
            '1','0','1','2','2','2',
            '1','1','0','2','1','2',
            '1','2','2','0','2','2',
            '1','2','1','2','0','2','2'];
var tab2 = ['0','1','2','1','2','2',
            '1','0','1','1','1','1',
            '2','1','0','1','2','2',
            '1','1','1','0','2','2',
            '2','1','2','2','0','2','2'];
var tab3 = ['0','1','2','2','1','2',
            '1','0','2','1','1','2',
            '2','2','0','2','1','2',
            '2','1','2','0','1','2',
            '1','1','1','1','0','1','2'];

var tab = [tab1,tab2,tab3];

var rep1 = ['2','1','A'];
var rep2 = ['2','1','B'];
var rep3 = ['2','1','E'];

var rep = [rep1,rep2,rep3];

var nb = 0;

function init1()
{
    var n = Math.floor(Math.random() * 3);
    afim = document.getElementById("ima1");
    var imag = "<img src='"+prop[n]+"' alt='Gaphe' title='Graphe' />";
    afim.innerHTML=imag;
    nb=n;
}

function verific(num)
{
    var val = document.getElementById(num).value;
    var spim1 = document.getElementById("icr1");
    var spim2 = document.getElementById("icr2");
    ent = parseInt(val);
    if(isNaN(val) || val!=ent || ent!=tab[nb][num] )
    {
        //alert('Mauvaise valeur');
        document.getElementById(num).value='';
        spim1.innerHTML="<img src='../images/croix_rouge.png' width='20' height='20'> <b>ERREUR DE SAISIE !</b>"; 
        spim2.innerHTML="<img src='../images/croix_rouge.png' width='20' height='20'> <b>ERREUR DE SAISIE !</b>"; 
    }
    else
    {
        spim1.innerHTML="<img src='../images/vide.png' width='20' height='20'>";
        spim2.innerHTML="<img src='../images/vide.png' width='20' height='20'>";
    }
}

function verif(nom_form)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var rep=true;
    for (i=0;i<31;i++)
    {
        val = document.getElementById(i).value;
        if(val!=tab[nb][i])
        {
            rep=false;
        }
    }
    if(rep)
    {
        sp[0].innerHTML="<img src='../images/croix_verte.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_juste'>  Tableau complet !</span>";
    }
    else
    {
        sp[0].innerHTML="<img src='../images/croix_rouge.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_fausse'>  Tableau incomplet !</span>";
    }
}

function verif1(nom_form,nom_zone,nu)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var repo = document.forms[nom_form].elements[nom_zone].value;
    repo = repo.toUpperCase();
    repo=repo.replace(/ /g,"");
    if (repo==rep[nb][nu])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='SNT_RS_exercice3.2.html' > Exercice 3.2</a></span>";
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}