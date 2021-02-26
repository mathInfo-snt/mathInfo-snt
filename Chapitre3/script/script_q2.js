prop1 = ['"1" />1/4','"0" />1/2','"0" />1/3','"0" />1/5','"0" />1/8','"0" />1/16','"0" />3/4','"0" />1/10'];
prop2 = ['"0" />1/4','"1" />1/2','"0" />1/3','"0" />1/5','"0" />1/8','"0" />1/16','"0" />3/4','"0" />1/10'];
prop3 = ['"1" />verte','"0" />bleue','"0" />rouge','"0" />noire','"0" />blanche','"0" />violette','"0" />rose','"0" />marron'];
prop4 = ['"1" />CCD','"0" />DNS','"0" />CMOS','"0" />MOS','"0" />RVB','"0" />RGB','"0" />SOM','"0" />DCC'];
prop = [prop1,prop2,prop3,prop4];
tq = ['q1', 'q2','q3','q4'];
tn = ['"q1"','"q2"','"q3"','"q4"'];
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
                +"<a href=ima_exercice2.1.html target='_blank'><b class='abas'>Exercice 2.1</b></a>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c3p2q2',1);
            fait();
        }
    }
    else
    {
        afrep.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
