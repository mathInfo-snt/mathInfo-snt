nbquest=2;
prop1 = ['"0" />1990','"0" />1995','"0" />2000','"0" />2003','"0" />2004','"0" />2006','"1" />2009','"0" />2010','"0" />2011','"0" />2018'];
prop2 = ['"0" />1990','"0" />1995','"0" />2000','"0" />2003','"0" />2004','"1" />2006','"0" />2009','"0" />2010','"0" />2011','"0" />2018'];
prop3 = ['"0" />1990','"0" />1995','"0" />2000','"0" />2003','"0" />2004','"0" />2006','"0" />2009','"1" />2010','"0" />2011','"0" />2018'];

prop = [prop1,prop2,prop3];

tq = ['q1', 'q2','q3'];
tn = ['"q1"','"q2"','"q3"'];
nb = [0,0,0,0,0,0,0,0,0,0];

function init(m)
{
    quest = document.getElementById(tq[m]);
    quest.innerHtml="";
    code = "";
    for (i=0; i<10; i++)
    {
        nb[i]=0;
    }
    for (i=0; i<10; i++)
    {
        n = Math.floor(Math.random() * 10);
        while (nb[n]>0)
        {
            n = Math.floor(Math.random() * 10);
        }
        code = code +'<input name='+tn[m]+' type="radio" value='+prop[m][n]+'<br>';
        nb[n]=1;
    }
    quest.innerHTML = code;
}

function verification(nb,message,refpage,page)  // Fonction pour vérifier un quizz
{
    var somme=0;  // Variable pour compter le nombre de bonnes réponses
    var tab = document.querySelectorAll("span");  // Tableau qui contient les emplacements des icones croix rouges et vertes
    for (var question=1; question<=nb; question++)  // Boucle pour chaque questions du quizz
    {
        var tableau_de_questions = document.forms['quizz'].elements['q'+question];  // tableau contenant les réponses possibles
        var mauvais = true;  // Variable booléenne qui vaut true si la réponse est incorrecte
        for(var i=0; i<tableau_de_questions.length;i++)  // Boucle pour chaque réponses possibles à la question
	    {
	        if (tableau_de_questions[i].checked && tableau_de_questions[i].value=="1")  // Si c'est la bonne réponse
	        {
	            somme++;  /* On augmente la somme de 1 */
                mauvais=false;
                tab[question-1].innerHTML="<img src='../.images/.croix_verte.png' width='20' height='20'>";  // On affiche la croix verte
            }
            else
            {
                tableau_de_questions[i].checked = false;
            }
	    }
        if (mauvais)  // Si c'est une mauvaise réponse
        {
            tab[question-1].innerHTML="<img src='../.images/.croix_rouge.png' width='20' height='20'>";  // On affiche la croix rouge
            init(question-1);
        }
    }
    if (somme==nb)  // Si toutes les réponses sont correctes
    {
        tab[nb].innerHTML="<span class='reponse_juste'>"+message+"<a class='abas' href="+refpage+">"+page+"</a> </span>";
    }
    else
    {
        tab[nb].innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
        //initi();
    }
}
