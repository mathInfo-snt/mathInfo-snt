var prop = ['../images/grapheD.png','../images/grapheE.png','../images/grapheF.png'];

var tab1 = ['0','1','2','2','2','1','1','3','3',
            '1','0','2','2','1','1','2','3','3',
            '2','2','0','2','3','1','1','3','3',
            '2','2','2','0','1','1','3','1','3',
            '2','1','3','1','0','2','3','2','3',
            '1','1','1','1','2','0','2','2','2',
            '1','2','1','3','3','2','0','4','4',
            '3','3','3','1','2','2','4','0','4','4'];
var tab2 = ['0','1','2','2','3','3','3','4','4',
            '1','0','1','1','2','2','2','3','3',
            '2','1','0','1','2','1','1','2','2',
            '2','1','1','0','1','2','2','3','3',
            '3','2','2','1','0','1','3','2','3',
            '3','2','1','2','1','0','2','1','3',
            '3','2','1','2','3','2','0','1','3',
            '4','3','2','3','2','1','1','0','4','4'];
var tab3 = ['0','1','1','2','3','4','3','2','4',
            '1','0','1','2','3','4','3','2','4',
            '1','1','0','1','2','3','2','1','3',
            '2','2','1','0','2','3','1','1','3',
            '3','3','2','2','0','1','1','1','3',
            '4','4','3','3','1','0','2','2','4',
            '3','3','2','1','1','2','0','2','3',
            '2','2','1','1','1','2','2','0','2','4'];

var tab = [tab1,tab2,tab3];

var rep1 = ['4','2','F'];
var rep2 = ['4','2','C'];
var rep3 = ['4','2','H'];

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
    for (i=0;i<73;i++)
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
        //document.forms[nom_form].elements[nom_zone].value="";
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='SNT_RS_exercice3.3.html' > Exercice 3.3</a></span>";
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}