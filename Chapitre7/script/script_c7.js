var tabnf = ['c7p1','c7p2','c7p3','c7p4'];

var tnf =  ['href="ie_page1.html">Page 1</a>',
            'href="ie_page2.html">Page 2</a>',
            'href="ie_page3.html">Page 3</a>',
            'href="ie_page4.html">Page 4</a>'];
            
var nexnf = 4;

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