prop1 = ['"1" />un angle','"0" />une distance','"0" />un cercle','"0" />un demi-cercle',
            '"0" />un segment','"0" />un triangle','"0" />une sphère','"0" />une droite'];
prop2 = ['"0" />un angle','"0" />une distance','"1" />un cercle','"0" />un demi-cercle',
            '"0" />un segment','"0" />un triangle','"0" />une sphère','"0" />une droite'];
prop3 = ['"0" />un angle','"0" />une distance','"0" />un cercle','"1" />un demi-cercle',
            '"0" />un segment','"0" />un triangle','"0" />une sphère','"0" />une droite'];
prop4 = ['"1" />- 15,25','"0" />+ 15,25','"0" />- 15,15','"0" />+ 15,15',
            '"0" />- 15,5','"0" />+ 15,5','"0" />- 15,75','"0" />+ 15,75'];
prop5 = ['"1" />+ 30,5','"0" />- 30,5','"0" />- 30,30','"0" />+ 30,30',
            '"0" />- 30,25','"0" />+ 30,25','"0" />- 30,75','"0" />+ 30,75'];
prop6 = ['"1" />- 45,75','"0" />+ 45,75','"0" />- 45,45','"0" />+ 45,45',
            '"0" />- 45,25','"0" />+ 45,25','"0" />- 45,5','"0" />+ 45,5'];
prop7 = ['"1" />+ 6,1','"0" />- 6,1','"0" />- 6,6','"0" />+ 6,6',
            '"0" />- 6,3','"0" />+ 6,3','"0" />- 6,1','"0" />+ 6,2'];

prop = [prop1,prop2,prop3,prop4,prop5,prop6,prop7];
tq = ['q1', 'q2','q3','q4', 'q5','q6','q7'];
tn = ['"q1"','"q2"','"q3"','"q4"','"q5"','"q6"','"q7"'];
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
                +"<a href=ima_exercice5.1.html target='_blank'><b class='abas'>Exercice 5.1</b></a>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c3p5q5',1);
            fait();
        }
    }
    else
    {
        afrep.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
