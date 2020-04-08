prop1 = ['"0" />visuel','"1" />professionnel','"0" />de microblogage','"0" />vidéo','"0" />personnel','"0" />pour mobile'];
prop2 = ['"0" />LinkedIn','"0" />Facebook','"1" />Snappchat','"0" />Twitter','"0" />Tumblr','"0" />YouTube'];
prop3 = ['"0" />LinkedIn','"1" />Facebook','"0" />Snappchat','"0" />Twitter','"0" />Tumblr','"0" />YouTube'];

prop = [prop1,prop2,prop3];

tq = ['q1', 'q2','q3'];
tn = ['"q1"','"q2"','"q3"'];
nb = [0,0,0,0];
nbr = 6;

function init(m)
{
    quest = document.getElementById(tq[m]);
    quest.innerHtml="";
    code = "";
    for (i=0; i<nbr; i++)
    {
        nb[i]=0;
    }
    for (i=0; i<nbr; i++)
    {
        n = Math.floor(Math.random() * nbr);
        while (nb[n]>0)
        {
            n = Math.floor(Math.random() * nbr);
        }
        code = code +'<input name='+tn[m]+' type="radio" value='+prop[m][n]+'<br>';
        nb[n]=1;
    }
    quest.innerHTML = code;
}

function verification(nb,message,refpage,page)
{
    var somme=0;
    var tab = document.querySelectorAll("span");
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
                tab[question-1].innerHTML="<img src='../images/croix_verte.png' width='20' height='20'>";
            }
            else
            {
                tableau_de_questions[i].checked = false;
            }
	    }
        if (mauvais)
        {
            tab[question-1].innerHTML="<img src='../images/croix_rouge.png' width='20' height='20'>";
            init(question-1);
        }
    }
    if (somme==nb)
    {
        tab[nb].innerHTML="<span class='reponse_juste'>"+message+"<a class='abas' href="+refpage+">"+page+"</a> </span>";
    }
    else
    {
        tab[nb].innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
