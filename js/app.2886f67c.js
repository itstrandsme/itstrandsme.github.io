(function(t){function e(e){for(var n,o,s=e[0],l=e[1],u=e[2],c=0,p=[];c<s.length;c++)o=s[c],r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);h&&h(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,s=1;s<i.length;s++){var l=i[s];0!==r[l]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},r={app:0},a=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var h=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);var n={};i.r(n),i.d(n,"getContext",function(){return b}),i.d(n,"createProgram",function(){return R}),i.d(n,"createShader",function(){return y}),i.d(n,"createTexture",function(){return _}),i.d(n,"createUniform",function(){return C}),i.d(n,"activeTexture",function(){return S}),i.d(n,"updateTexture",function(){return D}),i.d(n,"setRectangle",function(){return T});i("cadf"),i("551c"),i("f751"),i("097d");var r=i("2b0e"),a=i("ce5b"),o=i.n(a),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{dark:""}},[i("v-content",[i("Rain"),i("v-container",{attrs:{fluid:""}},[i("MainView")],1)],1)],1)},l=[],u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"blue-grey lighten-3 mx-auto",staticStyle:{margin:"auto"},attrs:{"max-width":"400"}},[i("v-container",{staticClass:"pa-2",attrs:{fluid:"","grid-list-md":""}},[i("v-layout",{attrs:{column:""}},[i("v-flex",[i("v-card",{staticClass:"mx-auto",attrs:{color:"blue-grey darken-2"}},[i("v-card-text",[i("div",{staticClass:"headline ds"},[t._v("\n              Death Stranding\n            ")]),i("span",[t._v("releases in:")]),i("Countdown",{attrs:{end:"November 8, 2019"}})],1)],1)],1),i("v-flex",[i("v-card",{staticClass:"mx-auto",attrs:{color:"blue-grey darken-2"}},[i("v-card-text",[i("a",{staticClass:"twitter-timeline white--text",attrs:{"data-width":"400","data-theme":"dark",href:"https://twitter.com/HIDEO_KOJIMA_EN?ref_src=twsrc%5Etfw"}},[t._v("Tweets by HIDEO_KOJIMA_EN")])])],1)],1),i("v-flex",[i("v-card",{staticClass:"mx-auto",attrs:{color:"blue-grey darken-2"}},[i("v-card-text",[t._v("\n            More content coming soon.\n          ")])],1)],1)],1)],1)],1)},h=[],c=i("3f54"),p=i.n(c),d={name:"MainView",data:function(){return{}},mounted:function(){this.$nextTick(function(){setTimeout(function(){"undefined"!==typeof window.twttr.widgets&&window.twttr.widgets.load()},2e3)})},components:{Countdown:p.a}},g=d,f=i("2877"),m=Object(f["a"])(g,u,h,!1,null,null,null),x=m.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:"",rain:""}},[i("div",{staticStyle:{position:"absolute",top:"0px"}},[i("div",{staticClass:"image-preload",staticStyle:{display:"none"}},[i("img",{attrs:{src:"img/drop-color.png",alt:""}}),i("img",{attrs:{src:"img/drop-alpha.png",alt:""}}),i("img",{attrs:{src:"img/weather/texture-rain-fg.png"}}),i("img",{attrs:{src:"img/weather/texture-rain-bg.png"}})]),i("div",[i("div",{staticClass:"slideshow"},[i("canvas",{staticStyle:{position:"absolute"},attrs:{width:"1",height:"1",id:"container"}}),i("div",{staticClass:"slide",attrs:{id:"slide-1","data-weather":"rain"}})]),i("p",{staticClass:"nosupport"},[t._v("Sorry, but your browser does not support WebGL!")])])])])},w=[];i("7f7f"),i("ac6a"),i("63d9");function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=["webgl","experimental-webgl"],n=null;return i.some(function(i){try{n=t.getContext(i,e)}catch(r){n=null}return null!=n}),null==n&&document.body.classList.add("no-webgl"),n}function R(t,e,i){var n=y(t,e,t.VERTEX_SHADER),r=y(t,i,t.FRAGMENT_SHADER),a=t.createProgram();t.attachShader(a,n),t.attachShader(a,r),t.linkProgram(a);var o=t.getProgramParameter(a,t.LINK_STATUS);if(!o){var s=t.getProgramInfoLog(a);return A("Error in program linking: "+s),t.deleteProgram(a),null}var l=t.getAttribLocation(a,"a_position"),u=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,u),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(l),t.vertexAttribPointer(l,2,t.FLOAT,!1,0,0),a}function y(t,e,i){var n=t.createShader(i);t.shaderSource(n,e),t.compileShader(n);var r=t.getShaderParameter(n,t.COMPILE_STATUS);if(!r){var a=t.getShaderInfoLog(n);return A("Error compiling shader '"+n+"':"+a),t.deleteShader(n),null}return n}function _(t,e,i){var n=t.createTexture();return S(t,i),t.bindTexture(t.TEXTURE_2D,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),null==e?n:(D(t,e),n)}function C(t,e,i,n){for(var r=t.getUniformLocation(e,"u_"+n),a=arguments.length,o=new Array(a>4?a-4:0),s=4;s<a;s++)o[s-4]=arguments[s];t["uniform"+i].apply(t,[r].concat(o))}function S(t,e){t.activeTexture(t["TEXTURE"+e])}function D(t,e){t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e)}function T(t,e,i,n,r){var a=e,o=e+n,s=i,l=i+r;t.bufferData(t.ARRAY_BUFFER,new Float32Array([a,s,o,s,a,l,a,l,o,s,o,l]),t.STATIC_DRAW)}function A(t){console.error(t)}function E(t,e,i,n){this.init(t,e,i,n)}E.prototype={canvas:null,gl:null,program:null,width:0,height:0,init:function(t,e,i,n){this.canvas=t,this.width=t.width,this.height=t.height,this.gl=b(t,e),this.program=this.createProgram(i,n),this.useProgram(this.program)},createProgram:function(t,e){var i=R(this.gl,t,e);return i},useProgram:function(t){this.program=t,this.gl.useProgram(t)},createTexture:function(t,e){return _(this.gl,t,e)},createUniform:function(t,e){for(var i=arguments.length,r=new Array(i>2?i-2:0),a=2;a<i;a++)r[a-2]=arguments[a];C.apply(n,[this.gl,this.program,t,e].concat(r))},activeTexture:function(t){S(this.gl,t)},updateTexture:function(t){D(this.gl,t)},viewport:function(t,e){this.gl.viewport(0,0,t,e)},draw:function(){T(this.gl,-1,-1,2,2),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}};var F=E;function P(t,e){var i=document.createElement("canvas");return i.width=t,i.height=e,i}function M(){this.init()}M.prototype={init:function(){},getVertexCode:function(){return"\nprecision mediump float;\n\nattribute vec2 a_position;\n\nvoid main() {\n   gl_Position = vec4(a_position, 0.0, 1.0);\n}\n"},getFragmentCode:function(){return'\nprecision mediump float;\n\n// textures\nuniform sampler2D u_waterMap;\nuniform sampler2D u_textureShine;\nuniform sampler2D u_textureFg;\nuniform sampler2D u_textureBg;\n\n// the texCoords passed in from the vertex shader.\nvarying vec2 v_texCoord;\nuniform vec2 u_resolution;\nuniform vec2 u_parallax;\nuniform float u_parallaxFg;\nuniform float u_parallaxBg;\nuniform float u_textureRatio;\nuniform bool u_renderShine;\nuniform bool u_renderShadow;\nuniform float u_minRefraction;\nuniform float u_refractionDelta;\nuniform float u_brightness;\nuniform float u_alphaMultiply;\nuniform float u_alphaSubtract;\n\n// alpha - blends two colors\nvec4 blend(vec4 bg, vec4 fg) {\n  vec3 bgm = bg.rgb * bg.a;\n  vec3 fgm = fg.rgb * fg.a;\n  float ia = 1.0 - fg.a;\n  float a = (fg.a  +  bg.a  *  ia);\n  vec3 rgb;\n  if(a != 0.0) {\n    rgb = (fgm  +  bgm  *  ia)  /  a;\n  } else {\n    rgb = vec3(0.0, 0.0, 0.0);\n  }\n  return vec4(rgb, a);\n}\n\nvec2 pixel() {\n  return vec2(1.0, 1.0) / u_resolution;\n}\n\nvec2 parallax(float v) {\n  return u_parallax * pixel() * v;\n}\n\nvec2 texCoord() {\n  return vec2(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y) / u_resolution;\n}\n\n// scales the bg up and proportionally to fill the container\nvec2 scaledTexCoord() {\n  float ratio = u_resolution.x / u_resolution.y;\n  vec2 scale = vec2(1.0, 1.0);\n  vec2 offset = vec2(0.0, 0.0);\n  float ratioDelta = ratio - u_textureRatio;\n  if(ratioDelta >= 0.0) {\n    scale.y = (1.0 + ratioDelta);\n    offset.y = ratioDelta / 2.0;\n  } else {\n    scale.x = (1.0 - ratioDelta);\n    offset.x = -ratioDelta / 2.0;\n  }\n  return (texCoord() + offset) / scale;\n}\n\n// get color from fg\nvec4 fgColor(float x, float y) {\n  float p2 = u_parallaxFg * 2.0;\n  vec2 scale = vec2(\n    (u_resolution.x + p2) / u_resolution.x, \n    (u_resolution.y + p2) / u_resolution.y\n  );\n\n  vec2 scaledTexCoord = texCoord() / scale;\n  vec2 offset = vec2(\n    (1.0 - (1.0 / scale.x)) / 2.0, \n    (1.0 - (1.0 / scale.y)) / 2.0\n  );\n\n  return texture2D(u_waterMap, \n    (scaledTexCoord + offset) + (pixel() * vec2(x, y)) + parallax(u_parallaxFg)\n  );\n}\n\nvoid main() {\n  vec4 bg = texture2D(u_textureBg, scaledTexCoord() + parallax(u_parallaxBg));\n\n  vec4 cur = fgColor(0.0, 0.0);\n\n  float d = cur.b; // "thickness"\n  float x = cur.g;\n  float y = cur.r;\n\n  float a = clamp(cur.a * u_alphaMultiply - u_alphaSubtract, 0.0, 1.0);\n\n  vec2 refraction = (vec2(x, y) - 0.5) * 2.0;\n  vec2 refractionParallax = parallax(u_parallaxBg - u_parallaxFg);\n  vec2 refractionPos = scaledTexCoord()\n    + (pixel() * refraction * (u_minRefraction + (d * u_refractionDelta)))\n    + refractionParallax;\n\n  vec4 tex = texture2D(u_textureFg, refractionPos);\n\n  if(u_renderShine) {\n    float maxShine = 490.0;\n    float minShine = maxShine * 0.18;\n    vec2 shinePos = vec2(0.5, 0.5)  +  ((1.0 / 512.0) * refraction) * -(minShine + ((maxShine - minShine) * d));\n    vec4 shine = texture2D(u_textureShine, shinePos);\n    tex = blend(tex, shine);\n  }\n\n  vec4 fg = vec4(tex.rgb * u_brightness, a);\n\n  if(u_renderShadow) {\n    float borderAlpha = fgColor(0., 0. -(d * 6.0)).a;\n    borderAlpha = borderAlpha * u_alphaMultiply - (u_alphaSubtract + 0.5);\n    borderAlpha = clamp(borderAlpha, 0., 1.);\n    borderAlpha *= 0.2;\n    vec4 border = vec4(0., 0., 0., borderAlpha);\n    fg = blend(border, fg);\n  }\n\n  gl_FragColor = blend(bg, fg);\n}\n'}};var B=M,O=new B,I=i("e98f"),U=I(O.getVertexCode()),L=I(O.getFragmentCode()),k={renderShadow:!1,minRefraction:256,maxRefraction:512,brightness:1,alphaMultiply:20,alphaSubtract:5,parallaxBg:5,parallaxFg:20};function W(t,e,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.canvas=t,this.canvasLiquid=e,this.imageShine=r,this.imageFg=i,this.imageBg=n,this.options=Object.assign({},k,a),this.init()}W.prototype={canvas:null,gl:null,canvasLiquid:null,width:0,height:0,imageShine:"",imageFg:"",imageBg:"",textures:null,programWater:null,programBlurX:null,programBlurY:null,parallaxX:0,parallaxY:0,renderShadow:!1,options:null,init:function(){this.width=this.canvas.width,this.height=this.canvas.height,this.gl=new F(this.canvas,{alpha:!1},U,L);var t=this.gl;this.programWater=t.program,t.createUniform("2f","resolution",this.width,this.height),t.createUniform("1f","textureRatio",this.imageBg.width/this.imageBg.height),t.createUniform("1i","renderShine",null!=this.imageShine),t.createUniform("1i","renderShadow",this.options.renderShadow),t.createUniform("1f","minRefraction",this.options.minRefraction),t.createUniform("1f","refractionDelta",this.options.maxRefraction-this.options.minRefraction),t.createUniform("1f","brightness",this.options.brightness),t.createUniform("1f","alphaMultiply",this.options.alphaMultiply),t.createUniform("1f","alphaSubtract",this.options.alphaSubtract),t.createUniform("1f","parallaxBg",this.options.parallaxBg),t.createUniform("1f","parallaxFg",this.options.parallaxFg),t.createTexture(null,0),this.textures=[{name:"textureShine",img:null==this.imageShine?P(2,2):this.imageShine},{name:"textureFg",img:this.imageFg},{name:"textureBg",img:this.imageBg}],this.textures.forEach(function(e,i){t.createTexture(e.img,i+1),t.createUniform("1i",e.name,i+1)}),this.render()},render:function(){this.gl.viewport(this.gl.canvas.width,this.gl.canvas.height),this.gl.useProgram(this.programWater),this.gl.createUniform("2f","resolution",this.width,this.height),this.gl.createUniform("2f","parallax",this.parallaxX,this.parallaxY),this.updateTexture(),this.gl.draw(),requestAnimationFrame(this.render.bind(this))},updateTextures:function(){var t=this;this.textures.forEach(function(e,i){t.gl.activeTexture(i+1),t.gl.updateTexture(e.img)})},updateTexture:function(){this.gl.activeTexture(0),this.gl.updateTexture(this.canvasLiquid)},resize:function(){var t=this.canvas.clientWidth,e=this.canvas.clientHeight;this.canvas.width==t&&this.canvas.height==e||(this.canvas.width=t,this.canvas.height=e,this.render())},get overlayTexture(){return null},set overlayTexture(t){}};var X=W,z=(i("55dd"),i("75fc"));i("6c7b"),i("5df3");function j(t,e,i){return new Promise(function(n,r){"string"==typeof t&&(t={name:"image"+e,src:t});var a=new Image;t.img=a,a.addEventListener("load",function(r){"function"==typeof i&&i.call(null,a,e),n(t)}),a.src=t.src})}function G(t,e){return Promise.all(t.map(function(t,i){return j(t,i,e)}))}function Y(t,e){return new Promise(function(i,n){G(t,e).then(function(t){var e={};t.forEach(function(t){e[t.name]={img:t.img,src:t.src}}),i(e)})})}function N(t,e){for(var i=0;i<t;i++)e.call(this,i)}function q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;null==t?(t=0,e=1):null!=t&&null==e&&(e=t,t=0);var n=e-t;return null==i&&(i=function(t){return t}),t+i(Math.random())*n}function H(t){return q()<=t}var V=64,$={x:0,y:0,r:0,spreadX:0,spreadY:0,momentum:0,momentumX:0,lastSpawn:0,nextSpawn:0,parent:null,isNew:!0,killed:!1,shrink:0},J={minR:10,maxR:40,maxDrops:900,rainChance:.3,rainLimit:3,dropletsRate:50,dropletsSize:[2,4],dropletsCleaningRadiusMultiplier:.43,raining:!0,globalTimeScale:1,trailRate:1,autoShrink:!0,spawnArea:[-.1,.95],trailScaleRange:[.2,.5],collisionRadius:.65,collisionRadiusIncrease:.01,dropFallMultiplier:1,collisionBoostMultiplier:.05,collisionBoost:1};function K(t,e,i,n,r){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.width=t,this.height=e,this.scale=i,this.dropAlpha=n,this.dropColor=r,this.options=Object.assign({},J,a),this.init()}K.prototype={dropColor:null,dropAlpha:null,canvas:null,ctx:null,width:0,height:0,scale:0,dropletsPixelDensity:1,droplets:null,dropletsCtx:null,dropletsCounter:0,drops:null,dropsGfx:null,clearDropletsGfx:null,textureCleaningIterations:0,lastRender:null,options:null,init:function(){this.canvas=P(this.width,this.height),this.ctx=this.canvas.getContext("2d"),this.droplets=P(this.width*this.dropletsPixelDensity,this.height*this.dropletsPixelDensity),this.dropletsCtx=this.droplets.getContext("2d"),this.drops=[],this.dropsGfx=[],this.renderDropsGfx(),this.update()},get deltaR(){return this.options.maxR-this.options.minR},get area(){return this.width*this.height/this.scale},get areaMultiplier(){return Math.sqrt(this.area/786432)},drawDroplet:function(t,e,i){this.drawDrop(this.dropletsCtx,Object.assign(Object.create($),{x:t*this.dropletsPixelDensity,y:e*this.dropletsPixelDensity,r:i*this.dropletsPixelDensity}))},renderDropsGfx:function(){var t=this,e=P(V,V),i=e.getContext("2d");this.dropsGfx=Array.apply(null,Array(255)).map(function(n,r){var a=P(V,V),o=a.getContext("2d");return i.clearRect(0,0,V,V),i.globalCompositeOperation="source-over",i.drawImage(t.dropColor,0,0,V,V),i.globalCompositeOperation="screen",i.fillStyle="rgba(0,0,"+r+",1)",i.fillRect(0,0,V,V),o.globalCompositeOperation="source-over",o.drawImage(t.dropAlpha,0,0,V,V),o.globalCompositeOperation="source-in",o.drawImage(e,0,0,V,V),a}),this.clearDropletsGfx=P(128,128);var n=this.clearDropletsGfx.getContext("2d");n.fillStyle="#000",n.beginPath(),n.arc(64,64,64,0,2*Math.PI),n.fill()},drawDrop:function(t,e){if(this.dropsGfx.length>0){var i=e.x,n=e.y,r=e.r,a=e.spreadX,o=e.spreadY,s=1,l=1.5,u=Math.max(0,Math.min(1,(r-this.options.minR)/this.deltaR*.9));u*=1/(.5*(e.spreadX+e.spreadY)+1),t.globalAlpha=1,t.globalCompositeOperation="source-over",u=Math.floor(u*(this.dropsGfx.length-1)),t.drawImage(this.dropsGfx[u],(i-r*s*(a+1))*this.scale,(n-r*l*(o+1))*this.scale,2*r*s*(a+1)*this.scale,2*r*l*(o+1)*this.scale)}},clearDroplets:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,n=this.dropletsCtx;n.globalCompositeOperation="destination-out",n.drawImage(this.clearDropletsGfx,(t-i)*this.dropletsPixelDensity*this.scale,(e-i)*this.dropletsPixelDensity*this.scale,2*i*this.dropletsPixelDensity*this.scale,2*i*this.dropletsPixelDensity*this.scale*1.5)},clearCanvas:function(){this.ctx.clearRect(0,0,this.width,this.height)},createDrop:function(t){return this.drops.length>=this.options.maxDrops*this.areaMultiplier?null:Object.assign(Object.create($),t)},addDrop:function(t){return!(this.drops.length>=this.options.maxDrops*this.areaMultiplier||null==t)&&(this.drops.push(t),!0)},updateRain:function(t){var e=[];if(this.options.raining){var i=this.options.rainLimit*t*this.areaMultiplier,n=0;while(H(this.options.rainChance*t*this.areaMultiplier)&&n<i){n++;var r=q(this.options.minR,this.options.maxR,function(t){return Math.pow(t,3)}),a=this.createDrop({x:q(this.width/this.scale),y:q(this.height/this.scale*this.options.spawnArea[0],this.height/this.scale*this.options.spawnArea[1]),r:r,momentum:1+.1*(r-this.options.minR)+q(2),spreadX:1.5,spreadY:1.5});null!=a&&e.push(a)}}return e},clearDrops:function(){this.drops.forEach(function(t){setTimeout(function(){t.shrink=.1+q(.5)},q(1200))}),this.clearTexture()},clearTexture:function(){this.textureCleaningIterations=50},updateDroplets:function(t){var e=this;this.textureCleaningIterations>0&&(this.textureCleaningIterations-=1*t,this.dropletsCtx.globalCompositeOperation="destination-out",this.dropletsCtx.fillStyle="rgba(0,0,0,"+.05*t+")",this.dropletsCtx.fillRect(0,0,this.width*this.dropletsPixelDensity,this.height*this.dropletsPixelDensity)),this.options.raining&&(this.dropletsCounter+=this.options.dropletsRate*t*this.areaMultiplier,N(this.dropletsCounter,function(t){e.dropletsCounter--,e.drawDroplet(q(e.width/e.scale),q(e.height/e.scale),q.apply(void 0,Object(z["a"])(e.options.dropletsSize).concat([function(t){return t*t}])))})),this.ctx.drawImage(this.droplets,0,0,this.width,this.height)},updateDrops:function(t){var e=this,i=[];this.updateDroplets(t);var n=this.updateRain(t);i=i.concat(n),this.drops.sort(function(t,i){var n=t.y*(e.width/e.scale)+t.x,r=i.y*(e.width/e.scale)+i.x;return n>r?1:n==r?0:-1}),this.drops.forEach(function(e,n){var r=this;if(!e.killed){if(H((e.r-this.options.minR*this.options.dropFallMultiplier)*(.1/this.deltaR)*t)&&(e.momentum+=q(e.r/this.options.maxR*4)),this.options.autoShrink&&e.r<=this.options.minR&&H(.05*t)&&(e.shrink+=.01),e.r-=e.shrink*t,e.r<=0&&(e.killed=!0),this.options.raining&&(e.lastSpawn+=e.momentum*t*this.options.trailRate,e.lastSpawn>e.nextSpawn)){var a=this.createDrop({x:e.x+.1*q(-e.r,e.r),y:e.y-.01*e.r,r:e.r*q.apply(void 0,Object(z["a"])(this.options.trailScaleRange)),spreadY:.1*e.momentum,parent:e});null!=a&&(i.push(a),e.r*=Math.pow(.97,t),e.lastSpawn=0,e.nextSpawn=q(this.options.minR,this.options.maxR)-2*e.momentum*this.options.trailRate+(this.options.maxR-e.r))}e.spreadX*=Math.pow(.4,t),e.spreadY*=Math.pow(.7,t);var o=e.momentum>0;o&&!e.killed&&(e.y+=e.momentum*this.options.globalTimeScale,e.x+=e.momentumX*this.options.globalTimeScale,e.y>this.height/this.scale+e.r&&(e.killed=!0));var s=(o||e.isNew)&&!e.killed;e.isNew=!1,s&&this.drops.slice(n+1,n+70).forEach(function(i){if(e!=i&&e.r>i.r&&e.parent!=i&&i.parent!=e&&!i.killed){var n=i.x-e.x,a=i.y-e.y,o=Math.sqrt(n*n+a*a);if(o<(e.r+i.r)*(r.options.collisionRadius+e.momentum*r.options.collisionRadiusIncrease*t)){var s=Math.PI,l=e.r,u=i.r,h=s*(l*l),c=s*(u*u),p=Math.sqrt((h+.8*c)/s);p>r.maxR&&(p=r.maxR),e.r=p,e.momentumX+=.1*n,e.spreadX=0,e.spreadY=0,i.killed=!0,e.momentum=Math.max(i.momentum,Math.min(40,e.momentum+p*r.options.collisionBoostMultiplier+r.options.collisionBoost))}}}),e.momentum-=.1*Math.max(1,.5*this.options.minR-e.momentum)*t,e.momentum<0&&(e.momentum=0),e.momentumX*=Math.pow(.7,t),e.killed||(i.push(e),o&&this.options.dropletsRate>0&&this.clearDroplets(e.x,e.y,e.r*this.options.dropletsCleaningRadiusMultiplier),this.drawDrop(this.ctx,e))}},this),this.drops=i},update:function(){this.clearCanvas();var t=Date.now();null==this.lastRender&&(this.lastRender=t);var e=t-this.lastRender,i=e/(1/60*1e3);i>1.1&&(i=1.1),i*=this.options.globalTimeScale,this.lastRender=t,this.updateDrops(i),requestAnimationFrame(this.update.bind(this))}};var Q=K,Z=i("cffa"),tt={name:"Rain",data:function(){return{textureRainFg:null,textureRainBg:null,textureStormLightningFg:null,textureStormLightningBg:null,textureFalloutFg:null,textureFalloutBg:null,textureSunFg:null,textureSunBg:null,textureDrizzleFg:null,textureDrizzleBg:null,dropColor:null,dropAlpha:null,textureFg:null,textureFgCtx:null,textureBg:null,textureBgCtx:null,textureBgSize:{width:384,height:256},textureFgSize:{width:96,height:64},raindrops:null,renderer:null,canvas:null,parallax:{x:0,y:0},weatherData:null,curWeatherData:null,blend:{v:0},dpi:0,oA:{alpha:-1,beta:-1,gamma:-1}}},methods:{loadTextures:function(){var t=this;Y([{name:"dropAlpha",src:"img/drop-alpha.png"},{name:"dropColor",src:"img/drop-color.png"},{name:"textureRainFg",src:"img/weather/texture-rain-fg.png"},{name:"textureRainBg",src:"img/weather/texture-rain-bg.png"}]).then(function(e){t.textureRainFg=e.textureRainFg.img,t.textureRainBg=e.textureRainBg.img,t.dropColor=e.dropColor.img,t.dropAlpha=e.dropAlpha.img,t.init()})},init:function(){this.canvas=document.querySelector("#container"),this.dpi=window.devicePixelRatio,this.canvas.width=window.innerWidth*this.dpi,this.canvas.height=window.innerHeight*this.dpi,this.canvas.style.width=window.innerWidth+"px",this.canvas.style.height=window.innerHeight+"px",this.raindrops=new Q(this.canvas.width,this.canvas.height,this.dpi,this.dropAlpha,this.dropColor,{trailRate:1,trailScaleRange:[.2,.45],collisionRadius:.45,dropletsCleaningRadiusMultiplier:.28}),this.textureFg=P(this.textureFgSize.width,this.textureFgSize.height),this.textureFgCtx=this.textureFg.getContext("2d"),this.textureBg=P(this.textureBgSize.width,this.textureBgSize.height),this.textureBgCtx=this.textureBg.getContext("2d"),this.generateTextures(this.textureRainFg,this.textureRainBg),this.renderer=new X(this.canvas,this.raindrops.canvas,this.textureFg,this.textureBg,null,{brightness:1.04,alphaMultiply:6,alphaSubtract:3}),this.setupEvents()},setupEvents:function(){this.setupParallax(),this.setupWeather(),this.setupFlash()},setupParallax:function(){var t=this;document.addEventListener("mousemove",function(e){var i=e.pageX,n=e.pageY;Z["a"].to(t.parallax,1,{x:i/t.canvas.width*2-1,y:n/t.canvas.height*2-1,ease:Quint.easeOut,onUpdate:function(){t.renderer.parallaxX=t.parallax.x,t.renderer.parallaxY=t.parallax.y}})})},setupFlash:function(){var t=this;setInterval(function(){H(t.curWeatherData.flashChance)&&flash(t.curWeatherData.bg,t.curWeatherData.fg,t.curWeatherData.flashBg,t.curWeatherData.flashFg)},500)},setupWeather:function(){var t=this;this.setupWeatherData(),window.addEventListener("hashchange",function(e){t.updateWeather()}),this.updateWeather()},setupWeatherData:function(){var t={raining:!0,minR:20,maxR:50,rainChance:.35,rainLimit:6,dropletsRate:50,dropletsSize:[3,5.5],trailRate:1,trailScaleRange:[.25,.35],fg:this.textureRainFg,bg:this.textureRainBg,flashFg:null,flashBg:null,flashChance:0,collisionRadiusIncrease:2e-4};function e(e){return Object.assign({},t,e)}this.weatherData={rain:e({rainChance:.35,dropletsRate:50,raining:!0,fg:this.textureRainFg,bg:this.textureRainBg})}},updateWeather:function(){var t=this,e=window.location.hash,i=null;""!=e&&(i=document.querySelector(e)),null==i&&(i=document.querySelector(".slide"),e="#"+i.getAttribute("id")),document.querySelector("[href='"+e+"']");var n=this.weatherData[i.getAttribute("data-weather")];this.curWeatherData=n,this.raindrops.options=Object.assign(this.raindrops.options,n),this.raindrops.clearDrops(),Z["a"].fromTo(this.blend,1,{v:0},{v:1,onUpdate:function(){t.generateTextures(n.fg,n.bg,t.blend.v),t.renderer.updateTextures()}})},flash:function(t,e,i,n){var r={v:0};function a(a){var o=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.025;return new Promise(function(l,u){Z["a"].to(r,s,{v:a,ease:Quint.easeOut,onUpdate:function(){o.generateTextures(e,t),o.generateTextures(n,i,r.v),o.renderer.updateTextures()},onComplete:function(){l()}})})}var o=a(1);N(q(2,7),function(t){o=o.then(function(){return a(q(.1,1))})}),o=o.then(function(){return a(1,.1)}).then(function(){a(0,.25)})},generateTextures:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this.textureFgCtx.globalAlpha=i,this.textureFgCtx.drawImage(t,0,0,this.textureFgSize.width,this.textureFgSize.height),this.textureBgCtx.globalAlpha=i,this.textureBgCtx.drawImage(e,0,0,this.textureBgSize.width,this.textureBgSize.height)},rotateCanvas:function(t){this.oA.alpha<0&&(this.oA.alpha=t.alpha,this.oA.beta=t.beta,this.oA.gamma=t.gamma);var e=90;Math.abs(t.alpha-this.oA.alpha)<e&&Math.abs(t.beta-this.oA.beta)<e&&Math.abs(t.gamma-this.oA.gamma)<e||this.resizeCanvas(null)},resizeCanvas:function(t){this.dpi=window.devicePixelRatio,this.canvas.width=window.innerWidth*this.dpi,this.canvas.height=window.innerHeight*this.dpi,this.canvas.style.width=window.innerWidth+"px",this.canvas.style.height=window.innerHeight+"px",this.updateWeather()}},created:function(){this.loadTextures(),window.addEventListener("resize",this.resizeCanvas),window.DeviceOrientationEvent&&window.addEventListener("deviceorientation",this.rotateCanvas)}},et=tt,it=Object(f["a"])(et,v,w,!1,null,null,null),nt=it.exports,rt={name:"app",data:function(){return{dark:!0}},components:{MainView:x,Rain:nt}},at=rt,ot=Object(f["a"])(at,s,l,!1,null,null,null),st=ot.exports;r["default"].use(o.a),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(st)}}).$mount("#app")}});
//# sourceMappingURL=app.2886f67c.js.map