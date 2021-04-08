var tabnf = ['c4p3q3','c4p3e1','c4p3e2','c4p3e3','c4p3e4','c4p3e5'];

var tnf = ['href="don_quiz3.html">Quiz 3</a>',
           'href="don_exercice3.1.html">Exercice 3.1</a>',
           'href="don_exercice3.2.html">Exercice 3.2</a>',
           'href="don_exercice3.3.html">Exercice 3.3</a>',
           'href="don_exercice3.4.html">Exercice 3.4</a>',
           'href="don_exercice3.5.html">Exercice 3.5</a>'];

var nexnf = 6;

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
            localStorage.setItem('c4p3',1);
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