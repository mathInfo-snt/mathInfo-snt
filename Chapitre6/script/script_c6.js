var tabnf = ['c6p1','c6p2','c6p3','c6p4','c6p5','c6p6'];

var tnf =  ['href="gl_page1.html">Page 1</a>',
            'href="gl_page2.html">Page 2</a>',
            'href="gl_page3.html">Page 3</a>',
            'href="gl_page4.html">Page 4</a>',
            'href="gl_page5.html">Page 5</a>',
            'href="gl_page6.html">Page 6</a>'
            ];
            
var nexnf = 6;

function fait()
{
    if(typeof localStorage!='undefined') 
    {
        affnf = "";
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
            }
            else
            {
                affnf = affnf + "<li><a class='li1' "+tnf[knf]+"</li>";
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
}