var tabnf = ['c6p2q2','c6p2e1','c6p2e2','c6p2e3','c6p2e4'];

var tnf = ['href="gl_quiz2.html">Quiz 2</a>',
           'href="gl_exercice2.1.html">Exercice 2.1</a>',
           'href="gl_exercice2.2.html">Exercice 2.2</a>',
           'href="gl_exercice2.3.html">Exercice 2.3</a>',
           'href="gl_exercice2.4.html">Exercice 2.4</a>'];

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
            localStorage.setItem('c6p2',1);
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

function xdeci()
{
  d = document.getElementById("deci");
  s = document.getElementById("sexa");
  sv = s.value;
  sv = sv.toUpperCase();
  sv = sv.replace(/ /g,"");
  sv = sv.replace(/''/g,'"');
  sv = sv.replace(/NORD/g,"N");
  sv = sv.replace(/SUD/g,"S");
  sp1 = sv.split('°');
  deg = sp1[0];
  if (sp1[1].includes("'")==false)
  {
    sp1[1] = "0'"+sp1[1];
  }
  sp2 = sp1[1].split("'");
  min = sp2[0];
  if (sp2[1].includes('"')==false)
  {
    sp2[1] = '0"'+sp2[1];
  }
  sp3 = sp2[1].split('"');
  sec = sp3[0];
  lat = parseInt(deg,10)+parseInt(min,10)/60+parseInt(sec,10)/3600;
  if (sp3[1]=='S')
  {
    lat = -lat;
  }
  d.value = lat;
}

function xsexa()
{
  d = document.getElementById("deci");
  s = document.getElementById("sexa");
  dv = d.value;
  dv = dv.replace(/ /g,"");
  dv = dv.replace(/S/g,"Sud");

  dg = parseFloat(dv);
  if (dg>0)
  {
    or = 'Nord';
  }
  else
  {
    or='Sud';
    dg=-dg;
  }
  deg = Math.trunc(dg);
  dm = 60*dg-60*deg;
  min = Math.trunc(dm);
  ds = (dm-min)*60;
  sec = Math.round(ds);
  lat = deg.toString()+'°'+min.toString()+"'"+sec.toString()+'"'+or;
  s.value=lat;
}

function xdeci2()
{
  d = document.getElementById("deci2");
  s = document.getElementById("sexa2");
  sv = s.value;
  sv = sv.toUpperCase();
  sv = sv.replace(/ /g,"");
  sv = sv.replace(/''/g,'"');
  sv = sv.replace(/OUEST/g,"O");
  sv = sv.replace(/EST/g,"E");
  sp1 = sv.split('°');
  deg = sp1[0];
  if (sp1[1].includes("'")==false)
  {
    sp1[1] = "0'"+sp1[1];
  }
  sp2 = sp1[1].split("'");
  min = sp2[0];
  if (sp2[1].includes('"')==false)
  {
    sp2[1] = '0"'+sp2[1];
  }
  sp3 = sp2[1].split('"');
  sec = sp3[0];
  long = parseInt(deg,10)+parseInt(min,10)/60+parseInt(sec,10)/3600;
  if (sp3[1]=='O')
  {
    long = -long;
  }
  d.value = long;
}

function xsexa2()
{
  d = document.getElementById("deci2");
  s = document.getElementById("sexa2");
  dv = d.value;
  dv = dv.replace(/ /g,"");
  dv = dv.replace(/,/g,".");
  dg = parseFloat(dv);
  if (dg>0)
  {
    or = 'Est';
  }
  else
  {
    or='Ouest';
    dg=-dg;
  }
  deg = Math.trunc(dg);
  dm = 60*dg-60*deg;
  min = Math.trunc(dm);
  ds = (dm-min)*60;
  sec = Math.round(ds);
  lat = deg.toString()+'°'+min.toString()+"'"+sec.toString()+'"'+or;
  s.value=lat;
}

