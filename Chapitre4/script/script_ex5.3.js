prop1 = ['images/serie21.png','images/serie22.png','images/serie23.png','images/serie24.png'];
prop2 = ['Feuille1','Feuille2','Feuille3','Feuille4'];

repon11 = ['=moyenne.si(c6:c18;"=m";b6:b18)','=moyenne.si(c6:c16;"=m";b6:b16)',
            '=moyenne.si(c6:c17;"=m";b6:b17)','=moyenne.si(c6:c15;"=m";b6:b15)'];
repon12 = ['=moyenne.si(c6:c18;"=a";b6:b18)','=moyenne.si(c6:c16;"=a";b6:b16)',
            '=moyenne.si(c6:c17;"=a";b6:b17)','=moyenne.si(c6:c15;"=a";b6:b15)'];

repon1 = [repon11,repon12];

repon21 = ['25633,01','25690,07','25649,16','25586,88'];
repon22 = ['23979,45','24028,39','24073,28','24097,73'];

repon2 = [repon21,repon22];

repons = [repon11,repon12,repon22,repon21];

nb = [0,0];

function init1()
{
    var n = Math.floor(Math.random() * 4);
    afim = document.getElementById("ima1");
    var imag = "<img src='"+prop1[n]+"' alt='Feuille de calcul' title='Feuille de calcul' />";
    afim.innerHTML=imag;
    nb[0]=n;
}

function init2()
{
    var n = Math.floor(Math.random() * 4);
    af=prop2[n];
    document.write(af);
    nb[1]=n;
}

function verif1(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    j = Math.floor(ind/2);
    if (repon == repons[ind][nb[j]])
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
        Vous pouvez passer à l'exercice suivant : <a class='abas' href='don_exercice5.4.html' > Exercice 5.4</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c4p5e3',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}