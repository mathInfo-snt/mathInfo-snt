prop1 = ['"0" />P1','"0" />P2','"1" />P3','"0" />P4','"0" />M1','"0" />M2','"0" />M3','"0" />M4'];
prop2 = ['"1" />0','"0" />1','"0" />2','"0" />7','"0" />8','"0" />16','"0" />255','"0" />256'];
prop3 = ['"0" />20%','"0" />25%','"0" />30%','"0" />50%','"0" />70%','"1" />75%','"0" />80%','"0" />100%'];
prop4 = ['"0" />10%','"0" />20%','"0" />30%','"1" />40%','"0" />50%','"0" />60%','"0" />70%','"0" />80%'];
prop5 = ['"1" />P1','"0" />P2','"0" />P3','"0" />P4','"0" />M1','"0" />M2','"0" />M3','"0" />M4'];
prop6 = ['"0" />P1','"1" />P2','"0" />P3','"0" />P4','"0" />M1','"0" />M2','"0" />M3','"0" />M4'];

prop = [prop1,prop2,prop3,prop4,prop5,prop6];
tq = ['q1', 'q2','q3','q4','q5','q6'];
tn = ['"q1"','"q2"','"q3"','"q4"','"q5"','"q6"'];
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
                +"<a href=ima_exercice6.1.html target='_blank'><b class='abas'>Exercice 6.1</b></a>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c3p6q6',1);
            fait();
        }
    }
    else
    {
        afrep.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
