prop1 = ['"1" />7° 30\' 45" Sud','"0" />73° 75\' Nord','"0" />7° 18\' 45" Sud','"0" />7° 3\' 45" Nord',
        '"0" />73° 0\' 45" Nord','"0" /> 73° 0\' 75" Sud','"0" />73° 30\' 75" Nord','"0" />73° 3\' 75" Sud'];
prop2 = ['"1" />16° 28\' 15" Est','"0" />16° 28\' 25" Est' ,'"0" />16° 28\' 25" Ouest','"0" />16° 28\' 15" Ouest',
        '"0" />162° 8\' 15" Est','"0" />162° 8\' 25" Est','"0" />162° 8\' 15" Ouest','"0" />162° 8\' 15" Ouest'];
prop3 = ['"1" />14h 13m 19s','"0" />13h 14m 19s','"0" />19h 13m 14s','"0" />19h 14m 13s','"0" />13h 14m 19s',
            '"0" />13h 19m 14s','"0" />1h 31m 19s','"0" />1h 19m 31s'];

prop = [prop1,prop2,prop3];

tq = ['q1', 'q2','q3'];
tn = ['"q1"','"q2"','"q3"'];
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
                +"<a href=gl_exercice4.1.html target='_blank'><b class='abas'>Exercice 4.1</b></a>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c6p4q4',1);
            fait();
        }
    }
    else
    {
        afrep.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
