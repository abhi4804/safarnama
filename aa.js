let addb = document.getElementById('addtodo');
let todoc=document.getElementById('todoc');
let inputfield=document.getElementById('inputfield');
addb.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText=inputfield.value;
    todoc.appendChild(paragraph);
    inputfield.value="";
	paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through';
    }
    )
    paragraph.addEventListener('dblclick',function(){
        todoc.removeChild(paragraph);
    })

    
})
function setbg(color)
{
document.getElementById("inputfield").style.background=color
}