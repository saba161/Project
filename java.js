//calculator operations
function insert(act)
{
	var numsarea = document.getElementById("numsarea");
	numsarea.value = numsarea.value + act;
}

function backspace()
{    
    var rekensom  = document.getElementById('numsarea').value;
    document.getElementById('numsarea').value = rekensom.substring(0,rekensom.length -1);
}
//show history
function show() 
{
	var elem = document.getElementById("calc");
	elem.style.display = 'none';
}



