function derexo()
{
    if(typeof localStorage!='undefined') 
    {
        localStorage.setItem('c2p6e3',1);
    }
}

function precon()
{
  	cons = document.getElementById("cons");
  	pref = document.getElementById("pref");
  	rep = cons.value
  	if (rep == 'tekelec')
  	{
  		pref.value = '00:00:17'
  	}
  	else
  	{
  		if (rep == 'simpact')
  		{
  			pref.value = '00:00:3e'
  		}
  		else
  		{
  			pref.value = 'erreur'
  		}
  	}

}