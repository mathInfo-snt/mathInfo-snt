var prop = ['L\'identité numérique est identique à votre identité dans la "vraie" vie.',
            'Vous êtes entièrement responsable de votre identité numérique.',
            'Grâce à Internet il est beaucoup plus facile de réaliser le portrait social de quelqu\'un.',
            'Des entreprises sont capables de mettre en relation les activités que vous avez sur différents sites Internet.',
            'Votre identité numérique peut aussi être construite à partir des actions d\'autres personnes.',
            'Il est toujours possible de corriger votre image sur Internet en effaçant des commentaires négatifs.',
            'Si vous n\'en parlez pas sur Facebook, personne ne saura que vous étiez à une soirée samedi dernier.'];

var rep = [0,0,1,1,1,0,0];
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='SNT_RS_exercice4.2.html' > Exercice 4.2</a></span>";
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ! Recommencez !</span>";
        init();
    }
}