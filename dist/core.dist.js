!function(a){function b(a,b,e){return 4===arguments.length?c.apply(this,arguments):void d(a,{declarative:!0,deps:b,declare:e})}function c(a,b,c,e){d(a,{declarative:!1,deps:b,executingRequire:c,execute:e})}function d(a,b){b.name=a,a in o||(o[a]=b),b.normalizedDeps=b.deps}function e(a,b){if(b[a.groupIndex]=b[a.groupIndex]||[],-1==p.call(b[a.groupIndex],a)){b[a.groupIndex].push(a);for(var c=0,d=a.normalizedDeps.length;d>c;c++){var f=a.normalizedDeps[c],g=o[f];if(g&&!g.evaluated){var h=a.groupIndex+(g.declarative!=a.declarative);if(void 0===g.groupIndex||g.groupIndex<h){if(void 0!==g.groupIndex&&(b[g.groupIndex].splice(p.call(b[g.groupIndex],g),1),0==b[g.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");g.groupIndex=h}e(g,b)}}}}function f(a){var b=o[a];b.groupIndex=0;var c=[];e(b,c);for(var d=!!b.declarative==c.length%2,f=c.length-1;f>=0;f--){for(var g=c[f],i=0;i<g.length;i++){var k=g[i];d?h(k):j(k)}d=!d}}function g(a){return s[a]||(s[a]={name:a,dependencies:[],exports:{},importers:[]})}function h(b){if(!b.module){var c=b.module=g(b.name),d=b.module.exports,e=b.declare.call(a,function(a,b){if(c.locked=!0,"object"==typeof a)for(var e in a)d[e]=a[e];else d[a]=b;for(var f=0,g=c.importers.length;g>f;f++){var h=c.importers[f];if(!h.locked)for(var i=0;i<h.dependencies.length;++i)h.dependencies[i]===c&&h.setters[i](d)}return c.locked=!1,b},{id:b.name});c.setters=e.setters,c.execute=e.execute;for(var f=0,i=b.normalizedDeps.length;i>f;f++){var j,k=b.normalizedDeps[f],l=o[k],m=s[k];m?j=m.exports:l&&!l.declarative?j=l.esModule:l?(h(l),m=l.module,j=m.exports):j=n(k),m&&m.importers?(m.importers.push(c),c.dependencies.push(m)):c.dependencies.push(null),c.setters[f]&&c.setters[f](j)}}}function i(a){var b,c=o[a];if(c)c.declarative?m(a,[]):c.evaluated||j(c),b=c.module.exports;else if(b=n(a),!b)throw new Error("Unable to load dependency "+a+".");return(!c||c.declarative)&&b&&b.__useDefault?b.default:b}function j(b){if(!b.module){var c={},d=b.module={exports:c,id:b.name};if(!b.executingRequire)for(var e=0,f=b.normalizedDeps.length;f>e;e++){var g=b.normalizedDeps[e],h=o[g];h&&j(h)}b.evaluated=!0;var l=b.execute.call(a,function(a){for(var c=0,d=b.deps.length;d>c;c++)if(b.deps[c]==a)return i(b.normalizedDeps[c]);throw new TypeError("Module "+a+" not declared as a dependency.")},c,d);l&&(d.exports=l),c=d.exports,c&&c.__esModule?b.esModule=c:b.esModule=k(c)}}function k(b){var c={};if(("object"==typeof b||"function"==typeof b)&&b!==a)if(q)for(var d in b)"default"!==d&&l(c,b,d);else{var e=b&&b.hasOwnProperty;for(var d in b)"default"===d||e&&!b.hasOwnProperty(d)||(c[d]=b[d])}return c.default=b,r(c,"__useDefault",{value:!0}),c}function l(a,b,c){try{var d;(d=Object.getOwnPropertyDescriptor(b,c))&&r(a,c,d)}catch(d){return a[c]=b[c],!1}}function m(b,c){var d=o[b];if(d&&!d.evaluated&&d.declarative){c.push(b);for(var e=0,f=d.normalizedDeps.length;f>e;e++){var g=d.normalizedDeps[e];-1==p.call(c,g)&&(o[g]?m(g,c):n(g))}d.evaluated||(d.evaluated=!0,d.module.execute.call(a))}}function n(a){if(u[a])return u[a];if("@node/"==a.substr(0,6))return u[a]=k(t(a.substr(6)));var b=o[a];if(!b)throw"Module "+a+" not present.";return f(a),m(a,[]),o[a]=void 0,b.declarative&&r(b.module.exports,"__esModule",{value:!0}),u[a]=b.declarative?b.module.exports:b.esModule}var o={},p=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},q=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(a){q=!1}var r;!function(){try{Object.defineProperty({},"a",{})&&(r=Object.defineProperty)}catch(a){r=function(a,b,c){try{a[b]=c.value||c.get.call(a)}catch(a){}}}}();var s={},t="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,u={"@empty":{}};return function(a,d,e,f){return function(g){g(function(g){for(var h={_nodeRequire:t,register:b,registerDynamic:c,get:n,set:function(a,b){u[a]=b},newModule:function(a){return a}},i=0;i<d.length;i++)(function(a,b){b&&b.__esModule?u[a]=b:u[a]=k(b)})(d[i],arguments[i]);f(h);var j=n(a[0]);if(a.length>1)for(var i=1;i<a.length;i++)n(a[i]);return e?j.default:j})}}}("undefined"!=typeof self?self:global)(["1"],["32","21","2f"],!1,function(a){this.require,this.exports,this.module;!function(b){function c(a,b){for(var c=a.split(".");c.length;)b=b[c.shift()];return b}function d(a){if("string"==typeof a)return c(a,b);if(!(a instanceof Array))throw new Error("Global exports must be a string or array.");for(var d={},e=!0,f=0;f<a.length;f++){var g=c(a[f],b);e&&(d.default=g,e=!1),d[a[f].split(".").pop()]=g}return d}function e(a){if(Object.keys)Object.keys(b).forEach(a);else for(var c in b)i.call(b,c)&&a(c)}function f(a){e(function(c){if(-1==j.call(k,c)){try{var d=b[c]}catch(a){k.push(c)}a(c,d)}})}var g,h=a,i=Object.prototype.hasOwnProperty,j=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},k=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];h.set("@@global-helpers",h.newModule({prepareGlobal:function(a,c,e){var h=b.define;b.define=void 0;var i;if(e){i={};for(var j in e)i[j]=b[j],b[j]=e[j]}return c||(g={},f(function(a,b){g[a]=b})),function(){var a;if(c)a=d(c);else{a={};var e,j;f(function(b,c){g[b]!==c&&"undefined"!=typeof c&&(a[b]=c,"undefined"!=typeof e?j||e===c||(j=!0):e=c)}),a=j?a:e}if(i)for(var k in i)b[k]=i[k];return b.define=h,a}}}))}("undefined"!=typeof self?self:global),a.registerDynamic("2",[],!0,function(a,b,c){var d=(this||self,{}.toString);return c.exports=function(a){return d.call(a).slice(8,-1)},c.exports}),a.registerDynamic("3",["2"],!0,function(a,b,c){var d=(this||self,a("2"));return c.exports=Object("z").propertyIsEnumerable(0)?Object:function(a){return"String"==d(a)?a.split(""):Object(a)},c.exports}),a.registerDynamic("4",["3","5"],!0,function(a,b,c){var d=(this||self,a("3")),e=a("5");return c.exports=function(a){return d(e(a))},c.exports}),a.registerDynamic("6",["4","7"],!0,function(a,b,c){var d=(this||self,a("4"));return a("7")("getOwnPropertyDescriptor",function(a){return function(b,c){return a(d(b),c)}}),c.exports}),a.registerDynamic("8",["9","6"],!0,function(a,b,c){var d=(this||self,a("9"));return a("6"),c.exports=function(a,b){return d.getDesc(a,b)},c.exports}),a.registerDynamic("a",["8"],!0,function(a,b,c){this||self;return c.exports={default:a("8"),__esModule:!0},c.exports}),a.registerDynamic("b",["a"],!0,function(a,b,c){"use strict";var d=(this||self,a("a").default);return b.default=function(a,b,c){for(var e=!0;e;){var f=a,g=b,h=c;e=!1,null===f&&(f=Function.prototype);var i=d(f,g);if(void 0!==i){if("value"in i)return i.value;var j=i.get;if(void 0===j)return;return j.call(h)}var k=Object.getPrototypeOf(f);if(null===k)return;a=k,b=g,c=h,e=!0,i=k=void 0}},b.__esModule=!0,c.exports}),a.registerDynamic("c",["9"],!0,function(a,b,c){var d=(this||self,a("9"));return c.exports=function(a,b){return d.create(a,b)},c.exports}),a.registerDynamic("d",["c"],!0,function(a,b,c){this||self;return c.exports={default:a("c"),__esModule:!0},c.exports}),a.registerDynamic("e",[],!0,function(a,b,c){this||self;return c.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a},c.exports}),a.registerDynamic("f",["e"],!0,function(a,b,c){var d=(this||self,a("e"));return c.exports=function(a){if(!d(a))throw TypeError(a+" is not an object!");return a},c.exports}),a.registerDynamic("10",["9","e","f","11"],!0,function(a,b,c){var d=(this||self,a("9").getDesc),e=a("e"),f=a("f"),g=function(a,b){if(f(a),!e(b)&&null!==b)throw TypeError(b+": can't set as prototype!")};return c.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(b,c,e){try{e=a("11")(Function.call,d(Object.prototype,"__proto__").set,2),e(b,[]),c=!(b instanceof Array)}catch(a){c=!0}return function(a,b){return g(a,b),c?a.__proto__=b:e(a,b),a}}({},!1):void 0),check:g},c.exports}),a.registerDynamic("12",["13","10"],!0,function(a,b,c){var d=(this||self,a("13"));return d(d.S,"Object",{setPrototypeOf:a("10").set}),c.exports}),a.registerDynamic("14",["12","15"],!0,function(a,b,c){this||self;return a("12"),c.exports=a("15").Object.setPrototypeOf,c.exports}),a.registerDynamic("16",["14"],!0,function(a,b,c){this||self;return c.exports={default:a("14"),__esModule:!0},c.exports}),a.registerDynamic("17",["d","16"],!0,function(a,b,c){"use strict";var d=(this||self,a("d").default),e=a("16").default;return b.default=function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=d(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(e?e(a,b):a.__proto__=b)},b.__esModule=!0,c.exports}),a.registerDynamic("5",[],!0,function(a,b,c){this||self;return c.exports=function(a){if(void 0==a)throw TypeError("Can't call method on  "+a);return a},c.exports}),a.registerDynamic("18",["5"],!0,function(a,b,c){var d=(this||self,a("5"));return c.exports=function(a){return Object(d(a))},c.exports}),a.registerDynamic("19",[],!0,function(a,b,c){var d=this||self,d=c.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();return"number"==typeof __g&&(__g=d),c.exports}),a.registerDynamic("1a",[],!0,function(a,b,c){this||self;return c.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a},c.exports}),a.registerDynamic("11",["1a"],!0,function(a,b,c){var d=(this||self,a("1a"));return c.exports=function(a,b,c){if(d(a),void 0===b)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}},c.exports}),a.registerDynamic("13",["19","15","11"],!0,function(a,b,c){var d=this||self,d=a("19"),e=a("15"),f=a("11"),g="prototype",h=function(a,b,c){var i,j,k,l=a&h.F,m=a&h.G,n=a&h.S,o=a&h.P,p=a&h.B,q=a&h.W,r=m?e:e[b]||(e[b]={}),s=m?d:n?d[b]:(d[b]||{})[g];m&&(c=b);for(i in c)j=!l&&s&&i in s,j&&i in r||(k=j?s[i]:c[i],r[i]=m&&"function"!=typeof s[i]?c[i]:p&&j?f(k,d):q&&s[i]==k?function(a){var b=function(b){return this instanceof a?new a(b):a(b)};return b[g]=a[g],b}(k):o&&"function"==typeof k?f(Function.call,k):k,o&&((r[g]||(r[g]={}))[i]=k))};return h.F=1,h.G=2,h.S=4,h.P=8,h.B=16,h.W=32,c.exports=h,c.exports}),a.registerDynamic("1b",[],!0,function(a,b,c){this||self;return c.exports=function(a){try{return!!a()}catch(a){return!0}},c.exports}),a.registerDynamic("7",["13","15","1b"],!0,function(a,b,c){var d=(this||self,a("13")),e=a("15"),f=a("1b");return c.exports=function(a,b){var c=(e.Object||{})[a]||Object[a],g={};g[a]=b(c),d(d.S+d.F*f(function(){c(1)}),"Object",g)},c.exports}),a.registerDynamic("1c",["18","7"],!0,function(a,b,c){var d=(this||self,a("18"));return a("7")("keys",function(a){return function(b){return a(d(b))}}),c.exports}),a.registerDynamic("15",[],!0,function(a,b,c){var d=(this||self,c.exports={version:"1.2.6"});return"number"==typeof __e&&(__e=d),c.exports}),a.registerDynamic("1d",["1c","15"],!0,function(a,b,c){this||self;return a("1c"),c.exports=a("15").Object.keys,c.exports}),a.registerDynamic("1e",["1d"],!0,function(a,b,c){this||self;return c.exports={default:a("1d"),__esModule:!0},c.exports}),a.register("1f",["1e"],function(a){function b(a){for(var b=this.length;b--;)if("object"==typeof this[b]){var d=void 0,e=this[b];for(var f in e)if(d=c(a)[0],d===f&&a[d]===e[f])return b}}var c;return{setters:[function(a){c=a.default}],execute:function(){"use strict";a("findItemNumberForObjectInObject",b)}}}),a.register("20",["17","21","22","23","b","1f"],function(a){var b,c,d,e,f,g,h;return{setters:[function(a){b=a.default},function(a){c=a.default},function(a){d=a.default},function(a){e=a.default},function(a){f=a.default},function(a){g=a}],execute:function(){"use strict";h=function(a){function h(){e(this,h),f(Object.getPrototypeOf(h.prototype),"constructor",this).apply(this,arguments)}return b(h,a),d(h,[{key:"removeAll",value:function(){for(;this.length;)this.shift();return this}},{key:"removeString",value:function(a){var b=this.indexOf(a);return b!==-1?this.splice(b,1):void 0}},{key:"removeObjectByRef",value:function(a){for(var b=this.length;b--;)if(c.equals(this[b],a))return this.splice(b,1)}},{key:"removeByObjectInObject",value:function(a){var b=this.findItemNumberForObjectInObject(a);return b?this.splice(b,1):void 0}},{key:"findItemNumberForObjectInObject",value:function(a){var b=g.findItemNumberForObjectInObject.call(this,a);if(b)return b}},{key:"onPush",value:function(a){}},{key:"push",value:function(a){f(Object.getPrototypeOf(h.prototype),"push",this).call(this,a),this.onPush(a)}}]),h}(Array),a("default",h)}}}),a.register("24",["20","22","23"],function(a){var b,c,d,e,f;return{setters:[function(a){b=a.default},function(a){c=a.default},function(a){d=a.default}],execute:function(){"use strict";e=function a(){d(this,a),this.title="",this.description="",this.isActive=!1},f=function(){function a(){d(this,a),this.viewData=new b}return c(a,[{key:"getViewItemDataModel",value:function(){return new e}}]),a}(),a("default",new f)}}}),a.register("25",["20","22","23","24"],function(a){var b,c,d,e,f;return{setters:[function(a){b=a.default},function(a){c=a.default},function(a){d=a.default},function(a){e=a.default}],execute:function(){"use strict";f=function(){function a(b){d(this,a),this.$q=b,this.viewData=e.viewData,this.init()}return c(a,[{key:"init",value:function(){var a=this;this.viewData.onPush=function(b){b||a.viewData.removeString()},this.getApiData().then(function(b){a.constructor.assignApiData.call(a,a.constructor.processBeforeAssign.call(a,b))},function(a){})}},{key:"getApiData",value:function(){var a=this.$q.defer(),b=[{itemTitle:"Feature name",itemDescription:"Feature description .etc",isEnabled:!1},{itemTitle:"Feature name",itemDescription:"Feature description .etc",isEnabled:!1}];return setTimeout(function(a){a.resolve(b)},1e3,a),a.promise}}],[{key:"processBeforeAssign",value:function(a){return a}},{key:"assignApiData",value:function(a){var b=this,c=void 0;a.map(function(a){c=e.getViewItemDataModel(),c.title=a.itemTitle,c.description=a.itemDescription,c.isActive=a.isEnabled,b.viewData.push(c)})}}]),a}(),f.$inject=["$q"],a("default",f)}}}),a.registerDynamic("9",[],!0,function(a,b,c){var d=(this||self,Object);return c.exports={create:d.create,getProto:d.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:d.getOwnPropertyDescriptor,setDesc:d.defineProperty,setDescs:d.defineProperties,getKeys:d.keys,getNames:d.getOwnPropertyNames,getSymbols:d.getOwnPropertySymbols,each:[].forEach},c.exports}),a.registerDynamic("26",["9"],!0,function(a,b,c){var d=(this||self,a("9"));return c.exports=function(a,b,c){return d.setDesc(a,b,c)},c.exports}),a.registerDynamic("27",["26"],!0,function(a,b,c){this||self;return c.exports={default:a("26"),__esModule:!0},c.exports}),a.registerDynamic("22",["27"],!0,function(a,b,c){"use strict";var d=(this||self,a("27").default);return b.default=function(){function a(a,b){for(var c=0;c<b.length;c++){var e=b[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),d(a,e.key,e)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),b.__esModule=!0,c.exports}),a.register("28",["22","23"],function(a){var b,c,d;return{setters:[function(a){b=a.default},function(a){c=a.default}],execute:function(){"use strict";d=function(){function a(b){c(this,a),this.viewData=b.viewData,this.birthday=new Date}return b(a,[{key:"removeData",value:function(){this.viewData.removeObjectByRef(this.viewData[1])}}]),a}(),d.$inject=["coreSvc"],a("default",d)}}}),a.registerDynamic("23",[],!0,function(a,b,c){"use strict";this||self;return b.default=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")},b.__esModule=!0,c.exports}),a.register("29",["23","2a"],function(a){var b,c,d,e;return{setters:[function(a){b=a.default},function(a){c=a.componentConfig}],execute:function(){"use strict";d={},e=function a(){b(this,a),this.scope=d,this.controllerAs="ctrl",this.templateUrl=c.COMPONENT_TEMPLATE_NAME,this.controller=c.CONTROLLER_NAME,this.link=function(a,b,c,d){}},a("default",e)}}}),a.register("2b",[],function(a){"use strict";var b,c,d,e,f,g,h,i,j,k;return{setters:[],execute:function(){b="msw",a("NAMESPACE",b),c="core",a("COMPONENT_NAME",c),d="Core",a("COMPONENT_NAME_CAPS",d),e=b+"-"+c,a("DIRECTIVE_NAME",e),f=""+b+d,a("DIRECTIVE_NAME_CAPS",f),g=c+"Svc",a("SERVICE_NAME",g),h=d+"Ctrl",a("CONTROLLER_NAME",h),i=c+"Settings",a("COMPONENT_CONFIG_NAME",i),j=c+".template",a("COMPONENT_TEMPLATE_COMPONENT",j),k=c+"Html",a("COMPONENT_TEMPLATE_NAME",k)}}}),a.register("2a",["2b"],function(a){"use strict";function b(a){}var c,d;return{setters:[function(a){c=a}],execute:function(){d="<"+c.DIRECTIVE_NAME+"></"+c.DIRECTIVE_NAME+">",b.$inject=["$stateProvider","$urlRouterProvider"],a("componentRoutes",b),a("componentConfig",c)}}}),a.register("2c",[],function(a,b){"use strict";var c;return{setters:[],execute:function(){a("__useDefault",c=!0),a("__useDefault",c),a("default",'<div layout="row">\n\n  <md-list\n      flex="100"\n      ng-if="ctrl.viewData.length">\n\n    <md-list-item class="md-2-line" ng-repeat="item in ctrl.viewData">\n      <md-checkbox ng-model="item.isActive"></md-checkbox>\n      <div class="md-list-item-text">\n        <h3>{{item.title}}</h3>\n        <p>{{item.description}}</p>\n      </div>\n    </md-list-item>\n\n    <md-button class="md-raised md-primary"\n               ng-click="ctrl.removeData()">\n      Remove an item\n    </md-button>\n  </md-list>\n\n  <md-progress-linear\n      flex="20" flex-offset="5"\n      ng-if="!ctrl.viewData.length"\n      md-mode="indeterminate">\n  </md-progress-linear>\n\n</div>')}}}),a.registerDynamic("2d",[],!1,function(b,c,d){var e=a.get("@@global-helpers").prepareGlobal(d.id,null,null);return function(a){}(this),e()}),a.register("2e",["21","2f","2a","2c","2d"],function(a){"use strict";var b,c,d,e,f;return{setters:[function(a){b=a.default},function(a){},function(a){c=a.componentConfig},function(a){d=a.default},function(a){e=a.default}],execute:function(){f=b.module(""+c.COMPONENT_TEMPLATE_COMPONENT,["ngMaterial"]),f.run(["$templateCache",function(a){a.put(c.COMPONENT_TEMPLATE_NAME,d)}]),a("default",f)}}}),a.register("30",["2e"],function(a){"use strict";var b;return{setters:[function(a){b=a.default}],execute:function(){a("default",b)}}}),a.register("31",["21","25","28","29","30","32","2a"],function(a){"use strict";var b,c,d,e,f,g,h,i;return{setters:[function(a){b=a.default},function(a){c=a.default},function(a){d=a.default},function(a){e=a.default},function(a){f=a.default},function(a){},function(a){g=a.componentRoutes,h=a.componentConfig}],execute:function(){i=b.module(h.NAMESPACE+"."+h.COMPONENT_NAME,["ui.router",f.name]),i.constant(h.COMPONENT_CONFIG_NAME,h),i.config(g),i.controller(h.CONTROLLER_NAME,d),i.service(h.SERVICE_NAME,c),i.directive(h.DIRECTIVE_NAME_CAPS,[function(){return new e}]),a("default",i)}}}),a.register("1",["31"],function(a){"use strict";var b;return{setters:[function(a){b=a.default}],execute:function(){a("default",b)}}}),function(a){if("undefined"!=typeof document){var b=document,c="appendChild",d="styleSheet",e=b.createElement("style");e.type="text/css",b.getElementsByTagName("head")[0][c](e),e[d]?e[d].cssText=a:e[c](b.createTextNode(a))}}(".margin-top-1em{margin-top:1em}")})(function(a){module.exports=a(require("angular-ui/ui-router"),require("angular"),require("angular-material"))});
//# sourceMappingURL=core.dist.js.map