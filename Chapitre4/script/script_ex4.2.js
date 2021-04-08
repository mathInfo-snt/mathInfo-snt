var prop1 = [   'bezonvaux,55,0',
                'cumières-le-mort-homme,55,0',
                'fleury-devant-douaumont,55,0',
                'haumont-près-samogneux,55,0',
                'louvemont-côte-du-poivre,55,0',
                'rochefourchat,26,1',
                'leménil-mitry,54,3',
				'majastres,04,4',
                'caunette-sur-lauquet,11,4'];


var prop2 = ['100','200','300','400','600','50'];
var prop3 = ['10000 et 11000','12000 et 15000','15000 et 20000','1000 et 2000','900 et 1000','20000 et 30000'];
var prop4 = ["de l'Ardèche","de la Savoie","du Jura","de l'Isère","de la Creuse","de la Manche"];
var repon2 = ['53','42','28','25','12','40'];
var repon3 = ['113','176','173','4619','855','203'];
var repon4 = ['46','21','101','35','75','60'];
var prop = [prop2,prop3,prop4];
var rep = [repon2,repon3,repon4];

nb = [0,0,0];

function init1(ind)
{
    var n = Math.floor(Math.random() * 6);
    af=prop[ind][n];
    document.write(af);
    nb[ind]=n;
}

function verif1(nom_form)
{
    var tab = document.forms[nom_form].querySelectorAll(".caseP");
    var reponse="";
    var prop = "";
    var sp1 = document.getElementById("ic1");
    var sp2 = document.getElementById("m1");
    for (var i=0; i<9; i++)
    {
        reponse=reponse+tab[i].value;
        prop = prop + prop1[i];
    }
    reponse=reponse.replace(/ /g,"");
    reponse=reponse.toLowerCase();
    if (reponse==prop)
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

function verif2(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    if (repon==rep[ind][nb[ind]])
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

function verif3(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    if (repon==repon[ind][nb[ind]])
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
        Vous pouvez passer à l'exercice suivant : <a class='abas' href='don_exercice4.3.html' > Exercice 4.3</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c4p4e2',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}