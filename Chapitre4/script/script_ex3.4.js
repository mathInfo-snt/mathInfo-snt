var prop = ['images/csv21.png','images/csv22.png','images/csv23.png','images/csv24.png'];

var rep1 = ['"nom":"thomas","prénom":"luc","email":"luc.thomas@gmx.fr"',
            '"nom":"bertrand","prénom":"jean","email":"jean.bertrand@gmail.com"'];
var rep2 = ['"nom":"bruno","prénom":"serge","email":"serge.bruno@gmx.fr"',
            '"nom":"simond","prénom":"paul","email":"paul.simond@laposte.net"'];
var rep3 = ['"nom":"bernard","prénom":"nicolas","email":"nicolas.bernard@gmx.fr"',
            '"nom":"sernant","prénom":"etienne","email":"etienne.sernant@gmail.com"'];
var rep4 = ['"nom":"marchand","prénom":"david","email":"david.marchand@gmx.fr"',
            '"nom":"legrand","prénom":"maxime","email":"maxime.legrand@laposte.net"'];

var rep=[rep1,rep2,rep3,rep4];

var nb = 0;

function init1()
{
    var n = Math.floor(Math.random() * 4);
    afim = document.getElementById("ima1");
    var imag = "<img src='"+prop[n]+"' alt='Pixel' title='Pixel' />";
    afim.innerHTML=imag;
    nb=n;
}

function verif(nom_form)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    repon = repon.replace(/\./g,"");
    if (repon=='csv')
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

function verif2()
{
    var tab = document.querySelectorAll(".caseP");
    var reponse="";
    var sp1 = document.getElementById("ic1");
    var sp2 = document.getElementById("m1");
    for (var i=0; i<6; i++)
    {
        reponse=reponse+tab[i].value;
    }
    reponse=reponse.replace(/ /g,"");
    reponse=reponse.toLowerCase();
    ver = rep[nb][0]+rep[nb][1];
    if (reponse==ver)
    {
        sp1.innerHTML="<img src='images/croix_verte.png' width='20' height='20'>";
        sp2.style.color="green";
        sp2.innerHTML="<b>Bonne réponse !</b>";
    }
    else
    {
        sp1.innerHTML="<img src='images/croix_rouge.png' width='20' height='20'>";
        sp2.style.color="red";
        sp2.innerHTML="<b>Mauvaise réponse ! Recommencez !</b>";
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! \
        Vous pouvez passer à l'exercice suivant : <a class='abas' href='don_exercice3.5.html' > Exercice 3.5</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c4p3e4',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}