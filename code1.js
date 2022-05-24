gdjs.gameCode = {};
gdjs.gameCode.GDvignetteObjects1= [];
gdjs.gameCode.GDvignetteObjects2= [];
gdjs.gameCode.GDvignetteObjects3= [];
gdjs.gameCode.GDvignetteObjects4= [];
gdjs.gameCode.GDbgObjects1= [];
gdjs.gameCode.GDbgObjects2= [];
gdjs.gameCode.GDbgObjects3= [];
gdjs.gameCode.GDbgObjects4= [];
gdjs.gameCode.GDColorList2Objects1= [];
gdjs.gameCode.GDColorList2Objects2= [];
gdjs.gameCode.GDColorList2Objects3= [];
gdjs.gameCode.GDColorList2Objects4= [];
gdjs.gameCode.GDColorList1Objects1= [];
gdjs.gameCode.GDColorList1Objects2= [];
gdjs.gameCode.GDColorList1Objects3= [];
gdjs.gameCode.GDColorList1Objects4= [];
gdjs.gameCode.GDColorChosedObjects1= [];
gdjs.gameCode.GDColorChosedObjects2= [];
gdjs.gameCode.GDColorChosedObjects3= [];
gdjs.gameCode.GDColorChosedObjects4= [];
gdjs.gameCode.GDPointsObjects1= [];
gdjs.gameCode.GDPointsObjects2= [];
gdjs.gameCode.GDPointsObjects3= [];
gdjs.gameCode.GDPointsObjects4= [];
gdjs.gameCode.GDinfotxtObjects1= [];
gdjs.gameCode.GDinfotxtObjects2= [];
gdjs.gameCode.GDinfotxtObjects3= [];
gdjs.gameCode.GDinfotxtObjects4= [];
gdjs.gameCode.GDopacityObjects1= [];
gdjs.gameCode.GDopacityObjects2= [];
gdjs.gameCode.GDopacityObjects3= [];
gdjs.gameCode.GDopacityObjects4= [];
gdjs.gameCode.GDpausedtxtObjects1= [];
gdjs.gameCode.GDpausedtxtObjects2= [];
gdjs.gameCode.GDpausedtxtObjects3= [];
gdjs.gameCode.GDpausedtxtObjects4= [];
gdjs.gameCode.GDresumebtnObjects1= [];
gdjs.gameCode.GDresumebtnObjects2= [];
gdjs.gameCode.GDresumebtnObjects3= [];
gdjs.gameCode.GDresumebtnObjects4= [];
gdjs.gameCode.GDprofilebtnObjects1= [];
gdjs.gameCode.GDprofilebtnObjects2= [];
gdjs.gameCode.GDprofilebtnObjects3= [];
gdjs.gameCode.GDprofilebtnObjects4= [];
gdjs.gameCode.GDhigscoredisplayObjects1= [];
gdjs.gameCode.GDhigscoredisplayObjects2= [];
gdjs.gameCode.GDhigscoredisplayObjects3= [];
gdjs.gameCode.GDhigscoredisplayObjects4= [];
gdjs.gameCode.GDdeathsdisplayObjects1= [];
gdjs.gameCode.GDdeathsdisplayObjects2= [];
gdjs.gameCode.GDdeathsdisplayObjects3= [];
gdjs.gameCode.GDdeathsdisplayObjects4= [];
gdjs.gameCode.GDpauseObjects1= [];
gdjs.gameCode.GDpauseObjects2= [];
gdjs.gameCode.GDpauseObjects3= [];
gdjs.gameCode.GDpauseObjects4= [];

gdjs.gameCode.conditionTrue_0 = {val:false};
gdjs.gameCode.condition0IsTrue_0 = {val:false};
gdjs.gameCode.condition1IsTrue_0 = {val:false};
gdjs.gameCode.condition2IsTrue_0 = {val:false};
gdjs.gameCode.condition3IsTrue_0 = {val:false};
gdjs.gameCode.conditionTrue_1 = {val:false};
gdjs.gameCode.condition0IsTrue_1 = {val:false};
gdjs.gameCode.condition1IsTrue_1 = {val:false};
gdjs.gameCode.condition2IsTrue_1 = {val:false};
gdjs.gameCode.condition3IsTrue_1 = {val:false};


