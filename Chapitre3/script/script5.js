var tabnf = ['c3p5q5','c3p5e1','c3p5e2','c3p5e3','c3p5e4'];

var tnf = ['href="ima_quiz5.html">Quiz 5</a>',
           'href="ima_exercice5.1.html">Exercice 5.1</a>',
           'href="ima_exercice5.2.html">Exercice 5.2</a>',
           'href="ima_exercice5.3.html">Exercice 5.3</a>',
           'href="ima_exercice5.4.html">Exercice 5.4</a>'];

var nexnf = 5;

function fait()
{
    if(typeof localStorage!='undefined') 
    {
        affnf = "";
        fnf = 0;
        for(knf=0;knf<nexnf;knf++)
        {
            var nf = localStorage.getItem(tabnf[knf]);
            if(nf!=null) 
            {
                nf = parseInt(nf);
            } 
            else 
            {
                nf = 0;
                localStorage.setItem(tabnf[knf],nf);
            }
            if (nf == 1)
            {
                affnf = affnf + "<li><a class='li2' "+tnf[knf]+"</li>";
                fnf++
            }
            else
            {
                affnf = affnf + "<li><a class='li1' "+tnf[knf]+"</li>";
            }     
        }
        if (fnf == nexnf)
        {
            localStorage.setItem('c3p5',1);
        }
    }
    else
    {
        affnf = "";
        for(knf=0;knf<nexnf;knf++)
        {
            affnf = affnf + "<li><a class='li3' "+tnf[knf]+"</li>"; 
        }
    }
    document.getElementById('nf').innerHTML = affnf;
}