text_lang = {
	en :{
    	klee_name : "Klee: Spacetime Cleaners",
    	klee_release : "Jan, 09, 2020",
      tako_name : "Tako Bubble",
      tako_release : "Jan, 11, 2018",
    	noice2d : "Noice2d Game Studio"
	},
	zh:{
		  klee_name : "超時空BB蛋",
		  klee_release : "2020 / 01 / 09",
      tako_name : "塔可泡泡",
      tako_release : "2018 / 01 / 11",
    	noice2d :"去冰遊戲工作室"
	}
};



lang = navigator.language || navigator.userLanguage; //no ?s necessary

if(lang.indexOf("zh") != -1 )
{
	lang = text_lang.zh;
}
else
{
	lang = text_lang.en;
}

  
function AppViewModel() {
  var v = this;
  for(var i in lang){
      v[i] = lang[i];
   }
}
// Activates knockout.js
ko.applyBindings(new AppViewModel());