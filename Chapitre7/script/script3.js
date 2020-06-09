var tabnf = ['c7p3q3','c7p3e1','c7p3e2','c7p3e3','c7p3e4'];

var tnf = ['href="ie_quiz3.html">Quiz 3</a>',
           'href="ie_exercice3.1.html">Exercice 3.1</a>',
           'href="ie_exercice3.2.html">Exercice 3.2</a>',
           'href="ie_exercice3.3.html">Exercice 3.3</a>',
           'href="ie_exercice3.4.html">Exercice 3.4</a>'];

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
            localStorage.setItem('c7p3',1);
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