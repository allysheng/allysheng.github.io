function html5LoadingBar(_graphics, _width,_height, _total, _current, _loadingscreen) {
    

    if(window.setLoadingBar && window.removeLoadingBar){

       if(_current == _total){
        removeLoadingBar();
       }else{
          var percentage = Math.floor((_current / _total)*100);
          if(percentage >10){
       	     setLoadingBar(percentage);
          }
       
       }
    }
}