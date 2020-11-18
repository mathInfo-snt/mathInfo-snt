var tabnf = ['c1','c2','c3','c4','c5','c6','c7'];

var tnf = ['href="Chapitre1/chapitre1.html">Chapitre 1</a>',
           'href="Chapitre2/chapitre2.html">Chapitre 2</a>',
           'href="Chapitre3/chapitre3.html">Chapitre 3</a>',
           'href="Chapitre4/chapitre4.html">Chapitre 4</a>',
           'href="Chapitre5/chapitre5.html">Chapitre 5</a>',
           'href="Chapitre6/chapitre6.html">Chapitre 6</a>',
           'href="Chapitre7/chapitre7.html">Chapitre 7</a>'];

var nexnf = 7;

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
                fnf++;
            }
            else
            {
                affnf = affnf + "<li><a class='li3' "+tnf[knf]+"</li>";
            }     
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
    document.getElementById('nf2').innerHTML = affnf;
}