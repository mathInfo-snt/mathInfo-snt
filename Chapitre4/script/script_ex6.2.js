prop1 = ['fichier1.ods','fichier2.ods','fichier3.ods','fichier4.ods'];

repon11 = ['19224','19268','19247','19472'];
repon12 = ['marcbonnaire','maximebertrand','julientenaud','julielaurent'];
repon13 = ['lucienvepierre','zoédurand','linasarde','jeanferand'];
repon14 = ['07/03/2020,13:56:10','19/02/2020,11:04:24','07/03/2020,13:44:41','07/03/2020,13:46:06'];

repon1 = [repon11,repon12,repon13,repon14];

nb1 = 0;

function init1()
{
    var n = Math.floor(Math.random() * 4);
    af=prop1[n];
    document.write(af);
    nb1=n;
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
        Vous pouvez passer à l'exercice suivant : <a class='abas' href='don_exercice6.3.html' > Exercice 6.3</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c4p6e2',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}