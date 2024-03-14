"use strict";

var CABLES=CABLES||{};
CABLES.OPS=CABLES.OPS||{};

var Ops=Ops || {};
Ops.Gl=Ops.Gl || {};
Ops.Ui=Ops.Ui || {};
Ops.Anim=Ops.Anim || {};
Ops.Html=Ops.Html || {};
Ops.Json=Ops.Json || {};
Ops.Math=Ops.Math || {};
Ops.User=Ops.User || {};
Ops.Vars=Ops.Vars || {};
Ops.Array=Ops.Array || {};
Ops.Color=Ops.Color || {};
Ops.Cables=Ops.Cables || {};
Ops.Number=Ops.Number || {};
Ops.String=Ops.String || {};
Ops.Boolean=Ops.Boolean || {};
Ops.Devices=Ops.Devices || {};
Ops.Sidebar=Ops.Sidebar || {};
Ops.Trigger=Ops.Trigger || {};
Ops.Website=Ops.Website || {};
Ops.Extension=Ops.Extension || {};
Ops.Gl.Matrix=Ops.Gl.Matrix || {};
Ops.Gl.Meshes=Ops.Gl.Meshes || {};
Ops.Deprecated=Ops.Deprecated || {};
Ops.User.rambodc=Ops.User.rambodc || {};
Ops.Devices.Browser=Ops.Devices.Browser || {};
Ops.Gl.ImageCompose=Ops.Gl.ImageCompose || {};
Ops.Deprecated.Number=Ops.Deprecated.Number || {};
Ops.Extension.ECharts=Ops.Extension.ECharts || {};



// **************************************************************
// 
// Ops.User.rambodc.SetURL
// 
// **************************************************************

Ops.User.rambodc.SetURL = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_n6dz5ut5m=op.inTrigger(\"n6dz5ut5m\");\nport_n6dz5ut5m.setUiAttribs({title:\"Trigger\",display:\"button\",});\n\nconst port_lgwr24sd3=op.inString(\"lgwr24sd3\",\"\");\nport_lgwr24sd3.setUiAttribs({title:\"Directory 1\",});\n\nconst port_t9sx2ey0f=op.inString(\"t9sx2ey0f\",\"\");\nport_t9sx2ey0f.setUiAttribs({title:\"Directory 2\",});\n\nconst port_1ovs04j4c=op.inString(\"1ovs04j4c\",\"\");\nport_1ovs04j4c.setUiAttribs({title:\"Directory 3\",});\n\nconst port_l3dmhco3f=op.inString(\"l3dmhco3f\",\"\");\nport_l3dmhco3f.setUiAttribs({title:\"Directory 4\",});\n\nconst port_u4qh8rfom=op.inString(\"u4qh8rfom\",\"\");\nport_u4qh8rfom.setUiAttribs({title:\"Directory 5\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_n6dz5ut5m = addedOps[i].outTrigger(\"innerOut_n6dz5ut5m\");\ninnerOut_n6dz5ut5m.setUiAttribs({title:\"Trigger\"});\nport_n6dz5ut5m.onTriggered = () => { innerOut_n6dz5ut5m.trigger(); };\n\nconst innerOut_lgwr24sd3 = addedOps[i].outString(\"innerOut_lgwr24sd3\");\ninnerOut_lgwr24sd3.set(port_lgwr24sd3.get() );\ninnerOut_lgwr24sd3.setUiAttribs({title:\"Directory 1\"});\nport_lgwr24sd3.on(\"change\", (a,v) => { innerOut_lgwr24sd3.set(a); });\n\nconst innerOut_t9sx2ey0f = addedOps[i].outString(\"innerOut_t9sx2ey0f\");\ninnerOut_t9sx2ey0f.set(port_t9sx2ey0f.get() );\ninnerOut_t9sx2ey0f.setUiAttribs({title:\"Directory 2\"});\nport_t9sx2ey0f.on(\"change\", (a,v) => { innerOut_t9sx2ey0f.set(a); });\n\nconst innerOut_1ovs04j4c = addedOps[i].outString(\"innerOut_1ovs04j4c\");\ninnerOut_1ovs04j4c.set(port_1ovs04j4c.get() );\ninnerOut_1ovs04j4c.setUiAttribs({title:\"Directory 3\"});\nport_1ovs04j4c.on(\"change\", (a,v) => { innerOut_1ovs04j4c.set(a); });\n\nconst innerOut_l3dmhco3f = addedOps[i].outString(\"innerOut_l3dmhco3f\");\ninnerOut_l3dmhco3f.set(port_l3dmhco3f.get() );\ninnerOut_l3dmhco3f.setUiAttribs({title:\"Directory 4\"});\nport_l3dmhco3f.on(\"change\", (a,v) => { innerOut_l3dmhco3f.set(a); });\n\nconst innerOut_u4qh8rfom = addedOps[i].outString(\"innerOut_u4qh8rfom\");\ninnerOut_u4qh8rfom.set(port_u4qh8rfom.get() );\ninnerOut_u4qh8rfom.setUiAttribs({title:\"Directory 5\"});\nport_u4qh8rfom.on(\"change\", (a,v) => { innerOut_u4qh8rfom.set(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","ports_json":"{\n    \"ports\": [\n        {\n            \"id\": \"n6dz5ut5m\",\n            \"title\": \"Trigger\",\n            \"dir\": 0,\n            \"type\": 1,\n            \"uiDisplay\": \"button\",\n            \"order\": 0\n        },\n        {\n            \"id\": \"lgwr24sd3\",\n            \"title\": \"Directory 1\",\n            \"dir\": 0,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 1\n        },\n        {\n            \"id\": \"t9sx2ey0f\",\n            \"title\": \"Directory 2\",\n            \"dir\": 0,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 2\n        },\n        {\n            \"id\": \"1ovs04j4c\",\n            \"title\": \"Directory 3\",\n            \"dir\": 0,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 3\n        },\n        {\n            \"id\": \"l3dmhco3f\",\n            \"title\": \"Directory 4\",\n            \"dir\": 0,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 4\n        },\n        {\n            \"id\": \"u4qh8rfom\",\n            \"title\": \"Directory 5\",\n            \"dir\": 0,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 5\n        }\n    ]\n}","subpatch_json":"{\n  \"ops\": [\n    {\n      \"opId\": \"82492357-c11d-4b76-bd57-b296d3b79b83\",\n      \"id\": \"58ap6q300\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 1032,\n          \"y\": 2720\n        },\n        \"comment\": null,\n        \"color\": \"#5dc0fd\",\n        \"subPatch\": \"2jucyx339\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Active\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Silent\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Allow Empty\",\n          \"value\": false\n        }\n      ]\n    },\n    {\n      \"opId\": \"f4ff66b0-8500-46f7-9117-832aea0c2750\",\n      \"id\": \"wkebpay21\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 1344,\n          \"y\": 2580\n        },\n        \"subPatch\": \"2jucyx339\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"delay\",\n          \"value\": 0.05\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Delaying\",\n          \"value\": false\n        }\n      ]\n    },\n    {\n      \"opId\": \"c4e4e933-136e-479e-8de8-0b35b75d9217\",\n      \"id\": \"e8k560a9s\",\n      \"uiAttribs\": {\n        \"subPatch\": \"2jucyx339\",\n        \"translate\": {\n          \"x\": 1032,\n          \"y\": 2480\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"innerOut_n6dz5ut5m\",\n          \"title\": \"Trigger\",\n          \"links\": [\n            {\n              \"portIn\": \"Update\",\n              \"portOut\": \"innerOut_n6dz5ut5m\",\n              \"objIn\": \"58ap6q300\",\n              \"objOut\": \"e8k560a9s\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_lgwr24sd3\",\n          \"title\": \"Directory 1\",\n          \"links\": [\n            {\n              \"portIn\": \"Directory 1\",\n              \"portOut\": \"innerOut_lgwr24sd3\",\n              \"objIn\": \"332gk8grz\",\n              \"objOut\": \"e8k560a9s\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_t9sx2ey0f\",\n          \"title\": \"Directory 2\",\n          \"links\": [\n            {\n              \"portIn\": \"Directory 2\",\n              \"portOut\": \"innerOut_t9sx2ey0f\",\n              \"objIn\": \"332gk8grz\",\n              \"objOut\": \"e8k560a9s\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_1ovs04j4c\",\n          \"title\": \"Directory 3\",\n          \"links\": [\n            {\n              \"portIn\": \"Directory 3\",\n              \"portOut\": \"innerOut_1ovs04j4c\",\n              \"objIn\": \"332gk8grz\",\n              \"objOut\": \"e8k560a9s\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_l3dmhco3f\",\n          \"title\": \"Directory 4\",\n          \"links\": [\n            {\n              \"portIn\": \"Directory 4\",\n              \"portOut\": \"innerOut_l3dmhco3f\",\n              \"objIn\": \"332gk8grz\",\n              \"objOut\": \"e8k560a9s\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_u4qh8rfom\",\n          \"title\": \"Directory 5\",\n          \"links\": [\n            {\n              \"portIn\": \"Directory 5\",\n              \"portOut\": \"innerOut_u4qh8rfom\",\n              \"objIn\": \"332gk8grz\",\n              \"objOut\": \"e8k560a9s\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"02d45073-7936-4830-81ad-59a162febf1f\",\n      \"id\": \"lojyhs86g\",\n      \"uiAttribs\": {\n        \"subPatch\": \"2jucyx339\",\n        \"translate\": {\n          \"x\": 1032,\n          \"y\": 2800\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {}\n    },\n    {\n      \"opId\": \"66fda118-65ca-44d8-97b2-0389627cba7f\",\n      \"id\": \"332gk8grz\",\n      \"uiAttribs\": {\n        \"subPatch\": \"2jucyx339\",\n        \"translate\": {\n          \"x\": 1032,\n          \"y\": 2560\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"Path\",\n          \"links\": [\n            {\n              \"portIn\": \"Hash\",\n              \"portOut\": \"Path\",\n              \"objIn\": \"58ap6q300\",\n              \"objOut\": \"332gk8grz\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}",};
const port_n6dz5ut5m=op.inTrigger("n6dz5ut5m");
port_n6dz5ut5m.setUiAttribs({title:"Trigger",display:"button",});

const port_lgwr24sd3=op.inString("lgwr24sd3","");
port_lgwr24sd3.setUiAttribs({title:"Directory 1",});

const port_t9sx2ey0f=op.inString("t9sx2ey0f","");
port_t9sx2ey0f.setUiAttribs({title:"Directory 2",});

const port_1ovs04j4c=op.inString("1ovs04j4c","");
port_1ovs04j4c.setUiAttribs({title:"Directory 3",});

const port_l3dmhco3f=op.inString("l3dmhco3f","");
port_l3dmhco3f.setUiAttribs({title:"Directory 4",});

const port_u4qh8rfom=op.inString("u4qh8rfom","");
port_u4qh8rfom.setUiAttribs({title:"Directory 5",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_n6dz5ut5m = addedOps[i].outTrigger("innerOut_n6dz5ut5m");
innerOut_n6dz5ut5m.setUiAttribs({title:"Trigger"});
port_n6dz5ut5m.onTriggered = () => { innerOut_n6dz5ut5m.trigger(); };

const innerOut_lgwr24sd3 = addedOps[i].outString("innerOut_lgwr24sd3");
innerOut_lgwr24sd3.set(port_lgwr24sd3.get() );
innerOut_lgwr24sd3.setUiAttribs({title:"Directory 1"});
port_lgwr24sd3.on("change", (a,v) => { innerOut_lgwr24sd3.set(a); });

const innerOut_t9sx2ey0f = addedOps[i].outString("innerOut_t9sx2ey0f");
innerOut_t9sx2ey0f.set(port_t9sx2ey0f.get() );
innerOut_t9sx2ey0f.setUiAttribs({title:"Directory 2"});
port_t9sx2ey0f.on("change", (a,v) => { innerOut_t9sx2ey0f.set(a); });

const innerOut_1ovs04j4c = addedOps[i].outString("innerOut_1ovs04j4c");
innerOut_1ovs04j4c.set(port_1ovs04j4c.get() );
innerOut_1ovs04j4c.setUiAttribs({title:"Directory 3"});
port_1ovs04j4c.on("change", (a,v) => { innerOut_1ovs04j4c.set(a); });

const innerOut_l3dmhco3f = addedOps[i].outString("innerOut_l3dmhco3f");
innerOut_l3dmhco3f.set(port_l3dmhco3f.get() );
innerOut_l3dmhco3f.setUiAttribs({title:"Directory 4"});
port_l3dmhco3f.on("change", (a,v) => { innerOut_l3dmhco3f.set(a); });

const innerOut_u4qh8rfom = addedOps[i].outString("innerOut_u4qh8rfom");
innerOut_u4qh8rfom.set(port_u4qh8rfom.get() );
innerOut_u4qh8rfom.setUiAttribs({title:"Directory 5"});
port_u4qh8rfom.on("change", (a,v) => { innerOut_u4qh8rfom.set(a); });

    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
    if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
    op.patch.emitEvent("subpatchExpose", patchId);
    op.setStorage({ "blueprintVer": 2 });
    op.patch.emitEvent("subpatchExpose", patchId);
}


};

Ops.User.rambodc.SetURL.prototype = new CABLES.Op();
CABLES.OPS["b055a923-58b3-4b46-80d1-cd522d5f4cca"]={f:Ops.User.rambodc.SetURL,objName:"Ops.User.rambodc.SetURL"};




// **************************************************************
// 
// Ops.User.rambodc.PagesC
// 
// **************************************************************

Ops.User.rambodc.PagesC = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_i6nnsru1m=op.inObject(\"i6nnsru1m\");\nport_i6nnsru1m.setUiAttribs({title:\"Parent Link\",});\n\nconst port_zap5t5tri=op.inTrigger(\"zap5t5tri\");\nport_zap5t5tri.setUiAttribs({title:\"Mainloop\",});\n\nconst port_9ozpectyq=op.inTrigger(\"9ozpectyq\");\nport_9ozpectyq.setUiAttribs({title:\"Hash Changed\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_i6nnsru1m = addedOps[i].outObject(\"innerOut_i6nnsru1m\");\ninnerOut_i6nnsru1m.setUiAttribs({title:\"Parent Link\"});\nport_i6nnsru1m.on(\"change\", (a,v) => { innerOut_i6nnsru1m.setRef(a); });\n\nconst innerOut_zap5t5tri = addedOps[i].outTrigger(\"innerOut_zap5t5tri\");\ninnerOut_zap5t5tri.setUiAttribs({title:\"Mainloop\"});\nport_zap5t5tri.onTriggered = () => { innerOut_zap5t5tri.trigger(); };\n\nconst innerOut_9ozpectyq = addedOps[i].outTrigger(\"innerOut_9ozpectyq\");\ninnerOut_9ozpectyq.setUiAttribs({title:\"Hash Changed\"});\nport_9ozpectyq.onTriggered = () => { innerOut_9ozpectyq.trigger(); };\n\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","ports_json":"{\n    \"ports\": [\n        {\n            \"id\": \"i6nnsru1m\",\n            \"title\": \"Parent Link\",\n            \"dir\": 0,\n            \"type\": 2,\n            \"order\": 0\n        },\n        {\n            \"id\": \"zap5t5tri\",\n            \"title\": \"Mainloop\",\n            \"dir\": 0,\n            \"type\": 1,\n            \"order\": 1\n        },\n        {\n            \"id\": \"9ozpectyq\",\n            \"title\": \"Hash Changed\",\n            \"dir\": 0,\n            \"type\": 1,\n            \"order\": 2\n        }\n    ]\n}","subpatch_json":"{\n  \"ops\": [\n    {\n      \"opId\": \"38f79614-b0de-4960-8da5-2827e7f43415\",\n      \"id\": \"1t92tjzsm\",\n      \"uiAttribs\": {\n        \"hasArea\": true,\n        \"comment_title\": \"Back Button\",\n        \"translate\": {\n          \"x\": 7800,\n          \"y\": 20\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"area\": {\n          \"w\": 708,\n          \"h\": 520,\n          \"id\": \"d78jplkck\"\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Title\",\n          \"value\": \"Back Button\"\n        }\n      ]\n    },\n    {\n      \"opId\": \"38f79614-b0de-4960-8da5-2827e7f43415\",\n      \"id\": \"yage4sijw\",\n      \"uiAttribs\": {\n        \"hasArea\": true,\n        \"comment_title\": \"3 name\",\n        \"translate\": {\n          \"x\": 8988,\n          \"y\": 1480\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"area\": {\n          \"w\": 672,\n          \"h\": 2640,\n          \"id\": \"nk2jj7p9i\"\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Title\",\n          \"value\": \"3 name\"\n        }\n      ]\n    },\n    {\n      \"opId\": \"4d16ae29-1e59-489c-b582-14213a3f4ff6\",\n      \"id\": \"ow1ssfqnk\",\n      \"uiAttribs\": {\n        \"title\": \"Text: Update Nam\",\n        \"translate\": {\n          \"x\": 9060,\n          \"y\": 2300\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": \"Update Name:\"\n        },\n        {\n          \"name\": \"Id\",\n          \"value\": \"0\"\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Button\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Text Color\",\n          \"value\": \"blue\"\n        },\n        {\n          \"name\": \"Text Size\",\n          \"value\": \"24px\"\n        },\n        {\n          \"name\": \"Line Height\",\n          \"value\": \"1.5\"\n        },\n        {\n          \"name\": \"Bold\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Background Color\",\n          \"value\": \"rgba(255,255,255,0.0)\"\n        },\n        {\n          \"name\": \"Hover Color\",\n          \"value\": \"rgba(255,255,255,0.01)\"\n        },\n        {\n          \"name\": \"Margin\",\n          \"value\": \"0px 10px\"\n        },\n        {\n          \"name\": \"Padding\",\n          \"value\": \"10px\"\n        },\n        {\n          \"name\": \"Height\",\n          \"value\": \"auto\"\n        },\n        {\n          \"name\": \"Width\",\n          \"value\": \"auto\"\n        },\n        {\n          \"name\": \"Text Align\",\n          \"value\": \"left\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"childs\",\n          \"links\": [\n            {\n              \"portIn\": \"Link\",\n              \"portOut\": \"childs\",\n              \"objIn\": \"v3ukmeeju\",\n              \"objOut\": \"ow1ssfqnk\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"38f79614-b0de-4960-8da5-2827e7f43415\",\n      \"id\": \"wavmz7p5z\",\n      \"uiAttribs\": {\n        \"hasArea\": true,\n        \"comment_title\": \"4 email\",\n        \"translate\": {\n          \"x\": 9756,\n          \"y\": 1480\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"area\": {\n          \"w\": 1008,\n          \"h\": 1820,\n          \"id\": \"nk2jj7p9i\"\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Title\",\n          \"value\": \"4 email\"\n        }\n      ]\n    },\n    {\n      \"opId\": \"4d16ae29-1e59-489c-b582-14213a3f4ff6\",\n      \"id\": \"a6zvvqqm9\",\n      \"uiAttribs\": {\n        \"title\": \"Text: Update Ema\",\n        \"translate\": {\n          \"x\": 9960,\n          \"y\": 2040\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": \"Update Email Address\"\n        },\n        {\n          \"name\": \"Id\",\n          \"value\": \"0\"\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Button\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Text Color\",\n          \"value\": \"blue\"\n        },\n        {\n          \"name\": \"Text Size\",\n          \"value\": \"24px\"\n        },\n        {\n          \"name\": \"Line Height\",\n          \"value\": \"1.5\"\n        },\n        {\n          \"name\": \"Bold\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Background Color\",\n          \"value\": \"rgba(255,255,255,0.0)\"\n        },\n        {\n          \"name\": \"Hover Color\",\n          \"value\": \"rgba(255,255,255,0.01)\"\n        },\n        {\n          \"name\": \"Margin\",\n          \"value\": \"0px 10px\"\n        },\n        {\n          \"name\": \"Padding\",\n          \"value\": \"10px\"\n        },\n        {\n          \"name\": \"Height\",\n          \"value\": \"auto\"\n        },\n        {\n          \"name\": \"Width\",\n          \"value\": \"auto\"\n        },\n        {\n          \"name\": \"Text Align\",\n          \"value\": \"left\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"childs\",\n          \"links\": [\n            {\n              \"portIn\": \"Parent Link\",\n              \"portOut\": \"childs\",\n              \"objIn\": \"kf4sls6em\",\n              \"objOut\": \"a6zvvqqm9\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"a6ccf5c5-2236-4dd4-895e-98b6240f68e1\",\n      \"id\": \"10jgfisf4\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 9384,\n          \"y\": 2380\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Collection name\",\n          \"value\": \"users\"\n        },\n        {\n          \"name\": \"Subcollection name\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Subdocument ID\",\n          \"value\": \"\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Error\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Error Message\"\n        },\n        {\n          \"name\": \"Document\",\n          \"links\": [\n            {\n              \"portIn\": \"Object\",\n              \"portOut\": \"Document\",\n              \"objIn\": \"6c8r58ots\",\n              \"objOut\": \"10jgfisf4\"\n            },\n            {\n              \"portIn\": \"Object\",\n              \"portOut\": \"Document\",\n              \"objIn\": \"fonj9yr5a\",\n              \"objOut\": \"10jgfisf4\"\n            },\n            {\n              \"portIn\": \"Object\",\n              \"portOut\": \"Document\",\n              \"objIn\": \"52sh6c5zw\",\n              \"objOut\": \"10jgfisf4\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Document Not Found\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Success\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Success\",\n              \"objIn\": \"uqo1t8wca\",\n              \"objOut\": \"10jgfisf4\"\n            },\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Success\",\n              \"objIn\": \"gziiy535r\",\n              \"objOut\": \"10jgfisf4\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Failure\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Failure\",\n              \"objIn\": \"s6u6uea2w\",\n              \"objOut\": \"10jgfisf4\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"3ad08cfc-bce6-4175-9746-fef2817a3b12\",\n      \"id\": \"nmqe930id\",\n      \"uiAttribs\": {\n        \"title\": \"var get\",\n        \"translate\": {\n          \"x\": 9420,\n          \"y\": 2300\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"extendTitle\": \"#uid\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Variable\",\n          \"value\": \"uid\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Value\",\n          \"links\": [\n            {\n              \"portIn\": \"Document ID\",\n              \"portOut\": \"Value\",\n              \"objIn\": \"10jgfisf4\",\n              \"objOut\": \"nmqe930id\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"e640619f-235c-4543-bbf8-b358e0283180\",\n      \"id\": \"uqo1t8wca\",\n      \"uiAttribs\": {\n        \"extendTitle\": 9,\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9432,\n          \"y\": 2440\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"timesTriggered\",\n          \"value\": 9\n        }\n      ]\n    },\n    {\n      \"opId\": \"e640619f-235c-4543-bbf8-b358e0283180\",\n      \"id\": \"s6u6uea2w\",\n      \"uiAttribs\": {\n        \"extendTitle\": 0,\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9480,\n          \"y\": 2500\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"timesTriggered\",\n          \"value\": 0\n        }\n      ]\n    },\n    {\n      \"opId\": \"d09bc53e-9f52-4872-94c7-4ef777512222\",\n      \"id\": \"6c8r58ots\",\n      \"uiAttribs\": {\n        \"height\": 220,\n        \"width\": 228,\n        \"resizable\": true,\n        \"vizLayerMaxZoom\": 2500,\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9396,\n          \"y\": 2540\n        },\n        \"extendTitle\": null,\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"ZoomText\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Line Numbers\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Font Size\",\n          \"value\": 10\n        },\n        {\n          \"name\": \"Scroll\",\n          \"value\": 0\n        }\n      ]\n    },\n    {\n      \"opId\": \"497a6b7c-e33c-45e4-8fb2-a9149d972b5b\",\n      \"id\": \"fonj9yr5a\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9108,\n          \"y\": 2520\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null,\n        \"extendTitle\": \"firstName\"\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Path\",\n          \"value\": \"firstName\"\n        },\n        {\n          \"name\": \"Output path if missing\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Output\",\n          \"links\": [\n            {\n              \"portIn\": \"String\",\n              \"portOut\": \"Output\",\n              \"objIn\": \"oc9r6r29m\",\n              \"objOut\": \"fonj9yr5a\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Found\",\n          \"value\": true\n        }\n      ]\n    },\n    {\n      \"opId\": \"497a6b7c-e33c-45e4-8fb2-a9149d972b5b\",\n      \"id\": \"52sh6c5zw\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9132,\n          \"y\": 2660\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null,\n        \"extendTitle\": \"lastName\"\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Path\",\n          \"value\": \"lastName\"\n        },\n        {\n          \"name\": \"Output path if missing\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Output\",\n          \"links\": [\n            {\n              \"portIn\": \"String\",\n              \"portOut\": \"Output\",\n              \"objIn\": \"taijzmngy\",\n              \"objOut\": \"52sh6c5zw\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Found\",\n          \"value\": true\n        }\n      ]\n    },\n    {\n      \"opId\": \"f4ff66b0-8500-46f7-9117-832aea0c2750\",\n      \"id\": \"i1uem15cl\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9384,\n          \"y\": 2240\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"delay\",\n          \"value\": 0.1\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"next\",\n          \"links\": [\n            {\n              \"portIn\": \"Trigger\",\n              \"portOut\": \"next\",\n              \"objIn\": \"10jgfisf4\",\n              \"objOut\": \"i1uem15cl\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Delaying\",\n          \"value\": false\n        }\n      ]\n    },\n    {\n      \"opId\": \"7ef594f3-4907-47b0-a2d3-9854eda1679d\",\n      \"id\": \"pttppd56p\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9252,\n          \"y\": 2900\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"Next\",\n          \"links\": [\n            {\n              \"portIn\": \"Trigger\",\n              \"portOut\": \"Next\",\n              \"objIn\": \"i121vrf5b\",\n              \"objOut\": \"pttppd56p\"\n            },\n            {\n              \"portIn\": \"Clear\",\n              \"portOut\": \"Next\",\n              \"objIn\": \"v3ukmeeju\",\n              \"objOut\": \"pttppd56p\"\n            },\n            {\n              \"portIn\": \"Clear\",\n              \"portOut\": \"Next\",\n              \"objIn\": \"u1d2qf7uz\",\n              \"objOut\": \"pttppd56p\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"86ea2333-b51c-48ed-94c2-8b7b6e9ff34c\",\n      \"id\": \"kv2k3gqqm\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9060,\n          \"y\": 3500\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": \"Group\"\n        },\n        {\n          \"name\": \"Show Title\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Default Minimized\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"childs\",\n          \"links\": [\n            {\n              \"portIn\": \"Parent Link\",\n              \"portOut\": \"childs\",\n              \"objIn\": \"ufhko26rs\",\n              \"objOut\": \"kv2k3gqqm\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"51157250-f52f-4710-a109-b66bef715006\",\n      \"id\": \"ufhko26rs\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9060,\n          \"y\": 3580\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Button Text\",\n          \"value\": \"Update\"\n        },\n        {\n          \"name\": \"Button Width\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Button Background Color\",\n          \"value\": \"rgba(13, 130, 254, 0.9)\"\n        },\n        {\n          \"name\": \"Hover Background Color\",\n          \"value\": \"rgba(13, 130, 254, 1)\"\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Siblings\",\n          \"links\": [\n            {\n              \"portIn\": \"Parent Link\",\n              \"portOut\": \"Siblings\",\n              \"objIn\": \"efhc69wx3\",\n              \"objOut\": \"ufhko26rs\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Button Pressed\",\n          \"links\": [\n            {\n              \"portIn\": \"Check and Create Object\",\n              \"portOut\": \"Button Pressed\",\n              \"objIn\": \"akmnc2d5i\",\n              \"objOut\": \"ufhko26rs\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"51157250-f52f-4710-a109-b66bef715006\",\n      \"id\": \"efhc69wx3\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9060,\n          \"y\": 3700\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Button Text\",\n          \"value\": \"Cancel\"\n        },\n        {\n          \"name\": \"Button Width\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Button Background Color\",\n          \"value\": \"rgba(255,255,255,0.1)\"\n        },\n        {\n          \"name\": \"Hover Background Color\",\n          \"value\": \"rgba(255,255,255,0.2)\"\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Button Pressed\",\n          \"links\": [\n            {\n              \"portIn\": \"n6dz5ut5m\",\n              \"portOut\": \"Button Pressed\",\n              \"objIn\": \"d24cpvgqz\",\n              \"objOut\": \"efhc69wx3\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"d2b46fbf-3db9-44be-9f97-dbb8a0519129\",\n      \"id\": \"bonqk64wg\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9324,\n          \"y\": 3680\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Collection name\",\n          \"value\": \"users\"\n        },\n        {\n          \"name\": \"Operation Type index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Operation Type\",\n          \"value\": \"Update\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Error\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Error Message\",\n          \"links\": [\n            {\n              \"portIn\": \"Text\",\n              \"portOut\": \"Error Message\",\n              \"objIn\": \"qccdkhvsk\",\n              \"objOut\": \"bonqk64wg\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Success\",\n          \"links\": [\n            {\n              \"portIn\": \"Trigger animation\",\n              \"portOut\": \"Success\",\n              \"objIn\": \"8yty9wm3m\",\n              \"objOut\": \"bonqk64wg\"\n            },\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Success\",\n              \"objIn\": \"9ip5toaww\",\n              \"objOut\": \"bonqk64wg\"\n            },\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Success\",\n              \"objIn\": \"x1n7skhc3\",\n              \"objOut\": \"bonqk64wg\"\n            },\n            {\n              \"portIn\": \"n6dz5ut5m\",\n              \"portOut\": \"Success\",\n              \"objIn\": \"sv207k6so\",\n              \"objOut\": \"bonqk64wg\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Failure\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Failure\",\n              \"objIn\": \"zz26rfo36\",\n              \"objOut\": \"bonqk64wg\"\n            },\n            {\n              \"portIn\": \"Trigger animation\",\n              \"portOut\": \"Failure\",\n              \"objIn\": \"qccdkhvsk\",\n              \"objOut\": \"bonqk64wg\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"3ad08cfc-bce6-4175-9746-fef2817a3b12\",\n      \"id\": \"79bvyq508\",\n      \"uiAttribs\": {\n        \"title\": \"var get\",\n        \"translate\": {\n          \"x\": 9336,\n          \"y\": 3620\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"extendTitle\": \"#uid\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Variable\",\n          \"value\": \"uid\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Value\",\n          \"links\": [\n            {\n              \"portIn\": \"Document ID\",\n              \"portOut\": \"Value\",\n              \"objIn\": \"bonqk64wg\",\n              \"objOut\": \"79bvyq508\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"cf3960f3-ced0-4928-9082-a9cf7f8573a6\",\n      \"id\": \"8yty9wm3m\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 9456,\n          \"y\": 3860\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": \"Your name has been updated.\"\n        },\n        {\n          \"name\": \"Class\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Style\",\n          \"value\": \"visibility: hidden;\\nbackground-color: green;\\ncolor: #fff;\\n\\npadding: 16px;\\nposition: absolute;\\nz-index: 999999;\\nfont-size: 17px;\\nopacity:0;\\nborder-radius:10px;\\ntext-align:center;\\nleft: 50%;\\ntransform: translate(-50%, 0);\\n\"\n        },\n        {\n          \"name\": \"Active\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Fade in\",\n          \"value\": 0.5\n        },\n        {\n          \"name\": \"Hold \",\n          \"value\": 2\n        },\n        {\n          \"name\": \"Fade out\",\n          \"value\": 0.8\n        },\n        {\n          \"name\": \"mode index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"mode\",\n          \"value\": \"%\"\n        },\n        {\n          \"name\": \"Side index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Side\",\n          \"value\": \"bottom\"\n        },\n        {\n          \"name\": \"Starting position\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Ending position\",\n          \"value\": 5\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Finished\",\n          \"value\": true\n        }\n      ]\n    },\n    {\n      \"opId\": \"e640619f-235c-4543-bbf8-b358e0283180\",\n      \"id\": \"9ip5toaww\",\n      \"uiAttribs\": {\n        \"extendTitle\": 0,\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9276,\n          \"y\": 3960\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"timesTriggered\",\n          \"value\": 0\n        }\n      ]\n    },\n    {\n      \"opId\": \"e640619f-235c-4543-bbf8-b358e0283180\",\n      \"id\": \"zz26rfo36\",\n      \"uiAttribs\": {\n        \"extendTitle\": 0,\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9300,\n          \"y\": 3920\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"timesTriggered\",\n          \"value\": 0\n        }\n      ]\n    },\n    {\n      \"opId\": \"cf3960f3-ced0-4928-9082-a9cf7f8573a6\",\n      \"id\": \"qccdkhvsk\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 9432,\n          \"y\": 3800\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Class\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Style\",\n          \"value\": \"visibility: hidden;\\nbackground-color: orange;\\ncolor: #fff;\\n\\npadding: 16px;\\nposition: absolute;\\nz-index: 999999;\\nfont-size: 17px;\\nopacity:0;\\nborder-radius:10px;\\ntext-align:center;\\nleft: 50%;\\ntransform: translate(-50%, 0);\\n\"\n        },\n        {\n          \"name\": \"Active\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Fade in\",\n          \"value\": 0.5\n        },\n        {\n          \"name\": \"Hold \",\n          \"value\": 2\n        },\n        {\n          \"name\": \"Fade out\",\n          \"value\": 0.8\n        },\n        {\n          \"name\": \"mode index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"mode\",\n          \"value\": \"%\"\n        },\n        {\n          \"name\": \"Side index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Side\",\n          \"value\": \"bottom\"\n        },\n        {\n          \"name\": \"Starting position\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Ending position\",\n          \"value\": 5\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Finished\",\n          \"value\": false\n        }\n      ]\n    },\n    {\n      \"opId\": \"ce1eaf2b-943b-4dc0-ab5e-ee11b63c9ed0\",\n      \"id\": \"nwxtb1rkw\",\n      \"uiAttribs\": {\n        \"title\": \">updateProfile\",\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9456,\n          \"y\": 3980\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Named Trigger\",\n          \"value\": \"updateProfile\"\n        }\n      ]\n    },\n    {\n      \"opId\": \"f4ff66b0-8500-46f7-9117-832aea0c2750\",\n      \"id\": \"x1n7skhc3\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9456,\n          \"y\": 3920\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"delay\",\n          \"value\": 0.5\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"next\",\n          \"links\": [\n            {\n              \"portIn\": \"Trigger\",\n              \"portOut\": \"next\",\n              \"objIn\": \"nwxtb1rkw\",\n              \"objOut\": \"x1n7skhc3\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Delaying\",\n          \"value\": false\n        }\n      ]\n    },\n    {\n      \"opId\": \"217482b8-2ee6-4609-b7ad-4550e6aaa371\",\n      \"id\": \"taijzmngy\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9108,\n          \"y\": 2740\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"Default\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"u1d2qf7uz\",\n              \"objOut\": \"taijzmngy\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"217482b8-2ee6-4609-b7ad-4550e6aaa371\",\n      \"id\": \"oc9r6r29m\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9072,\n          \"y\": 2580\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"Default\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"v3ukmeeju\",\n              \"objOut\": \"oc9r6r29m\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"f4ff66b0-8500-46f7-9117-832aea0c2750\",\n      \"id\": \"gziiy535r\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9084,\n          \"y\": 2440\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"delay\",\n          \"value\": 0.2\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"next\",\n          \"links\": [\n            {\n              \"portIn\": \"Trigger\",\n              \"portOut\": \"next\",\n              \"objIn\": \"taijzmngy\",\n              \"objOut\": \"gziiy535r\"\n            },\n            {\n              \"portIn\": \"Trigger\",\n              \"portOut\": \"next\",\n              \"objIn\": \"oc9r6r29m\",\n              \"objOut\": \"gziiy535r\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Delaying\",\n          \"value\": false\n        }\n      ]\n    },\n    {\n      \"opId\": \"217482b8-2ee6-4609-b7ad-4550e6aaa371\",\n      \"id\": \"i121vrf5b\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9300,\n          \"y\": 3020\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"String\",\n          \"value\": \"\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"Default\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"v3ukmeeju\",\n              \"objOut\": \"i121vrf5b\"\n            },\n            {\n              \"portIn\": \"Default\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"u1d2qf7uz\",\n              \"objOut\": \"i121vrf5b\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"d09bc53e-9f52-4872-94c7-4ef777512222\",\n      \"id\": \"ztxqlauet\",\n      \"uiAttribs\": {\n        \"height\": 140,\n        \"width\": 168,\n        \"resizable\": true,\n        \"vizLayerMaxZoom\": 2500,\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9468,\n          \"y\": 3520\n        },\n        \"extendTitle\": null,\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"ZoomText\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Line Numbers\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Font Size\",\n          \"value\": 10\n        },\n        {\n          \"name\": \"Scroll\",\n          \"value\": 0\n        }\n      ]\n    },\n    {\n      \"opId\": \"e640619f-235c-4543-bbf8-b358e0283180\",\n      \"id\": \"z4sutg4fn\",\n      \"uiAttribs\": {\n        \"extendTitle\": 0,\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9360,\n          \"y\": 3500\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"timesTriggered\",\n          \"value\": 0\n        }\n      ]\n    },\n    {\n      \"opId\": \"e640619f-235c-4543-bbf8-b358e0283180\",\n      \"id\": \"1maabx06o\",\n      \"uiAttribs\": {\n        \"extendTitle\": 0,\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9384,\n          \"y\": 3460\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"timesTriggered\",\n          \"value\": 0\n        }\n      ]\n    },\n    {\n      \"opId\": \"2c63b0a2-bd0d-4c2b-b22e-b8fb4d1f40cf\",\n      \"id\": \"akmnc2d5i\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9324,\n          \"y\": 3360\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Incoming String 3\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Can't be Blank 1\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Can't be Blank 2\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Can't be Blank 3\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Is Updated 3\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Key String 1\",\n          \"value\": \"firstName\"\n        },\n        {\n          \"name\": \"Key String 2\",\n          \"value\": \"lastName\"\n        },\n        {\n          \"name\": \"Key String 3\",\n          \"value\": \"\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Object Output\",\n          \"links\": [\n            {\n              \"portIn\": \"Object\",\n              \"portOut\": \"Object Output\",\n              \"objIn\": \"ztxqlauet\",\n              \"objOut\": \"akmnc2d5i\"\n            },\n            {\n              \"portIn\": \"Document\",\n              \"portOut\": \"Object Output\",\n              \"objIn\": \"bonqk64wg\",\n              \"objOut\": \"akmnc2d5i\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Trigger Success\",\n          \"links\": [\n            {\n              \"portIn\": \"Trigger\",\n              \"portOut\": \"Trigger Success\",\n              \"objIn\": \"bonqk64wg\",\n              \"objOut\": \"akmnc2d5i\"\n            },\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Trigger Success\",\n              \"objIn\": \"z4sutg4fn\",\n              \"objOut\": \"akmnc2d5i\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Trigger Fail\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Trigger Fail\",\n              \"objIn\": \"1maabx06o\",\n              \"objOut\": \"akmnc2d5i\"\n            },\n            {\n              \"portIn\": \"Trigger animation\",\n              \"portOut\": \"Trigger Fail\",\n              \"objIn\": \"fr46wkg0t\",\n              \"objOut\": \"akmnc2d5i\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"cf3960f3-ced0-4928-9082-a9cf7f8573a6\",\n      \"id\": \"fr46wkg0t\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 9468,\n          \"y\": 3420\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": \"Something went wrong. Update the fields and try again. \"\n        },\n        {\n          \"name\": \"Class\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Style\",\n          \"value\": \"visibility: hidden;\\nbackground-color: orange;\\ncolor: #fff;\\n\\npadding: 16px;\\nposition: absolute;\\nz-index: 999999;\\nfont-size: 17px;\\nopacity:0;\\nborder-radius:10px;\\ntext-align:center;\\nleft: 50%;\\ntransform: translate(-50%, 0);\\n\"\n        },\n        {\n          \"name\": \"Active\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Fade in\",\n          \"value\": 0.5\n        },\n        {\n          \"name\": \"Hold \",\n          \"value\": 2\n        },\n        {\n          \"name\": \"Fade out\",\n          \"value\": 0.8\n        },\n        {\n          \"name\": \"mode index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"mode\",\n          \"value\": \"%\"\n        },\n        {\n          \"name\": \"Side index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Side\",\n          \"value\": \"bottom\"\n        },\n        {\n          \"name\": \"Starting position\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Ending position\",\n          \"value\": 5\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Finished\",\n          \"value\": true\n        }\n      ]\n    },\n    {\n      \"opId\": \"e640619f-235c-4543-bbf8-b358e0283180\",\n      \"id\": \"6kzvjx0ft\",\n      \"uiAttribs\": {\n        \"extendTitle\": 0,\n        \"translate\": {\n          \"x\": 9960,\n          \"y\": 3140\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"trigger\",\n          \"links\": [\n            {\n              \"portIn\": \"Exec\",\n              \"portOut\": \"trigger\",\n              \"objIn\": \"oa7ycsw5t\",\n              \"objOut\": \"6kzvjx0ft\"\n            }\n          ]\n        },\n        {\n          \"name\": \"timesTriggered\",\n          \"value\": 0\n        }\n      ]\n    },\n    {\n      \"opId\": \"e640619f-235c-4543-bbf8-b358e0283180\",\n      \"id\": \"6rqdkgeoh\",\n      \"uiAttribs\": {\n        \"extendTitle\": 0,\n        \"translate\": {\n          \"x\": 9996,\n          \"y\": 3080\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"timesTriggered\",\n          \"value\": 0\n        }\n      ]\n    },\n    {\n      \"opId\": \"11bcb6a3-c260-48b1-82a2-7253de096c8e\",\n      \"id\": \"t4shb7o8j\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9948,\n          \"y\": 2860\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"Update Success\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Update Success\",\n              \"objIn\": \"6kzvjx0ft\",\n              \"objOut\": \"t4shb7o8j\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Update Fail\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Update Fail\",\n              \"objIn\": \"6rqdkgeoh\",\n              \"objOut\": \"t4shb7o8j\"\n            },\n            {\n              \"portIn\": \"Trigger animation\",\n              \"portOut\": \"Update Fail\",\n              \"objIn\": \"5lw7diqsi\",\n              \"objOut\": \"t4shb7o8j\"\n            },\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Update Fail\",\n              \"objIn\": \"1ruc28hs2\",\n              \"objOut\": \"t4shb7o8j\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Update Error\",\n          \"links\": [\n            {\n              \"portIn\": \"Object\",\n              \"portOut\": \"Update Error\",\n              \"objIn\": \"to4m4iz5l\",\n              \"objOut\": \"t4shb7o8j\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"3ad08cfc-bce6-4175-9746-fef2817a3b12\",\n      \"id\": \"j3to2ri7n\",\n      \"uiAttribs\": {\n        \"title\": \"var get\",\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10032,\n          \"y\": 2100\n        },\n        \"extendTitle\": \"#email\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Variable\",\n          \"value\": \"email\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Value\",\n          \"links\": [\n            {\n              \"portIn\": \"String A\",\n              \"portOut\": \"Value\",\n              \"objIn\": \"wjad92fhp\",\n              \"objOut\": \"j3to2ri7n\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"f80d1557-ea53-4949-ab2d-75fbf62b2dc9\",\n      \"id\": \"kf4sls6em\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 9960,\n          \"y\": 2220\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Button Width\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Button Background Color\",\n          \"value\": \"rgba(255, 255, 255, 0.0)\"\n        },\n        {\n          \"name\": \"Hover Background Color\",\n          \"value\": \"rgba(255, 255, 255, 0.0)\"\n        },\n        {\n          \"name\": \"Is Button\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Text Size\",\n          \"value\": \"18px\"\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Siblings\",\n          \"links\": [\n            {\n              \"portIn\": \"link\",\n              \"portOut\": \"Siblings\",\n              \"objIn\": \"x92jnyuhz\",\n              \"objOut\": \"kf4sls6em\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"9236315c-eba9-426b-94a6-4e7ee110a6f9\",\n      \"id\": \"tcgsqrdsw\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 9864,\n          \"y\": 2680\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Label\",\n          \"value\": \"Change your Email Address:\"\n        },\n        {\n          \"name\": \"Default\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Placeholder\",\n          \"value\": \"New Email Address\"\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Max Characters\",\n          \"value\": 100.4\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Children\",\n          \"links\": [\n            {\n              \"portIn\": \"Parent Link\",\n              \"portOut\": \"Children\",\n              \"objIn\": \"e1s7dcwpx\",\n              \"objOut\": \"tcgsqrdsw\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"New Email\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"t4shb7o8j\",\n              \"objOut\": \"tcgsqrdsw\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Focus\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Has Changed\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Is Valid\",\n          \"links\": [\n            {\n              \"portIn\": \"Visible\",\n              \"portOut\": \"Is Valid\",\n              \"objIn\": \"e1s7dcwpx\",\n              \"objOut\": \"tcgsqrdsw\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"3ad08cfc-bce6-4175-9746-fef2817a3b12\",\n      \"id\": \"6i2taupc9\",\n      \"uiAttribs\": {\n        \"title\": \"var get\",\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10356,\n          \"y\": 2220\n        },\n        \"extendTitle\": \"#emailVerified\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Variable\",\n          \"value\": \"emailVerified\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Value\",\n          \"links\": [\n            {\n              \"portIn\": \"String\",\n              \"portOut\": \"Value\",\n              \"objIn\": \"fyh3q9elm\",\n              \"objOut\": \"6i2taupc9\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"51157250-f52f-4710-a109-b66bef715006\",\n      \"id\": \"etqbdie15\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10440,\n          \"y\": 2560\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Button Text\",\n          \"value\": \"Verify Now\"\n        },\n        {\n          \"name\": \"Button Width\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Button Background Color\",\n          \"value\": \"rgba(13, 130, 254, 0.9)\"\n        },\n        {\n          \"name\": \"Hover Background Color\",\n          \"value\": \"rgba(13, 130, 254, 1)\"\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Button Pressed\",\n          \"links\": [\n            {\n              \"portIn\": \"Send Verification Email\",\n              \"portOut\": \"Button Pressed\",\n              \"objIn\": \"u0ynkambi\",\n              \"objOut\": \"etqbdie15\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"86ea2333-b51c-48ed-94c2-8b7b6e9ff34c\",\n      \"id\": \"wzuto192b\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10428,\n          \"y\": 2480\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": \"Group\"\n        },\n        {\n          \"name\": \"Show Title\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Default Minimized\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"childs\",\n          \"links\": [\n            {\n              \"portIn\": \"Parent Link\",\n              \"portOut\": \"childs\",\n              \"objIn\": \"etqbdie15\",\n              \"objOut\": \"wzuto192b\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"51157250-f52f-4710-a109-b66bef715006\",\n      \"id\": \"12e0khbzi\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10236,\n          \"y\": 2540\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Button Text\",\n          \"value\": \"Verified\"\n        },\n        {\n          \"name\": \"Button Width\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Button Background Color\",\n          \"value\": \"rgba(255, 255, 255, 0.1)\"\n        },\n        {\n          \"name\": \"Hover Background Color\",\n          \"value\": \"rgba(255, 255, 255, 0.2)\"\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        }\n      ]\n    },\n    {\n      \"opId\": \"86ea2333-b51c-48ed-94c2-8b7b6e9ff34c\",\n      \"id\": \"pi1gjkhas\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10224,\n          \"y\": 2480\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": \"Group\"\n        },\n        {\n          \"name\": \"Show Title\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Default Minimized\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"childs\",\n          \"links\": [\n            {\n              \"portIn\": \"Parent Link\",\n              \"portOut\": \"childs\",\n              \"objIn\": \"12e0khbzi\",\n              \"objOut\": \"pi1gjkhas\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"92882988-ab61-4c93-8faf-695f6059dc0d\",\n      \"id\": \"fyh3q9elm\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10368,\n          \"y\": 2300\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"Boolean\",\n          \"links\": [\n            {\n              \"portIn\": \"Visible\",\n              \"portOut\": \"Boolean\",\n              \"objIn\": \"pi1gjkhas\",\n              \"objOut\": \"fyh3q9elm\"\n            },\n            {\n              \"portIn\": \"Boolean\",\n              \"portOut\": \"Boolean\",\n              \"objIn\": \"hh3gt1rj1\",\n              \"objOut\": \"fyh3q9elm\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"6d123c9f-7485-4fd9-a5c2-76e59dcbeb34\",\n      \"id\": \"hh3gt1rj1\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10368,\n          \"y\": 2360\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"Visible\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"wzuto192b\",\n              \"objOut\": \"hh3gt1rj1\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"86ea2333-b51c-48ed-94c2-8b7b6e9ff34c\",\n      \"id\": \"4dspnlv0i\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9852,\n          \"y\": 2480\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null,\n        \"extendTitle\": 0\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Show Title\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Default Minimized\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"childs\",\n          \"links\": [\n            {\n              \"portIn\": \"Link\",\n              \"portOut\": \"childs\",\n              \"objIn\": \"tcgsqrdsw\",\n              \"objOut\": \"4dspnlv0i\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"a4502322-281e-4000-8578-de13cc86032a\",\n      \"id\": \"e1s7dcwpx\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9864,\n          \"y\": 2760\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Button Text\",\n          \"value\": \"Change Email\"\n        },\n        {\n          \"name\": \"Button Width\",\n          \"value\": \"100px\"\n        },\n        {\n          \"name\": \"Button Background Color\",\n          \"value\": \"rgba(13, 130, 254, 0.9)\"\n        },\n        {\n          \"name\": \"Hover Background Color\",\n          \"value\": \"rgba(13, 130, 254, 1)\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Button Pressed\",\n          \"links\": [\n            {\n              \"portIn\": \"Update Email\",\n              \"portOut\": \"Button Pressed\",\n              \"objIn\": \"t4shb7o8j\",\n              \"objOut\": \"e1s7dcwpx\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"53a4c519-5c53-4c7a-9f49-200c4016e052\",\n      \"id\": \"u0ynkambi\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10428,\n          \"y\": 2660\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"Verification Email Sent\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Verification Email Sent\",\n              \"objIn\": \"6zk35mh9g\",\n              \"objOut\": \"u0ynkambi\"\n            },\n            {\n              \"portIn\": \"Trigger animation\",\n              \"portOut\": \"Verification Email Sent\",\n              \"objIn\": \"6kyld9yuk\",\n              \"objOut\": \"u0ynkambi\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Verification Email Failed\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Verification Email Failed\",\n              \"objIn\": \"ot28mg7ha\",\n              \"objOut\": \"u0ynkambi\"\n            },\n            {\n              \"portIn\": \"Trigger animation\",\n              \"portOut\": \"Verification Email Failed\",\n              \"objIn\": \"3nm7coxee\",\n              \"objOut\": \"u0ynkambi\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Verification Error\",\n          \"links\": [\n            {\n              \"portIn\": \"Object\",\n              \"portOut\": \"Verification Error\",\n              \"objIn\": \"wnulsebtx\",\n              \"objOut\": \"u0ynkambi\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"e640619f-235c-4543-bbf8-b358e0283180\",\n      \"id\": \"6zk35mh9g\",\n      \"uiAttribs\": {\n        \"extendTitle\": 0,\n        \"translate\": {\n          \"x\": 10428,\n          \"y\": 3020\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"timesTriggered\",\n          \"value\": 0\n        }\n      ]\n    },\n    {\n      \"opId\": \"e640619f-235c-4543-bbf8-b358e0283180\",\n      \"id\": \"ot28mg7ha\",\n      \"uiAttribs\": {\n        \"extendTitle\": 0,\n        \"translate\": {\n          \"x\": 10464,\n          \"y\": 2980\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"timesTriggered\",\n          \"value\": 0\n        }\n      ]\n    },\n    {\n      \"opId\": \"497a6b7c-e33c-45e4-8fb2-a9149d972b5b\",\n      \"id\": \"to4m4iz5l\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10020,\n          \"y\": 2940\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null,\n        \"extendTitle\": \"message\"\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Path\",\n          \"value\": \"message\"\n        },\n        {\n          \"name\": \"Output path if missing\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Output\",\n          \"links\": [\n            {\n              \"portIn\": \"Text\",\n              \"portOut\": \"Output\",\n              \"objIn\": \"5lw7diqsi\",\n              \"objOut\": \"to4m4iz5l\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Found\",\n          \"value\": false\n        }\n      ]\n    },\n    {\n      \"opId\": \"cf3960f3-ced0-4928-9082-a9cf7f8573a6\",\n      \"id\": \"5lw7diqsi\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 9996,\n          \"y\": 3000\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Class\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Style\",\n          \"value\": \"visibility: hidden;\\nbackground-color: orange;\\ncolor: #fff;\\n\\npadding: 16px;\\nposition: absolute;\\nz-index: 999999;\\nfont-size: 17px;\\nopacity:0;\\nborder-radius:10px;\\ntext-align:center;\\nleft: 50%;\\ntransform: translate(-50%, 0);\\n\"\n        },\n        {\n          \"name\": \"Active\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Fade in\",\n          \"value\": 0.5\n        },\n        {\n          \"name\": \"Hold \",\n          \"value\": 5\n        },\n        {\n          \"name\": \"Fade out\",\n          \"value\": 0.8\n        },\n        {\n          \"name\": \"mode index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"mode\",\n          \"value\": \"%\"\n        },\n        {\n          \"name\": \"Side index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Side\",\n          \"value\": \"bottom\"\n        },\n        {\n          \"name\": \"Starting position\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Ending position\",\n          \"value\": 5\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Finished\",\n          \"value\": true\n        }\n      ]\n    },\n    {\n      \"opId\": \"ce1eaf2b-943b-4dc0-ab5e-ee11b63c9ed0\",\n      \"id\": \"lohyhcx9u\",\n      \"uiAttribs\": {\n        \"title\": \">logout\",\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9852,\n          \"y\": 3100\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Named Trigger\",\n          \"value\": \"logout\"\n        }\n      ]\n    },\n    {\n      \"opId\": \"f4ff66b0-8500-46f7-9117-832aea0c2750\",\n      \"id\": \"1ruc28hs2\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9852,\n          \"y\": 3040\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"delay\",\n          \"value\": 3\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"next\",\n          \"links\": [\n            {\n              \"portIn\": \"Trigger\",\n              \"portOut\": \"next\",\n              \"objIn\": \"lohyhcx9u\",\n              \"objOut\": \"1ruc28hs2\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Delaying\",\n          \"value\": false\n        }\n      ]\n    },\n    {\n      \"opId\": \"d0060a4e-ffed-4a8d-8f6d-bfd9a23319de\",\n      \"id\": \"oa7ycsw5t\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9960,\n          \"y\": 3200\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {}\n    },\n    {\n      \"opId\": \"cf3960f3-ced0-4928-9082-a9cf7f8573a6\",\n      \"id\": \"3nm7coxee\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 10488,\n          \"y\": 2780\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Class\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Style\",\n          \"value\": \"visibility: hidden;\\nbackground-color: orange;\\ncolor: #fff;\\n\\npadding: 16px;\\nposition: absolute;\\nz-index: 999999;\\nfont-size: 17px;\\nopacity:0;\\nborder-radius:10px;\\ntext-align:center;\\nleft: 50%;\\ntransform: translate(-50%, 0);\\n\"\n        },\n        {\n          \"name\": \"Active\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Fade in\",\n          \"value\": 0.5\n        },\n        {\n          \"name\": \"Hold \",\n          \"value\": 10\n        },\n        {\n          \"name\": \"Fade out\",\n          \"value\": 0.8\n        },\n        {\n          \"name\": \"mode index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"mode\",\n          \"value\": \"%\"\n        },\n        {\n          \"name\": \"Side index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Side\",\n          \"value\": \"bottom\"\n        },\n        {\n          \"name\": \"Starting position\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Ending position\",\n          \"value\": 5\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Finished\",\n          \"value\": false\n        }\n      ]\n    },\n    {\n      \"opId\": \"cf3960f3-ced0-4928-9082-a9cf7f8573a6\",\n      \"id\": \"6kyld9yuk\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 10488,\n          \"y\": 2860\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": \"Please check your inbox for our email. Click on the link provided in the email and refresh this page after verifying your email address.\"\n        },\n        {\n          \"name\": \"Class\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Style\",\n          \"value\": \"visibility: hidden;\\nbackground-color: green;\\ncolor: #fff;\\n\\npadding: 16px;\\nposition: absolute;\\nz-index: 999999;\\nfont-size: 17px;\\nopacity:0;\\nborder-radius:10px;\\ntext-align:center;\\nleft: 50%;\\ntransform: translate(-50%, 0);\\n\"\n        },\n        {\n          \"name\": \"Active\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Fade in\",\n          \"value\": 0.5\n        },\n        {\n          \"name\": \"Hold \",\n          \"value\": 10\n        },\n        {\n          \"name\": \"Fade out\",\n          \"value\": 0.8\n        },\n        {\n          \"name\": \"mode index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"mode\",\n          \"value\": \"%\"\n        },\n        {\n          \"name\": \"Side index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Side\",\n          \"value\": \"bottom\"\n        },\n        {\n          \"name\": \"Starting position\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Ending position\",\n          \"value\": 5\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Finished\",\n          \"value\": true\n        }\n      ]\n    },\n    {\n      \"opId\": \"497a6b7c-e33c-45e4-8fb2-a9149d972b5b\",\n      \"id\": \"wnulsebtx\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10500,\n          \"y\": 2720\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Path\",\n          \"value\": \"message\"\n        },\n        {\n          \"name\": \"Output path if missing\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Output\",\n          \"links\": [\n            {\n              \"portIn\": \"Text\",\n              \"portOut\": \"Output\",\n              \"objIn\": \"3nm7coxee\",\n              \"objOut\": \"wnulsebtx\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Found\",\n          \"value\": false\n        }\n      ]\n    },\n    {\n      \"opId\": \"4d16ae29-1e59-489c-b582-14213a3f4ff6\",\n      \"id\": \"e7ej4b347\",\n      \"uiAttribs\": {\n        \"title\": \"Text: Change Pas\",\n        \"translate\": {\n          \"x\": 10956,\n          \"y\": 1940\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": \"Change Password:\"\n        },\n        {\n          \"name\": \"Id\",\n          \"value\": \"0\"\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Button\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Text Color\",\n          \"value\": \"blue\"\n        },\n        {\n          \"name\": \"Text Size\",\n          \"value\": \"24px\"\n        },\n        {\n          \"name\": \"Line Height\",\n          \"value\": \"1.5\"\n        },\n        {\n          \"name\": \"Bold\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Background Color\",\n          \"value\": \"rgba(255,255,255,0.0)\"\n        },\n        {\n          \"name\": \"Hover Color\",\n          \"value\": \"rgba(255,255,255,0.01)\"\n        },\n        {\n          \"name\": \"Margin\",\n          \"value\": \"0px 10px\"\n        },\n        {\n          \"name\": \"Padding\",\n          \"value\": \"10px\"\n        },\n        {\n          \"name\": \"Height\",\n          \"value\": \"auto\"\n        },\n        {\n          \"name\": \"Width\",\n          \"value\": \"auto\"\n        },\n        {\n          \"name\": \"Text Align\",\n          \"value\": \"left\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"childs\",\n          \"links\": [\n            {\n              \"portIn\": \"Link\",\n              \"portOut\": \"childs\",\n              \"objIn\": \"to668hw3s\",\n              \"objOut\": \"e7ej4b347\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"38f79614-b0de-4960-8da5-2827e7f43415\",\n      \"id\": \"oif73wwp8\",\n      \"uiAttribs\": {\n        \"hasArea\": true,\n        \"comment_title\": \"5 password\",\n        \"translate\": {\n          \"x\": 10848,\n          \"y\": 1480\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"area\": {\n          \"w\": 720,\n          \"h\": 1380,\n          \"id\": \"1plb5rbpy\"\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Title\",\n          \"value\": \"5 password\"\n        }\n      ]\n    },\n    {\n      \"opId\": \"e640619f-235c-4543-bbf8-b358e0283180\",\n      \"id\": \"grc6q2rtw\",\n      \"uiAttribs\": {\n        \"extendTitle\": 0,\n        \"translate\": {\n          \"x\": 11100,\n          \"y\": 2740\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"timesTriggered\",\n          \"value\": 0\n        }\n      ]\n    },\n    {\n      \"opId\": \"e640619f-235c-4543-bbf8-b358e0283180\",\n      \"id\": \"i495rfq5s\",\n      \"uiAttribs\": {\n        \"extendTitle\": 0,\n        \"translate\": {\n          \"x\": 11124,\n          \"y\": 2700\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"timesTriggered\",\n          \"value\": 0\n        }\n      ]\n    },\n    {\n      \"opId\": \"cf3960f3-ced0-4928-9082-a9cf7f8573a6\",\n      \"id\": \"fwhcnj1t5\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 11160,\n          \"y\": 2540\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Class\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Style\",\n          \"value\": \"visibility: hidden;\\nbackground-color: orange;\\ncolor: #fff;\\n\\npadding: 16px;\\nposition: absolute;\\nz-index: 999999;\\nfont-size: 17px;\\nopacity:0;\\nborder-radius:10px;\\ntext-align:center;\\nleft: 50%;\\ntransform: translate(-50%, 0);\\n\"\n        },\n        {\n          \"name\": \"Active\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Fade in\",\n          \"value\": 0.5\n        },\n        {\n          \"name\": \"Hold \",\n          \"value\": 6\n        },\n        {\n          \"name\": \"Fade out\",\n          \"value\": 0.8\n        },\n        {\n          \"name\": \"mode index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"mode\",\n          \"value\": \"%\"\n        },\n        {\n          \"name\": \"Side index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Side\",\n          \"value\": \"bottom\"\n        },\n        {\n          \"name\": \"Starting position\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Ending position\",\n          \"value\": 5\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Finished\",\n          \"value\": true\n        }\n      ]\n    },\n    {\n      \"opId\": \"cf3960f3-ced0-4928-9082-a9cf7f8573a6\",\n      \"id\": \"12v4mejl3\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 11160,\n          \"y\": 2620\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": \"Password Changed\"\n        },\n        {\n          \"name\": \"Class\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Style\",\n          \"value\": \"visibility: hidden;\\nbackground-color: green;\\ncolor: #fff;\\n\\npadding: 16px;\\nposition: absolute;\\nz-index: 999999;\\nfont-size: 17px;\\nopacity:0;\\nborder-radius:10px;\\ntext-align:center;\\nleft: 50%;\\ntransform: translate(-50%, 0);\\n\"\n        },\n        {\n          \"name\": \"Active\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Fade in\",\n          \"value\": 0.5\n        },\n        {\n          \"name\": \"Hold \",\n          \"value\": 5\n        },\n        {\n          \"name\": \"Fade out\",\n          \"value\": 0.8\n        },\n        {\n          \"name\": \"mode index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"mode\",\n          \"value\": \"%\"\n        },\n        {\n          \"name\": \"Side index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Side\",\n          \"value\": \"bottom\"\n        },\n        {\n          \"name\": \"Starting position\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Ending position\",\n          \"value\": 5\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Finished\",\n          \"value\": true\n        }\n      ]\n    },\n    {\n      \"opId\": \"497a6b7c-e33c-45e4-8fb2-a9149d972b5b\",\n      \"id\": \"3b2szcgqh\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 11184,\n          \"y\": 2480\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null,\n        \"extendTitle\": \"message\"\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Path\",\n          \"value\": \"message\"\n        },\n        {\n          \"name\": \"Output path if missing\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Output\",\n          \"links\": [\n            {\n              \"portIn\": \"Text\",\n              \"portOut\": \"Output\",\n              \"objIn\": \"fwhcnj1t5\",\n              \"objOut\": \"3b2szcgqh\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Found\",\n          \"value\": false\n        }\n      ]\n    },\n    {\n      \"opId\": \"6deb6544-b794-4310-8657-3b6fc85afbe8\",\n      \"id\": \"to668hw3s\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10956,\n          \"y\": 2040\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Label\",\n          \"value\": \"Old Password\"\n        },\n        {\n          \"name\": \"Default\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Placeholder\",\n          \"value\": \"Old Password\"\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Max Characters\",\n          \"value\": 100\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Children\",\n          \"links\": [\n            {\n              \"portIn\": \"Link\",\n              \"portOut\": \"Children\",\n              \"objIn\": \"uknd9u62r\",\n              \"objOut\": \"to668hw3s\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"Old Password\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"firhw5wsf\",\n              \"objOut\": \"to668hw3s\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Focus\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Has Changed\",\n          \"value\": false\n        }\n      ]\n    },\n    {\n      \"opId\": \"4cd52d32-07bc-464a-880d-3844750bef60\",\n      \"id\": \"firhw5wsf\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 11100,\n          \"y\": 2380\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"Password Change Success\",\n          \"links\": [\n            {\n              \"portIn\": \"Trigger animation\",\n              \"portOut\": \"Password Change Success\",\n              \"objIn\": \"12v4mejl3\",\n              \"objOut\": \"firhw5wsf\"\n            },\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Password Change Success\",\n              \"objIn\": \"grc6q2rtw\",\n              \"objOut\": \"firhw5wsf\"\n            },\n            {\n              \"portIn\": \"n6dz5ut5m\",\n              \"portOut\": \"Password Change Success\",\n              \"objIn\": \"jt5tlu8ca\",\n              \"objOut\": \"firhw5wsf\"\n            },\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Password Change Success\",\n              \"objIn\": \"oxqwqnhwu\",\n              \"objOut\": \"firhw5wsf\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Password Change Fail\",\n          \"links\": [\n            {\n              \"portIn\": \"Trigger animation\",\n              \"portOut\": \"Password Change Fail\",\n              \"objIn\": \"fwhcnj1t5\",\n              \"objOut\": \"firhw5wsf\"\n            },\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Password Change Fail\",\n              \"objIn\": \"i495rfq5s\",\n              \"objOut\": \"firhw5wsf\"\n            },\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Password Change Fail\",\n              \"objIn\": \"oxqwqnhwu\",\n              \"objOut\": \"firhw5wsf\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Password Change Error\",\n          \"links\": [\n            {\n              \"portIn\": \"Object\",\n              \"portOut\": \"Password Change Error\",\n              \"objIn\": \"3b2szcgqh\",\n              \"objOut\": \"firhw5wsf\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"6deb6544-b794-4310-8657-3b6fc85afbe8\",\n      \"id\": \"uknd9u62r\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10956,\n          \"y\": 2120\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Label\",\n          \"value\": \"New Password\"\n        },\n        {\n          \"name\": \"Default\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Placeholder\",\n          \"value\": \"New Password\"\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Max Characters\",\n          \"value\": 100\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Children\",\n          \"links\": [\n            {\n              \"portIn\": \"Link\",\n              \"portOut\": \"Children\",\n              \"objIn\": \"8xxbvhb33\",\n              \"objOut\": \"uknd9u62r\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"New Password\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"firhw5wsf\",\n              \"objOut\": \"uknd9u62r\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Focus\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Has Changed\",\n          \"value\": false\n        }\n      ]\n    },\n    {\n      \"opId\": \"6deb6544-b794-4310-8657-3b6fc85afbe8\",\n      \"id\": \"8xxbvhb33\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10956,\n          \"y\": 2200\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Label\",\n          \"value\": \"Confirm New Password\"\n        },\n        {\n          \"name\": \"Default\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Placeholder\",\n          \"value\": \"Confirm New Password\"\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Max Characters\",\n          \"value\": 100\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Children\",\n          \"links\": [\n            {\n              \"portIn\": \"Parent Link\",\n              \"portOut\": \"Children\",\n              \"objIn\": \"cdokdacwp\",\n              \"objOut\": \"8xxbvhb33\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"Confirm New Password\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"firhw5wsf\",\n              \"objOut\": \"8xxbvhb33\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Focus\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Has Changed\",\n          \"value\": false\n        }\n      ]\n    },\n    {\n      \"opId\": \"51157250-f52f-4710-a109-b66bef715006\",\n      \"id\": \"cdokdacwp\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10956,\n          \"y\": 2280\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Button Text\",\n          \"value\": \"Change Password\"\n        },\n        {\n          \"name\": \"Button Width\",\n          \"value\": \"130px\"\n        },\n        {\n          \"name\": \"Button Background Color\",\n          \"value\": \"#007bff\"\n        },\n        {\n          \"name\": \"Hover Background Color\",\n          \"value\": \"rgba(13, 130, 254, 1)\"\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Button Pressed\",\n          \"links\": [\n            {\n              \"portIn\": \"Change Password\",\n              \"portOut\": \"Button Pressed\",\n              \"objIn\": \"firhw5wsf\",\n              \"objOut\": \"cdokdacwp\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"b3b36238-4592-4e11-afe3-8361c4fd6be5\",\n      \"id\": \"toooosp5e\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9132,\n          \"y\": 3380\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"bool 3\",\n          \"value\": false\n        },\n        {\n          \"name\": \"bool 4\",\n          \"value\": false\n        },\n        {\n          \"name\": \"bool 5\",\n          \"value\": false\n        },\n        {\n          \"name\": \"bool 6\",\n          \"value\": false\n        },\n        {\n          \"name\": \"bool 7\",\n          \"value\": false\n        },\n        {\n          \"name\": \"bool 8\",\n          \"value\": false\n        },\n        {\n          \"name\": \"bool 9\",\n          \"value\": false\n        },\n        {\n          \"name\": \"bool 10\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"result\",\n          \"links\": [\n            {\n              \"portIn\": \"Visible\",\n              \"portOut\": \"result\",\n              \"objIn\": \"kv2k3gqqm\",\n              \"objOut\": \"toooosp5e\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"86ea2333-b51c-48ed-94c2-8b7b6e9ff34c\",\n      \"id\": \"yuhr7duky\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9060,\n          \"y\": 1860\n        },\n        \"extendTitle\": \"\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Show Title\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Default Minimized\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"childs\",\n          \"links\": [\n            {\n              \"portIn\": \"link\",\n              \"portOut\": \"childs\",\n              \"objIn\": \"ow1ssfqnk\",\n              \"objOut\": \"yuhr7duky\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"86ea2333-b51c-48ed-94c2-8b7b6e9ff34c\",\n      \"id\": \"4uk1ey6gs\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9948,\n          \"y\": 1960\n        },\n        \"extendTitle\": \"\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Show Title\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Default Minimized\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"childs\",\n          \"links\": [\n            {\n              \"portIn\": \"link\",\n              \"portOut\": \"childs\",\n              \"objIn\": \"a6zvvqqm9\",\n              \"objOut\": \"4uk1ey6gs\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"86ea2333-b51c-48ed-94c2-8b7b6e9ff34c\",\n      \"id\": \"itbm3o4fn\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10932,\n          \"y\": 1820\n        },\n        \"extendTitle\": \"\",\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Show Title\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Default Minimized\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"childs\",\n          \"links\": [\n            {\n              \"portIn\": \"link\",\n              \"portOut\": \"childs\",\n              \"objIn\": \"e7ej4b347\",\n              \"objOut\": \"itbm3o4fn\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"7ef594f3-4907-47b0-a2d3-9854eda1679d\",\n      \"id\": \"o9x18sklg\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9300,\n          \"y\": 1940\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"Next\",\n          \"links\": [\n            {\n              \"portIn\": \"Execute\",\n              \"portOut\": \"Next\",\n              \"objIn\": \"pttppd56p\",\n              \"objOut\": \"o9x18sklg\"\n            },\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Next\",\n              \"objIn\": \"j849uucro\",\n              \"objOut\": \"o9x18sklg\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"a4502322-281e-4000-8578-de13cc86032a\",\n      \"id\": \"ecx5rj4wq\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 8160,\n          \"y\": 280\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Button Text\",\n          \"value\": \"< Back\"\n        },\n        {\n          \"name\": \"Button Width\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Button Background Color\",\n          \"value\": \"rgba(255,255,255,0.0)\"\n        },\n        {\n          \"name\": \"Hover Background Color\",\n          \"value\": \"rgba(255,255,255,0.1)\"\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Siblings\",\n          \"links\": [\n            {\n              \"portIn\": \"zzd2dk99r\",\n              \"portOut\": \"Siblings\",\n              \"objIn\": \"z7vz5wkyl\",\n              \"objOut\": \"ecx5rj4wq\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Button Pressed\",\n          \"links\": [\n            {\n              \"portIn\": \"n6dz5ut5m\",\n              \"portOut\": \"Button Pressed\",\n              \"objIn\": \"2lo3nmf4n\",\n              \"objOut\": \"ecx5rj4wq\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"a43f61db-3cf5-460b-908f-279e4e9bde23\",\n      \"id\": \"v3ukmeeju\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9060,\n          \"y\": 3140\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Label\",\n          \"value\": \"First Name: \"\n        },\n        {\n          \"name\": \"Placeholder\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Max Characters\",\n          \"value\": 100\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Children\",\n          \"links\": [\n            {\n              \"portIn\": \"Link\",\n              \"portOut\": \"Children\",\n              \"objIn\": \"u1d2qf7uz\",\n              \"objOut\": \"v3ukmeeju\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"Incoming String 1\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"akmnc2d5i\",\n              \"objOut\": \"v3ukmeeju\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Focus\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Has Changed\",\n          \"links\": [\n            {\n              \"portIn\": \"bool 2\",\n              \"portOut\": \"Has Changed\",\n              \"objIn\": \"toooosp5e\",\n              \"objOut\": \"v3ukmeeju\"\n            },\n            {\n              \"portIn\": \"Is Updated 1\",\n              \"portOut\": \"Has Changed\",\n              \"objIn\": \"akmnc2d5i\",\n              \"objOut\": \"v3ukmeeju\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"a43f61db-3cf5-460b-908f-279e4e9bde23\",\n      \"id\": \"u1d2qf7uz\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9060,\n          \"y\": 3240\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Label\",\n          \"value\": \"Last Name: \"\n        },\n        {\n          \"name\": \"Placeholder\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Max Characters\",\n          \"value\": 100\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Children\",\n          \"links\": [\n            {\n              \"portIn\": \"link\",\n              \"portOut\": \"Children\",\n              \"objIn\": \"kv2k3gqqm\",\n              \"objOut\": \"u1d2qf7uz\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"Incoming String 2\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"akmnc2d5i\",\n              \"objOut\": \"u1d2qf7uz\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Focus\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Has Changed\",\n          \"links\": [\n            {\n              \"portIn\": \"bool 1\",\n              \"portOut\": \"Has Changed\",\n              \"objIn\": \"toooosp5e\",\n              \"objOut\": \"u1d2qf7uz\"\n            },\n            {\n              \"portIn\": \"Is Updated 2\",\n              \"portOut\": \"Has Changed\",\n              \"objIn\": \"akmnc2d5i\",\n              \"objOut\": \"u1d2qf7uz\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"b055a923-58b3-4b46-80d1-cd522d5f4cca\",\n      \"id\": \"2lo3nmf4n\",\n      \"uiAttribs\": {\n        \"subPatchOp\": {\n          \"version\": 2\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 8292,\n          \"y\": 340\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {\n        \"blueprintVer\": 2,\n        \"subPatchVer\": 2\n      },\n      \"portsIn\": [\n        {\n          \"name\": \"n6dz5ut5m\",\n          \"title\": \"Trigger\"\n        },\n        {\n          \"name\": \"lgwr24sd3\",\n          \"value\": \"b\",\n          \"title\": \"Directory 1\"\n        },\n        {\n          \"name\": \"t9sx2ey0f\",\n          \"value\": \"\",\n          \"title\": \"Directory 2\"\n        },\n        {\n          \"name\": \"1ovs04j4c\",\n          \"value\": \"\",\n          \"title\": \"Directory 3\"\n        },\n        {\n          \"name\": \"l3dmhco3f\",\n          \"value\": \"\",\n          \"title\": \"Directory 4\"\n        },\n        {\n          \"name\": \"u4qh8rfom\",\n          \"value\": \"\",\n          \"title\": \"Directory 5\"\n        },\n        {\n          \"name\": \"patchId\",\n          \"value\": \"abkholdnc\"\n        }\n      ]\n    },\n    {\n      \"opId\": \"c4e4e933-136e-479e-8de8-0b35b75d9217\",\n      \"id\": \"7un7xl13k\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 8160,\n          \"y\": 200\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"innerOut_i6nnsru1m\",\n          \"title\": \"Parent Link\",\n          \"links\": [\n            {\n              \"portIn\": \"Parent Link\",\n              \"portOut\": \"innerOut_i6nnsru1m\",\n              \"objIn\": \"ecx5rj4wq\",\n              \"objOut\": \"7un7xl13k\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_zap5t5tri\",\n          \"title\": \"Mainloop\",\n          \"links\": [\n            {\n              \"portIn\": \"0as2n77e5\",\n              \"portOut\": \"innerOut_zap5t5tri\",\n              \"objIn\": \"z7vz5wkyl\",\n              \"objOut\": \"7un7xl13k\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_9ozpectyq\",\n          \"title\": \"Hash Changed\",\n          \"links\": [\n            {\n              \"portIn\": \"eabt3o2x7\",\n              \"portOut\": \"innerOut_9ozpectyq\",\n              \"objIn\": \"z7vz5wkyl\",\n              \"objOut\": \"7un7xl13k\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"02d45073-7936-4830-81ad-59a162febf1f\",\n      \"id\": \"cfqzec6b1\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 8160,\n          \"y\": 4060\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {}\n    },\n    {\n      \"opId\": \"b8f61f61-1cd4-4fc6-9518-2bc6fb1a8718\",\n      \"id\": \"z7vz5wkyl\",\n      \"uiAttribs\": {\n        \"subPatchOp\": {\n          \"version\": 2\n        },\n        \"translate\": {\n          \"x\": 10068,\n          \"y\": 1000\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {\n        \"blueprintVer\": 2,\n        \"subPatchVer\": 2\n      },\n      \"portsIn\": [\n        {\n          \"name\": \"zzd2dk99r\",\n          \"title\": \"Parent Link\"\n        },\n        {\n          \"name\": \"0as2n77e5\",\n          \"title\": \"Mainloop\"\n        },\n        {\n          \"name\": \"eabt3o2x7\",\n          \"title\": \"Hash Changed\"\n        },\n        {\n          \"name\": \"patchId\",\n          \"value\": \"v01i0q8cv\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"37k6sbwik\",\n          \"title\": \"Parent Link\",\n          \"links\": [\n            {\n              \"portIn\": \"4lursd3if\",\n              \"portOut\": \"37k6sbwik\",\n              \"objIn\": \"hal25v0b3\",\n              \"objOut\": \"z7vz5wkyl\"\n            },\n            {\n              \"portIn\": \"4lursd3if\",\n              \"portOut\": \"37k6sbwik\",\n              \"objIn\": \"qhzpc0pu6\",\n              \"objOut\": \"z7vz5wkyl\"\n            },\n            {\n              \"portIn\": \"4lursd3if\",\n              \"portOut\": \"37k6sbwik\",\n              \"objIn\": \"4kmqbrx3g\",\n              \"objOut\": \"z7vz5wkyl\"\n            }\n          ]\n        },\n        {\n          \"name\": \"o4ucc2fcw\",\n          \"title\": \"Mainloop\",\n          \"links\": [\n            {\n              \"portIn\": \"f8aa3pksk\",\n              \"portOut\": \"o4ucc2fcw\",\n              \"objIn\": \"hal25v0b3\",\n              \"objOut\": \"z7vz5wkyl\"\n            },\n            {\n              \"portIn\": \"f8aa3pksk\",\n              \"portOut\": \"o4ucc2fcw\",\n              \"objIn\": \"qhzpc0pu6\",\n              \"objOut\": \"z7vz5wkyl\"\n            },\n            {\n              \"portIn\": \"f8aa3pksk\",\n              \"portOut\": \"o4ucc2fcw\",\n              \"objIn\": \"4kmqbrx3g\",\n              \"objOut\": \"z7vz5wkyl\"\n            }\n          ]\n        },\n        {\n          \"name\": \"r4xu39dfu\",\n          \"title\": \"Hash Changed\",\n          \"links\": [\n            {\n              \"portIn\": \"wb8ht3wlb\",\n              \"portOut\": \"r4xu39dfu\",\n              \"objIn\": \"hal25v0b3\",\n              \"objOut\": \"z7vz5wkyl\"\n            },\n            {\n              \"portIn\": \"wb8ht3wlb\",\n              \"portOut\": \"r4xu39dfu\",\n              \"objIn\": \"qhzpc0pu6\",\n              \"objOut\": \"z7vz5wkyl\"\n            },\n            {\n              \"portIn\": \"wb8ht3wlb\",\n              \"portOut\": \"r4xu39dfu\",\n              \"objIn\": \"4kmqbrx3g\",\n              \"objOut\": \"z7vz5wkyl\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"38f79614-b0de-4960-8da5-2827e7f43415\",\n      \"id\": \"glfi1ik2n\",\n      \"uiAttribs\": {\n        \"hasArea\": true,\n        \"comment_title\": \"PageRouter\",\n        \"translate\": {\n          \"x\": 9912,\n          \"y\": 860\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"area\": {\n          \"w\": 384,\n          \"h\": 220,\n          \"id\": \"6crfpt0jw\"\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Title\",\n          \"value\": \"PageRouter\"\n        }\n      ]\n    },\n    {\n      \"opId\": \"7ef594f3-4907-47b0-a2d3-9854eda1679d\",\n      \"id\": \"skvm53fn8\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9324,\n          \"y\": 1780\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {}\n    },\n    {\n      \"opId\": \"e640619f-235c-4543-bbf8-b358e0283180\",\n      \"id\": \"v361z0rcg\",\n      \"uiAttribs\": {\n        \"extendTitle\": 9,\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9324,\n          \"y\": 1720\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"timesTriggered\",\n          \"value\": 9\n        }\n      ]\n    },\n    {\n      \"opId\": \"1f610fe2-cc44-411a-a910-01c289272e67\",\n      \"id\": \"hal25v0b3\",\n      \"uiAttribs\": {\n        \"subPatchOp\": {\n          \"version\": 2\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9060,\n          \"y\": 1660\n        },\n        \"color\": \"#F0D165\",\n        \"blueprintSubpatch2\": true,\n        \"extendTitlePort\": \"wg0zcmxag\"\n      },\n      \"storage\": {\n        \"blueprintVer\": 2,\n        \"subPatchVer\": 2\n      },\n      \"portsIn\": [\n        {\n          \"name\": \"4lursd3if\",\n          \"title\": \"Parent Link\"\n        },\n        {\n          \"name\": \"a0hazs8qu\",\n          \"value\": \"c\",\n          \"title\": \"Directory 1\"\n        },\n        {\n          \"name\": \"jyz85fved\",\n          \"value\": \"name\",\n          \"title\": \"Directory 2\"\n        },\n        {\n          \"name\": \"bxzssu5p7\",\n          \"value\": \"\",\n          \"title\": \"Directory 3\"\n        },\n        {\n          \"name\": \"f8aa3pksk\",\n          \"title\": \"Mainloop\"\n        },\n        {\n          \"name\": \"wb8ht3wlb\",\n          \"title\": \"Hash Changed\"\n        },\n        {\n          \"name\": \"patchId\",\n          \"value\": \"k7xkznlr4\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"vjfo5caql\",\n          \"title\": \"Parent Link\",\n          \"links\": [\n            {\n              \"portIn\": \"link\",\n              \"portOut\": \"vjfo5caql\",\n              \"objIn\": \"yuhr7duky\",\n              \"objOut\": \"hal25v0b3\"\n            }\n          ]\n        },\n        {\n          \"name\": \"rgkrndn64\",\n          \"title\": \"Mainloop\",\n          \"links\": [\n            {\n              \"portIn\": \"Execute\",\n              \"portOut\": \"rgkrndn64\",\n              \"objIn\": \"skvm53fn8\",\n              \"objOut\": \"hal25v0b3\"\n            }\n          ]\n        },\n        {\n          \"name\": \"iyq4pnlwm\",\n          \"title\": \"Hash Changed\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"iyq4pnlwm\",\n              \"objIn\": \"v361z0rcg\",\n              \"objOut\": \"hal25v0b3\"\n            },\n            {\n              \"portIn\": \"Execute\",\n              \"portOut\": \"iyq4pnlwm\",\n              \"objIn\": \"o9x18sklg\",\n              \"objOut\": \"hal25v0b3\"\n            }\n          ]\n        },\n        {\n          \"name\": \"wg0zcmxag\",\n          \"title\": \"Dir 1-2 Equal\",\n          \"links\": [\n            {\n              \"portIn\": \"Visible\",\n              \"portOut\": \"wg0zcmxag\",\n              \"objIn\": \"yuhr7duky\",\n              \"objOut\": \"hal25v0b3\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"b055a923-58b3-4b46-80d1-cd522d5f4cca\",\n      \"id\": \"sv207k6so\",\n      \"uiAttribs\": {\n        \"subPatchOp\": {\n          \"version\": 2\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9528,\n          \"y\": 3760\n        },\n        \"tempSubOldOpId\": null,\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {\n        \"blueprintVer\": 2,\n        \"subPatchVer\": 2\n      },\n      \"portsIn\": [\n        {\n          \"name\": \"n6dz5ut5m\",\n          \"title\": \"Trigger\"\n        },\n        {\n          \"name\": \"lgwr24sd3\",\n          \"value\": \"b\",\n          \"title\": \"Directory 1\"\n        },\n        {\n          \"name\": \"t9sx2ey0f\",\n          \"value\": \"\",\n          \"title\": \"Directory 2\"\n        },\n        {\n          \"name\": \"1ovs04j4c\",\n          \"value\": \"\",\n          \"title\": \"Directory 3\"\n        },\n        {\n          \"name\": \"l3dmhco3f\",\n          \"value\": \"\",\n          \"title\": \"Directory 4\"\n        },\n        {\n          \"name\": \"u4qh8rfom\",\n          \"value\": \"\",\n          \"title\": \"Directory 5\"\n        },\n        {\n          \"name\": \"patchId\",\n          \"value\": \"0t6mq640n\"\n        }\n      ]\n    },\n    {\n      \"opId\": \"b055a923-58b3-4b46-80d1-cd522d5f4cca\",\n      \"id\": \"d24cpvgqz\",\n      \"uiAttribs\": {\n        \"subPatchOp\": {\n          \"version\": 2\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9108,\n          \"y\": 3760\n        },\n        \"tempSubOldOpId\": null,\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {\n        \"blueprintVer\": 2,\n        \"subPatchVer\": 2\n      },\n      \"portsIn\": [\n        {\n          \"name\": \"n6dz5ut5m\",\n          \"title\": \"Trigger\"\n        },\n        {\n          \"name\": \"lgwr24sd3\",\n          \"value\": \"b\",\n          \"title\": \"Directory 1\"\n        },\n        {\n          \"name\": \"t9sx2ey0f\",\n          \"value\": \"\",\n          \"title\": \"Directory 2\"\n        },\n        {\n          \"name\": \"1ovs04j4c\",\n          \"value\": \"\",\n          \"title\": \"Directory 3\"\n        },\n        {\n          \"name\": \"l3dmhco3f\",\n          \"value\": \"\",\n          \"title\": \"Directory 4\"\n        },\n        {\n          \"name\": \"u4qh8rfom\",\n          \"value\": \"\",\n          \"title\": \"Directory 5\"\n        },\n        {\n          \"name\": \"patchId\",\n          \"value\": \"x2tuqtdzb\"\n        }\n      ]\n    },\n    {\n      \"opId\": \"421f5b52-c0fa-47c4-8b7a-012b9e1c864a\",\n      \"id\": \"8rmnr4o1b\",\n      \"uiAttribs\": {\n        \"title\": \"var get\",\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9396,\n          \"y\": 2040\n        },\n        \"extendTitle\": \"#isAuth\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Variable\",\n          \"value\": \"isAuth\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Value\",\n          \"links\": [\n            {\n              \"portIn\": \"boolean\",\n              \"portOut\": \"Value\",\n              \"objIn\": \"j849uucro\",\n              \"objOut\": \"8rmnr4o1b\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"9549e2ed-a544-4d33-a672-05c7854ccf5d\",\n      \"id\": \"j849uucro\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9384,\n          \"y\": 2100\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"then\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"then\",\n              \"objIn\": \"i1uem15cl\",\n              \"objOut\": \"j849uucro\"\n            }\n          ]\n        },\n        {\n          \"name\": \"else\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"else\",\n              \"objIn\": \"ihmk0dqis\",\n              \"objOut\": \"j849uucro\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"f4ff66b0-8500-46f7-9117-832aea0c2750\",\n      \"id\": \"ihmk0dqis\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9420,\n          \"y\": 2180\n        },\n        \"tempSubOldOpId\": null,\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"delay\",\n          \"value\": 3\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"next\",\n          \"links\": [\n            {\n              \"portIn\": \"Trigger\",\n              \"portOut\": \"next\",\n              \"objIn\": \"10jgfisf4\",\n              \"objOut\": \"ihmk0dqis\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Delaying\",\n          \"value\": false\n        }\n      ]\n    },\n    {\n      \"opId\": \"1f610fe2-cc44-411a-a910-01c289272e67\",\n      \"id\": \"qhzpc0pu6\",\n      \"uiAttribs\": {\n        \"subPatchOp\": {\n          \"version\": 2\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9912,\n          \"y\": 1680\n        },\n        \"blueprintSubpatch2\": true,\n        \"color\": \"#F0D165\"\n      },\n      \"storage\": {\n        \"blueprintVer\": 2,\n        \"subPatchVer\": 2\n      },\n      \"portsIn\": [\n        {\n          \"name\": \"4lursd3if\",\n          \"title\": \"Parent Link\"\n        },\n        {\n          \"name\": \"a0hazs8qu\",\n          \"value\": \"c\",\n          \"title\": \"Directory 1\"\n        },\n        {\n          \"name\": \"jyz85fved\",\n          \"value\": \"email\",\n          \"title\": \"Directory 2\"\n        },\n        {\n          \"name\": \"bxzssu5p7\",\n          \"value\": \"\",\n          \"title\": \"Directory 3\"\n        },\n        {\n          \"name\": \"f8aa3pksk\",\n          \"title\": \"Mainloop\"\n        },\n        {\n          \"name\": \"wb8ht3wlb\",\n          \"title\": \"Hash Changed\"\n        },\n        {\n          \"name\": \"patchId\",\n          \"value\": \"uu35hl3jt\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"vjfo5caql\",\n          \"title\": \"Parent Link\",\n          \"links\": [\n            {\n              \"portIn\": \"link\",\n              \"portOut\": \"vjfo5caql\",\n              \"objIn\": \"4uk1ey6gs\",\n              \"objOut\": \"qhzpc0pu6\"\n            }\n          ]\n        },\n        {\n          \"name\": \"rgkrndn64\",\n          \"title\": \"Mainloop\",\n          \"links\": [\n            {\n              \"portIn\": \"Execute\",\n              \"portOut\": \"rgkrndn64\",\n              \"objIn\": \"th6j06641\",\n              \"objOut\": \"qhzpc0pu6\"\n            }\n          ]\n        },\n        {\n          \"name\": \"iyq4pnlwm\",\n          \"title\": \"Hash Changed\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"iyq4pnlwm\",\n              \"objIn\": \"cidwl50lq\",\n              \"objOut\": \"qhzpc0pu6\"\n            }\n          ]\n        },\n        {\n          \"name\": \"wg0zcmxag\",\n          \"title\": \"Dir 1-2 Equal\",\n          \"links\": [\n            {\n              \"portIn\": \"Visible\",\n              \"portOut\": \"wg0zcmxag\",\n              \"objIn\": \"4uk1ey6gs\",\n              \"objOut\": \"qhzpc0pu6\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"7ef594f3-4907-47b0-a2d3-9854eda1679d\",\n      \"id\": \"th6j06641\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10068,\n          \"y\": 1820\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {}\n    },\n    {\n      \"opId\": \"e640619f-235c-4543-bbf8-b358e0283180\",\n      \"id\": \"cidwl50lq\",\n      \"uiAttribs\": {\n        \"extendTitle\": 2,\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10080,\n          \"y\": 1760\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"timesTriggered\",\n          \"value\": 2\n        }\n      ]\n    },\n    {\n      \"opId\": \"1f610fe2-cc44-411a-a910-01c289272e67\",\n      \"id\": \"4kmqbrx3g\",\n      \"uiAttribs\": {\n        \"subPatchOp\": {\n          \"version\": 2\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10932,\n          \"y\": 1640\n        },\n        \"color\": \"#F0D165\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {\n        \"blueprintVer\": 2,\n        \"subPatchVer\": 2\n      },\n      \"portsIn\": [\n        {\n          \"name\": \"4lursd3if\",\n          \"title\": \"Parent Link\"\n        },\n        {\n          \"name\": \"a0hazs8qu\",\n          \"value\": \"c\",\n          \"title\": \"Directory 1\"\n        },\n        {\n          \"name\": \"jyz85fved\",\n          \"value\": \"password\",\n          \"title\": \"Directory 2\"\n        },\n        {\n          \"name\": \"bxzssu5p7\",\n          \"value\": \"\",\n          \"title\": \"Directory 3\"\n        },\n        {\n          \"name\": \"f8aa3pksk\",\n          \"title\": \"Mainloop\"\n        },\n        {\n          \"name\": \"wb8ht3wlb\",\n          \"title\": \"Hash Changed\"\n        },\n        {\n          \"name\": \"patchId\",\n          \"value\": \"hnt21di52\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"vjfo5caql\",\n          \"title\": \"Parent Link\",\n          \"links\": [\n            {\n              \"portIn\": \"link\",\n              \"portOut\": \"vjfo5caql\",\n              \"objIn\": \"itbm3o4fn\",\n              \"objOut\": \"4kmqbrx3g\"\n            }\n          ]\n        },\n        {\n          \"name\": \"rgkrndn64\",\n          \"title\": \"Mainloop\",\n          \"links\": [\n            {\n              \"portIn\": \"Execute\",\n              \"portOut\": \"rgkrndn64\",\n              \"objIn\": \"k59xybm11\",\n              \"objOut\": \"4kmqbrx3g\"\n            }\n          ]\n        },\n        {\n          \"name\": \"iyq4pnlwm\",\n          \"title\": \"Hash Changed\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"iyq4pnlwm\",\n              \"objIn\": \"oxqwqnhwu\",\n              \"objOut\": \"4kmqbrx3g\"\n            }\n          ]\n        },\n        {\n          \"name\": \"wg0zcmxag\",\n          \"title\": \"Dir 1-2 Equal\",\n          \"links\": [\n            {\n              \"portIn\": \"Visible\",\n              \"portOut\": \"wg0zcmxag\",\n              \"objIn\": \"itbm3o4fn\",\n              \"objOut\": \"4kmqbrx3g\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"7ef594f3-4907-47b0-a2d3-9854eda1679d\",\n      \"id\": \"k59xybm11\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 11160,\n          \"y\": 1780\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {}\n    },\n    {\n      \"opId\": \"e640619f-235c-4543-bbf8-b358e0283180\",\n      \"id\": \"oxqwqnhwu\",\n      \"uiAttribs\": {\n        \"extendTitle\": 1,\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 11304,\n          \"y\": 1980\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"trigger\",\n          \"links\": [\n            {\n              \"portIn\": \"Clear\",\n              \"portOut\": \"trigger\",\n              \"objIn\": \"to668hw3s\",\n              \"objOut\": \"oxqwqnhwu\"\n            },\n            {\n              \"portIn\": \"Clear\",\n              \"portOut\": \"trigger\",\n              \"objIn\": \"uknd9u62r\",\n              \"objOut\": \"oxqwqnhwu\"\n            },\n            {\n              \"portIn\": \"Clear\",\n              \"portOut\": \"trigger\",\n              \"objIn\": \"8xxbvhb33\",\n              \"objOut\": \"oxqwqnhwu\"\n            }\n          ]\n        },\n        {\n          \"name\": \"timesTriggered\",\n          \"value\": 1\n        }\n      ]\n    },\n    {\n      \"opId\": \"86ea2333-b51c-48ed-94c2-8b7b6e9ff34c\",\n      \"id\": \"x92jnyuhz\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 9960,\n          \"y\": 2280\n        },\n        \"tempSubOldOpId\": null,\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": \"Group\"\n        },\n        {\n          \"name\": \"Show Title\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Default Minimized\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"next\",\n          \"links\": [\n            {\n              \"portIn\": \"link\",\n              \"portOut\": \"next\",\n              \"objIn\": \"4dspnlv0i\",\n              \"objOut\": \"x92jnyuhz\"\n            }\n          ]\n        },\n        {\n          \"name\": \"childs\",\n          \"links\": [\n            {\n              \"portIn\": \"link\",\n              \"portOut\": \"childs\",\n              \"objIn\": \"pi1gjkhas\",\n              \"objOut\": \"x92jnyuhz\"\n            },\n            {\n              \"portIn\": \"link\",\n              \"portOut\": \"childs\",\n              \"objIn\": \"wzuto192b\",\n              \"objOut\": \"x92jnyuhz\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"ecefdac0-9ad1-4591-9940-9ec7b1e422f5\",\n      \"id\": \"wjad92fhp\",\n      \"uiAttribs\": {\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 10020,\n          \"y\": 2160\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Format\",\n          \"value\": \"Your current email address is: $a\"\n        },\n        {\n          \"name\": \"String B\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"String C\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"String D\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"String E\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"String F\",\n          \"value\": \"\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"Button Text\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"kf4sls6em\",\n              \"objOut\": \"wjad92fhp\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"b055a923-58b3-4b46-80d1-cd522d5f4cca\",\n      \"id\": \"jt5tlu8ca\",\n      \"uiAttribs\": {\n        \"subPatchOp\": {\n          \"version\": 2\n        },\n        \"subPatch\": \"xwsz43q5a\",\n        \"translate\": {\n          \"x\": 11004,\n          \"y\": 2740\n        },\n        \"tempSubOldOpId\": null,\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {\n        \"blueprintVer\": 2,\n        \"subPatchVer\": 2\n      },\n      \"portsIn\": [\n        {\n          \"name\": \"n6dz5ut5m\",\n          \"title\": \"Trigger\"\n        },\n        {\n          \"name\": \"lgwr24sd3\",\n          \"value\": \"b\",\n          \"title\": \"Directory 1\"\n        },\n        {\n          \"name\": \"t9sx2ey0f\",\n          \"value\": \"\",\n          \"title\": \"Directory 2\"\n        },\n        {\n          \"name\": \"1ovs04j4c\",\n          \"value\": \"\",\n          \"title\": \"Directory 3\"\n        },\n        {\n          \"name\": \"l3dmhco3f\",\n          \"value\": \"\",\n          \"title\": \"Directory 4\"\n        },\n        {\n          \"name\": \"u4qh8rfom\",\n          \"value\": \"\",\n          \"title\": \"Directory 5\"\n        },\n        {\n          \"name\": \"patchId\",\n          \"value\": \"u6k3522y9\"\n        }\n      ]\n    }\n  ]\n}",};
const port_i6nnsru1m=op.inObject("i6nnsru1m");
port_i6nnsru1m.setUiAttribs({title:"Parent Link",});

const port_zap5t5tri=op.inTrigger("zap5t5tri");
port_zap5t5tri.setUiAttribs({title:"Mainloop",});

const port_9ozpectyq=op.inTrigger("9ozpectyq");
port_9ozpectyq.setUiAttribs({title:"Hash Changed",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_i6nnsru1m = addedOps[i].outObject("innerOut_i6nnsru1m");
innerOut_i6nnsru1m.setUiAttribs({title:"Parent Link"});
port_i6nnsru1m.on("change", (a,v) => { innerOut_i6nnsru1m.setRef(a); });

const innerOut_zap5t5tri = addedOps[i].outTrigger("innerOut_zap5t5tri");
innerOut_zap5t5tri.setUiAttribs({title:"Mainloop"});
port_zap5t5tri.onTriggered = () => { innerOut_zap5t5tri.trigger(); };

const innerOut_9ozpectyq = addedOps[i].outTrigger("innerOut_9ozpectyq");
innerOut_9ozpectyq.setUiAttribs({title:"Hash Changed"});
port_9ozpectyq.onTriggered = () => { innerOut_9ozpectyq.trigger(); };

    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
    if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
    op.patch.emitEvent("subpatchExpose", patchId);
    op.setStorage({ "blueprintVer": 2 });
    op.patch.emitEvent("subpatchExpose", patchId);
}


};

Ops.User.rambodc.PagesC.prototype = new CABLES.Op();
CABLES.OPS["73227645-661d-4da0-a15e-9a202d06b34b"]={f:Ops.User.rambodc.PagesC,objName:"Ops.User.rambodc.PagesC"};




// **************************************************************
// 
// Ops.User.rambodc.SidebarControls
// 
// **************************************************************

Ops.User.rambodc.SidebarControls = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_1d8i1nhkb=op.inString(\"1d8i1nhkb\",\"\");\nport_1d8i1nhkb.setUiAttribs({title:\"Path Name\",});\n\nconst port_14qkhodhi=op.inTrigger(\"14qkhodhi\");\nport_14qkhodhi.setUiAttribs({title:\"Mainloop\",});\n\nconst port_a4ff56gqe=op.outNumber(\"a4ff56gqe\");\nport_a4ff56gqe.setUiAttribs({title:\"Result\",display:\"boolnum\",});\n\nconst port_6l7liw33m=op.outString(\"6l7liw33m\");\nport_6l7liw33m.setUiAttribs({title:\"Directory 1\",});\n\nconst port_3ee1w6bsj=op.outString(\"3ee1w6bsj\");\nport_3ee1w6bsj.setUiAttribs({title:\"Directory 2\",});\n\nconst port_m5oblmgx9=op.outString(\"m5oblmgx9\");\nport_m5oblmgx9.setUiAttribs({title:\"Directory 3\",});\n\nconst port_zqf3fcpvb=op.outString(\"zqf3fcpvb\");\nport_zqf3fcpvb.setUiAttribs({title:\"Directory 4\",});\n\nconst port_nzvovmrv0=op.outString(\"nzvovmrv0\");\nport_nzvovmrv0.setUiAttribs({title:\"Directory 5\",});\n\nconst port_sffqpjmpg=op.outTrigger(\"sffqpjmpg\");\nport_sffqpjmpg.setUiAttribs({title:\"Mainloop\",});\n\nconst port_e3d2ws9wo=op.outTrigger(\"e3d2ws9wo\");\nport_e3d2ws9wo.setUiAttribs({title:\"Hash Changed\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_1d8i1nhkb = addedOps[i].outString(\"innerOut_1d8i1nhkb\");\ninnerOut_1d8i1nhkb.set(port_1d8i1nhkb.get() );\ninnerOut_1d8i1nhkb.setUiAttribs({title:\"Path Name\"});\nport_1d8i1nhkb.on(\"change\", (a,v) => { innerOut_1d8i1nhkb.set(a); });\n\nconst innerOut_14qkhodhi = addedOps[i].outTrigger(\"innerOut_14qkhodhi\");\ninnerOut_14qkhodhi.setUiAttribs({title:\"Mainloop\"});\nport_14qkhodhi.onTriggered = () => { innerOut_14qkhodhi.trigger(); };\n\n    }\nif(addedOps[i].innerOutput)\n{\nconst innerIn_a4ff56gqe = addedOps[i].inFloat(\"innerIn_a4ff56gqe\");\ninnerIn_a4ff56gqe.setUiAttribs({title:\"Result\"});\ninnerIn_a4ff56gqe.on(\"change\", (a,v) => { port_a4ff56gqe.set(a); });\n\nconst innerIn_6l7liw33m = addedOps[i].inString(\"innerIn_6l7liw33m\");\ninnerIn_6l7liw33m.setUiAttribs({title:\"Directory 1\"});\ninnerIn_6l7liw33m.on(\"change\", (a,v) => { port_6l7liw33m.set(a); });\n\nconst innerIn_3ee1w6bsj = addedOps[i].inString(\"innerIn_3ee1w6bsj\");\ninnerIn_3ee1w6bsj.setUiAttribs({title:\"Directory 2\"});\ninnerIn_3ee1w6bsj.on(\"change\", (a,v) => { port_3ee1w6bsj.set(a); });\n\nconst innerIn_m5oblmgx9 = addedOps[i].inString(\"innerIn_m5oblmgx9\");\ninnerIn_m5oblmgx9.setUiAttribs({title:\"Directory 3\"});\ninnerIn_m5oblmgx9.on(\"change\", (a,v) => { port_m5oblmgx9.set(a); });\n\nconst innerIn_zqf3fcpvb = addedOps[i].inString(\"innerIn_zqf3fcpvb\");\ninnerIn_zqf3fcpvb.setUiAttribs({title:\"Directory 4\"});\ninnerIn_zqf3fcpvb.on(\"change\", (a,v) => { port_zqf3fcpvb.set(a); });\n\nconst innerIn_nzvovmrv0 = addedOps[i].inString(\"innerIn_nzvovmrv0\");\ninnerIn_nzvovmrv0.setUiAttribs({title:\"Directory 5\"});\ninnerIn_nzvovmrv0.on(\"change\", (a,v) => { port_nzvovmrv0.set(a); });\n\nconst innerIn_sffqpjmpg = addedOps[i].inTrigger(\"innerIn_sffqpjmpg\");\ninnerIn_sffqpjmpg.setUiAttribs({title:\"Mainloop\"});\ninnerIn_sffqpjmpg.onTriggered = () => { port_sffqpjmpg.trigger(); };\n\nconst innerIn_e3d2ws9wo = addedOps[i].inTrigger(\"innerIn_e3d2ws9wo\");\ninnerIn_e3d2ws9wo.setUiAttribs({title:\"Hash Changed\"});\ninnerIn_e3d2ws9wo.onTriggered = () => { port_e3d2ws9wo.trigger(); };\n\n}\n}\n};\n","ports_json":"{\n    \"ports\": [\n        {\n            \"id\": \"1d8i1nhkb\",\n            \"title\": \"Path Name\",\n            \"dir\": 0,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 0\n        },\n        {\n            \"id\": \"14qkhodhi\",\n            \"title\": \"Mainloop\",\n            \"dir\": 0,\n            \"type\": 1,\n            \"order\": 1\n        },\n        {\n            \"id\": \"a4ff56gqe\",\n            \"title\": \"Result\",\n            \"dir\": 1,\n            \"type\": 0,\n            \"uiDisplay\": \"boolnum\",\n            \"value\": 1,\n            \"order\": 1002\n        },\n        {\n            \"id\": \"6l7liw33m\",\n            \"title\": \"Directory 1\",\n            \"dir\": 1,\n            \"type\": 5,\n            \"value\": \"a\",\n            \"order\": 1003\n        },\n        {\n            \"id\": \"3ee1w6bsj\",\n            \"title\": \"Directory 2\",\n            \"dir\": 1,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 1004\n        },\n        {\n            \"id\": \"m5oblmgx9\",\n            \"title\": \"Directory 3\",\n            \"dir\": 1,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 1005\n        },\n        {\n            \"id\": \"zqf3fcpvb\",\n            \"title\": \"Directory 4\",\n            \"dir\": 1,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 1006\n        },\n        {\n            \"id\": \"nzvovmrv0\",\n            \"title\": \"Directory 5\",\n            \"dir\": 1,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 1007\n        },\n        {\n            \"id\": \"sffqpjmpg\",\n            \"title\": \"Mainloop\",\n            \"dir\": 1,\n            \"type\": 1,\n            \"order\": 1008\n        },\n        {\n            \"id\": \"e3d2ws9wo\",\n            \"title\": \"Hash Changed\",\n            \"dir\": 1,\n            \"type\": 1,\n            \"order\": 1009\n        }\n    ]\n}","subpatch_json":"{\n  \"ops\": [\n    {\n      \"opId\": \"c4e4e933-136e-479e-8de8-0b35b75d9217\",\n      \"id\": \"f6gluogvg\",\n      \"uiAttribs\": {\n        \"subPatch\": \"35dyky13k\",\n        \"translate\": {\n          \"x\": 3132,\n          \"y\": -1180\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"innerOut_1d8i1nhkb\",\n          \"title\": \"Path Name\",\n          \"links\": [\n            {\n              \"portIn\": \"String 2\",\n              \"portOut\": \"innerOut_1d8i1nhkb\",\n              \"objIn\": \"c0fxwkke0\",\n              \"objOut\": \"f6gluogvg\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_14qkhodhi\",\n          \"title\": \"Mainloop\",\n          \"links\": [\n            {\n              \"portIn\": \"Execute\",\n              \"portOut\": \"innerOut_14qkhodhi\",\n              \"objIn\": \"jjvrif09p\",\n              \"objOut\": \"f6gluogvg\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"02d45073-7936-4830-81ad-59a162febf1f\",\n      \"id\": \"xwmf4t78e\",\n      \"uiAttribs\": {\n        \"subPatch\": \"35dyky13k\",\n        \"translate\": {\n          \"x\": 3132,\n          \"y\": -640\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"innerIn_a4ff56gqe\",\n          \"title\": \"Result\"\n        },\n        {\n          \"name\": \"innerIn_6l7liw33m\",\n          \"title\": \"Directory 1\"\n        },\n        {\n          \"name\": \"innerIn_3ee1w6bsj\",\n          \"title\": \"Directory 2\"\n        },\n        {\n          \"name\": \"innerIn_m5oblmgx9\",\n          \"title\": \"Directory 3\"\n        },\n        {\n          \"name\": \"innerIn_zqf3fcpvb\",\n          \"title\": \"Directory 4\"\n        },\n        {\n          \"name\": \"innerIn_nzvovmrv0\",\n          \"value\": \"\",\n          \"title\": \"Directory 5\"\n        },\n        {\n          \"name\": \"innerIn_sffqpjmpg\",\n          \"title\": \"Mainloop\"\n        },\n        {\n          \"name\": \"innerIn_e3d2ws9wo\",\n          \"title\": \"Hash Changed\"\n        }\n      ]\n    },\n    {\n      \"opId\": \"ef15195a-760b-4ac5-9630-322b0ba7b722\",\n      \"id\": \"c0fxwkke0\",\n      \"uiAttribs\": {\n        \"subPatch\": \"35dyky13k\",\n        \"translate\": {\n          \"x\": 3132,\n          \"y\": -900\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"innerIn_a4ff56gqe\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"xwmf4t78e\",\n              \"objOut\": \"c0fxwkke0\"\n            },\n            {\n              \"portIn\": \"Pass Through\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"jjvrif09p\",\n              \"objOut\": \"c0fxwkke0\"\n            },\n            {\n              \"portIn\": \"boolean\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"kana1py5a\",\n              \"objOut\": \"c0fxwkke0\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"e72fbd80-f9c7-4572-8b6d-a485ef474b74\",\n      \"id\": \"iw8wjx9n3\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 3372,\n          \"y\": -1040\n        },\n        \"subPatch\": \"35dyky13k\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"URL\",\n          \"value\": \"https://sandbox.cables.gl/ui/#/a\"\n        },\n        {\n          \"name\": \"Host\",\n          \"value\": \"sandbox.cables.gl\"\n        },\n        {\n          \"name\": \"Hash\",\n          \"links\": [\n            {\n              \"portIn\": \"String\",\n              \"portOut\": \"Hash\",\n              \"objIn\": \"a3wu29ipf\",\n              \"objOut\": \"iw8wjx9n3\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Pathname\",\n          \"value\": \"/ui/\"\n        },\n        {\n          \"name\": \"Protocol\",\n          \"value\": \"https:\"\n        },\n        {\n          \"name\": \"Port\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Hash Changed\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Hash Changed\",\n              \"objIn\": \"opx3jednx\",\n              \"objOut\": \"iw8wjx9n3\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"966c1ad2-20a6-4c6e-b390-a26fe4fdbcfa\",\n      \"id\": \"dydi98kgu\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 3396,\n          \"y\": -820\n        },\n        \"subPatch\": \"35dyky13k\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"Directory 1\",\n          \"links\": [\n            {\n              \"portIn\": \"innerIn_6l7liw33m\",\n              \"portOut\": \"Directory 1\",\n              \"objIn\": \"xwmf4t78e\",\n              \"objOut\": \"dydi98kgu\"\n            },\n            {\n              \"portIn\": \"String 1\",\n              \"portOut\": \"Directory 1\",\n              \"objIn\": \"c0fxwkke0\",\n              \"objOut\": \"dydi98kgu\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Directory 2\",\n          \"links\": [\n            {\n              \"portIn\": \"innerIn_3ee1w6bsj\",\n              \"portOut\": \"Directory 2\",\n              \"objIn\": \"xwmf4t78e\",\n              \"objOut\": \"dydi98kgu\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Directory 3\",\n          \"links\": [\n            {\n              \"portIn\": \"innerIn_m5oblmgx9\",\n              \"portOut\": \"Directory 3\",\n              \"objIn\": \"xwmf4t78e\",\n              \"objOut\": \"dydi98kgu\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Directory 4\",\n          \"links\": [\n            {\n              \"portIn\": \"innerIn_zqf3fcpvb\",\n              \"portOut\": \"Directory 4\",\n              \"objIn\": \"xwmf4t78e\",\n              \"objOut\": \"dydi98kgu\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Directory 5\",\n          \"value\": \"\"\n        }\n      ]\n    },\n    {\n      \"opId\": \"4a053e7a-6b00-4e71-bd51-90cdb190994c\",\n      \"id\": \"a3wu29ipf\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 3396,\n          \"y\": -880\n        },\n        \"subPatch\": \"35dyky13k\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Search For\",\n          \"value\": \"#\"\n        },\n        {\n          \"name\": \"Replace\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Replace What index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Replace What\",\n          \"value\": \"First\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"Path\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"dydi98kgu\",\n              \"objOut\": \"a3wu29ipf\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"65e8b8a2-ba13-485f-883a-2bcf377989da\",\n      \"id\": \"jjvrif09p\",\n      \"uiAttribs\": {\n        \"subPatch\": \"35dyky13k\",\n        \"translate\": {\n          \"x\": 3156,\n          \"y\": -820\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"Trigger out\",\n          \"links\": [\n            {\n              \"portIn\": \"innerIn_sffqpjmpg\",\n              \"portOut\": \"Trigger out\",\n              \"objIn\": \"xwmf4t78e\",\n              \"objOut\": \"jjvrif09p\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"f4ff66b0-8500-46f7-9117-832aea0c2750\",\n      \"id\": \"opx3jednx\",\n      \"uiAttribs\": {\n        \"subPatch\": \"35dyky13k\",\n        \"translate\": {\n          \"x\": 3588,\n          \"y\": -860\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"delay\",\n          \"value\": 0.05\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"next\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"next\",\n              \"objIn\": \"kana1py5a\",\n              \"objOut\": \"opx3jednx\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Delaying\",\n          \"value\": false\n        }\n      ]\n    },\n    {\n      \"opId\": \"9549e2ed-a544-4d33-a672-05c7854ccf5d\",\n      \"id\": \"kana1py5a\",\n      \"uiAttribs\": {\n        \"subPatch\": \"35dyky13k\",\n        \"translate\": {\n          \"x\": 3588,\n          \"y\": -720\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"then\",\n          \"links\": [\n            {\n              \"portIn\": \"innerIn_e3d2ws9wo\",\n              \"portOut\": \"then\",\n              \"objIn\": \"xwmf4t78e\",\n              \"objOut\": \"kana1py5a\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"0816c999-f2db-466b-9777-2814573574c5\",\n      \"id\": \"wnue0odw4\",\n      \"uiAttribs\": {\n        \"title\": \">Startup\",\n        \"translate\": {\n          \"x\": 3588,\n          \"y\": -1100\n        },\n        \"subPatch\": \"35dyky13k\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Named Trigger\",\n          \"value\": \"Startup\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Triggered\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"Triggered\",\n              \"objIn\": \"paxfpui8r\",\n              \"objOut\": \"wnue0odw4\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"f4ff66b0-8500-46f7-9117-832aea0c2750\",\n      \"id\": \"paxfpui8r\",\n      \"uiAttribs\": {\n        \"subPatch\": \"35dyky13k\",\n        \"translate\": {\n          \"x\": 3588,\n          \"y\": -1020\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"delay\",\n          \"value\": 2\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"next\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"next\",\n              \"objIn\": \"opx3jednx\",\n              \"objOut\": \"paxfpui8r\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Delaying\",\n          \"value\": false\n        }\n      ]\n    }\n  ]\n}",};
const port_1d8i1nhkb=op.inString("1d8i1nhkb","");
port_1d8i1nhkb.setUiAttribs({title:"Path Name",});

const port_14qkhodhi=op.inTrigger("14qkhodhi");
port_14qkhodhi.setUiAttribs({title:"Mainloop",});

const port_a4ff56gqe=op.outNumber("a4ff56gqe");
port_a4ff56gqe.setUiAttribs({title:"Result",display:"boolnum",});

const port_6l7liw33m=op.outString("6l7liw33m");
port_6l7liw33m.setUiAttribs({title:"Directory 1",});

const port_3ee1w6bsj=op.outString("3ee1w6bsj");
port_3ee1w6bsj.setUiAttribs({title:"Directory 2",});

const port_m5oblmgx9=op.outString("m5oblmgx9");
port_m5oblmgx9.setUiAttribs({title:"Directory 3",});

const port_zqf3fcpvb=op.outString("zqf3fcpvb");
port_zqf3fcpvb.setUiAttribs({title:"Directory 4",});

const port_nzvovmrv0=op.outString("nzvovmrv0");
port_nzvovmrv0.setUiAttribs({title:"Directory 5",});

const port_sffqpjmpg=op.outTrigger("sffqpjmpg");
port_sffqpjmpg.setUiAttribs({title:"Mainloop",});

const port_e3d2ws9wo=op.outTrigger("e3d2ws9wo");
port_e3d2ws9wo.setUiAttribs({title:"Hash Changed",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_1d8i1nhkb = addedOps[i].outString("innerOut_1d8i1nhkb");
innerOut_1d8i1nhkb.set(port_1d8i1nhkb.get() );
innerOut_1d8i1nhkb.setUiAttribs({title:"Path Name"});
port_1d8i1nhkb.on("change", (a,v) => { innerOut_1d8i1nhkb.set(a); });

const innerOut_14qkhodhi = addedOps[i].outTrigger("innerOut_14qkhodhi");
innerOut_14qkhodhi.setUiAttribs({title:"Mainloop"});
port_14qkhodhi.onTriggered = () => { innerOut_14qkhodhi.trigger(); };

    }
if(addedOps[i].innerOutput)
{
const innerIn_a4ff56gqe = addedOps[i].inFloat("innerIn_a4ff56gqe");
innerIn_a4ff56gqe.setUiAttribs({title:"Result"});
innerIn_a4ff56gqe.on("change", (a,v) => { port_a4ff56gqe.set(a); });

const innerIn_6l7liw33m = addedOps[i].inString("innerIn_6l7liw33m");
innerIn_6l7liw33m.setUiAttribs({title:"Directory 1"});
innerIn_6l7liw33m.on("change", (a,v) => { port_6l7liw33m.set(a); });

const innerIn_3ee1w6bsj = addedOps[i].inString("innerIn_3ee1w6bsj");
innerIn_3ee1w6bsj.setUiAttribs({title:"Directory 2"});
innerIn_3ee1w6bsj.on("change", (a,v) => { port_3ee1w6bsj.set(a); });

const innerIn_m5oblmgx9 = addedOps[i].inString("innerIn_m5oblmgx9");
innerIn_m5oblmgx9.setUiAttribs({title:"Directory 3"});
innerIn_m5oblmgx9.on("change", (a,v) => { port_m5oblmgx9.set(a); });

const innerIn_zqf3fcpvb = addedOps[i].inString("innerIn_zqf3fcpvb");
innerIn_zqf3fcpvb.setUiAttribs({title:"Directory 4"});
innerIn_zqf3fcpvb.on("change", (a,v) => { port_zqf3fcpvb.set(a); });

const innerIn_nzvovmrv0 = addedOps[i].inString("innerIn_nzvovmrv0");
innerIn_nzvovmrv0.setUiAttribs({title:"Directory 5"});
innerIn_nzvovmrv0.on("change", (a,v) => { port_nzvovmrv0.set(a); });

const innerIn_sffqpjmpg = addedOps[i].inTrigger("innerIn_sffqpjmpg");
innerIn_sffqpjmpg.setUiAttribs({title:"Mainloop"});
innerIn_sffqpjmpg.onTriggered = () => { port_sffqpjmpg.trigger(); };

const innerIn_e3d2ws9wo = addedOps[i].inTrigger("innerIn_e3d2ws9wo");
innerIn_e3d2ws9wo.setUiAttribs({title:"Hash Changed"});
innerIn_e3d2ws9wo.onTriggered = () => { port_e3d2ws9wo.trigger(); };

}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
    if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
    op.patch.emitEvent("subpatchExpose", patchId);
    op.setStorage({ "blueprintVer": 2 });
    op.patch.emitEvent("subpatchExpose", patchId);
}


};

Ops.User.rambodc.SidebarControls.prototype = new CABLES.Op();
CABLES.OPS["f0135eed-657d-48af-92b4-bf9bd81a9865"]={f:Ops.User.rambodc.SidebarControls,objName:"Ops.User.rambodc.SidebarControls"};




// **************************************************************
// 
// Ops.User.rambodc.PopupMenu
// 
// **************************************************************

Ops.User.rambodc.PopupMenu = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_wc7xjxfxx=op.inTrigger(\"wc7xjxfxx\");\nport_wc7xjxfxx.setUiAttribs({title:\"Mainloop\",});\n\nconst port_jkgyh3kxu=op.inTrigger(\"jkgyh3kxu\");\nport_jkgyh3kxu.setUiAttribs({title:\"Open-Close\",});\n\nconst port_nv2xz3y87=op.inFloat(\"nv2xz3y87\",0);\nport_nv2xz3y87.setUiAttribs({title:\"Enable 1\",display:\"bool\",});\n\nconst port_ub3mqqtdd=op.inString(\"ub3mqqtdd\",\"\");\nport_ub3mqqtdd.setUiAttribs({title:\"String 1\",});\n\nconst port_n2tjog8gu=op.inFloat(\"n2tjog8gu\",0);\nport_n2tjog8gu.setUiAttribs({title:\"Enable 2\",display:\"bool\",});\n\nconst port_3jvojxwe9=op.inString(\"3jvojxwe9\",\"\");\nport_3jvojxwe9.setUiAttribs({title:\"String 2\",});\n\nconst port_lmmev5kvn=op.inFloat(\"lmmev5kvn\",0);\nport_lmmev5kvn.setUiAttribs({title:\"Enable 3\",display:\"bool\",});\n\nconst port_0io5ed43a=op.inString(\"0io5ed43a\",\"\");\nport_0io5ed43a.setUiAttribs({title:\"String 3\",});\n\nconst port_rzkhmfr8a=op.inFloat(\"rzkhmfr8a\",0);\nport_rzkhmfr8a.setUiAttribs({title:\"Enable 4\",display:\"bool\",});\n\nconst port_5fx1n7v3d=op.inString(\"5fx1n7v3d\",\"\");\nport_5fx1n7v3d.setUiAttribs({title:\"String 4\",});\n\nconst port_43z0xm2ij=op.outTrigger(\"43z0xm2ij\");\nport_43z0xm2ij.setUiAttribs({title:\"Close\",});\n\nconst port_t0obwgtww=op.outTrigger(\"t0obwgtww\");\nport_t0obwgtww.setUiAttribs({title:\"Button 1\",});\n\nconst port_013f6ffi7=op.outTrigger(\"013f6ffi7\");\nport_013f6ffi7.setUiAttribs({title:\"Button 2\",});\n\nconst port_cyw007cj3=op.outTrigger(\"cyw007cj3\");\nport_cyw007cj3.setUiAttribs({title:\"Button 3\",});\n\nconst port_ehnih43tt=op.outTrigger(\"ehnih43tt\");\nport_ehnih43tt.setUiAttribs({title:\"Button 4\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_wc7xjxfxx = addedOps[i].outTrigger(\"innerOut_wc7xjxfxx\");\ninnerOut_wc7xjxfxx.setUiAttribs({title:\"Mainloop\"});\nport_wc7xjxfxx.onTriggered = () => { innerOut_wc7xjxfxx.trigger(); };\n\nconst innerOut_jkgyh3kxu = addedOps[i].outTrigger(\"innerOut_jkgyh3kxu\");\ninnerOut_jkgyh3kxu.setUiAttribs({title:\"Open-Close\"});\nport_jkgyh3kxu.onTriggered = () => { innerOut_jkgyh3kxu.trigger(); };\n\nconst innerOut_nv2xz3y87 = addedOps[i].outNumber(\"innerOut_nv2xz3y87\");\ninnerOut_nv2xz3y87.set(port_nv2xz3y87.get() );\ninnerOut_nv2xz3y87.setUiAttribs({title:\"Enable 1\"});\nport_nv2xz3y87.on(\"change\", (a,v) => { innerOut_nv2xz3y87.set(a); });\n\nconst innerOut_ub3mqqtdd = addedOps[i].outString(\"innerOut_ub3mqqtdd\");\ninnerOut_ub3mqqtdd.set(port_ub3mqqtdd.get() );\ninnerOut_ub3mqqtdd.setUiAttribs({title:\"String 1\"});\nport_ub3mqqtdd.on(\"change\", (a,v) => { innerOut_ub3mqqtdd.set(a); });\n\nconst innerOut_n2tjog8gu = addedOps[i].outNumber(\"innerOut_n2tjog8gu\");\ninnerOut_n2tjog8gu.set(port_n2tjog8gu.get() );\ninnerOut_n2tjog8gu.setUiAttribs({title:\"Enable 2\"});\nport_n2tjog8gu.on(\"change\", (a,v) => { innerOut_n2tjog8gu.set(a); });\n\nconst innerOut_3jvojxwe9 = addedOps[i].outString(\"innerOut_3jvojxwe9\");\ninnerOut_3jvojxwe9.set(port_3jvojxwe9.get() );\ninnerOut_3jvojxwe9.setUiAttribs({title:\"String 2\"});\nport_3jvojxwe9.on(\"change\", (a,v) => { innerOut_3jvojxwe9.set(a); });\n\nconst innerOut_lmmev5kvn = addedOps[i].outNumber(\"innerOut_lmmev5kvn\");\ninnerOut_lmmev5kvn.set(port_lmmev5kvn.get() );\ninnerOut_lmmev5kvn.setUiAttribs({title:\"Enable 3\"});\nport_lmmev5kvn.on(\"change\", (a,v) => { innerOut_lmmev5kvn.set(a); });\n\nconst innerOut_0io5ed43a = addedOps[i].outString(\"innerOut_0io5ed43a\");\ninnerOut_0io5ed43a.set(port_0io5ed43a.get() );\ninnerOut_0io5ed43a.setUiAttribs({title:\"String 3\"});\nport_0io5ed43a.on(\"change\", (a,v) => { innerOut_0io5ed43a.set(a); });\n\nconst innerOut_rzkhmfr8a = addedOps[i].outNumber(\"innerOut_rzkhmfr8a\");\ninnerOut_rzkhmfr8a.set(port_rzkhmfr8a.get() );\ninnerOut_rzkhmfr8a.setUiAttribs({title:\"Enable 4\"});\nport_rzkhmfr8a.on(\"change\", (a,v) => { innerOut_rzkhmfr8a.set(a); });\n\nconst innerOut_5fx1n7v3d = addedOps[i].outString(\"innerOut_5fx1n7v3d\");\ninnerOut_5fx1n7v3d.set(port_5fx1n7v3d.get() );\ninnerOut_5fx1n7v3d.setUiAttribs({title:\"String 4\"});\nport_5fx1n7v3d.on(\"change\", (a,v) => { innerOut_5fx1n7v3d.set(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\nconst innerIn_43z0xm2ij = addedOps[i].inTrigger(\"innerIn_43z0xm2ij\");\ninnerIn_43z0xm2ij.setUiAttribs({title:\"Close\"});\ninnerIn_43z0xm2ij.onTriggered = () => { port_43z0xm2ij.trigger(); };\n\nconst innerIn_t0obwgtww = addedOps[i].inTrigger(\"innerIn_t0obwgtww\");\ninnerIn_t0obwgtww.setUiAttribs({title:\"Button 1\"});\ninnerIn_t0obwgtww.onTriggered = () => { port_t0obwgtww.trigger(); };\n\nconst innerIn_013f6ffi7 = addedOps[i].inTrigger(\"innerIn_013f6ffi7\");\ninnerIn_013f6ffi7.setUiAttribs({title:\"Button 2\"});\ninnerIn_013f6ffi7.onTriggered = () => { port_013f6ffi7.trigger(); };\n\nconst innerIn_cyw007cj3 = addedOps[i].inTrigger(\"innerIn_cyw007cj3\");\ninnerIn_cyw007cj3.setUiAttribs({title:\"Button 3\"});\ninnerIn_cyw007cj3.onTriggered = () => { port_cyw007cj3.trigger(); };\n\nconst innerIn_ehnih43tt = addedOps[i].inTrigger(\"innerIn_ehnih43tt\");\ninnerIn_ehnih43tt.setUiAttribs({title:\"Button 4\"});\ninnerIn_ehnih43tt.onTriggered = () => { port_ehnih43tt.trigger(); };\n\n}\n}\n};\n","ports_json":"{\n    \"ports\": [\n        {\n            \"id\": \"wc7xjxfxx\",\n            \"title\": \"Mainloop\",\n            \"dir\": 0,\n            \"type\": 1,\n            \"order\": 0\n        },\n        {\n            \"id\": \"jkgyh3kxu\",\n            \"title\": \"Open-Close\",\n            \"dir\": 0,\n            \"type\": 1,\n            \"order\": 1\n        },\n        {\n            \"id\": \"nv2xz3y87\",\n            \"title\": \"Enable 1\",\n            \"dir\": 0,\n            \"type\": 0,\n            \"value\": 0,\n            \"uiDisplay\": \"bool\",\n            \"order\": 2\n        },\n        {\n            \"id\": \"ub3mqqtdd\",\n            \"title\": \"String 1\",\n            \"dir\": 0,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 3\n        },\n        {\n            \"id\": \"n2tjog8gu\",\n            \"title\": \"Enable 2\",\n            \"dir\": 0,\n            \"type\": 0,\n            \"value\": 0,\n            \"uiDisplay\": \"bool\",\n            \"order\": 4\n        },\n        {\n            \"id\": \"3jvojxwe9\",\n            \"title\": \"String 2\",\n            \"dir\": 0,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 5\n        },\n        {\n            \"id\": \"lmmev5kvn\",\n            \"title\": \"Enable 3\",\n            \"dir\": 0,\n            \"type\": 0,\n            \"value\": 0,\n            \"uiDisplay\": \"bool\",\n            \"order\": 6\n        },\n        {\n            \"id\": \"0io5ed43a\",\n            \"title\": \"String 3\",\n            \"dir\": 0,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 7\n        },\n        {\n            \"id\": \"rzkhmfr8a\",\n            \"title\": \"Enable 4\",\n            \"dir\": 0,\n            \"type\": 0,\n            \"value\": 0,\n            \"uiDisplay\": \"bool\",\n            \"order\": 8\n        },\n        {\n            \"id\": \"5fx1n7v3d\",\n            \"title\": \"String 4\",\n            \"dir\": 0,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 9\n        },\n        {\n            \"id\": \"43z0xm2ij\",\n            \"title\": \"Close\",\n            \"dir\": 1,\n            \"type\": 1,\n            \"order\": 1010\n        },\n        {\n            \"id\": \"t0obwgtww\",\n            \"title\": \"Button 1\",\n            \"dir\": 1,\n            \"type\": 1,\n            \"order\": 1011\n        },\n        {\n            \"id\": \"013f6ffi7\",\n            \"title\": \"Button 2\",\n            \"dir\": 1,\n            \"type\": 1,\n            \"order\": 1012\n        },\n        {\n            \"id\": \"cyw007cj3\",\n            \"title\": \"Button 3\",\n            \"dir\": 1,\n            \"type\": 1,\n            \"order\": 1013\n        },\n        {\n            \"id\": \"ehnih43tt\",\n            \"title\": \"Button 4\",\n            \"dir\": 1,\n            \"type\": 1,\n            \"order\": 1014\n        }\n    ]\n}","subpatch_json":"{\n  \"ops\": [\n    {\n      \"opId\": \"d55d398c-e68e-486b-b0ce-d9c4bdf7df05\",\n      \"id\": \"jxjjgmh28\",\n      \"uiAttribs\": {\n        \"title\": \"Div Background\",\n        \"translate\": {\n          \"x\": 3660,\n          \"y\": -2720\n        },\n        \"color\": null,\n        \"subPatch\": \"hbb9h2doz\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Id\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Class\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Interactive\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Propagate Click-Events\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"DOM Element\",\n          \"links\": [\n            {\n              \"portIn\": \"Element\",\n              \"portOut\": \"DOM Element\",\n              \"objIn\": \"qtwenunuo\",\n              \"objOut\": \"jxjjgmh28\"\n            },\n            {\n              \"portIn\": \"Parent\",\n              \"portOut\": \"DOM Element\",\n              \"objIn\": \"r61g02rt5\",\n              \"objOut\": \"jxjjgmh28\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Hover\",\n          \"value\": 0\n        }\n      ]\n    },\n    {\n      \"opId\": \"6468b7c1-f63e-4db4-b809-4b203d27ead3\",\n      \"id\": \"it24qzpn5\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 3696,\n          \"y\": -2960\n        },\n        \"subPatch\": \"hbb9h2doz\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"value\",\n          \"value\": \"position:absolute;\\nz-index:9999991;\\nheight: 100%;\\nwidth: 100%;\\nbackground-color: $a;\"\n        },\n        {\n          \"name\": \"Syntax index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Syntax\",\n          \"value\": \"text\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"Format\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"wl2d7to6i\",\n              \"objOut\": \"it24qzpn5\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"6afea9f4-728d-4f3c-9e75-62ddc1448bf0\",\n      \"id\": \"wl2d7to6i\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 3696,\n          \"y\": -2820\n        },\n        \"subPatch\": \"hbb9h2doz\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"String B\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"String C\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"String D\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"String E\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"String F\",\n          \"value\": \"\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"Style\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"jxjjgmh28\",\n              \"objOut\": \"wl2d7to6i\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"321419d9-69c7-4310-a327-93d310bc2b8e\",\n      \"id\": \"8opfgnhez\",\n      \"uiAttribs\": {\n        \"title\": \"var get\",\n        \"translate\": {\n          \"x\": 3840,\n          \"y\": -2960\n        },\n        \"subPatch\": \"hbb9h2doz\",\n        \"extendTitle\": \"#themeColors\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Variable\",\n          \"value\": \"themeColors\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Value\",\n          \"links\": [\n            {\n              \"portIn\": \"Object\",\n              \"portOut\": \"Value\",\n              \"objIn\": \"mystlm58p\",\n              \"objOut\": \"8opfgnhez\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"497a6b7c-e33c-45e4-8fb2-a9149d972b5b\",\n      \"id\": \"mystlm58p\",\n      \"uiAttribs\": {\n        \"title\": \"g\",\n        \"translate\": {\n          \"x\": 3732,\n          \"y\": -2880\n        },\n        \"subPatch\": \"hbb9h2doz\",\n        \"extendTitle\": \"BackgroundColorRGB\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Path\",\n          \"value\": \"BackgroundColorRGB\"\n        },\n        {\n          \"name\": \"Output path if missing\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Output\",\n          \"links\": [\n            {\n              \"portIn\": \"String A\",\n              \"portOut\": \"Output\",\n              \"objIn\": \"wl2d7to6i\",\n              \"objOut\": \"mystlm58p\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Found\",\n          \"value\": true\n        }\n      ]\n    },\n    {\n      \"opId\": \"777d00c6-5605-43c5-9b6a-b20d465bd3ba\",\n      \"id\": \"qtwenunuo\",\n      \"uiAttribs\": {\n        \"subPatch\": \"hbb9h2doz\",\n        \"translate\": {\n          \"x\": 3276,\n          \"y\": -2520\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Translate Active\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Translate X\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Unit index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Unit\",\n          \"value\": \"%\"\n        },\n        {\n          \"name\": \"Scale Active\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Scale\",\n          \"value\": 1\n        },\n        {\n          \"name\": \"Rotate Active\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Rot Z\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Set Origin\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Origin X index\",\n          \"value\": 1\n        },\n        {\n          \"name\": \"Origin X\",\n          \"value\": \"center\"\n        },\n        {\n          \"name\": \"Origin Y index\",\n          \"value\": 1\n        },\n        {\n          \"name\": \"Origin Y\",\n          \"value\": \"center\"\n        }\n      ]\n    },\n    {\n      \"opId\": \"06ad9d35-ccf5-4d31-889c-e23fa062588a\",\n      \"id\": \"t3hw32pki\",\n      \"uiAttribs\": {\n        \"subPatch\": \"hbb9h2doz\",\n        \"translate\": {\n          \"x\": 3300,\n          \"y\": -2620\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"easing index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"easing\",\n          \"value\": \"Quart In Out\"\n        },\n        {\n          \"name\": \"duration\",\n          \"value\": 0.5\n        },\n        {\n          \"name\": \"Direction index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Direction\",\n          \"value\": \"Both\"\n        },\n        {\n          \"name\": \"value false\",\n          \"value\": 100\n        },\n        {\n          \"name\": \"value true\",\n          \"value\": 0\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"value\",\n          \"links\": [\n            {\n              \"portIn\": \"Translate Y\",\n              \"portOut\": \"value\",\n              \"objIn\": \"qtwenunuo\",\n              \"objOut\": \"t3hw32pki\"\n            }\n          ]\n        },\n        {\n          \"name\": \"finished\",\n          \"value\": 1\n        }\n      ]\n    },\n    {\n      \"opId\": \"ad7eea9a-f4af-4ab7-bb70-922242529681\",\n      \"id\": \"r61g02rt5\",\n      \"uiAttribs\": {\n        \"title\": \"Page Background\",\n        \"translate\": {\n          \"x\": 3888,\n          \"y\": -2080\n        },\n        \"subPatch\": \"hbb9h2doz\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {}\n    },\n    {\n      \"opId\": \"d55d398c-e68e-486b-b0ce-d9c4bdf7df05\",\n      \"id\": \"t8q75u82l\",\n      \"uiAttribs\": {\n        \"title\": \"DivElement \",\n        \"translate\": {\n          \"x\": 3876,\n          \"y\": -2660\n        },\n        \"color\": null,\n        \"subPatch\": \"hbb9h2doz\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Id\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Class\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Style\",\n          \"value\": \"position:absolute;\\nz-index:999999;\\nbackground-color: rgba(1,1,1,0.2);\\npadding:15px;\\nborder-radius: 10px;\\nfont-size: 18px;\\nleft: 50%;\\ntop: 50%;\\ntransform: translate(-50%, -50%);  /* This shifts the element back by half of its width and height */\\n\\n\\n  /*  height: 100%;  /* Set a fixed height */\\n  /*  overflow: auto;  /* Add scroll if content overflows */\"\n        },\n        {\n          \"name\": \"Interactive\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Propagate Click-Events\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"DOM Element\",\n          \"links\": [\n            {\n              \"portIn\": \"Parent\",\n              \"portOut\": \"DOM Element\",\n              \"objIn\": \"6c87qnomb\",\n              \"objOut\": \"t8q75u82l\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Hover\",\n          \"value\": 0\n        }\n      ]\n    },\n    {\n      \"opId\": \"ad7eea9a-f4af-4ab7-bb70-922242529681\",\n      \"id\": \"6c87qnomb\",\n      \"uiAttribs\": {\n        \"title\": \"Popup Background\",\n        \"translate\": {\n          \"x\": 3912,\n          \"y\": -2180\n        },\n        \"subPatch\": \"hbb9h2doz\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"Parent Out\",\n          \"links\": [\n            {\n              \"portIn\": \"Child 1\",\n              \"portOut\": \"Parent Out\",\n              \"objIn\": \"r61g02rt5\",\n              \"objOut\": \"6c87qnomb\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"9b76d8bc-96ea-4aee-9b91-c9b3d9056785\",\n      \"id\": \"cw2oknbxs\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 3924,\n          \"y\": -2600\n        },\n        \"subPatch\": \"hbb9h2doz\",\n        \"comment\": \"Close \",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": \"Close\"\n        },\n        {\n          \"name\": \"Id\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Class\",\n          \"value\": \"popupCloseMenuButton\"\n        },\n        {\n          \"name\": \"Style\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Interactive\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Propagate Click-Events\",\n          \"value\": true\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"DOM Element\",\n          \"links\": [\n            {\n              \"portIn\": \"Child 1\",\n              \"portOut\": \"DOM Element\",\n              \"objIn\": \"6c87qnomb\",\n              \"objOut\": \"cw2oknbxs\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Hover\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Clicked\",\n          \"links\": [\n            {\n              \"portIn\": \"trigger\",\n              \"portOut\": \"Clicked\",\n              \"objIn\": \"wklxaxj7f\",\n              \"objOut\": \"cw2oknbxs\"\n            },\n            {\n              \"portIn\": \"innerIn_43z0xm2ij\",\n              \"portOut\": \"Clicked\",\n              \"objIn\": \"iffiusbey\",\n              \"objOut\": \"cw2oknbxs\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"9b76d8bc-96ea-4aee-9b91-c9b3d9056785\",\n      \"id\": \"32opcmoj7\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 3972,\n          \"y\": -2520\n        },\n        \"subPatch\": \"hbb9h2doz\",\n        \"comment\": \"1\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Id\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Class\",\n          \"value\": \"popupMenuButton\"\n        },\n        {\n          \"name\": \"Style\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Interactive\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Propagate Click-Events\",\n          \"value\": true\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"DOM Element\",\n          \"links\": [\n            {\n              \"portIn\": \"Child 2\",\n              \"portOut\": \"DOM Element\",\n              \"objIn\": \"6c87qnomb\",\n              \"objOut\": \"32opcmoj7\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Hover\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Clicked\",\n          \"links\": [\n            {\n              \"portIn\": \"trigger\",\n              \"portOut\": \"Clicked\",\n              \"objIn\": \"x46kycdic\",\n              \"objOut\": \"32opcmoj7\"\n            },\n            {\n              \"portIn\": \"innerIn_t0obwgtww\",\n              \"portOut\": \"Clicked\",\n              \"objIn\": \"iffiusbey\",\n              \"objOut\": \"32opcmoj7\"\n            },\n            {\n              \"portIn\": \"trigger\",\n              \"portOut\": \"Clicked\",\n              \"objIn\": \"wklxaxj7f\",\n              \"objOut\": \"32opcmoj7\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"9b76d8bc-96ea-4aee-9b91-c9b3d9056785\",\n      \"id\": \"7k5adqvos\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 4020,\n          \"y\": -2440\n        },\n        \"subPatch\": \"hbb9h2doz\",\n        \"blueprintSubpatch2\": true,\n        \"comment\": \"2\"\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Id\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Class\",\n          \"value\": \"popupMenuButton\"\n        },\n        {\n          \"name\": \"Style\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Interactive\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Propagate Click-Events\",\n          \"value\": true\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"DOM Element\",\n          \"links\": [\n            {\n              \"portIn\": \"Child 3\",\n              \"portOut\": \"DOM Element\",\n              \"objIn\": \"6c87qnomb\",\n              \"objOut\": \"7k5adqvos\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Hover\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Clicked\",\n          \"links\": [\n            {\n              \"portIn\": \"innerIn_013f6ffi7\",\n              \"portOut\": \"Clicked\",\n              \"objIn\": \"iffiusbey\",\n              \"objOut\": \"7k5adqvos\"\n            },\n            {\n              \"portIn\": \"trigger\",\n              \"portOut\": \"Clicked\",\n              \"objIn\": \"wklxaxj7f\",\n              \"objOut\": \"7k5adqvos\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"9b76d8bc-96ea-4aee-9b91-c9b3d9056785\",\n      \"id\": \"auwx55uas\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 4080,\n          \"y\": -2360\n        },\n        \"subPatch\": \"hbb9h2doz\",\n        \"blueprintSubpatch2\": true,\n        \"comment\": \"3\"\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Id\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Class\",\n          \"value\": \"popupMenuButton\"\n        },\n        {\n          \"name\": \"Style\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Interactive\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Propagate Click-Events\",\n          \"value\": true\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"DOM Element\",\n          \"links\": [\n            {\n              \"portIn\": \"Child 4\",\n              \"portOut\": \"DOM Element\",\n              \"objIn\": \"6c87qnomb\",\n              \"objOut\": \"auwx55uas\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Hover\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Clicked\",\n          \"links\": [\n            {\n              \"portIn\": \"innerIn_cyw007cj3\",\n              \"portOut\": \"Clicked\",\n              \"objIn\": \"iffiusbey\",\n              \"objOut\": \"auwx55uas\"\n            },\n            {\n              \"portIn\": \"trigger\",\n              \"portOut\": \"Clicked\",\n              \"objIn\": \"wklxaxj7f\",\n              \"objOut\": \"auwx55uas\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"4313d9bb-96b6-43bc-9190-6068cfb2593c\",\n      \"id\": \"x46kycdic\",\n      \"uiAttribs\": {\n        \"subPatch\": \"hbb9h2doz\",\n        \"translate\": {\n          \"x\": 4260,\n          \"y\": -2460\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Default\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"result\",\n          \"value\": 1\n        }\n      ]\n    },\n    {\n      \"opId\": \"c4e4e933-136e-479e-8de8-0b35b75d9217\",\n      \"id\": \"4b1qy9aab\",\n      \"uiAttribs\": {\n        \"subPatch\": \"hbb9h2doz\",\n        \"translate\": {\n          \"x\": 3276,\n          \"y\": -3040\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"innerOut_wc7xjxfxx\",\n          \"title\": \"Mainloop\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"innerOut_wc7xjxfxx\",\n              \"objIn\": \"t3hw32pki\",\n              \"objOut\": \"4b1qy9aab\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_jkgyh3kxu\",\n          \"title\": \"Open-Close\",\n          \"links\": [\n            {\n              \"portIn\": \"trigger\",\n              \"portOut\": \"innerOut_jkgyh3kxu\",\n              \"objIn\": \"wklxaxj7f\",\n              \"objOut\": \"4b1qy9aab\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_nv2xz3y87\",\n          \"title\": \"Enable 1\",\n          \"links\": [\n            {\n              \"portIn\": \"Visible\",\n              \"portOut\": \"innerOut_nv2xz3y87\",\n              \"objIn\": \"32opcmoj7\",\n              \"objOut\": \"4b1qy9aab\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_ub3mqqtdd\",\n          \"title\": \"String 1\",\n          \"links\": [\n            {\n              \"portIn\": \"Text\",\n              \"portOut\": \"innerOut_ub3mqqtdd\",\n              \"objIn\": \"32opcmoj7\",\n              \"objOut\": \"4b1qy9aab\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_n2tjog8gu\",\n          \"title\": \"Enable 2\",\n          \"links\": [\n            {\n              \"portIn\": \"Visible\",\n              \"portOut\": \"innerOut_n2tjog8gu\",\n              \"objIn\": \"7k5adqvos\",\n              \"objOut\": \"4b1qy9aab\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_3jvojxwe9\",\n          \"title\": \"String 2\",\n          \"links\": [\n            {\n              \"portIn\": \"Text\",\n              \"portOut\": \"innerOut_3jvojxwe9\",\n              \"objIn\": \"7k5adqvos\",\n              \"objOut\": \"4b1qy9aab\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_lmmev5kvn\",\n          \"title\": \"Enable 3\",\n          \"links\": [\n            {\n              \"portIn\": \"Visible\",\n              \"portOut\": \"innerOut_lmmev5kvn\",\n              \"objIn\": \"auwx55uas\",\n              \"objOut\": \"4b1qy9aab\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_0io5ed43a\",\n          \"title\": \"String 3\",\n          \"links\": [\n            {\n              \"portIn\": \"Text\",\n              \"portOut\": \"innerOut_0io5ed43a\",\n              \"objIn\": \"auwx55uas\",\n              \"objOut\": \"4b1qy9aab\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_rzkhmfr8a\",\n          \"title\": \"Enable 4\",\n          \"links\": [\n            {\n              \"portIn\": \"Visible\",\n              \"portOut\": \"innerOut_rzkhmfr8a\",\n              \"objIn\": \"gi2pbgkd2\",\n              \"objOut\": \"4b1qy9aab\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_5fx1n7v3d\",\n          \"title\": \"String 4\",\n          \"links\": [\n            {\n              \"portIn\": \"Text\",\n              \"portOut\": \"innerOut_5fx1n7v3d\",\n              \"objIn\": \"gi2pbgkd2\",\n              \"objOut\": \"4b1qy9aab\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"02d45073-7936-4830-81ad-59a162febf1f\",\n      \"id\": \"iffiusbey\",\n      \"uiAttribs\": {\n        \"subPatch\": \"hbb9h2doz\",\n        \"translate\": {\n          \"x\": 3276,\n          \"y\": -2000\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"innerIn_43z0xm2ij\",\n          \"title\": \"Close\"\n        },\n        {\n          \"name\": \"innerIn_t0obwgtww\",\n          \"title\": \"Button 1\"\n        },\n        {\n          \"name\": \"innerIn_013f6ffi7\",\n          \"title\": \"Button 2\"\n        },\n        {\n          \"name\": \"innerIn_cyw007cj3\",\n          \"title\": \"Button 3\"\n        },\n        {\n          \"name\": \"innerIn_ehnih43tt\",\n          \"title\": \"Button 4\"\n        }\n      ]\n    },\n    {\n      \"opId\": \"4516be54-9077-490f-a094-83696b9011ba\",\n      \"id\": \"5rr2y1eyr\",\n      \"uiAttribs\": {\n        \"subPatch\": \"hbb9h2doz\",\n        \"translate\": {\n          \"x\": 3336,\n          \"y\": -2700\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Delay True\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Delay False\",\n          \"value\": 0.5\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Out Value\",\n          \"links\": [\n            {\n              \"portIn\": \"Visible\",\n              \"portOut\": \"Out Value\",\n              \"objIn\": \"jxjjgmh28\",\n              \"objOut\": \"5rr2y1eyr\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"4313d9bb-96b6-43bc-9190-6068cfb2593c\",\n      \"id\": \"wklxaxj7f\",\n      \"uiAttribs\": {\n        \"subPatch\": \"hbb9h2doz\",\n        \"translate\": {\n          \"x\": 3336,\n          \"y\": -2780\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Default\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"result\",\n          \"links\": [\n            {\n              \"portIn\": \"bool\",\n              \"portOut\": \"result\",\n              \"objIn\": \"t3hw32pki\",\n              \"objOut\": \"wklxaxj7f\"\n            },\n            {\n              \"portIn\": \"Value\",\n              \"portOut\": \"result\",\n              \"objIn\": \"5rr2y1eyr\",\n              \"objOut\": \"wklxaxj7f\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"9b76d8bc-96ea-4aee-9b91-c9b3d9056785\",\n      \"id\": \"gi2pbgkd2\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 4092,\n          \"y\": -2280\n        },\n        \"subPatch\": \"hbb9h2doz\",\n        \"comment\": \"4\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Id\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Class\",\n          \"value\": \"popupMenuButton\"\n        },\n        {\n          \"name\": \"Style\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Interactive\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Propagate Click-Events\",\n          \"value\": true\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"DOM Element\",\n          \"links\": [\n            {\n              \"portIn\": \"Child 5\",\n              \"portOut\": \"DOM Element\",\n              \"objIn\": \"6c87qnomb\",\n              \"objOut\": \"gi2pbgkd2\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Hover\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Clicked\",\n          \"links\": [\n            {\n              \"portIn\": \"innerIn_ehnih43tt\",\n              \"portOut\": \"Clicked\",\n              \"objIn\": \"iffiusbey\",\n              \"objOut\": \"gi2pbgkd2\"\n            },\n            {\n              \"portIn\": \"trigger\",\n              \"portOut\": \"Clicked\",\n              \"objIn\": \"wklxaxj7f\",\n              \"objOut\": \"gi2pbgkd2\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}",};
const port_wc7xjxfxx=op.inTrigger("wc7xjxfxx");
port_wc7xjxfxx.setUiAttribs({title:"Mainloop",});

const port_jkgyh3kxu=op.inTrigger("jkgyh3kxu");
port_jkgyh3kxu.setUiAttribs({title:"Open-Close",});

const port_nv2xz3y87=op.inFloat("nv2xz3y87",0);
port_nv2xz3y87.setUiAttribs({title:"Enable 1",display:"bool",});

const port_ub3mqqtdd=op.inString("ub3mqqtdd","");
port_ub3mqqtdd.setUiAttribs({title:"String 1",});

const port_n2tjog8gu=op.inFloat("n2tjog8gu",0);
port_n2tjog8gu.setUiAttribs({title:"Enable 2",display:"bool",});

const port_3jvojxwe9=op.inString("3jvojxwe9","");
port_3jvojxwe9.setUiAttribs({title:"String 2",});

const port_lmmev5kvn=op.inFloat("lmmev5kvn",0);
port_lmmev5kvn.setUiAttribs({title:"Enable 3",display:"bool",});

const port_0io5ed43a=op.inString("0io5ed43a","");
port_0io5ed43a.setUiAttribs({title:"String 3",});

const port_rzkhmfr8a=op.inFloat("rzkhmfr8a",0);
port_rzkhmfr8a.setUiAttribs({title:"Enable 4",display:"bool",});

const port_5fx1n7v3d=op.inString("5fx1n7v3d","");
port_5fx1n7v3d.setUiAttribs({title:"String 4",});

const port_43z0xm2ij=op.outTrigger("43z0xm2ij");
port_43z0xm2ij.setUiAttribs({title:"Close",});

const port_t0obwgtww=op.outTrigger("t0obwgtww");
port_t0obwgtww.setUiAttribs({title:"Button 1",});

const port_013f6ffi7=op.outTrigger("013f6ffi7");
port_013f6ffi7.setUiAttribs({title:"Button 2",});

const port_cyw007cj3=op.outTrigger("cyw007cj3");
port_cyw007cj3.setUiAttribs({title:"Button 3",});

const port_ehnih43tt=op.outTrigger("ehnih43tt");
port_ehnih43tt.setUiAttribs({title:"Button 4",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_wc7xjxfxx = addedOps[i].outTrigger("innerOut_wc7xjxfxx");
innerOut_wc7xjxfxx.setUiAttribs({title:"Mainloop"});
port_wc7xjxfxx.onTriggered = () => { innerOut_wc7xjxfxx.trigger(); };

const innerOut_jkgyh3kxu = addedOps[i].outTrigger("innerOut_jkgyh3kxu");
innerOut_jkgyh3kxu.setUiAttribs({title:"Open-Close"});
port_jkgyh3kxu.onTriggered = () => { innerOut_jkgyh3kxu.trigger(); };

const innerOut_nv2xz3y87 = addedOps[i].outNumber("innerOut_nv2xz3y87");
innerOut_nv2xz3y87.set(port_nv2xz3y87.get() );
innerOut_nv2xz3y87.setUiAttribs({title:"Enable 1"});
port_nv2xz3y87.on("change", (a,v) => { innerOut_nv2xz3y87.set(a); });

const innerOut_ub3mqqtdd = addedOps[i].outString("innerOut_ub3mqqtdd");
innerOut_ub3mqqtdd.set(port_ub3mqqtdd.get() );
innerOut_ub3mqqtdd.setUiAttribs({title:"String 1"});
port_ub3mqqtdd.on("change", (a,v) => { innerOut_ub3mqqtdd.set(a); });

const innerOut_n2tjog8gu = addedOps[i].outNumber("innerOut_n2tjog8gu");
innerOut_n2tjog8gu.set(port_n2tjog8gu.get() );
innerOut_n2tjog8gu.setUiAttribs({title:"Enable 2"});
port_n2tjog8gu.on("change", (a,v) => { innerOut_n2tjog8gu.set(a); });

const innerOut_3jvojxwe9 = addedOps[i].outString("innerOut_3jvojxwe9");
innerOut_3jvojxwe9.set(port_3jvojxwe9.get() );
innerOut_3jvojxwe9.setUiAttribs({title:"String 2"});
port_3jvojxwe9.on("change", (a,v) => { innerOut_3jvojxwe9.set(a); });

const innerOut_lmmev5kvn = addedOps[i].outNumber("innerOut_lmmev5kvn");
innerOut_lmmev5kvn.set(port_lmmev5kvn.get() );
innerOut_lmmev5kvn.setUiAttribs({title:"Enable 3"});
port_lmmev5kvn.on("change", (a,v) => { innerOut_lmmev5kvn.set(a); });

const innerOut_0io5ed43a = addedOps[i].outString("innerOut_0io5ed43a");
innerOut_0io5ed43a.set(port_0io5ed43a.get() );
innerOut_0io5ed43a.setUiAttribs({title:"String 3"});
port_0io5ed43a.on("change", (a,v) => { innerOut_0io5ed43a.set(a); });

const innerOut_rzkhmfr8a = addedOps[i].outNumber("innerOut_rzkhmfr8a");
innerOut_rzkhmfr8a.set(port_rzkhmfr8a.get() );
innerOut_rzkhmfr8a.setUiAttribs({title:"Enable 4"});
port_rzkhmfr8a.on("change", (a,v) => { innerOut_rzkhmfr8a.set(a); });

const innerOut_5fx1n7v3d = addedOps[i].outString("innerOut_5fx1n7v3d");
innerOut_5fx1n7v3d.set(port_5fx1n7v3d.get() );
innerOut_5fx1n7v3d.setUiAttribs({title:"String 4"});
port_5fx1n7v3d.on("change", (a,v) => { innerOut_5fx1n7v3d.set(a); });

    }
if(addedOps[i].innerOutput)
{
const innerIn_43z0xm2ij = addedOps[i].inTrigger("innerIn_43z0xm2ij");
innerIn_43z0xm2ij.setUiAttribs({title:"Close"});
innerIn_43z0xm2ij.onTriggered = () => { port_43z0xm2ij.trigger(); };

const innerIn_t0obwgtww = addedOps[i].inTrigger("innerIn_t0obwgtww");
innerIn_t0obwgtww.setUiAttribs({title:"Button 1"});
innerIn_t0obwgtww.onTriggered = () => { port_t0obwgtww.trigger(); };

const innerIn_013f6ffi7 = addedOps[i].inTrigger("innerIn_013f6ffi7");
innerIn_013f6ffi7.setUiAttribs({title:"Button 2"});
innerIn_013f6ffi7.onTriggered = () => { port_013f6ffi7.trigger(); };

const innerIn_cyw007cj3 = addedOps[i].inTrigger("innerIn_cyw007cj3");
innerIn_cyw007cj3.setUiAttribs({title:"Button 3"});
innerIn_cyw007cj3.onTriggered = () => { port_cyw007cj3.trigger(); };

const innerIn_ehnih43tt = addedOps[i].inTrigger("innerIn_ehnih43tt");
innerIn_ehnih43tt.setUiAttribs({title:"Button 4"});
innerIn_ehnih43tt.onTriggered = () => { port_ehnih43tt.trigger(); };

}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.User.rambodc.PopupMenu.prototype = new CABLES.Op();
CABLES.OPS["6bced61d-78f7-4872-894b-5759aad658ab"]={f:Ops.User.rambodc.PopupMenu,objName:"Ops.User.rambodc.PopupMenu"};




// **************************************************************
// 
// Ops.User.rambodc.PopupConfirm
// 
// **************************************************************

Ops.User.rambodc.PopupConfirm = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_wc7xjxfxx=op.inTrigger(\"wc7xjxfxx\");\nport_wc7xjxfxx.setUiAttribs({title:\"Mainloop\",});\n\nconst port_jkgyh3kxu=op.inTrigger(\"jkgyh3kxu\");\nport_jkgyh3kxu.setUiAttribs({title:\"Open-Close\",});\n\nconst port_fccmfmizk=op.inString(\"fccmfmizk\",\"\");\nport_fccmfmizk.setUiAttribs({title:\"Title\",});\n\nconst port_yg7pzsd2h=op.inString(\"yg7pzsd2h\",\"\");\nport_yg7pzsd2h.setUiAttribs({title:\"Description\",});\n\nconst port_dh4z8d352=op.inString(\"dh4z8d352\",\"\");\nport_dh4z8d352.setUiAttribs({title:\"Confirm Name\",});\n\nconst port_m7xnkx5rp=op.inString(\"m7xnkx5rp\",\"\");\nport_m7xnkx5rp.setUiAttribs({title:\"Cancel Name\",});\n\nconst port_43z0xm2ij=op.outTrigger(\"43z0xm2ij\");\nport_43z0xm2ij.setUiAttribs({title:\"Confirm\",});\n\nconst port_t0obwgtww=op.outTrigger(\"t0obwgtww\");\nport_t0obwgtww.setUiAttribs({title:\"Cancel\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_wc7xjxfxx = addedOps[i].outTrigger(\"innerOut_wc7xjxfxx\");\ninnerOut_wc7xjxfxx.setUiAttribs({title:\"Mainloop\"});\nport_wc7xjxfxx.onTriggered = () => { innerOut_wc7xjxfxx.trigger(); };\n\nconst innerOut_jkgyh3kxu = addedOps[i].outTrigger(\"innerOut_jkgyh3kxu\");\ninnerOut_jkgyh3kxu.setUiAttribs({title:\"Open-Close\"});\nport_jkgyh3kxu.onTriggered = () => { innerOut_jkgyh3kxu.trigger(); };\n\nconst innerOut_fccmfmizk = addedOps[i].outString(\"innerOut_fccmfmizk\");\ninnerOut_fccmfmizk.set(port_fccmfmizk.get() );\ninnerOut_fccmfmizk.setUiAttribs({title:\"Title\"});\nport_fccmfmizk.on(\"change\", (a,v) => { innerOut_fccmfmizk.set(a); });\n\nconst innerOut_yg7pzsd2h = addedOps[i].outString(\"innerOut_yg7pzsd2h\");\ninnerOut_yg7pzsd2h.set(port_yg7pzsd2h.get() );\ninnerOut_yg7pzsd2h.setUiAttribs({title:\"Description\"});\nport_yg7pzsd2h.on(\"change\", (a,v) => { innerOut_yg7pzsd2h.set(a); });\n\nconst innerOut_dh4z8d352 = addedOps[i].outString(\"innerOut_dh4z8d352\");\ninnerOut_dh4z8d352.set(port_dh4z8d352.get() );\ninnerOut_dh4z8d352.setUiAttribs({title:\"Confirm Name\"});\nport_dh4z8d352.on(\"change\", (a,v) => { innerOut_dh4z8d352.set(a); });\n\nconst innerOut_m7xnkx5rp = addedOps[i].outString(\"innerOut_m7xnkx5rp\");\ninnerOut_m7xnkx5rp.set(port_m7xnkx5rp.get() );\ninnerOut_m7xnkx5rp.setUiAttribs({title:\"Cancel Name\"});\nport_m7xnkx5rp.on(\"change\", (a,v) => { innerOut_m7xnkx5rp.set(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\nconst innerIn_43z0xm2ij = addedOps[i].inTrigger(\"innerIn_43z0xm2ij\");\ninnerIn_43z0xm2ij.setUiAttribs({title:\"Confirm\"});\ninnerIn_43z0xm2ij.onTriggered = () => { port_43z0xm2ij.trigger(); };\n\nconst innerIn_t0obwgtww = addedOps[i].inTrigger(\"innerIn_t0obwgtww\");\ninnerIn_t0obwgtww.setUiAttribs({title:\"Cancel\"});\ninnerIn_t0obwgtww.onTriggered = () => { port_t0obwgtww.trigger(); };\n\n}\n}\n};\n","ports_json":"{\n    \"ports\": [\n        {\n            \"id\": \"wc7xjxfxx\",\n            \"title\": \"Mainloop\",\n            \"dir\": 0,\n            \"type\": 1,\n            \"order\": 0\n        },\n        {\n            \"id\": \"jkgyh3kxu\",\n            \"title\": \"Open-Close\",\n            \"dir\": 0,\n            \"type\": 1,\n            \"order\": 1\n        },\n        {\n            \"id\": \"fccmfmizk\",\n            \"title\": \"Title\",\n            \"dir\": 0,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 2\n        },\n        {\n            \"id\": \"yg7pzsd2h\",\n            \"title\": \"Description\",\n            \"dir\": 0,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 3\n        },\n        {\n            \"id\": \"dh4z8d352\",\n            \"title\": \"Confirm Name\",\n            \"dir\": 0,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 4\n        },\n        {\n            \"id\": \"m7xnkx5rp\",\n            \"title\": \"Cancel Name\",\n            \"dir\": 0,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 5\n        },\n        {\n            \"id\": \"43z0xm2ij\",\n            \"title\": \"Confirm\",\n            \"dir\": 1,\n            \"type\": 1,\n            \"order\": 1006\n        },\n        {\n            \"id\": \"t0obwgtww\",\n            \"title\": \"Cancel\",\n            \"dir\": 1,\n            \"type\": 1,\n            \"order\": 1007\n        }\n    ]\n}","subpatch_json":"{\n  \"ops\": [\n    {\n      \"opId\": \"d55d398c-e68e-486b-b0ce-d9c4bdf7df05\",\n      \"id\": \"yytt2e4rq\",\n      \"uiAttribs\": {\n        \"title\": \"Div Background\",\n        \"translate\": {\n          \"x\": 3660,\n          \"y\": -2720\n        },\n        \"color\": null,\n        \"subPatch\": \"y8ukm5lwn\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Id\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Class\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Interactive\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Propagate Click-Events\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"DOM Element\",\n          \"links\": [\n            {\n              \"portIn\": \"Element\",\n              \"portOut\": \"DOM Element\",\n              \"objIn\": \"7ay9ub3fi\",\n              \"objOut\": \"yytt2e4rq\"\n            },\n            {\n              \"portIn\": \"Parent\",\n              \"portOut\": \"DOM Element\",\n              \"objIn\": \"fozelwt6u\",\n              \"objOut\": \"yytt2e4rq\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Hover\",\n          \"value\": 0\n        }\n      ]\n    },\n    {\n      \"opId\": \"6468b7c1-f63e-4db4-b809-4b203d27ead3\",\n      \"id\": \"nev2xejji\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 3696,\n          \"y\": -2960\n        },\n        \"subPatch\": \"y8ukm5lwn\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"value\",\n          \"value\": \"position:absolute;\\nz-index:9999991;\\nheight: 100%;\\nwidth: 100%;\\nbackground-color: $a;\"\n        },\n        {\n          \"name\": \"Syntax index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Syntax\",\n          \"value\": \"text\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"Format\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"u54n9qrfi\",\n              \"objOut\": \"nev2xejji\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"6afea9f4-728d-4f3c-9e75-62ddc1448bf0\",\n      \"id\": \"u54n9qrfi\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 3696,\n          \"y\": -2820\n        },\n        \"subPatch\": \"y8ukm5lwn\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"String A\",\n          \"value\": \"rgb(0, 0, 0, 0.5)\"\n        },\n        {\n          \"name\": \"String B\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"String C\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"String D\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"String E\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"String F\",\n          \"value\": \"\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"Style\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"yytt2e4rq\",\n              \"objOut\": \"u54n9qrfi\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"321419d9-69c7-4310-a327-93d310bc2b8e\",\n      \"id\": \"0jqfqis36\",\n      \"uiAttribs\": {\n        \"title\": \"var get\",\n        \"translate\": {\n          \"x\": 3924,\n          \"y\": -2960\n        },\n        \"subPatch\": \"y8ukm5lwn\",\n        \"extendTitle\": \"#themeColors\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Variable\",\n          \"value\": \"themeColors\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Value\",\n          \"links\": [\n            {\n              \"portIn\": \"Object\",\n              \"portOut\": \"Value\",\n              \"objIn\": \"bocrjs4mi\",\n              \"objOut\": \"0jqfqis36\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"497a6b7c-e33c-45e4-8fb2-a9149d972b5b\",\n      \"id\": \"bocrjs4mi\",\n      \"uiAttribs\": {\n        \"title\": \"g\",\n        \"translate\": {\n          \"x\": 3924,\n          \"y\": -2900\n        },\n        \"subPatch\": \"y8ukm5lwn\",\n        \"extendTitle\": \"BackgroundColorRGB\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Path\",\n          \"value\": \"BackgroundColorRGB\"\n        },\n        {\n          \"name\": \"Output path if missing\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Output\",\n          \"value\": \"rgb(40, 44, 48, 1)\"\n        },\n        {\n          \"name\": \"Found\",\n          \"value\": true\n        }\n      ]\n    },\n    {\n      \"opId\": \"777d00c6-5605-43c5-9b6a-b20d465bd3ba\",\n      \"id\": \"7ay9ub3fi\",\n      \"uiAttribs\": {\n        \"subPatch\": \"y8ukm5lwn\",\n        \"translate\": {\n          \"x\": 3276,\n          \"y\": -2520\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Translate Active\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Translate X\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Unit index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Unit\",\n          \"value\": \"%\"\n        },\n        {\n          \"name\": \"Scale Active\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Scale\",\n          \"value\": 1\n        },\n        {\n          \"name\": \"Rotate Active\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Rot Z\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Set Origin\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Origin X index\",\n          \"value\": 1\n        },\n        {\n          \"name\": \"Origin X\",\n          \"value\": \"center\"\n        },\n        {\n          \"name\": \"Origin Y index\",\n          \"value\": 1\n        },\n        {\n          \"name\": \"Origin Y\",\n          \"value\": \"center\"\n        }\n      ]\n    },\n    {\n      \"opId\": \"06ad9d35-ccf5-4d31-889c-e23fa062588a\",\n      \"id\": \"lvj9rbu78\",\n      \"uiAttribs\": {\n        \"subPatch\": \"y8ukm5lwn\",\n        \"translate\": {\n          \"x\": 3300,\n          \"y\": -2620\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"easing index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"easing\",\n          \"value\": \"Quart In Out\"\n        },\n        {\n          \"name\": \"duration\",\n          \"value\": 0.5\n        },\n        {\n          \"name\": \"Direction index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Direction\",\n          \"value\": \"Both\"\n        },\n        {\n          \"name\": \"value false\",\n          \"value\": 100\n        },\n        {\n          \"name\": \"value true\",\n          \"value\": 0\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"value\",\n          \"links\": [\n            {\n              \"portIn\": \"Translate Y\",\n              \"portOut\": \"value\",\n              \"objIn\": \"7ay9ub3fi\",\n              \"objOut\": \"lvj9rbu78\"\n            }\n          ]\n        },\n        {\n          \"name\": \"finished\",\n          \"value\": 1\n        }\n      ]\n    },\n    {\n      \"opId\": \"ad7eea9a-f4af-4ab7-bb70-922242529681\",\n      \"id\": \"fozelwt6u\",\n      \"uiAttribs\": {\n        \"title\": \"Page Background\",\n        \"translate\": {\n          \"x\": 3888,\n          \"y\": -2080\n        },\n        \"subPatch\": \"y8ukm5lwn\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {}\n    },\n    {\n      \"opId\": \"d55d398c-e68e-486b-b0ce-d9c4bdf7df05\",\n      \"id\": \"75jl0j22n\",\n      \"uiAttribs\": {\n        \"title\": \"DivElement \",\n        \"translate\": {\n          \"x\": 3876,\n          \"y\": -2660\n        },\n        \"color\": null,\n        \"subPatch\": \"y8ukm5lwn\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Text\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Id\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Class\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Style\",\n          \"value\": \"position:absolute;\\nz-index:999999;\\nbackground-color: rgba(135,135,135,1);\\npadding:10px;\\nborder-radius: 10px;\\nfont-size: 18px;\\nleft: 50%;\\ntop: 50%;\\ntransform: translate(-50%, -50%);  /* This shifts the element back by half of its width and height */\\n\\n\\n  /*  height: 100%;  /* Set a fixed height */\\n  /*  overflow: auto;  /* Add scroll if content overflows */\"\n        },\n        {\n          \"name\": \"Interactive\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Propagate Click-Events\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"DOM Element\",\n          \"links\": [\n            {\n              \"portIn\": \"Parent\",\n              \"portOut\": \"DOM Element\",\n              \"objIn\": \"h8n0fqig2\",\n              \"objOut\": \"75jl0j22n\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Hover\",\n          \"value\": 0\n        }\n      ]\n    },\n    {\n      \"opId\": \"ad7eea9a-f4af-4ab7-bb70-922242529681\",\n      \"id\": \"h8n0fqig2\",\n      \"uiAttribs\": {\n        \"title\": \"Popup Background\",\n        \"translate\": {\n          \"x\": 3912,\n          \"y\": -2180\n        },\n        \"subPatch\": \"y8ukm5lwn\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"Parent Out\",\n          \"links\": [\n            {\n              \"portIn\": \"Child 1\",\n              \"portOut\": \"Parent Out\",\n              \"objIn\": \"fozelwt6u\",\n              \"objOut\": \"h8n0fqig2\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"9b76d8bc-96ea-4aee-9b91-c9b3d9056785\",\n      \"id\": \"2nussa4se\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 3924,\n          \"y\": -2600\n        },\n        \"subPatch\": \"y8ukm5lwn\",\n        \"comment\": \"Title\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Id\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Class\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Style\",\n          \"value\": \"font-size: 22px; \\npadding:10px;\\ncolor: #ffffff; \\nfont-weight: bold; \\ntext-align: center;\\nwidth: 220px;\"\n        },\n        {\n          \"name\": \"Interactive\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Propagate Click-Events\",\n          \"value\": true\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"DOM Element\",\n          \"links\": [\n            {\n              \"portIn\": \"Child 1\",\n              \"portOut\": \"DOM Element\",\n              \"objIn\": \"h8n0fqig2\",\n              \"objOut\": \"2nussa4se\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Hover\",\n          \"value\": 0\n        }\n      ]\n    },\n    {\n      \"opId\": \"9b76d8bc-96ea-4aee-9b91-c9b3d9056785\",\n      \"id\": \"1din232nx\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 3972,\n          \"y\": -2520\n        },\n        \"subPatch\": \"y8ukm5lwn\",\n        \"comment\": \"Description\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Id\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Class\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Style\",\n          \"value\": \"font-size: 16px; \\npadding:10px;\\ncolor: #ffffff; \\nfont-weight: normal; \\ntext-align: left;\\nwidth: 220px;\\n\"\n        },\n        {\n          \"name\": \"Interactive\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Propagate Click-Events\",\n          \"value\": true\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"DOM Element\",\n          \"links\": [\n            {\n              \"portIn\": \"Child 2\",\n              \"portOut\": \"DOM Element\",\n              \"objIn\": \"h8n0fqig2\",\n              \"objOut\": \"1din232nx\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Hover\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Clicked\",\n          \"links\": [\n            {\n              \"portIn\": \"trigger\",\n              \"portOut\": \"Clicked\",\n              \"objIn\": \"tikhrql9e\",\n              \"objOut\": \"1din232nx\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"9b76d8bc-96ea-4aee-9b91-c9b3d9056785\",\n      \"id\": \"lqapt36x9\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 4020,\n          \"y\": -2440\n        },\n        \"subPatch\": \"y8ukm5lwn\",\n        \"blueprintSubpatch2\": true,\n        \"comment\": \"Confirm\"\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Id\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Class\",\n          \"value\": \"popupMenuButton\"\n        },\n        {\n          \"name\": \"Style\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Interactive\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Propagate Click-Events\",\n          \"value\": true\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"DOM Element\",\n          \"links\": [\n            {\n              \"portIn\": \"Child 3\",\n              \"portOut\": \"DOM Element\",\n              \"objIn\": \"h8n0fqig2\",\n              \"objOut\": \"lqapt36x9\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Hover\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Clicked\",\n          \"links\": [\n            {\n              \"portIn\": \"trigger\",\n              \"portOut\": \"Clicked\",\n              \"objIn\": \"tikhrql9e\",\n              \"objOut\": \"lqapt36x9\"\n            },\n            {\n              \"portIn\": \"innerIn_43z0xm2ij\",\n              \"portOut\": \"Clicked\",\n              \"objIn\": \"rrzwdiih1\",\n              \"objOut\": \"lqapt36x9\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"9b76d8bc-96ea-4aee-9b91-c9b3d9056785\",\n      \"id\": \"lca5mfulb\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 4080,\n          \"y\": -2360\n        },\n        \"subPatch\": \"y8ukm5lwn\",\n        \"blueprintSubpatch2\": true,\n        \"comment\": \"Cancel\"\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Id\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Class\",\n          \"value\": \"popupMenuButton\"\n        },\n        {\n          \"name\": \"Style\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Interactive\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Visible\",\n          \"value\": true\n        },\n        {\n          \"name\": \"Convert Line Breaks\",\n          \"value\": false\n        },\n        {\n          \"name\": \"Propagate Click-Events\",\n          \"value\": true\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"DOM Element\",\n          \"links\": [\n            {\n              \"portIn\": \"Child 4\",\n              \"portOut\": \"DOM Element\",\n              \"objIn\": \"h8n0fqig2\",\n              \"objOut\": \"lca5mfulb\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Hover\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Clicked\",\n          \"links\": [\n            {\n              \"portIn\": \"trigger\",\n              \"portOut\": \"Clicked\",\n              \"objIn\": \"tikhrql9e\",\n              \"objOut\": \"lca5mfulb\"\n            },\n            {\n              \"portIn\": \"innerIn_t0obwgtww\",\n              \"portOut\": \"Clicked\",\n              \"objIn\": \"rrzwdiih1\",\n              \"objOut\": \"lca5mfulb\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"c4e4e933-136e-479e-8de8-0b35b75d9217\",\n      \"id\": \"3dkyqgzj3\",\n      \"uiAttribs\": {\n        \"subPatch\": \"y8ukm5lwn\",\n        \"translate\": {\n          \"x\": 3276,\n          \"y\": -3040\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"innerOut_wc7xjxfxx\",\n          \"title\": \"Mainloop\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"innerOut_wc7xjxfxx\",\n              \"objIn\": \"lvj9rbu78\",\n              \"objOut\": \"3dkyqgzj3\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_jkgyh3kxu\",\n          \"title\": \"Open-Close\",\n          \"links\": [\n            {\n              \"portIn\": \"trigger\",\n              \"portOut\": \"innerOut_jkgyh3kxu\",\n              \"objIn\": \"tikhrql9e\",\n              \"objOut\": \"3dkyqgzj3\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_fccmfmizk\",\n          \"title\": \"Title\",\n          \"links\": [\n            {\n              \"portIn\": \"Text\",\n              \"portOut\": \"innerOut_fccmfmizk\",\n              \"objIn\": \"2nussa4se\",\n              \"objOut\": \"3dkyqgzj3\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_yg7pzsd2h\",\n          \"title\": \"Description\",\n          \"links\": [\n            {\n              \"portIn\": \"Text\",\n              \"portOut\": \"innerOut_yg7pzsd2h\",\n              \"objIn\": \"1din232nx\",\n              \"objOut\": \"3dkyqgzj3\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_dh4z8d352\",\n          \"title\": \"Confirm Name\",\n          \"links\": [\n            {\n              \"portIn\": \"Text\",\n              \"portOut\": \"innerOut_dh4z8d352\",\n              \"objIn\": \"lqapt36x9\",\n              \"objOut\": \"3dkyqgzj3\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_m7xnkx5rp\",\n          \"title\": \"Cancel Name\",\n          \"links\": [\n            {\n              \"portIn\": \"Text\",\n              \"portOut\": \"innerOut_m7xnkx5rp\",\n              \"objIn\": \"lca5mfulb\",\n              \"objOut\": \"3dkyqgzj3\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"02d45073-7936-4830-81ad-59a162febf1f\",\n      \"id\": \"rrzwdiih1\",\n      \"uiAttribs\": {\n        \"subPatch\": \"y8ukm5lwn\",\n        \"translate\": {\n          \"x\": 3276,\n          \"y\": -2000\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"innerIn_43z0xm2ij\",\n          \"title\": \"Confirm\"\n        },\n        {\n          \"name\": \"innerIn_t0obwgtww\",\n          \"title\": \"Cancel\"\n        }\n      ]\n    },\n    {\n      \"opId\": \"4516be54-9077-490f-a094-83696b9011ba\",\n      \"id\": \"zs2pn73q2\",\n      \"uiAttribs\": {\n        \"subPatch\": \"y8ukm5lwn\",\n        \"translate\": {\n          \"x\": 3336,\n          \"y\": -2700\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Delay True\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Delay False\",\n          \"value\": 0.5\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Out Value\",\n          \"links\": [\n            {\n              \"portIn\": \"Visible\",\n              \"portOut\": \"Out Value\",\n              \"objIn\": \"yytt2e4rq\",\n              \"objOut\": \"zs2pn73q2\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"4313d9bb-96b6-43bc-9190-6068cfb2593c\",\n      \"id\": \"tikhrql9e\",\n      \"uiAttribs\": {\n        \"subPatch\": \"y8ukm5lwn\",\n        \"translate\": {\n          \"x\": 3336,\n          \"y\": -2780\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Default\",\n          \"value\": false\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"result\",\n          \"links\": [\n            {\n              \"portIn\": \"bool\",\n              \"portOut\": \"result\",\n              \"objIn\": \"lvj9rbu78\",\n              \"objOut\": \"tikhrql9e\"\n            },\n            {\n              \"portIn\": \"Value\",\n              \"portOut\": \"result\",\n              \"objIn\": \"zs2pn73q2\",\n              \"objOut\": \"tikhrql9e\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}",};
const port_wc7xjxfxx=op.inTrigger("wc7xjxfxx");
port_wc7xjxfxx.setUiAttribs({title:"Mainloop",});

const port_jkgyh3kxu=op.inTrigger("jkgyh3kxu");
port_jkgyh3kxu.setUiAttribs({title:"Open-Close",});

const port_fccmfmizk=op.inString("fccmfmizk","");
port_fccmfmizk.setUiAttribs({title:"Title",});

const port_yg7pzsd2h=op.inString("yg7pzsd2h","");
port_yg7pzsd2h.setUiAttribs({title:"Description",});

const port_dh4z8d352=op.inString("dh4z8d352","");
port_dh4z8d352.setUiAttribs({title:"Confirm Name",});

const port_m7xnkx5rp=op.inString("m7xnkx5rp","");
port_m7xnkx5rp.setUiAttribs({title:"Cancel Name",});

const port_43z0xm2ij=op.outTrigger("43z0xm2ij");
port_43z0xm2ij.setUiAttribs({title:"Confirm",});

const port_t0obwgtww=op.outTrigger("t0obwgtww");
port_t0obwgtww.setUiAttribs({title:"Cancel",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_wc7xjxfxx = addedOps[i].outTrigger("innerOut_wc7xjxfxx");
innerOut_wc7xjxfxx.setUiAttribs({title:"Mainloop"});
port_wc7xjxfxx.onTriggered = () => { innerOut_wc7xjxfxx.trigger(); };

const innerOut_jkgyh3kxu = addedOps[i].outTrigger("innerOut_jkgyh3kxu");
innerOut_jkgyh3kxu.setUiAttribs({title:"Open-Close"});
port_jkgyh3kxu.onTriggered = () => { innerOut_jkgyh3kxu.trigger(); };

const innerOut_fccmfmizk = addedOps[i].outString("innerOut_fccmfmizk");
innerOut_fccmfmizk.set(port_fccmfmizk.get() );
innerOut_fccmfmizk.setUiAttribs({title:"Title"});
port_fccmfmizk.on("change", (a,v) => { innerOut_fccmfmizk.set(a); });

const innerOut_yg7pzsd2h = addedOps[i].outString("innerOut_yg7pzsd2h");
innerOut_yg7pzsd2h.set(port_yg7pzsd2h.get() );
innerOut_yg7pzsd2h.setUiAttribs({title:"Description"});
port_yg7pzsd2h.on("change", (a,v) => { innerOut_yg7pzsd2h.set(a); });

const innerOut_dh4z8d352 = addedOps[i].outString("innerOut_dh4z8d352");
innerOut_dh4z8d352.set(port_dh4z8d352.get() );
innerOut_dh4z8d352.setUiAttribs({title:"Confirm Name"});
port_dh4z8d352.on("change", (a,v) => { innerOut_dh4z8d352.set(a); });

const innerOut_m7xnkx5rp = addedOps[i].outString("innerOut_m7xnkx5rp");
innerOut_m7xnkx5rp.set(port_m7xnkx5rp.get() );
innerOut_m7xnkx5rp.setUiAttribs({title:"Cancel Name"});
port_m7xnkx5rp.on("change", (a,v) => { innerOut_m7xnkx5rp.set(a); });

    }
if(addedOps[i].innerOutput)
{
const innerIn_43z0xm2ij = addedOps[i].inTrigger("innerIn_43z0xm2ij");
innerIn_43z0xm2ij.setUiAttribs({title:"Confirm"});
innerIn_43z0xm2ij.onTriggered = () => { port_43z0xm2ij.trigger(); };

const innerIn_t0obwgtww = addedOps[i].inTrigger("innerIn_t0obwgtww");
innerIn_t0obwgtww.setUiAttribs({title:"Cancel"});
innerIn_t0obwgtww.onTriggered = () => { port_t0obwgtww.trigger(); };

}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.User.rambodc.PopupConfirm.prototype = new CABLES.Op();
CABLES.OPS["713c7ea4-b4fd-4c2e-9755-12098282ee0a"]={f:Ops.User.rambodc.PopupConfirm,objName:"Ops.User.rambodc.PopupConfirm"};




// **************************************************************
// 
// Ops.Website.SetLocationHash
// 
// **************************************************************

Ops.Website.SetLocationHash = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    hashIn = op.inString("Hash", ""),
    inUpdate = op.inTriggerButton("Update"),
    activeIn = op.inBool("Active", false),
    silentIn = op.inBool("Silent", true),
    reloadIn = op.inBool("Allow Empty", false);

inUpdate.onTriggered = update;

function update()
{
    if (!activeIn.get()) return;

    let hash = "";
    if (hashIn.get())
    {
        hash = "#" + hashIn.get();
    }

    if (window.location.hash == hash)
    {
        return;
    }

    try
    {
        op.setUiError("overload", null);
        const event = new Event("hashchange");
        event.oldURL = window.location.href;
        if (silentIn.get()) event.silent = true;

        if (hash)
        {
            history.replaceState(null, null, window.location.pathname + hash);
        }
        else if (reloadIn.get())
        {
            history.replaceState(null, null, window.location.pathname);
        }
        event.newURL = window.location.href;
        op.patch.emitEvent("LocationHashChange", event);
        window.dispatchEvent(event);
    }
    catch (e)
    {
        op.setUiError("overload", "too many changes to the location hash, throttle down");
        op.log(e.message);
    }
}


};

Ops.Website.SetLocationHash.prototype = new CABLES.Op();
CABLES.OPS["82492357-c11d-4b76-bd57-b296d3b79b83"]={f:Ops.Website.SetLocationHash,objName:"Ops.Website.SetLocationHash"};




// **************************************************************
// 
// Ops.Trigger.DelayedTrigger
// 
// **************************************************************

Ops.Trigger.DelayedTrigger = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("exe"),
    delay = op.inValueFloat("delay", 1),
    cancel = op.inTriggerButton("Cancel"),
    next = op.outTrigger("next"),
    outDelaying = op.outBool("Delaying");

let lastTimeout = null;

cancel.onTriggered = function ()
{
    if (lastTimeout)clearTimeout(lastTimeout);
    lastTimeout = null;
};

exe.onTriggered = function ()
{
    outDelaying.set(true);
    if (lastTimeout)clearTimeout(lastTimeout);

    lastTimeout = setTimeout(
        function ()
        {
            outDelaying.set(false);
            lastTimeout = null;
            next.trigger();
        },
        delay.get() * 1000);
};


};

Ops.Trigger.DelayedTrigger.prototype = new CABLES.Op();
CABLES.OPS["f4ff66b0-8500-46f7-9117-832aea0c2750"]={f:Ops.Trigger.DelayedTrigger,objName:"Ops.Trigger.DelayedTrigger"};




// **************************************************************
// 
// Ops.Ui.SubPatchInput
// 
// **************************************************************

Ops.Ui.SubPatchInput = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
op.innerInput = true;

const goto = op.inTriggerButton("Goto SubPatchOp");
goto.setUiAttribs({ "hidePort": true });
goto.onTriggered = () =>
{
    const parent = op.patch.getSubPatchOuterOp(op.uiAttribs.subPatch);
    gui.patchView.centerSelectOp(parent.id);
};


};

Ops.Ui.SubPatchInput.prototype = new CABLES.Op();
CABLES.OPS["c4e4e933-136e-479e-8de8-0b35b75d9217"]={f:Ops.Ui.SubPatchInput,objName:"Ops.Ui.SubPatchInput"};




// **************************************************************
// 
// Ops.Ui.SubPatchOutput
// 
// **************************************************************

Ops.Ui.SubPatchOutput = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
op.innerOutput = true;


};

Ops.Ui.SubPatchOutput.prototype = new CABLES.Op();
CABLES.OPS["02d45073-7936-4830-81ad-59a162febf1f"]={f:Ops.Ui.SubPatchOutput,objName:"Ops.Ui.SubPatchOutput"};




// **************************************************************
// 
// Ops.User.rambodc.Path_Creator
// 
// **************************************************************

Ops.User.rambodc.Path_Creator = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Define inputs for up to 5 directories
const dir1 = op.inString("Directory 1", "");
const dir2 = op.inString("Directory 2", "");
const dir3 = op.inString("Directory 3", "");
const dir4 = op.inString("Directory 4", "");
const dir5 = op.inString("Directory 5", "");

// Define output for the constructed path
const pathOut = op.outString("Path", "");

// Function to construct the path based on directory inputs
function constructPath() {
    let path = "";
    let dirs = [dir1.get(), dir2.get(), dir3.get(), dir4.get(), dir5.get()];

    // Iterate through the directories and construct the path
    // Stop adding to the path if a directory is missing
    for (let i = 0; i < dirs.length; i++) {
        if (dirs[i] === "") {
            break; // Stop at the first missing directory
        }
        path += "/" + dirs[i]; // Add the directory to the path
    }

    // Update the path output
    pathOut.set(path);
}

// Register onChange callbacks for all directory inputs
dir1.onChange = constructPath;
dir2.onChange = constructPath;
dir3.onChange = constructPath;
dir4.onChange = constructPath;
dir5.onChange = constructPath;

// Initially call constructPath to set the output with default inputs
constructPath();


};

Ops.User.rambodc.Path_Creator.prototype = new CABLES.Op();
CABLES.OPS["66fda118-65ca-44d8-97b2-0389627cba7f"]={f:Ops.User.rambodc.Path_Creator,objName:"Ops.User.rambodc.Path_Creator"};




// **************************************************************
// 
// Ops.Ui.Area
// 
// **************************************************************

Ops.Ui.Area = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const inTitle = op.inString("Title", "");

inTitle.setUiAttribs({ "hidePort": true });

op.setUiAttrib({ "hasArea": true });

op.init =
    inTitle.onChange =
    op.onLoaded = update;

update();

function update()
{
    if (CABLES.UI)
    {
        gui.savedState.setUnSaved("areaOp");
        op.uiAttr(
            {
                "comment_title": inTitle.get() || " "
            });

        op.name = inTitle.get();
    }
}


};

Ops.Ui.Area.prototype = new CABLES.Op();
CABLES.OPS["38f79614-b0de-4960-8da5-2827e7f43415"]={f:Ops.Ui.Area,objName:"Ops.Ui.Area"};




// **************************************************************
// 
// Ops.User.rambodc.Sidebar_Text_customize
// 
// **************************************************************

Ops.User.rambodc.Sidebar_Text_customize = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};

// Inputs
const parentPort = op.inObject("link");
const labelPort = op.inString("Text");
const inId = op.inValueString("Id", "");
const clearTrigger = op.inTriggerButton("Clear");
const inVisible = op.inBool("Visible", true);
const isButton = op.inBool("Button", false);
// Inputs for CSS customization
const textColor = op.inString("Text Color", "rgba(255,255,255,1)");
const textSize = op.inString("Text Size", "16px");
const lineHeight = op.inString("Line Height", "1.5");
const isBold = op.inBool("Bold", false);
const backgroundColor = op.inString("Background Color", "rgba(255,255,255,0.1)");
const hoverColor = op.inString("Hover Color", "rgba(255,255,255,0.3)");  // New input for hover color
const margin = op.inString("Margin", "10px");
const padding = op.inString("Padding", "10px");
const height = op.inString("Height", "auto");
const width = op.inString("Width", "auto");
const textAlign = op.inString("Text Align", "left");

// Outputs
const siblingsPort = op.outObject("childs");
const clickTrigger = op.outTrigger("Clicked");

// Variables
const el = document.createElement("div");
el.dataset.op = op.id;
el.classList.add("cablesEle");
el.classList.add("sidebar__item");
el.classList.add("sidebar__text");
const label = document.createElement("div");
label.classList.add("sidebar__item-label-v2");
const labelText = document.createElement("div");
label.appendChild(labelText);
el.appendChild(label);

// Event listeners
parentPort.onChange = onParentChanged;
labelPort.onChange = onLabelTextChanged;
inId.onChange = onIdChanged;
clearTrigger.onTriggered = onClearTriggered;
op.onDelete = onDelete;
inVisible.onChange = onVisibilityChanged;
isButton.onChange = onButtonChanged;

// New event listeners for CSS customization
textColor.onChange = applyStyles;
textSize.onChange = applyStyles;
lineHeight.onChange = applyStyles;
isBold.onChange = applyStyles;
backgroundColor.onChange = applyStyles;
hoverColor.onChange = applyStyles;  // New event listener for hover color change
margin.onChange = applyStyles;
padding.onChange = applyStyles;
height.onChange = applyStyles;
width.onChange = applyStyles;
textAlign.onChange = applyStyles; // New event listener for text alignment change

op.toWorkNeedsParent("Ops.Sidebar.Sidebar");

// Functions
function applyStyles() {
    label.style.color = textColor.get();
    label.style.fontSize = textSize.get();
    label.style.lineHeight = lineHeight.get();
    label.style.fontWeight = isBold.get() ? "bold" : "normal";
    el.style.backgroundColor = backgroundColor.get();
    el.style.margin = margin.get();
    el.style.padding = padding.get();
    el.style.height = height.get();
    el.style.width = width.get();
    label.style.textAlign = textAlign.get(); // Apply text alignment
    if (isButton.get()) {
        el.style.cursor = 'pointer';
        el.style.transition = 'background-color 0.3s';
    } else {
        el.style.cursor = 'default';
    }
}

function onVisibilityChanged() {
    el.style.display = inVisible.get() ? "block" : "none";
}

function onClearTriggered() {
    labelPort.set('');
    onLabelTextChanged();
}

function onIdChanged() {
    el.id = inId.get();
}

function onLabelTextChanged() {
    const labelText = labelPort.get();
    label.innerHTML = labelText;
    if (CABLES.UI) {
        if (labelText && typeof labelText === "string") {
            op.setTitle("Text: " + labelText.substring(0, 10));
        } else {
            op.setTitle("Text");
        }
    }
}

function onParentChanged() {
    siblingsPort.set(null);
    const parent = parentPort.get();
    if (parent && parent.parentElement) {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    } else {
        if (el.parentElement) {
            el.parentElement.removeChild(el);
        }
    }
}

function onButtonChanged() {
    if (isButton.get()) {
        el.addEventListener('click', onClicked);
        el.addEventListener('mouseover', onMouseOver);
        el.addEventListener('mouseout', onMouseOut);
    } else {
        el.removeEventListener('click', onClicked);
        el.removeEventListener('mouseover', onMouseOver);
        el.removeEventListener('mouseout', onMouseOut);
    }
    applyStyles();
}

function onClicked() {
    clickTrigger.trigger();
}

function onMouseOver() {  // New function to handle mouseover event
    el.style.backgroundColor = hoverColor.get();
}

function onMouseOut() {  // New function to handle mouseout event
    el.style.backgroundColor = backgroundColor.get();
}

function onDelete() {
    removeElementFromDOM(el);
}

function removeElementFromDOM(el) {
    if (el && el.parentNode && el.parentNode.removeChild) {
        el.parentNode.removeChild(el);
    }
}


};

Ops.User.rambodc.Sidebar_Text_customize.prototype = new CABLES.Op();
CABLES.OPS["4d16ae29-1e59-489c-b582-14213a3f4ff6"]={f:Ops.User.rambodc.Sidebar_Text_customize,objName:"Ops.User.rambodc.Sidebar_Text_customize"};




// **************************************************************
// 
// Ops.User.rambodc.FBGetOneDocument1
// 
// **************************************************************

Ops.User.rambodc.FBGetOneDocument1 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
//input
const inTrigger = op.inTriggerButton("Trigger");
const inCollectionName = op.inString("Collection name");
const inDocumentID = op.inString("Document ID");
const inSubcollectionName = op.inString("Subcollection name", "");
const inSubdocumentID = op.inString("Subdocument ID", "");

//output
const outError = op.outBoolNum("Error", false);
const outErrorMessage = op.outString("Error Message");
const outDocument = op.outObject("Document");
const outDocumentNotFound = op.outValueBool("Document Not Found");
const outSuccess = op.outTrigger("Success");
const outFailure = op.outTrigger("Failure");

inTrigger.onTriggered = getDocument;

function getDocument(){
    if (!inCollectionName.get() || !inDocumentID.get()){
        outError.set(true);
        outErrorMessage.set(
            "Missing Arguments: Collection name or Document ID is missing!"
        );
        outDocument.set(null);
        outDocumentNotFound.set(false);
        return;
    }

    let db;
    try {
        db = firebase.firestore();
    } catch (e) {
        console.log(e);
    }

    let docRef;

    // Check if subcollection and subdocument ID are provided
    if(inSubcollectionName.get() && inSubdocumentID.get()){
        docRef = db.collection(inCollectionName.get())
                    .doc(inDocumentID.get())
                    .collection(inSubcollectionName.get())
                    .doc(inSubdocumentID.get());
    } else {
        docRef = db.collection(inCollectionName.get()).doc(inDocumentID.get());
    }

    docRef.get().then((doc) => {
        if (doc.exists) {
            outDocument.set(doc.data());
            outDocumentNotFound.set(false);
            outSuccess.trigger();
        } else {
            outDocument.set(null);
            outDocumentNotFound.set(true);
            outFailure.trigger();
        }
        outError.set(false);
        outErrorMessage.set(null);

    }).catch((error) => {
        outError.set(true);
        outErrorMessage.set(error.message);
        outFailure.trigger();
    });
}

};

Ops.User.rambodc.FBGetOneDocument1.prototype = new CABLES.Op();
CABLES.OPS["a6ccf5c5-2236-4dd4-895e-98b6240f68e1"]={f:Ops.User.rambodc.FBGetOneDocument1,objName:"Ops.User.rambodc.FBGetOneDocument1"};




// **************************************************************
// 
// Ops.Vars.VarGetString
// 
// **************************************************************

Ops.Vars.VarGetString = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
var val=op.outString("Value");
op.varName=op.inValueSelect("Variable",[],"",true);

new CABLES.VarGetOpWrapper(op,"string",op.varName,val);


};

Ops.Vars.VarGetString.prototype = new CABLES.Op();
CABLES.OPS["3ad08cfc-bce6-4175-9746-fef2817a3b12"]={f:Ops.Vars.VarGetString,objName:"Ops.Vars.VarGetString"};




// **************************************************************
// 
// Ops.Trigger.TriggerCounter
// 
// **************************************************************

Ops.Trigger.TriggerCounter = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTriggerButton("exe"),
    reset = op.inTriggerButton("reset"),
    trigger = op.outTrigger("trigger"),
    num = op.outNumber("timesTriggered");

op.toWorkPortsNeedToBeLinked(exe);

op.setUiAttrib({ "extendTitle": 0 });
let n = 0;

reset.onTriggered =
op.onLoaded =
    doReset;

exe.onTriggered = function ()
{
    n++;
    num.set(n);
    op.setUiAttrib({ "extendTitle": n });
    trigger.trigger();
};

function doReset()
{
    n = 0;
    op.setUiAttrib({ "extendTitle": n });
    num.set(n);
}


};

Ops.Trigger.TriggerCounter.prototype = new CABLES.Op();
CABLES.OPS["e640619f-235c-4543-bbf8-b358e0283180"]={f:Ops.Trigger.TriggerCounter,objName:"Ops.Trigger.TriggerCounter"};




// **************************************************************
// 
// Ops.Ui.VizObject
// 
// **************************************************************

Ops.Ui.VizObject = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inObj = op.inObject("Object"),
    inConsole = op.inTriggerButton("console log"),
    inZoomText = op.inBool("ZoomText", false),
    inLineNums = op.inBool("Line Numbers", true),
    inFontSize = op.inFloat("Font Size", 10),
    inPos = op.inFloatSlider("Scroll", 0);

let lines = [];
inConsole.setUiAttribs({ "hidePort": true });

op.setUiAttrib({ "height": 200, "width": 400, "resizable": true, "vizLayerMaxZoom": 2500 });

inObj.onChange = () =>
{
    op.checkMainloopExists();
    let obj = inObj.get();
    let str = "???";

    if (obj && obj.getInfo)
    {
        obj = obj.getInfo();
    }

    if (obj && obj.constructor && obj.constructor.name != "Object")
    {
        op.setUiAttribs({ "extendTitle": obj.constructor.name });
    }

    try
    {
        str = JSON.stringify(obj, false, 4);

        if (
            obj.hasOwnProperty("isTrusted") && Object.keys(obj).length == 1 ||
            (str == "{}" && obj && obj.constructor && obj.constructor.name != "Object"))
        {
            str = "could not stringify object: " + obj.constructor.name + "\n";

            const o = {};
            for (const i in obj)
            {
                if (!obj[i]) continue;

                if (obj[i].constructor)
                {
                    if (obj[i].constructor.name == "Number" || obj[i].constructor.name == "String" || obj[i].constructor.name == "Boolean")
                        o[i] = obj[i];
                }
                else
                    o[i] = "{???}";
            }
            obj = o;
            str = JSON.stringify(obj, false, 4);
        }
    }
    catch (e)
    {
        str = "object can not be displayed as string", e.msg;
    }

    if (str === undefined)str = "undefined";
    if (str === null)str = "null";
    str = String(str);
    lines = str.split("\n");
};

inObj.onLinkChanged = () =>
{
    if (inObj.isLinked())
    {
        const p = inObj.links[0].getOtherPort(inObj);

        op.setUiAttrib({ "extendTitle": p.uiAttribs.objType });
    }
};

inConsole.onTriggered = () =>
{
    console.log(inObj.get());
};

op.renderVizLayer = (ctx, layer, viz) =>
{
    viz.clear(ctx, layer);

    ctx.save();
    ctx.scale(layer.scale, layer.scale);

    viz.renderText(ctx, layer, lines, {
        "zoomText": inZoomText.get(),
        "showLineNum": inLineNums.get(),
        "syntax": "json",
        "fontSize": inFontSize.get(),
        "scroll": inPos.get()
    });

    ctx.restore();
};

//


};

Ops.Ui.VizObject.prototype = new CABLES.Op();
CABLES.OPS["d09bc53e-9f52-4872-94c7-4ef777512222"]={f:Ops.Ui.VizObject,objName:"Ops.Ui.VizObject"};




// **************************************************************
// 
// Ops.Json.ObjectGetStringByPath
// 
// **************************************************************

Ops.Json.ObjectGetStringByPath = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    objectIn = op.inObject("Object"),
    pathIn = op.inString("Path"),
    returnPathIn = op.inBool("Output path if missing", false),
    resultOut = op.outString("Output"),
    foundOut = op.outBool("Found");

objectIn.ignoreValueSerialize = true;

objectIn.onChange =
    pathIn.onChange =
    returnPathIn.onChange = update;

pathIn.on("change", updateUi);
updateUi();
function updateUi()
{
    if (!pathIn.get())op.setUiError("nokey", "Missing Key Value");
    else op.setUiError("nokey", null);
}

function update()
{
    const data = objectIn.get();
    const path = pathIn.get();
    op.setUiError("missing", null);
    if (data && path)
    {
        if (!Array.isArray(data) && !(typeof data === "object"))
        {
            foundOut.set(false);
            op.setUiError("notiterable", "input object of type " + (typeof data) + " is not travesable by path");
        }
        else
        {
            op.setUiError("notiterable", null);
            let result = data[path];
            const parts = path.split(".");
            op.setUiAttrib({ "extendTitle": parts[parts.length - 1] + "" });
            if (!result) result = resolve(path, data);
            if (result === undefined)
            {
                const errorMsg = "could not find element at path " + path;
                let errorLevel = 2;
                result = null;
                foundOut.set(false);
                if (returnPathIn.get())
                {
                    result = path;
                    errorLevel = 1;
                }
                else
                {
                    result = null;
                }
                op.setUiError("missing", errorMsg, errorLevel);
            }
            else
            {
                foundOut.set(true);
                result = String(result);
            }
            resultOut.set(result);
        }
    }
    else
    {
        foundOut.set(false);
    }
}

function resolve(path, obj = self, separator = ".")
{
    const properties = Array.isArray(path) ? path : path.split(separator);
    return properties.reduce((prev, curr) => { return prev && prev[curr]; }, obj);
}


};

Ops.Json.ObjectGetStringByPath.prototype = new CABLES.Op();
CABLES.OPS["497a6b7c-e33c-45e4-8fb2-a9149d972b5b"]={f:Ops.Json.ObjectGetStringByPath,objName:"Ops.Json.ObjectGetStringByPath"};




// **************************************************************
// 
// Ops.Trigger.TriggerExtender
// 
// **************************************************************

Ops.Trigger.TriggerExtender = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inTriggerPort = op.inTriggerButton("Execute"),
    outTriggerPort = op.outTrigger("Next");

inTriggerPort.onTriggered = function ()
{
    outTriggerPort.trigger();
};


};

Ops.Trigger.TriggerExtender.prototype = new CABLES.Op();
CABLES.OPS["7ef594f3-4907-47b0-a2d3-9854eda1679d"]={f:Ops.Trigger.TriggerExtender,objName:"Ops.Trigger.TriggerExtender"};




// **************************************************************
// 
// Ops.Sidebar.Group
// 
// **************************************************************

Ops.Sidebar.Group = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// inputs
let parentPort = op.inObject("link");
let labelPort = op.inString("Text", "Group");
const inShowTitle = op.inBool("Show Title", true);
let defaultMinimizedPort = op.inValueBool("Default Minimized");
const inVisible = op.inBool("Visible", true);

// outputs
let nextPort = op.outObject("next");
let childrenPort = op.outObject("childs");

inVisible.onChange = function ()
{
    el.style.display = inVisible.get() ? "block" : "none";
};

// vars
let el = document.createElement("div");
el.dataset.op = op.id;
el.classList.add("sidebar__group");
onDefaultMinimizedPortChanged();
let header = document.createElement("div");
header.classList.add("sidebar__group-header");
header.classList.add("cablesEle");
el.appendChild(header);
header.addEventListener("click", onClick);
let headerTitle = document.createElement("div");
headerTitle.classList.add("sidebar__group-header-title");
// headerTitle.textContent = labelPort.get();
header.appendChild(headerTitle);
let headerTitleText = document.createElement("span");
headerTitleText.textContent = labelPort.get();
headerTitleText.classList.add("sidebar__group-header-title-text");
headerTitle.appendChild(headerTitleText);
let icon = document.createElement("span");
icon.classList.add("sidebar__group-header-icon");
icon.classList.add("iconsidebar-chevron-up");
headerTitle.appendChild(icon);
let groupItems = document.createElement("div");
groupItems.classList.add("sidebar__group-items");
el.appendChild(groupItems);
op.toWorkPortsNeedToBeLinked(parentPort);

// events
parentPort.onChange = onParentChanged;
labelPort.onChange = onLabelTextChanged;
defaultMinimizedPort.onChange = onDefaultMinimizedPortChanged;
op.onDelete = onDelete;

// functions

inShowTitle.onChange = () =>
{
    if (inShowTitle.get())header.style.display = "block";
    else header.style.display = "none";
};

function onDefaultMinimizedPortChanged()
{
    if (defaultMinimizedPort.get())
    {
        el.classList.add("sidebar__group--closed");
    }
    else
    {
        el.classList.remove("sidebar__group--closed");
    }
}

function onClick(ev)
{
    ev.stopPropagation();
    el.classList.toggle("sidebar__group--closed");
}

function onLabelTextChanged()
{
    let labelText = labelPort.get();
    headerTitleText.textContent = labelText;
    if (CABLES.UI) op.setUiAttrib({ "extendTitle": labelText });
}

function onParentChanged()
{
    childrenPort.set(null);
    let parent = parentPort.get();
    if (parent && parent.parentElement)
    {
        parent.parentElement.appendChild(el);
        childrenPort.set({
            "parentElement": groupItems,
            "parentOp": op,
        });
        nextPort.set(parent);
    }
    else
    { // detach
        if (el.parentElement)
        {
            el.parentElement.removeChild(el);
        }
    }
}

function showElement(el)
{
    if (el)
    {
        el.style.display = "block";
    }
}

function hideElement(el)
{
    if (el)
    {
        el.style.display = "none";
    }
}

function onDelete()
{
    removeElementFromDOM(el);
}

function removeElementFromDOM(el)
{
    if (el && el.parentNode && el.parentNode.removeChild)
    {
        el.parentNode.removeChild(el);
    }
}


};

Ops.Sidebar.Group.prototype = new CABLES.Op();
CABLES.OPS["86ea2333-b51c-48ed-94c2-8b7b6e9ff34c"]={f:Ops.Sidebar.Group,objName:"Ops.Sidebar.Group"};




// **************************************************************
// 
// Ops.User.rambodc.Button_Right
// 
// **************************************************************

Ops.User.rambodc.Button_Right = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Inputs
const parentPort = op.inObject("Parent Link");
const buttonTextPort = op.inString("Button Text", "Button");
const buttonWidthPort = op.inString("Button Width", "100px");
const buttonColorPort = op.inString("Button Background Color", "#007bff"); // Default blue color
const hoverColorPort = op.inString("Hover Background Color", "rgba(13, 130, 254, 1)"); // Default hover color
const inVisible = op.inBool("Visible", true);

// Outputs
const siblingsPort = op.outObject("Siblings");
const buttonPressedPort = op.outTrigger("Button Pressed");

// Main container element
const el = document.createElement("div");
el.dataset.op = op.id;
el.classList.add("cablesEle", "sidebar__item", "sidebar--button");

// Button element
const button = document.createElement("div");
button.classList.add("sidebar__button-input_right");
button.textContent = buttonTextPort.get();
button.style.width = buttonWidthPort.get(); // Set initial width
button.style.backgroundColor = buttonColorPort.get(); // Set initial background color
el.appendChild(button);
button.addEventListener("click", onButtonClick);

// Function to handle mouse hover
function onHover(isHovering) {
    button.style.backgroundColor = isHovering ? hoverColorPort.get() : buttonColorPort.get();
}

// Add hover event listeners
button.addEventListener("mouseenter", () => onHover(true));
button.addEventListener("mouseleave", () => onHover(false));

// Append to parent
parentPort.onChange = function () {
    const parent = parentPort.get();
    if (parent && parent.parentElement) {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    } else if (el.parentElement) {
        el.parentElement.removeChild(el);
    }
};

// Update text when changed
buttonTextPort.onChange = function () {
    button.textContent = buttonTextPort.get();
};

// Update width when changed
buttonWidthPort.onChange = function () {
    button.style.width = buttonWidthPort.get();
};

// Update background color when changed
buttonColorPort.onChange = function () {
    button.style.backgroundColor = buttonColorPort.get();
};

// Update hover background color when changed
hoverColorPort.onChange = function () {
    // No action needed here since hover color is applied in onHover function
};

// Handle visibility change
inVisible.onChange = function () {
    el.style.display = inVisible.get() ? "block" : "none";
};

// Trigger event on button click
function onButtonClick() {
    buttonPressedPort.trigger();
}

// Cleanup on delete
op.onDelete = function () {
    if (el.parentNode) {
        el.parentNode.removeChild(el);
    }
};


};

Ops.User.rambodc.Button_Right.prototype = new CABLES.Op();
CABLES.OPS["51157250-f52f-4710-a109-b66bef715006"]={f:Ops.User.rambodc.Button_Right,objName:"Ops.User.rambodc.Button_Right"};




// **************************************************************
// 
// Ops.User.rambodc.FBUpdateDocument2
// 
// **************************************************************

Ops.User.rambodc.FBUpdateDocument2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// You can add a new array with UpdateDocumnet Op2//inputs
const inTrigger = op.inTriggerButton("Trigger");
const inCollectionName = op.inString("Collection name");
const inDocumentID = op.inString("Document ID");
const inDocument = op.inObject("Document");
const inOperationType = op.inDropDown("Operation Type", ["Merge", "Set", "Update", "ArrayUnion"], "Merge");

//outputs
const outError = op.outBoolNum("Error", false);
const outErrorMessage = op.outString("Error Message");
const outSuccess = op.outTrigger("Success");
const outFailure = op.outTrigger("Failure");

inTrigger.onTriggered = performOperation;

async function performOperation(){
    if (!inCollectionName.get() || !inDocumentID.get()){
        outError.set(true);
        outErrorMessage.set("Missing Arguments: Collection name, Document ID is missing!");
        outFailure.trigger();
        return;
    }

    const db = firebase.firestore();
    const docRef = db.collection(inCollectionName.get()).doc(inDocumentID.get());
    let documentToUpdate = {...inDocument.get()};

    try {
        switch (inOperationType.get()) {
            case "Merge":
                await docRef.set(documentToUpdate, { merge: true });
                break;
            case "Set":
                await docRef.set(documentToUpdate);
                break;
            case "Update":
                await docRef.update(documentToUpdate);
                break;
            case "ArrayUnion":
                if (!inDocument.get()) {
                    throw new Error("Missing Arguments: Document is missing for ArrayUnion operation!");
                }
                const updates = {};
                for (const key in documentToUpdate) {
                    updates[key] = firebase.firestore.FieldValue.arrayUnion(...documentToUpdate[key]);
                }
                await docRef.update(updates);
                break;
            default:
                throw new Error("Invalid Operation Type. Please select one of 'Merge', 'Set', 'Update' or 'ArrayUnion'.");
        }
        outError.set(false);
        outErrorMessage.set('');
        outSuccess.trigger();
    } catch (error) {
        outError.set(true);
        outErrorMessage.set(error.message);
        outFailure.trigger();
    }
}


};

Ops.User.rambodc.FBUpdateDocument2.prototype = new CABLES.Op();
CABLES.OPS["d2b46fbf-3db9-44be-9f97-dbb8a0519129"]={f:Ops.User.rambodc.FBUpdateDocument2,objName:"Ops.User.rambodc.FBUpdateDocument2"};




// **************************************************************
// 
// Ops.Html.Notification
// 
// **************************************************************

Ops.Html.Notification = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"defaultstyle_txt":"visibility: hidden;\nbackground-color: #282828;\ncolor: #fff;\n\npadding: 16px;\nposition: absolute;\nz-index: 9999;\nfont-size: 17px;\nopacity:0;\nborder-radius:10px;\ntext-align:center;\nleft: 50%;\ntransform: translate(-50%, 0);\n",};
const
    triggerAnim = op.inTriggerButton("Trigger animation"),
    inText = op.inString("Text", "Hello! <br> This is a pop up"),
    inClass = op.inString("Class"),
    inStyle = op.inStringEditor("Style", attachments.defaultstyle_txt, "none"),
    inVisible = op.inValueBool("Active", true),
    inBreaks = op.inValueBool("Convert Line Breaks", false),
    fadeInDuration = op.inFloat("Fade in", 0.5),
    holdDuration = op.inFloat("Hold ", 2.0),
    fadeOutDuration = op.inFloat("Fade out", 0.8),
    percentOrPixel = op.inSwitch("mode", ["%", "px"], "%"),
    divSide = op.inSwitch("Side", ["bottom", "top"], "bottom"),
    startPosition = op.inFloat("Starting position", 0),
    endPosition = op.inFloat("Ending position", 5),
    finishedTrigger = op.outTrigger("Finished trigger"),
    finished = op.outBool("Finished", false),
    outElement = op.outObject("DOM Element");

op.setPortGroup("Animation", [fadeInDuration, holdDuration, fadeOutDuration]);
op.setPortGroup("HTML CSS", [inText, inClass, inStyle, inVisible, inBreaks]);
op.setPortGroup("Positioning", [percentOrPixel, divSide, startPosition, endPosition]);

const divid = "notification_" + CABLES.uuid();

// inStyle.setUiAttribs({editorSyntax:'css'});
const listenerElement = null;
let oldStr = null;

let prevDisplay = "block";

const div = document.createElement("div");
div.dataset.op = op.id;
div.id = divid;

const canvas = op.patch.cgl.canvas.parentElement;

canvas.appendChild(div);
outElement.set(div);

inClass.onChange = updateClass;
inBreaks.onChange = inText.onChange = updateText;
inStyle.onChange = updateStyle;
inVisible.onChange = updateVisibility;

triggerAnim.onTriggered = popUpAnim;

updateText();
updateStyle();
warning();

op.onDelete = removeElement;

outElement.onLinkChanged = updateStyle;

let animInProgress = false;

function setCSSVisible(visible)
{
    if (!visible)
    {
        div.style.visibility = "hidden";
        prevDisplay = div.style.display || "block";
        div.style.display = "none";
    }
    else
    {
        if (prevDisplay == "none") prevDisplay = "block";
        div.style.visibility = "visible";
        div.style.display = "none";
    }
}

function updateVisibility()
{
    setCSSVisible(inVisible.get());
}

function updateText()
{
    let str = inText.get();

    if (oldStr === str) return;
    oldStr = str;

    if (str && inBreaks.get()) str = str.replace(/(?:\r\n|\r|\n)/g, "<br>");

    if (div.innerHTML != str) div.innerHTML = str;
    outElement.set(null);
    outElement.set(div);
}

function removeElement()
{
    if (div && div.parentNode) div.parentNode.removeChild(div);
}

// inline css inisde div
function updateStyle()
{
    if (inStyle.get() != div.style)
    {
        div.setAttribute("style", inStyle.get());

        updateVisibility();
        outElement.set(null);
        outElement.set(div);
    }
    warning();
}

function updateClass()
{
    div.setAttribute("class", inClass.get());
    warning();
}

op.addEventListener("onEnabledChange", function (enabled)
{
    op.log("css changed");
    setCSSVisible(div.style.visibility != "visible");
});

function warning()
{
    if (inClass.get() && inStyle.get()) op.setUiError("error", "DIV uses external and inline CSS", 1);
    else op.setUiError("error", null);
}

function popUpAnim()
{
    if (!inVisible.get()) return;

    const mode = percentOrPixel.get();
    const start = startPosition.get() + mode;
    const end = endPosition.get() + mode;

    const targetDiv = document.getElementById(divid);
    div.style.display = "block";

    const animData = {};
    // this function cascades into each stage when started
    startAnim(mode, start, end, animData);
}

function startAnim(mode, start, end, animData)
{
    // stop the glitches from it being triggered multiple times
    if (animInProgress) return;

    finished.set(false);
    animInProgress = true;

    animData.easing = ["cubic-bezier(0.0, 0.0, 0.2, 1.0)", "linear"];
    animData.opacity = [0, 1];

    if (divSide.get() == "bottom") animData.bottom = [start, end];
    else animData.top = [start, end];

    document.getElementById(divid).animate(
        animData, fadeInDuration.get() * 1000).onfinish = function ()
    {
        holdAnim(mode, start, end, animData);
    };
}

function holdAnim(mode, start, end, animData)
{
    animData.easing = ["linear", "linear"];
    animData.opacity = [1, 1];

    if (divSide.get() == "bottom") animData.bottom = [end, end];
    else animData.top = [end, end];

    document.getElementById(divid).animate(animData, holdDuration.get() * 1000).onfinish =
        function ()
        {
            endAnim(mode, start, end, animData);
        };
}

function endAnim(mode, start, end, animData)
{
    animData.easing = ["cubic-bezier(0.0, 0.0, 0.2, 1.0)", "linear"];
    animData.opacity = [1, 0];

    if (divSide.get() == "bottom") animData.bottom = [end, start];
    else animData.top = [end, start];

    document.getElementById(divid).animate(
        animData, fadeOutDuration.get() * 1000).onfinish = function ()
    {
        div.style.display = "none";
        animInProgress = false;
        finishedTrigger.trigger();
        finished.set(true);
    };
}


};

Ops.Html.Notification.prototype = new CABLES.Op();
CABLES.OPS["cf3960f3-ced0-4928-9082-a9cf7f8573a6"]={f:Ops.Html.Notification,objName:"Ops.Html.Notification"};




// **************************************************************
// 
// Ops.Trigger.TriggerSend
// 
// **************************************************************

Ops.Trigger.TriggerSend = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const trigger = op.inTriggerButton("Trigger");
op.varName = op.inValueSelect("Named Trigger", [], "", true);

op.varName.onChange = updateName;

trigger.onTriggered = doTrigger;

op.patch.addEventListener("namedTriggersChanged", updateVarNamesDropdown);

updateVarNamesDropdown();

function updateVarNamesDropdown()
{
    if (CABLES.UI)
    {
        const varnames = [];
        const vars = op.patch.namedTriggers;
        varnames.push("+ create new one");
        for (const i in vars) varnames.push(i);
        op.varName.uiAttribs.values = varnames;
    }
}

function updateName()
{
    if (CABLES.UI)
    {
        if (op.varName.get() == "+ create new one")
        {
            new CABLES.UI.ModalDialog({
                "prompt": true,
                "title": "New Trigger",
                "text": "Enter a name for the new trigger",
                "promptValue": "",
                "promptOk": (str) =>
                {
                    op.varName.set(str);
                    op.patch.namedTriggers[str] = op.patch.namedTriggers[str] || [];
                    updateVarNamesDropdown();
                }
            });
            return;
        }

        op.refreshParams();
    }

    if (!op.patch.namedTriggers[op.varName.get()])
    {
        op.patch.namedTriggers[op.varName.get()] = op.patch.namedTriggers[op.varName.get()] || [];
        op.patch.emitEvent("namedTriggersChanged");
    }

    op.setTitle(">" + op.varName.get());

    op.refreshParams();
    op.patch.emitEvent("opTriggerNameChanged", op, op.varName.get());
}

function doTrigger()
{
    const arr = op.patch.namedTriggers[op.varName.get()];
    // fire an event even if noone is receiving this trigger
    // this way TriggerReceiveFilter can still handle it
    op.patch.emitEvent("namedTriggerSent", op.varName.get());

    if (!arr)
    {
        op.setUiError("unknowntrigger", "unknown trigger");
        return;
    }
    else op.setUiError("unknowntrigger", null);

    for (let i = 0; i < arr.length; i++)
    {
        arr[i]();
    }
}


};

Ops.Trigger.TriggerSend.prototype = new CABLES.Op();
CABLES.OPS["ce1eaf2b-943b-4dc0-ab5e-ee11b63c9ed0"]={f:Ops.Trigger.TriggerSend,objName:"Ops.Trigger.TriggerSend"};




// **************************************************************
// 
// Ops.Trigger.TriggerString
// 
// **************************************************************

Ops.Trigger.TriggerString = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTriggerButton("Trigger"),
    inString = op.inString("String", ""),
    next = op.outTrigger("Next"),
    outString = op.outString("Result");

outString.changeAlways = true;
exec.onTriggered = function ()
{
    outString.set(inString.get());
    next.trigger();
};


};

Ops.Trigger.TriggerString.prototype = new CABLES.Op();
CABLES.OPS["217482b8-2ee6-4609-b7ad-4550e6aaa371"]={f:Ops.Trigger.TriggerString,objName:"Ops.Trigger.TriggerString"};




// **************************************************************
// 
// Ops.User.rambodc.Check_String_CreateJSON
// 
// **************************************************************

Ops.User.rambodc.Check_String_CreateJSON = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Inputs
const triggerCheck = op.inTriggerButton("Check and Create Object");
const incomingStrings = [
    op.inString("Incoming String 1", ""),
    op.inString("Incoming String 2", ""),
    op.inString("Incoming String 3", "")
];
const cantBeBlanks = [
    op.inBool("Can't be Blank 1", true),
    op.inBool("Can't be Blank 2", true),
    op.inBool("Can't be Blank 3", true)
];
const isUpdateds = [
    op.inBool("Is Updated 1", false),
    op.inBool("Is Updated 2", false),
    op.inBool("Is Updated 3", false)
];
const keyStrings = [
    op.inString("Key String 1", "key1"),
    op.inString("Key String 2", "key2"),
    op.inString("Key String 3", "key3")
];

// Outputs
const objectOutput = op.outObject("Object Output");
const triggerSuccess = op.outTrigger("Trigger Success");
const triggerFail = op.outTrigger("Trigger Fail");

// Check and create object
triggerCheck.onTriggered = () => {
    let outputObject = {};
    let success = false;

    for (let i = 0; i < incomingStrings.length; i++) {
        if (isUpdateds[i].get() && (!cantBeBlanks[i].get() || incomingStrings[i].get() !== "")) {
            outputObject[keyStrings[i].get()] = incomingStrings[i].get();
            success = true;
        }
    }

    if (success) {
        objectOutput.set(outputObject);
        triggerSuccess.trigger();
    } else {
        triggerFail.trigger();
    }
};


};

Ops.User.rambodc.Check_String_CreateJSON.prototype = new CABLES.Op();
CABLES.OPS["2c63b0a2-bd0d-4c2b-b22e-b8fb4d1f40cf"]={f:Ops.User.rambodc.Check_String_CreateJSON,objName:"Ops.User.rambodc.Check_String_CreateJSON"};




// **************************************************************
// 
// Ops.User.rambodc.FB_UpdateEmail
// 
// **************************************************************

Ops.User.rambodc.FB_UpdateEmail = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Inputs
const newEmailPort = op.inString("New Email", "");
const updateTrigger = op.inTriggerButton("Update Email");

// Outputs
const updateSuccess = op.outTrigger("Update Success");
const updateFail = op.outTrigger("Update Fail");
const updateError = op.outObject("Update Error");

// Update Email and Send Verification
updateTrigger.onTriggered = () => {
    const newEmail = newEmailPort.get();
    const user = firebase.auth().currentUser;

    if (user) {
        user.updateEmail(newEmail)
            .then(() => {
                // Email updated successfully, now send verification email
                return user.sendEmailVerification();
            })
            .then(() => {
                updateSuccess.trigger(); // Trigger on successful email update and verification email sent
            })
            .catch((error) => {
                // Handle errors for both updateEmail and sendEmailVerification
                updateError.set({ message: error.message, code: error.code });
                updateFail.trigger(); // Trigger on failure
            });
    } else {
        updateError.set({ message: "No authenticated user found." });
        updateFail.trigger();
    }
};


};

Ops.User.rambodc.FB_UpdateEmail.prototype = new CABLES.Op();
CABLES.OPS["11bcb6a3-c260-48b1-82a2-7253de096c8e"]={f:Ops.User.rambodc.FB_UpdateEmail,objName:"Ops.User.rambodc.FB_UpdateEmail"};




// **************************************************************
// 
// Ops.User.rambodc.Button_Center
// 
// **************************************************************

Ops.User.rambodc.Button_Center = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Inputs
const parentPort = op.inObject("Parent Link");
const buttonTextPort = op.inString("Button Text", "Button");
const buttonWidthPort = op.inString("Button Width", "100px");
const buttonColorPort = op.inString("Button Background Color", "rgba(255, 255, 255, 0.0)");
const hoverColorPort = op.inString("Hover Background Color", "rgba(255, 255, 255, 0.0)");
const isButtonPort = op.inBool("Is Button", true);
const textSizePort = op.inString("Text Size", "14px");
const inVisible = op.inBool("Visible", true);

// Outputs
const siblingsPort = op.outObject("Siblings");
const buttonPressedPort = op.outTrigger("Button Pressed");

// Main container element
const el = document.createElement("div");
el.dataset.op = op.id;
el.classList.add("cablesEle", "sidebar__item", "sidebar--button");

// Button element
const button = document.createElement("div");
button.classList.add("sidebar__button-input_center");
button.textContent = buttonTextPort.get();
button.style.width = buttonWidthPort.get();
button.style.backgroundColor = buttonColorPort.get();
button.style.fontSize = textSizePort.get();
el.appendChild(button);

// Function to update button styles and event listener
function updateButtonStyles() {
    button.style.cursor = isButtonPort.get() ? "pointer" : "text"; // Updated cursor style based on 'Is Button'
    button.onmouseenter = isButtonPort.get() ? () => button.style.backgroundColor = hoverColorPort.get() : null;
    button.onmouseleave = isButtonPort.get() ? () => button.style.backgroundColor = buttonColorPort.get() : null;
    if (isButtonPort.get()) {
        button.addEventListener("click", onButtonClick);
    } else {
        button.removeEventListener("click", onButtonClick);
    }
}

// Initial setup and update
function initialSetup() {
    updateButtonStyles();
    buttonTextPort.onChange = () => button.textContent = buttonTextPort.get();
    buttonWidthPort.onChange = () => button.style.width = buttonWidthPort.get();
    buttonColorPort.onChange = () => button.style.backgroundColor = buttonColorPort.get();
    hoverColorPort.onChange = updateButtonStyles;
    textSizePort.onChange = () => button.style.fontSize = textSizePort.get();
    inVisible.onChange = () => el.style.display = inVisible.get() ? "block" : "none";
}

// Append to parent
parentPort.onChange = function () {
    const parent = parentPort.get();
    if (parent && parent.parentElement) {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    } else if (el.parentElement) {
        el.parentElement.removeChild(el);
    }
};

// Trigger event on button click
function onButtonClick() {
    buttonPressedPort.trigger();
}

// Cleanup on delete
op.onDelete = () => {
    if (el.parentNode) {
        el.parentNode.removeChild(el);
    }
};

// Run initial setup
initialSetup();


};

Ops.User.rambodc.Button_Center.prototype = new CABLES.Op();
CABLES.OPS["f80d1557-ea53-4949-ab2d-75fbf62b2dc9"]={f:Ops.User.rambodc.Button_Center,objName:"Ops.User.rambodc.Button_Center"};




// **************************************************************
// 
// Ops.User.rambodc.Email_Input_Sidebar
// 
// **************************************************************

Ops.User.rambodc.Email_Input_Sidebar = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Inputs
const parentPort = op.inObject("Link");
const labelPort = op.inString("Label", "Email");
const defaultValuePort = op.inString("Default", "");
const placeholderPort = op.inString("Placeholder", "Enter email");
const visiblePort = op.inBool("Visible", true);
const maxCharactersPort = op.inValue("Max Characters", 100);
const clearPort = op.inTriggerButton("Clear");

// Outputs
const siblingsPort = op.outObject("Children");
const valuePort = op.outString("Result", "");
const focusPort = op.outBool("Focus", false);
const hasChangedPort = op.outBool("Has Changed", false);
const isValidPort = op.outBool("Is Valid", false); // New output for email validity

// Create main container
const el = document.createElement("div");
el.style.display = visiblePort.get() ? 'flex' : 'none';
el.style.flexDirection = 'column';
el.style.alignItems = 'stretch';

// Create label
const label = document.createElement("div");
label.textContent = labelPort.get();
label.style.fontSize = '16px';
label.style.color = 'white';
label.style.marginBottom = '5px';
label.style.paddingTop = '10px';
label.style.paddingLeft = '20px';
label.style.paddingRight = '20px';
el.appendChild(label);

// Create email input
let input = document.createElement("input");
input.type = "email"; // Set input type to email
input.style.width = 'calc(100% - 40px)';
input.style.fontSize = '20px';
input.style.boxSizing = 'border-box';
input.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
input.style.color = 'white';
input.style.textAlign = 'left';
input.style.margin = '5px 20px';
input.style.padding = '10px';
input.style.border = 'none';
input.style.outline = 'none';
input.maxLength = maxCharactersPort.get();
input.value = defaultValuePort.get();
input.placeholder = placeholderPort.get();
input.addEventListener("input", onInput);
input.addEventListener("focus", onFocus);
input.addEventListener("blur", onBlur);
el.appendChild(input);

// Add to parent and handle visibility
parentPort.onChange = onParentChanged;
visiblePort.onChange = () => el.style.display = visiblePort.get() ? "flex" : "none";

// Clear input
clearPort.onTriggered = () => {
    input.value = "";
    valuePort.set(input.value);
    hasChangedPort.set(false);
    isValidPort.set(false);
};

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    return regex.test(email);
}

// Event handlers
function onInput(ev) {
    const email = ev.target.value;
    valuePort.set(email);
    hasChangedPort.set(true);
    isValidPort.set(validateEmail(email)); // Set validity based on email format
}

function onFocus() {
    focusPort.set(true);
}

function onBlur() {
    focusPort.set(false);
}

function onParentChanged() {
    siblingsPort.set(null);
    const parent = parentPort.get();
    if (parent && parent.parentElement) {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    } else if (el.parentElement) {
        el.parentElement.removeChild(el);
    }
}

// Update handlers
labelPort.onChange = () => label.textContent = labelPort.get();
defaultValuePort.onChange = () => {
    input.value = defaultValuePort.get();
    hasChangedPort.set(false);
    isValidPort.set(validateEmail(input.value));
};
placeholderPort.onChange = () => input.placeholder = placeholderPort.get();
maxCharactersPort.onChange = () => input.maxLength = maxCharactersPort.get();

// Cleanup on delete
op.onDelete = onDelete;
function onDelete() {
    if (input && input.parentNode) {
        input.parentNode.removeChild(input);
    }
    if (label && label.parentNode) {
        label.parentNode.removeChild(label);
    }
    if (el && el.parentNode) {
        el.parentNode.removeChild(el);
    }
}

// Ensure ports are linked
op.toWorkPortsNeedToBeLinked(parentPort);


};

Ops.User.rambodc.Email_Input_Sidebar.prototype = new CABLES.Op();
CABLES.OPS["9236315c-eba9-426b-94a6-4e7ee110a6f9"]={f:Ops.User.rambodc.Email_Input_Sidebar,objName:"Ops.User.rambodc.Email_Input_Sidebar"};




// **************************************************************
// 
// Ops.User.rambodc.StringToBool
// 
// **************************************************************

Ops.User.rambodc.StringToBool = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    // Input
    inString = op.inString("String", "false"),

    // Output
    outBool = op.outBool("Boolean", false);

// Update output when the input changes
inString.onChange = updateOutput;

function updateOutput() {
    let stringValue = inString.get();

    // Convert the string to a boolean value
    if (stringValue.toLowerCase() === "true") {
        outBool.set(true);
    } else if (stringValue.toLowerCase() === "false") {
        outBool.set(false);
    } else {
        // Handle invalid input, if needed
    }
}


};

Ops.User.rambodc.StringToBool.prototype = new CABLES.Op();
CABLES.OPS["92882988-ab61-4c93-8faf-695f6059dc0d"]={f:Ops.User.rambodc.StringToBool,objName:"Ops.User.rambodc.StringToBool"};




// **************************************************************
// 
// Ops.Boolean.Not
// 
// **************************************************************

Ops.Boolean.Not = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    bool = op.inValueBool("Boolean"),
    outbool = op.outBoolNum("Result");

bool.changeAlways = true;

bool.onChange = function ()
{
    outbool.set((!bool.get()));
};


};

Ops.Boolean.Not.prototype = new CABLES.Op();
CABLES.OPS["6d123c9f-7485-4fd9-a5c2-76e59dcbeb34"]={f:Ops.Boolean.Not,objName:"Ops.Boolean.Not"};




// **************************************************************
// 
// Ops.User.rambodc.Button_Left
// 
// **************************************************************

Ops.User.rambodc.Button_Left = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Inputs
const parentPort = op.inObject("Parent Link");
const buttonTextPort = op.inString("Button Text", "Button");
const buttonWidthPort = op.inString("Button Width", "100px");
const buttonColorPort = op.inString("Button Background Color", "#007bff"); // Default blue color
const hoverColorPort = op.inString("Hover Background Color", "rgba(13, 130, 254, 1)"); // Default hover color
const inVisible = op.inBool("Visible", true);

// Outputs
const siblingsPort = op.outObject("Siblings");
const buttonPressedPort = op.outTrigger("Button Pressed");

// Main container element
const el = document.createElement("div");
el.dataset.op = op.id;
el.classList.add("cablesEle", "sidebar__item", "sidebar--button");

// Button element
const button = document.createElement("div");
button.classList.add("sidebar__button-input_left");
button.textContent = buttonTextPort.get();
button.style.width = buttonWidthPort.get(); // Set initial width
button.style.backgroundColor = buttonColorPort.get(); // Set initial background color
el.appendChild(button);

// Function to handle mouse hover
function onHover(isHovering) {
    button.style.backgroundColor = isHovering ? hoverColorPort.get() : buttonColorPort.get();
}

// Add hover event listeners
button.addEventListener("mouseenter", () => onHover(true));
button.addEventListener("mouseleave", () => onHover(false));

// Add click event listener
button.addEventListener("click", onButtonClick);

// Append to parent
parentPort.onChange = function () {
    const parent = parentPort.get();
    if (parent && parent.parentElement) {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    } else if (el.parentElement) {
        el.parentElement.removeChild(el);
    }
};

// Update text when changed
buttonTextPort.onChange = function () {
    button.textContent = buttonTextPort.get();
};

// Update width when changed
buttonWidthPort.onChange = function () {
    button.style.width = buttonWidthPort.get();
};

// Update background color when changed
buttonColorPort.onChange = function () {
    button.style.backgroundColor = buttonColorPort.get();
};

// Update hover background color when changed
hoverColorPort.onChange = function () {
    // No action needed here since hover color is applied in onHover function
};

// Handle visibility change
inVisible.onChange = function () {
    el.style.display = inVisible.get() ? "block" : "none";
};

// Trigger event on button click
function onButtonClick() {
    buttonPressedPort.trigger();
}

// Cleanup on delete
op.onDelete = function () {
    if (el.parentNode) {
        el.parentNode.removeChild(el);
    }
};

// Initial setup
onHover(false); // Set initial hover state


};

Ops.User.rambodc.Button_Left.prototype = new CABLES.Op();
CABLES.OPS["a4502322-281e-4000-8578-de13cc86032a"]={f:Ops.User.rambodc.Button_Left,objName:"Ops.User.rambodc.Button_Left"};




// **************************************************************
// 
// Ops.User.rambodc.FB_VerifyEmail
// 
// **************************************************************

Ops.User.rambodc.FB_VerifyEmail = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Inputs
const sendVerificationTrigger = op.inTriggerButton("Send Verification Email");

// Outputs
const verificationSent = op.outTrigger("Verification Email Sent");
const verificationFail = op.outTrigger("Verification Email Failed");
const verificationError = op.outObject("Verification Error");

// Send Verification Email Functionality
sendVerificationTrigger.onTriggered = () => {
    const user = firebase.auth().currentUser;

    if (user) {
        user.sendEmailVerification().then(() => {
            verificationSent.trigger(); // Trigger on successful verification email sent
        }).catch((error) => {
            verificationError.set({ message: error.message, code: error.code });
            verificationFail.trigger(); // Trigger on verification email failure
        });
    } else {
        verificationError.set({ message: "No authenticated user found." });
        verificationFail.trigger();
    }
};


};

Ops.User.rambodc.FB_VerifyEmail.prototype = new CABLES.Op();
CABLES.OPS["53a4c519-5c53-4c7a-9f49-200c4016e052"]={f:Ops.User.rambodc.FB_VerifyEmail,objName:"Ops.User.rambodc.FB_VerifyEmail"};




// **************************************************************
// 
// Ops.Html.ReloadPage
// 
// **************************************************************

Ops.Html.ReloadPage = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
var exec=op.inTrigger("Exec");

exec.onTriggered=function()
{
    location.reload();

};

};

Ops.Html.ReloadPage.prototype = new CABLES.Op();
CABLES.OPS["d0060a4e-ffed-4a8d-8f6d-bfd9a23319de"]={f:Ops.Html.ReloadPage,objName:"Ops.Html.ReloadPage"};




// **************************************************************
// 
// Ops.User.rambodc.TextInput_Password
// 
// **************************************************************

Ops.User.rambodc.TextInput_Password = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Inputs
const parentPort = op.inObject("Link");
const labelPort = op.inString("Label", "Password");
const defaultValuePort = op.inString("Default", "");
const placeholderPort = op.inString("Placeholder", "Enter password");
const visiblePort = op.inBool("Visible", true);
const maxCharactersPort = op.inValue("Max Characters", 100);
const clearPort = op.inTriggerButton("Clear");

// Outputs
const siblingsPort = op.outObject("Children");
const valuePort = op.outString("Result", "");
const focusPort = op.outBool("Focus", false);
const hasChangedPort = op.outBool("Has Changed", false);

// Create main container
const el = document.createElement("div");
el.style.display = visiblePort.get() ? 'flex' : 'none';
el.style.flexDirection = 'column';
el.style.alignItems = 'stretch';

// Create label
const label = document.createElement("div");
label.textContent = labelPort.get();
label.style.fontSize = '16px';
label.style.color = 'white';
label.style.marginBottom = '0px';
label.style.paddingTop = '10px';
label.style.paddingLeft = '20px';
label.style.paddingRight = '20px';
el.appendChild(label);

// Create single-line text input
let input = document.createElement("input");
input.type = "password";
input.style.width = 'calc(100% - 40px)';
input.style.fontSize = '20px';
input.style.boxSizing = 'border-box';
input.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
input.style.color = 'white';
input.style.textAlign = 'left';
input.style.margin = '10px 20px';
input.style.padding = '10px';
input.style.border = 'none';
input.style.outline = 'none';
input.maxLength = maxCharactersPort.get();
input.value = defaultValuePort.get();
input.placeholder = placeholderPort.get();
input.addEventListener("input", onInput);
input.addEventListener("focus", onFocus);
input.addEventListener("blur", onBlur);
el.appendChild(input);

// Add to parent and handle visibility
parentPort.onChange = onParentChanged;
visiblePort.onChange = () => el.style.display = visiblePort.get() ? "flex" : "none";

// Clear input
clearPort.onTriggered = () => {
    input.value = "";
    valuePort.set(input.value);
    hasChangedPort.set(false);
};

// Event handlers
function onInput(ev) {
    valuePort.set(ev.target.value);
    hasChangedPort.set(true);
}

function onFocus() {
    focusPort.set(true);
}

function onBlur() {
    focusPort.set(false);
}

function onParentChanged() {
    siblingsPort.set(null);
    const parent = parentPort.get();
    if (parent && parent.parentElement) {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    } else if (el.parentElement) {
        el.parentElement.removeChild(el);
    }
}

// Update handlers
labelPort.onChange = () => label.textContent = labelPort.get();
defaultValuePort.onChange = () => {
    input.value = defaultValuePort.get();
    hasChangedPort.set(false);
};
placeholderPort.onChange = () => input.placeholder = placeholderPort.get();
maxCharactersPort.onChange = () => input.maxLength = maxCharactersPort.get();

// Cleanup on delete
op.onDelete = onDelete;
function onDelete() {
    removeElementFromDOM(el);
}

function removeElementFromDOM(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}

// Ensure ports are linked
op.toWorkPortsNeedToBeLinked(parentPort);


};

Ops.User.rambodc.TextInput_Password.prototype = new CABLES.Op();
CABLES.OPS["6deb6544-b794-4310-8657-3b6fc85afbe8"]={f:Ops.User.rambodc.TextInput_Password,objName:"Ops.User.rambodc.TextInput_Password"};




// **************************************************************
// 
// Ops.User.rambodc.FB_ChangePassword
// 
// **************************************************************

Ops.User.rambodc.FB_ChangePassword = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Inputs
const oldPasswordPort = op.inString("Old Password", "");
const newPasswordPort = op.inString("New Password", "");
const confirmNewPasswordPort = op.inString("Confirm New Password", "");
const changePasswordTrigger = op.inTriggerButton("Change Password");

// Outputs
const passwordChangeSuccess = op.outTrigger("Password Change Success");
const passwordChangeFail = op.outTrigger("Password Change Fail");
const passwordChangeError = op.outObject("Password Change Error");

// Change Password Functionality
changePasswordTrigger.onTriggered = () => {
    const oldPassword = oldPasswordPort.get();
    const newPassword = newPasswordPort.get();
    const confirmNewPassword = confirmNewPasswordPort.get();
    const user = firebase.auth().currentUser;

    if (!user) {
        passwordChangeError.set({ message: "No authenticated user found." });
        passwordChangeFail.trigger();
        return;
    }

    if (newPassword !== confirmNewPassword) {
        passwordChangeError.set({ message: "New passwords do not match." });
        passwordChangeFail.trigger();
        return;
    }

    if (newPassword.length < 6) {
        passwordChangeError.set({ message: "New password must be at least 6 characters long." });
        passwordChangeFail.trigger();
        return;
    }

    // Create credentials with the old password
    const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        oldPassword
    );

    // Re-authenticate the user with the old password
    user.reauthenticateWithCredential(credential).then(() => {
        // Old password is correct, now update to the new password
        return user.updatePassword(newPassword);
    }).then(() => {
        passwordChangeSuccess.trigger(); // Trigger on successful password change
    }).catch((error) => {
        passwordChangeError.set({ message: error.message, code: error.code });
        passwordChangeFail.trigger(); // Trigger on password change failure
    });
};


};

Ops.User.rambodc.FB_ChangePassword.prototype = new CABLES.Op();
CABLES.OPS["4cd52d32-07bc-464a-880d-3844750bef60"]={f:Ops.User.rambodc.FB_ChangePassword,objName:"Ops.User.rambodc.FB_ChangePassword"};




// **************************************************************
// 
// Ops.Boolean.Or
// 
// **************************************************************

Ops.Boolean.Or = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    bool0 = op.inValueBool("bool 1"),
    bool1 = op.inValueBool("bool 2"),
    bool2 = op.inValueBool("bool 3"),
    bool3 = op.inValueBool("bool 4"),
    bool4 = op.inValueBool("bool 5"),
    bool5 = op.inValueBool("bool 6"),
    bool6 = op.inValueBool("bool 7"),
    bool7 = op.inValueBool("bool 8"),
    bool8 = op.inValueBool("bool 9"),
    bool9 = op.inValueBool("bool 10"),
    result = op.outBoolNum("result");

bool0.onChange =
    bool1.onChange =
    bool2.onChange =
    bool3.onChange =
    bool4.onChange =
    bool5.onChange =
    bool6.onChange =
    bool7.onChange =
    bool8.onChange =
    bool9.onChange = exec;

function exec()
{
    result.set(bool0.get() || bool1.get() || bool2.get() || bool3.get() || bool4.get() || bool5.get() || bool6.get() || bool7.get() || bool8.get() || bool9.get());
}


};

Ops.Boolean.Or.prototype = new CABLES.Op();
CABLES.OPS["b3b36238-4592-4e11-afe3-8361c4fd6be5"]={f:Ops.Boolean.Or,objName:"Ops.Boolean.Or"};




// **************************************************************
// 
// Ops.User.rambodc.TextInput_Custom1
// 
// **************************************************************

Ops.User.rambodc.TextInput_Custom1 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Inputs
const parentPort = op.inObject("Link");
const labelPort = op.inString("Label", "Label");
const defaultValuePort = op.inString("Default", "");
const placeholderPort = op.inString("Placeholder", "Enter text");
const visiblePort = op.inBool("Visible", true);
const maxCharactersPort = op.inValue("Max Characters", 100);
const clearPort = op.inTriggerButton("Clear");

// Outputs
const siblingsPort = op.outObject("Children");
const valuePort = op.outString("Result", "");
const focusPort = op.outBool("Focus", false);
const hasChangedPort = op.outBool("Has Changed", false);

// Create main container
const el = document.createElement("div");
el.style.display = visiblePort.get() ? 'flex' : 'none';
el.style.flexDirection = 'column';
el.style.alignItems = 'stretch';

// Create label
const label = document.createElement("div");
label.textContent = labelPort.get();
label.style.fontSize = '16px';
label.style.color = 'white';
label.style.marginBottom = '0px';
label.style.paddingTop = '10px';
label.style.paddingLeft = '20px';
label.style.paddingRight = '20px';
el.appendChild(label);

// Create single-line text input
let input = document.createElement("input");
input.type = "text";
input.style.width = 'calc(100% - 40px)';
input.style.fontSize = '20px';
input.style.boxSizing = 'border-box';
input.style.backgroundColor = 'rgba(150, 150, 150, 0.1)';
input.style.color = 'white';
input.style.textAlign = 'left';
input.style.margin = '10px 20px';
input.style.padding = '10px';
input.style.border = 'none';
input.style.outline = 'none';
input.maxLength = maxCharactersPort.get();
input.value = defaultValuePort.get();
input.placeholder = placeholderPort.get();
input.addEventListener("input", onInput);
input.addEventListener("focus", onFocus);
input.addEventListener("blur", onBlur);
el.appendChild(input);

// Add to parent and handle visibility
parentPort.onChange = onParentChanged;
visiblePort.onChange = () => el.style.display = visiblePort.get() ? "flex" : "none";

// Clear input
clearPort.onTriggered = () => {
    input.value = "";
    valuePort.set(input.value);
    hasChangedPort.set(false);
};

// Event handlers
function onInput(ev) {
    valuePort.set(ev.target.value);
    hasChangedPort.set(true);
}

function onFocus() {
    focusPort.set(true);
}

function onBlur() {
    focusPort.set(false);
}

function onParentChanged() {
    siblingsPort.set(null);
    const parent = parentPort.get();
    if (parent && parent.parentElement) {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    } else if (el.parentElement) {
        el.parentElement.removeChild(el);
    }
}

// Update handlers
labelPort.onChange = () => label.textContent = labelPort.get();
defaultValuePort.onChange = () => {
    input.value = defaultValuePort.get();
    hasChangedPort.set(false);
};
placeholderPort.onChange = () => input.placeholder = placeholderPort.get();
maxCharactersPort.onChange = () => input.maxLength = maxCharactersPort.get();

// Cleanup on delete
op.onDelete = onDelete;
function onDelete() {
    removeElementFromDOM(el);
}

function removeElementFromDOM(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}

// Ensure ports are linked
op.toWorkPortsNeedToBeLinked(parentPort);

};

Ops.User.rambodc.TextInput_Custom1.prototype = new CABLES.Op();
CABLES.OPS["a43f61db-3cf5-460b-908f-279e4e9bde23"]={f:Ops.User.rambodc.TextInput_Custom1,objName:"Ops.User.rambodc.TextInput_Custom1"};




// **************************************************************
// 
// Ops.User.rambodc.PageRouter
// 
// **************************************************************

Ops.User.rambodc.PageRouter = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_zzd2dk99r=op.inObject(\"zzd2dk99r\");\nport_zzd2dk99r.setUiAttribs({title:\"Parent Link\",});\n\nconst port_0as2n77e5=op.inTrigger(\"0as2n77e5\");\nport_0as2n77e5.setUiAttribs({title:\"Mainloop\",display:\"button\",});\n\nconst port_eabt3o2x7=op.inTrigger(\"eabt3o2x7\");\nport_eabt3o2x7.setUiAttribs({title:\"Hash Changed\",display:\"button\",});\n\nconst port_37k6sbwik=op.outObject(\"37k6sbwik\");\nport_37k6sbwik.setUiAttribs({title:\"Parent Link\",});\n\nconst port_o4ucc2fcw=op.outTrigger(\"o4ucc2fcw\");\nport_o4ucc2fcw.setUiAttribs({title:\"Mainloop\",});\n\nconst port_r4xu39dfu=op.outTrigger(\"r4xu39dfu\");\nport_r4xu39dfu.setUiAttribs({title:\"Hash Changed\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_zzd2dk99r = addedOps[i].outObject(\"innerOut_zzd2dk99r\");\ninnerOut_zzd2dk99r.setUiAttribs({title:\"Parent Link\"});\nport_zzd2dk99r.on(\"change\", (a,v) => { innerOut_zzd2dk99r.setRef(a); });\n\nconst innerOut_0as2n77e5 = addedOps[i].outTrigger(\"innerOut_0as2n77e5\");\ninnerOut_0as2n77e5.setUiAttribs({title:\"Mainloop\"});\nport_0as2n77e5.onTriggered = () => { innerOut_0as2n77e5.trigger(); };\n\nconst innerOut_eabt3o2x7 = addedOps[i].outTrigger(\"innerOut_eabt3o2x7\");\ninnerOut_eabt3o2x7.setUiAttribs({title:\"Hash Changed\"});\nport_eabt3o2x7.onTriggered = () => { innerOut_eabt3o2x7.trigger(); };\n\n    }\nif(addedOps[i].innerOutput)\n{\nconst innerIn_37k6sbwik = addedOps[i].inObject(\"innerIn_37k6sbwik\");\ninnerIn_37k6sbwik.setUiAttribs({title:\"Parent Link\"});\ninnerIn_37k6sbwik.on(\"change\", (a,v) => { port_37k6sbwik.setRef(a); });\n\nconst innerIn_o4ucc2fcw = addedOps[i].inTrigger(\"innerIn_o4ucc2fcw\");\ninnerIn_o4ucc2fcw.setUiAttribs({title:\"Mainloop\"});\ninnerIn_o4ucc2fcw.onTriggered = () => { port_o4ucc2fcw.trigger(); };\n\nconst innerIn_r4xu39dfu = addedOps[i].inTrigger(\"innerIn_r4xu39dfu\");\ninnerIn_r4xu39dfu.setUiAttribs({title:\"Hash Changed\"});\ninnerIn_r4xu39dfu.onTriggered = () => { port_r4xu39dfu.trigger(); };\n\n}\n}\n};\n","ports_json":"{\n    \"ports\": [\n        {\n            \"id\": \"zzd2dk99r\",\n            \"title\": \"Parent Link\",\n            \"dir\": 0,\n            \"type\": 2,\n            \"order\": 0\n        },\n        {\n            \"id\": \"0as2n77e5\",\n            \"title\": \"Mainloop\",\n            \"dir\": 0,\n            \"type\": 1,\n            \"uiDisplay\": \"button\",\n            \"order\": 1\n        },\n        {\n            \"id\": \"eabt3o2x7\",\n            \"title\": \"Hash Changed\",\n            \"dir\": 0,\n            \"type\": 1,\n            \"uiDisplay\": \"button\",\n            \"order\": 2\n        },\n        {\n            \"id\": \"37k6sbwik\",\n            \"title\": \"Parent Link\",\n            \"dir\": 1,\n            \"type\": 2,\n            \"order\": 1003\n        },\n        {\n            \"id\": \"o4ucc2fcw\",\n            \"title\": \"Mainloop\",\n            \"dir\": 1,\n            \"type\": 1,\n            \"order\": 1004\n        },\n        {\n            \"id\": \"r4xu39dfu\",\n            \"title\": \"Hash Changed\",\n            \"dir\": 1,\n            \"type\": 1,\n            \"order\": 1005\n        }\n    ]\n}","subpatch_json":"{\n  \"ops\": [\n    {\n      \"opId\": \"7ef594f3-4907-47b0-a2d3-9854eda1679d\",\n      \"id\": \"2lknd3bua\",\n      \"uiAttribs\": {\n        \"subPatch\": \"322ya1kem\",\n        \"translate\": {\n          \"x\": 7380,\n          \"y\": 1220\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {}\n    },\n    {\n      \"opId\": \"7ef594f3-4907-47b0-a2d3-9854eda1679d\",\n      \"id\": \"oar8gsrrr\",\n      \"uiAttribs\": {\n        \"subPatch\": \"322ya1kem\",\n        \"translate\": {\n          \"x\": 7392,\n          \"y\": 1260\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {}\n    },\n    {\n      \"opId\": \"c4e4e933-136e-479e-8de8-0b35b75d9217\",\n      \"id\": \"1ncpylgxx\",\n      \"uiAttribs\": {\n        \"subPatch\": \"322ya1kem\",\n        \"translate\": {\n          \"x\": 7380,\n          \"y\": 1140\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"innerOut_zzd2dk99r\",\n          \"title\": \"Parent Link\",\n          \"links\": [\n            {\n              \"portIn\": \"innerIn_37k6sbwik\",\n              \"portOut\": \"innerOut_zzd2dk99r\",\n              \"objIn\": \"ksetd5v03\",\n              \"objOut\": \"1ncpylgxx\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_0as2n77e5\",\n          \"title\": \"Mainloop\",\n          \"links\": [\n            {\n              \"portIn\": \"Execute\",\n              \"portOut\": \"innerOut_0as2n77e5\",\n              \"objIn\": \"2lknd3bua\",\n              \"objOut\": \"1ncpylgxx\"\n            },\n            {\n              \"portIn\": \"innerIn_o4ucc2fcw\",\n              \"portOut\": \"innerOut_0as2n77e5\",\n              \"objIn\": \"ksetd5v03\",\n              \"objOut\": \"1ncpylgxx\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_eabt3o2x7\",\n          \"title\": \"Hash Changed\",\n          \"links\": [\n            {\n              \"portIn\": \"innerIn_r4xu39dfu\",\n              \"portOut\": \"innerOut_eabt3o2x7\",\n              \"objIn\": \"ksetd5v03\",\n              \"objOut\": \"1ncpylgxx\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"02d45073-7936-4830-81ad-59a162febf1f\",\n      \"id\": \"ksetd5v03\",\n      \"uiAttribs\": {\n        \"subPatch\": \"322ya1kem\",\n        \"translate\": {\n          \"x\": 7380,\n          \"y\": 1340\n        },\n        \"blueprintSubpatch2\": true,\n        \"tempSubOldOpId\": null\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"innerIn_37k6sbwik\",\n          \"title\": \"Parent Link\"\n        },\n        {\n          \"name\": \"innerIn_o4ucc2fcw\",\n          \"title\": \"Mainloop\"\n        },\n        {\n          \"name\": \"innerIn_r4xu39dfu\",\n          \"title\": \"Hash Changed\"\n        }\n      ]\n    }\n  ]\n}",};
const port_zzd2dk99r=op.inObject("zzd2dk99r");
port_zzd2dk99r.setUiAttribs({title:"Parent Link",});

const port_0as2n77e5=op.inTrigger("0as2n77e5");
port_0as2n77e5.setUiAttribs({title:"Mainloop",display:"button",});

const port_eabt3o2x7=op.inTrigger("eabt3o2x7");
port_eabt3o2x7.setUiAttribs({title:"Hash Changed",display:"button",});

const port_37k6sbwik=op.outObject("37k6sbwik");
port_37k6sbwik.setUiAttribs({title:"Parent Link",});

const port_o4ucc2fcw=op.outTrigger("o4ucc2fcw");
port_o4ucc2fcw.setUiAttribs({title:"Mainloop",});

const port_r4xu39dfu=op.outTrigger("r4xu39dfu");
port_r4xu39dfu.setUiAttribs({title:"Hash Changed",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_zzd2dk99r = addedOps[i].outObject("innerOut_zzd2dk99r");
innerOut_zzd2dk99r.setUiAttribs({title:"Parent Link"});
port_zzd2dk99r.on("change", (a,v) => { innerOut_zzd2dk99r.setRef(a); });

const innerOut_0as2n77e5 = addedOps[i].outTrigger("innerOut_0as2n77e5");
innerOut_0as2n77e5.setUiAttribs({title:"Mainloop"});
port_0as2n77e5.onTriggered = () => { innerOut_0as2n77e5.trigger(); };

const innerOut_eabt3o2x7 = addedOps[i].outTrigger("innerOut_eabt3o2x7");
innerOut_eabt3o2x7.setUiAttribs({title:"Hash Changed"});
port_eabt3o2x7.onTriggered = () => { innerOut_eabt3o2x7.trigger(); };

    }
if(addedOps[i].innerOutput)
{
const innerIn_37k6sbwik = addedOps[i].inObject("innerIn_37k6sbwik");
innerIn_37k6sbwik.setUiAttribs({title:"Parent Link"});
innerIn_37k6sbwik.on("change", (a,v) => { port_37k6sbwik.setRef(a); });

const innerIn_o4ucc2fcw = addedOps[i].inTrigger("innerIn_o4ucc2fcw");
innerIn_o4ucc2fcw.setUiAttribs({title:"Mainloop"});
innerIn_o4ucc2fcw.onTriggered = () => { port_o4ucc2fcw.trigger(); };

const innerIn_r4xu39dfu = addedOps[i].inTrigger("innerIn_r4xu39dfu");
innerIn_r4xu39dfu.setUiAttribs({title:"Hash Changed"});
innerIn_r4xu39dfu.onTriggered = () => { port_r4xu39dfu.trigger(); };

}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
    if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
    op.patch.emitEvent("subpatchExpose", patchId);
    op.setStorage({ "blueprintVer": 2 });
    op.patch.emitEvent("subpatchExpose", patchId);
}


};

Ops.User.rambodc.PageRouter.prototype = new CABLES.Op();
CABLES.OPS["b8f61f61-1cd4-4fc6-9518-2bc6fb1a8718"]={f:Ops.User.rambodc.PageRouter,objName:"Ops.User.rambodc.PageRouter"};




// **************************************************************
// 
// Ops.User.rambodc.PageControls
// 
// **************************************************************

Ops.User.rambodc.PageControls = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_4lursd3if=op.inObject(\"4lursd3if\");\nport_4lursd3if.setUiAttribs({title:\"Parent Link\",});\n\nconst port_a0hazs8qu=op.inString(\"a0hazs8qu\",\"\");\nport_a0hazs8qu.setUiAttribs({title:\"Directory 1\",});\n\nconst port_jyz85fved=op.inString(\"jyz85fved\",\"\");\nport_jyz85fved.setUiAttribs({title:\"Directory 2\",});\n\nconst port_bxzssu5p7=op.inString(\"bxzssu5p7\",\"\");\nport_bxzssu5p7.setUiAttribs({title:\"Directory 3\",});\n\nconst port_f8aa3pksk=op.inTrigger(\"f8aa3pksk\");\nport_f8aa3pksk.setUiAttribs({title:\"Mainloop\",});\n\nconst port_wb8ht3wlb=op.inTrigger(\"wb8ht3wlb\");\nport_wb8ht3wlb.setUiAttribs({title:\"Hash Changed\",});\n\nconst port_vjfo5caql=op.outObject(\"vjfo5caql\");\nport_vjfo5caql.setUiAttribs({title:\"Parent Link\",});\n\nconst port_rgkrndn64=op.outTrigger(\"rgkrndn64\");\nport_rgkrndn64.setUiAttribs({title:\"Mainloop\",});\n\nconst port_iyq4pnlwm=op.outTrigger(\"iyq4pnlwm\");\nport_iyq4pnlwm.setUiAttribs({title:\"Hash Changed\",});\n\nconst port_wg0zcmxag=op.outNumber(\"wg0zcmxag\");\nport_wg0zcmxag.setUiAttribs({title:\"Dir 1-2 Equal\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_4lursd3if = addedOps[i].outObject(\"innerOut_4lursd3if\");\ninnerOut_4lursd3if.setUiAttribs({title:\"Parent Link\"});\nport_4lursd3if.on(\"change\", (a,v) => { innerOut_4lursd3if.setRef(a); });\n\nconst innerOut_a0hazs8qu = addedOps[i].outString(\"innerOut_a0hazs8qu\");\ninnerOut_a0hazs8qu.set(port_a0hazs8qu.get() );\ninnerOut_a0hazs8qu.setUiAttribs({title:\"Directory 1\"});\nport_a0hazs8qu.on(\"change\", (a,v) => { innerOut_a0hazs8qu.set(a); });\n\nconst innerOut_jyz85fved = addedOps[i].outString(\"innerOut_jyz85fved\");\ninnerOut_jyz85fved.set(port_jyz85fved.get() );\ninnerOut_jyz85fved.setUiAttribs({title:\"Directory 2\"});\nport_jyz85fved.on(\"change\", (a,v) => { innerOut_jyz85fved.set(a); });\n\nconst innerOut_bxzssu5p7 = addedOps[i].outString(\"innerOut_bxzssu5p7\");\ninnerOut_bxzssu5p7.set(port_bxzssu5p7.get() );\ninnerOut_bxzssu5p7.setUiAttribs({title:\"Directory 3\"});\nport_bxzssu5p7.on(\"change\", (a,v) => { innerOut_bxzssu5p7.set(a); });\n\nconst innerOut_f8aa3pksk = addedOps[i].outTrigger(\"innerOut_f8aa3pksk\");\ninnerOut_f8aa3pksk.setUiAttribs({title:\"Mainloop\"});\nport_f8aa3pksk.onTriggered = () => { innerOut_f8aa3pksk.trigger(); };\n\nconst innerOut_wb8ht3wlb = addedOps[i].outTrigger(\"innerOut_wb8ht3wlb\");\ninnerOut_wb8ht3wlb.setUiAttribs({title:\"Hash Changed\"});\nport_wb8ht3wlb.onTriggered = () => { innerOut_wb8ht3wlb.trigger(); };\n\n    }\nif(addedOps[i].innerOutput)\n{\nconst innerIn_vjfo5caql = addedOps[i].inObject(\"innerIn_vjfo5caql\");\ninnerIn_vjfo5caql.setUiAttribs({title:\"Parent Link\"});\ninnerIn_vjfo5caql.on(\"change\", (a,v) => { port_vjfo5caql.setRef(a); });\n\nconst innerIn_rgkrndn64 = addedOps[i].inTrigger(\"innerIn_rgkrndn64\");\ninnerIn_rgkrndn64.setUiAttribs({title:\"Mainloop\"});\ninnerIn_rgkrndn64.onTriggered = () => { port_rgkrndn64.trigger(); };\n\nconst innerIn_iyq4pnlwm = addedOps[i].inTrigger(\"innerIn_iyq4pnlwm\");\ninnerIn_iyq4pnlwm.setUiAttribs({title:\"Hash Changed\"});\ninnerIn_iyq4pnlwm.onTriggered = () => { port_iyq4pnlwm.trigger(); };\n\nconst innerIn_wg0zcmxag = addedOps[i].inFloat(\"innerIn_wg0zcmxag\");\ninnerIn_wg0zcmxag.setUiAttribs({title:\"Dir 1-2 Equal\"});\ninnerIn_wg0zcmxag.on(\"change\", (a,v) => { port_wg0zcmxag.set(a); });\n\n}\n}\n};\n","ports_json":"{\n    \"ports\": [\n        {\n            \"id\": \"4lursd3if\",\n            \"title\": \"Parent Link\",\n            \"dir\": 0,\n            \"type\": 2,\n            \"order\": 0\n        },\n        {\n            \"id\": \"a0hazs8qu\",\n            \"title\": \"Directory 1\",\n            \"dir\": 0,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 1\n        },\n        {\n            \"id\": \"jyz85fved\",\n            \"title\": \"Directory 2\",\n            \"dir\": 0,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 2\n        },\n        {\n            \"id\": \"bxzssu5p7\",\n            \"title\": \"Directory 3\",\n            \"dir\": 0,\n            \"type\": 5,\n            \"value\": \"\",\n            \"order\": 3\n        },\n        {\n            \"id\": \"f8aa3pksk\",\n            \"title\": \"Mainloop\",\n            \"dir\": 0,\n            \"type\": 1,\n            \"order\": 4\n        },\n        {\n            \"id\": \"wb8ht3wlb\",\n            \"title\": \"Hash Changed\",\n            \"dir\": 0,\n            \"type\": 1,\n            \"order\": 5\n        },\n        {\n            \"id\": \"vjfo5caql\",\n            \"title\": \"Parent Link\",\n            \"dir\": 1,\n            \"type\": 2,\n            \"order\": 1006\n        },\n        {\n            \"id\": \"rgkrndn64\",\n            \"title\": \"Mainloop\",\n            \"dir\": 1,\n            \"type\": 1,\n            \"order\": 1007\n        },\n        {\n            \"id\": \"iyq4pnlwm\",\n            \"title\": \"Hash Changed\",\n            \"dir\": 1,\n            \"type\": 1,\n            \"order\": 1008\n        },\n        {\n            \"id\": \"wg0zcmxag\",\n            \"title\": \"Dir 1-2 Equal\",\n            \"dir\": 1,\n            \"type\": 0,\n            \"value\": 0,\n            \"order\": 1009\n        }\n    ]\n}","subpatch_json":"{\n  \"ops\": [\n    {\n      \"opId\": \"ef15195a-760b-4ac5-9630-322b0ba7b722\",\n      \"id\": \"g4wlcthug\",\n      \"uiAttribs\": {\n        \"subPatch\": \"0ddmwwrwb\",\n        \"translate\": {\n          \"x\": 6672,\n          \"y\": -640\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"Pass Through\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"smepjc8dk\",\n              \"objOut\": \"g4wlcthug\"\n            },\n            {\n              \"portIn\": \"boolean\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"hicdph73u\",\n              \"objOut\": \"g4wlcthug\"\n            },\n            {\n              \"portIn\": \"bool 2\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"2gxawhzl5\",\n              \"objOut\": \"g4wlcthug\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"e72fbd80-f9c7-4572-8b6d-a485ef474b74\",\n      \"id\": \"guhowkwys\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 6972,\n          \"y\": -900\n        },\n        \"subPatch\": \"0ddmwwrwb\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"URL\",\n          \"value\": \"https://sandbox.cables.gl/ui/#/a\"\n        },\n        {\n          \"name\": \"Host\",\n          \"value\": \"sandbox.cables.gl\"\n        },\n        {\n          \"name\": \"Hash\",\n          \"links\": [\n            {\n              \"portIn\": \"String\",\n              \"portOut\": \"Hash\",\n              \"objIn\": \"ihtx7j90u\",\n              \"objOut\": \"guhowkwys\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Pathname\",\n          \"value\": \"/ui/\"\n        },\n        {\n          \"name\": \"Protocol\",\n          \"value\": \"https:\"\n        },\n        {\n          \"name\": \"Port\",\n          \"value\": \"\"\n        }\n      ]\n    },\n    {\n      \"opId\": \"966c1ad2-20a6-4c6e-b390-a26fe4fdbcfa\",\n      \"id\": \"uk5ebyhvw\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 6996,\n          \"y\": -780\n        },\n        \"subPatch\": \"0ddmwwrwb\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"Directory 1\",\n          \"links\": [\n            {\n              \"portIn\": \"String 2\",\n              \"portOut\": \"Directory 1\",\n              \"objIn\": \"99jo9d3n6\",\n              \"objOut\": \"uk5ebyhvw\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Directory 2\",\n          \"links\": [\n            {\n              \"portIn\": \"String 2\",\n              \"portOut\": \"Directory 2\",\n              \"objIn\": \"g4wlcthug\",\n              \"objOut\": \"uk5ebyhvw\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Directory 3\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Directory 4\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Directory 5\",\n          \"value\": \"\"\n        }\n      ]\n    },\n    {\n      \"opId\": \"4a053e7a-6b00-4e71-bd51-90cdb190994c\",\n      \"id\": \"ihtx7j90u\",\n      \"uiAttribs\": {\n        \"translate\": {\n          \"x\": 6996,\n          \"y\": -840\n        },\n        \"subPatch\": \"0ddmwwrwb\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"Search For\",\n          \"value\": \"#\"\n        },\n        {\n          \"name\": \"Replace\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"Replace What index\",\n          \"value\": 0\n        },\n        {\n          \"name\": \"Replace What\",\n          \"value\": \"First\"\n        }\n      ],\n      \"portsOut\": [\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"Path\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"uk5ebyhvw\",\n              \"objOut\": \"ihtx7j90u\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"65e8b8a2-ba13-485f-883a-2bcf377989da\",\n      \"id\": \"smepjc8dk\",\n      \"uiAttribs\": {\n        \"subPatch\": \"0ddmwwrwb\",\n        \"translate\": {\n          \"x\": 6600,\n          \"y\": -520\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"Trigger out\",\n          \"links\": [\n            {\n              \"portIn\": \"innerIn_rgkrndn64\",\n              \"portOut\": \"Trigger out\",\n              \"objIn\": \"6eqekm45h\",\n              \"objOut\": \"smepjc8dk\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"c4e4e933-136e-479e-8de8-0b35b75d9217\",\n      \"id\": \"d3qhkafuo\",\n      \"uiAttribs\": {\n        \"subPatch\": \"0ddmwwrwb\",\n        \"translate\": {\n          \"x\": 6600,\n          \"y\": -980\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"innerOut_4lursd3if\",\n          \"title\": \"Parent Link\",\n          \"links\": [\n            {\n              \"portIn\": \"innerIn_vjfo5caql\",\n              \"portOut\": \"innerOut_4lursd3if\",\n              \"objIn\": \"6eqekm45h\",\n              \"objOut\": \"d3qhkafuo\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_a0hazs8qu\",\n          \"title\": \"Directory 1\",\n          \"links\": [\n            {\n              \"portIn\": \"String 1\",\n              \"portOut\": \"innerOut_a0hazs8qu\",\n              \"objIn\": \"99jo9d3n6\",\n              \"objOut\": \"d3qhkafuo\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_jyz85fved\",\n          \"title\": \"Directory 2\",\n          \"links\": [\n            {\n              \"portIn\": \"String 1\",\n              \"portOut\": \"innerOut_jyz85fved\",\n              \"objIn\": \"g4wlcthug\",\n              \"objOut\": \"d3qhkafuo\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_bxzssu5p7\",\n          \"value\": \"\",\n          \"title\": \"Directory 3\"\n        },\n        {\n          \"name\": \"innerOut_f8aa3pksk\",\n          \"title\": \"Mainloop\",\n          \"links\": [\n            {\n              \"portIn\": \"Execute\",\n              \"portOut\": \"innerOut_f8aa3pksk\",\n              \"objIn\": \"smepjc8dk\",\n              \"objOut\": \"d3qhkafuo\"\n            }\n          ]\n        },\n        {\n          \"name\": \"innerOut_wb8ht3wlb\",\n          \"title\": \"Hash Changed\",\n          \"links\": [\n            {\n              \"portIn\": \"exe\",\n              \"portOut\": \"innerOut_wb8ht3wlb\",\n              \"objIn\": \"hicdph73u\",\n              \"objOut\": \"d3qhkafuo\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"02d45073-7936-4830-81ad-59a162febf1f\",\n      \"id\": \"6eqekm45h\",\n      \"uiAttribs\": {\n        \"subPatch\": \"0ddmwwrwb\",\n        \"translate\": {\n          \"x\": 6600,\n          \"y\": -340\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsIn\": [\n        {\n          \"name\": \"innerIn_vjfo5caql\",\n          \"title\": \"Parent Link\"\n        },\n        {\n          \"name\": \"innerIn_rgkrndn64\",\n          \"title\": \"Mainloop\"\n        },\n        {\n          \"name\": \"innerIn_iyq4pnlwm\",\n          \"title\": \"Hash Changed\"\n        },\n        {\n          \"name\": \"innerIn_wg0zcmxag\",\n          \"title\": \"Dir 1-2 Equal\"\n        }\n      ]\n    },\n    {\n      \"opId\": \"9549e2ed-a544-4d33-a672-05c7854ccf5d\",\n      \"id\": \"hicdph73u\",\n      \"uiAttribs\": {\n        \"subPatch\": \"0ddmwwrwb\",\n        \"translate\": {\n          \"x\": 6876,\n          \"y\": -440\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"then\",\n          \"links\": [\n            {\n              \"portIn\": \"innerIn_iyq4pnlwm\",\n              \"portOut\": \"then\",\n              \"objIn\": \"6eqekm45h\",\n              \"objOut\": \"hicdph73u\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"ef15195a-760b-4ac5-9630-322b0ba7b722\",\n      \"id\": \"99jo9d3n6\",\n      \"uiAttribs\": {\n        \"title\": \"Dir 1 Equals\",\n        \"subPatch\": \"0ddmwwrwb\",\n        \"translate\": {\n          \"x\": 6624,\n          \"y\": -700\n        },\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"Result\",\n          \"links\": [\n            {\n              \"portIn\": \"bool 1\",\n              \"portOut\": \"Result\",\n              \"objIn\": \"2gxawhzl5\",\n              \"objOut\": \"99jo9d3n6\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"opId\": \"c26e6ce0-8047-44bb-9bc8-5a4f911ed8ad\",\n      \"id\": \"2gxawhzl5\",\n      \"uiAttribs\": {\n        \"subPatch\": \"0ddmwwrwb\",\n        \"translate\": {\n          \"x\": 6648,\n          \"y\": -420\n        },\n        \"extendTitlePort\": \"result\",\n        \"blueprintSubpatch2\": true\n      },\n      \"storage\": {},\n      \"portsOut\": [\n        {\n          \"name\": \"result\",\n          \"links\": [\n            {\n              \"portIn\": \"innerIn_wg0zcmxag\",\n              \"portOut\": \"result\",\n              \"objIn\": \"6eqekm45h\",\n              \"objOut\": \"2gxawhzl5\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}",};
const port_4lursd3if=op.inObject("4lursd3if");
port_4lursd3if.setUiAttribs({title:"Parent Link",});

const port_a0hazs8qu=op.inString("a0hazs8qu","");
port_a0hazs8qu.setUiAttribs({title:"Directory 1",});

const port_jyz85fved=op.inString("jyz85fved","");
port_jyz85fved.setUiAttribs({title:"Directory 2",});

const port_bxzssu5p7=op.inString("bxzssu5p7","");
port_bxzssu5p7.setUiAttribs({title:"Directory 3",});

const port_f8aa3pksk=op.inTrigger("f8aa3pksk");
port_f8aa3pksk.setUiAttribs({title:"Mainloop",});

const port_wb8ht3wlb=op.inTrigger("wb8ht3wlb");
port_wb8ht3wlb.setUiAttribs({title:"Hash Changed",});

const port_vjfo5caql=op.outObject("vjfo5caql");
port_vjfo5caql.setUiAttribs({title:"Parent Link",});

const port_rgkrndn64=op.outTrigger("rgkrndn64");
port_rgkrndn64.setUiAttribs({title:"Mainloop",});

const port_iyq4pnlwm=op.outTrigger("iyq4pnlwm");
port_iyq4pnlwm.setUiAttribs({title:"Hash Changed",});

const port_wg0zcmxag=op.outNumber("wg0zcmxag");
port_wg0zcmxag.setUiAttribs({title:"Dir 1-2 Equal",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_4lursd3if = addedOps[i].outObject("innerOut_4lursd3if");
innerOut_4lursd3if.setUiAttribs({title:"Parent Link"});
port_4lursd3if.on("change", (a,v) => { innerOut_4lursd3if.setRef(a); });

const innerOut_a0hazs8qu = addedOps[i].outString("innerOut_a0hazs8qu");
innerOut_a0hazs8qu.set(port_a0hazs8qu.get() );
innerOut_a0hazs8qu.setUiAttribs({title:"Directory 1"});
port_a0hazs8qu.on("change", (a,v) => { innerOut_a0hazs8qu.set(a); });

const innerOut_jyz85fved = addedOps[i].outString("innerOut_jyz85fved");
innerOut_jyz85fved.set(port_jyz85fved.get() );
innerOut_jyz85fved.setUiAttribs({title:"Directory 2"});
port_jyz85fved.on("change", (a,v) => { innerOut_jyz85fved.set(a); });

const innerOut_bxzssu5p7 = addedOps[i].outString("innerOut_bxzssu5p7");
innerOut_bxzssu5p7.set(port_bxzssu5p7.get() );
innerOut_bxzssu5p7.setUiAttribs({title:"Directory 3"});
port_bxzssu5p7.on("change", (a,v) => { innerOut_bxzssu5p7.set(a); });

const innerOut_f8aa3pksk = addedOps[i].outTrigger("innerOut_f8aa3pksk");
innerOut_f8aa3pksk.setUiAttribs({title:"Mainloop"});
port_f8aa3pksk.onTriggered = () => { innerOut_f8aa3pksk.trigger(); };

const innerOut_wb8ht3wlb = addedOps[i].outTrigger("innerOut_wb8ht3wlb");
innerOut_wb8ht3wlb.setUiAttribs({title:"Hash Changed"});
port_wb8ht3wlb.onTriggered = () => { innerOut_wb8ht3wlb.trigger(); };

    }
if(addedOps[i].innerOutput)
{
const innerIn_vjfo5caql = addedOps[i].inObject("innerIn_vjfo5caql");
innerIn_vjfo5caql.setUiAttribs({title:"Parent Link"});
innerIn_vjfo5caql.on("change", (a,v) => { port_vjfo5caql.setRef(a); });

const innerIn_rgkrndn64 = addedOps[i].inTrigger("innerIn_rgkrndn64");
innerIn_rgkrndn64.setUiAttribs({title:"Mainloop"});
innerIn_rgkrndn64.onTriggered = () => { port_rgkrndn64.trigger(); };

const innerIn_iyq4pnlwm = addedOps[i].inTrigger("innerIn_iyq4pnlwm");
innerIn_iyq4pnlwm.setUiAttribs({title:"Hash Changed"});
innerIn_iyq4pnlwm.onTriggered = () => { port_iyq4pnlwm.trigger(); };

const innerIn_wg0zcmxag = addedOps[i].inFloat("innerIn_wg0zcmxag");
innerIn_wg0zcmxag.setUiAttribs({title:"Dir 1-2 Equal"});
innerIn_wg0zcmxag.on("change", (a,v) => { port_wg0zcmxag.set(a); });

}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
    if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
    op.patch.emitEvent("subpatchExpose", patchId);
    op.setStorage({ "blueprintVer": 2 });
    op.patch.emitEvent("subpatchExpose", patchId);
}


};

Ops.User.rambodc.PageControls.prototype = new CABLES.Op();
CABLES.OPS["1f610fe2-cc44-411a-a910-01c289272e67"]={f:Ops.User.rambodc.PageControls,objName:"Ops.User.rambodc.PageControls"};




// **************************************************************
// 
// Ops.Vars.VarGetNumber_v2
// 
// **************************************************************

Ops.Vars.VarGetNumber_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const val = op.outNumber("Value");
op.varName = op.inValueSelect("Variable", [], "", true);

new CABLES.VarGetOpWrapper(op, "number", op.varName, val);


};

Ops.Vars.VarGetNumber_v2.prototype = new CABLES.Op();
CABLES.OPS["421f5b52-c0fa-47c4-8b7a-012b9e1c864a"]={f:Ops.Vars.VarGetNumber_v2,objName:"Ops.Vars.VarGetNumber_v2"};




// **************************************************************
// 
// Ops.Boolean.IfTrueThen_v2
// 
// **************************************************************

Ops.Boolean.IfTrueThen_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("exe"),
    boolean = op.inValueBool("boolean", false),
    triggerThen = op.outTrigger("then"),
    triggerElse = op.outTrigger("else");

exe.onTriggered = exec;

// let b = false;

// boolean.onChange = () =>
// {
//     b = boolean.get();
// };

function exec()
{
    if (boolean.get()) triggerThen.trigger();
    else triggerElse.trigger();
}


};

Ops.Boolean.IfTrueThen_v2.prototype = new CABLES.Op();
CABLES.OPS["9549e2ed-a544-4d33-a672-05c7854ccf5d"]={f:Ops.Boolean.IfTrueThen_v2,objName:"Ops.Boolean.IfTrueThen_v2"};




// **************************************************************
// 
// Ops.User.rambodc.StringComposeEditor
// 
// **************************************************************

Ops.User.rambodc.StringComposeEditor = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};


const
    format=op.inStringEditor('Format',"hello $a, $b $c und $d"),
    a=op.inString('String A'),
    b=op.inString('String B'),
    c=op.inString('String C'),
    d=op.inString('String D'),
    e=op.inString('String E'),
    f=op.inString('String F'),
    result=op.outString("Result");

format.onChange=
    a.onChange=
    b.onChange=
    c.onChange=
    d.onChange=
    e.onChange=
    f.onChange=update;

update();

function update()
{
    var str=format.get()||'';
    if(typeof str!='string')
        str='';

    str = str.replace(/\$a/g, a.get());
    str = str.replace(/\$b/g, b.get());
    str = str.replace(/\$c/g, c.get());
    str = str.replace(/\$d/g, d.get());
    str = str.replace(/\$e/g, e.get());
    str = str.replace(/\$f/g, f.get());

    result.set(str);
}

};

Ops.User.rambodc.StringComposeEditor.prototype = new CABLES.Op();
CABLES.OPS["ecefdac0-9ad1-4591-9940-9ec7b1e422f5"]={f:Ops.User.rambodc.StringComposeEditor,objName:"Ops.User.rambodc.StringComposeEditor"};




// **************************************************************
// 
// Ops.String.StringEquals
// 
// **************************************************************

Ops.String.StringEquals = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    str1 = op.inString("String 1"),
    str2 = op.inString("String 2"),
    result = op.outBoolNum("Result");

str1.onChange =
str2.onChange =
    function ()
    {
        result.set(str1.get() == str2.get());
    };


};

Ops.String.StringEquals.prototype = new CABLES.Op();
CABLES.OPS["ef15195a-760b-4ac5-9630-322b0ba7b722"]={f:Ops.String.StringEquals,objName:"Ops.String.StringEquals"};




// **************************************************************
// 
// Ops.Website.InfoURL
// 
// **************************************************************

Ops.Website.InfoURL = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    outUrl = op.outString("URL"),
    outHost = op.outString("Host"),
    outHash = op.outString("Hash"),
    outPathname = op.outString("Pathname"),
    outProtocol = op.outString("Protocol"),
    outPort = op.outString("Port"),
    outChangeHash = op.outTrigger("Hash Changed");

op.onDelete = () =>
{
    window.removeEventListener("hashchange", hashChange);
};

window.addEventListener("hashchange", hashChange);

const l = document.location;
outUrl.set(l.href);
outHost.set(l.host);
outHash.set(l.hash);
outPathname.set(l.pathname);
outProtocol.set(l.protocol);
outPort.set(l.port);

function hashChange()
{
    const l = document.location;
    outHash.set(l.hash);

    outChangeHash.trigger();
}


};

Ops.Website.InfoURL.prototype = new CABLES.Op();
CABLES.OPS["e72fbd80-f9c7-4572-8b6d-a485ef474b74"]={f:Ops.Website.InfoURL,objName:"Ops.Website.InfoURL"};




// **************************************************************
// 
// Ops.User.rambodc.Path_Parser
// 
// **************************************************************

Ops.User.rambodc.Path_Parser = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Define inputs
const pathIn = op.inString("Path", "/b/hello/world/path/example");

// Define outputs for up to 5 segments of the path
const stringOut1 = op.outString("Directory 1", "");
const stringOut2 = op.outString("Directory 2", "");
const stringOut3 = op.outString("Directory 3", "");
const stringOut4 = op.outString("Directory 4", "");
const stringOut5 = op.outString("Directory 5", "");

// Function to split the path and update the outputs
function splitPath() {
    // Ensure the path starts with "/" for consistency, then split by "/"
    let path = pathIn.get();
    if (!path.startsWith("/")) {
        path = "/" + path;
    }
    const segments = path.split("/").filter(Boolean); // Use filter to remove any empty strings resulting from split

    // Assign segments to outputs, if the segment exists
    stringOut1.set(segments.length > 0 ? segments[0] : "");
    stringOut2.set(segments.length > 1 ? segments[1] : "");
    stringOut3.set(segments.length > 2 ? segments[2] : "");
    stringOut4.set(segments.length > 3 ? segments[3] : "");
    stringOut5.set(segments.length > 4 ? segments[4] : "");
}

// Register the input's onChange callback to splitPath function
pathIn.onChange = splitPath;

// Initially call splitPath to set outputs with default input
splitPath();


};

Ops.User.rambodc.Path_Parser.prototype = new CABLES.Op();
CABLES.OPS["966c1ad2-20a6-4c6e-b390-a26fe4fdbcfa"]={f:Ops.User.rambodc.Path_Parser,objName:"Ops.User.rambodc.Path_Parser"};




// **************************************************************
// 
// Ops.String.StringReplace
// 
// **************************************************************

Ops.String.StringReplace = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inStr = op.inString("String"),
    inSearch = op.inString("Search For", "foo"),
    inRepl = op.inString("Replace", "bar"),
    inWhat = op.inSwitch("Replace What", ["All", "First"], "All"),
    outStr = op.outString("Result");

inRepl.onChange =
inStr.onChange =
inWhat.onChange =
inSearch.onChange = update;

function update()
{
    op.setUiError("exception", null);

    let str = "";
    try
    {
        if (inWhat.get() == "All") str = String(inStr.get()).replace(new RegExp(inSearch.get(), "g"), inRepl.get());
        else str = String(inStr.get()).replace(inSearch.get(), inRepl.get());
    }
    catch (e)
    {
        op.setUiError("exception", "exception " + e.message);
    }

    outStr.set(str);
}


};

Ops.String.StringReplace.prototype = new CABLES.Op();
CABLES.OPS["4a053e7a-6b00-4e71-bd51-90cdb190994c"]={f:Ops.String.StringReplace,objName:"Ops.String.StringReplace"};




// **************************************************************
// 
// Ops.Trigger.GateTrigger
// 
// **************************************************************

Ops.Trigger.GateTrigger = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger('Execute'),
    passThrough = op.inValueBool('Pass Through',true),
    triggerOut = op.outTrigger('Trigger out');

exe.onTriggered = function()
{
    if(passThrough.get())
        triggerOut.trigger();
}


};

Ops.Trigger.GateTrigger.prototype = new CABLES.Op();
CABLES.OPS["65e8b8a2-ba13-485f-883a-2bcf377989da"]={f:Ops.Trigger.GateTrigger,objName:"Ops.Trigger.GateTrigger"};




// **************************************************************
// 
// Ops.Boolean.And
// 
// **************************************************************

Ops.Boolean.And = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    bool0 = op.inValueBool("bool 1"),
    bool1 = op.inValueBool("bool 2"),
    result = op.outBoolNum("result");

bool0.onChange =
bool1.onChange = exec;

function exec()
{
    result.set(bool1.get() && bool0.get());
}


};

Ops.Boolean.And.prototype = new CABLES.Op();
CABLES.OPS["c26e6ce0-8047-44bb-9bc8-5a4f911ed8ad"]={f:Ops.Boolean.And,objName:"Ops.Boolean.And"};




// **************************************************************
// 
// Ops.Trigger.TriggerReceive
// 
// **************************************************************

Ops.Trigger.TriggerReceive = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const next = op.outTrigger("Triggered");
op.varName = op.inValueSelect("Named Trigger", [], "", true);

updateVarNamesDropdown();
op.patch.addEventListener("namedTriggersChanged", updateVarNamesDropdown);

let oldName = null;

function doTrigger()
{
    next.trigger();
}

function updateVarNamesDropdown()
{
    if (CABLES.UI)
    {
        let varnames = [];
        let vars = op.patch.namedTriggers;
        // varnames.push('+ create new one');
        for (let i in vars) varnames.push(i);
        op.varName.uiAttribs.values = varnames;
    }
}

op.varName.onChange = function ()
{
    if (oldName)
    {
        let oldCbs = op.patch.namedTriggers[oldName];
        let a = oldCbs.indexOf(doTrigger);
        if (a != -1) oldCbs.splice(a, 1);
    }

    op.setTitle(">" + op.varName.get());
    op.patch.namedTriggers[op.varName.get()] = op.patch.namedTriggers[op.varName.get()] || [];
    let cbs = op.patch.namedTriggers[op.varName.get()];

    cbs.push(doTrigger);
    oldName = op.varName.get();
    updateError();
    op.patch.emitEvent("opTriggerNameChanged", op, op.varName.get());
};

op.on("uiParamPanel", updateError);

function updateError()
{
    if (!op.varName.get())
    {
        op.setUiError("unknowntrigger", "unknown trigger");
    }
    else op.setUiError("unknowntrigger", null);
}


};

Ops.Trigger.TriggerReceive.prototype = new CABLES.Op();
CABLES.OPS["0816c999-f2db-466b-9777-2814573574c5"]={f:Ops.Trigger.TriggerReceive,objName:"Ops.Trigger.TriggerReceive"};




// **************************************************************
// 
// Ops.Html.DivElement_v3
// 
// **************************************************************

Ops.Html.DivElement_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inText = op.inString("Text", "Hello Div"),
    inId = op.inString("Id"),
    inClass = op.inString("Class"),
    inStyle = op.inStringEditor("Style", "position:absolute;\nz-index:100;", "inline-css"),
    inInteractive = op.inValueBool("Interactive", false),
    inVisible = op.inValueBool("Visible", true),
    inBreaks = op.inValueBool("Convert Line Breaks", false),
    inPropagation = op.inValueBool("Propagate Click-Events", true),
    outElement = op.outObject("DOM Element", null, "element"),
    outHover = op.outBoolNum("Hover"),
    outClicked = op.outTrigger("Clicked");

let listenerElement = null;
let oldStr = null;
let prevDisplay = "block";
let div = null;

const canvas = op.patch.cgl.canvas.parentElement;

createElement();

inClass.onChange = updateClass;
inBreaks.onChange = inText.onChange = updateText;
inStyle.onChange = updateStyle;
inInteractive.onChange = updateInteractive;
inVisible.onChange = updateVisibility;

updateText();
updateStyle();
warning();
updateInteractive();

op.onDelete = removeElement;

outElement.onLinkChanged = updateStyle;

function createElement()
{
    div = op.patch.getDocument().createElement("div");
    div.dataset.op = op.id;
    div.classList.add("cablesEle");

    if (inId.get()) div.id = inId.get();

    canvas.appendChild(div);
    outElement.set(div);
}

function removeElement()
{
    if (div) removeClasses();
    if (div && div.parentNode) div.parentNode.removeChild(div);
    oldStr = null;
    div = null;
}

function setCSSVisible(visible)
{
    if (!visible)
    {
        div.style.visibility = "hidden";
        prevDisplay = div.style.display || "block";
        div.style.display = "none";
    }
    else
    {
        // prevDisplay=div.style.display||'block';
        if (prevDisplay == "none") prevDisplay = "block";
        div.style.visibility = "visible";
        div.style.display = prevDisplay;
    }
}

function updateVisibility()
{
    setCSSVisible(inVisible.get());
}

function updateText()
{
    let str = inText.get();

    if (oldStr === str) return;
    oldStr = str;

    if (str && inBreaks.get()) str = str.replace(/(?:\r\n|\r|\n)/g, "<br>");

    if (div.innerHTML != str) div.innerHTML = str;
    outElement.set(null);
    outElement.set(div);
}

// inline css inisde div
function updateStyle()
{
    if (!div) return;
    // if (inStyle.get() != div.style)
    // {
    div.setAttribute("style", inStyle.get());
    updateVisibility();
    outElement.set(null);
    outElement.set(div);
    // }

    if (!div.parentElement)
    {
        canvas.appendChild(div);
    }

    warning();
}

let oldClassesStr = "";

function removeClasses()
{
    if (!div) return;

    const classes = (inClass.get() || "").split(" ");
    for (let i = 0; i < classes.length; i++)
    {
        if (classes[i]) div.classList.remove(classes[i]);
    }
    oldClassesStr = "";
}

function updateClass()
{
    const classes = (inClass.get() || "").split(" ");
    const oldClasses = (oldClassesStr || "").split(" ");

    let found = false;

    for (let i = 0; i < oldClasses.length; i++)
    {
        if (
            oldClasses[i] &&
            classes.indexOf(oldClasses[i].trim()) == -1)
        {
            found = true;
            div.classList.remove(oldClasses[i]);
        }
    }

    for (let i = 0; i < classes.length; i++)
    {
        if (classes[i])
        {
            div.classList.add(classes[i].trim());
        }
    }

    oldClassesStr = inClass.get();
    warning();
}

function onMouseEnter(e)
{
    outHover.set(true);
}

function onMouseLeave(e)
{
    outHover.set(false);
}

function onMouseClick(e)
{
    if (!inPropagation.get())
    {
        e.stopPropagation();
    }
    outClicked.trigger();
}

function updateInteractive()
{
    removeListeners();
    if (inInteractive.get()) addListeners();
}

inId.onChange = function ()
{
    div.id = inId.get();
};

function removeListeners()
{
    if (listenerElement)
    {
        listenerElement.removeEventListener("pointerdown", onMouseClick);
        listenerElement.removeEventListener("pointerleave", onMouseLeave);
        listenerElement.removeEventListener("pointerenter", onMouseEnter);
        listenerElement = null;
    }
}

function addListeners()
{
    if (listenerElement)removeListeners();

    listenerElement = div;

    if (listenerElement)
    {
        listenerElement.addEventListener("pointerdown", onMouseClick);
        listenerElement.addEventListener("pointerleave", onMouseLeave);
        listenerElement.addEventListener("pointerenter", onMouseEnter);
    }
}

op.addEventListener("onEnabledChange", function (enabled)
{
    removeElement();
    if (enabled)
    {
        createElement();
        updateStyle();
        updateClass();
        updateText();
        updateInteractive();
    }
    // if(enabled) updateVisibility();
    // else setCSSVisible(false);
});

function warning()
{
    if (inClass.get() && inStyle.get())
    {
        op.setUiError("error", "Element uses external and inline CSS", 1);
    }
    else
    {
        op.setUiError("error", null);
    }
}


};

Ops.Html.DivElement_v3.prototype = new CABLES.Op();
CABLES.OPS["d55d398c-e68e-486b-b0ce-d9c4bdf7df05"]={f:Ops.Html.DivElement_v3,objName:"Ops.Html.DivElement_v3"};




// **************************************************************
// 
// Ops.String.StringEditor
// 
// **************************************************************

Ops.String.StringEditor = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    v = op.inStringEditor("value", ""),
    syntax = op.inValueSelect("Syntax", ["text", "glsl", "css", "html", "xml", "json", "javascript", "inline-css", "sql"], "text"),
    result = op.outString("Result");

syntax.onChange = updateSyntax;

function updateSyntax()
{
    let s = syntax.get();
    if (s == "javascript")s = "js";
    v.setUiAttribs({ "editorSyntax": s });
}

v.onChange = function ()
{
    result.set(v.get());
};


};

Ops.String.StringEditor.prototype = new CABLES.Op();
CABLES.OPS["6468b7c1-f63e-4db4-b809-4b203d27ead3"]={f:Ops.String.StringEditor,objName:"Ops.String.StringEditor"};




// **************************************************************
// 
// Ops.String.StringCompose_v3
// 
// **************************************************************

Ops.String.StringCompose_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    format=op.inString('Format',"hello $a, $b $c und $d"),
    a=op.inString('String A','world'),
    b=op.inString('String B',1),
    c=op.inString('String C',2),
    d=op.inString('String D',3),
    e=op.inString('String E'),
    f=op.inString('String F'),
    result=op.outString("Result");

format.onChange=
    a.onChange=
    b.onChange=
    c.onChange=
    d.onChange=
    e.onChange=
    f.onChange=update;

update();

function update()
{
    var str=format.get()||'';
    if(typeof str!='string')
        str='';

    str = str.replace(/\$a/g, a.get());
    str = str.replace(/\$b/g, b.get());
    str = str.replace(/\$c/g, c.get());
    str = str.replace(/\$d/g, d.get());
    str = str.replace(/\$e/g, e.get());
    str = str.replace(/\$f/g, f.get());

    result.set(str);
}

};

Ops.String.StringCompose_v3.prototype = new CABLES.Op();
CABLES.OPS["6afea9f4-728d-4f3c-9e75-62ddc1448bf0"]={f:Ops.String.StringCompose_v3,objName:"Ops.String.StringCompose_v3"};




// **************************************************************
// 
// Ops.Vars.VarGetObject_v2
// 
// **************************************************************

Ops.Vars.VarGetObject_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const val = op.outObject("Value");
op.varName = op.inValueSelect("Variable", [], "", true);

new CABLES.VarGetOpWrapper(op, "object", op.varName, val);


};

Ops.Vars.VarGetObject_v2.prototype = new CABLES.Op();
CABLES.OPS["321419d9-69c7-4310-a327-93d310bc2b8e"]={f:Ops.Vars.VarGetObject_v2,objName:"Ops.Vars.VarGetObject_v2"};




// **************************************************************
// 
// Ops.Html.ElementCssTransform
// 
// **************************************************************

Ops.Html.ElementCssTransform = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inEle = op.inObject("Element", null, "element"),
    inDoTranslate = op.inBool("Translate Active", true),
    inTransX = op.inFloat("Translate X", 0),
    inTransY = op.inFloat("Translate Y", 0),
    inTransUnit = op.inSwitch("Unit", ["px", "%"], "px"),

    inDoScale = op.inBool("Scale Active", true),
    inScale = op.inFloat("Scale", 1),

    inDoRot = op.inBool("Rotate Active", true),
    inRot = op.inFloat("Rot Z", 0),

    inDoOrigin = op.inBool("Set Origin", true),
    inOriginX = op.inSwitch("Origin X", ["left", "center", "right"], "center"),
    inOriginY = op.inSwitch("Origin Y", ["top", "center", "bottom"], "center");

op.setPortGroup("Element", [inEle]);
op.setPortGroup("Translation", [inDoTranslate, inTransY, inTransX, inTransUnit]);
op.setPortGroup("Scaling", [inScale, inDoScale]);
op.setPortGroup("Rotation", [inDoRot, inRot]);
op.setPortGroup("Origin", [inDoOrigin, inOriginX, inOriginY]);

inTransUnit.onChange =
    inDoScale.onChange =
    inDoOrigin.onChange =
    inOriginX.onChange =
    inOriginY.onChange =
    inDoRot.onChange =
    inDoTranslate.onChange =
    inDoRot.onChange =
    inTransX.onChange =
    inTransY.onChange =
    inScale.onChange =
    inRot.onChange = update;

let ele = null;

inEle.onChange = inEle.onLinkChanged = function ()
{
    if (ele && ele.style)
    {
        ele.style.transform = "initial";
    }
    update();
};

function update()
{
    ele = inEle.get();
    if (ele && ele.style)
    {
        let str = "";

        if (inDoTranslate.get())
            if (inTransY.get() || inTransX.get())
                str += "translate(" + inTransX.get() + inTransUnit.get() + " , " + inTransY.get() + inTransUnit.get() + ") ";

        if (inDoScale.get())
            if (inScale.get() != 1.0)
                str += "scale(" + inScale.get() + ") ";

        if (inDoRot.get())
            if (inRot.get() != 0.0)
                str += "rotateZ(" + inRot.get() + "deg) ";

        try
        {
            ele.style.transform = str;

            if (inDoOrigin.get())
                ele.style["transform-origin"] = inOriginY.get() + " " + inOriginX.get();
            else
                ele.style["transform-origin"] = "initial";
        }
        catch (e)
        {
            op.logError(e);
        }
    }
    else
    {
        setTimeout(update, 50);
    }

    // outEle.set(inEle.get());
}


};

Ops.Html.ElementCssTransform.prototype = new CABLES.Op();
CABLES.OPS["777d00c6-5605-43c5-9b6a-b20d465bd3ba"]={f:Ops.Html.ElementCssTransform,objName:"Ops.Html.ElementCssTransform"};




// **************************************************************
// 
// Ops.Anim.BoolAnim
// 
// **************************************************************

Ops.Anim.BoolAnim = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const anim = new CABLES.Anim();

const
    exe = op.inTrigger("exe"),
    bool = op.inValueBool("bool"),
    pease = anim.createPort(op, "easing"),
    duration = op.inValue("duration", 0.5),
    dir = op.inValueSelect("Direction", ["Both", "Only True", "Only False"], "Both"),
    valueFalse = op.inValue("value false", 0),
    valueTrue = op.inValue("value true", 1),
    next = op.outTrigger("trigger"),
    value = op.outNumber("value"),
    finished = op.outBoolNum("finished"),
    finishedTrigger = op.outTrigger("Finished Trigger");

const startTime = CABLES.now();
op.toWorkPortsNeedToBeLinked(exe);
op.setPortGroup("Animation", [duration, pease]);
op.setPortGroup("Values", [valueFalse, valueTrue]);

dir.onChange = bool.onChange = valueFalse.onChange = valueTrue.onChange = duration.onChange = setAnim;
setAnim();

function setAnim()
{
    if (dir.get() == "Animate Both")dir.set("Both");
    finished.set(false);
    const now = (CABLES.now() - startTime) / 1000;
    const oldValue = anim.getValue(now);
    anim.clear();

    anim.setValue(now, oldValue);

    if (!bool.get())
    {
        if (dir.get() != "Only True") anim.setValue(now + duration.get(), valueFalse.get());
        else anim.setValue(now, valueFalse.get());
    }
    else
    {
        if (dir.get() != "Only False") anim.setValue(now + duration.get(), valueTrue.get());
        else anim.setValue(now, valueTrue.get());
    }
}

exe.onTriggered = function ()
{
    const t = (CABLES.now() - startTime) / 1000;
    value.set(anim.getValue(t));

    if (anim.hasEnded(t))
    {
        if (!finished.get()) finishedTrigger.trigger();
        finished.set(true);
    }

    next.trigger();
};


};

Ops.Anim.BoolAnim.prototype = new CABLES.Op();
CABLES.OPS["06ad9d35-ccf5-4d31-889c-e23fa062588a"]={f:Ops.Anim.BoolAnim,objName:"Ops.Anim.BoolAnim"};




// **************************************************************
// 
// Ops.Html.ElementChilds_v2
// 
// **************************************************************

Ops.Html.ElementChilds_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    parentPort = op.inObject("Parent", null, "element"),
    outParent = op.outObject("Parent Out", null, "element");

const canvas = op.patch.cgl.canvas.parentElement;

const inPorts = [];
for (let i = 0; i < 10; i++)
{
    const p = op.inObject("Child " + (i + 1));
    inPorts.push(p);
    p.onChange = () =>
    {
        rebuild();
        if (!p.get())
        {
            const selector = "[data-cables-child-id='" + op.id + "_" + i + "']";
            const currentChild = canvas.querySelector(selector);
            if (currentChild) delete currentChild.dataset.cablesChildId;
        }
    };
    p.onLinkChanged = () =>
    {
        if (!p.isLinked())
        {
            const selector = "[data-cables-child-id='" + op.id + "_" + i + "']";
            const currentChild = canvas.querySelector(selector);
            if (currentChild) currentChild.remove();
        }
    };
}

parentPort.onLinkChanged = () =>
{
    if (!parentPort.isLinked())
    {
        cleanUp();
    }
    else
    {
        rebuild();
    }
};

outParent.onLinkChanged = () =>
{
    if (!outParent.isLinked())
    {
        const parentDiv = parentPort.get();
        if (parentDiv && parentDiv.dataset.op)
        {
            const inDoc = canvas.querySelector("[data-op=' " + parentDiv.dataset.op + " ']");
            if (!inDoc)
            {
                canvas.appendChild(parentDiv);
            }
        }
    }
};

parentPort.onChange = () =>
{
    if (!parentPort.get())
    {
        cleanUp();
    }
    rebuild();
};

function cleanUp()
{
    for (let i = 0; i < inPorts.length; i++)
    {
        const selector = "[data-cables-child-id='" + op.id + "_" + i + "']";
        const currentChild = canvas.querySelector(selector);
        if (currentChild && currentChild.parentNode)
        {
            currentChild.remove();
        }
    }
    outParent.set(null);
}

function rebuild()
{
    const parent = parentPort.get();
    if (!parent)
    {
        outParent.set(null);
        return;
    }

    if (!parent.querySelector)
    {
        outParent.set(null);
        return;
    }

    for (let i = 0; i < inPorts.length; i++)
    {
        const selector = "[data-cables-child-id='" + op.id + "_" + i + "']";
        const currentChild = parent.querySelector(selector);
        if (currentChild)
        {
            currentChild.remove();
        }
        const p = inPorts[i].get();
        if (p && parent)
        {
            if (!p.dataset)console.warn("[elementChilds] p no dataset ?!");
            else p.dataset.cablesChildId = op.id + "_" + i;
            parent.appendChild(p);
        }
    }

    outParent.setRef(parent);
}


};

Ops.Html.ElementChilds_v2.prototype = new CABLES.Op();
CABLES.OPS["ad7eea9a-f4af-4ab7-bb70-922242529681"]={f:Ops.Html.ElementChilds_v2,objName:"Ops.Html.ElementChilds_v2"};




// **************************************************************
// 
// Ops.User.rambodc.DivElement_ClickFix
// 
// **************************************************************

Ops.User.rambodc.DivElement_ClickFix = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inText = op.inString("Text", "Hello Div"),
    inId = op.inString("Id"),
    inClass = op.inString("Class"),
    inStyle = op.inStringEditor("Style", "position:absolute;\nz-index:100;", "inline-css"),
    inInteractive = op.inValueBool("Interactive", false),
    inVisible = op.inValueBool("Visible", true),
    inBreaks = op.inValueBool("Convert Line Breaks", false),
    inPropagation = op.inValueBool("Propagate Click-Events", true),
    outElement = op.outObject("DOM Element", null, "element"),
    outHover = op.outBoolNum("Hover"),
    outClicked = op.outTrigger("Clicked");

let isHovering = false;
let listenerElement = null;
let oldStr = null;
let prevDisplay = "block";
let div = null;

const canvas = op.patch.cgl.canvas.parentElement;

createElement();

inClass.onChange = updateClass;
inBreaks.onChange = inText.onChange = updateText;
inStyle.onChange = updateStyle;
inInteractive.onChange = updateInteractive;
inVisible.onChange = updateVisibility;

updateText();
updateStyle();
warning();
updateInteractive();

op.onDelete = removeElement;

outElement.onLinkChanged = updateStyle;

function createElement()
{
    div = document.createElement("div");
    div.dataset.op = op.id;
    div.classList.add("cablesEle");

    if (inId.get()) div.id = inId.get();

    canvas.appendChild(div);
    outElement.set(div);
}

function removeElement()
{
    if (div) removeClasses();
    if (div && div.parentNode) div.parentNode.removeChild(div);
    oldStr = null;
    div = null;
}

function setCSSVisible(visible)
{
    if (!visible)
    {
        div.style.visibility = "hidden";
        prevDisplay = div.style.display || "block";
        div.style.display = "none";
    }
    else
    {
        // prevDisplay=div.style.display||'block';
        if (prevDisplay == "none") prevDisplay = "block";
        div.style.visibility = "visible";
        div.style.display = prevDisplay;
    }
}

function updateVisibility()
{
    setCSSVisible(inVisible.get());
}

function updateText()
{
    let str = inText.get();

    if (oldStr === str) return;
    oldStr = str;

    if (str && inBreaks.get()) str = str.replace(/(?:\r\n|\r|\n)/g, "<br>");

    if (div.innerHTML != str) div.innerHTML = str;
    outElement.set(null);
    outElement.set(div);
}

// inline css inisde div
function updateStyle()
{
    if (!div) return;
    // if (inStyle.get() != div.style)
    // {
    div.setAttribute("style", inStyle.get());
    updateVisibility();
    outElement.set(null);
    outElement.set(div);
    // }

    if (!div.parentElement)
    {
        canvas.appendChild(div);
    }

    warning();
}

let oldClassesStr = "";

function removeClasses()
{
    if (!div) return;

    const classes = (inClass.get() || "").split(" ");
    for (let i = 0; i < classes.length; i++)
    {
        if (classes[i]) div.classList.remove(classes[i]);
    }
    oldClassesStr = "";
}

function updateClass()
{
    const classes = (inClass.get() || "").split(" ");
    const oldClasses = (oldClassesStr || "").split(" ");

    let found = false;

    for (let i = 0; i < oldClasses.length; i++)
    {
        if (
            oldClasses[i] &&
            classes.indexOf(oldClasses[i].trim()) == -1)
        {
            found = true;
            div.classList.remove(oldClasses[i]);
        }
    }

    for (let i = 0; i < classes.length; i++)
    {
        if (classes[i])
        {
            div.classList.add(classes[i].trim());
        }
    }

    oldClassesStr = inClass.get();
    warning();
}

function onMouseEnter(e)
{
    outHover.set(true);
    isHovering = true;
}

function onMouseLeave(e)
{
    outHover.set(false);
    isHovering = false;
}

function onMouseClick(e)
{
    if (!inPropagation.get())
    {
        e.stopPropagation();
    }
    if (isHovering) {
        outClicked.trigger();
    }
}

function updateInteractive()
{
    removeListeners();
    if (inInteractive.get()) addListeners();
}

inId.onChange = function ()
{
    div.id = inId.get();
};

function removeListeners()
{
    if (listenerElement)
    {
        listenerElement.removeEventListener("pointerdown", onMouseClick);
        listenerElement.removeEventListener("pointerleave", onMouseLeave);
        listenerElement.removeEventListener("pointerenter", onMouseEnter);
        listenerElement = null;
    }
}

function addListeners()
{
    if (listenerElement) removeListeners();

    listenerElement = div;

    if (listenerElement)
    {
        listenerElement.addEventListener("pointerup", onMouseClick);  // Changed from pointerdown to pointerup
        listenerElement.addEventListener("pointerleave", onMouseLeave);
        listenerElement.addEventListener("pointerenter", onMouseEnter);
    }
}

op.addEventListener("onEnabledChange", function (enabled)
{
    removeElement();
    if (enabled)
    {
        createElement();
        updateStyle();
        updateClass();
        updateText();
        updateInteractive();
    }
    // if(enabled) updateVisibility();
    // else setCSSVisible(false);
});

function warning()
{
    if (inClass.get() && inStyle.get())
    {
        op.setUiError("error", "Element uses external and inline CSS", 1);
    }
    else
    {
        op.setUiError("error", null);
    }
}


};

Ops.User.rambodc.DivElement_ClickFix.prototype = new CABLES.Op();
CABLES.OPS["9b76d8bc-96ea-4aee-9b91-c9b3d9056785"]={f:Ops.User.rambodc.DivElement_ClickFix,objName:"Ops.User.rambodc.DivElement_ClickFix"};




// **************************************************************
// 
// Ops.Boolean.ToggleBool_v2
// 
// **************************************************************

Ops.Boolean.ToggleBool_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    trigger = op.inTriggerButton("trigger"),
    reset = op.inTriggerButton("reset"),
    inDefault = op.inBool("Default", false),
    outBool = op.outBoolNum("result");

let theBool = false;

op.onLoadedValueSet = () =>
{
    outBool.set(inDefault.get());
};

trigger.onTriggered = function ()
{
    theBool = !theBool;
    outBool.set(theBool);
};

reset.onTriggered = function ()
{
    theBool = inDefault.get();
    outBool.set(theBool);
};


};

Ops.Boolean.ToggleBool_v2.prototype = new CABLES.Op();
CABLES.OPS["4313d9bb-96b6-43bc-9190-6068cfb2593c"]={f:Ops.Boolean.ToggleBool_v2,objName:"Ops.Boolean.ToggleBool_v2"};




// **************************************************************
// 
// Ops.Boolean.DelayBooleanSimple
// 
// **************************************************************

Ops.Boolean.DelayBooleanSimple = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    val = op.inFloat("Value"),
    delTrue = op.inFloat("Delay True", 1),
    delFalse = op.inFloat("Delay False", 1),
    outVal = op.outBoolNum("Out Value");

let timeout = -1;

val.onChange =
    delFalse.onChange =
    delTrue.onChange = update;

function update()
{
    clearTimeout(timeout);
    let v = val.get();

    let delay = 1;
    if (v) delay = delTrue.get() * 1000;
    else delay = delFalse.get() * 1000;

    timeout = setTimeout(function ()
    {
        outVal.set(v);
    }, delay);
}


};

Ops.Boolean.DelayBooleanSimple.prototype = new CABLES.Op();
CABLES.OPS["4516be54-9077-490f-a094-83696b9011ba"]={f:Ops.Boolean.DelayBooleanSimple,objName:"Ops.Boolean.DelayBooleanSimple"};




// **************************************************************
// 
// Ops.Gl.MainLoop
// 
// **************************************************************

Ops.Gl.MainLoop = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    fpsLimit = op.inValue("FPS Limit", 0),
    trigger = op.outTrigger("trigger"),
    width = op.outNumber("width"),
    height = op.outNumber("height"),
    reduceFocusFPS = op.inValueBool("Reduce FPS not focussed", true),
    reduceLoadingFPS = op.inValueBool("Reduce FPS loading"),
    clear = op.inValueBool("Clear", true),
    clearAlpha = op.inValueBool("ClearAlpha", true),
    fullscreen = op.inValueBool("Fullscreen Button", false),
    active = op.inValueBool("Active", true),
    hdpi = op.inValueBool("Hires Displays", false),
    inUnit = op.inSwitch("Pixel Unit", ["Display", "CSS"], "Display");

op.onAnimFrame = render;
hdpi.onChange = function ()
{
    if (hdpi.get()) op.patch.cgl.pixelDensity = window.devicePixelRatio;
    else op.patch.cgl.pixelDensity = 1;

    op.patch.cgl.updateSize();
    if (CABLES.UI) gui.setLayout();
};

active.onChange = function ()
{
    op.patch.removeOnAnimFrame(op);

    if (active.get())
    {
        op.setUiAttrib({ "extendTitle": "" });
        op.onAnimFrame = render;
        op.patch.addOnAnimFrame(op);
        op.log("adding again!");
    }
    else
    {
        op.setUiAttrib({ "extendTitle": "Inactive" });
    }
};

const cgl = op.patch.cgl;
let rframes = 0;
let rframeStart = 0;
let timeOutTest = null;
let addedListener = false;

if (!op.patch.cgl) op.uiAttr({ "error": "No webgl cgl context" });

const identTranslate = vec3.create();
vec3.set(identTranslate, 0, 0, 0);
const identTranslateView = vec3.create();
vec3.set(identTranslateView, 0, 0, -2);

fullscreen.onChange = updateFullscreenButton;
setTimeout(updateFullscreenButton, 100);
let fsElement = null;

let winhasFocus = true;
let winVisible = true;

window.addEventListener("blur", () => { winhasFocus = false; });
window.addEventListener("focus", () => { winhasFocus = true; });
document.addEventListener("visibilitychange", () => { winVisible = !document.hidden; });
testMultiMainloop();

cgl.mainloopOp = this;

inUnit.onChange = () =>
{
    width.set(0);
    height.set(0);
};

function getFpsLimit()
{
    if (reduceLoadingFPS.get() && op.patch.loading.getProgress() < 1.0) return 5;

    if (reduceFocusFPS.get())
    {
        if (!winVisible) return 10;
        if (!winhasFocus) return 30;
    }

    return fpsLimit.get();
}

function updateFullscreenButton()
{
    function onMouseEnter()
    {
        if (fsElement)fsElement.style.display = "block";
    }

    function onMouseLeave()
    {
        if (fsElement)fsElement.style.display = "none";
    }

    op.patch.cgl.canvas.addEventListener("mouseleave", onMouseLeave);
    op.patch.cgl.canvas.addEventListener("mouseenter", onMouseEnter);

    if (fullscreen.get())
    {
        if (!fsElement)
        {
            fsElement = document.createElement("div");

            const container = op.patch.cgl.canvas.parentElement;
            if (container)container.appendChild(fsElement);

            fsElement.addEventListener("mouseenter", onMouseEnter);
            fsElement.addEventListener("click", function (e)
            {
                if (CABLES.UI && !e.shiftKey) gui.cycleFullscreen();
                else cgl.fullScreen();
            });
        }

        fsElement.style.padding = "10px";
        fsElement.style.position = "absolute";
        fsElement.style.right = "5px";
        fsElement.style.top = "5px";
        fsElement.style.width = "20px";
        fsElement.style.height = "20px";
        fsElement.style.cursor = "pointer";
        fsElement.style["border-radius"] = "40px";
        fsElement.style.background = "#444";
        fsElement.style["z-index"] = "9999";
        fsElement.style.display = "none";
        fsElement.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 490 490\" style=\"width:20px;height:20px;\" xml:space=\"preserve\" width=\"512px\" height=\"512px\"><g><path d=\"M173.792,301.792L21.333,454.251v-80.917c0-5.891-4.776-10.667-10.667-10.667C4.776,362.667,0,367.442,0,373.333V480     c0,5.891,4.776,10.667,10.667,10.667h106.667c5.891,0,10.667-4.776,10.667-10.667s-4.776-10.667-10.667-10.667H36.416     l152.459-152.459c4.093-4.237,3.975-10.99-0.262-15.083C184.479,297.799,177.926,297.799,173.792,301.792z\" fill=\"#FFFFFF\"/><path d=\"M480,0H373.333c-5.891,0-10.667,4.776-10.667,10.667c0,5.891,4.776,10.667,10.667,10.667h80.917L301.792,173.792     c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262     L469.333,36.416v80.917c0,5.891,4.776,10.667,10.667,10.667s10.667-4.776,10.667-10.667V10.667C490.667,4.776,485.891,0,480,0z\" fill=\"#FFFFFF\"/><path d=\"M36.416,21.333h80.917c5.891,0,10.667-4.776,10.667-10.667C128,4.776,123.224,0,117.333,0H10.667     C4.776,0,0,4.776,0,10.667v106.667C0,123.224,4.776,128,10.667,128c5.891,0,10.667-4.776,10.667-10.667V36.416l152.459,152.459     c4.237,4.093,10.99,3.975,15.083-0.262c3.992-4.134,3.992-10.687,0-14.82L36.416,21.333z\" fill=\"#FFFFFF\"/><path d=\"M480,362.667c-5.891,0-10.667,4.776-10.667,10.667v80.917L316.875,301.792c-4.237-4.093-10.99-3.976-15.083,0.261     c-3.993,4.134-3.993,10.688,0,14.821l152.459,152.459h-80.917c-5.891,0-10.667,4.776-10.667,10.667s4.776,10.667,10.667,10.667     H480c5.891,0,10.667-4.776,10.667-10.667V373.333C490.667,367.442,485.891,362.667,480,362.667z\" fill=\"#FFFFFF\"/></g></svg>";
    }
    else
    {
        if (fsElement)
        {
            fsElement.style.display = "none";
            fsElement.remove();
            fsElement = null;
        }
    }
}

op.onDelete = function ()
{
    cgl.gl.clearColor(0, 0, 0, 0);
    cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);
};

function render(time)
{
    if (!active.get()) return;
    if (cgl.aborted || cgl.canvas.clientWidth === 0 || cgl.canvas.clientHeight === 0) return;

    op.patch.cg = cgl;

    if (hdpi.get())op.patch.cgl.pixelDensity = window.devicePixelRatio;

    const startTime = performance.now();

    op.patch.config.fpsLimit = getFpsLimit();

    if (cgl.canvasWidth == -1)
    {
        cgl.setCanvas(op.patch.config.glCanvasId);
        return;
    }

    if (cgl.canvasWidth != width.get() || cgl.canvasHeight != height.get())
    {
        let div = 1;
        if (inUnit.get() == "CSS")div = op.patch.cgl.pixelDensity;

        width.set(cgl.canvasWidth / div);
        height.set(cgl.canvasHeight / div);
    }

    if (CABLES.now() - rframeStart > 1000)
    {
        CGL.fpsReport = CGL.fpsReport || [];
        if (op.patch.loading.getProgress() >= 1.0 && rframeStart !== 0)CGL.fpsReport.push(rframes);
        rframes = 0;
        rframeStart = CABLES.now();
    }
    CGL.MESH.lastShader = null;
    CGL.MESH.lastMesh = null;

    cgl.renderStart(cgl, identTranslate, identTranslateView);

    if (clear.get())
    {
        cgl.gl.clearColor(0, 0, 0, 1);
        cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);
    }

    trigger.trigger();

    if (CGL.MESH.lastMesh)CGL.MESH.lastMesh.unBind();

    if (CGL.Texture.previewTexture)
    {
        if (!CGL.Texture.texturePreviewer) CGL.Texture.texturePreviewer = new CGL.Texture.texturePreview(cgl);
        CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture);
    }
    cgl.renderEnd(cgl);

    op.patch.cg = null;

    if (clearAlpha.get())
    {
        cgl.gl.clearColor(1, 1, 1, 1);
        cgl.gl.colorMask(false, false, false, true);
        cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT);
        cgl.gl.colorMask(true, true, true, true);
    }

    if (!cgl.frameStore.phong)cgl.frameStore.phong = {};
    rframes++;

    op.patch.cgl.profileData.profileMainloopMs = performance.now() - startTime;
}

function testMultiMainloop()
{
    clearTimeout(timeOutTest);
    timeOutTest = setTimeout(
        () =>
        {
            if (op.patch.getOpsByObjName(op.name).length > 1)
            {
                op.setUiError("multimainloop", "there should only be one mainloop op!");
                if (!addedListener)addedListener = op.patch.addEventListener("onOpDelete", testMultiMainloop);
            }
            else op.setUiError("multimainloop", null, 1);
        }, 500);
}


};

Ops.Gl.MainLoop.prototype = new CABLES.Op();
CABLES.OPS["b0472a1d-db16-4ba6-8787-f300fbdc77bb"]={f:Ops.Gl.MainLoop,objName:"Ops.Gl.MainLoop"};




// **************************************************************
// 
// Ops.Gl.ClearColor
// 
// **************************************************************

Ops.Gl.ClearColor = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    trigger = op.outTrigger("trigger"),
    r = op.inFloatSlider("r", 0.1),
    g = op.inFloatSlider("g", 0.1),
    b = op.inFloatSlider("b", 0.1),
    a = op.inFloatSlider("a", 1);

r.setUiAttribs({ "colorPick": true });

const cgl = op.patch.cgl;

render.onTriggered = function ()
{
    cgl.gl.clearColor(r.get(), g.get(), b.get(), a.get());
    cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);
    trigger.trigger();
};


};

Ops.Gl.ClearColor.prototype = new CABLES.Op();
CABLES.OPS["19b441eb-9f63-4f35-ba08-b87841517c4d"]={f:Ops.Gl.ClearColor,objName:"Ops.Gl.ClearColor"};




// **************************************************************
// 
// Ops.Vars.VarSetNumber_v2
// 
// **************************************************************

Ops.Vars.VarSetNumber_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const val = op.inValueFloat("Value", 0);
op.varName = op.inDropDown("Variable", [], "", true);

new CABLES.VarSetOpWrapper(op, "number", val, op.varName);


};

Ops.Vars.VarSetNumber_v2.prototype = new CABLES.Op();
CABLES.OPS["b5249226-6095-4828-8a1c-080654e192fa"]={f:Ops.Vars.VarSetNumber_v2,objName:"Ops.Vars.VarSetNumber_v2"};




// **************************************************************
// 
// Ops.Json.ParseObject_v2
// 
// **************************************************************

Ops.Json.ParseObject_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    str = op.inStringEditor("JSON String", "{}", "json"),
    outObj = op.outObject("Result"),
    isValid = op.outBoolNum("Valid");

str.onChange = parse;
parse();

function parse()
{
    if (!str.get())
    {
        outObj.set(null);
        isValid.set(false);
        return;
    }
    try
    {
        const obj = JSON.parse(str.get());
        outObj.setRef(obj);
        isValid.set(true);
        op.setUiError("invalidjson", null);
    }
    catch (ex)
    {
        op.logError(ex);
        isValid.set(false);

        let outStr = "";
        const parts = ex.message.split(" ");
        for (let i = 0; i < parts.length - 1; i++)
        {
            const num = parseFloat(parts[i + 1]);
            if (num && parts[i] == "position")
            {
                const outStrA = str.get().substring(num - 15, num);
                const outStrB = str.get().substring(num, num + 1);
                const outStrC = str.get().substring(num + 1, num + 15);
                outStr = "<span style=\"font-family:monospace;background-color:black;\">" + outStrA + "<span style=\"font-weight:bold;background-color:red;\">" + outStrB + "</span>" + outStrC + " </span>";
            }
        }

        op.setUiError("invalidjson", "INVALID JSON<br/>can not parse string to object:<br/><b> " + ex.message + "</b><br/>" + outStr);
    }
}


};

Ops.Json.ParseObject_v2.prototype = new CABLES.Op();
CABLES.OPS["2ce8a4d3-37d3-4cdc-abd1-a560fbe841ee"]={f:Ops.Json.ParseObject_v2,objName:"Ops.Json.ParseObject_v2"};




// **************************************************************
// 
// Ops.Json.ObjectGetObjectByPath
// 
// **************************************************************

Ops.Json.ObjectGetObjectByPath = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    objectIn = op.inObject("Object"),
    pathIn = op.inString("Path"),
    resultOut = op.outObject("Output"),
    foundOut = op.outBool("Found");

objectIn.onChange =
    pathIn.onChange = update;

pathIn.on("change", updateUi);
updateUi();
function updateUi()
{
    if (!pathIn.get())op.setUiError("nokey", "Missing Key Value");
    else op.setUiError("nokey", null);
}

function update()
{
    const data = objectIn.get();
    const path = pathIn.get();
    op.setUiError("missing", null);
    if (data && path)
    {
        if (!Array.isArray(data) && !(typeof data === "object"))
        {
            foundOut.set(false);
            op.setUiError("notiterable", "input object of type " + (typeof data) + " is not travesable by path");
        }
        else
        {
            op.setUiError("notiterable", null);
            const parts = path.split(".");
            op.setUiAttrib({ "extendTitle": parts[parts.length - 1] + "" });
            let result = resolve(path, data);
            if (result === undefined)
            {
                const errorMsg = "could not find element at path " + path;
                foundOut.set(false);
                result = null;
                op.setUiError("missing", errorMsg, 2);
            }
            else if (Array.isArray(result) || result === null || typeof result !== "object")
            {
                const errorMsg = "element at path " + path + " is not an object";
                foundOut.set(false);
                result = null;
                op.setUiError("missing", errorMsg, 2);
            }
            else
            {
                foundOut.set(true);
            }
            resultOut.setRef(result);
        }
    }
    else
    {
        foundOut.set(false);
    }
}

function resolve(path, obj = self, separator = ".")
{
    const properties = Array.isArray(path) ? path : path.split(separator);
    return properties.reduce((prev, curr) => { return prev && prev[curr]; }, obj);
}


};

Ops.Json.ObjectGetObjectByPath.prototype = new CABLES.Op();
CABLES.OPS["574513c7-472b-433c-bf99-d906d3c737cd"]={f:Ops.Json.ObjectGetObjectByPath,objName:"Ops.Json.ObjectGetObjectByPath"};




// **************************************************************
// 
// Ops.Trigger.TriggerOnce
// 
// **************************************************************

Ops.Trigger.TriggerOnce = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTriggerButton("Exec"),
    reset = op.inTriggerButton("Reset"),
    next = op.outTrigger("Next"),
    outTriggered = op.outBoolNum("Was Triggered");

let triggered = false;

op.toWorkPortsNeedToBeLinked(exe);

reset.onTriggered = function ()
{
    triggered = false;
    outTriggered.set(triggered);
};

exe.onTriggered = function ()
{
    if (triggered) return;

    triggered = true;
    next.trigger();
    outTriggered.set(triggered);
};


};

Ops.Trigger.TriggerOnce.prototype = new CABLES.Op();
CABLES.OPS["cf3544e4-e392-432b-89fd-fcfb5c974388"]={f:Ops.Trigger.TriggerOnce,objName:"Ops.Trigger.TriggerOnce"};




// **************************************************************
// 
// Ops.Vars.VarSetString_v2
// 
// **************************************************************

Ops.Vars.VarSetString_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const val=op.inString("Value","New String");
op.varName=op.inDropDown("Variable",[],"",true);

new CABLES.VarSetOpWrapper(op,"string",val,op.varName);




};

Ops.Vars.VarSetString_v2.prototype = new CABLES.Op();
CABLES.OPS["0b4d9229-8024-4a30-9cc0-f6653942c2e4"]={f:Ops.Vars.VarSetString_v2,objName:"Ops.Vars.VarSetString_v2"};




// **************************************************************
// 
// Ops.String.String_v2
// 
// **************************************************************

Ops.String.String_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    v = op.inString("value", ""),
    result = op.outString("String");

v.onChange = function ()
{
    result.set(v.get());
};


};

Ops.String.String_v2.prototype = new CABLES.Op();
CABLES.OPS["d697ff82-74fd-4f31-8f54-295bc64e713d"]={f:Ops.String.String_v2,objName:"Ops.String.String_v2"};




// **************************************************************
// 
// Ops.User.rambodc.XRPL_Library
// 
// **************************************************************

Ops.User.rambodc.XRPL_Library = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Here we inmport XRPL CDN Library once for each patch



function addScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');

    s.setAttribute('src', src);
    s.addEventListener('load', resolve);
    s.addEventListener('error', reject);

    document.body.appendChild(s);
  });
}

addScript("https://unpkg.com/xrpl/build/xrpl-latest-min.js")


};

Ops.User.rambodc.XRPL_Library.prototype = new CABLES.Op();
CABLES.OPS["d7d91b26-8822-4483-87cb-ab03775df4a5"]={f:Ops.User.rambodc.XRPL_Library,objName:"Ops.User.rambodc.XRPL_Library"};




// **************************************************************
// 
// Ops.User.rambodc.XRPL_SecretNumbers_Library
// 
// **************************************************************

Ops.User.rambodc.XRPL_SecretNumbers_Library = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};


function addScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');

    s.setAttribute('src', src);
    s.addEventListener('load', resolve);
    s.addEventListener('error', reject);

    document.body.appendChild(s);
  });
}

addScript("https://cdn.jsdelivr.net/npm/xrpl-secret-numbers/dist/browserified.js")


};

Ops.User.rambodc.XRPL_SecretNumbers_Library.prototype = new CABLES.Op();
CABLES.OPS["6917fed5-225f-47ef-bee9-39793386f809"]={f:Ops.User.rambodc.XRPL_SecretNumbers_Library,objName:"Ops.User.rambodc.XRPL_SecretNumbers_Library"};




// **************************************************************
// 
// Ops.User.rambodc.Veriff_incontext_Library
// 
// **************************************************************

Ops.User.rambodc.Veriff_incontext_Library = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};


function addScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');

    s.setAttribute('src', src);
    s.addEventListener('load', resolve);
    s.addEventListener('error', reject);

    document.body.appendChild(s);
  });
}

addScript("https://cdn.veriff.me/incontext/js/v1/veriff.js")


};

Ops.User.rambodc.Veriff_incontext_Library.prototype = new CABLES.Op();
CABLES.OPS["ea7da1f4-a432-4c33-8de6-c0b40910262a"]={f:Ops.User.rambodc.Veriff_incontext_Library,objName:"Ops.User.rambodc.Veriff_incontext_Library"};




// **************************************************************
// 
// Ops.User.rambodc.Orientation_is_Portrait
// 
// **************************************************************

Ops.User.rambodc.Orientation_is_Portrait = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inWidth = op.inValue("Width"),
    inHeight = op.inValue("Height"),
    isPortrait = op.outBool("IsPortrait");

inWidth.onChange = inHeight.onChange = updateScreenMode;

function updateScreenMode() {
    let width = inWidth.get();
    let height = inHeight.get();
    isPortrait.set(height > width);
}


};

Ops.User.rambodc.Orientation_is_Portrait.prototype = new CABLES.Op();
CABLES.OPS["43fed3b4-761c-4d1c-b64a-f8ab15c26991"]={f:Ops.User.rambodc.Orientation_is_Portrait,objName:"Ops.User.rambodc.Orientation_is_Portrait"};




// **************************************************************
// 
// Ops.User.rambodc.delay_boolean_timer
// 
// **************************************************************

Ops.User.rambodc.delay_boolean_timer = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
//inputs
const inTrigger = op.inTriggerButton("Trigger");
const inDelay = op.inFloat("Delay", 1);

//outputs
const outBoolean = op.outValueBool("Output Boolean", false);
const outTrigger = op.outTrigger("Output Trigger");

let timeoutId;

inTrigger.onTriggered = () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    outBoolean.set(true); // Set the output to true immediately

    // Schedule a function to set the output back to false after the delay
    timeoutId = setTimeout(() => {
        if(outBoolean.get() == true){
            outBoolean.set(false);
            outTrigger.trigger();  // trigger the output when true changes to false
        }
    }, inDelay.get() * 1000);
}

inDelay.onChange = () => {
    // If the delay input changes, we need to adjust our timer
    if (timeoutId) {
        clearTimeout(timeoutId); // Clear the existing timeout
        // Schedule a function to set the output back to false after the new delay
        timeoutId = setTimeout(() => {
            if(outBoolean.get() == true){
                outBoolean.set(false);
                outTrigger.trigger();  // trigger the output when true changes to false
            }
        }, inDelay.get() * 1000);
    }
}


};

Ops.User.rambodc.delay_boolean_timer.prototype = new CABLES.Op();
CABLES.OPS["12e7e974-bd91-43b9-8d08-8ff77628aae6"]={f:Ops.User.rambodc.delay_boolean_timer,objName:"Ops.User.rambodc.delay_boolean_timer"};




// **************************************************************
// 
// Ops.Deprecated.Number.NumberSwitchBoolean
// 
// **************************************************************

Ops.Deprecated.Number.NumberSwitchBoolean = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inBool = op.inValueBool("Boolean"),
    valFalse = op.inValue("Value false", 0),
    valTrue = op.inValue("Value true", 1),
    outVal = op.outNumber("Result");

inBool.onChange =
    valTrue.onChange =
    valFalse.onChange = update;

op.setPortGroup("Output Values", [valTrue, valFalse]);

function update()
{
    if (inBool.get()) outVal.set(valTrue.get());
    else outVal.set(valFalse.get());
}


};

Ops.Deprecated.Number.NumberSwitchBoolean.prototype = new CABLES.Op();
CABLES.OPS["637c5fa8-840d-4535-96ab-3d27b458a8ba"]={f:Ops.Deprecated.Number.NumberSwitchBoolean,objName:"Ops.Deprecated.Number.NumberSwitchBoolean"};




// **************************************************************
// 
// Ops.Json.ObjectGetArrayValuesByPath
// 
// **************************************************************

Ops.Json.ObjectGetArrayValuesByPath = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const objectIn = op.inObject("Object");
const pathIn = op.inString("Path");
const resultOut = op.outArray("Output");
const foundOut = op.outBool("Found");

objectIn.onChange = update;
pathIn.onChange = update;

function update()
{
    const data = objectIn.get();
    let result = [];
    const path = pathIn.get();
    op.setUiError("path", null);

    if (data && path)
    {
        if (typeof data !== "object")
        {
            foundOut.set(false);
            op.setUiError("notiterable", "input object of type " + (typeof data) + " is not travesable by path");
        }
        else if (Array.isArray(data))
        {
            foundOut.set(false);
            op.setUiError("notiterable", "input of type " + (typeof data) + " is not an object");
        }
        else
        {
            op.setUiError("notiterable", null);
            const parts = path.split(".");
            foundOut.set(false);

            // find first array in path
            let checkPath = "";
            let pathPrefix = "";
            let pathSuffix = "";
            let checkData = null;
            for (let i = 0; i < parts.length; i++)
            {
                checkPath += parts[i];
                checkData = resolve(checkPath, data);
                if (Array.isArray(checkData))
                {
                    pathPrefix = checkPath;
                    pathSuffix = parts.splice(i + 2, parts.length - (i + 2)).join(".");
                    break;
                }
                checkPath += ".";
            }
            if (checkData)
            {
                if (parts.length > 1)
                {
                    for (let i = 0; i < checkData.length; i++)
                    {
                        let resolvePath = pathPrefix + "." + i;
                        if (pathSuffix && pathSuffix !== "")
                        {
                            resolvePath += "." + pathSuffix;
                        }
                        const resolvedData = resolve(resolvePath, data);
                        if (typeof resolvedData !== "undefined")
                        {
                            foundOut.set(true);
                        }
                        result.push(resolvedData);
                    }
                }
                else
                {
                    if (Array.isArray(checkData))
                    {
                        result = checkData;
                    }
                    else
                    {
                        result = [checkData];
                    }
                    foundOut.set(true);
                }

                const titleParts = pathIn.get().split(".");
                const extendTitle = titleParts[titleParts.length - 1] + "";
                op.setUiAttrib({ "extendTitle": extendTitle });
            }
            if (foundOut.get())
            {
                resultOut.setRef(result);
            }
            else
            {
                op.setUiError("path", "given path seems to be invalid!", 1);
                resultOut.setRef([]);
            }
        }
    }
    else
    {
        foundOut.set(false);
    }
}

function resolve(path, obj = self, separator = ".")
{
    const properties = Array.isArray(path) ? path : path.split(separator);
    return properties.reduce((prev, curr) => { return prev && prev[curr]; }, obj);
}


};

Ops.Json.ObjectGetArrayValuesByPath.prototype = new CABLES.Op();
CABLES.OPS["609a645e-5e24-4a5e-a379-804c5b64f5d5"]={f:Ops.Json.ObjectGetArrayValuesByPath,objName:"Ops.Json.ObjectGetArrayValuesByPath"};




// **************************************************************
// 
// Ops.User.rambodc.Check_String_Equals_small
// 
// **************************************************************

Ops.User.rambodc.Check_String_Equals_small = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    incomingString = op.inString("Incoming String"),
    unknownResult = op.inString("Unknown Result", "0"),
    enabled1 = op.inBool("1 Enabled"),
    stringEquals1 = op.inString("1 String Equals"),
    result1 = op.inString("1 Result"),
    enabled2 = op.inBool("2 Enabled"),
    stringEquals2 = op.inString("2 String Equals"),
    result2 = op.inString("2 Result"),
    enabled3 = op.inBool("3 Enabled"),
    stringEquals3 = op.inString("3 String Equals"),
    result3 = op.inString("3 Result"),
    resultString = op.outString("Result String"),
    triggerOut = op.outTrigger("Trigger");

function checkString() {
    let inStr = incomingString.get();
    let res = unknownResult.get();
    let checks = [
        {enabled: enabled1.get(), equals: stringEquals1.get(), result: result1.get()},
        {enabled: enabled2.get(), equals: stringEquals2.get(), result: result2.get()},
        {enabled: enabled3.get(), equals: stringEquals3.get(), result: result3.get()}
    ];

    for (let check of checks) {
        if (check.enabled && inStr === check.equals) {
            res = check.result;
            break;
        }
    }

    resultString.set(res);
    triggerOut.trigger();
}

// Respond to changes
incomingString.onChange = checkString;
unknownResult.onChange = checkString;
enabled1.onChange = stringEquals1.onChange = result1.onChange = checkString;
enabled2.onChange = stringEquals2.onChange = result2.onChange = checkString;
enabled3.onChange = stringEquals3.onChange = result3.onChange = checkString;


};

Ops.User.rambodc.Check_String_Equals_small.prototype = new CABLES.Op();
CABLES.OPS["69c141c8-04b8-410e-b4e9-7b7d53974b28"]={f:Ops.User.rambodc.Check_String_Equals_small,objName:"Ops.User.rambodc.Check_String_Equals_small"};




// **************************************************************
// 
// Ops.String.NumberToString_v2
// 
// **************************************************************

Ops.String.NumberToString_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    val = op.inValue("Number"),
    result = op.outString("Result");

val.onChange = update;
update();

function update()
{
    result.set(String(val.get() || 0));
}


};

Ops.String.NumberToString_v2.prototype = new CABLES.Op();
CABLES.OPS["5c6d375a-82db-4366-8013-93f56b4061a9"]={f:Ops.String.NumberToString_v2,objName:"Ops.String.NumberToString_v2"};




// **************************************************************
// 
// Ops.Json.ObjectGetArrayByPath
// 
// **************************************************************

Ops.Json.ObjectGetArrayByPath = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    objectIn = op.inObject("Object"),
    pathIn = op.inString("Path"),
    resultOut = op.outArray("Output"),
    foundOut = op.outBool("Found");

objectIn.onChange =
    pathIn.onChange = update;

pathIn.on("change", updateUi);
updateUi();
function updateUi()
{
    if (!pathIn.get())op.setUiError("nokey", "Missing Key Value");
    else op.setUiError("nokey", null);
}

function update()
{
    const data = objectIn.get();
    const path = pathIn.get();
    op.setUiError("missing", null);
    if (data && path)
    {
        if (!Array.isArray(data) && !(typeof data === "object"))
        {
            foundOut.set(false);
            op.setUiError("notiterable", "input object of type " + (typeof data) + " is not travesable by path");
        }
        else
        {
            op.setUiError("notiterable", null);
            const parts = path.split(".");
            op.setUiAttrib({ "extendTitle": parts[parts.length - 1] + "" });
            let result = resolve(path, data);
            if (result === undefined)
            {
                const errorMsg = "could not find element at path " + path;
                foundOut.set(false);
                result = null;
                op.setUiError("missing", errorMsg, 2);
            }
            else if (!Array.isArray(result))
            {
                const errorMsg = "element at path " + path + " is not an array";
                foundOut.set(false);
                result = null;
                op.setUiError("missing", errorMsg, 2);
            }
            else
            {
                foundOut.set(true);
            }
            resultOut.setRef(result);
        }
    }
    else
    {
        foundOut.set(false);
    }
}

function resolve(path, obj = self, separator = ".")
{
    const properties = Array.isArray(path) ? path : path.split(separator);
    return properties.reduce((prev, curr) => { return prev && prev[curr]; }, obj);
}


};

Ops.Json.ObjectGetArrayByPath.prototype = new CABLES.Op();
CABLES.OPS["a9354531-a42d-4216-ad8c-364df989a9a1"]={f:Ops.Json.ObjectGetArrayByPath,objName:"Ops.Json.ObjectGetArrayByPath"};




// **************************************************************
// 
// Ops.Extension.ECharts.ECharts
// 
// **************************************************************

Ops.Extension.ECharts.ECharts = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// I/O

const createChartTrig = op.inTriggerButton("Create");
const inParent = op.inObject("Parent DOM element");
const inId = op.inString("Id");
const inWidth = op.inInt("Width", 640);
const inHeight = op.inInt("Height", 480);
const chartOpts = op.inObject("Chart Object");
const mergeOpts = op.inObject("Merge options");
const rendererSel = op.inSwitch("Renderer", ["canvas", "svg"], "canvas");
const themeSelect = op.inSwitch("Theme", ["default", "light", "dark"], "dark");
const customTheme = op.inObject("Custom theme obj");
const inInitExtraOpts = op.inObject("Init extra Options");
const inStyle = op.inValueEditor("Style", "position:absolute;\nz-index:100;\nbackground:white;", "inline-css");
const inVisible = op.inValueBool("Visible", true);

const outElement = op.outObject("DOM Element");
const outChart = op.outObject("ECharts instance");
const outChartUpdated = op.outTrigger("Chart updated");
const outThemeTrig = op.outTrigger("Theme changed");

const DEFAULT_THEME = 0;
const DARK_THEME = 1;
const CUSTOM_THEME = 2;

let loaded = false;

// Core variables
const div = document.createElement("div");
div.dataset.op = op.id;

const canvas = op.patch.cgl.canvas.parentElement;
let chart = null;
let prevDisplay = "block";

// Function binding
op.onDelete = removeElement;

inParent.onChange = appendChartDiv;
inStyle.onChange = updateStyle;
inVisible.onChange = updateVisibility;
inId.onChange = updateId;
inWidth.onChange = resize;
inHeight.onChange = resize;
chartOpts.onChange = updateChart;
mergeOpts.onChange = updateChart;
themeSelect.onChange = changeTheme;
customTheme.onChange = changeTheme;
rendererSel.onChange = changeRenderer;

// // Functions implementation

function isValidObj(obj)
{
    if (obj && typeof obj === "object" && obj !== 0 && obj !== null)
        return true;
    return false;
}

function main()
{
    appendChartDiv();
    updateStyle();

    loaded = true;
    initChart();
    resize();

    outChart.set(chart);
    outThemeTrig.trigger();
    outChartUpdated.trigger();
}

function initChart()
{
    if (!loaded) return;

    if (chart)
    {
        chart.dispose();
        chart = null;
    }

    let theme = customTheme.get();
    if (!theme)
    {
        theme = themeSelect.get();
    }

    let extra = inInitExtraOpts.get();
    if (!isValidObj(extra))
    {
        const rend = rendererSel.get();
        extra = {
            "renderer": rend
        };
    }

    chart = echarts.init(div, theme, extra);
    setChartOptions();
}

function changeRenderer()
{
    initChart();
    outChart.set(chart);
    outChartUpdated.trigger();
}

function changeTheme()
{
    initChart();
    outChart.set(chart);
    outThemeTrig.trigger();
    outChartUpdated.trigger();
}

function appendChartDiv()
{
    const p = inParent.get();
    if (!p)
    {
        canvas.append(div);
    }
    else
    {
        p.append(div);
    }
}

function setChartOptions()
{
    // https://echarts.apache.org/en/api.html#echartsInstance.setOption
    const opts = chartOpts.get();
    const merge = mergeOpts.get();

    if (!chart) return;

    if (isValidObj(opts))
    {
        if (isValidObj(merge))
        {
            chart.setOption(opts, merge);
        }
        else
        {
            chart.setOption(opts, false, true);
        }
    }
}

function updateChart()
{
    setChartOptions();
    outChartUpdated.trigger();
}

function resize()
{
    const w = Math.max(0, inWidth.get());
    const h = Math.max(0, inHeight.get());

    updateStyle();

    if (chart)
        chart.resize(w, h);
}

function setCSSVisible(visible)
{
    if (!visible)
    {
        div.style.visibility = "hidden";
        prevDisplay = div.style.display || "block";
        div.style.display = "none";
    }
    else
    {
        if (prevDisplay == "none") prevDisplay = "block";
        div.style.visibility = "visible";
        div.style.display = prevDisplay;
    }
}

function updateVisibility()
{
    setCSSVisible(inVisible.get());
}

function updateId()
{
    div.id = inId.get();
}

function updateStyle()
{
    const w = Math.max(0, inWidth.get());
    const h = Math.max(0, inHeight.get());

    let s = inStyle.get();

    if (w > 0)
    {
        s += "width:" + w + "px;";
    }
    if (h > 0)
    {
        s += "height:" + h + "px;";
    }

    if (s != div.style)
    {
        div.setAttribute("style", s);
        updateVisibility();
        outElement.set(null);
        outElement.set(div);
    }

    if (!div.parentElement)
    {
        canvas.appendChild(div);
    }
}

function removeElement()
{
    if (chart) chart.dispose();
    if (div) div.remove();
}

createChartTrig.onTriggered = main;


};

Ops.Extension.ECharts.ECharts.prototype = new CABLES.Op();
CABLES.OPS["576db162-78fc-422d-86df-0d4a4e66a44e"]={f:Ops.Extension.ECharts.ECharts,objName:"Ops.Extension.ECharts.ECharts"};




// **************************************************************
// 
// Ops.Html.CSSPropertyString
// 
// **************************************************************

Ops.Html.CSSPropertyString = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inEle = op.inObject("Element"),
    inProperty = op.inString("Property"),
    inValue = op.inString("Value"),
    outEle = op.outObject("HTML Element");

op.setPortGroup("Element", [inEle]);
op.setPortGroup("Attributes", [inProperty, inValue]);

inProperty.onChange = updateProperty;
inValue.onChange = update;
let ele = null;

inEle.onChange =
outEle.onLinkChanged =
inEle.onLinkChanged = function ()
{
    if (ele && ele.style) ele.style[inProperty.get()] = "initial";
    update();
};

function updateProperty()
{
    update();
    op.setUiAttrib({ "extendTitle": inProperty.get() + "" });
}

function update()
{
    ele = inEle.get();
    if (ele && ele.style)
    {
        const str = inValue.get();
        try
        {
            ele.style[inProperty.get()] = str;
        }
        catch (e)
        {
            op.logError(e);
        }
    }

    outEle.set(inEle.get());
}


};

Ops.Html.CSSPropertyString.prototype = new CABLES.Op();
CABLES.OPS["a7abdfb9-4c2a-4ddb-8fc6-55b3fdfbdaf3"]={f:Ops.Html.CSSPropertyString,objName:"Ops.Html.CSSPropertyString"};




// **************************************************************
// 
// Ops.Extension.ECharts.EChartsEvent
// 
// **************************************************************

Ops.Extension.ECharts.EChartsEvent = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const inChart = op.inObject("ECharts instance");
const evtName = op.inString("Event name");
const queryStr = op.inString("Query string");
const queryObj = op.inObject("Query object");
const inExecute = op.inTriggerButton("Refresh event binding");

const outChart = op.outObject("Out Chart");
const outTrigger = op.outTrigger("Trigger");
const outEvent = op.outObject("Event params");
const outDirty = op.outBool("Dirty (needs rebind)");

op.onDelete = removeEvent;
inExecute.onTriggered = main;
evtName.onChange = queryStr.onChange = queryObj.onChange = setIsDirty;
inChart.onChange = chartChanged;

let chart = null;
let eventName = null;

function chartChanged()
{
    if (!inChart.isLinked())
    {
        removeEvent();
        setIsDirty();
        return;
    }
    addEvent();
}

function setIsDirty()
{
    setDirty(true);
}

function setDirty(v)
{
    outDirty.set(null);
    outDirty.set(v);
}

function removeEvent()
{
    if (chart && eventName)
    {
        chart.off(eventName);
        chart = null;
    }
}

function addEvent()
{
    const newChart = inChart.get();
    if (!newChart)
    {
        removeEvent();
        setDirty(true);
        outChart.set(null);
        return;
    }

    if (newChart == chart)
    {
        // same reference
        // do nothing, event is already bound
        return;
    }

    chart = newChart;

    try
    {
        eventName = evtName.get();
        let q = queryObj.get();
        if (!q)
        {
            // if we don't use the query obj
            q = queryStr.get();
        }

        //  bind actual event
        chart.on(eventName, q, (e) =>
        {
            // Delete to remove circular parsing in Cables
            delete e.$vars;
            delete e.event.event;
            delete e.event.target;
            delete e.event.topTarget;

            outEvent.set(e);

            outTrigger.trigger();
        });

        // remove error message if any
        op.setUiError("error", null);
        setDirty(false);
        outChart.set(chart);
    }
    catch (error)
    {
        setDirty(true);
        chart = null;
        const errorMsg = error + " - check if input is ECharts instance";
        op.setUiError("error", errorMsg);
        outChart.set(null);
    }
}

function main()
{
    removeEvent();
    addEvent();
}


};

Ops.Extension.ECharts.EChartsEvent.prototype = new CABLES.Op();
CABLES.OPS["70116802-623a-461b-8aad-59aaa3bd9d3c"]={f:Ops.Extension.ECharts.EChartsEvent,objName:"Ops.Extension.ECharts.EChartsEvent"};




// **************************************************************
// 
// Ops.User.rambodc.Echarts_Sidebar
// 
// **************************************************************

Ops.User.rambodc.Echarts_Sidebar = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Sidebar Inputs
const parentPort = op.inObject("link");
const inId = op.inValueString("Id", "");
const inVisible = op.inBool("Visible", true);

// EChart Inputs
const createChartTrig = op.inTriggerButton("Create");
const inWidth = op.inString("Width", "640px");
const inHeight = op.inString("Height", "480px");

const chartOpts = op.inObject("Chart Object");
const mergeOpts = op.inObject("Merge options");
const rendererSel = op.inSwitch("Renderer", ["canvas", "svg"], "canvas");
const themeSelect = op.inSwitch("Theme", ["default", "light", "dark"], "dark");
const customTheme = op.inObject("Custom theme obj");
const inInitExtraOpts = op.inObject("Init extra Options");
const inStyle = op.inValueEditor("Style", "position:relative;\nz-index:100;\nbackground:white;", "inline-css");

// Outputs
const siblingsPort = op.outObject("childs");
const outChart = op.outObject("ECharts instance");
const outChartUpdated = op.outTrigger("Chart updated");
const outThemeTrig = op.outTrigger("Theme changed");

// Core variables
const el = document.createElement("div");
el.dataset.op = op.id;
el.classList.add("cablesEle");
el.classList.add("sidebar__item");
el.classList.add("sidebar__chart");

const div = document.createElement("div");
div.dataset.op = op.id;
el.appendChild(div);

let chart = null;

// Event bindings
parentPort.onChange = onParentChanged;
inId.onChange = onIdChanged;
inVisible.onChange = onVisibilityChanged;
chartOpts.onChange = updateChart;
mergeOpts.onChange = updateChart;
createChartTrig.onTriggered = main;
rendererSel.onChange = changeRenderer;
themeSelect.onChange = changeTheme;
customTheme.onChange = changeTheme;
inWidth.onChange = resize;
inHeight.onChange = resize;
inStyle.onChange = updateStyle;

// Initialize
onParentChanged();

// Functions
function onVisibilityChanged() {
    el.style.display = inVisible.get() ? "block" : "none";
}

function onIdChanged() {
    el.id = inId.get();
}

function onParentChanged() {
    siblingsPort.set(null);
    const parent = parentPort.get();
    if (parent && parent.parentElement) {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
        initChart();
        main();  // Trigger the chart to refresh
    } else {
        if (el.parentElement) {
            el.parentElement.removeChild(el);
        }
    }
}

function initChart() {
    if (chart) {
        chart.dispose();
        chart = null;
    }
    chart = echarts.init(div);
    setChartOptions();
    outChart.set(chart);
}

function setChartOptions() {
    const opts = chartOpts.get();
    const merge = mergeOpts.get();
    if (!chart) return;
    if (opts && typeof opts === "object" && opts !== null) {
        if (merge && typeof merge === "object" && merge !== null) {
            chart.setOption(opts, merge);
        } else {
            chart.setOption(opts, false, true);
        }
    }
}

function updateChart() {
    setChartOptions();
    outChartUpdated.trigger();
}

function main() {
    initChart();
    outChartUpdated.trigger();
}

function changeRenderer() {
    initChart();
    outChartUpdated.trigger();
}

function changeTheme() {
    initChart();
    outThemeTrig.trigger();
    outChartUpdated.trigger();
}

function resize() {
    let w = String(inWidth.get());
    let h = String(inHeight.get());

    if (!w.endsWith('%') && !w.endsWith('px')) {
        w = Math.max(0, parseInt(w)) + "px";
    }
    if (!h.endsWith('%') && !h.endsWith('px')) {
        h = Math.max(0, parseInt(h)) + "px";
    }

    div.style.width = w;
    div.style.height = h;

    if (chart) {
        if (w.endsWith('px') && h.endsWith('px')) {
            chart.resize({ width: parseInt(w), height: parseInt(h) });
        } else {
            chart.resize();
        }
    }
}

function updateStyle() {
    const s = inStyle.get();
    div.setAttribute("style", s);
    resize();
}

op.onDelete = function() {
    if (chart) chart.dispose();
    if (el) el.remove();
};


};

Ops.User.rambodc.Echarts_Sidebar.prototype = new CABLES.Op();
CABLES.OPS["e9c22e08-3abc-4486-aad0-d736abfff85c"]={f:Ops.User.rambodc.Echarts_Sidebar,objName:"Ops.User.rambodc.Echarts_Sidebar"};




// **************************************************************
// 
// Ops.Json.RouteObject
// 
// **************************************************************

Ops.Json.RouteObject = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    NUM_PORTS = 10,
    DEFAULT_OBJECT = {},
    indexPort = op.inInt("index"),
    objectPort = op.inObject("Object in"),
    defaultObjectPort = op.inObject("default object", DEFAULT_OBJECT),
    objectPorts = createOutPorts(DEFAULT_OBJECT);

indexPort.onChange = objectPort.onChange = defaultObjectPort.onChange = update;

setDefaultValues();
update();

function createOutPorts()
{
    let arrayObjects = [];
    for (let i = 0; i < NUM_PORTS; i++)
    {
        let port = op.outObject("Index " + i + " Object");
        arrayObjects.push(port);
    }
    defaultObjectPort.set(null);
    return arrayObjects;
}

function setDefaultValues()
{
    let defaultValue = defaultObjectPort.get();

    objectPorts.forEach((port) => { return port.set(null); });
    if (defaultObjectPort.get())
    {
        objectPorts.forEach((port) => { return port.set(defaultValue); });
    }
}

function update()
{
    setDefaultValues();
    let index = indexPort.get();
    let value = objectPort.get();

    index = Math.floor(index);
    index = clamp(index, 0, NUM_PORTS - 1);
    objectPorts[index].setRef(value);
}

function clamp(value, min, max)
{
    return Math.min(Math.max(value, min), max);
}


};

Ops.Json.RouteObject.prototype = new CABLES.Op();
CABLES.OPS["bc969951-32b5-4226-9944-80a719a65497"]={f:Ops.Json.RouteObject,objName:"Ops.Json.RouteObject"};




// **************************************************************
// 
// Ops.User.rambodc.Post1
// 
// **************************************************************

Ops.User.rambodc.Post1 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};


// ------------------------------
// FEED OPERATOR
// ------------------------------

// 1. Inputs
const postsArrayPort = op.inArray("Posts");
const parentPort = op.inObject("link"); // For Sidebar integration

// 2. Outputs
const postIDTriggerPort = op.outTrigger("Post ID Trigger");
const childrenPort = op.outObject("childs"); // For Sidebar integration
const errorOutputPort = op.outString("Error"); // Error output port
const clickedSectionOutputPort = op.outObject("Clicked Section");



// 3. Triggers
const startTrigger = op.inTriggerButton("Start");

// 4. Internal Variables
let postsElements = [];

// 5. Initialization
function init() {
    // Clear error message
    errorOutputPort.set("");

    // Clear existing posts
    postsElements.forEach(postEl => removeElementFromDOM(postEl));
    postsElements = [];

    // Validate and fetch posts
    const posts = validatePostsInput(postsArrayPort.get());
    if (!posts) return;

    // Create and display posts
    posts.forEach(post => {
        const postEl = createPostElement(post);
        postsElements.push(postEl);

        // Append to the parent element (e.g., the feed container or sidebar)
        const parent = parentPort.get();
        if (parent && parent.parentElement) {
            parent.parentElement.appendChild(postEl);
            childrenPort.set(parent); // Set the parent for the sidebar
        }
    });
}


function onParentChanged() {
    const parent = parentPort.get();
    if (parent && parent.parentElement) {
        // Append all post elements to the new parent
        postsElements.forEach(postEl => parent.parentElement.appendChild(postEl));
        childrenPort.set(parent);
    } else {
        // Remove all post elements from the DOM
        postsElements.forEach(postEl => removeElementFromDOM(postEl));
    }
}



startTrigger.onTriggered = init;

parentPort.onChange = onParentChanged;




// ------------------------------
// POST CREATION
// ------------------------------

function createPostElement(post) {
    const postEl = document.createElement("div");
    postEl.classList.add("post");

    // Top Bar
    const topBarEl = createTopBar(post);
    postEl.appendChild(topBarEl);

    // Middle Bar
    const middleBarEl = createMiddleBar(post);
    postEl.appendChild(middleBarEl);

    // Bottom Bar
    const bottomBarEl = createBottomBar(post);
    postEl.appendChild(bottomBarEl);

    return postEl;
}

// ------------------------------
// TOP BAR
// ------------------------------

function createTopBar(post) {
    const topBarEl = document.createElement("div");
    topBarEl.classList.add("post-top-bar");
    topBarEl.style.display = "flex";
    topBarEl.style.alignItems = "center";
    topBarEl.style.justifyContent = "space-between";
    topBarEl.style.margin = "5px";  // Add margin to the entire top bar
    topBarEl.style.padding = "5px"; // Add padding to the entire top bar

    // Profile Photo
    const profilePhotoEl = document.createElement("img");
    profilePhotoEl.src = post.topBar.profilePhoto;
    profilePhotoEl.alt = "Profile Photo";
    profilePhotoEl.classList.add("profile-photo");
    profilePhotoEl.style.width = "40px";
    profilePhotoEl.style.height = "40px";
    profilePhotoEl.style.objectFit = "cover";
    profilePhotoEl.style.marginRight = "10px"; // Add a margin to separate it from the name
    profilePhotoEl.style.cursor = "pointer"; // Change cursor on hover
    profilePhotoEl.addEventListener('click', () => outputClickedSection(post, "profile-photo"));
    topBarEl.appendChild(profilePhotoEl);

    // Name and Verified Container
    const nameVerifiedContainer = document.createElement("div");
    nameVerifiedContainer.style.display = "flex";
    nameVerifiedContainer.style.alignItems = "center";
    nameVerifiedContainer.style.flexGrow = "1"; // This ensures it takes up all available space, pushing the more options icon to the right

    // Name
    const nameEl = document.createElement("span");
    nameEl.textContent = post.topBar.name;
    nameEl.classList.add("profile-name");
    nameEl.style.marginRight = "10px"; // Only right margin to give space for the "Verified" text
    nameEl.style.cursor = "pointer"; // Change cursor on hover
    nameEl.addEventListener('click', () => outputClickedSection(post, "name"));
    nameVerifiedContainer.appendChild(nameEl);

    // Verified Text
    if (post.topBar.isVerified) {
        const verifiedTextEl = document.createElement("span");
        verifiedTextEl.textContent = "Verified";
        verifiedTextEl.classList.add("verified-text");
        verifiedTextEl.style.cursor = "pointer"; // Change cursor on hover
        verifiedTextEl.addEventListener('click', () => outputClickedSection(post, "verified-text"));
        nameVerifiedContainer.appendChild(verifiedTextEl);
    }

    topBarEl.appendChild(nameVerifiedContainer);

    // More Options Icon
    const moreOptionsIconEl = document.createElement("img");
    moreOptionsIconEl.src = post.topBar.moreOptionsIcon;
    moreOptionsIconEl.alt = "More Options";
    moreOptionsIconEl.classList.add("more-options-icon");
    moreOptionsIconEl.style.width = "30px";
    moreOptionsIconEl.style.height = "30px";
    moreOptionsIconEl.style.objectFit = "cover";
    moreOptionsIconEl.style.cursor = "pointer"; // Change cursor on hover
    moreOptionsIconEl.addEventListener('click', () => outputClickedSection(post, "more-options-icon"));
    topBarEl.appendChild(moreOptionsIconEl);

    return topBarEl;
}


function outputClickedSection(post, sectionName) {
    const outputObject = Object.assign({}, post); // Clone the post object
    outputObject.clickedOn = sectionName; // Add the clickedOn property
    clickedSectionOutputPort.set(outputObject); // Send the modified object to the output port
    postIDTriggerPort.trigger(); // Trigger the output
}

// ------------------------------
// MIDDLE BAR
// ------------------------------

function createMiddleBar(post) {
    const middleBarEl = document.createElement("div");
    middleBarEl.classList.add("post-middle-bar");
    middleBarEl.style.display = "flex";
    middleBarEl.style.flexDirection = "column"; // Stack content vertically
    middleBarEl.style.alignItems = "flex-start"; // Align items to the start (left) of the container
    middleBarEl.style.margin = "5px"; // Add margin to the entire middle bar
    middleBarEl.style.padding = "5px"; // Add padding to the entire middle bar

// If there's text, add a text element at the top
if (post.middleBar.text) {
    const textEl = document.createElement("p");
    textEl.textContent = post.middleBar.text;
    textEl.style.padding = "1px"; // Optional: Add padding around text
    textEl.style.textAlign = "left"; // Align the text from left to right
    textEl.style.fontSize = "15px"; // Set font size to 12
    textEl.style.lineHeight = "1.5"; // Set line spacing (1.5 is generally a good value for readability)
    middleBarEl.appendChild(textEl);
}


    // Process each media item
    post.middleBar.media.forEach(mediaItem => {
        if (mediaItem.type === "image") {
            const imgEl = document.createElement("img");
            imgEl.src = mediaItem.url;
            imgEl.alt = "Post image";
            imgEl.style.maxWidth = "100%"; // Make sure image doesn't overflow container
            imgEl.style.height = "auto"; // Maintain aspect ratio
            imgEl.style.marginTop = "10px"; // Space between images/videos
            middleBarEl.appendChild(imgEl);
        } else if (mediaItem.type === "video") {
            const videoEl = document.createElement("video");
            videoEl.controls = true;
            videoEl.style.maxWidth = "100%"; // Make sure video doesn't overflow container
            videoEl.style.height = "auto"; // Maintain aspect ratio
            videoEl.style.marginTop = "10px"; // Space between images/videos

            // Set the poster attribute if it's available in the media item
            if (mediaItem.poster) {
                videoEl.poster = mediaItem.poster; // The thumbnail image URL
            }

            const sourceEl = document.createElement("source");
            sourceEl.src = mediaItem.url;
            sourceEl.type = "video/mp4"; // Assuming MP4, but this should be dynamic based on the file
            videoEl.appendChild(sourceEl);
            middleBarEl.appendChild(videoEl);
        }
    });

    return middleBarEl;
}


// ------------------------------
// BOTTOM BAR
// ------------------------------

function createBottomBar(post) {
    const bottomBarEl = document.createElement("div");
    bottomBarEl.classList.add("post-bottom-bar");
    bottomBarEl.style.display = "flex";
    bottomBarEl.style.justifyContent = "space-between";
    bottomBarEl.style.padding = "10px";
    bottomBarEl.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)"; // Adding the white line here
    bottomBarEl.style.marginBottom = "10px"; // Adding some space below the line for visual separation


    // Likes Section
    const likesSection = document.createElement("div");
    likesSection.style.display = "flex";
    likesSection.style.alignItems = "center";

    const likeIconEl = document.createElement("img");
    likeIconEl.src = post.bottomBar.likeStatus ? post.bottomBar.likeIconTrue : post.bottomBar.likeIconFalse;
    likeIconEl.alt = "Like Icon";
    likeIconEl.style.cursor = "pointer";
    likeIconEl.style.width = "24px";
    likeIconEl.style.height = "24px";
    likeIconEl.style.marginRight = "5px";

    const likeCountEl = document.createElement("span");
    likeCountEl.textContent = post.bottomBar.likeCount;

    likeIconEl.addEventListener('click', () => {
        post.bottomBar.likeStatus = !post.bottomBar.likeStatus;
        likeIconEl.src = post.bottomBar.likeStatus ? post.bottomBar.likeIconTrue : post.bottomBar.likeIconFalse;
        post.bottomBar.likeCount += post.bottomBar.likeStatus ? 1 : -1;
        likeCountEl.textContent = post.bottomBar.likeCount;
        outputClickedSection(post, post.bottomBar.likeStatus ? "like-true" : "like-false");
    });

    likesSection.appendChild(likeIconEl);
    likesSection.appendChild(likeCountEl);

    // Comments Section
    const commentsSection = document.createElement("div");
    commentsSection.style.display = "flex";
    commentsSection.style.alignItems = "center";

    const commentIconEl = document.createElement("img");
    commentIconEl.src = post.bottomBar.commentIcon;
    commentIconEl.alt = "Comment Icon";
    commentIconEl.style.cursor = "pointer";
    commentIconEl.style.width = "24px";
    commentIconEl.style.height = "24px";
    commentIconEl.style.marginRight = "5px";

    const commentCountEl = document.createElement("span");
    commentCountEl.textContent = post.bottomBar.commentCount;

    commentIconEl.addEventListener('click', () => {
        outputClickedSection(post, "comment");
    });

    commentsSection.appendChild(commentIconEl);
    commentsSection.appendChild(commentCountEl);

    // Trade Section
    const tradeSection = document.createElement("div");
    tradeSection.style.display = "flex";
    tradeSection.style.alignItems = "center";

    const tradeIconEl = document.createElement("img");
    tradeIconEl.src = post.bottomBar.tradeIcon;
    tradeIconEl.alt = "Trade Icon";
    tradeIconEl.style.cursor = "pointer";
    tradeIconEl.style.width = "24px";
    tradeIconEl.style.height = "24px";
    tradeIconEl.style.marginRight = "5px";

    const tradeDescEl = document.createElement("span");
    tradeDescEl.textContent = post.bottomBar.tradeDesc;

    tradeIconEl.addEventListener('click', () => {
        outputClickedSection(post, "trade");
    });

    tradeSection.appendChild(tradeIconEl);
    tradeSection.appendChild(tradeDescEl);

    // Append all sections to bottom bar
    bottomBarEl.appendChild(likesSection);
    bottomBarEl.appendChild(commentsSection);
    bottomBarEl.appendChild(tradeSection);

    return bottomBarEl;
}



// ------------------------------
// ERROR HANDLING
// ------------------------------

function validatePostsInput(data) {
    if (!Array.isArray(data) || data.length === 0) {
        handleError("Invalid posts data. Expected an array with posts.");
        return null;
    }
    return data;
}

function handleError(message) {
    console.error(message);
    errorOutputPort.set(message); // Send the error message to the output port
}

// ------------------------------
// UTILITY FUNCTIONS
// ------------------------------


function removeElementFromDOM(el) {
    if (el && el.parentNode && el.parentNode.removeChild) {
        el.parentNode.removeChild(el);
    }
}

// Initialize on data change
postsArrayPort.onChange = init;

};

Ops.User.rambodc.Post1.prototype = new CABLES.Op();
CABLES.OPS["52ba276c-cf7d-4aef-8aef-2bb133ba959e"]={f:Ops.User.rambodc.Post1,objName:"Ops.User.rambodc.Post1"};




// **************************************************************
// 
// Ops.User.rambodc.button_Icon
// 
// **************************************************************

Ops.User.rambodc.button_Icon = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// inputs
const parentPort = op.inObject("link");
const iconPort = op.inString("Icon", "https://firebasestorage.googleapis.com/v0/b/cables-5b10a.appspot.com/o/assets%2FAccountsNodes.png?alt=media&token=36471c6c-5487-491f-ac31-76eddf2abd5d");
const buttonTextPort = op.inString("Text", "Button");
const rightTextPort = op.inString("Text Right", "Button");
const rightIconPort = op.inString("Icon Right","https://firebasestorage.googleapis.com/v0/b/cables-5b10a.appspot.com/o/assets%2Fright-arrow%20(1).png?alt=media&token=d86bbe34-2ced-42f6-b4e4-7f5d752ff5f1");

// outputs
const siblingsPort = op.outObject("childs");
const buttonPressedPort = op.outTrigger("Pressed Trigger");

const inVisible = op.inBool("Visible", true);

// vars
const el = document.createElement("div");
el.dataset.op = op.id;
el.style.height = "50px";
el.style.display = "flex";
el.style.justifyContent = "space-between";
el.style.alignItems = "center";
el.style.backgroundColor = "transparent";
el.style.cursor = "pointer";
el.style.padding = "5px 5px";
el.style.transition = "background-color 0.3s, border-color 0.3s";
el.style.fontSize = "16px";
el.style.color = "white";
el.style.borderTop = "1px solid rgba(255, 255, 255, 0.1)";
el.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)";

const leftContainer = document.createElement("div");
leftContainer.style.display = "flex";
leftContainer.style.alignItems = "center";
el.appendChild(leftContainer);

const leftIcon = document.createElement("img");
leftIcon.src = iconPort.get();
leftIcon.style.width = "40px";
leftIcon.style.height = "40px";
leftIcon.style.padding = "10px";

leftContainer.appendChild(leftIcon);

const input = document.createElement("div");
input.style.textAlign = "left";
input.style.fontSize = "16px";
input.style.lineHeight = "1";
input.style.fontWeight = "bold";
leftContainer.appendChild(input);
const inputText = document.createTextNode(buttonTextPort.get());
input.appendChild(inputText);

const rightContainer = document.createElement("div");
rightContainer.style.display = "flex";
rightContainer.style.alignItems = "center";
el.appendChild(rightContainer);

const rightText = document.createElement("div");
rightText.innerText = rightTextPort.get();
rightText.style.fontWeight = "bold";
rightText.style.fontSize = "16px";
rightText.style.lineHeight = "1";
rightContainer.appendChild(rightText);

const rightIcon = document.createElement("img");
rightIcon.src = rightIconPort.get();
rightIcon.style.width = "15px";
rightIcon.style.height = "15px";
rightIcon.style.padding = "10px 10px";
rightContainer.appendChild(rightIcon);

op.toWorkNeedsParent("Ops.Sidebar.Sidebar");

// Attach click event to the entire button
el.addEventListener("click", onButtonClick);
el.addEventListener("mouseenter", onButtonMouseEnter);
el.addEventListener("mouseleave", onButtonMouseLeave);

// events
parentPort.onChange = onParentChanged;
buttonTextPort.onChange = onButtonTextChanged;
iconPort.onChange = updateIcon;
rightTextPort.onChange = updateRightText;
rightIconPort.onChange = updateRightIcon;
op.onDelete = onDelete;
inVisible.onChange = updateVisibility;

function onButtonClick() {
    buttonPressedPort.trigger();
    el.style.borderColor = "rgba(255, 255, 255, 0.3)";
}

function onButtonMouseEnter() {
    el.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
    el.style.color = "rgba(255, 255, 255, 0.9)";
    el.style.borderTop = "1px solid rgba(255, 255, 255, 0.1)";
    el.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)";
}

function onButtonMouseLeave() {
    el.style.backgroundColor = "transparent";
    el.style.color = "rgba(255, 255, 255, 0.9)";
    el.style.borderTop = "1px solid rgba(255, 255, 255, 0.1)";
    el.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)";
}

function onButtonTextChanged() {
    input.textContent = buttonTextPort.get();
    if (CABLES.UI) {
        op.setTitle("Button: " + buttonTextPort.get());
    }
}

function onParentChanged() {
    siblingsPort.set(null);
    const parent = parentPort.get();
    if (parent && parent.parentElement) {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    } else { // detach
        if (el.parentElement) {
            el.parentElement.removeChild(el);
        }
    }
}

function updateIcon() {
    leftIcon.src = iconPort.get();
}

function updateRightText() {
    rightText.innerText = rightTextPort.get();
}

function updateRightIcon() {
    rightIcon.src = rightIconPort.get();
}

function updateVisibility() {
    el.style.display = inVisible.get() ? "flex" : "none";
}

function onDelete() {
    removeElementFromDOM(el);
}

function removeElementFromDOM(el) {
    if (el && el.parentNode && el.parentNode.removeChild) {
        el.parentNode.removeChild(el);
    }
}


};

Ops.User.rambodc.button_Icon.prototype = new CABLES.Op();
CABLES.OPS["e2e2f70c-0496-455c-8868-675cf1fe9f51"]={f:Ops.User.rambodc.button_Icon,objName:"Ops.User.rambodc.button_Icon"};




// **************************************************************
// 
// Ops.User.rambodc.Background1
// 
// **************************************************************

Ops.User.rambodc.Background1 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Inputs
const parentPort = op.inObject("Link"), // For Sidebar integration
      imageURLPort = op.inString("Image URL", ""),
      imageHeightPort = op.inValue("Height", 100),
      imagePositionPort = op.inSwitch("Position", ["Left", "Center", "Right"], "Center"),
      cornerRadiusPort = op.inValue("Corner", 10), // New input for corner radius
      inVisible = op.inBool("Visible", true);

// Outputs
const siblingsPort = op.outObject("Children"); // For Sidebar integration

// Internal state
let imageContainer, innerContainer;

// Create the image container and element
function createImageContainer() {
    // Remove the existing image container if it exists
    if (imageContainer && imageContainer.parentNode) {
        imageContainer.parentNode.removeChild(imageContainer);
    }

    // Create a new image container
    imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    imageContainer.style.display = "flex";
    imageContainer.style.justifyContent = "center";
    imageContainer.style.alignItems = "center"; // Center vertically
    imageContainer.style.height = imageHeightPort.get() + "px";
    imageContainer.style.overflow = "hidden"; // Prevent overflow
    imageContainer.style.margin = "10px";

    // Create an inner container for the image
    innerContainer = document.createElement("div");
    innerContainer.style.height = "100%";
    innerContainer.style.display = "flex";
    innerContainer.style.padding = "0px";
    innerContainer.style.justifyContent = imagePositionPort.get().toLowerCase(); // Align based on position
    innerContainer.style.borderRadius = cornerRadiusPort.get() + "px"; // Set border radius for rounded corners

    // Create the image element
    const imageElement = document.createElement("img");
    imageElement.src = imageURLPort.get();
    imageElement.alt = "Sidebar Image";
    imageElement.style.maxHeight = "100%";
    imageElement.style.objectFit = "contain"; // Maintain aspect ratio
    imageElement.style.borderRadius = cornerRadiusPort.get() + "px"; // Apply border radius to image

    // Append the image to the inner container
    innerContainer.appendChild(imageElement);

    // Append the inner container to the image container
    imageContainer.appendChild(innerContainer);

    // Append container to the parent
    const parent = parentPort.get();
    if (parent && parent.parentElement) {
        parent.parentElement.appendChild(imageContainer);
        siblingsPort.set(parent); // Update children for sidebar integration
    }
}

// Initialize and update image container on changes
function init() {
    createImageContainer();
    updateVisibility();
}

imageURLPort.onChange = init;
imageHeightPort.onChange = init;
imagePositionPort.onChange = init;
cornerRadiusPort.onChange = init; // Update for corner radius changes
inVisible.onChange = updateVisibility;

// Update visibility based on the inVisible input
function updateVisibility() {
    imageContainer.style.display = inVisible.get() ? "block" : "none";
}

// Handle parent port changes
parentPort.onChange = () => {
    const parent = parentPort.get();
    if (parent && parent.parentElement) {
        parent.parentElement.appendChild(imageContainer);
        siblingsPort.set(parent);
    } else if (imageContainer && imageContainer.parentNode) {
        imageContainer.parentNode.removeChild(imageContainer);
    }
};

// Cleanup on operator deletion
op.onDelete = () => {
    if (imageContainer && imageContainer.parentNode) {
        imageContainer.parentNode.removeChild(imageContainer);
    }
};

// Call init to set up the operator
init();


};

Ops.User.rambodc.Background1.prototype = new CABLES.Op();
CABLES.OPS["1318b706-8239-4bc2-ab81-4ae1cedf09f3"]={f:Ops.User.rambodc.Background1,objName:"Ops.User.rambodc.Background1"};




// **************************************************************
// 
// Ops.Sidebar.Sidebar
// 
// **************************************************************

Ops.Sidebar.Sidebar = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"style_css":" /*\n * SIDEBAR\n  http://danielstern.ca/range.css/#/\n  https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-progress-value\n */\n\n.sidebar-icon-undo\n{\n    width:10px;\n    height:10px;\n    background-image: url(\"data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='grey' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7v6h6'/%3E%3Cpath d='M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13'/%3E%3C/svg%3E\");\n    background-size: 19px;\n    background-repeat: no-repeat;\n    top: -19px;\n    margin-top: -7px;\n}\n\n.icon-chevron-down {\n    top: 2px;\n    right: 9px;\n}\n\n.iconsidebar-chevron-up,.sidebar__close-button {\n\tbackground-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAiPjxwb2x5bGluZSBwb2ludHM9IjE4IDE1IDEyIDkgNiAxNSI+PC9wb2x5bGluZT48L3N2Zz4=);\n}\n\n.iconsidebar-minimizebutton {\n    background-position: 98% center;\n    background-repeat: no-repeat;\n}\n\n.sidebar-cables-right\n{\n    right: 15px;\n    left: initial !important;\n}\n\n.sidebar-cables *\n{\n    color: #BBBBBB !important;\n    font-family: Arial;\n}\n\n.sidebar-cables {\n    --sidebar-color: #07f78c;\n    --sidebar-width: 220px;\n    --sidebar-border-radius: 10px;\n    --sidebar-monospace-font-stack: \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n    --sidebar-hover-transition-time: .2s;\n\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    border-radius: var(--sidebar-border-radius);\n    z-index: 100000;\n    width: var(--sidebar-width);\n    max-height: 100%;\n    box-sizing: border-box;\n    overflow-y: auto;\n    overflow-x: hidden;\n    font-size: 13px;\n    line-height: 1em; /* prevent emojis from breaking height of the title */\n}\n\n.sidebar-cables::selection {\n    background-color: var(--sidebar-color);\n    color: #EEEEEE;\n}\n\n.sidebar-cables::-webkit-scrollbar {\n    background-color: transparent;\n    --cables-scrollbar-width: 8px;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables::-webkit-scrollbar-track {\n    background-color: transparent;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables::-webkit-scrollbar-thumb {\n    background-color: #333333;\n    border-radius: 4px;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables--closed {\n    width: auto;\n}\n\n.sidebar__close-button {\n    background-color: #222;\n    /*-webkit-user-select: none;  */\n    /*-moz-user-select: none;     */\n    /*-ms-user-select: none;      */\n    /*user-select: none;          */\n    /*transition: background-color var(--sidebar-hover-transition-time);*/\n    /*color: #CCCCCC;*/\n    height: 2px;\n    /*border-bottom:20px solid #222;*/\n\n    /*box-sizing: border-box;*/\n    /*padding-top: 2px;*/\n    /*text-align: center;*/\n    /*cursor: pointer;*/\n    /*border-radius: 0 0 var(--sidebar-border-radius) var(--sidebar-border-radius);*/\n    /*opacity: 1.0;*/\n    /*transition: opacity 0.3s;*/\n    /*overflow: hidden;*/\n}\n\n.sidebar__close-button-icon {\n    display: inline-block;\n    /*opacity: 0;*/\n    width: 20px;\n    height: 20px;\n    /*position: relative;*/\n    /*top: -1px;*/\n\n\n}\n\n.sidebar--closed {\n    width: auto;\n    margin-right: 20px;\n}\n\n.sidebar--closed .sidebar__close-button {\n    margin-top: 8px;\n    margin-left: 8px;\n    padding:10px;\n\n    height: 25px;\n    width:25px;\n    border-radius: 50%;\n    cursor: pointer;\n    opacity: 0.3;\n    background-repeat: no-repeat;\n    background-position: center center;\n    transform:rotate(180deg);\n}\n\n.sidebar--closed .sidebar__group\n{\n    display:none;\n\n}\n.sidebar--closed .sidebar__close-button-icon {\n    background-position: 0px 0px;\n}\n\n.sidebar__close-button:hover {\n    background-color: #111111;\n    opacity: 1.0 !important;\n}\n\n/*\n * SIDEBAR ITEMS\n */\n\n.sidebar__items {\n    /* max-height: 1000px; */\n    /* transition: max-height 0.5;*/\n    background-color: #222;\n    padding-bottom: 20px;\n}\n\n.sidebar--closed .sidebar__items {\n    /* max-height: 0; */\n    height: 0;\n    display: none;\n    pointer-interactions: none;\n}\n\n.sidebar__item__right {\n    float: right;\n}\n\n/*\n * SIDEBAR GROUP\n */\n\n.sidebar__group {\n    /*background-color: #1A1A1A;*/\n    overflow: hidden;\n    box-sizing: border-box;\n    animate: height;\n    /*background-color: #151515;*/\n    /* max-height: 1000px; */\n    /* transition: max-height 0.5s; */\n--sidebar-group-header-height: 33px;\n}\n\n.sidebar__group-items\n{\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\n.sidebar__group--closed {\n    /* max-height: 13px; */\n    height: var(--sidebar-group-header-height);\n}\n\n.sidebar__group-header {\n    box-sizing: border-box;\n    color: #EEEEEE;\n    background-color: #151515;\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n\n    /*height: 100%;//var(--sidebar-group-header-height);*/\n\n    padding-top: 7px;\n    text-transform: uppercase;\n    letter-spacing: 0.08em;\n    cursor: pointer;\n    /*transition: background-color var(--sidebar-hover-transition-time);*/\n    position: relative;\n}\n\n.sidebar__group-header:hover {\n  background-color: #111111;\n}\n\n.sidebar__group-header-title {\n  /*float: left;*/\n  overflow: hidden;\n  padding: 0 15px;\n  padding-top:5px;\n  padding-bottom:10px;\n  font-weight:bold;\n}\n\n.sidebar__group-header-undo {\n    float: right;\n    overflow: hidden;\n    padding-right: 15px;\n    padding-top:5px;\n    font-weight:bold;\n  }\n\n.sidebar__group-header-icon {\n    width: 17px;\n    height: 14px;\n    background-repeat: no-repeat;\n    display: inline-block;\n    position: absolute;\n    background-size: cover;\n\n    /* icon open */\n    /* feather icon: chevron up */\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAiPjxwb2x5bGluZSBwb2ludHM9IjE4IDE1IDEyIDkgNiAxNSI+PC9wb2x5bGluZT48L3N2Zz4=);\n    top: 4px;\n    right: 5px;\n    opacity: 0.0;\n    transition: opacity 0.3;\n}\n\n.sidebar__group-header:hover .sidebar__group-header-icon {\n    opacity: 1.0;\n}\n\n/* icon closed */\n.sidebar__group--closed .sidebar__group-header-icon {\n    /* feather icon: chevron down */\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+);\n    top: 4px;\n    right: 5px;\n}\n\n/*\n * SIDEBAR ITEM\n */\n\n.sidebar__item\n{\n    box-sizing: border-box;\n    padding: 7px;\n    padding-left:15px;\n    padding-right:15px;\n\n    overflow: hidden;\n    position: relative;\n}\n\n.sidebar__item-label {\n    display: inline-block;\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    width: calc(50% - 7px);\n    margin-right: 7px;\n    margin-top: 2px;\n    text-overflow: ellipsis;\n    /* overflow: hidden; */\n}\n\n.sidebar__item-value-label {\n    font-family: var(--sidebar-monospace-font-stack);\n    display: inline-block;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 60%;\n}\n\n.sidebar__item-value-label::selection {\n    background-color: var(--sidebar-color);\n    color: #EEEEEE;\n}\n\n.sidebar__item + .sidebar__item,\n.sidebar__item + .sidebar__group,\n.sidebar__group + .sidebar__item,\n.sidebar__group + .sidebar__group {\n    /*border-top: 1px solid #272727;*/\n}\n\n/*\n * SIDEBAR ITEM TOGGLE\n */\n\n/*.sidebar__toggle */\n.icon_toggle{\n    cursor: pointer;\n}\n\n.sidebar__toggle-input {\n    --sidebar-toggle-input-color: #CCCCCC;\n    --sidebar-toggle-input-color-hover: #EEEEEE;\n    --sidebar-toggle-input-border-size: 2px;\n    display: inline;\n    float: right;\n    box-sizing: border-box;\n    border-radius: 50%;\n    cursor: pointer;\n    --toggle-size: 11px;\n    margin-top: 2px;\n    background-color: transparent !important;\n    border: var(--sidebar-toggle-input-border-size) solid var(--sidebar-toggle-input-color);\n    width: var(--toggle-size);\n    height: var(--toggle-size);\n    transition: background-color var(--sidebar-hover-transition-time);\n    transition: border-color var(--sidebar-hover-transition-time);\n}\n.sidebar__toggle:hover .sidebar__toggle-input {\n    border-color: var(--sidebar-toggle-input-color-hover);\n}\n\n.sidebar__toggle .sidebar__item-value-label {\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    max-width: calc(50% - 12px);\n}\n.sidebar__toggle-input::after { clear: both; }\n\n.sidebar__toggle--active .icon_toggle\n{\n\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE1cHgiIHdpZHRoPSIzMHB4IiBmaWxsPSIjMDZmNzhiIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzA2Zjc4YiIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCBjMTIuNjUsMCwyMy0xMC4zNSwyMy0yM2wwLDBjMC0xMi42NS0xMC4zNS0yMy0yMy0yM0gzMHogTTcwLDY3Yy05LjM4OSwwLTE3LTcuNjEtMTctMTdzNy42MTEtMTcsMTctMTdzMTcsNy42MSwxNywxNyAgICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PC9nPjwvZz48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMweiBNNzAsNjdjLTkuMzg5LDAtMTctNy42MS0xNy0xN3M3LjYxMS0xNywxNy0xN3MxNyw3LjYxLDE3LDE3ICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48cGF0aCBmaWxsPSIjMDZmNzhiIiBzdHJva2U9IiMwNmY3OGIiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNyw1MGMwLDEyLjY1LDEwLjM1LDIzLDIzLDIzaDQwICAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMwQzE3LjM1LDI3LDcsMzcuMzUsNyw1MEw3LDUweiI+PC9wYXRoPjwvZz48Y2lyY2xlIGRpc3BsYXk9ImlubGluZSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwNmY3OGIiIHN0cm9rZT0iIzA2Zjc4YiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN4PSI3MCIgY3k9IjUwIiByPSIxNyI+PC9jaXJjbGU+PC9nPjxnIGRpc3BsYXk9Im5vbmUiPjxwYXRoIGRpc3BsYXk9ImlubGluZSIgZD0iTTcwLDI1SDMwQzE2LjIxNSwyNSw1LDM2LjIxNSw1LDUwczExLjIxNSwyNSwyNSwyNWg0MGMxMy43ODUsMCwyNS0xMS4yMTUsMjUtMjVTODMuNzg1LDI1LDcwLDI1eiBNNzAsNzEgICBIMzBDMTguNDIxLDcxLDksNjEuNTc5LDksNTBzOS40MjEtMjEsMjEtMjFoNDBjMTEuNTc5LDAsMjEsOS40MjEsMjEsMjFTODEuNTc5LDcxLDcwLDcxeiBNNzAsMzFjLTEwLjQ3NywwLTE5LDguNTIzLTE5LDE5ICAgczguNTIzLDE5LDE5LDE5czE5LTguNTIzLDE5LTE5UzgwLjQ3NywzMSw3MCwzMXogTTcwLDY1Yy04LjI3MSwwLTE1LTYuNzI5LTE1LTE1czYuNzI5LTE1LDE1LTE1czE1LDYuNzI5LDE1LDE1Uzc4LjI3MSw2NSw3MCw2NXoiPjwvcGF0aD48L2c+PC9zdmc+);\n    opacity: 1;\n    transform: rotate(0deg);\n}\n\n\n.icon_toggle\n{\n    float: right;\n    width:40px;\n    height:18px;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE1cHgiIHdpZHRoPSIzMHB4IiBmaWxsPSIjYWFhYWFhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2FhYWFhYSIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCBjMTIuNjUsMCwyMy0xMC4zNSwyMy0yM2wwLDBjMC0xMi42NS0xMC4zNS0yMy0yMy0yM0gzMHogTTcwLDY3Yy05LjM4OSwwLTE3LTcuNjEtMTctMTdzNy42MTEtMTcsMTctMTdzMTcsNy42MSwxNywxNyAgICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PC9nPjwvZz48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMweiBNNzAsNjdjLTkuMzg5LDAtMTctNy42MS0xNy0xN3M3LjYxMS0xNywxNy0xN3MxNyw3LjYxLDE3LDE3ICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48cGF0aCBmaWxsPSIjYWFhYWFhIiBzdHJva2U9IiNhYWFhYWEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNyw1MGMwLDEyLjY1LDEwLjM1LDIzLDIzLDIzaDQwICAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMwQzE3LjM1LDI3LDcsMzcuMzUsNyw1MEw3LDUweiI+PC9wYXRoPjwvZz48Y2lyY2xlIGRpc3BsYXk9ImlubGluZSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNhYWFhYWEiIHN0cm9rZT0iI2FhYWFhYSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN4PSI3MCIgY3k9IjUwIiByPSIxNyI+PC9jaXJjbGU+PC9nPjxnIGRpc3BsYXk9Im5vbmUiPjxwYXRoIGRpc3BsYXk9ImlubGluZSIgZD0iTTcwLDI1SDMwQzE2LjIxNSwyNSw1LDM2LjIxNSw1LDUwczExLjIxNSwyNSwyNSwyNWg0MGMxMy43ODUsMCwyNS0xMS4yMTUsMjUtMjVTODMuNzg1LDI1LDcwLDI1eiBNNzAsNzEgICBIMzBDMTguNDIxLDcxLDksNjEuNTc5LDksNTBzOS40MjEtMjEsMjEtMjFoNDBjMTEuNTc5LDAsMjEsOS40MjEsMjEsMjFTODEuNTc5LDcxLDcwLDcxeiBNNzAsMzFjLTEwLjQ3NywwLTE5LDguNTIzLTE5LDE5ICAgczguNTIzLDE5LDE5LDE5czE5LTguNTIzLDE5LTE5UzgwLjQ3NywzMSw3MCwzMXogTTcwLDY1Yy04LjI3MSwwLTE1LTYuNzI5LTE1LTE1czYuNzI5LTE1LDE1LTE1czE1LDYuNzI5LDE1LDE1Uzc4LjI3MSw2NSw3MCw2NXoiPjwvcGF0aD48L2c+PC9zdmc+);\n    background-size: 50px 37px;\n    background-position: -6px -10px;\n    transform: rotate(180deg);\n    opacity: 0.4;\n}\n\n\n\n/*.sidebar__toggle--active .sidebar__toggle-input {*/\n/*    transition: background-color var(--sidebar-hover-transition-time);*/\n/*    background-color: var(--sidebar-toggle-input-color);*/\n/*}*/\n/*.sidebar__toggle--active .sidebar__toggle-input:hover*/\n/*{*/\n/*    background-color: var(--sidebar-toggle-input-color-hover);*/\n/*    border-color: var(--sidebar-toggle-input-color-hover);*/\n/*    transition: background-color var(--sidebar-hover-transition-time);*/\n/*    transition: border-color var(--sidebar-hover-transition-time);*/\n/*}*/\n\n/*\n * SIDEBAR ITEM BUTTON\n */\n\n.sidebar__button {}\n\n.sidebar__button-input:active\n{\n    background-color: #555 !important;\n}\n\n.sidebar__button-input {\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    min-height: 24px;\n    background-color: transparent;\n    color: #CCCCCC;\n    box-sizing: border-box;\n    padding-top: 3px;\n    text-align: center;\n    border-radius: 125px;\n    border:2px solid #555;\n    cursor: pointer;\n    padding-bottom: 3px;\n}\n\n.sidebar__button-input.plus, .sidebar__button-input.minus {\n    display: inline-block;\n    min-width: 20px;\n}\n\n.sidebar__button-input:hover {\n  background-color: #333;\n  border:2px solid var(--sidebar-color);\n}\n\n/*\n * VALUE DISPLAY (shows a value)\n */\n\n.sidebar__value-display {}\n\n/*\n * SLIDER\n */\n\n.sidebar__slider {\n    --sidebar-slider-input-height: 3px;\n}\n\n.sidebar__slider-input-wrapper {\n    width: 100%;\n\n    margin-top: 8px;\n    position: relative;\n}\n\n.sidebar__slider-input {\n    -webkit-appearance: none;\n    appearance: none;\n    margin: 0;\n    width: 100%;\n    height: var(--sidebar-slider-input-height);\n    background: #555;\n    cursor: pointer;\n    outline: 0;\n\n    -webkit-transition: .2s;\n    transition: background-color .2s;\n    border: none;\n}\n\n.sidebar__slider-input:focus, .sidebar__slider-input:hover {\n    border: none;\n}\n\n.sidebar__slider-input-active-track {\n    user-select: none;\n    position: absolute;\n    z-index: 11;\n    top: 0;\n    left: 0;\n    background-color: var(--sidebar-color);\n    pointer-events: none;\n    height: var(--sidebar-slider-input-height);\n    max-width: 100%;\n}\n\n/* Mouse-over effects */\n.sidebar__slider-input:hover {\n    /*background-color: #444444;*/\n}\n\n/*.sidebar__slider-input::-webkit-progress-value {*/\n/*    background-color: green;*/\n/*    color:green;*/\n\n/*    }*/\n\n/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */\n\n.sidebar__slider-input::-moz-range-thumb\n{\n    position: absolute;\n    height: 15px;\n    width: 15px;\n    z-index: 900 !important;\n    border-radius: 20px !important;\n    cursor: pointer;\n    background: var(--sidebar-color) !important;\n    user-select: none;\n\n}\n\n.sidebar__slider-input::-webkit-slider-thumb\n{\n    position: relative;\n    appearance: none;\n    -webkit-appearance: none;\n    user-select: none;\n    height: 15px;\n    width: 15px;\n    display: block;\n    z-index: 900 !important;\n    border: 0;\n    border-radius: 20px !important;\n    cursor: pointer;\n    background: #777 !important;\n}\n\n.sidebar__slider-input:hover ::-webkit-slider-thumb {\n    background-color: #EEEEEE !important;\n}\n\n/*.sidebar__slider-input::-moz-range-thumb {*/\n\n/*    width: 0 !important;*/\n/*    height: var(--sidebar-slider-input-height);*/\n/*    background: #EEEEEE;*/\n/*    cursor: pointer;*/\n/*    border-radius: 0 !important;*/\n/*    border: none;*/\n/*    outline: 0;*/\n/*    z-index: 100 !important;*/\n/*}*/\n\n.sidebar__slider-input::-moz-range-track {\n    background-color: transparent;\n    z-index: 11;\n}\n\n/*.sidebar__slider-input::-moz-range-thumb:hover {*/\n  /* background-color: #EEEEEE; */\n/*}*/\n\n\n/*.sidebar__slider-input-wrapper:hover .sidebar__slider-input-active-track {*/\n/*    background-color: #EEEEEE;*/\n/*}*/\n\n/*.sidebar__slider-input-wrapper:hover .sidebar__slider-input::-moz-range-thumb {*/\n/*    background-color: #fff !important;*/\n/*}*/\n\n/*.sidebar__slider-input-wrapper:hover .sidebar__slider-input::-webkit-slider-thumb {*/\n/*    background-color: #EEEEEE;*/\n/*}*/\n\n.sidebar__slider input[type=text],\n.sidebar__slider input[type=paddword]\n{\n    box-sizing: border-box;\n    /*background-color: #333333;*/\n    text-align: right;\n    color: #BBBBBB;\n    display: inline-block;\n    background-color: transparent !important;\n\n    width: 40%;\n    height: 18px;\n    outline: none;\n    border: none;\n    border-radius: 0;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n}\n\n.sidebar__slider input[type=text]:active,\n.sidebar__slider input[type=text]:focus,\n.sidebar__slider input[type=text]:hover\n.sidebar__slider input[type=password]:active,\n.sidebar__slider input[type=password]:focus,\n.sidebar__slider input[type=password]:hover\n{\n\n    color: #EEEEEE;\n}\n\n/*\n * TEXT / DESCRIPTION\n */\n\n.sidebar__text .sidebar__item-label {\n    width: auto;\n    display: block;\n    max-height: none;\n    margin-right: 0;\n    line-height: 1.1em;\n}\n\n/*\n * SIDEBAR INPUT\n */\n.sidebar__text-input textarea,\n.sidebar__text-input input[type=text],\n.sidebar__text-input input[type=password] {\n    box-sizing: border-box;\n    background-color: #333333;\n    color: #BBBBBB;\n    display: inline-block;\n    width: 50%;\n    height: 18px;\n    outline: none;\n    border: none;\n    border-radius: 0;\n    border:1px solid #666;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n}\n\n.sidebar__text-input textarea:focus::placeholder {\n  color: transparent;\n}\n\n.sidebar__color-picker .sidebar__item-label\n{\n    width:45%;\n}\n\n.sidebar__text-input textarea,\n.sidebar__text-input input[type=text]:active,\n.sidebar__text-input input[type=text]:focus,\n.sidebar__text-input input[type=text]:hover,\n.sidebar__text-input input[type=password]:active,\n.sidebar__text-input input[type=password]:focus,\n.sidebar__text-input input[type=password]:hover {\n    background-color: transparent;\n    color: #EEEEEE;\n}\n\n.sidebar__text-input textarea\n{\n    margin-top:10px;\n    height:60px;\n    width:100%;\n}\n\n/*\n * SIDEBAR SELECT\n */\n\n\n\n .sidebar__select {}\n .sidebar__select-select {\n    color: #BBBBBB;\n    /*-webkit-appearance: none;*/\n    /*-moz-appearance: none;*/\n    appearance: none;\n    /*box-sizing: border-box;*/\n    width: 50%;\n    /*height: 20px;*/\n    background-color: #333333;\n    /*background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+);*/\n    background-repeat: no-repeat;\n    background-position: right center;\n    background-size: 16px 16px;\n    margin: 0;\n    /*padding: 0 2 2 6px;*/\n    border-radius: 5px;\n    border: 1px solid #777;\n    background-color: #444;\n    cursor: pointer;\n    outline: none;\n    padding-left: 5px;\n\n }\n\n.sidebar__select-select:hover,\n.sidebar__select-select:active,\n.sidebar__select-select:inactive {\n    background-color: #444444;\n    color: #EEEEEE;\n}\n\n/*.sidebar__select-select option*/\n/*{*/\n/*    background-color: #444444;*/\n/*    color: #bbb;*/\n/*}*/\n\n.sidebar__select-select option:checked\n{\n    background-color: #000;\n    color: #FFF;\n}\n\n\n/*\n * COLOR PICKER\n */\n\n\n .sidebar__color-picker input[type=text] {\n    box-sizing: border-box;\n    background-color: #333333;\n    color: #BBBBBB;\n    display: inline-block;\n    width: calc(50% - 21px); /* 50% minus space of picker circle */\n    height: 18px;\n    outline: none;\n    border: none;\n    border-radius: 0;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n    margin-right: 7px;\n}\n\n.sidebar__color-picker input[type=text]:active,\n.sidebar__color-picker input[type=text]:focus,\n.sidebar__color-picker input[type=text]:hover {\n    background-color: #444444;\n    color: #EEEEEE;\n}\n\ndiv.sidebar__color-picker-color-input,\n.sidebar__color-picker input[type=color],\n.sidebar__palette-picker input[type=color] {\n    display: inline-block;\n    border-radius: 100%;\n    height: 14px;\n    width: 14px;\n\n    padding: 0;\n    border: none;\n    /*border:2px solid red;*/\n    border-color: transparent;\n    outline: none;\n    background: none;\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    cursor: pointer;\n    position: relative;\n    top: 3px;\n}\n.sidebar__color-picker input[type=color]:focus,\n.sidebar__palette-picker input[type=color]:focus {\n    outline: none;\n}\n.sidebar__color-picker input[type=color]::-moz-color-swatch,\n.sidebar__palette-picker input[type=color]::-moz-color-swatch {\n    border: none;\n}\n.sidebar__color-picker input[type=color]::-webkit-color-swatch-wrapper,\n.sidebar__palette-picker input[type=color]::-webkit-color-swatch-wrapper {\n    padding: 0;\n}\n.sidebar__color-picker input[type=color]::-webkit-color-swatch,\n.sidebar__palette-picker input[type=color]::-webkit-color-swatch {\n    border: none;\n    border-radius: 100%;\n}\n\n/*\n * Palette Picker\n */\n.sidebar__palette-picker .sidebar__palette-picker-color-input.first {\n    margin-left: 0;\n}\n.sidebar__palette-picker .sidebar__palette-picker-color-input.last {\n    margin-right: 0;\n}\n.sidebar__palette-picker .sidebar__palette-picker-color-input {\n    margin: 0 4px;\n}\n\n.sidebar__palette-picker .circlebutton {\n    width: 14px;\n    height: 14px;\n    border-radius: 1em;\n    display: inline-block;\n    top: 3px;\n    position: relative;\n}\n\n/*\n * Preset\n */\n.sidebar__item-presets-preset\n{\n    padding:4px;\n    cursor:pointer;\n    padding-left:8px;\n    padding-right:8px;\n    margin-right:4px;\n    background-color:#444;\n}\n\n.sidebar__item-presets-preset:hover\n{\n    background-color:#666;\n}\n\n.sidebar__greyout\n{\n    background: #222;\n    opacity: 0.8;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 1000;\n    right: 0;\n    top: 0;\n}\n\n.sidebar_tabs\n{\n    background-color: #151515;\n    padding-bottom: 0px;\n}\n\n.sidebar_switchs\n{\n    float: right;\n}\n\n.sidebar_tab\n{\n    float:left;\n    background-color: #151515;\n    border-bottom:1px solid transparent;\n    padding-right:7px;\n    padding-left:7px;\n    padding-bottom: 5px;\n    padding-top: 5px;\n    cursor:pointer;\n}\n\n.sidebar_tab_active\n{\n    background-color: #272727;\n    color:white;\n}\n\n.sidebar_tab:hover\n{\n    border-bottom:1px solid #777;\n    color:white;\n}\n\n\n.sidebar_switch\n{\n    float:left;\n    background-color: #444;\n    padding-right:7px;\n    padding-left:7px;\n    padding-bottom: 5px;\n    padding-top: 5px;\n    cursor:pointer;\n}\n\n.sidebar_switch:last-child\n{\n    border-top-right-radius: 7px;\n    border-bottom-right-radius: 7px;\n}\n\n.sidebar_switch:first-child\n{\n    border-top-left-radius: 7px;\n    border-bottom-left-radius: 7px;\n}\n\n\n.sidebar_switch_active\n{\n    background-color: #999;\n    color:white;\n}\n\n.sidebar_switch:hover\n{\n    color:white;\n}\n\n",};
// vars
const CSS_ELEMENT_CLASS = "cables-sidebar-style"; /* class for the style element to be generated */
const CSS_ELEMENT_DYNAMIC_CLASS = "cables-sidebar-dynamic-style"; /* things which can be set via op-port, but not attached to the elements themselves, e.g. minimized opacity */
const SIDEBAR_CLASS = "sidebar-cables";
const SIDEBAR_ID = "sidebar" + CABLES.uuid();
const SIDEBAR_ITEMS_CLASS = "sidebar__items";
const SIDEBAR_OPEN_CLOSE_BTN_CLASS = "sidebar__close-button";

const BTN_TEXT_OPEN = ""; // 'Close';
const BTN_TEXT_CLOSED = ""; // 'Show Controls';

let openCloseBtn = null;
let openCloseBtnIcon = null;
let headerTitleText = null;

// inputs
const visiblePort = op.inValueBool("Visible", true);
const opacityPort = op.inValueSlider("Opacity", 1);
const defaultMinimizedPort = op.inValueBool("Default Minimized");
const minimizedOpacityPort = op.inValueSlider("Minimized Opacity", 0.5);
const undoButtonPort = op.inValueBool("Show undo button", false);
const inMinimize = op.inValueBool("Show Minimize", false);

const inTitle = op.inString("Title", "");
const side = op.inValueBool("Side");
const addCss = op.inValueBool("Default CSS", true);

let doc = op.patch.cgl.canvas.ownerDocument;

// outputs
const childrenPort = op.outObject("childs");
childrenPort.setUiAttribs({ "title": "Children" });

const isOpenOut = op.outBool("Opfened");
isOpenOut.setUiAttribs({ "title": "Opened" });

let sidebarEl = doc.querySelector("." + SIDEBAR_ID);
if (!sidebarEl) sidebarEl = initSidebarElement();

const sidebarItemsEl = sidebarEl.querySelector("." + SIDEBAR_ITEMS_CLASS);
childrenPort.set({
    "parentElement": sidebarItemsEl,
    "parentOp": op,
});
onDefaultMinimizedPortChanged();
initSidebarCss();
updateDynamicStyles();

addCss.onChange = () =>
{
    initSidebarCss();
    updateDynamicStyles();
};
visiblePort.onChange = onVisiblePortChange;
opacityPort.onChange = onOpacityPortChange;
defaultMinimizedPort.onChange = onDefaultMinimizedPortChanged;
minimizedOpacityPort.onChange = onMinimizedOpacityPortChanged;
undoButtonPort.onChange = onUndoButtonChange;
op.onDelete = onDelete;

function onMinimizedOpacityPortChanged()
{
    updateDynamicStyles();
}

inMinimize.onChange = updateMinimize;

function updateMinimize(header)
{
    if (!header || header.uiAttribs) header = doc.querySelector(".sidebar-cables .sidebar__group-header");
    if (!header) return;

    const undoButton = doc.querySelector(".sidebar-cables .sidebar__group-header .sidebar__group-header-undo");

    if (inMinimize.get())
    {
        header.classList.add("iconsidebar-chevron-up");
        header.classList.add("iconsidebar-minimizebutton");

        if (undoButton)undoButton.style.marginRight = "20px";
    }
    else
    {
        header.classList.remove("iconsidebar-chevron-up");
        header.classList.remove("iconsidebar-minimizebutton");

        if (undoButton)undoButton.style.marginRight = "initial";
    }
}

side.onChange = function ()
{
    if (!sidebarEl) return;
    if (side.get()) sidebarEl.classList.add("sidebar-cables-right");
    else sidebarEl.classList.remove("sidebar-cables-right");
};

function onUndoButtonChange()
{
    const header = doc.querySelector(".sidebar-cables .sidebar__group-header");
    if (header)
    {
        initUndoButton(header);
    }
}

function initUndoButton(header)
{
    if (header)
    {
        const undoButton = doc.querySelector(".sidebar-cables .sidebar__group-header .sidebar__group-header-undo");
        if (undoButton)
        {
            if (!undoButtonPort.get())
            {
                // header.removeChild(undoButton);
                undoButton.remove();
            }
        }
        else
        {
            if (undoButtonPort.get())
            {
                const headerUndo = doc.createElement("span");
                headerUndo.classList.add("sidebar__group-header-undo");
                headerUndo.classList.add("sidebar-icon-undo");

                headerUndo.addEventListener("click", function (event)
                {
                    event.stopPropagation();
                    const reloadables = doc.querySelectorAll(".sidebar-cables .sidebar__reloadable");
                    const doubleClickEvent = doc.createEvent("MouseEvents");
                    doubleClickEvent.initEvent("dblclick", true, true);
                    reloadables.forEach((reloadable) =>
                    {
                        reloadable.dispatchEvent(doubleClickEvent);
                    });
                });
                header.appendChild(headerUndo);
            }
        }
    }
    updateMinimize(header);
}

function onDefaultMinimizedPortChanged()
{
    if (!openCloseBtn) { return; }
    if (defaultMinimizedPort.get())
    {
        sidebarEl.classList.add("sidebar--closed");
        if (visiblePort.get()) isOpenOut.set(false);
    }
    else
    {
        sidebarEl.classList.remove("sidebar--closed");
        if (visiblePort.get()) isOpenOut.set(true);
    }
}

function onOpacityPortChange()
{
    const opacity = opacityPort.get();
    sidebarEl.style.opacity = opacity;
}

function onVisiblePortChange()
{
    if (!sidebarEl) return;
    if (visiblePort.get())
    {
        sidebarEl.style.display = "block";
        if (!sidebarEl.classList.contains("sidebar--closed")) isOpenOut.set(true);
    }
    else
    {
        sidebarEl.style.display = "none";
        isOpenOut.set(false);
    }
}

side.onChanged = function ()
{

};

/**
 * Some styles cannot be set directly inline, so a dynamic stylesheet is needed.
 * Here hover states can be set later on e.g.
 */
function updateDynamicStyles()
{
    const dynamicStyles = doc.querySelectorAll("." + CSS_ELEMENT_DYNAMIC_CLASS);
    if (dynamicStyles)
    {
        dynamicStyles.forEach(function (e)
        {
            e.parentNode.removeChild(e);
        });
    }

    if (!addCss.get()) return;

    const newDynamicStyle = doc.createElement("style");
    newDynamicStyle.classList.add("cablesEle");
    newDynamicStyle.classList.add(CSS_ELEMENT_DYNAMIC_CLASS);
    let cssText = ".sidebar--closed .sidebar__close-button { ";
    cssText += "opacity: " + minimizedOpacityPort.get();
    cssText += "}";
    const cssTextEl = doc.createTextNode(cssText);
    newDynamicStyle.appendChild(cssTextEl);
    doc.body.appendChild(newDynamicStyle);
}

function initSidebarElement()
{
    const element = doc.createElement("div");
    element.classList.add(SIDEBAR_CLASS);
    element.classList.add(SIDEBAR_ID);
    const canvasWrapper = op.patch.cgl.canvas.parentElement; /* maybe this is bad outside cables!? */

    // header...
    const headerGroup = doc.createElement("div");
    headerGroup.classList.add("sidebar__group");

    element.appendChild(headerGroup);
    const header = doc.createElement("div");
    header.classList.add("sidebar__group-header");

    element.appendChild(header);
    const headerTitle = doc.createElement("span");
    headerTitle.classList.add("sidebar__group-header-title");
    headerTitleText = doc.createElement("span");
    headerTitleText.classList.add("sidebar__group-header-title-text");
    headerTitleText.innerHTML = inTitle.get();
    headerTitle.appendChild(headerTitleText);
    header.appendChild(headerTitle);

    initUndoButton(header);
    updateMinimize(header);

    headerGroup.appendChild(header);
    element.appendChild(headerGroup);
    headerGroup.addEventListener("click", onOpenCloseBtnClick);

    if (!canvasWrapper)
    {
        op.warn("[sidebar] no canvas parentelement found...");
        return;
    }
    canvasWrapper.appendChild(element);
    const items = doc.createElement("div");
    items.classList.add(SIDEBAR_ITEMS_CLASS);
    element.appendChild(items);
    openCloseBtn = doc.createElement("div");
    openCloseBtn.classList.add(SIDEBAR_OPEN_CLOSE_BTN_CLASS);
    openCloseBtn.addEventListener("click", onOpenCloseBtnClick);
    element.appendChild(openCloseBtn);

    return element;
}

inTitle.onChange = function ()
{
    if (headerTitleText)headerTitleText.innerHTML = inTitle.get();
};

function setClosed(b)
{

}

function onOpenCloseBtnClick(ev)
{
    ev.stopPropagation();
    if (!sidebarEl) { op.logError("Sidebar could not be closed..."); return; }
    sidebarEl.classList.toggle("sidebar--closed");
    const btn = ev.target;
    let btnText = BTN_TEXT_OPEN;
    if (sidebarEl.classList.contains("sidebar--closed"))
    {
        btnText = BTN_TEXT_CLOSED;
        isOpenOut.set(false);
    }
    else
    {
        isOpenOut.set(true);
    }
}

function initSidebarCss()
{
    const cssElements = doc.querySelectorAll("." + CSS_ELEMENT_CLASS);
    // remove old script tag
    if (cssElements)
    {
        cssElements.forEach((e) =>
        {
            e.parentNode.removeChild(e);
        });
    }

    if (!addCss.get()) return;

    const newStyle = doc.createElement("style");

    newStyle.innerHTML = attachments.style_css;
    newStyle.classList.add(CSS_ELEMENT_CLASS);
    newStyle.classList.add("cablesEle");
    doc.body.appendChild(newStyle);
}

function onDelete()
{
    removeElementFromDOM(sidebarEl);
}

function removeElementFromDOM(el)
{
    if (el && el.parentNode && el.parentNode.removeChild) el.parentNode.removeChild(el);
}


};

Ops.Sidebar.Sidebar.prototype = new CABLES.Op();
CABLES.OPS["5a681c35-78ce-4cb3-9858-bc79c34c6819"]={f:Ops.Sidebar.Sidebar,objName:"Ops.Sidebar.Sidebar"};




// **************************************************************
// 
// Ops.Cables.LoadingStatus_v2
// 
// **************************************************************

Ops.Cables.LoadingStatus_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("exe"),
    preRenderOps = op.inValueBool("PreRender Ops"),
    startTimeLine = op.inBool("Play Timeline", true),
    next = op.outTrigger("Next"),
    outInitialFinished = op.outBoolNum("Finished Initial Loading", false),
    outLoading = op.outBoolNum("Loading"),
    outProgress = op.outNumber("Progress"),
    outList = op.outArray("Jobs"),
    loadingFinished = op.outTrigger("Trigger Loading Finished ");

const cgl = op.patch.cgl;
const patch = op.patch;

let finishedOnce = false;
const preRenderTimes = [];
let firstTime = true;

document.body.classList.add("cables-loading");

let loadingId = cgl.patch.loading.start("loadingStatusInit", "loadingStatusInit", op);

exe.onTriggered = () =>
{
    const jobs = op.patch.loading.getListJobs();
    outProgress.set(patch.loading.getProgress());

    let hasFinished = jobs.length === 0;
    const notFinished = !hasFinished;
    // outLoading.set(!hasFinished);

    if (notFinished)
    {
        outList.set(op.patch.loading.getListJobs());
    }

    if (notFinished)
    {
        if (firstTime)
        {
            if (preRenderOps.get()) op.patch.preRenderOps();

            op.patch.timer.setTime(0);
            if (startTimeLine.get())
            {
                op.patch.timer.play();
            }
            else
            {
                op.patch.timer.pause();
            }
        }
        firstTime = false;

        document.body.classList.remove("cables-loading");
        document.body.classList.add("cables-loaded");
    }
    else
    {
        finishedOnce = true;
        outList.set(op.patch.loading.getListJobs());
        if (patch.loading.getProgress() < 1.0)
        {
            op.patch.timer.setTime(0);
            op.patch.timer.pause();
        }
    }

    outInitialFinished.set(finishedOnce);

    if (outLoading.get() && hasFinished) loadingFinished.trigger();

    outLoading.set(notFinished);
    op.setUiAttribs({ "loading": notFinished });

    next.trigger();

    if (loadingId)
    {
        cgl.patch.loading.finished(loadingId);
        loadingId = null;
    }
};


};

Ops.Cables.LoadingStatus_v2.prototype = new CABLES.Op();
CABLES.OPS["e62f7f4c-7436-437e-8451-6bc3c28545f7"]={f:Ops.Cables.LoadingStatus_v2,objName:"Ops.Cables.LoadingStatus_v2"};




// **************************************************************
// 
// Ops.Website.LocationHashRoute
// 
// **************************************************************

Ops.Website.LocationHashRoute = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const routeIn = op.inString("Route");
const parsedOut = op.outObject("Values", {});
const changedOut = op.outTrigger("Changed");
const outMatching = op.outBool("Matching");

let lastHref = null;
let hashChangeListener = null;

// op.onLoadedValueSet = init;

function init()
{
    if ("onhashchange" in window)
    {
        const eventWrapper = (event) =>
        {
            event.internal = true;
            hashChange(event);
        };

        if (hashChangeListener)
        {
            op.patch.removeEventListener(hashChangeListener);
            hashChangeListener = null;
        }
        hashChangeListener = op.patch.addEventListener("LocationHashChange", eventWrapper);
        window.removeEventListener("hashchange", hashChangeFromBrowser);
        window.addEventListener("hashchange", hashChangeFromBrowser);
        hashChange({ "newURL": window.location.href });
    }
    else
    {
        op.setUiError("unsupported", "Your browser does not support listening to hashchanges!");
    }
}

init();

function hashChangeFromBrowser(event)
{
    hashChange(event);
}

op.onDelete = function ()
{
    if (hashChangeListener)
    {
        op.patch.removeEventListener(hashChangeListener);
        hashChangeListener = null;
    }
    window.removeEventListener("hashchange", hashChangeFromBrowser);
};

routeIn.onChange = function ()
{
    hashChange({ "newURL": window.location.href }, true);
};

function hashChange(event, forceUpdate)
{
    let hash = "";
    if (!forceUpdate && (event.newURL === lastHref))
    {
        return;
    }
    lastHref = event.newURL;
    op.setUiError("unsupported", null);
    let values = {};
    const fields = event.newURL.split("#");
    let hasMatch = false;
    if (routeIn.get())
    {
        if (fields.length > 1)
        {
            hasMatch = false;
            for (let i = 1; i < fields.length; i++)
            {
                let route = routeIn.get();
                let match = fields[i];
                hash += "#" + fields[i];
                let matched = false;
                op.setUiError("regex", null);
                try
                {
                    matched = matchLocation(route, match);
                }
                catch (e)
                {
                    op.setUiError("regex", "Failed to parse route string, check documentation. <br>- " + e.message);
                }
                if (matched)
                {
                    if (matched.data)
                    {
                        const keys = Object.keys(matched.data);
                        keys.forEach((key) =>
                        {
                            matched.data[key] = getTypedValue(matched.data[key]);
                        });
                        values = Object.assign(values, matched.data);
                    }
                    if (matched.params)
                    {
                        const keys = Object.keys(matched.params);
                        keys.forEach((key) =>
                        {
                            matched.params[key] = getTypedValue(matched.params[key]);
                        });
                        values = Object.assign(values, matched.params);
                    }
                    hasMatch = true;
                }
            }
        }
    }
    else
    {
        const all = event.newURL.split("#", 2);
        hash = all[1] || "";
        hasMatch = true;
    }

    if (hasMatch)
    {
        let paramStr = hash.split("?", 2);
        let params = parseQuery(paramStr[1]);
        let keys = Object.keys(params);
        keys.forEach((key) =>
        {
            if (!values.hasOwnProperty(key)) values[key] = params[key];
        });
    }

    outMatching.set(hasMatch);

    if (!(parsedOut.get().length === 0 && values.length === 0))
    {
        parsedOut.set(values);
    }

    if (hasMatch && !event.silent)
    {
        changedOut.trigger();
    }
}

function getTypedValue(val)
{
    let value = decodeURIComponent(val || "");
    if (value !== "")
    {
        switch (value)
        {
        case "true":
            value = true;
            break;

        case "false":
            value = false;
            break;

        default:
            if (!isNaN(value))
            {
                value = Number(value);
            }
        }
    }
    return value;
}

function parseQuery(str)
{
    if (typeof str != "string" || str.length == 0) return {};
    let s = str.split("&");
    let s_length = s.length;
    let bit, query = {}, first, second;
    for (let i = 0; i < s_length; i++)
    {
        bit = s[i].split("=");
        first = decodeURIComponent(bit[0]);
        if (first.length == 0) continue;
        second = decodeURIComponent(bit[1]);
        if (typeof query[first] == "undefined") query[first] = second;
        else if (query[first] instanceof Array) query[first].push(second);
        else query[first] = [query[first], second];
    }
    return query;
}

// https://github.com/krasimir/navigo
function matchLocation(path, currentLocation)
{
    if (typeof currentLocation !== "undefined")
    {
        currentLocation = "/" + cleanPath(currentLocation);
    }

    let context = {
        "to": currentLocation,
        "currentLocationPath": currentLocation
    };
    if (typeof context.currentLocationPath === "undefined")
    {
        let envUrl = "/";
        if (typeof window !== "undefined")
        {
            envUrl = location.pathname + location.search + location.hash;
        }
        context.currentLocationPath = context.to = envUrl;
    }
    if (context.currentLocationPath.indexOf("#") >= 0)
    {
        context.currentLocationPath = context.currentLocationPath.split("#")[1] || "/";
    }

    if (typeof path === "string")
    {
        path = "/" + cleanPath(path);
    }

    let match = matchRoute(context, {
        "name": String(path),
        "path": path,
        "handler": function handler() {},
        "hooks": {}
    });
    return match || false;
}

// https://github.com/krasimir/navigo
function cleanPath(s)
{
    return s.replace(/\/+$/, "").replace(/^\/+/, "");
}

// https://github.com/krasimir/navigo
function matchRoute(context, route)
{
    let tmp = cleanPath(context.currentLocationPath).split(/\?(.*)?$/);
    let _extractGETParameters = [cleanPath(tmp[0]), tmp.slice(1).join("")];

    let current = _extractGETParameters[0],
        GETParams = _extractGETParameters[1];

    let params = GETParams === "" ? null : parseQuery(GETParams);
    let paramNames = [];
    let pattern;

    if (typeof route.path === "string")
    {
        pattern = "(?:/^|^)" + cleanPath(route.path).replace(/([:*])(\w+)/g, function (full, dots, name)
        {
            paramNames.push(name);
            return "([^/]+)";
        }).replace(/\*/g, "?(?:.*)").replace(/\/\?/g, "/?([^/]+|)") + "$";

        if (cleanPath(route.path) === "")
        {
            if (cleanPath(current) === "")
            {
                let hash = "";
                if (context.to && context.to.indexOf("#") >= 0)
                {
                    hash = context.to.split("#").pop() || "";
                }

                return {
                    "url": current,
                    "queryString": GETParams,
                    "hashString": hash,
                    "route": route,
                    "data": null,
                    "params": params
                };
            }
        }
    }
    else
    {
        pattern = route.path;
    }

    let regexp = new RegExp(pattern, "");
    let match = current.match(regexp);

    if (match)
    {
        let data = null;
        if (typeof route.path === "string")
        {
            if (paramNames.length === 0)
            {
                data = null;
            }
            else
            {
                data = match.slice(1, match.length).reduce(function (p, value, index)
                {
                    if (p === null) p = {};
                    p[paramNames[index]] = decodeURIComponent(value);
                    return p;
                }, null);
            }
        }
        else if (match.groups)
        {
            data = match.groups;
        }
        if (!data) data = match.slice(1);

        let hash = "";
        if (context.to && context.to.indexOf("#") >= 0)
        {
            hash = context.to.split("#").pop() || "";
        }
        return {
            "url": cleanPath(current.replace(new RegExp("^/"), "")),
            "queryString": GETParams,
            "hashString": hash,
            "route": route,
            "data": data,
            "params": params
        };
    }

    return false;
}


};

Ops.Website.LocationHashRoute.prototype = new CABLES.Op();
CABLES.OPS["1e76f92b-1eed-4575-96e1-fcff6ed08c04"]={f:Ops.Website.LocationHashRoute,objName:"Ops.Website.LocationHashRoute"};




// **************************************************************
// 
// Ops.Json.ObjectGetNumber_v2
// 
// **************************************************************

Ops.Json.ObjectGetNumber_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    data = op.inObject("Data"),
    key = op.inString("Key"),
    result = op.outNumber("Result"),
    outFound = op.outBoolNum("Found");

result.ignoreValueSerialize = true;
data.ignoreValueSerialize = true;
op.setUiAttrib({ "extendTitlePort": key.name });

key.onChange =
    data.onChange = exec;

key.on("change", updateUi);
updateUi();
function updateUi()
{
    if (!key.get())op.setUiError("nokey", "Missing Key Value");
    else op.setUiError("nokey", null);
}

function exec()
{
    const d = data.get();
    if (d)
    {
        const val = d[key.get()];
        result.set(parseFloat(val));
        if (val === undefined) outFound.set(0);
        else outFound.set(1);
    }
    else
    {
        result.set(0);
        outFound.set(0);
    }
}


};

Ops.Json.ObjectGetNumber_v2.prototype = new CABLES.Op();
CABLES.OPS["a7335e79-046e-40da-9e9c-db779b0a5e53"]={f:Ops.Json.ObjectGetNumber_v2,objName:"Ops.Json.ObjectGetNumber_v2"};




// **************************************************************
// 
// Ops.Trigger.IsTriggered
// 
// **************************************************************

Ops.Trigger.IsTriggered = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Trigger"),
    next = op.outTrigger("Next"),
    result = op.outBoolNum("Was Triggered", false);

let frameCount = 0;

op.onAnimFrame = function (tt)
{
    frameCount++;
    if (frameCount > 1) result.set(false);
};

exec.onTriggered = function ()
{
    frameCount = 0;
    result.set(true);
    next.trigger();
};


};

Ops.Trigger.IsTriggered.prototype = new CABLES.Op();
CABLES.OPS["7c96fee9-4c2f-45e1-a41b-096b06d286b8"]={f:Ops.Trigger.IsTriggered,objName:"Ops.Trigger.IsTriggered"};




// **************************************************************
// 
// Ops.User.rambodc.URL_Empty_Redirect
// 
// **************************************************************

Ops.User.rambodc.URL_Empty_Redirect = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Inputs - If url is empty after hash #, the this op will automatically redirects to a path you want.
const triggerSetHash = op.inTriggerButton("Trigger Set Hash");
const newHashRoute = op.inString("New Hash Route", "/home");

triggerSetHash.onTriggered = function() {
    setNewHashRoute();
};

function setNewHashRoute() {
    const currentHash = window.location.hash;

    // Check if the hash is empty or just '#'
    if (!currentHash || currentHash === '#') {
        // Set the new hash route
        window.location.hash = newHashRoute.get();
    }
}


};

Ops.User.rambodc.URL_Empty_Redirect.prototype = new CABLES.Op();
CABLES.OPS["ba2c15e2-f6d6-4fd7-bedc-b26dcd033253"]={f:Ops.User.rambodc.URL_Empty_Redirect,objName:"Ops.User.rambodc.URL_Empty_Redirect"};




// **************************************************************
// 
// Ops.User.rambodc.URL_Check1
// 
// **************************************************************

Ops.User.rambodc.URL_Check1 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// This operator will perform a check when the input trigger is activated. It will trigger the output only if the Path equals Path Equals and isAuth is false.

// Inputs
const trigger = op.inTriggerButton("Trigger");
const path = op.inString("Path", "hello");
const pathEquals = op.inString("Path Equals", "hello");
const isAuth = op.inBool("isAuth", false);

// Output
const triggerResult = op.outTrigger("Trigger Result");

trigger.onTriggered = function() {
    checkAndTriggerResult();
};

function checkAndTriggerResult() {
    // Check if Path equals Path Equals and isAuth is false
    if (path.get() === pathEquals.get() && !isAuth.get()) {
        // Trigger the output
        triggerResult.trigger();
    }
}


};

Ops.User.rambodc.URL_Check1.prototype = new CABLES.Op();
CABLES.OPS["672bd809-86af-4361-86fe-61993c6daec0"]={f:Ops.User.rambodc.URL_Check1,objName:"Ops.User.rambodc.URL_Check1"};




// **************************************************************
// 
// Ops.Boolean.Boolean
// 
// **************************************************************

Ops.Boolean.Boolean = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    v = op.inBool("value", false),
    result = op.outBoolNum("result");

result.set(false);
v.onChange = exec;

function exec()
{
    if (result.get() != v.get()) result.set(v.get());
}


};

Ops.Boolean.Boolean.prototype = new CABLES.Op();
CABLES.OPS["83e2d74c-9741-41aa-a4d7-1bda4ef55fb3"]={f:Ops.Boolean.Boolean,objName:"Ops.Boolean.Boolean"};




// **************************************************************
// 
// Ops.User.rambodc.button_customize
// 
// **************************************************************

Ops.User.rambodc.button_customize = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Inputs
const parentPort = op.inObject("Link"), // For Sidebar integration
      buttonTextPort = op.inString("Text", "Button"),
      buttonPositionPort = op.inSwitch("Position", ["Left", "Center", "Right"], "Center"),
      backgroundColorPort = op.inString("Background Color", "#FFFFFF"),
      textColorPort = op.inString("Text Color", "#000000"),
      paddingPort = op.inString("Padding", "10px 20px"),
      marginPort = op.inString("Margin", "10px"),
      borderRadiusPort = op.inString("Border Radius", "5px"),
      fontWeightPort = op.inString("Font Weight", "normal"),
      fontSizePort = op.inString("Font Size", "16px"),
      cssClassPort = op.inString("CSS Class", "unique-sidebar-button"), // New input for CSS class
      inVisible = op.inBool("Visible", true);

// Outputs
const siblingsPort = op.outObject("Children"); // For Sidebar integration
const buttonPressedPort = op.outTrigger("Pressed Trigger");

// Internal state
let buttonContainer, innerContainer;

// Create the button container and element
function createButtonContainer() {
    // Remove the existing button container if it exists
    if (buttonContainer && buttonContainer.parentNode) {
        buttonContainer.parentNode.removeChild(buttonContainer);
    }

    // Create a new button container
    buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.style.display = "flex";
    buttonContainer.style.justifyContent = buttonPositionPort.get().toLowerCase();
    buttonContainer.style.alignItems = "center"; // Center vertically
    buttonContainer.style.margin = marginPort.get();

    // Create an inner container for the button
    innerContainer = document.createElement("div");
    innerContainer.style.display = "flex";
    innerContainer.style.justifyContent = buttonPositionPort.get().toLowerCase(); // Align based on position

    // Create the button element
    const buttonElement = document.createElement("button");
    buttonElement.textContent = buttonTextPort.get();
    buttonElement.classList.add(cssClassPort.get()); // Use CSS class from input
    buttonElement.style.backgroundColor = backgroundColorPort.get();
    buttonElement.style.color = textColorPort.get();
    buttonElement.style.padding = paddingPort.get();
    buttonElement.style.borderRadius = borderRadiusPort.get();
    buttonElement.style.fontWeight = fontWeightPort.get();
    buttonElement.style.fontSize = fontSizePort.get();
    buttonElement.addEventListener("click", () => buttonPressedPort.trigger());

    // Append the button to the inner container
    innerContainer.appendChild(buttonElement);

    // Append the inner container to the button container
    buttonContainer.appendChild(innerContainer);

    // Append container to the parent
    const parent = parentPort.get();
    if (parent && parent.parentElement) {
        parent.parentElement.appendChild(buttonContainer);
        siblingsPort.set(parent); // Update children for sidebar integration
    }
}

// Initialize and update button container on changes
function init() {
    createButtonContainer();
    updateVisibility();
}

buttonTextPort.onChange = init;
buttonPositionPort.onChange = init;
backgroundColorPort.onChange = init;
textColorPort.onChange = init;
paddingPort.onChange = init;
marginPort.onChange = init;
borderRadiusPort.onChange = init;
fontWeightPort.onChange = init;
fontSizePort.onChange = init;
cssClassPort.onChange = init; // Update when CSS class changes
inVisible.onChange = updateVisibility;

// Update visibility based on the inVisible input
function updateVisibility() {
    if (inVisible.get()) {
        buttonContainer.style.display = "flex"; // or "block" based on your styling
        // Re-append to the parent to maintain position
        const parent = parentPort.get();
        if (parent && parent.parentElement) {
            parent.parentElement.appendChild(buttonContainer);
        }
    } else {
        buttonContainer.style.display = "none";
    }
}


// Handle parent port changes
parentPort.onChange = () => {
    const parent = parentPort.get();
    if (parent && parent.parentElement) {
        parent.parentElement.appendChild(buttonContainer);
        siblingsPort.set(parent);
    } else if (buttonContainer && buttonContainer.parentNode) {
        buttonContainer.parentNode.removeChild(buttonContainer);
    }
};

// Cleanup on operator deletion
op.onDelete = () => {
    if (buttonContainer && buttonContainer.parentNode) {
        buttonContainer.parentNode.removeChild(buttonContainer);
    }
};

// Call init to set up the operator
init();

// Additional styling inputs
const hoverBackgroundColorPort = op.inString("Hover Background Color", "#DDDDDD");
const hoverTextColorPort = op.inString("Hover Text Color", "#333333");
const borderWidthPort = op.inString("Border Width", "0px");
const borderColorPort = op.inString("Border Color", "#000000");

// Define hover interaction
function onHover() {
    const buttonElement = innerContainer.firstChild;
    buttonElement.style.backgroundColor = hoverBackgroundColorPort.get();
    buttonElement.style.color = hoverTextColorPort.get();
    buttonElement.style.borderColor = borderColorPort.get();
}

function onLeave() {
    const buttonElement = innerContainer.firstChild;
    buttonElement.style.backgroundColor = backgroundColorPort.get();
    buttonElement.style.color = textColorPort.get();
    buttonElement.style.borderColor = "transparent";
}

// Apply additional styles based on inputs
function applyAdditionalStyles() {
    const buttonElement = innerContainer.firstChild;
    buttonElement.style.borderWidth = borderWidthPort.get();
    buttonElement.style.borderColor = borderColorPort.get();
    buttonElement.style.borderStyle = borderWidthPort.get() === "0px" ? "none" : "solid";
    buttonElement.style.cursor = 'pointer';
}

// Attach hover listeners
function attachHoverListeners() {
    const buttonElement = innerContainer.firstChild;
    buttonElement.addEventListener("mouseover", onHover);
    buttonElement.addEventListener("mouseleave", onLeave);
}

// Initialize hover effects and additional styles
function initHoverAndStyles() {
    applyAdditionalStyles();
    attachHoverListeners();
}

// Update the styling when these inputs change
hoverBackgroundColorPort.onChange = initHoverAndStyles;
hoverTextColorPort.onChange = initHoverAndStyles;
borderWidthPort.onChange = initHoverAndStyles;
borderColorPort.onChange = initHoverAndStyles;

// Update everything on initialization
function initAll() {
    init();
    initHoverAndStyles();
}

// Use initAll for all onChange triggers
buttonTextPort.onChange = initAll;
buttonPositionPort.onChange = initAll;
backgroundColorPort.onChange = initAll;
textColorPort.onChange = initAll;
paddingPort.onChange = initAll;
marginPort.onChange = initAll;
borderRadiusPort.onChange = initAll;
fontWeightPort.onChange = initAll;
fontSizePort.onChange = initAll;
cssClassPort.onChange = initAll; // Ensure changes in CSS class name are handled
inVisible.onChange = initAll;
hoverBackgroundColorPort.onChange = initAll;
hoverTextColorPort.onChange = initAll;
borderWidthPort.onChange = initAll;
borderColorPort.onChange = initAll;

// Call initAll to set up the operator with all features
initAll();

};

Ops.User.rambodc.button_customize.prototype = new CABLES.Op();
CABLES.OPS["14b20a59-6228-4154-aa1f-61505ff62a49"]={f:Ops.User.rambodc.button_customize,objName:"Ops.User.rambodc.button_customize"};




// **************************************************************
// 
// Ops.User.rambodc.FB_UserExists
// 
// **************************************************************

Ops.User.rambodc.FB_UserExists = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Inputs
const emailCheckPort = op.inString("Email to Check", "");
const checkTriggerPort = op.inTriggerButton("Check Email");

// Outputs
const userExistsPort = op.outTrigger("User Exists");
const userDoesNotExistPort = op.outTrigger("User Does Not Exist");

checkTriggerPort.onTriggered = function() {
    const emailToCheck = emailCheckPort.get();
    firebase.auth().fetchSignInMethodsForEmail(emailToCheck)
        .then((signInMethods) => {
            if (signInMethods.length > 0) {
                userExistsPort.trigger();
            } else {
                userDoesNotExistPort.trigger();
            }
        })
        .catch((error) => {
            console.error("Error checking email: ", error);
        });
};


};

Ops.User.rambodc.FB_UserExists.prototype = new CABLES.Op();
CABLES.OPS["4572befb-5d1d-403c-ba9c-f1c810309fed"]={f:Ops.User.rambodc.FB_UserExists,objName:"Ops.User.rambodc.FB_UserExists"};




// **************************************************************
// 
// Ops.Trigger.TriggerNumber
// 
// **************************************************************

Ops.Trigger.TriggerNumber = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    setValuePort = op.inTriggerButton("Set"),
    valuePort = op.inValueFloat("Number"),
    outNext = op.outTrigger("Next"),
    outValuePort = op.outNumber("Out Value");

outValuePort.changeAlways = true;

setValuePort.onTriggered = function ()
{
    outValuePort.set(valuePort.get());
    outNext.trigger();
};


};

Ops.Trigger.TriggerNumber.prototype = new CABLES.Op();
CABLES.OPS["9989b1c0-1073-4d5f-bfa0-36dd98b66e27"]={f:Ops.Trigger.TriggerNumber,objName:"Ops.Trigger.TriggerNumber"};




// **************************************************************
// 
// Ops.Json.HttpRequest_v3
// 
// **************************************************************

Ops.Json.HttpRequest_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const filename = op.inUrl("file"),
    headers = op.inObject("headers", {}),
    inBody = op.inStringEditor("body", ""),
    inMethod = op.inDropDown("HTTP Method", ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "CONNECT", "OPTIONS", "TRACE"], "GET"),
    inContentType = op.inString("Content-Type", "application/json"),
    inContent = op.inSwitch("Content", ["JSON", "String", "Binary"], "JSON"),
    inAutoRequest = op.inBool("Auto request", true),
    reloadTrigger = op.inTriggerButton("reload"),
    outData = op.outObject("Response Json Object"),
    outString = op.outString("Response String"),
    outStringBin = op.outString("Response Data Url"),
    outDuration = op.outNumber("Duration MS", 0),
    outStatus = op.outNumber("Status Code", 0),

    isLoading = op.outBoolNum("Is Loading", false),
    outTrigger = op.outTrigger("Loaded");

filename.setUiAttribs({ "title": "URL" });
reloadTrigger.setUiAttribs({ "buttonTitle": "trigger request" });

outData.ignoreValueSerialize = true;
outString.ignoreValueSerialize = true;

inAutoRequest.onChange =
    filename.onChange =
    headers.onChange =
    inMethod.onChange =
    inContent.onChange = () =>
    {
        delayedReload(false);
    };

reloadTrigger.onTriggered = () =>
{
    delayedReload(true);
};

let reloadTimeout = 0;

function delayedReload(force = false)
{
    clearTimeout(reloadTimeout);
    reloadTimeout = setTimeout(() => { reload(null, force); }, 100);
}

op.onFileChanged = (fn) =>
{
    if (filename.get() && filename.get().indexOf(fn) > -1) reload(true);
};

function reload(addCachebuster, force = false)
{
    if (!inAutoRequest.get() && !force) return;
    if (!filename.get()) return;

    const loadingId = op.patch.loading.start("jsonFile", "" + filename.get(), op);
    isLoading.set(true);

    op.setUiAttrib({ "extendTitle": CABLES.basename(filename.get()) });
    op.setUiError("jsonerr", null);

    let httpClient = CABLES.ajax;

    let url = op.patch.getFilePath(filename.get());
    if (addCachebuster)url += "?rnd=" + CABLES.generateUUID();

    op.patch.loading.addAssetLoadingTask(() =>
    {
        const body = inBody.get();
        const startTime = performance.now();

        if (inContent.get() == "Binary")
        {
            fetch(url)
                // .then((res) => { return res.arrayBuffer(); })
                .then((res) =>
                {
                    res.blob().then((b) =>
                    {
                        outStringBin.set(URL.createObjectURL(b));
                    });

                    op.patch.loading.finished(loadingId);
                });
        }
        else
        {
            httpClient(
                url,
                (err, _data, xhr) =>
                {
                    outDuration.set(Math.round(performance.now() - startTime));

                    outStatus.set(xhr.status);

                    try
                    {
                        let data = _data;

                        if (typeof data === "string" && inContent.get() == "JSON")
                        {
                            data = JSON.parse(_data);
                            outData.setRef(data);
                        }

                        outString.set(_data);
                        op.uiAttr({ "error": null });
                        op.patch.loading.finished(loadingId);
                        outTrigger.trigger();
                        isLoading.set(false);
                    }
                    catch (e)
                    {
                        op.logError(e);
                        op.setUiError("jsonerr", "Problem while loading json:<br/>" + e);
                        op.patch.loading.finished(loadingId);
                        isLoading.set(false);
                        outData.setRef(null);
                        outString.set("");
                    }
                },
                inMethod.get(),
                (body && body.length > 0) ? body : null,
                inContentType.get(),
                null,
                headers.get() || {}
            );
        }
    });
}


};

Ops.Json.HttpRequest_v3.prototype = new CABLES.Op();
CABLES.OPS["ba2131a6-782d-40fe-9710-57a8e57051bb"]={f:Ops.Json.HttpRequest_v3,objName:"Ops.Json.HttpRequest_v3"};




// **************************************************************
// 
// Ops.User.rambodc.Check_Strings
// 
// **************************************************************

Ops.User.rambodc.Check_Strings = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
//inputs
const inTriggerCheck = op.inTriggerButton("Trigger Check");

const inCheck1Enables = op.inValueBool("Check1 Enables", true);
const inCheck1 = op.inString("Check1");
const inMaxCharacters1 = op.inValue("Max Characters 1", 100);
const inCanBeBlank1 = op.inValueBool("Can be blank1", true);

const inCheck2Enables = op.inValueBool("Check2 Enables", true);
const inCheck2 = op.inString("Check2");
const inMaxCharacters2 = op.inValue("Max Characters 2", 100);
const inCanBeBlank2 = op.inValueBool("Can be blank2", true);

const inCheck3Enables = op.inValueBool("Check3 Enables", true);
const inCheck3 = op.inString("Check3");
const inMaxCharacters3 = op.inValue("Max Characters 3", 100);
const inCanBeBlank3 = op.inValueBool("Can be blank3", true);

const inCheck4Enables = op.inValueBool("Check4 Enables", true);
const inCheck4 = op.inString("Check4");
const inMaxCharacters4 = op.inValue("Max Characters 4", 100);
const inCanBeBlank4 = op.inValueBool("Can be blank4", true);

//outputs
const outTriggerSuccess = op.outTrigger("Trigger Success");
const outTriggerFail = op.outTrigger("Trigger Fail");

inTriggerCheck.onTriggered = () => {
    // Perform all enabled checks
    if (performCheck(inCheck1Enables.get(), inCheck1.get(), inMaxCharacters1.get(), inCanBeBlank1.get()) &&
        performCheck(inCheck2Enables.get(), inCheck2.get(), inMaxCharacters2.get(), inCanBeBlank2.get()) &&
        performCheck(inCheck3Enables.get(), inCheck3.get(), inMaxCharacters3.get(), inCanBeBlank3.get()) &&
        performCheck(inCheck4Enables.get(), inCheck4.get(), inMaxCharacters4.get(), inCanBeBlank4.get())) {
        // If all checks passed, trigger success
        outTriggerSuccess.trigger();
    } else {
        // If any check failed, trigger failure
        outTriggerFail.trigger();
    }
};

function performCheck(isEnabled, str, maxCharacters, canBeBlank) {
    // If this check is not enabled, it passes by default
    if (!isEnabled) return true;

    // If the string is blank and blanks are not allowed, the check fails
    if (str === '' && !canBeBlank) return false;

    // If the string is longer than the maximum allowed length, the check fails
    if (str.length > maxCharacters) return false;

    // If none of the failure conditions were met, the check passes
    return true;
}


};

Ops.User.rambodc.Check_Strings.prototype = new CABLES.Op();
CABLES.OPS["d89ce83d-ec6c-4a6f-8c95-200a08d42935"]={f:Ops.User.rambodc.Check_Strings,objName:"Ops.User.rambodc.Check_Strings"};




// **************************************************************
// 
// Ops.User.rambodc.Empty_String_Check1
// 
// **************************************************************

Ops.User.rambodc.Empty_String_Check1 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// inputs
const inExec = op.inTriggerButton("Exe");

const inString1 = op.inString("String Input 1", "");
const inErrorMessage1 = op.inString("Error Message 1", "");
const inBool1 = op.inBool("Bool 1", false);

const inString2 = op.inString("String Input 2", "");
const inErrorMessage2 = op.inString("Error Message 2", "");
const inBool2 = op.inBool("Bool 2", false);

const inString3 = op.inString("String Input 3", "");
const inErrorMessage3 = op.inString("Error Message 3", "");
const inBool3 = op.inBool("Bool 3", false);

const inString4 = op.inString("String Input 4", "");
const inErrorMessage4 = op.inString("Error Message 4", "");
const inBool4 = op.inBool("Bool 4", false);

// outputs
const outSuccess = op.outTrigger("Success");
const outFail = op.outTrigger("Fail");
const outErrorMessage = op.outString("Output Error Message");

outErrorMessage.changeAlways = true;

inExec.onTriggered = function ()
{
    let errorMessage = "";

    if (inBool1.get() && inString1.get().trim() === "")
    {
        errorMessage += inErrorMessage1.get() + " ";
    }

    if (inBool2.get() && inString2.get().trim() === "")
    {
        errorMessage += inErrorMessage2.get() + " ";
    }

    if (inBool3.get() && inString3.get().trim() === "")
    {
        errorMessage += inErrorMessage3.get() + " ";
    }

    if (inBool4.get() && inString4.get().trim() === "")
    {
        errorMessage += inErrorMessage4.get() + " ";
    }

    if (errorMessage !== "")
    {
        outErrorMessage.set(errorMessage.trim());
        outFail.trigger();
    }
    else
    {
        outSuccess.trigger();
    }
};


};

Ops.User.rambodc.Empty_String_Check1.prototype = new CABLES.Op();
CABLES.OPS["7b6873fb-d5db-45fe-9330-73a8290e8795"]={f:Ops.User.rambodc.Empty_String_Check1,objName:"Ops.User.rambodc.Empty_String_Check1"};




// **************************************************************
// 
// Ops.User.rambodc.Password_check
// 
// **************************************************************

Ops.User.rambodc.Password_check = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};

// Inputs
const inPassword = op.inString("Password", "");
const inConfirmPassword = op.inString("Confirm Password", "");

// Outputs
const outCorrect = op.outValueBool("Correct", false);

// Function to check passwords
function checkPasswords() {
    const password = inPassword.get();
    const confirmPassword = inConfirmPassword.get();

    // Check if both passwords are the same and have a minimum length of 6 characters
    const isValid = password === confirmPassword && password.length >= 6;

    outCorrect.set(isValid);
}

// Set the function to trigger when either input changes
inPassword.onChange = checkPasswords;
inConfirmPassword.onChange = checkPasswords;


};

Ops.User.rambodc.Password_check.prototype = new CABLES.Op();
CABLES.OPS["ba78f01c-4075-47ac-acb6-1a551ca414d3"]={f:Ops.User.rambodc.Password_check,objName:"Ops.User.rambodc.Password_check"};




// **************************************************************
// 
// Ops.Trigger.TriggerButton
// 
// **************************************************************

Ops.Trigger.TriggerButton = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inTrig = op.inTriggerButton("Trigger"),
    outTrig = op.outTrigger("Next");

inTrig.onTriggered = function ()
{
    outTrig.trigger();
};


};

Ops.Trigger.TriggerButton.prototype = new CABLES.Op();
CABLES.OPS["21630924-39e4-4df5-9965-b9136510d156"]={f:Ops.Trigger.TriggerButton,objName:"Ops.Trigger.TriggerButton"};




// **************************************************************
// 
// Ops.User.rambodc.StringEquals_Triggers
// 
// **************************************************************

Ops.User.rambodc.StringEquals_Triggers = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// inputs
const str1 = op.inString("String 1"),
    str2 = op.inString("String 2"),
    triggerCheckEquality = op.inTriggerButton("Check Equality");

// outputs
const result = op.outBoolNum("Result"),
    isEqualTrigger = op.outTrigger("True"),
    isNotEqualTrigger = op.outTrigger("False");

str1.onChange =
str2.onChange =
    function ()
    {
        result.set(str1.get() == str2.get());
    };

triggerCheckEquality.onTriggered =
    function ()
    {
        if(str1.get() == str2.get()) {
            isEqualTrigger.trigger();
        } else {
            isNotEqualTrigger.trigger();
        }
    };


};

Ops.User.rambodc.StringEquals_Triggers.prototype = new CABLES.Op();
CABLES.OPS["bf09a225-d7da-43cb-9b34-a457846defe2"]={f:Ops.User.rambodc.StringEquals_Triggers,objName:"Ops.User.rambodc.StringEquals_Triggers"};




// **************************************************************
// 
// Ops.Sidebar.LocalFileToDataUrl
// 
// **************************************************************

Ops.Sidebar.LocalFileToDataUrl = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// inputs
const
    parentPort = op.inObject("link", "element"),
    labelPort = op.inString("Text", "Select File:"),
    inLabelText = op.inString("Button Text", "Choose File"),
    inAccept = op.inString("Accept Files", ""),
    inId = op.inValueString("Id", ""),
    inVisible = op.inBool("Visible", true),
    inGreyOut = op.inBool("Grey Out", false),
    inOpenDialog = op.inTriggerButton("Show Dialog"),
    reset = op.inTriggerButton("Reset"),

    siblingsPort = op.outObject("childs"),
    outDataURL = op.outString("Data URL"),
    outFilename = op.outString("Filename"),
    outObject = op.outObject("File Object"),
    outFileChanged = op.outTrigger("File Changed");

outDataURL.ignoreValueSerialize = true;

// vars
const el = document.createElement("div");
el.dataset.op = op.id;
el.classList.add("cablesEle");
el.classList.add("sidebar__item");
el.classList.add("sidebar__text");
const label = document.createElement("div");
label.classList.add("sidebar__item-label");
const labelText = document.createTextNode(labelPort.get());
label.appendChild(labelText);
el.appendChild(label);

const fileInputEle = document.createElement("input");
fileInputEle.type = "file";
fileInputEle.id = "file";
fileInputEle.name = "file";

fileInputEle.style["background-color"] = "transparent";
fileInputEle.style.width = "90%";
fileInputEle.style.display = "none";

const elReset = document.createElement("div");
elReset.style.cursor = "pointer";
elReset.style.position = "absolute";
elReset.style.right = "10px";
elReset.style["margin-top"] = "15px";

elReset.innerHTML = "&nbsp;&nbsp;✕";

const fileInputButton = document.createElement("div");
fileInputButton.classList.add("sidebar__button-input");
fileInputButton.innerHTML = inLabelText.get();
fileInputButton.onclick = () => { fileInputEle.click(); };
inOpenDialog.onTriggered = () => { fileInputButton.click(); };
fileInputButton.style["margin-top"] = "10px";
fileInputButton.style["padding-left"] = "5px";
fileInputButton.style["padding-right"] = "5px";
fileInputButton.style.width = "80%";
fileInputButton.style["text-overflow"] = "ellipsis";
fileInputButton.style.overflow = "hidden";
fileInputButton.style["white-space"] = "nowrap";

el.appendChild(elReset);
el.appendChild(fileInputButton);
el.appendChild(fileInputEle);

const imgEl = document.createElement("img");

fileInputEle.addEventListener("change", handleFileSelect, false);

const greyOut = document.createElement("div");
greyOut.classList.add("sidebar__greyout");
el.appendChild(greyOut);
greyOut.style.display = "none";

inAccept.onChange = () =>
{
    fileInputEle.accept = inAccept.get();
};

inLabelText.onChange = () =>
{
    fileInputButton.innerHTML = inLabelText.get();
};

inGreyOut.onChange = function ()
{
    greyOut.style.display = inGreyOut.get() ? "block" : "none";
};

inVisible.onChange = function ()
{
    el.style.display = inVisible.get() ? "block" : "none";
};

function onReset()
{
    fileInputEle.value = "";
    outDataURL.set("");
    fileInputButton.innerHTML = inLabelText.get();
    outFileChanged.trigger();
}

reset.onTriggered = onReset;
elReset.addEventListener("click", onReset);

function handleFileSelect(evt)
{
    const reader = new FileReader();

    reader.onabort = function (e)
    {
        op.log("File read cancelled");
    };

    reader.onload = function (e)
    {
        outDataURL.set(e.target.result);
    };

    if (evt.target.files[0])
    {
        reader.readAsDataURL(evt.target.files[0]);
        outFilename.set(evt.target.files[0].name);
        fileInputButton.innerHTML = evt.target.files[0].name;
        outObject.set(evt.target.files[0]);
    }
    else
    {
        fileInputButton.innerHTML = inLabelText.get();

        outDataURL.set("");
        outFilename.set("");
        outObject.set(null);
    }
    outFileChanged.trigger();
}

// events
parentPort.onChange = onParentChanged;
labelPort.onChange = onLabelTextChanged;
inId.onChange = onIdChanged;
op.onDelete = onDelete;

op.toWorkNeedsParent("Ops.Sidebar.Sidebar");

// functions

function onIdChanged()
{
    el.id = inId.get();
}

function onLabelTextChanged()
{
    const labelText = labelPort.get();
    label.textContent = labelText;
}

function onParentChanged()
{
    siblingsPort.set(null);
    const parent = parentPort.get();
    if (parent && parent.parentElement)
    {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    }
    else
    { // detach
        if (el.parentElement)
        {
            el.parentElement.removeChild(el);
        }
    }
}

function showElement(el)
{
    if (el)
    {
        el.style.display = "block";
    }
}

function hideElement(el)
{
    if (el)
    {
        el.style.display = "none";
    }
}

function onDelete()
{
    removeElementFromDOM(el);
}

function removeElementFromDOM(el)
{
    if (el && el.parentNode && el.parentNode.removeChild)
    {
        el.parentNode.removeChild(el);
    }
}


};

Ops.Sidebar.LocalFileToDataUrl.prototype = new CABLES.Op();
CABLES.OPS["c99d271e-aa5e-4a9d-a4d3-4c5137c189e8"]={f:Ops.Sidebar.LocalFileToDataUrl,objName:"Ops.Sidebar.LocalFileToDataUrl"};




// **************************************************************
// 
// Ops.User.rambodc.Test5
// 
// **************************************************************

Ops.User.rambodc.Test5 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Inputs
const inFunctionUrl = op.inString("Function URL", "");
const inBase64 = op.inString("Base64 String", "");
const inMetadata = op.inObject("Metadata", {});
const inSend = op.inTriggerButton("Send to Cloud Function");

// Outputs
const outResponse = op.outString("Response", "");
const outSuccess = op.outTrigger("On Success");
const outFail = op.outTrigger("On Fail");
const outIsLoading = op.outBool("Is Loading", false);

inSend.onTriggered = () => {
    const functionUrl = inFunctionUrl.get();
    const base64Data = inBase64.get();
    const metadata = inMetadata.get();

    // Set loading to true
    outIsLoading.set(true);

    fetch(functionUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ base64Data, metadata })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Convert the response data to a string and set it to the output
        outResponse.set(JSON.stringify(data));
        outSuccess.trigger(); // Trigger success
        outIsLoading.set(false); // Set loading to false
    })
    .catch((error) => {
        console.error('Error:', error);
        outResponse.set(`Error: ${error.message}`);
        outFail.trigger(); // Trigger fail
        outIsLoading.set(false); // Set loading to false
    });
};


};

Ops.User.rambodc.Test5.prototype = new CABLES.Op();
CABLES.OPS["08558a2e-2ae5-4335-b709-24b926df5566"]={f:Ops.User.rambodc.Test5,objName:"Ops.User.rambodc.Test5"};




// **************************************************************
// 
// Ops.User.rambodc.FBUploadStorage
// 
// **************************************************************

Ops.User.rambodc.FBUploadStorage = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Inputs
const inTrigger = op.inTriggerButton("Trigger");
const inBase64String = op.inString("Base64 String");
const inFilePath = op.inString("Storage Path");

// Outputs
const outError = op.outBoolNum("Error", false);
const outErrorMessage = op.outString("Error Message");
const outFileURL = op.outString("File URL");
const outSuccess = op.outTrigger("Success");
const outFailure = op.outTrigger("Failure");
const outIsLoading = op.outBool("Is Loading", false);

inTrigger.onTriggered = uploadFile;

function uploadFile() {
    const base64String = inBase64String.get();

    if (!base64String) {
        outError.set(true);
        outErrorMessage.set("Missing Base64 String!");
        return;
    }

    // Set loading status to true
    outIsLoading.set(true);

    // Extract MIME type from base64 string
    const mimeType = base64String.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1];

    // Create a reference to the file location
    const storageRef = firebase.storage().ref(inFilePath.get());

    // Extract the actual base64 data without the MIME type
    const base64Data = base64String.split(',')[1];

    // Convert base64 to byte arrays for blob creation
    const byteCharacters = atob(base64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);
        const byteNumbers = new Array(slice.length);

        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    // Create blob using the extracted MIME type
    const blob = new Blob(byteArrays, { type: mimeType });

    // Upload the file to Firebase Storage
    const uploadTask = storageRef.put(blob);

    uploadTask.on('state_changed', function(snapshot) {
        // You can add code here for upload progress
        // e.g., a progress bar could be updated with snapshot.bytesTransferred
    }, function(error) {
        // Handle unsuccessful uploads
        outError.set(true);
        outErrorMessage.set(error.message);
        outIsLoading.set(false);
        outFailure.trigger();
    }, function() {
        // Handle successful uploads
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            outError.set(false);
            outErrorMessage.set("");
            outFileURL.set(downloadURL);
            outIsLoading.set(false);
            outSuccess.trigger();
        });
    });
}


};

Ops.User.rambodc.FBUploadStorage.prototype = new CABLES.Op();
CABLES.OPS["81697f20-e7d1-47f3-add7-0f92ee7e81c5"]={f:Ops.User.rambodc.FBUploadStorage,objName:"Ops.User.rambodc.FBUploadStorage"};




// **************************************************************
// 
// Ops.User.rambodc.Test7
// 
// **************************************************************

Ops.User.rambodc.Test7 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Inputs
const inFunctionUrl = op.inString("Function URL", "");
const inTestData = op.inObject("Test Data", {});
const inTokenId = op.inString("Token ID", "");
const inTokenToggle = op.inBool("Token ON/OFF", false);
const inSendRequest = op.inTriggerButton("Send Request");

// Outputs
const outResponse = op.outString("Response", "");
const outFail = op.outTrigger("Fail");
const outSuccess = op.outTrigger("Success");

inSendRequest.onTriggered = () => {
    const headers = {
        'Content-Type': 'application/json'
    };

    // Include the token in the header if the toggle is on
    if (inTokenToggle.get()) {
        headers['Authorization'] = `Bearer ${inTokenId.get()}`;
    }

    fetch(inFunctionUrl.get(), {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(inTestData.get())
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        outResponse.set(JSON.stringify(data));
        outSuccess.trigger(); // Trigger success output
    })
    .catch(error => {
        console.error("Error in POST request:", error);
        outResponse.set(`Error: ${error.message}`);
        outFail.trigger(); // Trigger fail output
    });
};


};

Ops.User.rambodc.Test7.prototype = new CABLES.Op();
CABLES.OPS["fc519861-e30e-4ea2-a86d-53d79698f473"]={f:Ops.User.rambodc.Test7,objName:"Ops.User.rambodc.Test7"};




// **************************************************************
// 
// Ops.User.rambodc.Firebase_Auth3
// 
// **************************************************************

Ops.User.rambodc.Firebase_Auth3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Inputs
const inFirebaseCDN = op.inString("Firebase CDN URL", "https://www.gstatic.com/firebasejs/8.10.0/firebase.js");
const inConfiguration = op.inObject("Configuration");
const inEmailSignIn = op.inString("Email for Sign In", "");
const inPasswordSignIn = op.inString("Password for Sign In", "");
const inEmailSignUp = op.inString("Email for Sign Up", "");
const inPasswordSignUp = op.inString("Password for Sign Up", "");
const inTriggerSignIn = op.inTriggerButton("Sign in");
const inTriggerSignUp = op.inTriggerButton("Sign up");
const inTriggerSignOut = op.inTriggerButton("Sign out");

// Outputs
const outLoggedIn = op.outValueBool("Logged in", false);
const outUser = op.outObject("User");
const outUserSimple = op.outObject("User Simple"); // Simplified user object
const outLoginError = op.outObject("Authentication error");
const outInitialized = op.outValueBool("Initialized", false);
const outSigninSuccess = op.outTrigger("Signin Success");
const outSigninFail = op.outTrigger("Signin Fail");
const outSignupSuccess = op.outTrigger("Signup Success");
const outSignupFail = op.outTrigger("Signup Fail");
const outIdToken = op.outString("Firebase ID Token", "");

let firebaseApp;

// Load Firebase CDN and initialize Firebase
function loadFirebaseCDN() {
    return new Promise((resolve, reject) => {
        const scriptTag = document.createElement('script');
        scriptTag.src = inFirebaseCDN.get();
        scriptTag.onload = () => resolve();
        scriptTag.onerror = () => reject(new Error(`Failed to load ${scriptTag.src}`));
        document.head.appendChild(scriptTag);
    });
}

function initializeFirebase() {
    if (firebaseApp || !inConfiguration.get()) {
        outInitialized.set(true);
        return;
    }

    loadFirebaseCDN().then(() => {
        try {
            firebaseApp = firebase.initializeApp(inConfiguration.get());
            // Initialize Firebase Analytics here
            const analytics = firebase.analytics();
            outInitialized.set(true);
            setupAuthStateListener();
        } catch (e) {
            console.error("Error initializing Firebase: ", e);
            outInitialized.set(false);
        }
    }).catch((error) => {
        console.error("Firebase CDN load error: ", error);
        outInitialized.set(false);
    });
}


function setupAuthStateListener() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            outLoggedIn.set(true);
            outUser.set(user); // Set the entire user object
            // Set the simplified user object
            const simpleUser = {
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                emailVerified: user.emailVerified
            };
            outUserSimple.set(simpleUser);

            // Get ID token for the authenticated user
            user.getIdToken().then(token => {
                outIdToken.set(token); // Set the ID token to the output
            }).catch(error => {
                console.error("Error getting ID token: ", error);
            });
        } else {
            outLoggedIn.set(false);
            outUser.set(null);
            outUserSimple.set(null);
            outIdToken.set(""); // Clear the ID token if not logged in
        }
    });
}

// Initialize Firebase when the CDN URL or Configuration changes
inFirebaseCDN.onChange = initializeFirebase;
inConfiguration.onChange = initializeFirebase;

// Sign In functionality
inTriggerSignIn.onTriggered = signIn;

function signIn() {
    const email = inEmailSignIn.get();
    const password = inPasswordSignIn.get();

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            outSigninSuccess.trigger(); // Trigger on successful sign-in
            // Log the sign-in event with Firebase Analytics
            firebase.analytics().logEvent('login', { method: 'email' });
        }).catch((error) => {
            console.error("Sign-in error: ", error);
            outLoginError.set(error);
            outSigninFail.trigger(); // Trigger on sign-in failure
        });
}


// Sign Up functionality
inTriggerSignUp.onTriggered = signUp;

function signUp() {
    const email = inEmailSignUp.get();
    const password = inPasswordSignUp.get();

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User created successfully, now send verification email
            return userCredential.user.sendEmailVerification()
                .then(() => {
                    outSignupSuccess.trigger(); // Trigger on successful sign-up
                    console.log("Verification email sent.");
                });
        })
        .catch((error) => {
            console.error("Sign-up error: ", error);
            outLoginError.set(error);
            outSignupFail.trigger(); // Trigger on sign-up failure
        });
}

// Sign Out functionality
inTriggerSignOut.onTriggered = signOut;

function signOut() {
    firebase.auth().signOut()
        .then(() => {
            // Sign out successful
        }).catch((error) => {
            console.error("Sign-out error: ", error);
            outLoginError.set(error);
        });
}

};

Ops.User.rambodc.Firebase_Auth3.prototype = new CABLES.Op();
CABLES.OPS["27d043c1-337e-494f-bcc0-c1ea6e670cec"]={f:Ops.User.rambodc.Firebase_Auth3,objName:"Ops.User.rambodc.Firebase_Auth3"};




// **************************************************************
// 
// Ops.User.rambodc.String_to_Number
// 
// **************************************************************

Ops.User.rambodc.String_to_Number = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// inputs
const inString = op.inString("String to convert", "0");

// outputs
const outNumber = op.outNumber("Number");

// events
inString.onChange = onStringChanged;

// function
function onStringChanged() {
    // Parse the string to a number and output it
    const number = parseFloat(inString.get());
    if (isNaN(number)) {
        console.error("Invalid number string: ", inString.get());
        return;
    }
    outNumber.set(number);
}


};

Ops.User.rambodc.String_to_Number.prototype = new CABLES.Op();
CABLES.OPS["03750bb8-fab9-45ac-95c4-3833ff0a8489"]={f:Ops.User.rambodc.String_to_Number,objName:"Ops.User.rambodc.String_to_Number"};




// **************************************************************
// 
// Ops.Color.HexToRGB_v2
// 
// **************************************************************

Ops.Color.HexToRGB_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    hex = op.inString("Hex", "#ff0000"),
    asBytes = op.inValueBool("Bytes"),
    outR = op.outNumber("R"),
    outG = op.outNumber("G"),
    outB = op.outNumber("B");

function hexToR(h)
{
    return parseInt((cutHex(h)).substring(0, 2), 16) || 0;
}
function hexToG(h)
{
    return parseInt((cutHex(h)).substring(2, 4), 16) || 0;
}
function hexToB(h)
{
    return parseInt((cutHex(h)).substring(4, 6), 16) || 0;
}
function cutHex(h)
{
    return (h.charAt(0) == "#") ? h.substring(1, 7) : h;
}

hex.onChange = parse;
asBytes.onChange = parse;

function parse()
{
    let str = hex.get() || "";
    let r = hexToR(str);
    let g = hexToG(str);
    let b = hexToB(str);

    if (!asBytes.get())
    {
        r /= 255;
        g /= 255;
        b /= 255;
    }

    outR.set(r);
    outB.set(b);
    outG.set(g);
}


};

Ops.Color.HexToRGB_v2.prototype = new CABLES.Op();
CABLES.OPS["9877f198-8dac-48e5-9310-244ef1a8dec5"]={f:Ops.Color.HexToRGB_v2,objName:"Ops.Color.HexToRGB_v2"};




// **************************************************************
// 
// Ops.Devices.Browser.ColorScheme
// 
// **************************************************************

Ops.Devices.Browser.ColorScheme = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    outTheme = op.outString("Color Scheme", ""),
    outDark = op.outBoolNum("Dark Mode"),
    outLight = op.outBoolNum("Light Mode"),
    outSupported = op.outBoolNum("Supported");

update();

if (window.matchMedia)
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) =>
    {
        update();
    });

function update()
{
    outSupported.set(!!window.matchMedia);

    if (window.matchMedia)
    {
        const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        outTheme.set(dark ? "dark" : "light");

        outDark.set(dark);
        outLight.set(!dark);
    }
}


};

Ops.Devices.Browser.ColorScheme.prototype = new CABLES.Op();
CABLES.OPS["2c54d518-f110-4faf-afa9-436ffd5a6870"]={f:Ops.Devices.Browser.ColorScheme,objName:"Ops.Devices.Browser.ColorScheme"};




// **************************************************************
// 
// Ops.Json.SwitchObject
// 
// **************************************************************

Ops.Json.SwitchObject = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const inIndex = op.inValueInt("Object Index", 0);
const outObject = op.outObject("object out");

const NUM_PORTS = 8;
const objectPorts = [];

op.onLoaded = function () { indexChanged(); };
inIndex.onChange = indexChanged;

for (let i = 0; i < NUM_PORTS; i++)
{
    let port = op.inObject("object port " + i);
    port.inputNum = i;
    port.onChange = onPortChange.bind(port);
    objectPorts[i] = port;
}

function indexChanged()
{
    let index = Math.max(0, Math.floor(inIndex.get()));
    if (index < 0) index = 0;
    else if (index > NUM_PORTS - 1) index = NUM_PORTS - 1;

    outObject.setRef(objectPorts[index].get());
}

function onPortChange()
{
    if (this.inputNum != inIndex.get()) return;

    outObject.setRef(this.get());
}


};

Ops.Json.SwitchObject.prototype = new CABLES.Op();
CABLES.OPS["345d535e-267d-49fb-98c0-c8a8f9424160"]={f:Ops.Json.SwitchObject,objName:"Ops.Json.SwitchObject"};




// **************************************************************
// 
// Ops.Vars.VarSetObject_v2
// 
// **************************************************************

Ops.Vars.VarSetObject_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const val = op.inObject("Value", null);
op.varName = op.inDropDown("Variable", [], "", true);

new CABLES.VarSetOpWrapper(op, "object", val, op.varName);


};

Ops.Vars.VarSetObject_v2.prototype = new CABLES.Op();
CABLES.OPS["c7608375-5b45-4bca-87ef-d0c5e970779a"]={f:Ops.Vars.VarSetObject_v2,objName:"Ops.Vars.VarSetObject_v2"};




// **************************************************************
// 
// Ops.Sidebar.Toggle_v3
// 
// **************************************************************

Ops.Sidebar.Toggle_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const DEFAULT_VALUE_DEFAULT = true;

// inputs
const parentPort = op.inObject("link");
const labelPort = op.inString("Text", "Toggle");
const inputValuePort = op.inValueBool("Input", DEFAULT_VALUE_DEFAULT);
const setDefaultValueButtonPort = op.inTriggerButton("Set Default");
const defaultValuePort = op.inValueBool("Default", DEFAULT_VALUE_DEFAULT);
defaultValuePort.setUiAttribs({ "hidePort": true, "greyout": true });
const inGreyOut = op.inBool("Grey Out", false);
const inVisible = op.inBool("Visible", true);

// outputs
const siblingsPort = op.outObject("childs");
const valuePort = op.outBoolNum("Value", defaultValuePort.get());

// vars
const el = document.createElement("div");
el.dataset.op = op.id;
el.classList.add("cablesEle");
el.classList.add("sidebar__item");
el.classList.add("sidebar__toggle");
el.classList.add("sidebar__reloadable");

if (DEFAULT_VALUE_DEFAULT) el.classList.add("sidebar__toggle--active");

el.addEventListener("dblclick", function ()
{
    valuePort.set(defaultValuePort.get());
    inputValuePort.set(defaultValuePort.get());
});

const label = document.createElement("div");
label.classList.add("sidebar__item-label");
const labelText = document.createTextNode(labelPort.get());
label.appendChild(labelText);
el.appendChild(label);

const icon = document.createElement("div");
icon.classList.add("icon_toggle");
icon.addEventListener("click", onInputClick);
el.appendChild(icon);

const greyOut = document.createElement("div");
greyOut.classList.add("sidebar__greyout");
el.appendChild(greyOut);
greyOut.style.display = "none";

// events
parentPort.onChange = onParentChanged;
labelPort.onChange = onLabelTextChanged;
inputValuePort.onChange = onInputValuePortChanged;
op.onDelete = onDelete;
setDefaultValueButtonPort.onTriggered = setDefaultValue;

function setDefaultValue()
{
    const defaultValue = inputValuePort.get();

    defaultValuePort.set(defaultValue);
    valuePort.set(defaultValue);
    op.refreshParams();
}

function onInputClick()
{
    el.classList.toggle("sidebar__toggle--active");
    if (el.classList.contains("sidebar__toggle--active"))
    {
        valuePort.set(true);
        inputValuePort.set(true);
        icon.classList.add("icon_toggle_true");
        icon.classList.remove("icon_toggle_false");
    }
    else
    {
        icon.classList.remove("icon_toggle_true");
        icon.classList.add("icon_toggle_false");

        valuePort.set(false);
        inputValuePort.set(false);
    }
    op.refreshParams();
}

function onInputValuePortChanged()
{
    const inputValue = inputValuePort.get();
    if (inputValue)
    {
        el.classList.add("sidebar__toggle--active");
        valuePort.set(true);
    }
    else
    {
        el.classList.remove("sidebar__toggle--active");
        valuePort.set(false);
    }
}

function onLabelTextChanged()
{
    const text = labelPort.get();
    label.textContent = text;
    if (CABLES.UI) op.setUiAttrib({ "extendTitle": text });
}

function onParentChanged()
{
    siblingsPort.set(null);
    const parent = parentPort.get();
    if (parent && parent.parentElement)
    {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    }
    else if (el.parentElement) el.parentElement.removeChild(el);
}

function showElement(element)
{
    if (element) element.style.display = "block";
}

function hideElement(element)
{
    if (element) element.style.display = "none";
}

function onDelete()
{
    removeElementFromDOM(el);
}

function removeElementFromDOM(element)
{
    if (element && element.parentNode && element.parentNode.removeChild) element.parentNode.removeChild(el);
}

inGreyOut.onChange = function ()
{
    greyOut.style.display = inGreyOut.get() ? "block" : "none";
};

inVisible.onChange = function ()
{
    el.style.display = inVisible.get() ? "block" : "none";
};


};

Ops.Sidebar.Toggle_v3.prototype = new CABLES.Op();
CABLES.OPS["fb60ab7d-f2f2-4fc5-bcd0-88c6ed481908"]={f:Ops.Sidebar.Toggle_v3,objName:"Ops.Sidebar.Toggle_v3"};




// **************************************************************
// 
// Ops.Array.SubdivideArray3_v2
// 
// **************************************************************

Ops.Array.SubdivideArray3_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inArr = op.inArray("Points"),
    subDivs = op.inInt("Num Subdivs", 5),
    bezier = op.inValueBool("Smooth", true),
    inLoop = op.inValueBool("Loop", false),
    bezierEndPoints = op.inValueBool("Bezier Start/End Points", true),
    result = op.outArray("Result");

op.toWorkPortsNeedToBeLinked(inArr);

let arr = [];

subDivs.onChange =
    inLoop.onChange =
    bezier.onChange =
    inArr.onChange =
    bezierEndPoints.onChange = calc;

function ip(x0, x1, x2, t)// Bezier
{
    const r = (x0 * (1 - t) * (1 - t) + 2 * x1 * (1 - t) * t + x2 * t * t);
    return r;
}

function calc()
{
    inLoop.setUiAttribs({ "greyout": !bezier.get() });
    bezierEndPoints.setUiAttribs({ "greyout": !bezier.get() });

    if (!inArr.get())
    {
        result.set(null);
        return;
    }
    const subd = Math.floor(subDivs.get());
    const inPoints = inArr.get();

    if (inPoints.length < 3) return;

    let i = 0;
    let j = 0;
    let k = 0;
    let count = 0;

    if (subd > 0 && !bezier.get())
    {
        const newLen = (inPoints.length - 3) * subd + 3;
        if (newLen != arr.length)
        {
            arr.length = newLen;
        }

        count = 0;
        for (i = 0; i < inPoints.length - 3; i += 3)
        {
            for (j = 0; j < subd; j++)
            {
                for (k = 0; k < 3; k++)
                {
                    arr[count] =
                        inPoints[i + k] + (inPoints[i + k + 3] - inPoints[i + k]) * j / subd;
                    count++;
                }
            }
        }
        arr[newLen - 3] = inPoints[inPoints.length - 3];
        arr[newLen - 2] = inPoints[inPoints.length - 2];
        arr[newLen - 1] = inPoints[inPoints.length - 1];
    }
    else
    if (subd > 0 && bezier.get())
    {
        let newLen = (inPoints.length - 6) * (subd - 1);
        if (bezierEndPoints.get())newLen += 6;

        if (newLen != arr.length) arr.length = Math.floor(Math.abs(newLen));
        count = 0;

        if (bezierEndPoints.get())
        {
            arr[0] = inPoints[0];
            arr[1] = inPoints[1];
            arr[2] = inPoints[2];
            count = 3;
        }

        const doLoop = inLoop.get();

        function idx(i)
        {
            if (doLoop) return i % (inPoints.length - 3);
            else return i;
        }

        let endi = inPoints.length - 3;
        if (doLoop)endi = inPoints.length;

        for (i = 3; i < endi; i += 3)
        {
            for (j = 0; j < subd; j++)
            {
                for (k = 0; k < 3; k++)
                {
                    const p = ip(
                        (inPoints[idx(i + k - 3)] + inPoints[idx(i + k)]) / 2,
                        inPoints[idx(i + k + 0)],
                        (inPoints[idx(i + k + 3)] + inPoints[idx(i + k + 0)]) / 2,
                        j / subd
                    );
                    arr[count] = p;
                    count++;
                }
            }
        }

        if (doLoop)
        {
            arr[count + 0] = arr[0];
            arr[count + 1] = arr[1];
            arr[count + 2] = arr[2];
            count++; count++; count++;
        }

        if (bezierEndPoints.get())
        {
            arr[count - 0] = inPoints[inPoints.length - 3];
            arr[count + 1] = inPoints[inPoints.length - 2];
            arr[count + 2] = inPoints[inPoints.length - 1];
        }
    }
    if (subd == 0)
    {
        arr = Array.from(inPoints);
    }

    // result.set(null);
    result.setRef(arr);
}


};

Ops.Array.SubdivideArray3_v2.prototype = new CABLES.Op();
CABLES.OPS["d8bb5727-35e4-4e2a-999b-112ebc659720"]={f:Ops.Array.SubdivideArray3_v2,objName:"Ops.Array.SubdivideArray3_v2"};




// **************************************************************
// 
// Ops.Array.RandomNumbersArray_v4
// 
// **************************************************************

Ops.Array.RandomNumbersArray_v4 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    numValues = op.inValueInt("Num Values", 100),
    inModeSwitch = op.inSwitch("Mode", ["A", "AB", "ABC", "ABCD"], "A"),
    inSeed = op.inValueFloat("Random Seed ", 0),
    inInteger = op.inBool("Integer", false),
    inClosed = op.inValueBool("Last == First"),
    outValues = op.outArray("Array Out"),
    outTotalPoints = op.outNumber("Chunks Amount"),
    outArrayLength = op.outNumber("Array length");

const letters = ["A", "B", "C", "D"];
const arr = [];

const inArray = letters.map(function (value)
{
    return {
        "min": op.inValueFloat("Min " + value, -1),
        "max": op.inValueFloat("Max " + value, 1),
    };
});

for (let i = 0; i < inArray.length; i += 1)
{
    const portObj = inArray[i];
    const keys = Object.keys(portObj);

    op.setPortGroup("Value Range " + letters[i], keys.map(function (key) { return portObj[key]; }));

    if (i > 0) keys.forEach(function (key) { portObj[key].setUiAttribs({ "greyout": true }); });
}

inModeSwitch.onChange = function ()
{
    const mode = inModeSwitch.get();
    const modes = inModeSwitch.uiAttribs.values;

    outValues.setUiAttribs({ "stride": inModeSwitch.get().length });

    const index = modes.indexOf(mode);

    inArray.forEach(function (portObj, i)
    {
        const keys = Object.keys(portObj);
        keys.forEach(function (key, j)
        {
            if (i <= index) portObj[key].setUiAttribs({ "greyout": false });
            else portObj[key].setUiAttribs({ "greyout": true });
        });
    });
    init();
};

outValues.ignoreValueSerialize = true;

inClosed.onChange =
    numValues.onChange =
    inSeed.onChange =
    inInteger.onChange = init;

const minMaxArray = [];

init();

function init()
{
    const mode = inModeSwitch.get();
    const modes = inModeSwitch.uiAttribs.values;
    const index = modes.indexOf(mode);

    const n = Math.floor(Math.abs(numValues.get()));
    Math.randomSeed = inSeed.get();

    op.setUiAttrib({ "extendTitle": n + "*" + mode.length });

    const dimension = index + 1;
    const length = n * dimension;

    arr.length = length;
    const tupleLength = length / dimension;
    const isInteger = inInteger.get();

    // optimization: we only need to fetch the max min for each component once
    for (let i = 0; i < dimension; i += 1)
    {
        const portObj = inArray[i];
        const max = portObj.max.get();
        const min = portObj.min.get();
        minMaxArray[i] = [min, max];
    }

    for (let j = 0; j < tupleLength; j += 1)
    {
        for (let k = 0; k < dimension; k += 1)
        {
            const min = minMaxArray[k][0];
            const max = minMaxArray[k][1];
            const index = j * dimension + k;

            if (isInteger) arr[index] = Math.floor(Math.seededRandom() * ((max + 1) - min) + min);
            else arr[index] = Math.seededRandom() * (max - min) + min;
        }
    }

    if (inClosed.get() && arr.length > dimension)
    {
        for (let i = 0; i < dimension; i++)
            arr[arr.length - 3 + i] = arr[i];
    }

    outValues.setRef(arr);
    outTotalPoints.set(arr.length / dimension);
    outArrayLength.set(arr.length);
}

// assign change handler
inArray.forEach(function (obj)
{
    Object.keys(obj).forEach(function (key)
    {
        const x = obj[key];
        x.onChange = init;
    });
});


};

Ops.Array.RandomNumbersArray_v4.prototype = new CABLES.Op();
CABLES.OPS["8a9fa2c6-c229-49a9-9dc8-247001539217"]={f:Ops.Array.RandomNumbersArray_v4,objName:"Ops.Array.RandomNumbersArray_v4"};




// **************************************************************
// 
// Ops.Gl.Meshes.SplineMesh_v2
// 
// **************************************************************

Ops.Gl.Meshes.SplineMesh_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("Render"),
    inPoints = op.inArray("Points"),
    inHardEdges = op.inBool("Tesselate Edges", false),
    inRenderMesh = op.inBool("Render Mesh", true),
    next = op.outTrigger("Next");

const geom = new CGL.Geometry("splinemesh_2");
geom.vertices = [];
geom.clear();

let thePoints = [];
const cgl = op.patch.cgl;
let points = new Float32Array();
let points2 = new Float32Array();
let points3 = new Float32Array();
let doDraw = new Float32Array();
let splineIndex = null;

let pointsProgress = new Float32Array();
const pointsDoDraw = new Float32Array();
const arrEdges = [];

const verts = [0, 0, 0];

let mesh = new CGL.Mesh(cgl, geom);
mesh.addVertexNumbers = true;

let rebuildLater = true;

inHardEdges.onChange =
    inPoints.onChange = () => { rebuildLater = true; };

render.onTriggered = renderMesh;

let shader = null;

function renderMesh()
{
    if (rebuildLater)rebuild();
    if (mesh && inRenderMesh.get())
    {
        if (shader != cgl.getShader())
        {
            shader = cgl.getShader();
            if (!shader) return;
            if (shader.getName() != "splinemesh_material") op.setUiError("nosplinemat", "Splinemesh needs a SplineMeshMaterial!");
            else op.setUiError("nosplinemat");

            shader = cgl.getShader();
        }

        if (verts.length > 0) mesh.render(shader);
    }

    next.trigger();
}

function buildMesh()
{
    verts.length = 0;

    const max = 1;
    const min = -max;

    for (let i = 0; i < thePoints.length / 3; i++)
    {
        verts.push(
            max, min, 0, 0, min, 0, max, max, 0, 0, min, 0, 0, max, 0, max, max, 0
        );
    }
    geom.vertices = verts;

    // if(mesh)mesh.dispose();
    if (!mesh) mesh = new CGL.Mesh(cgl, geom);

    mesh.addVertexNumbers = true;
    mesh.setGeom(geom);
    mesh.addVertexNumbers = true;
}

function rebuild()
{
    const inpoints = inPoints.get();

    if (!inpoints || inpoints.length === 0)
    {
        mesh = null;
        return;
    }

    if (inpoints[0].length)
    {
        const arr = [];
        splineIndex = [];
        let count = 0;

        for (let i = 0; i < inpoints.length; i++)
        {
            for (let j = 0; j < inpoints[i].length / 3; j++)
            {
                splineIndex[(count - 3) / 3] = i;// (i) / inpoints.length;

                arr[count++] = inpoints[i][j * 3 + 0];
                arr[count++] = inpoints[i][j * 3 + 1];
                arr[count++] = inpoints[i][j * 3 + 2];
            }
        }
        thePoints = arr;
    }
    else
    {
        splineIndex = null;
        thePoints = inpoints;
    }

    if (inHardEdges.get()) thePoints = tessEdges(thePoints);

    buildMesh();

    const newLength = thePoints.length * 6;
    let count = 0;
    let lastIndex = 0;
    let drawable = 0;

    if (points.length != newLength)
    {
        points = new Float32Array(newLength);
        points2 = new Float32Array(newLength);
        points3 = new Float32Array(newLength);

        doDraw = new Float32Array(newLength / 3);
        pointsProgress = new Float32Array(newLength / 3);

        for (let i = 0; i < newLength / 3; i++) pointsProgress[i] = i / (newLength / 3);
    }

    for (let i = 0; i < thePoints.length / 3; i++)
    {
        if (splineIndex)
        {
            if (i > 1 && lastIndex != splineIndex[i]) drawable = 0.0;
            else drawable = 1.0;
            lastIndex = splineIndex[i];
        }
        else drawable = 1.0;

        for (let j = 0; j < 6; j++)
        {
            doDraw[count / 3] = drawable;

            for (let k = 0; k < 3; k++)
            {
                points[count] = thePoints[(Math.max(0, i - 1)) * 3 + k];
                points2[count] = thePoints[(i + 0) * 3 + k];
                points3[count] = thePoints[(i + 1) * 3 + k];
                count++;
            }
        }
    }

    mesh.setAttribute("spline", points, 3);
    mesh.setAttribute("spline2", points2, 3);
    mesh.setAttribute("spline3", points3, 3);
    mesh.setAttribute("splineDoDraw", doDraw, 1);
    mesh.setAttribute("splineProgress", pointsProgress, 1);

    rebuildLater = false;
}

function ip(a, b, p)
{
    return a + p * (b - a);
}

function tessEdges(oldArr)
{
    let count = 0;
    const step = 0.001;
    const oneMinusStep = 1 - step;
    const l = oldArr.length * 3 - 3;
    arrEdges.length = l;

    const tessSplineIndex = [];

    if (splineIndex) tessSplineIndex[0] = splineIndex[1];

    for (let i = 0; i < oldArr.length - 3; i += 3)
    {
        arrEdges[count++] = oldArr[i + 0];
        arrEdges[count++] = oldArr[i + 1];
        arrEdges[count++] = oldArr[i + 2];
        if (splineIndex) tessSplineIndex[count / 3] = splineIndex[i / 3];

        arrEdges[count++] = ip(oldArr[i + 0], oldArr[i + 3], step);
        arrEdges[count++] = ip(oldArr[i + 1], oldArr[i + 4], step);
        arrEdges[count++] = ip(oldArr[i + 2], oldArr[i + 5], step);
        if (splineIndex) tessSplineIndex[count / 3] = splineIndex[i / 3];

        arrEdges[count++] = ip(oldArr[i + 0], oldArr[i + 3], oneMinusStep);
        arrEdges[count++] = ip(oldArr[i + 1], oldArr[i + 4], oneMinusStep);
        arrEdges[count++] = ip(oldArr[i + 2], oldArr[i + 5], oneMinusStep);
        if (splineIndex) tessSplineIndex[count / 3] = splineIndex[i / 3];
    }

    if (splineIndex) splineIndex = tessSplineIndex;

    return arrEdges;
}


};

Ops.Gl.Meshes.SplineMesh_v2.prototype = new CABLES.Op();
CABLES.OPS["287abf6c-5501-4bc9-a627-70ec3c3766d2"]={f:Ops.Gl.Meshes.SplineMesh_v2,objName:"Ops.Gl.Meshes.SplineMesh_v2"};




// **************************************************************
// 
// Ops.Gl.Meshes.SplineMeshMaterial_v2
// 
// **************************************************************

Ops.Gl.Meshes.SplineMeshMaterial_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"splinemat_frag":"IN vec2 texCoord;\nIN float splineDoDrawFrag;\nUNI vec4 color;\nUNI sampler2D tex;\nUNI sampler2D texMask;\n\n{{MODULES_HEAD}}\n\nvoid main()\n{\n    vec4 col=color;\n\n    #ifdef USE_TEXTURE\n        #ifdef TEX_COLORIZE\n            col*=texture(tex,texCoord);\n        #endif\n        #ifndef TEX_COLORIZE\n            col=texture(tex,texCoord);\n        #endif\n    #endif\n\n    col.a=color.a;\n\n    #ifdef USE_TEXMASK\n        col.a*=texture(texMask,texCoord).r;\n        if(col.a==0.0) discard;\n    #endif\n\n    {{MODULE_COLOR}}\n\n    // if(splineDoDrawFrag==0.0) col.rgb=vec3(1.0,0.0,0.0);\n    if(splineDoDrawFrag==0.0) discard;\n\n    outColor = col;\n}","splinemat_vert":"{{MODULES_HEAD}}\n\nIN vec3 vPosition;\nIN float attrVertIndex;\nIN float splineProgress;\nIN vec3 spline,spline2,spline3;\nIN float splineDoDraw;\n\nOUT float splineDoDrawFrag;\nOUT vec2 texCoord;\nOUT vec3 norm;\nUNI mat4 projMatrix;\nUNI mat4 viewMatrix;\nUNI mat4 modelMatrix;\n\nUNI float width;\nUNI float texOffset;\nUNI float aspect;\n\n#define PI 3.1415926538\n\nvec2 rotate(vec2 v, float a)\n{\n\tfloat s = sin(a);\n\tfloat c = cos(a);\n\tmat2 m = mat2(c, -s, s, c);\n\treturn m * v;\n}\n\nvec2 fix( vec4 i )\n{\n    vec2 res = i.xy / i.w;\n    return res;\n}\n\nvoid main()\n{\n    texCoord=vPosition.xy;\n    texCoord.y=texCoord.y*0.5+0.5;\n    #ifdef TEX_MAP_FULL\n        texCoord.x=splineProgress;\n    #endif\n    texCoord.x+=texOffset;\n\n    mat4 mMatrix=modelMatrix;\n    mat4 mvMatrix=viewMatrix * mMatrix;\n\n    splineDoDrawFrag=splineDoDraw;\n\n    // vec4 pos=vec4((spline2+spline3+spline)/3.0*vPosition,1.0);\n    vec4 pos=vec4(spline2,1.0);\n\n    {{MODULE_VERTEX_POSITION}}\n\n    vec4 finalPosition  = projMatrix * mvMatrix * (vec4(spline2,1.0));\n    vec4 finalPosition2 = projMatrix * mvMatrix * (vec4(spline3,1.0));\n\n    vec2 screenPos =fix(projMatrix * mvMatrix * vec4(spline,1.0));\n    vec2 screenPos2=fix(projMatrix * mvMatrix * vec4(spline2,1.0));\n    vec2 screenPos3=fix(projMatrix * mvMatrix * vec4(spline3,1.0));\n\n    float wid=width/10.0;\n\n    #ifndef PERSPWIDTH\n        wid=width*finalPosition.w*0.0025;\n    #endif\n\n    vec2 dir1 = normalize( screenPos2 - screenPos );\n    vec2 dir2 = normalize( screenPos3 - screenPos2 );\n\n\tif( screenPos2 == screenPos ) dir1 = normalize( screenPos3 - screenPos2 );\n\n    vec2 normal = vec2( -dir1.y/aspect, dir1.x ) * 0.5 * wid;\n    vec2 normal2 = vec2( -dir2.y/aspect, dir2.x ) * 0.5 * wid;\n\n    vec4 offset = vec4( mix(normal,normal2,vPosition.x) * vPosition.y, 0.0, 1.0 );\n\n    finalPosition = mix(finalPosition,finalPosition2,vPosition.x);\n\tfinalPosition.xy += offset.xy;\n\n    gl_Position = finalPosition;\n}\n",};
const
    render = op.inTrigger("Render"),
    inWidth = op.inFloat("Width", 0.2),
    inPerspective = op.inBool("Width Perspective", true),
    inTexture = op.inTexture("Texture"),
    inTextureMask = op.inTexture("Texture Mask"),
    inTexMap = op.inSwitch("Mapping", ["Full", "Face"], "Full"),
    inTexColorize = op.inBool("Colorize Texture", false),
    inTexOffset = op.inFloat("Offset", 0),
    r = op.inValueSlider("r", Math.random()),
    g = op.inValueSlider("g", Math.random()),
    b = op.inValueSlider("b", Math.random()),
    a = op.inValueSlider("a", 1),
    trigger = op.outTrigger("Trigger"),
    shaderOut = op.outObject("Shader");

r.setUiAttribs({ "colorPick": true });
shaderOut.ignoreValueSerialize = true;

const cgl = op.patch.cgl;

op.toWorkPortsNeedToBeLinked(render);
op.setPortGroup("Color", [r, g, b, a]);
op.setPortGroup("Texture", [inTexture, inTexMap, inTexColorize]);

const shader = new CGL.Shader(cgl, "splinemesh_material", this);
shader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]);
shader.setSource(attachments.splinemat_vert, attachments.splinemat_frag);
shaderOut.set(shader);

const uniTex = shader.addUniformFrag("t", "tex");
const uniTexMask = shader.addUniformFrag("t", "texMask");

let aspect = 1.7777;

shader.addUniformFrag("4f", "color", r, g, b, a);
shader.addUniformFrag("f", "width", inWidth);
shader.addUniformFrag("f", "texOffset", inTexOffset);
shader.addUniformFrag("f", "aspect", aspect);
shader.toggleDefine("PERSPWIDTH", inPerspective);
shader.toggleDefine("USE_TEXTURE", inTexture);
shader.toggleDefine("TEX_COLORIZE", inTexColorize);
shader.toggleDefine("USE_TEXMASK", inTextureMask);

inTexMap.on("change", updateMapping);

render.onTriggered = doRender;
updateMapping();

function doRender()
{
    if (!shader) return;

    const vp = op.patch.cgl.getViewPort();
    const newAspect = vp[2] / vp[3];
    if (newAspect != aspect)
    {
        aspect = newAspect;
        shader.addUniformFrag("f", "aspect", aspect);
    }

    cgl.pushShader(shader);
    shader.popTextures();

    if (uniTex && inTexture.get()) shader.pushTexture(uniTex, inTexture.get().tex);
    if (uniTexMask && inTextureMask.get()) shader.pushTexture(uniTexMask, inTextureMask.get().tex);

    trigger.trigger();

    cgl.popShader();
}

function updateMapping()
{
    shader.toggleDefine("TEX_MAP_FULL", inTexMap.get() === "Full");
}


};

Ops.Gl.Meshes.SplineMeshMaterial_v2.prototype = new CABLES.Op();
CABLES.OPS["5ff7c643-cbea-44cc-9f34-fb18a44bcfff"]={f:Ops.Gl.Meshes.SplineMeshMaterial_v2,objName:"Ops.Gl.Meshes.SplineMeshMaterial_v2"};




// **************************************************************
// 
// Ops.Gl.GradientTexture
// 
// **************************************************************

Ops.Gl.GradientTexture = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const inGrad = op.inGradient("Gradient"),
    inDir = op.inValueSelect("Direction", ["X", "Y", "Radial"], "X"),
    inSmoothstep = op.inValueBool("Smoothstep", false),
    inStep = op.inBool("Step", false),
    inFlip = op.inBool("Flip", false),
    inSRGB = op.inBool("sRGB", false),
    inOklab = op.inBool("Oklab", false),
    inSize = op.inValueInt("Size", 256),
    tfilter = op.inSwitch("filter", ["nearest", "linear", "mipmap"], "linear"),
    twrap = op.inValueSelect("wrap", ["clamp to edge", "repeat", "mirrored repeat"], "clamp to edge"),
    inGradArray = op.inArray("Gradient Array"),
    inRandom = op.inTriggerButton("Randomize Colors"),
    outTex = op.outTexture("Texture"),
    outColors = op.outArray("Colors", null, 3),
    outColorPos = op.outArray("Colors Pos", null, 1);

const cgl = op.patch.cgl;

inGrad.setUiAttribs({ "editShortcut": true });

twrap.onChange =
    tfilter.onChange =
    inStep.onChange =
    inFlip.onChange =
    inSRGB.onChange =
    inOklab.onChange =
    inSize.onChange = inGrad.onChange = inSmoothstep.onChange = inDir.onChange = inGradArray.onChange = update;

inGrad.set("{\"keys\" : [{\"pos\":0,\"r\":0,\"g\":0,\"b\":0},{\"pos\":1,\"r\":1,\"g\":1,\"b\":1}]}");

op.onLoaded = update;

inRandom.onTriggered = () =>
{
    const keys = parseKeys();
    if (keys)
    {
        keys.forEach((key) =>
        {
            key.r = Math.random();
            key.g = Math.random();
            key.b = Math.random();
        });
        const newKeys = JSON.stringify({ "keys": keys });
        inGrad.set(newKeys);
    }
};

function rgbToOklab(r, g, b)
{
    let l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
    let m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
    let s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;
    l = Math.cbrt(l); m = Math.cbrt(m); s = Math.cbrt(s);
    return [
        l * +0.2104542553 + m * +0.7936177850 + s * -0.0040720468,
        l * +1.9779984951 + m * -2.4285922050 + s * +0.4505937099,
        l * +0.0259040371 + m * +0.7827717662 + s * -0.8086757660
    ];
}

function oklabToRGB(L, a, b)
{
    let l = L + a * +0.3963377774 + b * +0.2158037573;
    let m = L + a * -0.1055613458 + b * -0.0638541728;
    let s = L + a * -0.0894841775 + b * -1.2914855480;
    l **= 3; m **= 3; s **= 3;
    let rgb_r = l * +4.0767416621 + m * -3.3077115913 + s * +0.2309699292;
    let rgb_g = l * -1.2684380046 + m * +2.6097574011 + s * -0.3413193965;
    let rgb_b = l * -0.0041960863 + m * -0.7034186147 + s * +1.7076147010;
    rgb_r = CABLES.clamp(rgb_r, 0, 1); rgb_g = CABLES.clamp(rgb_g, 0, 1); rgb_b = CABLES.clamp(rgb_b, 0, 1);
    return [rgb_r, rgb_g, rgb_b];
}

function lin2srgb(r, g, b)
{
    r /= 255;
    const thr = 0.0031308;
    let c_loR = 12.92 * r;
    let c_hiR = 1.055 * Math.pow(r, 0.41666) - 0.055;
    return ((r < thr) ? c_loR : c_hiR) * 255;
}

function update()
{
    const keys = parseKeys();
    if (keys) updateGradient(keys);
}

function parseKeys()
{
    let keys = null;
    op.setUiError("nodata", null);
    op.setUiError("parse", null);

    if (Array.isArray(inGradArray.get()))
    {
        keys = inGradArray.get();
    }
    else
    {
        let grad = null;
        if (!inGrad.get() || inGrad.get() === "")
        {
            op.setUiError("nodata", "gradient no data");
            return null;
        }

        try
        {
            grad = JSON.parse(inGrad.get());
        }
        catch (e)
        {
            op.setUiError("parse", "could not parse gradient data");
        }

        if (!grad || !grad.keys)
        {
            op.setUiError("nodata", "gradient no data");
            return null;
        }
        keys = grad.keys;
    }
    return keys;
}

function updateGradient(keys)
{
    let width = Math.round(inSize.get());
    if (width < 4) width = 4;

    inGrad.setUiAttribs(
        {
            "editShortcut": true,
            "gradEditSmoothstep": inSmoothstep.get(),
            "gradEditStep": inStep.get(),
            "gradOklab": inOklab.get(),

        });

    let selectedWrap = 0;
    let selectedFilter = 0;
    if (twrap.get() == "repeat") selectedWrap = CGL.Texture.WRAP_REPEAT;
    else if (twrap.get() == "mirrored repeat") selectedWrap = CGL.Texture.WRAP_MIRRORED_REPEAT;
    else if (twrap.get() == "clamp to edge") selectedWrap = CGL.Texture.WRAP_CLAMP_TO_EDGE;

    if (tfilter.get() == "nearest") selectedFilter = CGL.Texture.FILTER_NEAREST;
    else if (tfilter.get() == "linear") selectedFilter = CGL.Texture.FILTER_LINEAR;
    else if (tfilter.get() == "mipmap") selectedFilter = CGL.Texture.FILTER_MIPMAP;

    const tex = new CGL.Texture(cgl);

    if (inDir.get() == "X" || inDir.get() == "Y")
    {
        const pixels = new Uint8Array(width * 4);

        for (let i = 0; i < keys.length - 1; i++)
        {
            const keyA = keys[i];
            const keyB = keys[i + 1];

            for (let x = keyA.pos * width; x < keyB.pos * width; x++)
            {
                let p = CABLES.map(x, keyA.pos * width, keyB.pos * width, 0, 1);
                if (inStep.get())p = Math.round(p);
                if (inSmoothstep.get()) p = CABLES.smoothStep(p);
                x = Math.round(x);

                let xx = x;
                if (inFlip.get())xx = width - x - 1;

                if (inOklab.get())
                {
                    const klabA = rgbToOklab(keyA.r, keyA.g, keyA.b);
                    const labA_r = klabA[0];
                    const labA_g = klabA[1];
                    const labA_b = klabA[2];

                    const klabB = rgbToOklab(keyB.r, keyB.g, keyB.b);
                    const labB_r = klabB[0];
                    const labB_g = klabB[1];
                    const labB_b = klabB[2];

                    const l = ((p * labB_r + (1.0 - p) * labA_r));
                    const a = ((p * labB_g + (1.0 - p) * labA_g));
                    const b = ((p * labB_b + (1.0 - p) * labA_b));

                    const pixCol = oklabToRGB(l, a, b);
                    pixels[xx * 4 + 0] = Math.round(pixCol[0] * 255);
                    pixels[xx * 4 + 1] = Math.round(pixCol[1] * 255);
                    pixels[xx * 4 + 2] = Math.round(pixCol[2] * 255);
                }
                else
                {
                    pixels[xx * 4 + 0] = Math.round((p * keyB.r + (1.0 - p) * keyA.r) * 255);
                    pixels[xx * 4 + 1] = Math.round((p * keyB.g + (1.0 - p) * keyA.g) * 255);
                    pixels[xx * 4 + 2] = Math.round((p * keyB.b + (1.0 - p) * keyA.b) * 255);
                }

                if (typeof keyA.a !== "undefined" && typeof keyB.a !== "undefined")
                {
                    const alpha = Math.round((p * keyB.a + (1.0 - p) * keyA.a) * 255);
                    pixels[xx * 4 + 3] = alpha;
                }
                else
                {
                    pixels[xx * 4 + 3] = Math.round(255);
                }
            }
        }

        if (inSRGB.get())
            for (let i = 0; i < pixels.length; i += 4)
            {
                pixels[i + 0] = lin2srgb(pixels[i + 0]);
                pixels[i + 1] = lin2srgb(pixels[i + 1]);
                pixels[i + 2] = lin2srgb(pixels[i + 2]);
            }

        if (inDir.get() == "X") tex.initFromData(pixels, width, 1, selectedFilter, selectedWrap);
        if (inDir.get() == "Y") tex.initFromData(pixels, 1, width, selectedFilter, selectedWrap);
    }

    if (inDir.get() == "Radial")
    {
        const pixels = new Uint8Array(width * width * 4);

        const animR = new CABLES.Anim();
        const animG = new CABLES.Anim();
        const animB = new CABLES.Anim();

        for (let i = 0; i < keys.length - 1; i++)
        {
            animR.setValue(keys[i].pos, keys[i].r);
            animG.setValue(keys[i].pos, keys[i].g);
            animB.setValue(keys[i].pos, keys[i].b);
        }

        for (let x = 0; x < width; x++)
        {
            for (let y = 0; y < width; y++)
            {
                const dx = x - (width - 1) / 2;
                const dy = y - (width - 1) / 2;
                let pos = Math.sqrt(dx * dx + dy * dy) / (width) * 2;

                if (inSmoothstep.get()) pos = CABLES.smoothStep(pos);

                pixels[(x * 4) + (y * 4 * width) + 0] = animR.getValue(pos) * 255;
                pixels[(x * 4) + (y * 4 * width) + 1] = animG.getValue(pos) * 255;
                pixels[(x * 4) + (y * 4 * width) + 2] = animB.getValue(pos) * 255;
                pixels[(x * 4) + (y * 4 * width) + 3] = Math.round(255);
            }
        }

        if (inSRGB.get())
            for (let i = 0; i < pixels.length; i += 4)
            {
                pixels[i + 0] = lin2srgb(pixels[i + 0]);
                pixels[i + 1] = lin2srgb(pixels[i + 1]);
                pixels[i + 2] = lin2srgb(pixels[i + 2]);
            }

        tex.initFromData(pixels, width, width, selectedFilter, selectedWrap);
    }

    const colorArr = [];
    for (let i = 0; i < keys.length - 1; i++)
    {
        colorArr.push(keys[i].r, keys[i].g, keys[i].b);
    }

    const colorPosArr = [];
    for (let i = 0; i < keys.length - 1; i++)
    {
        colorPosArr.push(keys[i].pos);
    }

    outColors.set(colorArr);
    outColorPos.set(colorPosArr);

    // outTex.set(null);
    outTex.setRef(tex);
}


};

Ops.Gl.GradientTexture.prototype = new CABLES.Op();
CABLES.OPS["01380a50-2dbb-4465-ae80-86349b0b717a"]={f:Ops.Gl.GradientTexture,objName:"Ops.Gl.GradientTexture"};




// **************************************************************
// 
// Ops.Trigger.Sequence
// 
// **************************************************************

Ops.Trigger.Sequence = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("exe"),
    cleanup = op.inTriggerButton("Clean up connections");

const
    exes = [],
    triggers = [],
    num = 16;

let
    updateTimeout = null,
    connectedOuts = [];

exe.onTriggered = triggerAll;
cleanup.onTriggered = clean;
cleanup.setUiAttribs({ "hideParam": true, "hidePort": true });

for (let i = 0; i < num; i++)
{
    const p = op.outTrigger("trigger " + i);
    triggers.push(p);
    p.onLinkChanged = updateButton;

    if (i < num - 1)
    {
        let newExe = op.inTrigger("exe " + i);
        newExe.onTriggered = triggerAll;
        exes.push(newExe);
    }
}

updateConnected();

function updateConnected()
{
    connectedOuts.length = 0;
    for (let i = 0; i < triggers.length; i++)
        if (triggers[i].links.length > 0) connectedOuts.push(triggers[i]);
}

function updateButton()
{
    updateConnected();
    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() =>
    {
        let show = false;
        for (let i = 0; i < triggers.length; i++)
            if (triggers[i].links.length > 1) show = true;

        cleanup.setUiAttribs({ "hideParam": !show });

        if (op.isCurrentUiOp()) op.refreshParams();
    }, 60);
}

function triggerAll()
{
    // for (let i = 0; i < triggers.length; i++) triggers[i].trigger();
    for (let i = 0; i < connectedOuts.length; i++) connectedOuts[i].trigger();
}

function clean()
{
    let count = 0;
    for (let i = 0; i < triggers.length; i++)
    {
        let removeLinks = [];

        if (triggers[i].links.length > 1)
            for (let j = 1; j < triggers[i].links.length; j++)
            {
                while (triggers[count].links.length > 0) count++;

                removeLinks.push(triggers[i].links[j]);
                const otherPort = triggers[i].links[j].getOtherPort(triggers[i]);
                op.patch.link(op, "trigger " + count, otherPort.op, otherPort.name);
                count++;
            }

        for (let j = 0; j < removeLinks.length; j++) removeLinks[j].remove();
    }
    updateButton();
    updateConnected();
}


};

Ops.Trigger.Sequence.prototype = new CABLES.Op();
CABLES.OPS["a466bc1f-06e9-4595-8849-bffb9fe22f99"]={f:Ops.Trigger.Sequence,objName:"Ops.Trigger.Sequence"};




// **************************************************************
// 
// Ops.Gl.ImageCompose.ImageCompose_v4
// 
// **************************************************************

Ops.Gl.ImageCompose.ImageCompose_v4 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"imgcomp_frag":"IN vec2 texCoord;\nUNI vec4 bgColor;\nUNI sampler2D tex;\n#ifdef USE_UVTEX\nUNI sampler2D UVTex;\n#endif\n\nvoid main()\n{\n\n    #ifndef USE_TEX\n        outColor=bgColor;\n    #endif\n    #ifdef USE_TEX\n        #ifndef USE_UVTEX\n        outColor=texture(tex,texCoord);\n        #else\n        outColor=texture(tex,texture(UVTex,texCoord).xy);\n        #endif\n    #endif\n\n\n\n}\n",};
const
    cgl = op.patch.cgl,
    render = op.inTrigger("Render"),
    inTex = op.inTexture("Base Texture"),
    inUVTex = op.inTexture("UV Texture"),
    inSize = op.inSwitch("Size", ["Auto", "Canvas", "Manual"], "Auto"),
    width = op.inValueInt("Width", 640),
    height = op.inValueInt("Height", 480),
    inFilter = op.inSwitch("Filter", ["nearest", "linear", "mipmap"], "linear"),
    inWrap = op.inValueSelect("Wrap", ["clamp to edge", "repeat", "mirrored repeat"], "repeat"),
    aniso = op.inSwitch("Anisotropic", ["0", "1", "2", "4", "8", "16"], "0"),

    inPixelFormat = op.inDropDown("Pixel Format", CGL.Texture.PIXELFORMATS, CGL.Texture.PFORMATSTR_RGBA8UB),

    r = op.inValueSlider("R", 0),
    g = op.inValueSlider("G", 0),
    b = op.inValueSlider("B", 0),
    a = op.inValueSlider("A", 0),

    trigger = op.outTrigger("Next"),
    texOut = op.outTexture("texture_out", CGL.Texture.getEmptyTexture(cgl)),
    outRatio = op.outNumber("Aspect Ratio"),
    outWidth = op.outNumber("Texture Width"),
    outHeight = op.outNumber("Texture Height");

op.setPortGroup("Texture Size", [inSize, width, height]);
op.setPortGroup("Texture Parameters", [inWrap, aniso, inFilter, inPixelFormat]);

r.setUiAttribs({ "colorPick": true });
op.setPortGroup("Color", [r, g, b, a]);

op.toWorkPortsNeedToBeLinked(render);

const prevViewPort = [0, 0, 0, 0];
let effect = null;
let tex = null;
let reInitEffect = true;
let isFloatTex = false;
let copyShader = null;
let copyShaderTexUni = null;
let copyShaderUVTexUni = null;
let copyShaderRGBAUni = null;

inWrap.onChange =
inFilter.onChange =
aniso.onChange =
inPixelFormat.onChange = reInitLater;

inTex.onLinkChanged =
inSize.onChange =
inUVTex.onChange = updateUi;

render.onTriggered =
    op.preRender = doRender;

updateUi();

function initEffect()
{
    if (effect)effect.delete();
    if (tex)tex.delete();
    tex = null;
    effect = new CGL.TextureEffect(cgl, { "isFloatingPointTexture": CGL.Texture.isPixelFormatFloat(inPixelFormat.get()) });

    const cgl_aniso = Math.min(cgl.maxAnisotropic, parseFloat(aniso.get()));

    tex = new CGL.Texture(cgl,
        {
            "anisotropic": cgl_aniso,
            "name": "image_compose_v2_" + op.id,
            "pixelFormat": inPixelFormat.get(),
            "filter": getFilter(),
            "wrap": getWrap(),
            "width": getWidth(),
            "height": getHeight()
        });

    effect.setSourceTexture(tex);

    outWidth.set(getWidth());
    outHeight.set(getHeight());
    outRatio.set(getWidth() / getHeight());

    texOut.set(CGL.Texture.getEmptyTexture(cgl));

    reInitEffect = false;
    updateUi();
}

function getFilter()
{
    if (inFilter.get() == "nearest") return CGL.Texture.FILTER_NEAREST;
    else if (inFilter.get() == "linear") return CGL.Texture.FILTER_LINEAR;
    else if (inFilter.get() == "mipmap") return CGL.Texture.FILTER_MIPMAP;
}

function getWrap()
{
    if (inWrap.get() == "repeat") return CGL.Texture.WRAP_REPEAT;
    else if (inWrap.get() == "mirrored repeat") return CGL.Texture.WRAP_MIRRORED_REPEAT;
    else if (inWrap.get() == "clamp to edge") return CGL.Texture.WRAP_CLAMP_TO_EDGE;
}

function getWidth()
{
    if (inTex.get() && inSize.get() == "Auto") return inTex.get().width;
    else if (inSize.get() == "Auto" || inSize.get() == "Canvas") return cgl.canvasWidth;
    else if (inSize.get() == "ViewPort") return cgl.getViewPort()[2];
    return Math.ceil(width.get());
}

function getHeight()
{
    if (inTex.get() && inSize.get() == "Auto") return inTex.get().height;
    else if (inSize.get() == "Auto" || inSize.get() == "Canvas") return cgl.canvasHeight;
    else if (inSize.get() == "ViewPort") return cgl.getViewPort()[3];
    else return Math.ceil(height.get());
}

function reInitLater()
{
    reInitEffect = true;
}

function updateResolution()
{
    if ((
        getWidth() != tex.width ||
        getHeight() != tex.height ||
        // tex.anisotropic != parseFloat(aniso.get()) ||
        // tex.isFloatingPoint() != CGL.Texture.isPixelFormatFloat(inPixelFormat.get()) ||
        tex.pixelFormat != inPixelFormat.get() ||
        tex.filter != getFilter() ||
        tex.wrap != getWrap()
    ) && (getWidth() !== 0 && getHeight() !== 0))
    {
        initEffect();
        effect.setSourceTexture(tex);
        texOut.set(CGL.Texture.getEmptyTexture(cgl));
        texOut.set(tex);
        updateResolutionInfo();
        checkTypes();
    }
}

function updateResolutionInfo()
{
    let info = null;

    if (inSize.get() == "Manual")
    {
        info = null;
    }
    else if (inSize.get() == "Auto")
    {
        if (inTex.get()) info = "Input Texture";
        else info = "Canvas Size";

        info += ": " + getWidth() + " x " + getHeight();
    }

    let changed = false;
    changed = inSize.uiAttribs.info != info;
    inSize.setUiAttribs({ "info": info });
    if (changed)op.refreshParams();
}

function updateDefines()
{
    if (copyShader)copyShader.toggleDefine("USE_TEX", inTex.isLinked());
    if (copyShader)copyShader.toggleDefine("USE_UVTEX", inUVTex.isLinked());
}

function updateUi()
{
    aniso.setUiAttribs({ "greyout": getFilter() != CGL.Texture.FILTER_MIPMAP });

    r.setUiAttribs({ "greyout": inTex.isLinked() });
    b.setUiAttribs({ "greyout": inTex.isLinked() });
    g.setUiAttribs({ "greyout": inTex.isLinked() });
    a.setUiAttribs({ "greyout": inTex.isLinked() });

    width.setUiAttribs({ "greyout": inSize.get() == "Auto" });
    height.setUiAttribs({ "greyout": inSize.get() == "Auto" });

    width.setUiAttribs({ "hideParam": inSize.get() != "Manual" });
    height.setUiAttribs({ "hideParam": inSize.get() != "Manual" });

    if (tex)
        if (CGL.Texture.isPixelFormatFloat(inPixelFormat.get()) && getFilter() == CGL.Texture.FILTER_MIPMAP) op.setUiError("fpmipmap", "Don't use mipmap and 32bit at the same time, many systems do not support this.");
        else op.setUiError("fpmipmap", null);

    updateResolutionInfo();
    updateDefines();
    checkTypes();
}

function checkTypes()
{
    if (tex)
        if (inTex.isLinked() && inTex.get() && (tex.isFloatingPoint() != inTex.get().isFloatingPoint()))
            op.setUiError("textypediff", "Warning: Mixing floating point and non floating point texture can result in data/precision loss", 1);
        else
            op.setUiError("textypediff", null);
}

op.preRender = () =>
{
    doRender();
};

function copyTexture()
{
    if (!copyShader)
    {
        copyShader = new CGL.Shader(cgl, "copytextureshader");
        copyShader.setSource(copyShader.getDefaultVertexShader(), attachments.imgcomp_frag);
        copyShaderTexUni = new CGL.Uniform(copyShader, "t", "tex", 0);
        copyShaderUVTexUni = new CGL.Uniform(copyShader, "t", "UVTex", 1);
        copyShaderRGBAUni = new CGL.Uniform(copyShader, "4f", "bgColor", r, g, b, a);
        updateDefines();
    }

    cgl.pushShader(copyShader);
    cgl.currentTextureEffect.bind();

    if (inTex.get()) cgl.setTexture(0, inTex.get().tex);
    if (inUVTex.get()) cgl.setTexture(1, inUVTex.get().tex);

    cgl.currentTextureEffect.finish();
    cgl.popShader();
}

function doRender()
{
    if (!effect || reInitEffect) initEffect();

    // const vp = cgl.getViewPort();
    // prevViewPort[0] = vp[0];
    // prevViewPort[1] = vp[1];
    // prevViewPort[2] = vp[2];
    // prevViewPort[3] = vp[3];

    cgl.pushBlend(false);

    updateResolution();

    const oldEffect = cgl.currentTextureEffect;
    cgl.currentTextureEffect = effect;
    cgl.currentTextureEffect.imgCompVer = 3;
    cgl.currentTextureEffect.width = width.get();
    cgl.currentTextureEffect.height = height.get();
    effect.setSourceTexture(tex);

    effect.startEffect(inTex.get() || CGL.Texture.getEmptyTexture(cgl, isFloatTex), true);
    copyTexture();

    trigger.trigger();

    cgl.pushViewPort(0, 0, width.get(), height.get());

    // texOut.set(CGL.Texture.getEmptyTexture(cgl));

    texOut.setRef(effect.getCurrentSourceTexture());

    effect.endEffect();

    cgl.popViewPort();

    // cgl.setViewPort(prevViewPort[0], prevViewPort[1], prevViewPort[2], prevViewPort[3]);

    cgl.popBlend(false);
    cgl.currentTextureEffect = oldEffect;
}


};

Ops.Gl.ImageCompose.ImageCompose_v4.prototype = new CABLES.Op();
CABLES.OPS["17212e2b-d692-464c-8f8d-2d511dd3410a"]={f:Ops.Gl.ImageCompose.ImageCompose_v4,objName:"Ops.Gl.ImageCompose.ImageCompose_v4"};




// **************************************************************
// 
// Ops.Gl.ImageCompose.RepeatTexture_v2
// 
// **************************************************************

Ops.Gl.ImageCompose.RepeatTexture_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"repeat_frag":"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI sampler2D mulTex;\nUNI float amount;\nUNI float amountX;\nUNI float amountY;\n\n{{CGL.BLENDMODES3}}\n\nvoid main()\n{\n    float am=amount;\n\n    float mul=1.0;\n\n    #ifdef HAS_MASK\n        mul=texture(mulTex,texCoord).r;\n    #endif\n\n    vec2 coord = vec2(\n        mod(texCoord.x*amountX*mul,1.0),\n        mod(texCoord.y*amountY*mul,1.0));\n\n    vec4 col=texture(tex,coord);\n    vec4 base=texture(tex,texCoord);\n\n\n    #ifdef CLEAR\n        base.a=0.0;\n    #endif\n\n    outColor=cgl_blendPixel(base,col,am);\n}",};
const
    render = op.inTrigger("render"),
    blendMode = CGL.TextureEffect.AddBlendSelect(op, "Blend Mode", "normal"),
    amount = op.inValueSlider("Amount", 1),
    amountX = op.inValue("x", 3),
    amountY = op.inValue("y", 3),
    trigger = op.outTrigger("trigger"),
    inClear = op.inBool("Clear", true),
    mulTex = op.inTexture("Multiply");

const cgl = op.patch.cgl;
const shader = new CGL.Shader(cgl, op.name, op);

shader.setSource(shader.getDefaultVertexShader(), attachments.repeat_frag);

const
    textureUniform = new CGL.Uniform(shader, "t", "tex", 0),
    textureMulUniform = new CGL.Uniform(shader, "t", "mulTex", 2),
    amountUniform = new CGL.Uniform(shader, "f", "amount", amount),
    amountXUniform = new CGL.Uniform(shader, "f", "amountX", amountX),
    amountYUniform = new CGL.Uniform(shader, "f", "amountY", amountY);

CGL.TextureEffect.setupBlending(op, shader, blendMode, amount);

inClear.onChange =
mulTex.onChange = updateDefines;

function updateDefines()
{
    shader.toggleDefine("CLEAR", inClear.get());
    shader.toggleDefine("HAS_MASK", mulTex.get());
}

render.onTriggered = function ()
{
    if (!CGL.TextureEffect.checkOpInEffect(op, 3)) return;

    cgl.pushShader(shader);
    cgl.currentTextureEffect.bind();

    cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex);
    if (mulTex.get())cgl.setTexture(2, mulTex.get().tex);

    cgl.currentTextureEffect.finish();
    cgl.popShader();

    trigger.trigger();
};


};

Ops.Gl.ImageCompose.RepeatTexture_v2.prototype = new CABLES.Op();
CABLES.OPS["ff9aa796-d781-444c-a9d4-a62157f82dd5"]={f:Ops.Gl.ImageCompose.RepeatTexture_v2,objName:"Ops.Gl.ImageCompose.RepeatTexture_v2"};




// **************************************************************
// 
// Ops.Gl.ImageCompose.ScrollTexture
// 
// **************************************************************

Ops.Gl.ImageCompose.ScrollTexture = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"scroll_frag":"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float amountX;\nUNI float amountY;\n\n#ifdef HAS_MASK\n    UNI sampler2D texMask;\n#endif\n\nvoid main()\n{\n    float amX=amountX;\n    float amY=amountY;\n\n    #ifdef HAS_MASK\n        vec4 m=texture(texMask,texCoord);\n\n\n        amX*=(m.r-0.5)*2.0;\n        amY*=(m.g-0.5)*2.0;\n    #endif\n\n    vec4 col=vec4(0.0,0.0,0.0,1.0);\n    float x=mod(texCoord.x+amX,1.0);\n    float y=mod(texCoord.y+amY,1.0);\n\n\n    #ifdef NO_REPEAT\n        x=texCoord.x+amX*0.1;\n        y=texCoord.y+amY*0.1;\n    #endif\n\n    col=texture(tex,vec2(x,y));\n\n    #ifdef NO_REPEAT\n        if(x>1.0 || x<0.0 || y>1.0 || y<0.0) col=vec4(0.0,0.0,0.0,0.0);\n    #endif\n    outColor= col;\n}",};
const
    render = op.inTrigger("render"),
    trigger = op.outTrigger("trigger"),
    amountX = op.inValue("amountX"),
    amountY = op.inValue("amountY"),
    textureMask = op.inTexture("Mask"),
    repeat = op.inValueBool("Repeat", true);

repeat.onChange = updateRepeat;

const cgl = op.patch.cgl;
const shader = new CGL.Shader(cgl, op.name, op);
shader.setSource(shader.getDefaultVertexShader(), attachments.scroll_frag);

const
    textureUniform = new CGL.Uniform(shader, "t", "tex", 0),
    amountXUniform = new CGL.Uniform(shader, "f", "amountX", amountX),
    amountYUniform = new CGL.Uniform(shader, "f", "amountY", amountY),
    unitexMask = new CGL.Uniform(shader, "t", "texMask", 1);

updateRepeat();

textureMask.onChange = function ()
{
    if (textureMask.get())shader.define("MASK");
    else shader.removeDefine("MASK");
};

function updateRepeat()
{
    if (!repeat.get())shader.define("NO_REPEAT");
    else shader.removeDefine("NO_REPEAT");
}

render.onTriggered = function ()
{
    if (!CGL.TextureEffect.checkOpInEffect(op)) return;

    cgl.pushShader(shader);
    cgl.currentTextureEffect.bind();

    cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex);
    if (textureMask.get()) cgl.setTexture(1, textureMask.get().tex);

    cgl.currentTextureEffect.finish();
    cgl.popShader();

    trigger.trigger();
};


};

Ops.Gl.ImageCompose.ScrollTexture.prototype = new CABLES.Op();
CABLES.OPS["9b151d99-7888-4948-81c7-cd23b334e8d4"]={f:Ops.Gl.ImageCompose.ScrollTexture,objName:"Ops.Gl.ImageCompose.ScrollTexture"};




// **************************************************************
// 
// Ops.Anim.Timer_v2
// 
// **************************************************************

Ops.Anim.Timer_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inSpeed = op.inValue("Speed", 1),
    playPause = op.inValueBool("Play", true),
    reset = op.inTriggerButton("Reset"),
    inSyncTimeline = op.inValueBool("Sync to timeline", false),
    outTime = op.outNumber("Time");

op.setPortGroup("Controls", [playPause, reset, inSpeed]);

const timer = new CABLES.Timer();
let lastTime = null;
let time = 0;
let syncTimeline = false;

playPause.onChange = setState;
setState();

function setState()
{
    if (playPause.get())
    {
        timer.play();
        op.patch.addOnAnimFrame(op);
    }
    else
    {
        timer.pause();
        op.patch.removeOnAnimFrame(op);
    }
}

reset.onTriggered = doReset;

function doReset()
{
    time = 0;
    lastTime = null;
    timer.setTime(0);
    outTime.set(0);
}

inSyncTimeline.onChange = function ()
{
    syncTimeline = inSyncTimeline.get();
    playPause.setUiAttribs({ "greyout": syncTimeline });
    reset.setUiAttribs({ "greyout": syncTimeline });
};

op.onAnimFrame = function (tt, frameNum, deltaMs)
{
    if (timer.isPlaying())
    {
        if (CABLES.overwriteTime !== undefined)
        {
            outTime.set(CABLES.overwriteTime * inSpeed.get());
        }
        else

        if (syncTimeline)
        {
            outTime.set(tt * inSpeed.get());
        }
        else
        {
            timer.update();
            const timerVal = timer.get();

            if (lastTime === null)
            {
                lastTime = timerVal;
                return;
            }

            const t = Math.abs(timerVal - lastTime);
            lastTime = timerVal;

            time += t * inSpeed.get();
            if (time != time)time = 0;
            outTime.set(time);
        }
    }
};


};

Ops.Anim.Timer_v2.prototype = new CABLES.Op();
CABLES.OPS["aac7f721-208f-411a-adb3-79adae2e471a"]={f:Ops.Anim.Timer_v2,objName:"Ops.Anim.Timer_v2"};




// **************************************************************
// 
// Ops.Gl.Matrix.OrbitControls
// 
// **************************************************************

Ops.Gl.Matrix.OrbitControls = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    minDist = op.inValueFloat("min distance"),
    maxDist = op.inValueFloat("max distance"),

    minRotY = op.inValue("min rot y", 0),
    maxRotY = op.inValue("max rot y", 0),

    initialRadius = op.inValue("initial radius", 0),
    initialAxis = op.inValueSlider("initial axis y"),
    initialX = op.inValueSlider("initial axis x"),

    mul = op.inValueFloat("mul"),
    smoothness = op.inValueSlider("Smoothness", 1.0),
    speedX = op.inValue("Speed X", 1),
    speedY = op.inValue("Speed Y", 1),

    active = op.inValueBool("Active", true),

    allowPanning = op.inValueBool("Allow Panning", true),
    allowZooming = op.inValueBool("Allow Zooming", true),
    allowRotation = op.inValueBool("Allow Rotation", true),
    restricted = op.inValueBool("restricted", true),

    trigger = op.outTrigger("trigger"),
    outRadius = op.outNumber("radius"),
    outXDeg = op.outNumber("Rot X"),
    outYDeg = op.outNumber("Rot Y"),

    inReset = op.inTriggerButton("Reset");

op.setPortGroup("Initial Values", [initialAxis, initialX, initialRadius]);
op.setPortGroup("Interaction", [mul, smoothness, speedX, speedY]);
op.setPortGroup("Boundaries", [minRotY, maxRotY, minDist, maxDist]);

mul.set(1);
minDist.set(0.05);
maxDist.set(99999);

inReset.onTriggered = reset;

let eye = vec3.create();
const vUp = vec3.create();
const vCenter = vec3.create();
const viewMatrix = mat4.create();
const tempViewMatrix = mat4.create();
const vOffset = vec3.create();
const finalEyeAbs = vec3.create();

initialAxis.set(0.5);

let mouseDown = false;
let radius = 5;
outRadius.set(radius);

let lastMouseX = 0, lastMouseY = 0;
let percX = 0, percY = 0;

vec3.set(vCenter, 0, 0, 0);
vec3.set(vUp, 0, 1, 0);

const tempEye = vec3.create();
const finalEye = vec3.create();
const tempCenter = vec3.create();
const finalCenter = vec3.create();

let px = 0;
let py = 0;

let divisor = 1;
let element = null;
updateSmoothness();

op.onDelete = unbind;

const halfCircle = Math.PI;
const fullCircle = Math.PI * 2;

function reset()
{
    let off = 0;

    if (px % fullCircle < -halfCircle)
    {
        off = -fullCircle;
        px %= -fullCircle;
    }
    else
    if (px % fullCircle > halfCircle)
    {
        off = fullCircle;
        px %= fullCircle;
    }
    else px %= fullCircle;

    py %= (Math.PI);

    vec3.set(vOffset, 0, 0, 0);
    vec3.set(vCenter, 0, 0, 0);
    vec3.set(vUp, 0, 1, 0);

    percX = (initialX.get() * Math.PI * 2 + off);
    percY = (initialAxis.get() - 0.5);

    radius = initialRadius.get();
    eye = circlePos(percY);
}

function updateSmoothness()
{
    divisor = smoothness.get() * 10 + 1.0;
}

smoothness.onChange = updateSmoothness;

let initializing = true;

function ip(val, goal)
{
    if (initializing) return goal;
    return val + (goal - val) / divisor;
}

let lastPy = 0;
const lastPx = 0;

render.onTriggered = function ()
{
    const cgl = op.patch.cg;

    if (!element)
    {
        setElement(cgl.canvas);
        bind();
    }

    cgl.pushViewMatrix();

    px = ip(px, percX);
    py = ip(py, percY);

    let degY = (py + 0.5) * 180;

    if (minRotY.get() !== 0 && degY < minRotY.get())
    {
        degY = minRotY.get();
        py = lastPy;
    }
    else if (maxRotY.get() !== 0 && degY > maxRotY.get())
    {
        degY = maxRotY.get();
        py = lastPy;
    }
    else
    {
        lastPy = py;
    }

    const degX = (px) * CGL.RAD2DEG;

    outYDeg.set(degY);
    outXDeg.set(degX);

    circlePosi(eye, py);

    vec3.add(tempEye, eye, vOffset);
    vec3.add(tempCenter, vCenter, vOffset);

    finalEye[0] = ip(finalEye[0], tempEye[0]);
    finalEye[1] = ip(finalEye[1], tempEye[1]);
    finalEye[2] = ip(finalEye[2], tempEye[2]);

    finalCenter[0] = ip(finalCenter[0], tempCenter[0]);
    finalCenter[1] = ip(finalCenter[1], tempCenter[1]);
    finalCenter[2] = ip(finalCenter[2], tempCenter[2]);

    const empty = vec3.create();

    mat4.lookAt(viewMatrix, finalEye, finalCenter, vUp);
    mat4.rotate(viewMatrix, viewMatrix, px, vUp);

    // finaly multiply current scene viewmatrix
    mat4.multiply(cgl.vMatrix, cgl.vMatrix, viewMatrix);

    trigger.trigger();
    cgl.popViewMatrix();
    initializing = false;
};

function circlePosi(vec, perc)
{
    const mmul = mul.get();
    if (radius < minDist.get() * mmul) radius = minDist.get() * mmul;
    if (radius > maxDist.get() * mmul) radius = maxDist.get() * mmul;

    outRadius.set(radius * mmul);

    let i = 0, degInRad = 0;

    degInRad = 360 * perc / 2 * CGL.DEG2RAD;
    vec3.set(vec,
        Math.cos(degInRad) * radius * mmul,
        Math.sin(degInRad) * radius * mmul,
        0);
    return vec;
}

function circlePos(perc)
{
    const mmul = mul.get();
    if (radius < minDist.get() * mmul)radius = minDist.get() * mmul;
    if (radius > maxDist.get() * mmul)radius = maxDist.get() * mmul;

    outRadius.set(radius * mmul);

    let i = 0, degInRad = 0;
    const vec = vec3.create();
    degInRad = 360 * perc / 2 * CGL.DEG2RAD;
    vec3.set(vec,
        Math.cos(degInRad) * radius * mmul,
        Math.sin(degInRad) * radius * mmul,
        0);
    return vec;
}

function onmousemove(event)
{
    if (!mouseDown) return;

    const x = event.clientX;
    const y = event.clientY;

    let movementX = (x - lastMouseX);
    let movementY = (y - lastMouseY);

    movementX *= speedX.get();
    movementY *= speedY.get();

    if (event.buttons == 2 && allowPanning.get())
    {
        vOffset[2] += movementX * 0.01 * mul.get();
        vOffset[1] += movementY * 0.01 * mul.get();
    }
    else
    if (event.buttons == 4 && allowZooming.get())
    {
        radius += movementY * 0.05;
        eye = circlePos(percY);
    }
    else
    {
        if (allowRotation.get())
        {
            percX += movementX * 0.003;
            percY += movementY * 0.002;

            if (restricted.get())
            {
                if (percY > 0.5)percY = 0.5;
                if (percY < -0.5)percY = -0.5;
            }
        }
    }

    lastMouseX = x;
    lastMouseY = y;
}

function onMouseDown(event)
{
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
    mouseDown = true;

    try { element.setPointerCapture(event.pointerId); }
    catch (e) {}
}

function onMouseUp(e)
{
    mouseDown = false;
    // cgl.canvas.style.cursor='url(/ui/img/rotate.png),pointer';

    try { element.releasePointerCapture(e.pointerId); }
    catch (e) {}
}

function lockChange()
{
    const el = op.patch.cg.canvas;

    if (document.pointerLockElement === el || document.mozPointerLockElement === el || document.webkitPointerLockElement === el)
    {
        document.addEventListener("mousemove", onmousemove, false);
    }
}

function onMouseEnter(e)
{
    // cgl.canvas.style.cursor='url(/ui/img/rotate.png),pointer';
}

initialRadius.onChange = function ()
{
    radius = initialRadius.get();
    reset();
};

initialX.onChange = function ()
{
    px = percX = (initialX.get() * Math.PI * 2);
};

initialAxis.onChange = function ()
{
    py = percY = (initialAxis.get() - 0.5);
    eye = circlePos(percY);
};

const onMouseWheel = function (event)
{
    if (allowZooming.get())
    {
        const delta = CGL.getWheelSpeed(event) * 0.06;
        radius += (parseFloat(delta)) * 1.2;

        eye = circlePos(percY);
    }
};

const ontouchstart = function (event)
{
    if (event.touches && event.touches.length > 0) onMouseDown(event.touches[0]);
};

const ontouchend = function (event)
{
    onMouseUp();
};

const ontouchmove = function (event)
{
    if (event.touches && event.touches.length > 0) onmousemove(event.touches[0]);
};

active.onChange = function ()
{
    if (active.get())bind();
    else unbind();
};

function setElement(ele)
{
    unbind();
    element = ele;
    bind();
}

function bind()
{
    if (!element) return;

    element.addEventListener("pointermove", onmousemove);
    element.addEventListener("pointerdown", onMouseDown);
    element.addEventListener("pointerup", onMouseUp);
    element.addEventListener("pointerleave", onMouseUp);
    element.addEventListener("pointerenter", onMouseEnter);
    element.addEventListener("contextmenu", function (e) { e.preventDefault(); });
    element.addEventListener("wheel", onMouseWheel, { "passive": true });
}

function unbind()
{
    if (!element) return;

    element.removeEventListener("pointermove", onmousemove);
    element.removeEventListener("pointerdown", onMouseDown);
    element.removeEventListener("pointerup", onMouseUp);
    element.removeEventListener("pointerleave", onMouseUp);
    element.removeEventListener("pointerenter", onMouseUp);
    element.removeEventListener("wheel", onMouseWheel);
}

eye = circlePos(0);

initialX.set(0.25);
initialRadius.set(0.05);


};

Ops.Gl.Matrix.OrbitControls.prototype = new CABLES.Op();
CABLES.OPS["eaf4f7ce-08a3-4d1b-b9f4-ebc0b7b1cde1"]={f:Ops.Gl.Matrix.OrbitControls,objName:"Ops.Gl.Matrix.OrbitControls"};




// **************************************************************
// 
// Ops.Gl.RenderToTexture_v3
// 
// **************************************************************

Ops.Gl.RenderToTexture_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    inSize = op.inSwitch("Size", ["Canvas", "Manual"], "Canvas"),
    width = op.inValueInt("texture width", 512),
    height = op.inValueInt("texture height", 512),
    aspect = op.inBool("Auto Aspect", true),
    tfilter = op.inSwitch("filter", ["nearest", "linear", "mipmap"], "linear"),
    twrap = op.inSwitch("Wrap", ["Clamp", "Repeat", "Mirror"], "Repeat"),
    msaa = op.inSwitch("MSAA", ["none", "2x", "4x", "8x"], "none"),
    trigger = op.outTrigger("trigger"),
    tex = op.outTexture("texture"),
    texDepth = op.outTexture("textureDepth"),
    inPixelFormat = op.inDropDown("Pixel Format", CGL.Texture.PIXELFORMATS, CGL.Texture.PFORMATSTR_RGBA8UB),
    depth = op.inValueBool("Depth", true),
    clear = op.inValueBool("Clear", true);

const cgl = op.patch.cgl;
let fb = null;
let reInitFb = true;

op.setPortGroup("Size", [inSize, width, height, aspect]);

inPixelFormat.onChange =
    depth.onChange =
    clear.onChange =
    tfilter.onChange =
    twrap.onChange =
    msaa.onChange = initFbLater;

inSize.onChange = updateUi;

render.onTriggered =
    op.preRender = doRender;

updateUi();

function updateUi()
{
    width.setUiAttribs({ "greyout": inSize.get() != "Manual" });
    height.setUiAttribs({ "greyout": inSize.get() != "Manual" });
    aspect.setUiAttribs({ "greyout": inSize.get() != "Manual" });
}

function initFbLater()
{
    reInitFb = true;
}

function doRender()
{
    CGL.TextureEffect.checkOpNotInTextureEffect(op);

    if (!fb || reInitFb)
    {
        if (fb) fb.delete();

        let selectedWrap = CGL.Texture.WRAP_REPEAT;
        if (twrap.get() == "Clamp") selectedWrap = CGL.Texture.WRAP_CLAMP_TO_EDGE;
        else if (twrap.get() == "Mirror") selectedWrap = CGL.Texture.WRAP_MIRRORED_REPEAT;

        let selectFilter = CGL.Texture.FILTER_NEAREST;
        if (tfilter.get() == "nearest") selectFilter = CGL.Texture.FILTER_NEAREST;
        else if (tfilter.get() == "linear") selectFilter = CGL.Texture.FILTER_LINEAR;
        else if (tfilter.get() == "mipmap") selectFilter = CGL.Texture.FILTER_MIPMAP;

        if (inPixelFormat.get().indexOf("loat") && tfilter.get() == "mipmap") op.setUiError("fpmipmap", "Can't use mipmap and float texture at the same time");
        else op.setUiError("fpmipmap", null);

        if (cgl.glVersion >= 2)
        {
            let ms = true;
            let msSamples = 4;

            if (msaa.get() == "none")
            {
                msSamples = 0;
                ms = false;
            }
            if (msaa.get() == "2x") msSamples = 2;
            if (msaa.get() == "4x") msSamples = 4;
            if (msaa.get() == "8x") msSamples = 8;

            fb = new CGL.Framebuffer2(cgl, 8, 8,
                {
                    "name": "render2texture " + op.id,
                    "pixelFormat": inPixelFormat.get(),
                    "multisampling": ms,
                    "multisamplingSamples": msSamples,
                    "wrap": selectedWrap,
                    "filter": selectFilter,
                    "depth": depth.get(),
                    "clear": clear.get()
                });
        }
        else
        {
            fb = new CGL.Framebuffer(cgl, 8, 8, { "isFloatingPointTexture": false, "clear": clear.get() });
        }

        if (fb && fb.valid)
        {
            texDepth.set(fb.getTextureDepth());
            reInitFb = false;
        }
        else
        {
            fb = null;
            reInitFb = true;
        }
    }

    let setAspect = aspect.get();

    if (inSize.get() == "Canvas")
    {
        setAspect = true;
        width.set(cgl.canvasWidth);
        height.set(cgl.canvasHeight);
    }

    if (fb.getWidth() != Math.ceil(width.get()) || fb.getHeight() != Math.ceil(height.get()))
    {
        fb.setSize(
            Math.max(1, Math.ceil(width.get())),
            Math.max(1, Math.ceil(height.get())));
    }

    fb.renderStart(cgl);

    cgl.pushViewPort(0, 0, width.get(), height.get());

    if (setAspect) mat4.perspective(cgl.pMatrix, 45, width.get() / height.get(), 0.1, 1000.0);

    trigger.trigger();
    fb.renderEnd(cgl);

    cgl.popViewPort();

    texDepth.setRef(fb.getTextureDepth());
    tex.setRef(fb.getTextureColor());
}

//


};

Ops.Gl.RenderToTexture_v3.prototype = new CABLES.Op();
CABLES.OPS["41eec5c7-c480-477a-be81-04c3efac8357"]={f:Ops.Gl.RenderToTexture_v3,objName:"Ops.Gl.RenderToTexture_v3"};




// **************************************************************
// 
// Ops.Gl.ImageCompose.Blur
// 
// **************************************************************

Ops.Gl.ImageCompose.Blur = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"blur_frag":"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float dirX;\nUNI float dirY;\nUNI float amount;\n\n#ifdef HAS_MASK\n    UNI sampler2D imageMask;\n#endif\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main()\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float am=amount;\n    #ifdef HAS_MASK\n        am=amount*texture(imageMask,texCoord).r;\n        if(am<=0.02)\n        {\n            outColor=texture(tex, texCoord);\n            return;\n        }\n    #endif\n\n    vec2 delta=vec2(dirX*am*0.01,dirY*am*0.01);\n\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    #ifdef MOBILE\n        offset = 0.1;\n    #endif\n\n    #if defined(FASTBLUR) && !defined(MOBILE)\n        const float range=5.0;\n    #else\n        const float range=20.0;\n    #endif\n\n    for (float t = -range; t <= range; t+=1.0)\n    {\n        float percent = (t + offset - 0.5) / range;\n        float weight = 1.0 - abs(percent);\n        vec4 smpl = texture(tex, texCoord + delta * percent);\n\n        smpl.rgb *= smpl.a;\n\n        color += smpl * weight;\n        total += weight;\n    }\n\n    outColor= color / total;\n\n    outColor.rgb /= outColor.a + 0.00001;\n\n\n\n}\n",};
const render = op.inTrigger("render");
const trigger = op.outTrigger("trigger");
const amount = op.inValueFloat("amount");
const direction = op.inSwitch("direction", ["both", "vertical", "horizontal"], "both");
const fast = op.inValueBool("Fast", true);
const cgl = op.patch.cgl;

amount.set(10);

let shader = new CGL.Shader(cgl, "blur");

shader.define("FASTBLUR");

fast.onChange = function ()
{
    if (fast.get()) shader.define("FASTBLUR");
    else shader.removeDefine("FASTBLUR");
};

shader.setSource(shader.getDefaultVertexShader(), attachments.blur_frag);
let textureUniform = new CGL.Uniform(shader, "t", "tex", 0);

let uniDirX = new CGL.Uniform(shader, "f", "dirX", 0);
let uniDirY = new CGL.Uniform(shader, "f", "dirY", 0);

let uniWidth = new CGL.Uniform(shader, "f", "width", 0);
let uniHeight = new CGL.Uniform(shader, "f", "height", 0);

let uniAmount = new CGL.Uniform(shader, "f", "amount", amount.get());
amount.onChange = function () { uniAmount.setValue(amount.get()); };

let textureAlpha = new CGL.Uniform(shader, "t", "imageMask", 1);

let showingError = false;

function fullScreenBlurWarning()
{
    if (cgl.currentTextureEffect.getCurrentSourceTexture().width == cgl.canvasWidth &&
        cgl.currentTextureEffect.getCurrentSourceTexture().height == cgl.canvasHeight)
    {
        op.setUiError("warning", "Full screen blurs are slow! Try reducing the resolution to 1/2 or a 1/4", 0);
    }
    else
    {
        op.setUiError("warning", null);
    }
}

let dir = 0;
direction.onChange = function ()
{
    if (direction.get() == "both")dir = 0;
    if (direction.get() == "horizontal")dir = 1;
    if (direction.get() == "vertical")dir = 2;
};

let mask = op.inTexture("mask");

mask.onChange = function ()
{
    if (mask.get() && mask.get().tex) shader.define("HAS_MASK");
    else shader.removeDefine("HAS_MASK");
};

render.onTriggered = function ()
{
    if (!CGL.TextureEffect.checkOpInEffect(op)) return;

    cgl.pushShader(shader);

    uniWidth.setValue(cgl.currentTextureEffect.getCurrentSourceTexture().width);
    uniHeight.setValue(cgl.currentTextureEffect.getCurrentSourceTexture().height);

    fullScreenBlurWarning();

    // first pass
    if (dir === 0 || dir == 2)
    {
        cgl.currentTextureEffect.bind();
        cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex);

        if (mask.get() && mask.get().tex)
        {
            cgl.setTexture(1, mask.get().tex);
            // cgl.gl.bindTexture(cgl.gl.TEXTURE_2D, mask.get().tex );
        }

        uniDirX.setValue(0.0);
        uniDirY.setValue(1.0);

        cgl.currentTextureEffect.finish();
    }

    // second pass
    if (dir === 0 || dir == 1)
    {
        cgl.currentTextureEffect.bind();
        cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex);

        if (mask.get() && mask.get().tex)
        {
            cgl.setTexture(1, mask.get().tex);
            // cgl.gl.bindTexture(cgl.gl.TEXTURE_2D, mask.get().tex );
        }

        uniDirX.setValue(1.0);
        uniDirY.setValue(0.0);

        cgl.currentTextureEffect.finish();
    }

    cgl.popShader();
    trigger.trigger();
};


};

Ops.Gl.ImageCompose.Blur.prototype = new CABLES.Op();
CABLES.OPS["54f26f53-f637-44c1-9bfb-a2f2b722e998"]={f:Ops.Gl.ImageCompose.Blur,objName:"Ops.Gl.ImageCompose.Blur"};




// **************************************************************
// 
// Ops.Gl.Meshes.FullscreenRectangle_v2
// 
// **************************************************************

Ops.Gl.Meshes.FullscreenRectangle_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"shader_frag":"UNI sampler2D tex;\nIN vec2 texCoord;\n\nvoid main()\n{\n    outColor= texture(tex,texCoord);\n}\n\n","shader_vert":"{{MODULES_HEAD}}\n\nIN vec3 vPosition;\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\n\nOUT vec2 texCoord;\nIN vec2 attrTexCoord;\n\nvoid main()\n{\n   vec4 pos=vec4(vPosition,  1.0);\n\n   texCoord=vec2(attrTexCoord.x,(1.0-attrTexCoord.y));\n\n   gl_Position = projMatrix * mvMatrix * pos;\n}\n",};
const
    render = op.inTrigger("render"),
    inScale = op.inSwitch("Scale", ["Stretch", "Fit"], "Fit"),
    flipY = op.inValueBool("Flip Y"),
    flipX = op.inValueBool("Flip X"),
    inTexture = op.inTexture("Texture"),
    trigger = op.outTrigger("trigger");

const cgl = op.patch.cgl;
let mesh = null;
let geom = new CGL.Geometry("fullscreen rectangle");
let x = 0, y = 0, w = 0, h = 0;

op.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose", CABLES.OP_PORT_TYPE_FUNCTION);
op.toWorkPortsNeedToBeLinked(render);

flipX.onChange = rebuildFlip;
flipY.onChange = rebuildFlip;
render.onTriggered = doRender;
inTexture.onLinkChanged = updateUi;
inScale.onChange = updateScale;

const shader = new CGL.Shader(cgl, "fullscreenrectangle", this);
shader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]);

shader.setSource(attachments.shader_vert, attachments.shader_frag);
shader.fullscreenRectUniform = new CGL.Uniform(shader, "t", "tex", 0);
shader.aspectUni = new CGL.Uniform(shader, "f", "aspectTex", 0);

let useShader = false;
let updateShaderLater = true;
let fitImageAspect = false;

updateUi();
updateScale();

inTexture.onChange = function ()
{
    updateShaderLater = true;
};

function updateUi()
{
    if (!CABLES.UI) return;
    flipY.setUiAttribs({ "greyout": !inTexture.isLinked() });
    flipX.setUiAttribs({ "greyout": !inTexture.isLinked() });
    inScale.setUiAttribs({ "greyout": !inTexture.isLinked() });
}

function updateShader()
{
    let tex = inTexture.get();
    if (tex) useShader = true;
    else useShader = false;
}

op.preRender = function ()
{
    updateShader();
    shader.bind();
    if (mesh)mesh.render(shader);
    doRender();
};

function updateScale()
{
    fitImageAspect = inScale.get() == "Fit";
}

function doRender()
{
    if (cgl.viewPort[2] != w || cgl.viewPort[3] != h || !mesh) rebuild();

    if (updateShaderLater) updateShader();

    cgl.pushPMatrix();
    mat4.identity(cgl.pMatrix);
    mat4.ortho(cgl.pMatrix, 0, w, h, 0, -10.0, 1000);

    cgl.pushModelMatrix();
    mat4.identity(cgl.mMatrix);

    cgl.pushViewMatrix();
    mat4.identity(cgl.vMatrix);

    if (fitImageAspect && inTexture.get())
    {
        const rat = inTexture.get().width / inTexture.get().height;

        let _h = h;
        let _w = h * rat;

        if (_w > w)
        {
            _h = w * 1 / rat;
            _w = w;
        }

        cgl.pushViewPort((w - _w) / 2, (h - _h) / 2, _w, _h);
    }

    if (useShader)
    {
        if (inTexture.get()) cgl.setTexture(0, inTexture.get().tex);
        mesh.render(shader);
    }
    else
    {
        mesh.render(cgl.getShader());
    }

    cgl.gl.clear(cgl.gl.DEPTH_BUFFER_BIT);

    cgl.popPMatrix();
    cgl.popModelMatrix();
    cgl.popViewMatrix();

    if (fitImageAspect && inTexture.get()) cgl.popViewPort();

    trigger.trigger();
}

function rebuildFlip()
{
    mesh = null;
}

function rebuild()
{
    if (cgl.viewPort[2] == w && cgl.viewPort[3] == h && mesh) return;

    let xx = 0, xy = 0;

    w = cgl.viewPort[2];
    h = cgl.viewPort[3];

    geom.vertices = new Float32Array([
        xx + w, xy + h, 0.0,
        xx, xy + h, 0.0,
        xx + w, xy, 0.0,
        xx, xy, 0.0
    ]);

    let tc = null;

    if (flipY.get())
        tc = new Float32Array([
            1.0, 0.0,
            0.0, 0.0,
            1.0, 1.0,
            0.0, 1.0
        ]);
    else
        tc = new Float32Array([
            1.0, 1.0,
            0.0, 1.0,
            1.0, 0.0,
            0.0, 0.0
        ]);

    if (flipX.get())
    {
        tc[0] = 0.0;
        tc[2] = 1.0;
        tc[4] = 0.0;
        tc[6] = 1.0;
    }

    geom.setTexCoords(tc);

    geom.verticesIndices = new Uint16Array([
        2, 1, 0,
        3, 1, 2
    ]);

    geom.vertexNormals = new Float32Array([
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
    ]);
    geom.tangents = new Float32Array([
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0]);
    geom.biTangents == new Float32Array([
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0]);

    if (!mesh) mesh = new CGL.Mesh(cgl, geom);
    else mesh.setGeom(geom);
}


};

Ops.Gl.Meshes.FullscreenRectangle_v2.prototype = new CABLES.Op();
CABLES.OPS["fb70721a-eac2-4ff5-a5a2-5c59e2393972"]={f:Ops.Gl.Meshes.FullscreenRectangle_v2,objName:"Ops.Gl.Meshes.FullscreenRectangle_v2"};




// **************************************************************
// 
// Ops.Gl.ImageCompose.DrawImage_v3
// 
// **************************************************************

Ops.Gl.ImageCompose.DrawImage_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"drawimage_frag":"#ifdef HAS_TEXTURES\n    IN vec2 texCoord;\n    UNI sampler2D tex;\n    UNI sampler2D image;\n#endif\n\n#ifdef TEX_TRANSFORM\n    IN mat3 transform;\n#endif\n// UNI float rotate;\n\n{{CGL.BLENDMODES}}\n\n#ifdef HAS_TEXTUREALPHA\n   UNI sampler2D imageAlpha;\n#endif\n\nUNI float amount;\n\n#ifdef ASPECT_RATIO\n    UNI float aspectTex;\n    UNI float aspectPos;\n#endif\n\nvoid main()\n{\n    vec4 blendRGBA=vec4(0.0,0.0,0.0,1.0);\n\n    #ifdef HAS_TEXTURES\n        vec2 tc=texCoord;\n\n        #ifdef TEX_FLIP_X\n            tc.x=1.0-tc.x;\n        #endif\n        #ifdef TEX_FLIP_Y\n            tc.y=1.0-tc.y;\n        #endif\n\n        #ifdef ASPECT_RATIO\n            #ifdef ASPECT_AXIS_X\n                tc.y=(1.0-aspectPos)-(((1.0-aspectPos)-tc.y)*aspectTex);\n            #endif\n            #ifdef ASPECT_AXIS_Y\n                tc.x=(1.0-aspectPos)-(((1.0-aspectPos)-tc.x)/aspectTex);\n            #endif\n        #endif\n\n        #ifdef TEX_TRANSFORM\n            vec3 coordinates=vec3(tc.x, tc.y,1.0);\n            tc=(transform * coordinates ).xy;\n        #endif\n\n        blendRGBA=texture(image,tc);\n\n        vec3 blend=blendRGBA.rgb;\n        vec4 baseRGBA=texture(tex,texCoord);\n        vec3 base=baseRGBA.rgb;\n\n\n        #ifdef PREMUL\n            blend.rgb = (blend.rgb) + (base.rgb * (1.0 - blendRGBA.a));\n        #endif\n\n        vec3 colNew=_blend(base,blend);\n\n\n\n\n        #ifdef REMOVE_ALPHA_SRC\n            blendRGBA.a=1.0;\n        #endif\n\n        #ifdef HAS_TEXTUREALPHA\n            vec4 colImgAlpha=texture(imageAlpha,tc);\n            float colImgAlphaAlpha=colImgAlpha.a;\n\n            #ifdef ALPHA_FROM_LUMINANCE\n                vec3 gray = vec3(dot(vec3(0.2126,0.7152,0.0722), colImgAlpha.rgb ));\n                colImgAlphaAlpha=(gray.r+gray.g+gray.b)/3.0;\n            #endif\n\n            #ifdef ALPHA_FROM_INV_UMINANCE\n                vec3 gray = vec3(dot(vec3(0.2126,0.7152,0.0722), colImgAlpha.rgb ));\n                colImgAlphaAlpha=1.0-(gray.r+gray.g+gray.b)/3.0;\n            #endif\n\n            #ifdef INVERT_ALPHA\n                colImgAlphaAlpha=clamp(colImgAlphaAlpha,0.0,1.0);\n                colImgAlphaAlpha=1.0-colImgAlphaAlpha;\n            #endif\n\n            blendRGBA.a=colImgAlphaAlpha*blendRGBA.a;\n        #endif\n    #endif\n\n    float am=amount;\n\n    #ifdef CLIP_REPEAT\n        if(tc.y>1.0 || tc.y<0.0 || tc.x>1.0 || tc.x<0.0)\n        {\n            // colNew.rgb=vec3(0.0);\n            am=0.0;\n        }\n    #endif\n\n    #ifdef ASPECT_RATIO\n        #ifdef ASPECT_CROP\n            if(tc.y>1.0 || tc.y<0.0 || tc.x>1.0 || tc.x<0.0)\n            {\n                colNew.rgb=base.rgb;\n                am=0.0;\n            }\n\n        #endif\n    #endif\n\n\n\n    #ifndef PREMUL\n        blendRGBA.rgb=mix(colNew,base,1.0-(am*blendRGBA.a));\n        blendRGBA.a=clamp(baseRGBA.a+(blendRGBA.a*am),0.,1.);\n    #endif\n\n    #ifdef PREMUL\n        // premultiply\n        // blendRGBA.rgb = (blendRGBA.rgb) + (baseRGBA.rgb * (1.0 - blendRGBA.a));\n        blendRGBA=vec4(\n            mix(colNew.rgb,base,1.0-(am*blendRGBA.a)),\n            blendRGBA.a*am+baseRGBA.a\n            );\n    #endif\n\n    #ifdef ALPHA_MASK\n    blendRGBA.a=baseRGBA.a;\n    #endif\n\n    outColor=blendRGBA;\n}\n\n\n\n\n\n\n\n","drawimage_vert":"IN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\n\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\n\nOUT vec2 texCoord;\n// OUT vec3 norm;\n\n#ifdef TEX_TRANSFORM\n    UNI float posX;\n    UNI float posY;\n    UNI float scaleX;\n    UNI float scaleY;\n    UNI float rotate;\n    OUT mat3 transform;\n#endif\n\nvoid main()\n{\n   texCoord=attrTexCoord;\n//   norm=attrVertNormal;\n\n   #ifdef TEX_TRANSFORM\n        vec3 coordinates=vec3(attrTexCoord.x, attrTexCoord.y,1.0);\n        float angle = radians( rotate );\n        vec2 scale= vec2(scaleX,scaleY);\n        vec2 translate= vec2(posX,posY);\n\n        transform = mat3(   scale.x * cos( angle ), scale.x * sin( angle ), 0.0,\n            - scale.y * sin( angle ), scale.y * cos( angle ), 0.0,\n            - 0.5 * scale.x * cos( angle ) + 0.5 * scale.y * sin( angle ) - 0.5 * translate.x*2.0 + 0.5,  - 0.5 * scale.x * sin( angle ) - 0.5 * scale.y * cos( angle ) - 0.5 * translate.y*2.0 + 0.5, 1.0);\n   #endif\n\n   gl_Position = projMatrix * mvMatrix * vec4(vPosition,  1.0);\n}\n",};
const
    render = op.inTrigger("render"),
    blendMode = CGL.TextureEffect.AddBlendSelect(op, "blendMode"),
    amount = op.inValueSlider("amount", 1),

    image = op.inTexture("Image"),
    inAlphaPremul = op.inValueBool("Premultiplied", false),
    inAlphaMask = op.inValueBool("Alpha Mask", false),
    removeAlphaSrc = op.inValueBool("removeAlphaSrc", false),

    imageAlpha = op.inTexture("Mask"),
    alphaSrc = op.inValueSelect("Mask Src", ["alpha channel", "luminance", "luminance inv"], "luminance"),
    invAlphaChannel = op.inValueBool("Invert alpha channel"),

    inAspect = op.inValueBool("Aspect Ratio", false),
    inAspectAxis = op.inValueSelect("Stretch Axis", ["X", "Y"], "X"),
    inAspectPos = op.inValueSlider("Position", 0.0),
    inAspectCrop = op.inValueBool("Crop", false),

    trigger = op.outTrigger("trigger");

blendMode.set("normal");
const cgl = op.patch.cgl;
const shader = new CGL.Shader(cgl, "drawimage");

imageAlpha.onLinkChanged = updateAlphaPorts;

op.setPortGroup("Mask", [imageAlpha, alphaSrc, invAlphaChannel]);
op.setPortGroup("Aspect Ratio", [inAspect, inAspectPos, inAspectCrop, inAspectAxis]);

function updateAlphaPorts()
{
    if (imageAlpha.isLinked())
    {
        removeAlphaSrc.setUiAttribs({ "greyout": true });
        alphaSrc.setUiAttribs({ "greyout": false });
        invAlphaChannel.setUiAttribs({ "greyout": false });
    }
    else
    {
        removeAlphaSrc.setUiAttribs({ "greyout": false });
        alphaSrc.setUiAttribs({ "greyout": true });
        invAlphaChannel.setUiAttribs({ "greyout": true });
    }
}

op.toWorkPortsNeedToBeLinked(image);

shader.setSource(attachments.drawimage_vert, attachments.drawimage_frag);

const
    textureUniform = new CGL.Uniform(shader, "t", "tex", 0),
    textureImaghe = new CGL.Uniform(shader, "t", "image", 1),
    textureAlpha = new CGL.Uniform(shader, "t", "imageAlpha", 2),
    uniTexAspect = new CGL.Uniform(shader, "f", "aspectTex", 1),
    uniAspectPos = new CGL.Uniform(shader, "f", "aspectPos", inAspectPos);

inAspect.onChange =
    inAspectCrop.onChange =
    inAspectAxis.onChange = updateAspectRatio;

function updateAspectRatio()
{
    shader.removeDefine("ASPECT_AXIS_X");
    shader.removeDefine("ASPECT_AXIS_Y");
    shader.removeDefine("ASPECT_CROP");

    inAspectPos.setUiAttribs({ "greyout": !inAspect.get() });
    inAspectCrop.setUiAttribs({ "greyout": !inAspect.get() });
    inAspectAxis.setUiAttribs({ "greyout": !inAspect.get() });

    if (inAspect.get())
    {
        shader.define("ASPECT_RATIO");

        if (inAspectCrop.get()) shader.define("ASPECT_CROP");

        if (inAspectAxis.get() == "X") shader.define("ASPECT_AXIS_X");
        if (inAspectAxis.get() == "Y") shader.define("ASPECT_AXIS_Y");
    }
    else
    {
        shader.removeDefine("ASPECT_RATIO");
        if (inAspectCrop.get()) shader.define("ASPECT_CROP");

        if (inAspectAxis.get() == "X") shader.define("ASPECT_AXIS_X");
        if (inAspectAxis.get() == "Y") shader.define("ASPECT_AXIS_Y");
    }
}

//
// texture flip
//
const flipX = op.inValueBool("flip x");
const flipY = op.inValueBool("flip y");

//
// texture transform
//

let doTransform = op.inValueBool("Transform");

let scaleX = op.inValueSlider("Scale X", 1);
let scaleY = op.inValueSlider("Scale Y", 1);

let posX = op.inValue("Position X", 0);
let posY = op.inValue("Position Y", 0);

let rotate = op.inValue("Rotation", 0);

const inClipRepeat = op.inValueBool("Clip Repeat", false);

const uniScaleX = new CGL.Uniform(shader, "f", "scaleX", scaleX);
const uniScaleY = new CGL.Uniform(shader, "f", "scaleY", scaleY);
const uniPosX = new CGL.Uniform(shader, "f", "posX", posX);
const uniPosY = new CGL.Uniform(shader, "f", "posY", posY);
const uniRotate = new CGL.Uniform(shader, "f", "rotate", rotate);

doTransform.onChange = updateTransformPorts;

function updateTransformPorts()
{
    shader.toggleDefine("TEX_TRANSFORM", doTransform.get());

    scaleX.setUiAttribs({ "greyout": !doTransform.get() });
    scaleY.setUiAttribs({ "greyout": !doTransform.get() });
    posX.setUiAttribs({ "greyout": !doTransform.get() });
    posY.setUiAttribs({ "greyout": !doTransform.get() });
    rotate.setUiAttribs({ "greyout": !doTransform.get() });
}

CGL.TextureEffect.setupBlending(op, shader, blendMode, amount);

const amountUniform = new CGL.Uniform(shader, "f", "amount", amount);

render.onTriggered = doRender;

inClipRepeat.onChange =
    imageAlpha.onChange =
    inAlphaPremul.onChange =
    inAlphaMask.onChange =
    invAlphaChannel.onChange =
    flipY.onChange =
    flipX.onChange =
    removeAlphaSrc.onChange =
    alphaSrc.onChange = updateDefines;

updateTransformPorts();
updateAlphaPorts();
updateAspectRatio();
updateDefines();

function updateDefines()
{
    shader.toggleDefine("REMOVE_ALPHA_SRC", removeAlphaSrc.get());
    shader.toggleDefine("ALPHA_MASK", inAlphaMask.get());

    shader.toggleDefine("CLIP_REPEAT", inClipRepeat.get());

    shader.toggleDefine("HAS_TEXTUREALPHA", imageAlpha.get() && imageAlpha.get().tex);

    shader.toggleDefine("TEX_FLIP_X", flipX.get());
    shader.toggleDefine("TEX_FLIP_Y", flipY.get());

    shader.toggleDefine("INVERT_ALPHA", invAlphaChannel.get());

    shader.toggleDefine("ALPHA_FROM_LUMINANCE", alphaSrc.get() == "luminance");
    shader.toggleDefine("ALPHA_FROM_INV_UMINANCE", alphaSrc.get() == "luminance_inv");
    shader.toggleDefine("PREMUL", inAlphaPremul.get());
}

function doRender()
{
    if (!CGL.TextureEffect.checkOpInEffect(op)) return;

    const tex = image.get();
    if (tex && tex.tex && amount.get() > 0.0)
    {
        cgl.pushShader(shader);
        cgl.currentTextureEffect.bind();

        const imgTex = cgl.currentTextureEffect.getCurrentSourceTexture();
        cgl.setTexture(0, imgTex.tex);

        if (imgTex && tex)
        {
            if (tex.textureType != imgTex.textureType && (tex.textureType == CGL.Texture.TYPE_FLOAT))
                op.setUiError("textypediff", "Drawing 32bit texture into an 8 bit can result in data/precision loss", 1);
            else
                op.setUiError("textypediff", null);
        }

        const asp = 1 / (cgl.currentTextureEffect.getWidth() / cgl.currentTextureEffect.getHeight()) * (tex.width / tex.height);
        // uniTexAspect.setValue(1 / (tex.height / tex.width * imgTex.width / imgTex.height));

        uniTexAspect.setValue(asp);

        cgl.setTexture(1, tex.tex);
        // cgl.gl.bindTexture(cgl.gl.TEXTURE_2D, image.get().tex );

        if (imageAlpha.get() && imageAlpha.get().tex)
        {
            cgl.setTexture(2, imageAlpha.get().tex);
            // cgl.gl.bindTexture(cgl.gl.TEXTURE_2D, imageAlpha.get().tex );
        }

        // cgl.pushBlend(false);

        cgl.pushBlendMode(CGL.BLEND_NONE, true);

        cgl.currentTextureEffect.finish();
        cgl.popBlendMode();

        // cgl.popBlend();

        cgl.popShader();
    }

    trigger.trigger();
}


};

Ops.Gl.ImageCompose.DrawImage_v3.prototype = new CABLES.Op();
CABLES.OPS["8f6b2f15-fcb0-4597-90c0-e5173f2969fe"]={f:Ops.Gl.ImageCompose.DrawImage_v3,objName:"Ops.Gl.ImageCompose.DrawImage_v3"};




// **************************************************************
// 
// Ops.Gl.Matrix.Transform
// 
// **************************************************************

Ops.Gl.Matrix.Transform = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    posX = op.inValue("posX", 0),
    posY = op.inValue("posY", 0),
    posZ = op.inValue("posZ", 0),
    scale = op.inValue("scale", 1),
    rotX = op.inValue("rotX", 0),
    rotY = op.inValue("rotY", 0),
    rotZ = op.inValue("rotZ", 0),
    trigger = op.outTrigger("trigger");

op.setPortGroup("Rotation", [rotX, rotY, rotZ]);
op.setPortGroup("Position", [posX, posY, posZ]);
op.setPortGroup("Scale", [scale]);
op.setUiAxisPorts(posX, posY, posZ);

op.toWorkPortsNeedToBeLinked(render, trigger);

const vPos = vec3.create();
const vScale = vec3.create();
const transMatrix = mat4.create();
mat4.identity(transMatrix);

let
    doScale = false,
    doTranslate = false,
    translationChanged = true,
    scaleChanged = true,
    rotChanged = true;

rotX.onChange = rotY.onChange = rotZ.onChange = setRotChanged;
posX.onChange = posY.onChange = posZ.onChange = setTranslateChanged;
scale.onChange = setScaleChanged;

render.onTriggered = function ()
{
    // if(!CGL.TextureEffect.checkOpNotInTextureEffect(op)) return;

    let updateMatrix = false;
    if (translationChanged)
    {
        updateTranslation();
        updateMatrix = true;
    }
    if (scaleChanged)
    {
        updateScale();
        updateMatrix = true;
    }
    if (rotChanged) updateMatrix = true;

    if (updateMatrix) doUpdateMatrix();

    const cg = op.patch.cg || op.patch.cgl;
    cg.pushModelMatrix();
    mat4.multiply(cg.mMatrix, cg.mMatrix, transMatrix);

    trigger.trigger();
    cg.popModelMatrix();

    if (CABLES.UI && CABLES.UI.showCanvasTransforms) gui.setTransform(op.id, posX.get(), posY.get(), posZ.get());

    if (op.isCurrentUiOp())
        gui.setTransformGizmo(
            {
                "posX": posX,
                "posY": posY,
                "posZ": posZ,
            });
};

op.transform3d = function ()
{
    return { "pos": [posX, posY, posZ] };
};

function doUpdateMatrix()
{
    mat4.identity(transMatrix);
    if (doTranslate)mat4.translate(transMatrix, transMatrix, vPos);

    if (rotX.get() !== 0)mat4.rotateX(transMatrix, transMatrix, rotX.get() * CGL.DEG2RAD);
    if (rotY.get() !== 0)mat4.rotateY(transMatrix, transMatrix, rotY.get() * CGL.DEG2RAD);
    if (rotZ.get() !== 0)mat4.rotateZ(transMatrix, transMatrix, rotZ.get() * CGL.DEG2RAD);

    if (doScale)mat4.scale(transMatrix, transMatrix, vScale);
    rotChanged = false;
}

function updateTranslation()
{
    doTranslate = false;
    if (posX.get() !== 0.0 || posY.get() !== 0.0 || posZ.get() !== 0.0) doTranslate = true;
    vec3.set(vPos, posX.get(), posY.get(), posZ.get());
    translationChanged = false;
}

function updateScale()
{
    // doScale=false;
    // if(scale.get()!==0.0)
    doScale = true;
    vec3.set(vScale, scale.get(), scale.get(), scale.get());
    scaleChanged = false;
}

function setTranslateChanged()
{
    translationChanged = true;
}

function setScaleChanged()
{
    scaleChanged = true;
}

function setRotChanged()
{
    rotChanged = true;
}

doUpdateMatrix();


};

Ops.Gl.Matrix.Transform.prototype = new CABLES.Op();
CABLES.OPS["650baeb1-db2d-4781-9af6-ab4e9d4277be"]={f:Ops.Gl.Matrix.Transform,objName:"Ops.Gl.Matrix.Transform"};




// **************************************************************
// 
// Ops.Math.FlipSign
// 
// **************************************************************

Ops.Math.FlipSign = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inval = op.inValueFloat("Value", 1),
    result = op.outNumber("Result");

inval.onChange = update;
update();

function update()
{
    result.set(inval.get() * -1);
}


};

Ops.Math.FlipSign.prototype = new CABLES.Op();
CABLES.OPS["f5c858a2-2654-4108-86fe-319efa70ecec"]={f:Ops.Math.FlipSign,objName:"Ops.Math.FlipSign"};




// **************************************************************
// 
// Ops.Number.Number
// 
// **************************************************************

Ops.Number.Number = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    v = op.inValueFloat("value"),
    result = op.outNumber("result");

v.onChange = exec;

function exec()
{
    result.set(Number(v.get()));
}


};

Ops.Number.Number.prototype = new CABLES.Op();
CABLES.OPS["8fb2bb5d-665a-4d0a-8079-12710ae453be"]={f:Ops.Number.Number,objName:"Ops.Number.Number"};




// **************************************************************
// 
// Ops.Html.CSS_v2
// 
// **************************************************************

Ops.Html.CSS_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const code = op.inStringEditor("css code");

code.setUiAttribs(
    {
        "editorSyntax": "css",
        "ignoreBigPort": true
    });

let styleEle = null;
const eleId = "css_" + CABLES.uuid();

code.onChange = update;
update();

function getCssContent()
{
    let css = code.get();
    if (css)
    {
        let patchId = null;
        if (op.storage && op.storage.blueprint && op.storage.blueprint.patchId)
        {
            patchId = op.storage.blueprint.patchId;
        }
        css = css.replace(new RegExp("{{ASSETPATH}}", "g"), op.patch.getAssetPath(patchId));
    }
    return css;
}

function update()
{
    styleEle = op.patch.getDocument().getElementById(eleId);

    if (styleEle)
    {
        styleEle.textContent = getCssContent();
    }
    else
    {
        styleEle = op.patch.getDocument().createElement("style");
        styleEle.type = "text/css";
        styleEle.id = eleId;
        styleEle.textContent = attachments.css_spinner;
        styleEle.classList.add("cablesEle");

        const head = op.patch.getDocument().getElementsByTagName("body")[0];
        head.appendChild(styleEle);
    }
}

op.onDelete = function ()
{
    styleEle = op.patch.getDocument().getElementById(eleId);
    if (styleEle)styleEle.remove();
};


};

Ops.Html.CSS_v2.prototype = new CABLES.Op();
CABLES.OPS["a56d3edd-06ad-44ed-9810-dbf714600c67"]={f:Ops.Html.CSS_v2,objName:"Ops.Html.CSS_v2"};




// **************************************************************
// 
// Ops.User.rambodc.Test6
// 
// **************************************************************

Ops.User.rambodc.Test6 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// inputs
let parentPort = op.inObject("link");
let labelPort = op.inString("Text", "Group");
const inShowTitle = op.inBool("Show Title", true);
let defaultMinimizedPort = op.inValueBool("Default Minimized");
const inVisible = op.inBool("Visible", true);
const inSlide = op.inBool("Slide", false);

// outputs
let nextPort = op.outObject("next");
let childrenPort = op.outObject("childs");

inVisible.onChange = function ()
{
    el.style.display = inVisible.get() ? "block" : "none";
};

// vars
let el = document.createElement("div");
el.dataset.op = op.id;
el.classList.add("sidebar__group");
onDefaultMinimizedPortChanged();
let header = document.createElement("div");
header.classList.add("sidebar__group-header");
header.classList.add("cablesEle");
el.appendChild(header);
header.addEventListener("click", onClick);
let headerTitle = document.createElement("div");
headerTitle.classList.add("sidebar__group-header-title");
// headerTitle.textContent = labelPort.get();
header.appendChild(headerTitle);
let headerTitleText = document.createElement("span");
headerTitleText.textContent = labelPort.get();
headerTitleText.classList.add("sidebar__group-header-title-text");
headerTitle.appendChild(headerTitleText);
let icon = document.createElement("span");
icon.classList.add("sidebar__group-header-icon");
icon.classList.add("iconsidebar-chevron-up");
headerTitle.appendChild(icon);
let groupItems = document.createElement("div");
groupItems.classList.add("sidebar__group-items");
el.appendChild(groupItems);
op.toWorkPortsNeedToBeLinked(parentPort);

// events
parentPort.onChange = onParentChanged;
labelPort.onChange = onLabelTextChanged;
defaultMinimizedPort.onChange = onDefaultMinimizedPortChanged;
op.onDelete = onDelete;

// functions

inShowTitle.onChange = () =>
{
    if (inShowTitle.get())header.style.display = "block";
    else header.style.display = "none";
};



function onDefaultMinimizedPortChanged() {
    const shouldSlide = inSlide.get();
    if (defaultMinimizedPort.get()) {
        // Start minimized
        el.classList.add("sidebar__group--closed");
        if(shouldSlide) {
            groupItems.style.height = '0px';
        }
    } else {
        // Start expanded
        el.classList.remove("sidebar__group--closed");
        if(shouldSlide) {
            groupItems.style.height = `${groupItems.scrollHeight}px`;
        }
    }
}




function onClick(ev) {
    ev.stopPropagation();
    const shouldSlide = inSlide.get();

    if(shouldSlide) {
        // JavaScript-based sliding
        if(el.classList.contains("sidebar__group--closed")) {
            // Slide down
            groupItems.style.height = `${groupItems.scrollHeight}px`;
        } else {
            // Slide up
            groupItems.style.height = '0px';
        }
    }

    // Toggle the closed state class regardless of sliding effect
    el.classList.toggle("sidebar__group--closed");
}





function onLabelTextChanged()
{
    let labelText = labelPort.get();
    headerTitleText.textContent = labelText;
    if (CABLES.UI) op.setUiAttrib({ "extendTitle": labelText });
}

function onParentChanged()
{
    childrenPort.set(null);
    let parent = parentPort.get();
    if (parent && parent.parentElement)
    {
        parent.parentElement.appendChild(el);
        childrenPort.set({
            "parentElement": groupItems,
            "parentOp": op,
        });
        nextPort.set(parent);
    }
    else
    { // detach
        if (el.parentElement)
        {
            el.parentElement.removeChild(el);
        }
    }
}

function showElement(el)
{
    if (el)
    {
        el.style.display = "block";
    }
}

function hideElement(el)
{
    if (el)
    {
        el.style.display = "none";
    }
}

function onDelete()
{
    removeElementFromDOM(el);
}

function removeElementFromDOM(el)
{
    if (el && el.parentNode && el.parentNode.removeChild)
    {
        el.parentNode.removeChild(el);
    }
}






// Add a transition end listener to reset the height to auto after the transition
groupItems.addEventListener('transitionend', function(e) {
    if(e.propertyName === 'height' && !el.classList.contains("sidebar__group--closed")) {
        groupItems.style.height = 'auto';
    }
});

// Make sure the height is reset when resizing the window or any action that could change the content height
window.addEventListener('resize', function() {
    if(!el.classList.contains("sidebar__group--closed")) {
        groupItems.style.height = 'auto';
    }
});






};

Ops.User.rambodc.Test6.prototype = new CABLES.Op();
CABLES.OPS["4451ce1d-4b22-4c81-a111-d7fb07fd5ad3"]={f:Ops.User.rambodc.Test6,objName:"Ops.User.rambodc.Test6"};




// **************************************************************
// 
// Ops.Gl.Texture_v2
// 
// **************************************************************

Ops.Gl.Texture_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    filename = op.inUrl("File", [".jpg", ".png", ".webp", ".jpeg", ".avif"]),
    tfilter = op.inSwitch("Filter", ["nearest", "linear", "mipmap"]),
    wrap = op.inValueSelect("Wrap", ["repeat", "mirrored repeat", "clamp to edge"], "clamp to edge"),
    aniso = op.inSwitch("Anisotropic", ["0", "1", "2", "4", "8", "16"], "0"),
    dataFrmt = op.inSwitch("Data Format", ["R", "RG", "RGB", "RGBA", "SRGBA"], "RGBA"),
    flip = op.inValueBool("Flip", false),
    unpackAlpha = op.inValueBool("Pre Multiplied Alpha", false),
    active = op.inValueBool("Active", true),
    inFreeMemory = op.inBool("Save Memory", true),
    textureOut = op.outTexture("Texture"),
    addCacheBust = op.inBool("Add Cachebuster", true),
    width = op.outNumber("Width"),
    height = op.outNumber("Height"),
    ratio = op.outNumber("Aspect Ratio"),
    loaded = op.outNumber("Loaded", false),
    loading = op.outNumber("Loading", false);

const cgl = op.patch.cgl;

op.toWorkPortsNeedToBeLinked(textureOut);
op.setPortGroup("Size", [width, height]);

let loadedFilename = null;
let loadingId = null;
let tex = null;
let cgl_filter = CGL.Texture.FILTER_MIPMAP;
let cgl_wrap = CGL.Texture.WRAP_REPEAT;
let cgl_aniso = 0;
let timedLoader = 0;

unpackAlpha.setUiAttribs({ "hidePort": true });
unpackAlpha.onChange =
    filename.onChange =
    dataFrmt.onChange =
    addCacheBust.onChange =
    flip.onChange = reloadSoon;
aniso.onChange = tfilter.onChange = onFilterChange;
wrap.onChange = onWrapChange;

tfilter.set("mipmap");
wrap.set("repeat");

textureOut.set(CGL.Texture.getEmptyTexture(cgl));

active.onChange = function ()
{
    if (active.get())
    {
        if (loadedFilename != filename.get() || !tex) reloadSoon();
        else textureOut.set(tex);
    }
    else
    {
        textureOut.set(CGL.Texture.getEmptyTexture(cgl));
        width.set(CGL.Texture.getEmptyTexture(cgl).width);
        height.set(CGL.Texture.getEmptyTexture(cgl).height);
        if (tex)tex.delete();
        op.setUiAttrib({ "extendTitle": "" });
        tex = null;
    }
};

const setTempTexture = function ()
{
    const t = CGL.Texture.getTempTexture(cgl);
    textureOut.set(t);
};

function reloadSoon(nocache)
{
    clearTimeout(timedLoader);
    timedLoader = setTimeout(function ()
    {
        realReload(nocache);
    }, 30);
}

function getPixelFormat()
{
    if (dataFrmt.get() == "R") return CGL.Texture.PFORMATSTR_R8UB;
    if (dataFrmt.get() == "RG") return CGL.Texture.PFORMATSTR_RG8UB;
    if (dataFrmt.get() == "RGB") return CGL.Texture.PFORMATSTR_RGB8UB;
    if (dataFrmt.get() == "SRGBA") return CGL.Texture.PFORMATSTR_SRGBA8;

    return CGL.Texture.PFORMATSTR_RGBA8UB;
}

function realReload(nocache)
{
    op.checkMainloopExists();
    if (!active.get()) return;
    // if (filename.get() === null) return;
    if (loadingId)loadingId = cgl.patch.loading.finished(loadingId);
    loadingId = cgl.patch.loading.start("textureOp", filename.get(), op);

    let url = op.patch.getFilePath(String(filename.get()));

    if ((addCacheBust.get() || nocache) && CABLES.UI)url = CABLES.cacheBust(url);

    if (String(filename.get()).indexOf("data:") == 0) url = filename.get();

    let needsRefresh = false;
    if (loadedFilename != filename.get()) needsRefresh = true;
    loadedFilename = filename.get();

    if ((filename.get() && filename.get().length > 1))
    {
        loaded.set(false);
        loading.set(true);

        const fileToLoad = filename.get();

        op.setUiAttrib({ "extendTitle": CABLES.basename(url) });
        if (needsRefresh) op.refreshParams();

        cgl.patch.loading.addAssetLoadingTask(() =>
        {
            op.setUiError("urlerror", null);
            CGL.Texture.load(cgl, url, function (err, newTex)
            {
                cgl.checkFrameStarted("texture inittexture");

                if (filename.get() != fileToLoad)
                {
                    cgl.patch.loading.finished(loadingId);
                    loadingId = null;
                    return;
                }

                if (tex)tex.delete();

                if (err)
                {
                    const t = CGL.Texture.getErrorTexture(cgl);
                    textureOut.setRef(t);

                    op.setUiError("urlerror", "could not load texture: \"" + filename.get() + "\"", 2);
                    cgl.patch.loading.finished(loadingId);
                    loadingId = null;
                    return;
                }

                // textureOut.setRef(newTex);

                width.set(newTex.width);
                height.set(newTex.height);
                ratio.set(newTex.width / newTex.height);

                // if (!newTex.isPowerOfTwo()) op.setUiError("npot", "Texture dimensions not power of two! - Texture filtering will not work in WebGL 1.", 0);
                // else op.setUiError("npot", null);

                tex = newTex;
                // textureOut.set(null);
                textureOut.setRef(tex);

                loading.set(false);
                loaded.set(true);

                if (inFreeMemory.get()) tex.image = null;

                if (loadingId)
                {
                    cgl.patch.loading.finished(loadingId);
                    loadingId = null;
                }
                op.checkMainloopExists();
            }, {
                "anisotropic": cgl_aniso,
                "wrap": cgl_wrap,
                "flip": flip.get(),
                "unpackAlpha": unpackAlpha.get(),
                "pixelFormat": getPixelFormat(),
                "filter": cgl_filter
            });

            op.checkMainloopExists();
        });
    }
    else
    {
        cgl.patch.loading.finished(loadingId);
        loadingId = null;
        setTempTexture();
    }
}

function onFilterChange()
{
    if (tfilter.get() == "nearest") cgl_filter = CGL.Texture.FILTER_NEAREST;
    else if (tfilter.get() == "linear") cgl_filter = CGL.Texture.FILTER_LINEAR;
    else if (tfilter.get() == "mipmap") cgl_filter = CGL.Texture.FILTER_MIPMAP;
    else if (tfilter.get() == "Anisotropic") cgl_filter = CGL.Texture.FILTER_ANISOTROPIC;

    aniso.setUiAttribs({ "greyout": cgl_filter != CGL.Texture.FILTER_MIPMAP });

    cgl_aniso = parseFloat(aniso.get());

    reloadSoon();
}

function onWrapChange()
{
    if (wrap.get() == "repeat") cgl_wrap = CGL.Texture.WRAP_REPEAT;
    if (wrap.get() == "mirrored repeat") cgl_wrap = CGL.Texture.WRAP_MIRRORED_REPEAT;
    if (wrap.get() == "clamp to edge") cgl_wrap = CGL.Texture.WRAP_CLAMP_TO_EDGE;

    reloadSoon();
}

op.onFileChanged = function (fn)
{
    if (filename.get() && filename.get().indexOf(fn) > -1)
    {
        textureOut.set(CGL.Texture.getEmptyTexture(op.patch.cgl));
        textureOut.set(CGL.Texture.getTempTexture(cgl));
        realReload(true);
    }
};

// function testTexture()
// {
//     cgl.setTexture(0, tex.tex);

//     const filter = cgl.gl.getTexParameter(cgl.gl.TEXTURE_2D, cgl.gl.TEXTURE_MIN_FILTER);
//     const wrap = cgl.gl.getTexParameter(cgl.gl.TEXTURE_2D, cgl.gl.TEXTURE_WRAP_S);

//     if (cgl_filter === CGL.Texture.FILTER_MIPMAP && filter != cgl.gl.LINEAR_MIPMAP_LINEAR) console.log("wrong texture filter!", filename.get());
//     if (cgl_filter === CGL.Texture.FILTER_NEAREST && filter != cgl.gl.NEAREST) console.log("wrong texture filter!", filename.get());
//     if (cgl_filter === CGL.Texture.FILTER_LINEAR && filter != cgl.gl.LINEAR) console.log("wrong texture filter!", filename.get());

//     if (cgl_wrap === CGL.Texture.WRAP_REPEAT && wrap != cgl.gl.REPEAT) console.log("wrong texture wrap1!", filename.get());
//     if (cgl_wrap === CGL.Texture.WRAP_MIRRORED_REPEAT && wrap != cgl.gl.MIRRORED_REPEAT) console.log("wrong texture wrap2!", filename.get());
//     if (cgl_wrap === CGL.Texture.WRAP_CLAMP_TO_EDGE && wrap != cgl.gl.CLAMP_TO_EDGE) console.log("wrong texture wrap3!", filename.get());
// }


};

Ops.Gl.Texture_v2.prototype = new CABLES.Op();
CABLES.OPS["790f3702-9833-464e-8e37-6f0f813f7e16"]={f:Ops.Gl.Texture_v2,objName:"Ops.Gl.Texture_v2"};




// **************************************************************
// 
// Ops.Array.StringToArray_v2
// 
// **************************************************************

Ops.Array.StringToArray_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const text = op.inStringEditor("text", "1,2,3"),
    separator = op.inString("separator", ","),
    toNumber = op.inValueBool("Numbers", true),
    trim = op.inValueBool("Trim", true),
    splitNewLines = op.inBool("Split Lines", false),
    arr = op.outArray("array"),
    parsed = op.outTrigger("Parsed"),
    len = op.outNumber("length");

text.setUiAttribs({ "ignoreBigPort": true });

text.onChange = separator.onChange = toNumber.onChange = trim.onChange = parse;

splitNewLines.onChange = () =>
{
    separator.setUiAttribs({ "greyout": splitNewLines.get() });
    parse();
};

parse();

function parse()
{
    if (!text.get())
    {
        arr.set(null);
        arr.set([]);
        len.set(0);
        return;
    }

    let textInput = text.get();
    if (trim.get() && textInput)
    {
        textInput = textInput.replace(/^\s+|\s+$/g, "");
        textInput = textInput.trim();
    }

    let r;
    let sep = separator.get();
    if (separator.get() === "\\n") sep = "\n";
    if (splitNewLines.get()) r = textInput.split("\n");
    else r = textInput.split(sep);

    if (r[r.length - 1] === "") r.length -= 1;

    len.set(r.length);

    if (trim.get())
    {
        for (let i = 0; i < r.length; i++)
        {
            r[i] = r[i].replace(/^\s+|\s+$/g, "");
            r[i] = r[i].trim();
        }
    }

    op.setUiError("notnum", null);
    if (toNumber.get())
    {
        let hasStrings = false;
        for (let i = 0; i < r.length; i++)
        {
            r[i] = Number(r[i]);
            if (!CABLES.UTILS.isNumeric(r[i]))
            {
                hasStrings = true;
            }
        }
        if (hasStrings)
        {
            op.setUiError("notnum", "Parse Error / Not all values numerical!");
        }
    }

    arr.setRef(r);
    parsed.trigger();
}


};

Ops.Array.StringToArray_v2.prototype = new CABLES.Op();
CABLES.OPS["c974de41-4ce4-4432-b94d-724741109c71"]={f:Ops.Array.StringToArray_v2,objName:"Ops.Array.StringToArray_v2"};




// **************************************************************
// 
// Ops.Sidebar.SideBarSwitch
// 
// **************************************************************

Ops.Sidebar.SideBarSwitch = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const parentPort = op.inObject("link"),
    inArr = op.inArray("Names"),
    inStyle = op.inSwitch("Style", ["Tabs", "Switch"], "Switch"),
    labelPort = op.inString("Text", "Switch"),

    inInput = op.inInt("Input", 0),

    setDefaultValueButtonPort = op.inTriggerButton("Set Default"),
    inGreyOut = op.inBool("Grey Out", false),

    inDefault = op.inValue("Default", 0),

    siblingsPort = op.outObject("childs"),
    outIndex = op.outNumber("Index", -1),
    outStr = op.outString("String");

let elTabActive = null;
const el = document.createElement("div");
el.classList.add("sidebar__item");
el.dataset.op = op.id;
el.classList.add("cablesEle");
inDefault.setUiAttribs({ "greyout": true });

const label = document.createElement("div");
label.classList.add("sidebar__item-label");
const labelText = document.createTextNode(labelPort.get());
label.appendChild(labelText);
el.appendChild(label);

const switchGroup = document.createElement("div");
el.appendChild(switchGroup);

const greyOut = document.createElement("div");
greyOut.classList.add("sidebar__greyout");
el.appendChild(greyOut);
greyOut.style.display = "none";

parentPort.onChange = onParentChanged;
op.onDelete = onDelete;

op.toWorkNeedsParent("Ops.Sidebar.Sidebar");
op.setPortGroup("Default Item", [inDefault, setDefaultValueButtonPort]);
const tabEles = [];

inArr.onChange = rebuildHtml;
inStyle.onChange = updateStyle;
updateStyle();

labelPort.onChange = () =>
{
    label.innerHTML = labelPort.get();
};

inGreyOut.onChange = function ()
{
    greyOut.style.display = inGreyOut.get() ? "block" : "none";
};

function rebuildHtml()
{
    tabEles.length = 0;
    switchGroup.innerHTML = "";
    elTabActive = null;

    const arr = inArr.get();
    if (!arr) return;

    for (let i = 0; i < arr.length; i++)
    {
        const el = addTab(String(arr[i]));
        if (i == inDefault.get())setActiveTab(el);
    }
}

setDefaultValueButtonPort.onTriggered = () =>
{
    inDefault.set(outIndex.get());
    op.refreshParams();
};

function updateStyle()
{
    if (inStyle.get() == "Tabs")
    {
        el.classList.add("sidebar_tabs");
        switchGroup.classList.remove("sidebar_switchs");
        label.style.display = "none";
    }
    else
    {
        el.classList.remove("sidebar_tabs");
        switchGroup.classList.add("sidebar_switchs");
        label.style.display = "inline-block";
    }

    labelPort.setUiAttribs({ "greyout": inStyle.get() == "Tabs" });

    rebuildHtml();
}

function addTab(title)
{
    const tabEle = document.createElement("div");

    if (inStyle.get() == "Tabs") tabEle.classList.add("sidebar_tab");
    else tabEle.classList.add("sidebar_switch");

    tabEle.id = "tabEle" + tabEles.length;
    tabEle.innerHTML = title;
    tabEle.dataset.index = tabEles.length;
    tabEle.dataset.txt = title;

    tabEle.addEventListener("click", tabClicked);

    switchGroup.appendChild(tabEle);

    tabEles.push(tabEle);

    return tabEle;
}

inInput.onChange = () =>
{
    if (tabEles.length > inInput.get())
        tabClicked({ "target": tabEles[inInput.get()] });
    // setActiveTab(tabEles[inInput.get()]);
};

function setActiveTab(el)
{
    if (el)
    {
        elTabActive = el;
        op.log(el.dataset.index);
        outIndex.set(parseInt(el.dataset.index));
        outStr.set(el.dataset.txt);

        if (inStyle.get() == "Tabs") el.classList.add("sidebar_tab_active");
        else el.classList.add("sidebar_switch_active");
    }
}

function tabClicked(e)
{
    if (elTabActive)
        if (inStyle.get() == "Tabs") elTabActive.classList.remove("sidebar_tab_active");
        else elTabActive.classList.remove("sidebar_switch_active");
    setActiveTab(e.target);
}

function onParentChanged()
{
    siblingsPort.set(null);
    const parent = parentPort.get();
    if (parent && parent.parentElement)
    {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    }
    else
    {
        if (el.parentElement)
            el.parentElement.removeChild(el);
    }
}

function showElement(el)
{
    if (!el) return;
    el.style.display = "block";
}

function hideElement(el)
{
    if (!el) return;
    el.style.display = "none";
}

function onDelete()
{
    removeElementFromDOM(el);
}

function removeElementFromDOM(el)
{
    if (el && el.parentNode && el.parentNode.removeChild)
    {
        el.parentNode.removeChild(el);
    }
}


};

Ops.Sidebar.SideBarSwitch.prototype = new CABLES.Op();
CABLES.OPS["ebc8c92c-5fa6-4598-a9c6-b8e12f22f7c2"]={f:Ops.Sidebar.SideBarSwitch,objName:"Ops.Sidebar.SideBarSwitch"};




// **************************************************************
// 
// Ops.User.rambodc.Button_Bar
// 
// **************************************************************

Ops.User.rambodc.Button_Bar = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// Inputs
const parentPort = op.inObject("link");
const inVisible = op.inBool("Visible", true);

// Outputs
const siblingsPort = op.outObject("childs");
const buttonPressedPorts = [];
for (let i = 0; i < 5; i++) {
    buttonPressedPorts.push(op.outTrigger(`Pressed Trigger ${i}`));
}

// Constants for button configuration
const BUTTON_SIZE = '40px';
const BUTTON_COUNT = 5;
const buttonIcons = [
    'https://firebasestorage.googleapis.com/v0/b/cables-5b10a.appspot.com/o/assets%2FFeedsBar.png?alt=media&token=ef683c13-f6e6-4ff7-a49e-3062e0360940',
    'https://firebasestorage.googleapis.com/v0/b/cables-5b10a.appspot.com/o/assets%2FHistoryBar1.png?alt=media&token=bdac2786-56d6-409c-b3ef-ef76cda0bad4',
    'https://firebasestorage.googleapis.com/v0/b/cables-5b10a.appspot.com/o/assets%2FMyRazzBar2.png?alt=media&token=210cf788-5c7a-4a0c-a7bf-a4f10ce49619',
    'https://firebasestorage.googleapis.com/v0/b/cables-5b10a.appspot.com/o/assets%2FAssistantBar2.png?alt=media&token=d9b43b19-e271-4f30-8091-376b29505927',
    'https://firebasestorage.googleapis.com/v0/b/cables-5b10a.appspot.com/o/assets%2FSettings-Bar2.png?alt=media&token=9c951ff7-503a-46a3-8663-cde3ddb7933e'
];
const buttonLabels = [
    'Feeds',
    'History',
    'My Razz',
    'Assistant',
    'Settings'
];

const ACTIVE_CLASS = 'active-button'; // New class for indicating the active button

// Create main element
const el = document.createElement("div");
el.dataset.op = op.id;
el.classList.add("cablesEle", "sidebar__item");
el.style.display = 'flex';
el.style.flexDirection = 'row';
el.style.alignItems = 'center';
el.style.justifyContent = 'space-around';
el.style.width = '100%';

// Function to reset all buttons to their default state
function resetActiveButtons() {
    const activeButtons = el.getElementsByClassName(ACTIVE_CLASS);
    while(activeButtons.length) {
        activeButtons[0].classList.remove(ACTIVE_CLASS);
    }
}

// Create clickable areas for buttons and labels
for (let i = 0; i < BUTTON_COUNT; i++) {
    // Clickable container
    const clickableArea = document.createElement("div");
    clickableArea.style.display = 'flex';
    clickableArea.style.flexDirection = 'column';
    clickableArea.style.alignItems = 'center';
    clickableArea.style.justifyContent = 'center';
    clickableArea.style.cursor = 'pointer';

    // Button image
    const buttonImage = document.createElement("div");
    buttonImage.style.width = BUTTON_SIZE;
    buttonImage.style.height = BUTTON_SIZE;
    buttonImage.style.backgroundImage = `url('${buttonIcons[i]}')`;
    buttonImage.style.backgroundSize = 'cover';
    buttonImage.style.backgroundColor = 'transparent';

    // Label text
    const label = document.createElement("div");
    label.textContent = buttonLabels[i];
    label.style.textAlign = 'center';
    label.style.marginTop = '5px';
    label.style.fontSize = '12px';

    // Event listener for the clickable area
    clickableArea.addEventListener("click", () => {
        resetActiveButtons(); // Reset all buttons to default state
        label.classList.add(ACTIVE_CLASS); // Mark this button as active
        buttonPressedPorts[i].trigger(); // Trigger the corresponding output
    });

    // Assemble the button with the label
    clickableArea.appendChild(buttonImage);
    clickableArea.appendChild(label);
    el.appendChild(clickableArea);
}

// Apply styles for the active button statune
const style = document.createElement('style');
style.innerHTML = `
    .active-button {
        position: relative; /* Needed for positioning the pseudo-element */
    }
    .active-button::after {
        content: ''; /* Required for the pseudo-element to display */
        position: absolute; /* Positions the pseudo-element relative to its parent */
        bottom: -5px; /* Lower the underline away from the text */
        left: 0;
        width: 100%; /* Makes the pseudo-element as wide as its parent */
        height: 3px; /* The thickness of your underline */
        background-color: #007bff; /* The color of your underline */
        z-index: 1; /* Ensures the underline is rendered above the text */
    }
`;



document.head.appendChild(style);





// Link to parent and visibility toggle
parentPort.onChange = onParentChanged;
inVisible.onChange = () => el.style.display = inVisible.get() ? "flex" : "none";

function onParentChanged() {
    siblingsPort.set(null);
    const parent = parentPort.get();
    if (parent && parent.parentElement) {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    } else { // Detach if no parent
        if (el.parentElement) {
            el.parentElement.removeChild(el);
        }
    }
}

function onDelete() {
    if (el && el.parentElement) {
        el.parentElement.removeChild(el);
    }
}

op.onDelete = onDelete;


};

Ops.User.rambodc.Button_Bar.prototype = new CABLES.Op();
CABLES.OPS["745e9130-af2f-46f8-8cee-d8159323e241"]={f:Ops.User.rambodc.Button_Bar,objName:"Ops.User.rambodc.Button_Bar"};



window.addEventListener('load', function(event) {
CABLES.jsLoaded=new Event('CABLES.jsLoaded');
document.dispatchEvent(CABLES.jsLoaded);
});
