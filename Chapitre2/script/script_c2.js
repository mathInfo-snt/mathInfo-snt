var tabnf = ['c2p1','c2p2','c2p3','c2p4','c2p5','c2p6','c2p7','c2p8','c2p9','c2p10','c2p11','c2p12'];

var tnf =  ['href="int_page1.html">Page 1</a>',
            'href="int_page2.html">Page 2</a>',
            'href="int_page3.html">Page 3</a>',
            'href="int_page4.html">Page 4</a>',
            'href="int_page5.html">Page 5</a>',
            'href="int_page6.html">Page 6</a>',
            'href="int_page7.html">Page 7</a>',
            'href="int_page8.html">Page 8</a>',
            'href="int_page9.html">Page 9</a>',
            'href="int_page10.html">Page 10</a>',
            'href="int_page11.html">Page 11</a>',
            'href="int_page12.html">Page 12</a>'
            ];
            
var nexnf = 12;

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