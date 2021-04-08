prop1 = ['"1" />=QUARTILE(A1:A100;3)','"0" />=MEDIANE(A1:A100)','"0" />=QUARTILE_3(A1:A100)','"0" />=QUARTILE(3;A1:A100)',
         '"0" />=MOYENNE(A1:A100)','"0" />=QUARTILE3(A1:A100)','"0" />=QUART_3(A1:A100)','"0" />=QUART(3;A1:A100)'];
prop2 = ['"1" />Données','"0" />Fichier','"0" />Affichage','"0" />Format','"0" />Style','"0" />Feuille','"0" />Outils','"0" />Insertion'];
prop3 = ['"1" />=NB()','"0" />=DENOMBRER()','"0" />=CALCUL()','"0" />=NB_VAL()','"0" />=NOMBRE_VAL()','"0" />=NOMBRE()',
         '"0" />=CALCUL_VAL()','"0" />=TOTAL()'];
prop4 = ['"1" />=EQUIV()','"0" />=NB_LIGNE()','"0" />=LIGNE()','"0" />=NO_LIGNE()','"0" />=LIGNE_VAL()',
         '"0" />=NB()','"0" />=LIGNE_IND()','"0" />=INDICE_LIGNE()'];

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
                +"<a href=don_exercice5.1.html target='_blank'><b class='abas'>Exercice 5.1</b></a>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c4p5q5',1);
            fait();
        }
    }
    else
    {
        afrep.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
