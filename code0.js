gdjs.menuCode = {};
gdjs.menuCode.GDvignetteObjects1= [];
gdjs.menuCode.GDvignetteObjects2= [];
gdjs.menuCode.GDloadingObjects1= [];
gdjs.menuCode.GDloadingObjects2= [];

gdjs.menuCode.conditionTrue_0 = {val:false};
gdjs.menuCode.condition0IsTrue_0 = {val:false};
gdjs.menuCode.condition1IsTrue_0 = {val:false};
gdjs.menuCode.condition2IsTrue_0 = {val:false};


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("data", "deaths");
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("data", "deaths", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}}

}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("data", "highscore");
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("data", "highscore", runtimeScene, runtimeScene.getVariables().getFromIndex(1));
}}

}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}}

}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 0.5;
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}}

}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 1;
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDvignetteObjects1.length = 0;
gdjs.menuCode.GDvignetteObjects2.length = 0;
gdjs.menuCode.GDloadingObjects1.length = 0;
gdjs.menuCode.GDloadingObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
return;

}

gdjs['menuCode'] = gdjs.menuCode;
