text_lang = {
	en :{
    	story : "Octopus Tako's beetle collection was blown away by a magical swirl of bubbles! Could you help it pop all the bubbles and find them back?",
    	desc : "Tako Bubble is a turn-based casual puzzler. You play as Tako, a yellow octopus, to crawl through deep-ocean environments, defeat ferocious monsters, pop all the bubbles, and find hidden beetle gems.",
      play : "Play Now!",
    	noice2d : "Noice2d Game Studio"
	},
	zh:{
		  story : "章魚《塔可》的甲蟲收藏品被一陣魔法漩渦給捲走了，它一怒之下決定戳破海底世界的所有泡泡，把甲蟲找回來！你可以幫幫它嗎？",
      desc : "塔可泡泡是一個回合制的小品益智遊戲。請幫助黃色小章魚《塔可》在深海中擊退兇猛的怪物，打爆所有的泡泡，找回所有遺失的甲蟲寶石吧！",
      play : "開始遊戲",
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