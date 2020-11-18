var prop1 = ["monsite",".","gouv","fr"];
var prop2 = ["jean-petit",".","asso","fr"];
var prop3 = ["impots",".","gouv","fr"];
var prop4 = ["","","botanic","com"];
var prop5 = ["","","wikipedia","org"];
var prop6 = ["","","amazon","com"];

var tab = [prop1, prop2, prop3, prop4, prop5, prop6];
var nb = [0,0];

function init1()
{
    var n = Math.floor(Math.random() * 6);
    ndd=tab[n][0]+tab[n][1]+tab[n][2]+'.'+tab[n][3];
    document.write(ndd);
    nb[0]=n;
}

function init2()
{
    var n = Math.floor(Math.random() * 6);
    while (n == nb[0])
    {
        n = Math.floor(Math.random() * 6);
    }
    ndd=tab[n][0]+tab[n][1]+tab[n][2]+'.'+tab[n][3];
    document.write(ndd);
    nb[1]=n;
}

function verif(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    var m1 = Math.floor(ind/4);
    var m2 = ind%4;
    if (repon == tab[nb[m1]][m2])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à la page suivante <a class='abas' href='web_exercice3.2.html' > Exercice 3.2 </a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c1p3e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}

