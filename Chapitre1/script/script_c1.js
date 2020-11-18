var tabnf = ['c1p1','c1p2','c1p3','c1p4','c1p5','c1p6','c1p7','c1p8'];

var tnf =  ['href="web_page1.html">Page 1</a>',
            'href="web_page2.html">Page 2</a>',
            'href="web_page3.html">Page 3</a>',
            'href="web_page4.html">Page 4</a>',
            'href="web_page5.html">Page 5</a>',
            'href="web_page6.html">Page 6</a>',
            'href="web_page7.html">Page 7</a>',
            'href="web_page8.html">Page 8</a>'];
            
var nexnf = 8;

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
                affnf = affnf + "<li><a class='li1' "+tnf[knf]+"</li>";
            }     
        }
        if (fnf == nexnf)
        {
            localStorage.setItem('c1',1);
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