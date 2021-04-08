prop1 = ['images/serie11.png','images/serie12.png','images/serie13.png','images/serie14.png'];
prop2 = ['Feuille1','Feuille2','Feuille3','Feuille4'];

repon11 = ['=nb(b5:b13)','=nb(b5:b14)','=nb(b5:b15)','=nb(b5:b11)'];
repon12 = ['=nb(d5:d15)','=nb(d5:d11)','=nb(d5:d12)','=nb(d5:d14)'];
repon13 = ['=equiv(38;b:b;0)','=equiv(63;b:b;0)','=equiv(23;b:b;0)','=equiv(10;b:b;0)'];
repon14 = ['=equiv(73;d:d;0)','=equiv(13;d:d;0)','=equiv(47;d:d;0)','=equiv(12;d:d;0)'];

repon1 = [repon11,repon12,repon13,repon14];

repon21 = ['1549','1539','1529','1519'];
repon22 = ['786','781','776','771'];
repon23 = ['22740,17','22738,07','22752,31','22752,31'];

repon2 = [repon21,repon22,repon23];

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
        Vous pouvez passer à l'exercice suivant : <a class='abas' href='don_exercice5.3.html' > Exercice 5.3</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c4p5e2',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}