var prop = ['images/json1.png','images/json2.png','images/json3.png'];

var rep1 = ['marque,modèle,prixrossignol,sky7hd,285.99eurossalomon,qst106oil,429.99eurosfaction,candide1.0,439.99euros',
            'variété,diamètre,prixaukggolden,75mm,1.89eurosgala,70mm,2.01eurosreinette,75mm,2.12euros',
            'variété,poids,prixbaguette,250g,0.95eurosficelle,125g,0.65eurosboule,500g,1.75euros'];

var nb = 0;

function init1()
{
    var n = Math.floor(Math.random() * 3);
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
    if (repon=='json')
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
    for (var i=0; i<4; i++)
    {
        reponse=reponse+tab[i].value;
    }
    reponse=reponse.replace(/ /g,"");
    reponse=reponse.replace(/;/g,",");
    reponse=reponse.toLowerCase();
    if (reponse==rep1[nb])
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
        Vous pouvez passer à l'exercice suivant : <a class='abas' href='don_exercice3.2.html' > Exercice 3.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c4p3e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}