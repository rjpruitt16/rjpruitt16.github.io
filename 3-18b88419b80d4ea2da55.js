(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{218:function(e,t,n){var a={"./images/1.jpg":219,"./images/2.jpg":220,"./me.png":246,"./resume/index.md":221,"./test-1/1.png":222,"./test-1/2.png":223,"./test-1/index.md":224,"./test-2/3.png":225,"./test-2/4.png":226,"./test-2/index.md":227,"./test-3/5.png":228,"./test-3/6.png":229,"./test-3/index.md":230,"./test-4/7.png":231,"./test-4/8.png":232,"./test-4/9.png":233,"./test-4/index.md":234};function r(e){var t=i(e);return n(t)}function i(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=218},219:function(e,t,n){e.exports=n.p+"static/1-f93e323ea105ecf6f8a88aa508673701.jpg"},220:function(e,t,n){e.exports=n.p+"static/2-34077c2ae4a023e25230a44ae5ecaa03.jpg"},221:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "resume"\n| title: "Resume"')},222:function(e,t,n){e.exports=n.p+"static/1-f93e323ea105ecf6f8a88aa508673701.png"},223:function(e,t,n){e.exports=n.p+"static/2-34077c2ae4a023e25230a44ae5ecaa03.png"},224:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "portfolio"\n| title: "Gatsby Advanced Blog"')},225:function(e,t,n){e.exports=n.p+"static/3-58f617929f2cc2492b5df81349aaeece.png"},226:function(e,t,n){e.exports=n.p+"static/4-c39321e0dbc27a0dac4d3f078e664366.png"},227:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "portfolio"\n| title: "Gatsby Advanced Blog"')},228:function(e,t,n){e.exports=n.p+"static/5-e4dd0ca2ab98e87eacad87e391414b51.png"},229:function(e,t,n){e.exports=n.p+"static/6-c5df77eb6272acd552decfe348295a47.png"},230:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "portfolio"\n| title: "Gatsby Advanced Blog"')},231:function(e,t,n){e.exports=n.p+"static/7-1398f7ad17588bd657ad459ee5f370a1.png"},232:function(e,t,n){e.exports=n.p+"static/8-6fe54be1b5f54eea5f440ea0eb766f31.png"},233:function(e,t,n){e.exports=n.p+"static/9-5a1d19df0ab27dc072518b6065c1088f.png"},234:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "portfolio"\n| title: "Gatsby Advanced Blog"')},274:function(e,t,n){"use strict";var a=n(209);t.a=function(e){return Object(a.flow)(Object(a.get)("pathname"),Object(a.split)("/"),Object(a.get)(e),Object(a.defaultTo)("1"),a.toNumber)}},298:function(e,t,n){"use strict";var a=n(210).a.section.withConfig({displayName:"PostsWrapper"})(["margin:auto;padding:120px 0 0;max-width:1176px;font-size:0;@media (max-width:414px){padding:70px 16px 0;}&:before,&:after{display:block;content:'';clear:both;}h1{margin:.67em 0;font-size:32px;}time{margin:1em 0;font-size:14px;}"]);t.a=a},299:function(e,t,n){"use strict";var a=n(12),r=n.n(a),i=n(0),l=n.n(i),o=n(213),s=n(210),c=n(500),u=n.n(c),p=n(501),f=n.n(p),d=n(502),m=n.n(d),h=n(503),g=n.n(h),v=n(504),b=n.n(v),y=n(209),E=n(238),x=n(274),w=s.a.nav.withConfig({displayName:"Pagination__Wrapper"})(["margin:1em 0;text-align:center;li{display:inline-block;padding:0 .4em;}svg{margin:-2px 0 0;}"]),O=function(e){var t=e.postCount,n=e.location,a=e.prefix,r=t?Math.ceil(t/E.CONTENT_PER_PAGE):0,i=Object(y.range)(1,r+1),s="/pages/"===a?2:3,c=Object(x.a)(s)(n),p=r>=E.PAGE_PER_SCREEN,d=p?Object(y.filter)(function(e){var t=c-e;return Math.abs(t)<=Math.floor(E.PAGE_PER_SCREEN/2)})(i):i,h=Object(y.includes)(1)(d),v=Object(y.includes)(r)(d);return Object(y.isEmpty)(i)?null:l.a.createElement(w,null,l.a.createElement("ul",null,p&&!h?[l.a.createElement("li",{key:"first"},l.a.createElement(o.Link,{to:a+"1"},l.a.createElement(u.a,null))),l.a.createElement("li",{key:"ellipsis"},l.a.createElement(b.a,null))]:null,Object(y.isEqual)(1)(c)?null:l.a.createElement("li",null,l.a.createElement(o.Link,{to:""+a+(c-1)},l.a.createElement(m.a,null))),Object(y.map)(function(e){return Object(y.isEqual)(e)(c)?l.a.createElement("li",{key:e,className:Object(y.isEqual)(e)(c)?"active":""},e):l.a.createElement("li",{key:e,className:Object(y.isEqual)(e)(c)?"active":""},l.a.createElement(o.Link,{to:""+a+e},e))})(d),Object(y.isEqual)(r)(c)?null:l.a.createElement("li",null,l.a.createElement(o.Link,{to:""+a+(c+1)},l.a.createElement(g.a,null))),p&&!v?[l.a.createElement("li",{key:"ellipsis"},l.a.createElement(b.a,null)),l.a.createElement("li",{key:"last"},l.a.createElement(o.Link,{to:""+a+r},l.a.createElement(f.a,null)))]:null))};O.propTypes={postCount:r.a.number.isRequired,location:r.a.shape({pathname:r.a.string.isRequired}).isRequired,prefix:r.a.string},O.defaultProps={prefix:"/pages/"},t.a=O},300:function(e,t,n){"use strict";var a=n(209),r=n(238),i=Object(a.flow)(Object(a.get)("allMarkdownRemark.edges"),Object(a.filter)(function(e){var t=Object(a.get)("node.frontmatter")(e),n=t.hide,i=t.type;return!0!==n&&(i||r.POST)===r.POST}));t.a=i},301:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(12),l=n.n(i),o=n(213),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a)));return i.state={},i.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},i.elements={},i.onResize=i.onResize.bind(i),i.onTruncate=i.onTruncate.bind(i),i.calcTargetWidth=i.calcTargetWidth.bind(i),i.measureWidth=i.measureWidth.bind(i),i.getLines=i.getLines.bind(i),i.renderLine=i.renderLine.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),c(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,a=document.createElement("canvas");this.canvasContext=a.getContext("2d"),t(function(){e&&e.parentNode.removeChild(e)}),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"innerText",value:function(e){var t=document.createElement("div"),n="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var a=t[n],r=document.createElement("div");return r.innerHTML="foo<br/>bar","foo\nbar"!==r[n].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),a=t[n]),a}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"==typeof t&&(this.timeout=window.requestAnimationFrame(function(){t(e)}))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,n=this.calcTargetWidth,a=this.canvasContext;if(t){var r=Math.floor(t.parentNode.getBoundingClientRect().width);if(!r)return window.requestAnimationFrame(function(){return n(e)});var i=window.getComputedStyle(t),l=[i["font-weight"],i["font-style"],i["font-size"],i["font-family"]].join(" ");a.font=l,this.setState({targetWidth:r},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,n=t.lines,a=t.ellipsis,i=t.trimWhitespace,l=this.state.targetWidth,o=this.innerText,s=this.measureWidth,c=this.onTruncate,u=this.trimRight,p=[],f=o(e.text).split("\n").map(function(e){return e.split(" ")}),d=!0,m=this.ellipsisWidth(this.elements.ellipsis),h=1;h<=n;h++){var g=f[0];if(0!==g.length){var v=g.join(" ");if(s(v)<=l&&1===f.length){d=!1,p.push(v);break}if(h===n){for(var b=g.join(" "),y=0,E=b.length-1;y<=E;){var x=Math.floor((y+E)/2);s(b.slice(0,x+1))+m<=l?y=x+1:E=x-1}var w=b.slice(0,y);if(i)for(w=u(w);!w.length&&p.length;)w=u(p.pop());v=r.a.createElement("span",null,w,a)}else{for(var O=0,j=g.length-1;O<=j;){var q=Math.floor((O+j)/2);s(g.slice(0,q+1).join(" "))<=l?O=q+1:j=q-1}if(0===O){h=n-1;continue}v=g.slice(0,O).join(" "),f[0].splice(0,O)}p.push(v)}else p.push(),f.shift(),h--}return c(d),p}},{key:"renderLine",value:function(e,t,n){if(t===n.length-1)return r.a.createElement("span",{key:t},e);var a=r.a.createElement("br",{key:t+"br"});return e?[r.a.createElement("span",{key:t},e),a]:a}},{key:"render",value:function(){var e=this,t=this.elements.target,n=this.props,a=n.children,i=n.ellipsis,l=n.lines,o=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(n,["children","ellipsis","lines"]),c=this.state.targetWidth,u=this.getLines,p=this.renderLine,f=this.onTruncate,d=void 0;return"undefined"!=typeof window&&!(!t||!c)&&(l>0?d=u().map(p):(d=a,f(!1))),delete o.onTruncate,delete o.trimWhitespace,r.a.createElement("span",s({},o,{ref:function(t){e.elements.target=t}}),r.a.createElement("span",null,d),r.a.createElement("span",{ref:function(t){e.elements.text=t}},a),r.a.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},i))}}]),t}();u.propTypes={children:l.a.node,ellipsis:l.a.node,lines:l.a.oneOfType([l.a.oneOf([!1]),l.a.number]),trimWhitespace:l.a.bool,onTruncate:l.a.func},u.defaultProps={children:"",ellipsis:"…",lines:1,trimWhitespace:!1};var p=u,f=n(296),d=n.n(f),m=n(210),h=n(209),g=m.a.figure.withConfig({displayName:"Card__ImageWrapper"})(["position:relative;margin:-14px -14px 14px;padding:50% 0 0;height:0;border-bottom:1px solid #e5e5e5;overflow:hidden;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2r9//38gYGAEESAAEGAAasgJOgzOKCoAAAAASUVORK5CYII=);&:before,&:after{display:block;content:'';clear:both;}img{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;width:100%;height:auto;}"]),v=m.a.div.withConfig({displayName:"Card__TagWrapper"})(["white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"]),b=m.a.article.withConfig({displayName:"Card__StyledArticle"})(["display:inline-block;padding:0 16px 16px;width:25%;font-size:14px;vertical-align:top;@media (max-width:414px){margin:0 0 16px;padding:0 0 16px;width:100%;border-bottom:1px solid #eee;}& > div{position:relative;top:0;padding:14px;background-color:#fff;border-radius:6px;transition:all .4s ease .1s;border:1px solid #e5e5e5;&:hover{top:-8px;background:#efefef;}}a{color:#000;&:hover{h3,p,small{text-decoration:underline;}}}h3{padding:0 0 6px;height:2.4em;line-height:1.2em;font-size:20px;font-weight:700;}time{display:block;margin:10px 0 0;font-size:12px;}p{padding:24px 0 16px;height:106px;line-height:1.4em;font-size:16px;span{white-space:nowrap;}}small{margin:0 0 0 4px;font-size:14px;}"]),y=function(e){var t=e.tags,a=e.path,i=e.images,l=e.title,s=e.date,c=e.summary,u=Object(h.first)(i);return r.a.createElement(b,null,r.a.createElement("div",null,r.a.createElement(o.Link,{to:a},r.a.createElement(g,null,Object(h.isNil)(u)?null:r.a.createElement("img",{src:Object(h.includes)("//")(u)?u:n(218)("./"+u),alt:l})),r.a.createElement("h3",null,r.a.createElement(p,{lines:2,ellipsis:r.a.createElement("span",null,"...")},l)),r.a.createElement("p",null,r.a.createElement(p,{lines:3,ellipsis:r.a.createElement("span",null,"...")},c))),r.a.createElement(v,null,r.a.createElement(d.a,null),Object(h.map)(function(e){return r.a.createElement(o.Link,{key:e,to:"/tags/"+e+"/1"},r.a.createElement("small",null,e))})(t)),r.a.createElement("time",null,s)))};y.propTypes={tags:l.a.arrayOf(l.a.string),path:l.a.string.isRequired,images:l.a.arrayOf(l.a.string),title:l.a.string,date:l.a.string,summary:l.a.string},y.defaultProps={tags:[],images:[],title:"",date:"",summary:""},t.a=y},500:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=l(n(0)),i=l(n(211));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(i.default,a({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m22 30.7q0 0.3-0.2 0.5l-1.1 1.1q-0.3 0.3-0.6 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.3 0.2 0.5t-0.2 0.6l-8.8 8.7 8.8 8.8q0.2 0.2 0.2 0.5z m8.6 0q0 0.3-0.3 0.5l-1.1 1.1q-0.2 0.3-0.5 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.2-0.2 0.5-0.2t0.5 0.2l1.1 1.1q0.3 0.3 0.3 0.5t-0.3 0.6l-8.7 8.7 8.7 8.8q0.3 0.2 0.3 0.5z"})))},e.exports=t.default},501:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=l(n(0)),i=l(n(211));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(i.default,a({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m22.3 21.4q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.6 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.3-0.2 0.5-0.2t0.6 0.2l10.4 10.4q0.2 0.2 0.2 0.5z m8.6 0q0 0.3-0.3 0.5l-10.4 10.4q-0.2 0.3-0.5 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.2-0.2 0.5-0.2t0.5 0.2l10.4 10.4q0.3 0.2 0.3 0.5z"})))},e.exports=t.default},502:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=l(n(0)),i=l(n(211));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(i.default,a({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m26.5 12.1q0 0.3-0.2 0.6l-8.8 8.7 8.8 8.8q0.2 0.2 0.2 0.5t-0.2 0.5l-1.1 1.1q-0.3 0.3-0.6 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.2 0.2 0.5z"})))},e.exports=t.default},503:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=l(n(0)),i=l(n(211));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(i.default,a({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m26.3 21.4q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.6 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.3-0.2 0.5-0.2t0.6 0.2l10.4 10.4q0.2 0.2 0.2 0.5z"})))},e.exports=t.default},504:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=l(n(0)),i=l(n(211));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(i.default,a({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m13.1 16.4v4.3q0 0.9-0.7 1.5t-1.5 0.7h-4.3q-0.9 0-1.5-0.7t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h4.3q0.9 0 1.5 0.6t0.7 1.5z m11.4 0v4.3q0 0.9-0.6 1.5t-1.5 0.7h-4.3q-0.9 0-1.5-0.7t-0.7-1.5v-4.3q0-0.9 0.7-1.5t1.5-0.6h4.3q0.9 0 1.5 0.6t0.6 1.5z m11.4 0v4.3q0 0.9-0.6 1.5t-1.5 0.7h-4.3q-0.9 0-1.5-0.7t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h4.3q0.9 0 1.5 0.6t0.6 1.5z"})))},e.exports=t.default}}]);
//# sourceMappingURL=3-18b88419b80d4ea2da55.js.map