var tab = ['debut','presencedetectee','ouvrirlaporte','fermerlaporte'];

function verific(num)
{
    var val = document.getElementById(num).value;
    val = val.toLowerCase();
    val = val.replace(/ /g,"");
    val = val.replace(/é/g,"e");
    var spim1 = document.getElementById("icr1");
    var spim2 = document.getElementById("icr2");
    if(val!=tab[num] )
    {
        document.getElementById(num).value='';
        spim1.innerHTML="<img src='images/croix_rouge.png' width='20' height='20'> <b>ERREUR DE SAISIE ! (Revoir exemple Page 3)</b>"; 
        spim2.innerHTML="<img src='images/croix_rouge.png' width='20' height='20'> <b>ERREUR DE SAISIE ! (Revoir exemple Page 3)</b>"; 
    }
    else
    {
        spim1.innerHTML="<img src='images/vide.png' width='20' height='20'>";
        spim2.innerHTML="<img src='images/vide.png' width='20' height='20'>";
    }
}

function verif(nom_form)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var rep=true;
    for (i=0;i<4;i++)
    {
        val = document.getElementById(i).value;
        if(val=="")
        {
            rep=false;
        }
    }
    if(rep)
    {
        sp[0].innerHTML="<img src='images/croix_verte.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_juste'>  Algorigramme complet !</span>";
    }
    else
    {
        sp[0].innerHTML="<img src='images/croix_rouge.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_fausse'>  Algorigramme incomplet !</span>";
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='ie_exercice3.2.html' > Exercice 3.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c7p3e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}