var tabnf = ['c4p1','c4p2','c4p3','c4p4','c4p5','c4p6'];

var tnf =  ['href="don_page1.html">Page 1</a>',
            'href="don_page2.html">Page 2</a>',
            'href="don_page3.html">Page 3</a>',
            'href="don_page4.html">Page 4</a>',
            'href="don_page5.html">Page 5</a>',
            'href="don_page6.html">Page 6</a>'
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