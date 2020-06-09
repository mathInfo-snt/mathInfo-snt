var prop = ['L\'horloge fait partie du processeur.',
            'L\'accumulateur est un registre de l\'unité arithmétique et logique.',
            'La mémoire vive fait partie du processeur.',
            'Le disque dur interne fait partie de la mémoire vive.',
            'La mémoire vive est considérée comme un périphérique.',
            'Les calculs dans l\'unité arithmétqiue et logique se font en binaire.',
            'L\'architecture de Von Neuman est obsolète.'];

var rep = [1,1,0,0,0,1,0];
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='ie_exercice2.2.html' > Exercice 2.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c7p2e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ! Recommencez !</span>";
        init();
    }
}