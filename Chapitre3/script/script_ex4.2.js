var prop = ['Tom','Max'];
var nb = 0;

function init1(ind)
{
    var n = Math.floor(Math.random() * 2);
    im=prop[n];
    document.write(im);
    nb=n;
}

function verif()
{
    var rep = ['pontfalaisecabanemoulincascade','moulinpontcascadecabanefalaise'];
    var etape1 = document.getElementById('s1').value;
    var etape2 = document.getElementById('s2').value;
    var etape3 = document.getElementById('s3').value;
    var etape4 = document.getElementById('s4').value;
    var etape5 = document.getElementById('s5').value;
    var propo = etape1+etape2+etape3+etape4+etape5;
    var m=document.querySelector(".reponse");
    if (rep[nb]==propo)
    {
        m.innerHTML="<span class='reponse_juste'> Bonne réponse ! Vous pouvez passer à l'exercice suivant : "
        +"<a class='abas' href='ima_exercice4.3.html' > Exercice 4.3</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c3p4e2',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Mauvaise réponse ! Recommencez !</span>";
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
        +"<a class='abas' href='ima_exercice4.2.html' > Exercice 4.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c3p4e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}