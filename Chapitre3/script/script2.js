var tabnf = ['c3p2q2','c3p2e1','c3p2e2','c3p2e3','c3p2e4'];

var tnf = ['href="ima_quiz2.html">Quiz 2</a>',
           'href="ima_exercice2.1.html">Exercice 2.1</a>',
           'href="ima_exercice2.2.html">Exercice 2.2</a>',
           'href="ima_exercice2.3.html">Exercice 2.3</a>',
           'href="ima_exercice2.4.html">Exercice 2.4</a>'];

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
            localStorage.setItem('c3p2',1);
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