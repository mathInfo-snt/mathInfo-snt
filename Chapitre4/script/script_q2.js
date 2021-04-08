prop1 = ['"1" />FN','"0" />PHOTO','"0" />BDAY','"0" />TEL','"0" />EMAIL','"0" />1TEL;HOME','"0" />TEL;CEL','"0" />ADR'];
prop2 = ['"1" />19750519','"0" />19051975','"0" />1975/05/19','"0" />19/05/1975','"0" />19751905','"0" />1975-19-05',
            '"0" />19-05-1975','"0" />1975/19/05'];
prop3 = ['"1" />3','"0" />1','"0" />2','"0" />4','"0" />5','"0" />6','"0" />7','"0" />8'];
prop4 = ['"1" />064-565-1724','"0" />0645651724','"0" />06-45-65-17-24','"0" />0645-6517-24',
         '"0" />06-4565-1724','"0" />064565-1724','"0" />064-465-1724','"0" />0645-651-724'];
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
                +"<a href=don_exercice2.1.html target='_blank'><b class='abas'>Exercice 2.1</b></a>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c4p2q2',1);
            fait();
        }
    }
    else
    {
        afrep.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
