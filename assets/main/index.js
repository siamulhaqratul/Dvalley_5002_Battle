window.__require=function i(t,s,e){function o(r,h){if(!s[r]){if(!t[r]){var c=r.split("/");if(c=c[c.length-1],!t[c]){var y="function"==typeof __require&&__require;if(!h&&y)return y(c,!0);if(n)return n(c,!0);throw new Error("Cannot find module '"+r+"'")}r=c}var p=s[r]={exports:{}};t[r][0].call(p.exports,function(i){return o(t[r][1][i]||i)},p,p.exports,i,t,s,e)}return s[r].exports}for(var n="function"==typeof __require&&__require,r=0;r<e.length;r++)o(e[r]);return o}({game:[function(i,t){"use strict";cc._RF.push(t,"f917aByiXFM3YFQUYbXNHIy","game"),cc.Class({extends:cc.Component,properties:{sprBG:cc.Node,sprPlayer:cc.Node,sprEnemy1:cc.Node,sprEnemy2:cc.Node,sprEnemy3:cc.Node,sprEnemy4:cc.Node,lblPlayer:cc.Label,lblEnemy2:cc.Label,lblEnemy3:cc.Label,lblEnemy4:cc.Label,sprDownload1:cc.Node,you:cc.Node,hand:cc.Node,box:cc.Node,tips:cc.Node,sprCTA:cc.Node,sprFightAnim1:cc.Node,sprFightAnim2:cc.Node,sprFightAnim3:cc.Node,sprFightAnim4:cc.Node},onLoad:function(){this.sprCTA.active=!1,this.sprFightAnim1.active=!1,this.sprFightAnim2.active=!1,this.sprFightAnim3.active=!1,this.sprFightAnim4.active=!1,this.touchStarted=!0,this.playerPower=400,this.enemyPower=[],this.enemyPower[0]=250,this.enemyPower[1]=500,this.enemyPower[2]=1250,this.enemyPower[3]=3e3,this.isVisitedEnemey1=!1,this.isVisitedEnemey2=!1,this.isVisitedEnemey3=!1,this.isVisitedEnemey4=!1,this.sprEnemy1Position=this.sprEnemy1.getPosition(),this.sprEnemy2Position=this.sprEnemy2.getPosition(),this.sprEnemy3Position=this.sprEnemy3.getPosition(),this.sprEnemy4Position=this.sprEnemy4.getPosition(),this.sprDownload1.on(cc.Node.EventType.TOUCH_START,function(){return window.smartad_sdk(),!0},this),this.sprPlayer.on(cc.Node.EventType.TOUCH_START,function(){return this.touchStarted&&(this.you.destroy(),this.hand.destroy(),this.touchStarted=!1),!0},this),this.sprPlayer.on(cc.Node.EventType.TOUCH_MOVE,function(i){this.touchMoveLocation=i.getLocation(),this.sprPlayer.setPosition(this.touchMoveLocation.x-320,this.touchMoveLocation.y-668)},this),this.sprPlayer.on(cc.Node.EventType.TOUCH_END,function(i){this.touchEndLocationX=i.getLocationX(),this.touchEndLocationY=i.getLocationY(),this.touchEndLocationX-320<=this.sprEnemy1Position.x+150&&this.touchEndLocationX-320>=this.sprEnemy1Position.x-150?(cc.log("fff"),this.touchEndLocationY-668<=this.sprEnemy1Position.y+100&&this.touchEndLocationY-668>=this.sprEnemy1Position.y-100&&!this.isVisitedEnemey1?(this.sprPlayer.setPosition(this.sprEnemy1Position.x-120,this.sprEnemy1Position.y),this.isVisitedEnemey1=!0,this.playerPower>=this.enemyPower[0]&&(this.sprFightAnim1.active=!0,this.playerPower+=this.enemyPower[0],this.scheduleOnce(function(){this.sprFightAnim1.active=!1,this.sprPlayer.runAction(cc.moveTo(2,-203.376,-58.666)),this.sprEnemy1.destroy(),this.lblPlayer.string=+this.playerPower},1))):this.touchEndLocationY-668<=this.sprEnemy2Position.y+100&&this.touchEndLocationY-668>=this.sprEnemy2Position.y-100&&!this.isVisitedEnemey2?(this.sprPlayer.setPosition(this.sprEnemy2Position.x-120,this.sprEnemy2Position.y),this.isVisitedEnemey2=!0,this.playerPower>=this.enemyPower[1]?(this.sprFightAnim2.active=!0,this.playerPower+=this.enemyPower[1],this.scheduleOnce(function(){this.sprFightAnim2.active=!1,this.sprPlayer.runAction(cc.moveTo(2,-203.376,-58.666)),this.sprEnemy2.destroy(),this.lblPlayer.string=+this.playerPower},1)):(this.sprFightAnim2.active=!0,this.scheduleOnce(function(){this.sprFightAnim2.active=!1,this.enemyPower[1]+=this.playerPower,this.lblEnemy2.string=+this.enemyPower[1],this.sprPlayer.destroy(),this.sprCTA.active=!0,this.ctaTouch()},1))):this.touchEndLocationY-668<=this.sprEnemy3Position.y+100&&this.touchEndLocationY-668>=this.sprEnemy3Position.y-100&&!this.isVisitedEnemey3?(this.sprPlayer.setPosition(this.sprEnemy3Position.x-120,this.sprEnemy3Position.y),this.isVisitedEnemey3=!0,this.playerPower>=this.enemyPower[2]?(this.playerPower+=this.enemyPower[2],this.sprEnemy3.destroy(),this.lblPlayer.string=+this.playerPower):(this.sprFightAnim3.active=!0,this.scheduleOnce(function(){this.sprFightAnim3.active=!1,this.enemyPower[2]+=this.playerPower,this.lblEnemy3.string=+this.enemyPower[2],this.sprPlayer.destroy(),this.sprCTA.active=!0,this.ctaTouch()},1))):this.touchEndLocationY-668<=this.sprEnemy4Position.y+100&&this.touchEndLocationY-668>=this.sprEnemy4Position.y-100&&!this.isVisitedEnemey4&&(this.sprFightAnim4.active=!0,this.scheduleOnce(function(){this.sprPlayer.setPosition(this.sprEnemy4Position.x-120,this.sprEnemy4Position.y),this.sprFightAnim4.active=!1,this.isVisitedEnemey4=!0,this.enemyPower[3]+=this.playerPower,this.lblEnemy4.string=+this.enemyPower[3],this.sprPlayer.destroy(),this.sprCTA.active=!0,this.ctaTouch()},1))):this.sprPlayer.setPosition(-203.376,-58.666)},this)},ctaTouch:function(){this.sprCTA.on(cc.Node.EventType.TOUCH_START,function(){window.smartad_sdk()},this)},start:function(){}}),cc._RF.pop()},{}]},{},["game"]);