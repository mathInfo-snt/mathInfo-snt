prop1 = ['"1" />192.75.101','"0" />192','"0" />192.175','"0" />255.255.255','"0" />255','"0" />255.255'];
prop2 = ['"1" />101.7','"0" />192.175','"0" />7','"0" />101','"0" />0.0','"0" />255.255'];
prop3 = ['"1" />192.135.125.11 (255.255.0.0)','"0" />125.11.192.135 (255.255.0.0)','"0" />125.11.192.135 (255.255.255.0)',
        '"0" />125.11.192.135 (255.0.0.0)','"0" />192.135.125.11 (255.255.255.0)','"0" />192.135.125.11 (255.0.0.0)'];
prop4 = ['"1" />254','"0" />65 534','"0" />16 777 214','"0" />256','"0" />65 536','"0" />8'];
prop5 = ['"0" />254','"1" />65 534','"0" />16 777 214','"0" />256','"0" />65 536','"0" />8'];;

prop = [prop1,prop2,prop3,prop4,prop5];
tq = ['q1', 'q2','q3','q4','q5'];
tn = ['"q1"','"q2"','"q3"','"q4"','"q5"'];
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
                +"<a href=int_exercice3.1.html target='_blank'><b class='abas'>Exercice 3.1</b></a>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c2p3q3',1);
            fait();
        }
    }
    else
    {
        afrep.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
