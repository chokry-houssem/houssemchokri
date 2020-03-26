function gra()
{
if(document.getElementById("test").style.fontWeight == "bold"){
        document.getElementById("test").style.fontWeight = "normal";
    }
    else{
       document.getElementById("test").style.fontWeight = "bold";
    }
}
function font(){
  document.getElementById("test").style.fontFamily= document.getElementById("police").value;
}

function myItalic(){
if(document.getElementById("test").style.fontStyle == "italic"){
        document.getElementById("test").style.fontStyle = "normal";
    }
    else{
       document.getElementById("test").style.fontStyle = "italic";
    }
}

function fontS()
{
	document.getElementById("test").style.fontSize = document.getElementById("size").value;
}
function textUN()
{
	if(document.getElementById("test").style.textDecoration == "underline"){
		document.getElementById("test").style.textDecoration = "";}
		else{
			document.getElementById("test").style.textDecoration = "underline";
		}
}





