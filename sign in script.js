function validation()
{
	var result=true;
	var i=document.getElementsByTagName("input");
	if(i[0].value=="ankit"&&i[1].value=="girnar")
	 return(true);
	
	else
	{
	  alert("invalid username or password");
	  return(false);
	}
}