prop1 = ['"1" />1975','"0" />1960','"0" />1969','"0" />1950','"0" />1980','"0" />1989','"0" />1990','"0" />2000'];
prop2 = ['"1" />CCD','"0" />DCC','"0" />DNS','"0" />CDC','"0" />RVB','"0" />RGB','"0" />HEX','"0" />BRV'];
prop3 = ['"1" />1826','"0" />1800','"0" />1875','"0" />1900','"0" />1920','"0" />1950','"0" />1969','"0" />1975'];
prop4 = ['"1" />10 000 pixels','"0" />2 000 000 pixels','"0" />1 000 000 pixels','"0" />100 000 pixels',
         '"0" />20 000 pixels','"0" />200 000 pixels','"0" />1 000 pixels','"0" />2 000 pixels'];
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
                +"<a href=ima_exercice1.1.html target='_blank'><b class='abas'>Exercice 1.1</b></a>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c3p1q1',1);
            fait();
        }
    }
    else
    {
        afrep.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
