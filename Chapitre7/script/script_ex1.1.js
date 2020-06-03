rep1 = ['171%','23%'];
rep2 = ['172%','24%'];

function curseur(cur,vcur)
{
    document.getElementById(vcur).textContent = document.getElementById(cur).value;
}

function verif1(nom_form,cur)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var repo = document.getElementById(cur).value;
    if ( (repo >= 32300) && (repo <= 32500) )
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

function verif2(nom_form,nom_zone,nu)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var repo = document.forms[nom_form].elements[nom_zone].value;
    repo = repo.toLowerCase();
    repo=repo.replace(/ /g,"");
    if (repo==rep1[nu] || repo==rep2[nu])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='ie_exercice1.2.html' > Exercice 1.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c7p1e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}

