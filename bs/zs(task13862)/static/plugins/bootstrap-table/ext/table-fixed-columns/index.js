/**
 * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
 *
 * @version v1.16.0
 * @license MIT
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):e((t=t||self).jQuery)}(this,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e){return t(e={exports:{}},e.exports),e.exports}var i=function(t){return t&&t.Math==Math&&t},r=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof e&&e)||Function("return this")(),o=function(t){try{return!!t()}catch(t){return!0}},u=!o((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),f={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,c={f:a&&!f.call({1:2},1)?function(t){var e=a(this,t);return!!e&&e.enumerable}:f},l=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},s={}.toString,d=function(t){return s.call(t).slice(8,-1)},h="".split,p=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==d(t)?h.call(t,""):Object(t)}:Object,y=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},g=function(t){return p(y(t))},v=function(t){return"object"==typeof t?null!==t:"function"==typeof t},b=function(t,e){if(!v(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!v(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!v(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!v(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,x=function(t,e){return m.call(t,e)},$=r.document,w=v($)&&v($.createElement),O=function(t){return w?$.createElement(t):{}},C=!u&&!o((function(){return 7!=Object.defineProperty(O("div"),"a",{get:function(){return 7}}).a})),S=Object.getOwnPropertyDescriptor,B={f:u?S:function(t,e){if(t=g(t),e=b(e,!0),C)try{return S(t,e)}catch(t){}if(x(t,e))return l(!c.f.call(t,e),t[e])}},j=function(t){if(!v(t))throw TypeError(String(t)+" is not an object");return t},R=Object.defineProperty,T={f:u?R:function(t,e,n){if(j(t),e=b(e,!0),j(n),C)try{return R(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},F=u?function(t,e,n){return T.f(t,e,l(1,n))}:function(t,e,n){return t[e]=n,t},E=function(t,e){try{F(r,t,e)}catch(n){r[t]=e}return e},k=r["__core-js_shared__"]||E("__core-js_shared__",{}),A=Function.toString;"function"!=typeof k.inspectSource&&(k.inspectSource=function(t){return A.call(t)});var P,N,_,H=k.inspectSource,M=r.WeakMap,I="function"==typeof M&&/native code/.test(H(M)),W=n((function(t){(t.exports=function(t,e){return k[t]||(k[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.0",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),D=0,L=Math.random(),X=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++D+L).toString(36)},Y=W("keys"),q=function(t){return Y[t]||(Y[t]=X(t))},V={},z=r.WeakMap;if(I){var G=new z,K=G.get,Q=G.has,Z=G.set;P=function(t,e){return Z.call(G,t,e),e},N=function(t){return K.call(G,t)||{}},_=function(t){return Q.call(G,t)}}else{var J=q("state");V[J]=!0,P=function(t,e){return F(t,J,e),e},N=function(t){return x(t,J)?t[J]:{}},_=function(t){return x(t,J)}}var U,tt,et={set:P,get:N,has:_,enforce:function(t){return _(t)?N(t):P(t,{})},getterFor:function(t){return function(e){var n;if(!v(e)||(n=N(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},nt=n((function(t){var e=et.get,n=et.enforce,i=String(String).split("String");(t.exports=function(t,e,o,u){var f=!!u&&!!u.unsafe,a=!!u&&!!u.enumerable,c=!!u&&!!u.noTargetGet;"function"==typeof o&&("string"!=typeof e||x(o,"name")||F(o,"name",e),n(o).source=i.join("string"==typeof e?e:"")),t!==r?(f?!c&&t[e]&&(a=!0):delete t[e],a?t[e]=o:F(t,e,o)):a?t[e]=o:E(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||H(this)}))})),it=r,rt=function(t){return"function"==typeof t?t:void 0},ot=function(t,e){return arguments.length<2?rt(it[t])||rt(r[t]):it[t]&&it[t][e]||r[t]&&r[t][e]},ut=Math.ceil,ft=Math.floor,at=function(t){return isNaN(t=+t)?0:(t>0?ft:ut)(t)},ct=Math.min,lt=function(t){return t>0?ct(at(t),9007199254740991):0},st=Math.max,dt=Math.min,ht=function(t){return function(e,n,i){var r,o=g(e),u=lt(o.length),f=function(t,e){var n=at(t);return n<0?st(n+e,0):dt(n,e)}(i,u);if(t&&n!=n){for(;u>f;)if((r=o[f++])!=r)return!0}else for(;u>f;f++)if((t||f in o)&&o[f]===n)return t||f||0;return!t&&-1}},pt={includes:ht(!0),indexOf:ht(!1)},yt=pt.indexOf,gt=function(t,e){var n,i=g(t),r=0,o=[];for(n in i)!x(V,n)&&x(i,n)&&o.push(n);for(;e.length>r;)x(i,n=e[r++])&&(~yt(o,n)||o.push(n));return o},vt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],bt=vt.concat("length","prototype"),mt={f:Object.getOwnPropertyNames||function(t){return gt(t,bt)}},xt={f:Object.getOwnPropertySymbols},$t=ot("Reflect","ownKeys")||function(t){var e=mt.f(j(t)),n=xt.f;return n?e.concat(n(t)):e},wt=function(t,e){for(var n=$t(e),i=T.f,r=B.f,o=0;o<n.length;o++){var u=n[o];x(t,u)||i(t,u,r(e,u))}},Ot=/#|\.prototype\./,Ct=function(t,e){var n=Bt[St(t)];return n==Rt||n!=jt&&("function"==typeof e?o(e):!!e)},St=Ct.normalize=function(t){return String(t).replace(Ot,".").toLowerCase()},Bt=Ct.data={},jt=Ct.NATIVE="N",Rt=Ct.POLYFILL="P",Tt=Ct,Ft=B.f,Et=function(t,e){var n,i,o,u,f,a=t.target,c=t.global,l=t.stat;if(n=c?r:l?r[a]||E(a,{}):(r[a]||{}).prototype)for(i in e){if(u=e[i],o=t.noTargetGet?(f=Ft(n,i))&&f.value:n[i],!Tt(c?i:a+(l?".":"#")+i,t.forced)&&void 0!==o){if(typeof u==typeof o)continue;wt(u,o)}(t.sham||o&&o.sham)&&F(u,"sham",!0),nt(n,i,u,t)}},kt=Array.isArray||function(t){return"Array"==d(t)},At=function(t){return Object(y(t))},Pt=function(t,e,n){var i=b(e);i in t?T.f(t,i,l(0,n)):t[i]=n},Nt=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())})),_t=Nt&&!Symbol.sham&&"symbol"==typeof Symbol(),Ht=W("wks"),Mt=r.Symbol,It=_t?Mt:X,Wt=function(t){return x(Ht,t)||(Nt&&x(Mt,t)?Ht[t]=Mt[t]:Ht[t]=It("Symbol."+t)),Ht[t]},Dt=Wt("species"),Lt=function(t,e){var n;return kt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!kt(n.prototype)?v(n)&&null===(n=n[Dt])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},Xt=ot("navigator","userAgent")||"",Yt=r.process,qt=Yt&&Yt.versions,Vt=qt&&qt.v8;Vt?tt=(U=Vt.split("."))[0]+U[1]:Xt&&(!(U=Xt.match(/Edge\/(\d+)/))||U[1]>=74)&&(U=Xt.match(/Chrome\/(\d+)/))&&(tt=U[1]);var zt,Gt=tt&&+tt,Kt=Wt("species"),Qt=Wt("isConcatSpreadable"),Zt=Gt>=51||!o((function(){var t=[];return t[Qt]=!1,t.concat()[0]!==t})),Jt=(zt="concat",Gt>=51||!o((function(){var t=[];return(t.constructor={})[Kt]=function(){return{foo:1}},1!==t[zt](Boolean).foo}))),Ut=function(t){if(!v(t))return!1;var e=t[Qt];return void 0!==e?!!e:kt(t)};Et({target:"Array",proto:!0,forced:!Zt||!Jt},{concat:function(t){var e,n,i,r,o,u=At(this),f=Lt(u,0),a=0;for(e=-1,i=arguments.length;e<i;e++)if(o=-1===e?u:arguments[e],Ut(o)){if(a+(r=lt(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<r;n++,a++)n in o&&Pt(f,a,o[n])}else{if(a>=9007199254740991)throw TypeError("Maximum allowed index exceeded");Pt(f,a++,o)}return f.length=a,f}});var te,ee=function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}},ne=[].push,ie=function(t){var e=1==t,n=2==t,i=3==t,r=4==t,o=6==t,u=5==t||o;return function(f,a,c,l){for(var s,d,h=At(f),y=p(h),g=ee(a,c,3),v=lt(y.length),b=0,m=l||Lt,x=e?m(f,v):n?m(f,0):void 0;v>b;b++)if((u||b in y)&&(d=g(s=y[b],b,h),t))if(e)x[b]=d;else if(d)switch(t){case 3:return!0;case 5:return s;case 6:return b;case 2:ne.call(x,s)}else if(r)return!1;return o?-1:i||r?r:x}},re={forEach:ie(0),map:ie(1),filter:ie(2),some:ie(3),every:ie(4),find:ie(5),findIndex:ie(6)},oe=Object.keys||function(t){return gt(t,vt)},ue=u?Object.defineProperties:function(t,e){j(t);for(var n,i=oe(e),r=i.length,o=0;r>o;)T.f(t,n=i[o++],e[n]);return t},fe=ot("document","documentElement"),ae=q("IE_PROTO"),ce=function(){},le=function(t){return"<script>"+t+"<\/script>"},se=function(){try{te=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;se=te?function(t){t.write(le("")),t.close();var e=t.parentWindow.Object;return t=null,e}(te):((e=O("iframe")).style.display="none",fe.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(le("document.F=Object")),t.close(),t.F);for(var n=vt.length;n--;)delete se.prototype[vt[n]];return se()};V[ae]=!0;var de=Object.create||function(t,e){var n;return null!==t?(ce.prototype=j(t),n=new ce,ce.prototype=null,n[ae]=t):n=se(),void 0===e?n:ue(n,e)},he=Wt("unscopables"),pe=Array.prototype;null==pe[he]&&T.f(pe,he,{configurable:!0,value:de(null)});var ye,ge=re.find,ve=!0;"find"in[]&&Array(1).find((function(){ve=!1})),Et({target:"Array",proto:!0,forced:ve},{find:function(t){return ge(this,t,arguments.length>1?arguments[1]:void 0)}}),ye="find",pe[he][ye]=!0;var be=pt.indexOf,me=[].indexOf,xe=!!me&&1/[1].indexOf(1,-0)<0,$e=function(t,e){var n=[][t];return!n||!o((function(){n.call(null,e||function(){throw 1},1)}))}("indexOf");Et({target:"Array",proto:!0,forced:xe||$e},{indexOf:function(t){return xe?me.apply(this,arguments)||0:be(this,t,arguments.length>1?arguments[1]:void 0)}});var we=[].reverse,Oe=[1,2];Et({target:"Array",proto:!0,forced:String(Oe)===String(Oe.reverse())},{reverse:function(){return kt(this)&&(this.length=this.length),we.call(this)}});var Ce="\t\n\v\f\r                　\u2028\u2029\ufeff",Se="["+Ce+"]",Be=RegExp("^"+Se+Se+"*"),je=RegExp(Se+Se+"*$"),Re=function(t){return function(e){var n=String(y(e));return 1&t&&(n=n.replace(Be,"")),2&t&&(n=n.replace(je,"")),n}},Te={start:Re(1),end:Re(2),trim:Re(3)}.trim,Fe=r.parseInt,Ee=/^[+-]?0[Xx]/,ke=8!==Fe(Ce+"08")||22!==Fe(Ce+"0x16")?function(t,e){var n=Te(String(t));return Fe(n,e>>>0||(Ee.test(n)?16:10))}:Fe;function Ae(t){return(Ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Pe(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Ne(t){return(Ne=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _e(t,e){return(_e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function He(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Me(t,e,n){return(Me="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Ne(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}Et({global:!0,forced:parseInt!=ke},{parseInt:ke});var Ie=t.fn.bootstrapTable.utils,We=10,De=40,Le=800;t.extend(t.fn.bootstrapTable.defaults,{fixedColumns:!1,fixedNumber:0,fixedRightNumber:0}),t.BootstrapTable=function(e){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),He(this,Ne(n).apply(this,arguments))}var i,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_e(t,e)}(n,e),i=n,(r=[{key:"fixedColumnsSupported",value:function(){return this.options.fixedColumns&&!this.options.detailView&&!this.options.cardView}},{key:"initContainer",value:function(){Me(Ne(n.prototype),"initContainer",this).call(this),this.fixedColumnsSupported()&&(this.options.fixedNumber&&(this.$tableContainer.append('<div class="fixed-columns"></div>'),this.$fixedColumns=this.$tableContainer.find(".fixed-columns")),this.options.fixedRightNumber&&(this.$tableContainer.append('<div class="fixed-columns-right"></div>'),this.$fixedColumnsRight=this.$tableContainer.find(".fixed-columns-right")))}},{key:"initBody",value:function(){for(var t,e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];(t=Me(Ne(n.prototype),"initBody",this)).call.apply(t,[this].concat(i)),this.fixedColumnsSupported()&&(this.options.showHeader&&this.options.height||(this.initFixedColumnsBody(),this.initFixedColumnsEvents()))}},{key:"trigger",value:function(){for(var t,e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];(t=Me(Ne(n.prototype),"trigger",this)).call.apply(t,[this].concat(i)),this.fixedColumnsSupported()&&("post-header"===i[0]?this.initFixedColumnsHeader():"scroll-body"===i[0]&&(this.needFixedColumns&&this.options.fixedNumber&&this.$fixedBody.scrollTop(this.$tableBody.scrollTop()),this.needFixedColumns&&this.options.fixedRightNumber&&this.$fixedBodyRight.scrollTop(this.$tableBody.scrollTop())))}},{key:"updateSelected",value:function(){var e=this;Me(Ne(n.prototype),"updateSelected",this).call(this),this.fixedColumnsSupported()&&this.$tableBody.find("tr").each((function(n,i){var r=t(i),o=r.data("index"),u=r.attr("class"),f='[name="'.concat(e.options.selectItemName,'"]'),a=r.find(f);if(void 0!==Ae(o)){var c=function(t,n){var i=n.find('tr[data-index="'.concat(o,'"]'));i.attr("class",u),a.length&&i.find(f).prop("checked",a.prop("checked")),e.$selectAll.length&&t.add(n).find('[name="btSelectAll"]').prop("checked",e.$selectAll.prop("checked"))};e.$fixedBody&&e.options.fixedNumber&&c(e.$fixedHeader,e.$fixedBody),e.$fixedBodyRight&&e.options.fixedRightNumber&&c(e.$fixedHeaderRight,e.$fixedBodyRight)}}))}},{key:"initFixedColumnsHeader",value:function(){var t=this;this.options.height?this.needFixedColumns=this.$tableHeader.outerWidth(!0)<this.$tableHeader.find("table").outerWidth(!0):this.needFixedColumns=this.$tableBody.outerWidth(!0)<this.$tableBody.find("table").outerWidth(!0);var e=function(e,n){return e.find(".fixed-table-header").remove(),e.append(t.$tableHeader.clone(!0)),e.css({width:t.getFixedColumnsWidth(n)}),e.find(".fixed-table-header")};this.needFixedColumns&&this.options.fixedNumber?(this.$fixedHeader=e(this.$fixedColumns),this.$fixedHeader.css("margin-right","")):this.$fixedColumns&&this.$fixedColumns.html("").css("width",""),this.needFixedColumns&&this.options.fixedRightNumber?(this.$fixedHeaderRight=e(this.$fixedColumnsRight,!0),this.$fixedHeaderRight.scrollLeft(this.$fixedHeaderRight.find("table").width())):this.$fixedColumnsRight&&this.$fixedColumnsRight.html("").css("width",""),this.initFixedColumnsBody(),this.initFixedColumnsEvents()}},{key:"initFixedColumnsBody",value:function(){var t=this,e=function(e,n){e.find(".fixed-table-body").remove(),e.append(t.$tableBody.clone(!0));var i=e.find(".fixed-table-body"),r=t.$tableBody.get(0),o=r.scrollWidth>r.clientWidth?Ie.getScrollBarWidth():0,u=t.$tableContainer.outerHeight(!0)-o-1;return e.css({height:u}),i.css({height:u-n.height()}),i};this.needFixedColumns&&this.options.fixedNumber&&(this.$fixedBody=e(this.$fixedColumns,this.$fixedHeader)),this.needFixedColumns&&this.options.fixedRightNumber&&(this.$fixedBodyRight=e(this.$fixedColumnsRight,this.$fixedHeaderRight),this.$fixedBodyRight.scrollLeft(this.$fixedBodyRight.find("table").width()),this.$fixedBodyRight.css("overflow-y",this.options.height?"auto":"hidden"))}},{key:"getFixedColumnsWidth",value:function(t){var e=this.getVisibleFields(),n=0,i=this.options.fixedNumber,r=0;t&&(e=e.reverse(),i=this.options.fixedRightNumber,r=parseInt(this.$tableHeader.css("margin-right"),10));for(var o=0;o<i;o++)n+=this.$header.find('th[data-field="'.concat(e[o],'"]')).outerWidth(!0);return n+r+1}},{key:"initFixedColumnsEvents",value:function(){var e=this,n=function(n,i){var r='tr[data-index="'.concat(t(n.currentTarget).data("index"),'"]'),o=e.$tableBody.find(r);e.$fixedBody&&(o=o.add(e.$fixedBody.find(r))),e.$fixedBodyRight&&(o=o.add(e.$fixedBodyRight.find(r))),o.css("background-color",i?t(n.currentTarget).css("background-color"):"")};this.$tableBody.find("tr").hover((function(t){n(t,!0)}),(function(t){n(t,!1)}));var i="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>-1?"DOMMouseScroll":"mousewheel",r=function(t,n){var i,r,o,u,f,a=(r=0,o=0,u=0,f=0,"detail"in(i=t)&&(o=i.detail),"wheelDelta"in i&&(o=-i.wheelDelta/120),"wheelDeltaY"in i&&(o=-i.wheelDeltaY/120),"wheelDeltaX"in i&&(r=-i.wheelDeltaX/120),"axis"in i&&i.axis===i.HORIZONTAL_AXIS&&(r=o,o=0),u=r*We,f=o*We,"deltaY"in i&&(f=i.deltaY),"deltaX"in i&&(u=i.deltaX),(u||f)&&i.deltaMode&&(1===i.deltaMode?(u*=De,f*=De):(u*=Le,f*=Le)),u&&!r&&(r=u<1?-1:1),f&&!o&&(o=f<1?-1:1),{spinX:r,spinY:o,pixelX:u,pixelY:f}),c=Math.ceil(a.pixelY),l=e.$tableBody.scrollTop()+c;(c<0&&l>0||c>0&&l<n.scrollHeight-n.clientHeight)&&t.preventDefault(),e.$tableBody.scrollTop(l),e.$fixedBody&&e.$fixedBody.scrollTop(l),e.$fixedBodyRight&&e.$fixedBodyRight.scrollTop(l)};this.needFixedColumns&&this.options.fixedNumber&&(this.$fixedBody.find("tr").hover((function(t){n(t,!0)}),(function(t){n(t,!1)})),this.$fixedBody[0].addEventListener(i,(function(t){r(t,e.$fixedBody[0])}))),this.needFixedColumns&&this.options.fixedRightNumber&&(this.$fixedBodyRight.find("tr").hover((function(t){n(t,!0)}),(function(t){n(t,!1)})),this.$fixedBodyRight.off("scroll").on("scroll",(function(){var t=e.$fixedBodyRight.scrollTop();e.$tableBody.scrollTop(t),e.$fixedBody&&e.$fixedBody.scrollTop(t)}))),this.options.filterControl&&t(this.$fixedColumns).off("keyup change").on("keyup change",(function(n){var i=t(n.target),r=i.val(),o=i.parents("th").data("field"),u=e.$header.find('th[data-field="'.concat(o,'"]'));if(i.is("input"))u.find("input").val(r);else if(i.is("select")){var f=u.find("select");f.find("option[selected]").removeAttr("selected"),f.find('option[value="'.concat(r,'"]')).attr("selected",!0)}e.triggerSearch()}))}}])&&Pe(i.prototype,r),o&&Pe(i,o),n}(t.BootstrapTable)}));