gdjs.gameCode.eventsList0 = function(runtimeScene) {

};gdjs.gameCode.eventsList1 = function(runtimeScene) {

{


gdjs.gameCode.eventsList0(runtimeScene);
}


};gdjs.gameCode.eventsList2 = function(runtimeScene) {

{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1));
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString(gdjs.evtsExt__Choose__RandomString.func(runtimeScene, "RED,ORANGE,YELLOW,GREEN,BLUE,CYAN,BROWN,GRAY,PURPLE,PINK", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2;
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ColorList1"), gdjs.gameCode.GDColorList1Objects3);
gdjs.copyArray(runtimeScene.getObjects("ColorList2"), gdjs.gameCode.GDColorList2Objects3);
{for(var i = 0, len = gdjs.gameCode.GDColorList2Objects3.length ;i < len;++i) {
    gdjs.gameCode.GDColorList2Objects3[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.gameCode.GDColorList1Objects3.length ;i < len;++i) {
    gdjs.gameCode.GDColorList1Objects3[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(11).setString("ColorList2");
}{runtimeScene.getGame().getVariables().getFromIndex(12).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}{runtimeScene.getGame().getVariables().getFromIndex(13).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ColorList1"), gdjs.gameCode.GDColorList1Objects2);
gdjs.copyArray(runtimeScene.getObjects("ColorList2"), gdjs.gameCode.GDColorList2Objects2);
{for(var i = 0, len = gdjs.gameCode.GDColorList1Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDColorList1Objects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.gameCode.GDColorList2Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDColorList2Objects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(11).setString("ColorList1");
}{runtimeScene.getGame().getVariables().getFromIndex(12).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(13).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.gameCode.eventsList3 = function(runtimeScene) {

{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "RED";
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("RED")));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setString("RED");
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "ORANGE";
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("ORANGE")));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setString("ORANGE");
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "YELLOW";
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("YELLOW")));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setString("YELLOW");
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "GREEN";
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("GREEN")));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setString("GREEN");
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "BLUE";
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("BLUE")));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setString("BLUE");
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "CYAN";
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("CYAN")));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setString("CYAN");
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "BROWN";
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("BROWN")));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setString("BROWN");
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "GRAY";
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("GRAY")));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setString("GRAY");
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "PINK";
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("PINK")));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setString("PINK");
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "PURPLE";
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("PURPLE")));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setString("PURPLE");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("ColorChosed"), gdjs.gameCode.GDColorChosedObjects2);
{for(var i = 0, len = gdjs.gameCode.GDColorChosedObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDColorChosedObjects2[i].setColor(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}}

}


};gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorChosedObjects2Objects = Hashtable.newFrom({"ColorChosed": gdjs.gameCode.GDColorChosedObjects2});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorList1Objects2Objects = Hashtable.newFrom({"ColorList1": gdjs.gameCode.GDColorList1Objects2});
gdjs.gameCode.eventsList4 = function(runtimeScene) {

{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16));
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}}

}


};gdjs.gameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.gameCode.GDColorList1Objects2, gdjs.gameCode.GDColorList1Objects3);


gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDColorList1Objects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDColorList1Objects3[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)) ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDColorList1Objects3[k] = gdjs.gameCode.GDColorList1Objects3[i];
        ++k;
    }
}
gdjs.gameCode.GDColorList1Objects3.length = k;}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition1IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7677580);
}
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("infotxt"), gdjs.gameCode.GDinfotxtObjects3);
{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(1);
}{for(var i = 0, len = gdjs.gameCode.GDinfotxtObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDinfotxtObjects3[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "collectcoin-6075.mp3", false, 100, 1);
}}

}


