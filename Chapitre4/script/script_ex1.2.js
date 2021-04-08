var prop = ['Aspirateurs.csv','lave-linge.csv','Ordinateurs.csv'];
var rep1 = ['capacitedusac','classeenergetique','tailledelecran'];
var rep2 = ['27.99','499.99','159.99'];
var rep3 = ['rowenta','electrolux','asus'];

var nb = 0;

function init1()
{
    var n = Math.floor(Math.random() * 3);
    document.write(prop[n]);
    nb=n;
}

var rep = [rep1,rep2,rep3];

function verif1(nom_form,num)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    repon = repon.replace(/é/g,"e");
    repon = repon.replace(/è/g,"e");
	repon = repon.replace(/'/g,"");
    if (repon==rep[num][nb])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='don_exercice1.3.html' > Exercice 1.3</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c4p1e2',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
