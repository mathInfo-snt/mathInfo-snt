var tabnf = ['c3p1','c3p2','c3p3','c3p4','c3p5','c3p6','c3p7'];

var tnf =  ['href="ima_page1.html">Page 1</a>',
            'href="ima_page2.html">Page 2</a>',
            'href="ima_page3.html">Page 3</a>',
            'href="ima_page4.html">Page 4</a>',
            'href="ima_page5.html">Page 5</a>',
            'href="ima_page6.html">Page 6</a>',
            'href="ima_page7.html">Page 7</a>'
            ];
            
var nexnf = 7;

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