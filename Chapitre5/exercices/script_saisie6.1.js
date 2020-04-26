var prop = ['d\'appeler le numéro vert 3020 "non au harcèlement".',
            'd\'en parler à ses parents.',
            'd\'en parler à des professeurs.',
            'd\'en parler à un camarade de classe.',
            'd\'en parler à personne.',
            'de résoudre seul le problème.',
            'de continuer à subir cette situation.'];

var rep = [1,1,1,1,0,0,0];
var tabrep = [0,0,0,0,0,0,0];

var nbq = 7;
var nb=[0,0,0,0,0,0,0,0];

function init()
{
    quest = document.getElementById('qu');
    quest.innerHtml="";
    code = "";
    for (i=0; i<nbq; i++)
    {
        nb[i]=0;
    }
    for (i=0; i<nbq; i++)
    {
        n = Math.floor(Math.random() * nbq);
        tabrep[i] = rep[n];
        while (nb[n]>0)
        {
            n = Math.floor(Math.random() * nbq);
            tabrep[i] = rep[n];
        }
        code = code +'<div><input type="checkbox" class="case1"><label class="lab2">'+prop[n]+'</label></div><br>';
        nb[n]=1;
    }
    quest.innerHTML = code;
}


function verif(n)
{
    var tab = document.querySelectorAll("input");
    var somme=0;
    for (var i=0; i<n; i++)
    {
        if (tab[i].checked && tabrep[i]==1)
        {
            somme++;
        }
        if (tab[i].checked==false && tabrep[i]==0)
        {
            somme++;
        }

    }
    var m=document.querySelector(".reponse");
    if (somme == n)
    {
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='SNT_RS_exercice6.2.html' > Exercice 6.2</a></span>";
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ! Recommencez !</span>";
        init();
    }
}