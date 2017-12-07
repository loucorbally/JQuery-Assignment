(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AkhEiQh4h4AAiqQAAipB4h4QB4h4CpAAQCqAAB4B4QB4B4AACpQAACqh4B4Qh4B4iqAAQipAAh4h4g");
	this.shape.setTransform(41,41);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,82,82), null);


// stage content:
(lib.bluecircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-91.9,184.1,1,1,0,0,0,41,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.14,scaleY:1.12,x:-55.5},0).wait(1).to({scaleX:1.27,scaleY:1.23,x:-19},0).wait(1).to({scaleX:1.4,scaleY:1.35,x:17.4,y:184},0).wait(1).to({scaleX:1.54,scaleY:1.46,x:53.9},0).wait(1).to({scaleX:1.67,scaleY:1.58,x:90.3,y:184.1},0).wait(1).to({scaleX:1.81,scaleY:1.69,x:126.7},0).wait(1).to({scaleX:1.94,scaleY:1.81,x:163.2,y:184},0).wait(1).to({scaleX:2.08,scaleY:1.93,x:199.6},0).wait(1).to({scaleX:2.21,scaleY:2.04,x:236.1},0).wait(1).to({scaleX:2.35,scaleY:2.16,x:272.5,y:184.1},0).wait(1).to({scaleX:2.48,scaleY:2.27,x:309},0).wait(1).to({scaleX:2.62,scaleY:2.39,x:305.4,y:184},0).wait(1).to({scaleX:2.75,scaleY:2.5,x:301.9},0).wait(1).to({scaleX:2.89,scaleY:2.62,x:298.2,y:184.1},0).wait(1).to({scaleX:3.02,scaleY:2.73,x:294.7},0).wait(1).to({scaleX:3.16,scaleY:2.85,x:291.1},0).wait(1).to({scaleX:3.29,scaleY:2.97,x:287.5,y:184},0).wait(1).to({scaleX:3.42,scaleY:3.08,x:283.9},0).wait(1).to({scaleX:3.56,scaleY:3.2,x:280.3,y:184.1},0).wait(1).to({scaleX:3.69,scaleY:3.31,x:276.8},0).wait(1).to({scaleX:3.83,scaleY:3.43,x:273.2,y:184},0).wait(1).to({scaleX:3.96,scaleY:3.54,x:269.6},0).wait(1).to({scaleX:4.1,scaleY:3.66,x:266},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(142.1,343.1,82,82);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;