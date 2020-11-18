prop1 = ['"0" />4 bits','"0" />64 bits','"0" />1 octet','"1" />4 octets','"0" />6 octets','"0" />6 bits'];
prop2 = ['"0" />4 bits','"1" />128 bits','"0" />1 octet','"0" />4 octets','"0" />6 octets','"0" />6 bits'];
prop3 = ['"1" />4 milliards','"0" />8 milliards','"0" />16 milliards','"0" />32 milliards','"0" />64 milliards','"0" />128 milliards'];
prop4 = ['"0" />1 symbole','"1" />2 symboles','"0" />4 symboles','"0" />8 symboles','"0" />10 symboles','"0" />16 symboles'];
prop5 = ['"0" />1 symbole','"0" />2 symboles','"0" />4 symboles','"0" />8 symboles','"0" />10 symboles','"1" />16 symboles'];
prop6 = ['"0" />Lycée Anna de Noailles','"1" />réseau local','"0" />Language Adress Name','"0" />Low Ad Network',
            '"0" />Local At Net','"0" />Little Adress Name'];
prop7 = ['"0" />la même adresse IP locale','"1" />la même adresse IP publique','"0" />des adresses IP publiques différentes',
            '"0" />deux adresses IP publiques chacun','"0" />des dizaines d\'adresses IP différentes','"1" />pas d\'adresse IP'];
prop = [prop1,prop2,prop3,prop4,prop5,prop6,prop7];
tq = ['q1', 'q2','q3','q4','q5','q6','q7'];
tn = ['"q1"','"q2"','"q3"','"q4"','"q5"','"q6"','"q7"'];
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
                +"<a href=int_exercice2.1.html target='_blank'><b class='abas'>Exercice 2.1</b></a>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c2p2q2',1);
            fait();
        }
    }
    else
    {
        afrep.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
