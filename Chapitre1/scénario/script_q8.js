prop1 = ['"1" />&lt;h1&gt;','"0" />&lt;title&gt;','"0" />&lt;br&gt;','"0" />&lt;b&gt;'];
prop2 = ['"1" />sauter une ligne;','"0" />rédiger un titre;','"0" />mettre le texte en gras;','"0" />souligner le texte'];
prop3 = ['"1" />&lt;title&gt;','"0" />&lt;onglet&gt;','"0" />&lt;header&gt;','"0" />&lt;head&gt;'];
prop4 = ['"1" />&lt;u&gt;','"0" />&lt;s&gt;','"0" />&lt;underline&gt;','"0" />&lt;st&gt;'];

prop = [prop1,prop2,prop3,prop4];

tq = ['q1', 'q2','q3','q4'];
tn = ['"q1"','"q2"','"q3"',"'q4'"];
tnb = [0,0,0,0,0,0];
nbp = 4;

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
                +"<a href=web_exercice8.1.html target='_blank'><b class='abas'>Exercice 8.1</b></a>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c1p8q8',1);
            fait();
        }
    }
    else
    {
        afrep.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
