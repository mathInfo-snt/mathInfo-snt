prop1 = ['images/serie1.png','images/serie2.png','images/serie3.png','images/serie4.png'];
prop2 = ['Feuille1','Feuille2','Feuille3','Feuille4'];

repon11 = ['=moyenne(b5:b13)','=moyenne(b6:b14)','=moyenne(b6:b12)','=moyenne(b5:b11)'];
repon12 = ['=mediane(b5:b13)','=mediane(b6:b14)','=mediane(b6:b12)','=mediane(b5:b11)'];
repon13 = ['=quartile(b5:b13;1)','=quartile(b6:b14;1)','=quartile(b6:b12;1)','=quartile(b5:b11;1)'];
repon14 = ['=quartile(b5:b13;3)','=quartile(b6:b14;3)','=quartile(b6:b12;3)','=quartile(b5:b11;3)'];
repon15 = ['=max(b5:b13)','=max(b6:b14)','=max(b6:b12)','=max(b5:b11)'];
repon16 = ['=min(b5:b13)','=min(b6:b14)','=min(b6:b12)','=min(b5:b11)'];

repon1 = [repon11,repon12,repon13,repon14,repon15,repon16];

repon21 = ['24817,12','24808,96','24846,06','24852,28'];
repon22 = ['22740,17','22738,07','22752,31','22752,31'];
repon23 = ['19058,77','19061,07','19069,41','19067,69'];
repon24 = ['29263,86','29247,76','29306,89','29323,59'];
repon25 = ['47999,03','49093,47','51093,47','48063,47'];
repon26 = ['13015,29','13005,26','13010,22','13009,19'];

repon2 = [repon21,repon22,repon23,repon24,repon25,repon26];

nb1 = 0;
nb2 = 0;

function init1()
{
    var n = Math.floor(Math.random() * 4);
    afim = document.getElementById("ima1");
    var imag = "<img src='"+prop1[n]+"' alt='Feuille de calcul' title='Feuille de calcul' />";
    afim.innerHTML=imag;
    nb1=n;
}

function init2()
{
    var n = Math.floor(Math.random() * 4);
    af=prop2[n];
    document.write(af);
    nb2=n;
}

function verif1(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    if (repon==repon1[ind][nb1])
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

function verif2(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    if (repon==repon2[ind][nb2])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! \
        Vous pouvez passer à l'exercice suivant : <a class='abas' href='don_exercice5.2.html' > Exercice 5.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c4p5e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}