prop1 = ['"1" />verte','"0" />bleue','"0" />rouge','"0" />noire','"0" />jaune','"0" />grise','"0" />blanche','"0" />violette'];
prop2 = ['"0" />RVB(255,0,0)','"1" />RVB(0,0,255)','"0" />RVB(0,255,0)','"0" />RVB(255,0,255)',
         '"0" />RVB(255,255,255)','"1" />RVB(0,0,0)','"0" />RVB(255,255,0)','"0" />RVB(0,255,255)'];
prop3 = ['"0" />verte','"1" />bleue','"0" />rouge','"0" />noire','"0" />jaune','"0" />grise','"0" />blanche','"0" />violette'];
prop4 = ['"0" />verte','"0" />bleue','"0" />rouge','"0" />noire','"0" />jaune','"1" />grise','"0" />blanche','"0" />violette'];
prop5 = ['"0" />1 bit','"0" />2 bits','"0" />3 bits','"0" />4 bits','"1" />8 bits','"0" />16 bits','"0" />64 bits','"0" />255 bits'];
prop6 = ['"0" />8','"1" />255','"0" />250','"0" />256','"0" />64','"1" />128','"0" />ff','"0" />16'];
prop7 = ['"0" />verte','"0" />bleue','"1" />rouge','"0" />noire','"0" />jaune','"0" />grise','"0" />blanche','"0" />violette'];
prop8 = ['"1" />verte','"0" />bleue','"0" />rouge','"0" />noire','"0" />jaune','"0" />grise','"0" />blanche','"0" />violette'];
prop = [prop1,prop2,prop3,prop4,prop5,prop6,prop7,prop8];
tq = ['q1', 'q2','q3','q4','q5', 'q6','q7','q8'];
tn = ['"q1"','"q2"','"q3"','"q4"','"q5"','"q6"','"q7"','"q8"'];
tnb = [0,0,0,0,0,0,0,0];
nbp = 8;

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
                +"<a href=ima_exercice3.1.html target='_blank'><b class='abas'>Exercice 3.1</b></a>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c3p3q3',1);
            fait();
        }
    }
    else
    {
        afrep.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
