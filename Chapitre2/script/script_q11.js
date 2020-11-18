prop1 = ['"1" />câble à paires torsadées non blindées (UTP)','"0" />câble à paires torsadées blindées (STP)',
        '"0" />câble coaxial','"0" />câble à fibre optique','"0" />câble sous-marins','"0" />câble à paires non torsadées'];
prop2 = ['"0" />câble à paires torsadées non blindées (UTP)','"0" />câble à paires torsadées blindées (STP)',
        '"0" />câble coaxial','"1" />câble à fibre optique','"0" />câble en plastique','"0" />câble à paires non torsadées'];
prop3 = ['"1" />RJ45','"0" />ROUTEUR','"0" />HUB','"0" />SWITCH','"0" />NAVIGATEUR','"0" />SERVEUR'];
prop4 = ['"1" />aluminium','"0" />cuivre','"0" />plastique','"0" />verre','"0" />or','"0" />acier'];
prop5 = ['"1" />8','"0" />1','"0" />2','"0" />3','"0" />4','"0" />6'];
prop6 = ['"0" />aluminium','"1" />cuivre','"0" />plastique','"0" />verre','"0" />or','"0" />acier'];
prop7 = ['"1" />marron','"0" />bleue','"0" />orange','"0" />verte','"0" />blanche','"0" />noire'];

prop = [prop1,prop2,prop3,prop4,prop5,prop6,prop7];
tq = ['q1', 'q2','q3','q4', 'q5','q6','q7'];
tn = ['"q1"','"q2"','"q3"','"q4"','"q5"','"q6"','"q7"'];
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
                +"<a href=int_exercice11.1.html target='_blank'><b class='abas'>Exercice 11.1</b></a>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c2p11q11',1);
            fait();
        }
    }
    else
    {
        afrep.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
