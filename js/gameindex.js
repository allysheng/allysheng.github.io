var changeView = function() {
    var rotateEl = document.getElementById("rotatePhoneDiv");
    if(head.mobile){
        if(innerHeight < innerWidth){
            rotateEl.style.display = "";
        }else{
            rotateEl.style.display = "none";
        }
    }
};

var setLoadingBar = function(num){
   var text = document.getElementById('loadText');
   text.innerText = num+"%";
}
var removeLoadingBar = function(){
   var element = document.getElementById("loadingbar_ctn");
   element.parentNode.removeChild(element);
   var element = document.getElementById("loadingText_ctn");
   element.parentNode.removeChild(element);
}
setLoadingBar(10);
window.addEventListener('resize',function(){
  changeView();
});
window.onload = function(){
  GameMaker_Init();
  changeView();
};