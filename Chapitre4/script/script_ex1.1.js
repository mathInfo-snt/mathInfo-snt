var prop = ['images/csv1.png','images/csv2.png','images/csv3.png'];
var rep1 = [['nom','prénom','taille','âge'],['nom','prénom','ville','email'],['nom','taille','poids','longévité']];
var rep2 = [['bazin','baud','guerin','leray'],['bazin','baud','guerin','leray'],['brochet','perche','truite','corégone']];
var rep3 = [['1m89','1m75','1m64','1m72'],['paris','lyon','amiens','nancy'],['2a10kg','200a500g','1a12kg','0.5a2kg']];


var rep = [rep1,rep2,rep3];

var nb = 0;

function init1()
{
    var n = Math.floor(Math.random() * 3);
    afim = document.getElementById("ima1");
    var imag = "<img src='"+prop[n]+"' alt='Pixel' title='Pixel' />";
    afim.innerHTML=imag;
    nb=n;
}

function verif1(nom_form,num)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    repon = repon.replace(/à/g,"a");
    if (repon==rep[num][nb][0] || repon==rep[num][nb][1] || repon==rep[num][nb][2] || repon==rep[num][nb][3])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='don_exercice1.2.html' > Exercice 1.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c4p1e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
