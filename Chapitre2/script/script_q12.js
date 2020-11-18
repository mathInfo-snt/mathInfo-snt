prop1 = ['"1" />Manchester','"0" />Binaire','"0" />Hexadécimal','"0" />Ethernet','"0" />Internet','"0" />HTML'];
prop2 = ['"1" />1 erreur','"0" />2 erreurs','"0" />3 erreurs','"0" />4 erreurs','"0" />6 erreurs','"0" />8 erreurs'];
prop3 = ['"1" />un front ascendant','"0" />un front descendant','"0" />une tension de -5V','"0" />une tension de +5V',
        '"0" />une tension de 0V','"0" />une tension de +1V'];
prop4 = ['"1" />la redondance','"0" />la parité','"0" />Manchester','"0" />du binaire','"0" />de la clé','"0" />ethernet'];

prop = [prop1,prop2,prop3,prop4];
tq = ['q1', 'q2','q3','q4'];
tn = ['"q1"','"q2"','"q3"','"q4"'];
tnb = [0,0,0,0,0,0];
nbp = 6;

function init(m)
{
    quest = document.getElementById(tq[m]);
    quest.innerHtml="";
    code = "";
    for (i=0; i<nbp; i++)
    {
        tnb[i]=0;
    }
    for (i=0; i<nbp; i++)
    {
        n = Math.floor(Math.random() * nbp);
        while (tnb[n]>0)
        {
            n = Math.floor(Math.random() * nbp);
        }
        code = code +'<input name='+tn[m]+' type="radio" value='+prop[m][n]+'<br>';
        tnb[n]=1;
    }
    quest.innerHTML = code;
}

function verification(nb)
{
    var somme=0;
    var tab = document.getElementsByName("sq");
    var afrep = document.getElementById("message");
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
                tab[question-1].innerHTML="<img src='images/croix_verte.png' width='20' height='20'>";
            }
            else
            {
                tableau_de_questions[i].checked = false;
            }
	    }
        if (mauvais)
        {
            tab[question-1].innerHTML="<img src='images/croix_rouge.png' width='20' height='20'>";
            init(question-1);
        }
    }
    if (somme==nb)
    {
        afrep.innerHTML="<span class='reponse_juste'>"+"Toutes les réponses sont correctes ! Vous pouvez passer à la suite : " 
                +"<a href=int_exercice12.1.html target='_blank'><b class='abas'>Exercice 12.1</b></a>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c2p12q12',1);
            fait();
        }
    }
    else
    {
        afrep.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
