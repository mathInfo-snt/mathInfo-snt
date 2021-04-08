var tabnf = ['c4p1q1','c4p1e1','c4p1e2','c4p1e3','c4p1e4'];

var tnf = ['href="don_quiz1.html">Quiz 1</a>',
           'href="don_exercice1.1.html">Exercice 1.1</a>',
           'href="don_exercice1.2.html">Exercice 1.2</a>',
           'href="don_exercice1.3.html">Exercice 1.3</a>',
           'href="don_exercice1.4.html">Exercice 1.4</a>'];

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
            localStorage.setItem('c4p1',1);
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