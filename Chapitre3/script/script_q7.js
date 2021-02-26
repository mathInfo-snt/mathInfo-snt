prop1 = ['"1" />à droite','"0" />à gauche','"0" />au milieu','"0" />en haut','"0" />en bas','"0" />derrière','"0" />nulle part','"0" />je ne sais pas'];
prop2 = ['"1" />256','"0" />8','"0" />16','"0" />32','"0" />100','"0" />255','"0" />512','"0" />64'];
prop3 = ['"1" />97','"0" />32','"0" />48','"0" />65','"0" />100','"0" />165','"0" />255','"0" />70'];
prop4 = ['"0" />97','"0" />32','"0" />48','"0" />65','"1" />100','"0" />165','"0" />255','"0" />70'];
prop5 = ['"0" />97','"0" />32','"0" />48','"0" />65','"0" />100','"0" />165','"0" />255','"1" />70'];
prop6 = ['"0" />a','"0" />b','"0" />f','"0" />g','"0" />l','"0" />m','"1" />n','"0" />o'];

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
                +"<a href=ima_exercice7.1.html target='_blank'><b class='abas'>Exercice 7.1</b></a>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c3p7q7',1);
            fait();
        }
    }
    else
    {
        afrep.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
