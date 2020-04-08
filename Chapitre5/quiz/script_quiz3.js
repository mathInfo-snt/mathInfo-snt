prop1 = ['"1" />fichiers','"0" />logiciels','"0" />sites','"0" />réseaux sociaux','"0" />adresses IP','"0" />FAI'];
prop2 = ['"1" />les sites que vous avez visités','"0" />une photo de vous sur votre profil','"1" />vos commentaires dans un blog',
        '"0" />votre avis sur un site commercial','"0" />votre CV mis en ligne','"0" />vos messages sur votre mur'];
prop3 = ['"1" />une photo de vous sur le mur d\'un copain','"0" />une photo de vous sur votre profil','"1" />vos commentaires dans un blog',
        '"0" />vos avis sur un site commercial','"0" />votre CV mis en ligne','"0" />vos messages sur votre mur'];

prop = [prop1,prop2,prop3];

tq = ['q1', 'q2','q3'];
tn = ['"q1"','"q2"','"q3"'];
nb = [0,0,0,0];
nbr = 6;

function init(m)
{
    quest = document.getElementById(tq[m]);
    quest.innerHtml="";
    code = "";
    for (i=0; i<nbr; i++)
    {
        nb[i]=0;
    }
    for (i=0; i<nbr; i++)
    {
        n = Math.floor(Math.random() * nbr);
        while (nb[n]>0)
        {
            n = Math.floor(Math.random() * nbr);
        }
        code = code +'<input name='+tn[m]+' type="radio" value='+prop[m][n]+'<br>';
        nb[n]=1;
    }
    quest.innerHTML = code;
}

function verification(nb,message,refpage,page)
{
    var somme=0;
    var tab = document.querySelectorAll("span");
    for (var question=1; question<=nb; question++)
    {
        var tableau_de_questions = document.forms['quizz'].elements['q'+question];
        var mauvais = true;
        for(var i=0; i<tableau_de_questions.length;i++)
	    {
	        if (tableau_de_questions[i].checked && tableau_de_questions[i].value=="1")
	        {
	            somme++;
                mauvais=false;
                tab[question-1].innerHTML="<img src='../images/croix_verte.png' width='20' height='20'>";
            }
            else
            {
                tableau_de_questions[i].checked = false;
            }
	    }
        if (mauvais)
        {
            tab[question-1].innerHTML="<img src='../images/croix_rouge.png' width='20' height='20'>";
            init(question-1);
        }
    }
    if (somme==nb)
    {
        tab[nb].innerHTML="<span class='reponse_juste'>"+message+"<a class='abas' href="+refpage+">"+page+"</a> </span>";
    }
    else
    {
        tab[nb].innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