{

/* Reuse gdjs.gameCode.GDColorList1Objects2 */

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDColorList1Objects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDColorList1Objects2[i].getString() != gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)) ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDColorList1Objects2[k] = gdjs.gameCode.GDColorList1Objects2[i];
        ++k;
    }
}
gdjs.gameCode.GDColorList1Objects2.length = k;}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition1IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7459892);
}
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(14).add(1);
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(0));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(2));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(1));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(4));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(5));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "stupid", false);
}
{ //Subevents
gdjs.gameCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorChosedObjects2Objects = Hashtable.newFrom({"ColorChosed": gdjs.gameCode.GDColorChosedObjects2});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorList2Objects2Objects = Hashtable.newFrom({"ColorList2": gdjs.gameCode.GDColorList2Objects2});
gdjs.gameCode.eventsList6 = function(runtimeScene) {

{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16));
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}}

}


};gdjs.gameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.gameCode.GDColorList2Objects2, gdjs.gameCode.GDColorList2Objects3);


gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDColorList2Objects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDColorList2Objects3[i].getString() != gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)) ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDColorList2Objects3[k] = gdjs.gameCode.GDColorList2Objects3[i];
        ++k;
    }
}
gdjs.gameCode.GDColorList2Objects3.length = k;}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition1IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7704756);
}
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(14).add(1);
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(0));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(2));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(1));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(4));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(5));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "stupid", false);
}
{ //Subevents
gdjs.gameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.gameCode.GDColorList2Objects2 */

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDColorList2Objects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDColorList2Objects2[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)) ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDColorList2Objects2[k] = gdjs.gameCode.GDColorList2Objects2[i];
        ++k;
    }
}
gdjs.gameCode.GDColorList2Objects2.length = k;}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition1IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8226356);
}
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("infotxt"), gdjs.gameCode.GDinfotxtObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(1);
}{for(var i = 0, len = gdjs.gameCode.GDinfotxtObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDinfotxtObjects2[i].hide(false);
}
}}

}


};gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorChosedObjects2Objects = Hashtable.newFrom({"ColorChosed": gdjs.gameCode.GDColorChosedObjects2});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorList1Objects2Objects = Hashtable.newFrom({"ColorList1": gdjs.gameCode.GDColorList1Objects2});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorChosedObjects2Objects = Hashtable.newFrom({"ColorChosed": gdjs.gameCode.GDColorChosedObjects2});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorList2Objects2Objects = Hashtable.newFrom({"ColorList2": gdjs.gameCode.GDColorList2Objects2});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorChosedObjects2Objects = Hashtable.newFrom({"ColorChosed": gdjs.gameCode.GDColorChosedObjects2});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorList1Objects2Objects = Hashtable.newFrom({"ColorList1": gdjs.gameCode.GDColorList1Objects2});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorChosedObjects2Objects = Hashtable.newFrom({"ColorChosed": gdjs.gameCode.GDColorChosedObjects2});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorList2Objects2Objects = Hashtable.newFrom({"ColorList2": gdjs.gameCode.GDColorList2Objects2});
gdjs.gameCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ColorChosed"), gdjs.gameCode.GDColorChosedObjects2);
gdjs.copyArray(runtimeScene.getObjects("ColorList1"), gdjs.gameCode.GDColorList1Objects2);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorChosedObjects2Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorList1Objects2Objects, false, runtimeScene, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition1IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7704004);
}
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.gameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ColorChosed"), gdjs.gameCode.GDColorChosedObjects2);
gdjs.copyArray(runtimeScene.getObjects("ColorList2"), gdjs.gameCode.GDColorList2Objects2);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorChosedObjects2Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorList2Objects2Objects, false, runtimeScene, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition1IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7581732);
}
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.gameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ColorChosed"), gdjs.gameCode.GDColorChosedObjects2);
gdjs.copyArray(runtimeScene.getObjects("ColorList1"), gdjs.gameCode.GDColorList1Objects2);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorChosedObjects2Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorList1Objects2Objects, false, runtimeScene, false);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ColorChosed"), gdjs.gameCode.GDColorChosedObjects2);
gdjs.copyArray(runtimeScene.getObjects("ColorList2"), gdjs.gameCode.GDColorList2Objects2);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorChosedObjects2Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorList2Objects2Objects, false, runtimeScene, false);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(13)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ColorChosed"), gdjs.gameCode.GDColorChosedObjects2);
gdjs.copyArray(runtimeScene.getObjects("ColorList1"), gdjs.gameCode.GDColorList1Objects2);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorChosedObjects2Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorList1Objects2Objects, true, runtimeScene, false);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ColorChosed"), gdjs.gameCode.GDColorChosedObjects2);
gdjs.copyArray(runtimeScene.getObjects("ColorList2"), gdjs.gameCode.GDColorList2Objects2);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorChosedObjects2Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDColorList2Objects2Objects, true, runtimeScene, false);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
gdjs.gameCode.condition2IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 0;
}if ( gdjs.gameCode.condition1IsTrue_0.val ) {
{
gdjs.gameCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 1;
}}
}
if (gdjs.gameCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(0));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(2));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(1));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(4));
}{gdjs.evtTools.sound.playSound(runtimeScene, "short-success-sound-glockenspiel-treasure-video-game-6346.mp3", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


};gdjs.gameCode.eventsList9 = function(runtimeScene) {

{


gdjs.gameCode.eventsList3(runtimeScene);
}


{


gdjs.gameCode.eventsList8(runtimeScene);
}


};gdjs.gameCode.eventsList10 = function(runtimeScene) {

{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("infotxt"), gdjs.gameCode.GDinfotxtObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(1).setString(gdjs.evtsExt__Choose__RandomString.func(runtimeScene, "RED,ORANGE,YELLOW,GREEN,BLUE,CYAN,BROWN,GRAY,PURPLE,PINK", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtsExt__Choose__RandomString.func(runtimeScene, "RED,ORANGE,YELLOW,GREEN,BLUE,CYAN,BROWN,GRAY,PURPLE,PINK", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{for(var i = 0, len = gdjs.gameCode.GDinfotxtObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDinfotxtObjects2[i].hide();
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Paused");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("ColorChosed"), gdjs.gameCode.GDColorChosedObjects2);
{for(var i = 0, len = gdjs.gameCode.GDColorChosedObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDColorChosedObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(gdjs.evtsExt__Choose__RandomString.func(runtimeScene, "1,2", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}

}


{


gdjs.gameCode.eventsList2(runtimeScene);
}


{


gdjs.gameCode.eventsList9(runtimeScene);
}


};gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDpauseObjects2Objects = Hashtable.newFrom({"pause": gdjs.gameCode.GDpauseObjects2});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDresumebtnObjects2Objects = Hashtable.newFrom({"resumebtn": gdjs.gameCode.GDresumebtnObjects2});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDresumebtnObjects3Objects = Hashtable.newFrom({"resumebtn": gdjs.gameCode.GDresumebtnObjects3});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDprofilebtnObjects3Objects = Hashtable.newFrom({"profilebtn": gdjs.gameCode.GDprofilebtnObjects3});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDresumebtnObjects3Objects = Hashtable.newFrom({"resumebtn": gdjs.gameCode.GDresumebtnObjects3});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDprofilebtnObjects2Objects = Hashtable.newFrom({"profilebtn": gdjs.gameCode.GDprofilebtnObjects2});
gdjs.gameCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("resumebtn"), gdjs.gameCode.GDresumebtnObjects3);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDresumebtnObjects3Objects, runtimeScene, true, false);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDresumebtnObjects3 */
{for(var i = 0, len = gdjs.gameCode.GDresumebtnObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDresumebtnObjects3[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("profilebtn"), gdjs.gameCode.GDprofilebtnObjects3);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDprofilebtnObjects3Objects, runtimeScene, true, false);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDprofilebtnObjects3 */
{for(var i = 0, len = gdjs.gameCode.GDprofilebtnObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDprofilebtnObjects3[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("resumebtn"), gdjs.gameCode.GDresumebtnObjects3);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDresumebtnObjects3Objects, runtimeScene, true, true);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDresumebtnObjects3 */
{for(var i = 0, len = gdjs.gameCode.GDresumebtnObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDresumebtnObjects3[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("profilebtn"), gdjs.gameCode.GDprofilebtnObjects2);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDprofilebtnObjects2Objects, runtimeScene, true, true);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDprofilebtnObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDprofilebtnObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDprofilebtnObjects2[i].setAnimation(0);
}
}}

}


};gdjs.gameCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("pause"), gdjs.gameCode.GDpauseObjects2);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDpauseObjects2Objects, runtimeScene, true, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Paused");
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Paused");
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("resumebtn"), gdjs.gameCode.GDresumebtnObjects2);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDresumebtnObjects2Objects, runtimeScene, true, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Paused");
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
gdjs.gameCode.condition2IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)) == 1;
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if ( gdjs.gameCode.condition1IsTrue_0.val ) {
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition2IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8279676);
}
}}
}
if (gdjs.gameCode.condition2IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Paused");
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)) == 1;
}if (gdjs.gameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.gameCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("deathsdisplay"), gdjs.gameCode.GDdeathsdisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("higscoredisplay"), gdjs.gameCode.GDhigscoredisplayObjects1);
{for(var i = 0, len = gdjs.gameCode.GDdeathsdisplayObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDdeathsdisplayObjects1[i].setString("Deaths: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14)));
}
}{for(var i = 0, len = gdjs.gameCode.GDhigscoredisplayObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDhigscoredisplayObjects1[i].setString("Highscore: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(16)));
}
}}

}


};gdjs.gameCode.eventsList13 = function(runtimeScene) {

{


{
{gdjs.evtTools.storage.writeNumberInJSONFile("data", "highscore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("data", "deaths", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)));
}}

}


};gdjs.gameCode.eventsList14 = function(runtimeScene) {

{


{

{ //Subevents
gdjs.gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("ColorList1"), gdjs.gameCode.GDColorList1Objects1);
gdjs.copyArray(runtimeScene.getObjects("ColorList2"), gdjs.gameCode.GDColorList2Objects1);
{for(var i = 0, len = gdjs.gameCode.GDColorList1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDColorList1Objects1[i].setX(300);
}
}{for(var i = 0, len = gdjs.gameCode.GDColorList2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDColorList2Objects1[i].setX(1300);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.gameCode.GDPointsObjects1);
gdjs.copyArray(runtimeScene.getObjects("deathsdisplay"), gdjs.gameCode.GDdeathsdisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("higscoredisplay"), gdjs.gameCode.GDhigscoredisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("infotxt"), gdjs.gameCode.GDinfotxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("pausedtxt"), gdjs.gameCode.GDpausedtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("profilebtn"), gdjs.gameCode.GDprofilebtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("resumebtn"), gdjs.gameCode.GDresumebtnObjects1);
{for(var i = 0, len = gdjs.gameCode.GDPointsObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDPointsObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.gameCode.GDPointsObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.gameCode.GDinfotxtObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDinfotxtObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.gameCode.GDinfotxtObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.gameCode.GDpausedtxtObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDpausedtxtObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.gameCode.GDpausedtxtObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.gameCode.GDresumebtnObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDresumebtnObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.gameCode.GDresumebtnObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.gameCode.GDprofilebtnObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDprofilebtnObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.gameCode.GDprofilebtnObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.gameCode.GDhigscoredisplayObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDhigscoredisplayObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.gameCode.GDhigscoredisplayObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.gameCode.GDdeathsdisplayObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDdeathsdisplayObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.gameCode.GDdeathsdisplayObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.gameCode.GDPointsObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDPointsObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)) == 0;
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ColorChosed"), gdjs.gameCode.GDColorChosedObjects1);
{for(var i = 0, len = gdjs.gameCode.GDColorChosedObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDColorChosedObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


{


gdjs.gameCode.eventsList10(runtimeScene);
}


{


gdjs.gameCode.eventsList12(runtimeScene);
}


{


{
}

}


{


gdjs.gameCode.eventsList13(runtimeScene);
}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDvignetteObjects1.length = 0;
gdjs.gameCode.GDvignetteObjects2.length = 0;
gdjs.gameCode.GDvignetteObjects3.length = 0;
gdjs.gameCode.GDvignetteObjects4.length = 0;
gdjs.gameCode.GDbgObjects1.length = 0;
gdjs.gameCode.GDbgObjects2.length = 0;
gdjs.gameCode.GDbgObjects3.length = 0;
gdjs.gameCode.GDbgObjects4.length = 0;
gdjs.gameCode.GDColorList2Objects1.length = 0;
gdjs.gameCode.GDColorList2Objects2.length = 0;
gdjs.gameCode.GDColorList2Objects3.length = 0;
gdjs.gameCode.GDColorList2Objects4.length = 0;
gdjs.gameCode.GDColorList1Objects1.length = 0;
gdjs.gameCode.GDColorList1Objects2.length = 0;
gdjs.gameCode.GDColorList1Objects3.length = 0;
gdjs.gameCode.GDColorList1Objects4.length = 0;
gdjs.gameCode.GDColorChosedObjects1.length = 0;
gdjs.gameCode.GDColorChosedObjects2.length = 0;
gdjs.gameCode.GDColorChosedObjects3.length = 0;
gdjs.gameCode.GDColorChosedObjects4.length = 0;
gdjs.gameCode.GDPointsObjects1.length = 0;
gdjs.gameCode.GDPointsObjects2.length = 0;
gdjs.gameCode.GDPointsObjects3.length = 0;
gdjs.gameCode.GDPointsObjects4.length = 0;
gdjs.gameCode.GDinfotxtObjects1.length = 0;
gdjs.gameCode.GDinfotxtObjects2.length = 0;
gdjs.gameCode.GDinfotxtObjects3.length = 0;
gdjs.gameCode.GDinfotxtObjects4.length = 0;
gdjs.gameCode.GDopacityObjects1.length = 0;
gdjs.gameCode.GDopacityObjects2.length = 0;
gdjs.gameCode.GDopacityObjects3.length = 0;
gdjs.gameCode.GDopacityObjects4.length = 0;
gdjs.gameCode.GDpausedtxtObjects1.length = 0;
gdjs.gameCode.GDpausedtxtObjects2.length = 0;
gdjs.gameCode.GDpausedtxtObjects3.length = 0;
gdjs.gameCode.GDpausedtxtObjects4.length = 0;
gdjs.gameCode.GDresumebtnObjects1.length = 0;
gdjs.gameCode.GDresumebtnObjects2.length = 0;
gdjs.gameCode.GDresumebtnObjects3.length = 0;
gdjs.gameCode.GDresumebtnObjects4.length = 0;
gdjs.gameCode.GDprofilebtnObjects1.length = 0;
gdjs.gameCode.GDprofilebtnObjects2.length = 0;
gdjs.gameCode.GDprofilebtnObjects3.length = 0;
gdjs.gameCode.GDprofilebtnObjects4.length = 0;
gdjs.gameCode.GDhigscoredisplayObjects1.length = 0;
gdjs.gameCode.GDhigscoredisplayObjects2.length = 0;
gdjs.gameCode.GDhigscoredisplayObjects3.length = 0;
gdjs.gameCode.GDhigscoredisplayObjects4.length = 0;
gdjs.gameCode.GDdeathsdisplayObjects1.length = 0;
gdjs.gameCode.GDdeathsdisplayObjects2.length = 0;
gdjs.gameCode.GDdeathsdisplayObjects3.length = 0;
gdjs.gameCode.GDdeathsdisplayObjects4.length = 0;
gdjs.gameCode.GDpauseObjects1.length = 0;
gdjs.gameCode.GDpauseObjects2.length = 0;
gdjs.gameCode.GDpauseObjects3.length = 0;
gdjs.gameCode.GDpauseObjects4.length = 0;

gdjs.gameCode.eventsList14(runtimeScene);
return;

}

gdjs['gameCode'] = gdjs.gameCode;
