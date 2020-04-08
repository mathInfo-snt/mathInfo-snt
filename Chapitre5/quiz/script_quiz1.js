nbquest=2;
prop1 = ['"0" />1990','"0" />1995','"0" />2000','"0" />2003','"0" />2004','"0" />2006','"1" />2009','"0" />2010','"0" />2011','"0" />2018'];
prop2 = ['"0" />1990','"0" />1995','"0" />2000','"0" />2003','"0" />2004','"1" />2006','"0" />2009','"0" />2010','"0" />2011','"0" />2018'];
prop3 = ['"0" />1990','"0" />1995','"0" />2000','"0" />2003','"0" />2004','"0" />2006','"0" />2009','"1" />2010','"0" />2011','"0" />2018'];
prop4 = ['"0" />Facebook','"0" />Myspace','"0" />LinkedIn','"0" />Twitter','"0" />Instagram','"0" />Snapchat','"0" />WhatsApp',
        '"1" />Classmates','"0" />Tumblr','"0" />YoutTube'];

prop = [prop1,prop2,prop3,prop4];

tq = ['q1', 'q2','q3','q4'];
tn = ['"q1"','"q2"','"q3"','"q4"'];
nb = [0,0,0,0,0,0,0,0,0,0];
nbr=10;

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
