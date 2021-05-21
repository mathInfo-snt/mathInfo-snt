var prop = ["( 30.03 , -89.88 )","( -23.55 , -46.63 )","( -29.86 , 31.02 )","( 51.51 , -0.09 )",
            "( 30.03 , 31.24 )","( 59.93 , 30.33 )","( 23.79 , 90.42 )","( 31.23 , 121.47 )"];
var rep1 = ['lanouvelleorleans','saopaulo','durban','londres','lecaire','saintpetersbourg',
            'dhaka','shanghai'];

var nb = [0,0,0];

nbp = 8;

function init1()
{
    var n = Math.floor(Math.random() * nbp);
    sol=prop[n];
    document.write(sol);
    nb[0]=n;
}

function init2()
{
    var n = Math.floor(Math.random() * nbp);
    while (n==nb[0])
    {
        n = Math.floor(Math.random() * nbp);
    }
    sol=prop[n];
    document.write(sol);
    nb[1]=n;
}

function init3()
{
    var n = Math.floor(Math.random() * nbp);
    while (n==nb[0] || n==nb[1])
    {
        n = Math.floor(Math.random() * nbp);
    }
    sol=prop[n];
    document.write(sol);
    nb[2]=n;
}

function verif1(nom_form,nom_zone,nu)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var repo = document.forms[nom_form].elements[nom_zone].value;
    repo = repo.toLowerCase();
    repo=repo.replace(/ /g,"");
    repo=repo.replace(/-/g,"");
    repo=repo.replace(/é/g,"e");
    repo=repo.replace(/ï/g,"i");
    repo=repo.replace(/î/g,"i");
    if (repo==rep1[nb[nu]])
    {
        sp[0].innerHTML="<img src='images/croix_verte.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_juste'>  Bonne réponse !</span>";
    }
    else
    {
        sp[0].innerHTML="<img src='images/croix_rouge.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='gl_exercice2.2.html' > Exercice 2.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c6p2e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}