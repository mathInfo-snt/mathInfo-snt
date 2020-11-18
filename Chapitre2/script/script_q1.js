prop1 = ['"0" />1950','"0" />1960','"1" />1969','"0" />1970','"0" />1971','"0" />1973','"0" />1974','"0" />1983'];
prop2 = ['"0" />FTP','"0" />URL','"0" />LAN','"0" />HTML','"0" />CSS','"0" />DNS','"1" />TCP/IP','"0" />HTTP'];
prop3 = ['"0" />un câble informatique','"0" />un réseau informatique','"1" />une machine informatique',
         '"0" />une route informatique','"0" />un logiciel informatique','"0" />un navigateur',
         '"0" />un protocole informatique','"0" />un code informatique'];
prop4 = ['"0" />TCP','"0" />URL','"0" />POSTALE','"1" />IP','"0" />FTP','"0" />HTTP','"0" />LAN','"0" />DNS'];
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
                +"<a href=int_exercice1.1.html target='_blank'><b class='abas'>Exercice 1.1</b></a>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c2p1q1',1);
            fait();
        }
    }
    else
    {
        afrep.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
