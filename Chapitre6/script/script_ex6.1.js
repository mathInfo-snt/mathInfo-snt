rep = [1000,14,3.3];
pre = [50,1,0.1];

function curseur(cur,vcur)
{
    document.getElementById(vcur).textContent = document.getElementById(cur).value;
}

function verif1(nom_form,cur,nu)
{
    sp = document.forms[nom_form].querySelectorAll("span");
    repo = document.getElementById(cur).value;
    if ( (repo >= rep[nu]-pre[nu]) && (repo <= rep[nu]+pre[nu]) )
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
    somme = 0;
    tab = document.querySelectorAll(".spanquiz");
    for (i=0; i<no; i++)
    {
        if (tab[i].innerHTML == '<img src="images/croix_verte.png" width="20" height="20">')
        {
            somme++;
        }
    }
    m = document.querySelector(".reponse");
    if (somme == no)
    {
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='gl_exercice6.2.html' > Exercice 6.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c6p6e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}