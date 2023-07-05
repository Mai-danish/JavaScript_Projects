var index=0;
function changeColors(){
    var colors=["red","green","yellow","blue","orange","purple","brown"];
    document.getElementsByClassName("container")[0].style.background= colors[index++];
    if(index>colors.length-1)
    index=0;
}