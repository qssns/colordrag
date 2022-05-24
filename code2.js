gdjs.stupidCode = {};
gdjs.stupidCode.GDvignetteObjects1= [];
gdjs.stupidCode.GDvignetteObjects2= [];
gdjs.stupidCode.GDhahaObjects1= [];
gdjs.stupidCode.GDhahaObjects2= [];
gdjs.stupidCode.GDyoulostObjects1= [];
gdjs.stupidCode.GDyoulostObjects2= [];
gdjs.stupidCode.GDdoorObjects1= [];
gdjs.stupidCode.GDdoorObjects2= [];
gdjs.stupidCode.GDtryagainObjects1= [];
gdjs.stupidCode.GDtryagainObjects2= [];
gdjs.stupidCode.GDpsstObjects1= [];
gdjs.stupidCode.GDpsstObjects2= [];

gdjs.stupidCode.conditionTrue_0 = {val:false};
gdjs.stupidCode.condition0IsTrue_0 = {val:false};
gdjs.stupidCode.condition1IsTrue_0 = {val:false};
gdjs.stupidCode.condition2IsTrue_0 = {val:false};


gdjs.stupidCode.mapOfGDgdjs_46stupidCode_46GDtryagainObjects1Objects = Hashtable.newFrom({"tryagain": gdjs.stupidCode.GDtryagainObjects1});
gdjs.stupidCode.mapOfGDgdjs_46stupidCode_46GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.stupidCode.GDdoorObjects1});
gdjs.stupidCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.stupidCode.GDdoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("haha"), gdjs.stupidCode.GDhahaObjects1);
gdjs.copyArray(runtimeScene.getObjects("psst"), gdjs.stupidCode.GDpsstObjects1);
gdjs.copyArray(runtimeScene.getObjects("tryagain"), gdjs.stupidCode.GDtryagainObjects1);
gdjs.copyArray(runtimeScene.getObjects("youlost"), gdjs.stupidCode.GDyoulostObjects1);
{for(var i = 0, len = gdjs.stupidCode.GDtryagainObjects1.length ;i < len;++i) {
    gdjs.stupidCode.GDtryagainObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.stupidCode.GDhahaObjects1.length ;i < len;++i) {
    gdjs.stupidCode.GDhahaObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.stupidCode.GDhahaObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.stupidCode.GDyoulostObjects1.length ;i < len;++i) {
    gdjs.stupidCode.GDyoulostObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.stupidCode.GDyoulostObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.stupidCode.GDdoorObjects1.length ;i < len;++i) {
    gdjs.stupidCode.GDdoorObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.stupidCode.GDdoorObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.stupidCode.GDpsstObjects1.length ;i < len;++i) {
    gdjs.stupidCode.GDpsstObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.stupidCode.GDpsstObjects1[i].getWidth()) / 2));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.stupidCode.GDdoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("tryagain"), gdjs.stupidCode.GDtryagainObjects1);

gdjs.stupidCode.condition0IsTrue_0.val = false;
gdjs.stupidCode.condition1IsTrue_0.val = false;
{
gdjs.stupidCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 0.7;
}if ( gdjs.stupidCode.condition0IsTrue_0.val ) {
{
gdjs.stupidCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stupidCode.mapOfGDgdjs_46stupidCode_46GDtryagainObjects1Objects, gdjs.stupidCode.mapOfGDgdjs_46stupidCode_46GDdoorObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.stupidCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


{


gdjs.stupidCode.condition0IsTrue_0.val = false;
{
gdjs.stupidCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.stupidCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("psst"), gdjs.stupidCode.GDpsstObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "DOORSLM2.WAV", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}{for(var i = 0, len = gdjs.stupidCode.GDpsstObjects1.length ;i < len;++i) {
    gdjs.stupidCode.GDpsstObjects1[i].hide();
}
}}

}


{


gdjs.stupidCode.condition0IsTrue_0.val = false;
{
gdjs.stupidCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 3;
}if (gdjs.stupidCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("psst"), gdjs.stupidCode.GDpsstObjects1);
{for(var i = 0, len = gdjs.stupidCode.GDpsstObjects1.length ;i < len;++i) {
    gdjs.stupidCode.GDpsstObjects1[i].hide(false);
}
}}

}


{


gdjs.stupidCode.condition0IsTrue_0.val = false;
{
gdjs.stupidCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}if (gdjs.stupidCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


};

gdjs.stupidCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.stupidCode.GDvignetteObjects1.length = 0;
gdjs.stupidCode.GDvignetteObjects2.length = 0;
gdjs.stupidCode.GDhahaObjects1.length = 0;
gdjs.stupidCode.GDhahaObjects2.length = 0;
gdjs.stupidCode.GDyoulostObjects1.length = 0;
gdjs.stupidCode.GDyoulostObjects2.length = 0;
gdjs.stupidCode.GDdoorObjects1.length = 0;
gdjs.stupidCode.GDdoorObjects2.length = 0;
gdjs.stupidCode.GDtryagainObjects1.length = 0;
gdjs.stupidCode.GDtryagainObjects2.length = 0;
gdjs.stupidCode.GDpsstObjects1.length = 0;
gdjs.stupidCode.GDpsstObjects2.length = 0;

gdjs.stupidCode.eventsList0(runtimeScene);
return;

}

gdjs['stupidCode'] = gdjs.stupidCode;
