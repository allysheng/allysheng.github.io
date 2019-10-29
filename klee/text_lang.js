text_lang = {
	en :{
    	sub_title : "Klee: Spacetime Cleaners",
    	h5_start : "Game Start",
    	release_date : "Jan, 09, 2020 on",
    	desc : "Klee is a fast-paced arcade game. Clean up game rooms with your auto-blaster guns and simple virtual button control! Oh, and don't forget to recycle the stabilized $energy_cores$ to save the world!",
    	noice2d : "Noice2d Game Studio"
	},
	zh:{
		sub_title : "超時空BB蛋",
		h5_start : "開始遊戲",
    	release_date : "預計 2020 / 01 / 09 登陸",
    	desc : "「超時空BB蛋」是一個快節奏的平台跳躍動作遊戲。用簡單的虛擬按鍵操作配合自動射擊，清空遊戲畫面吧！喔還有別忘了回收重要的$能量核心$，解除世界的能源危機！",
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