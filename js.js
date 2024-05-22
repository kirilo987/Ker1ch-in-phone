document.getElementById("myImage").addEventListener("click", function() {
    var text = "_ker1ch_";
    var element = document.createElement('textarea');
    element.value = text;
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
    alert("Text copied: " + text);
});