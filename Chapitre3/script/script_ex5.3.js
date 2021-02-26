var lat = ['45,3575','48,465','48,05','44,155'];
var long = ['6,1025','2,6525','-2,2','-1,3025'];
var cp = ['38580','77300','35380','40200'];
var com = ['PINSOT','FONTAINEBLEAU','PAIMPONT','MIMIZAN']
var rep = [lat,long,cp,com];
var prop = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg'];
var nb = 0;

function init1()
{
    var n = Math.floor(Math.random() * 4);
    im=prop[n];
    document.write(im);
    nb=n;
}

function verif1(nom_form,nom_zone,ind)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var aff = document.forms[nom_form].elements[nom_zone].value;
    aff=aff.toUpperCase();
    aff=aff.replace(/ /g,"");
    aff=aff.replace(/\+/g,"");
    aff=aff.replace(/\./g,",");
    if (aff==rep[ind][nb])
    {
        sp[0].innerHTML="<img src='../.images/.croix_verte.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_juste'>  Bonne réponse !</span>";
    }
    else
    {
        sp[0].innerHTML="<img src='../.images/.croix_rouge.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
        //document.forms[nom_form].elements[nom_zone].value="";
    }
}

function verif(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toUpperCase();
    repon = repon.replace(/ /g,"");
    repon = repon.replace(/\+/g,"");
    repon = repon.replace(/\./g,"");
    
    if (repon == rep[ind][nb])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : "
        +"<a class='abas' href='ima_exercice5.4.html' > Exercice 5.4</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c3p5e3',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}