(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{195:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return r});var a=n(0),A=a.a.observable({});function i(t,e){return a.a.set(A,t,e)}function o(t){return A[t]}function r(t,e){var n=e.matched[0],a=n?n.components.default:{};if(t.stringified&&a.__file)return console.error("An error occurred while executing "+"page-query for ".concat(a.__file,"\n\n")+"Error: ".concat(t.stringified));console.error(t.message)}},196:function(t,e,n){"use strict";var a=n(0),A=n(195),i=n(77),o=a.a.config.optionMergeStrategies;e.a=function(t){var e=t.options,a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e.__pageQuery)e.__pageQuery=a;else{e.__pageQuery=a,e.computed=o.computed({$page:function(){return Object(A.b)(this.$route.path)}},e.computed);var r=function(t){e[t]=o[t]([c(e)],e[t])},c=function(){return function(t,a,o){n.e(14).then(n.bind(null,201)).then(function(n){n.default(t,e.__pageQuery).then(function(e){404===e.code?o({name:i.b,params:{0:t.path}}):o()}).catch(function(e){e.code===i.a||404===e.code?(console.error(e),o({name:i.b,params:{0:t.path}})):Object(A.a)(e,t)})})}};r("beforeRouteEnter"),r("beforeRouteUpdate")}}},200:function(t,e,n){},205:function(t,e,n){"use strict";var a=n(200);n.n(a).a},218:function(t,e,n){"use strict";n.r(e);var a={metaInfo:function(){return{title:this.$page.blogPost.title}}},A=(n(205),n(22)),i=n(196),o=function(t){Object(i.a)(t,void 0)},r=Object(A.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("div",{staticClass:"article"},[n("h2",[t._v(t._s(t.$page.blogPost.title))]),n("time",{staticClass:"article__date"},[t._v(t._s(t.$page.blogPost.date))]),n("g-image",{attrs:{src:t.$page.blogPost.image}}),n("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content",domProps:{innerHTML:t._s(t.$page.blogPost.content)}})],1),n("div",{staticClass:"blocks"},[n("div",{staticClass:"block__item block__item--mr"},[n("a",{attrs:{href:""}},[n("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEjSURBVEhL7dW9SgNBFMXxRcTOxhcQJVjZ+RIBsbZQML1v4EdqW0tFK5/AThAFERvB2sJeWxsFBZP8D2ThMtxZ9g6LVQ78SNjsnZOBZbaapass4Bg3uC2kWa2htbIZYtwRlWVzB2+ohNbK5hHeUAmtlU2k6BtPeDXX/sz3UNE1PpJrosWXUWcbe3hHfU+oaBdreDHXZBNp1vGA+p5Q0QmUeQxwj0+sIs0B7GyoSAt7i85NP20uYGdDRadom2fY2VDRD3bg7cBGD4Z94iRUJGdYRFPOkc6Fi7SrfSzBSx8jpHPhIj1ll1hBmi18IZ2R1kW/uEIPaTag37yd1MI7kjfokNSR450UnqKiEo1F//aaOII3VOIQ2XT1KtcfbnyVz9IyVTUBiAUlXQ8i9twAAAAASUVORK5CYII="}})])]),n("div",{staticClass:"block__item"},[n("a",{attrs:{href:""}},[n("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADpSURBVEhL7dU9CsIwGMbxTO6Co3gCdxcHBxfxAKI3ET8mPYCHULyBgji5OnkL3TyB/t/hhVCTEJt06wO/pX2Tp7SFmDq50sAKZ1xKkrWyh+zlzRqfTKTMmytci8qQvby5wbXI54gpehjAfiOylzf/FLlezRh6P0vRC8WP3cQEOpOl6ARNG08UZ7IU7aEZwTWTvcj+LrakohmG6ELTglwTO+hsUlEHoWyhs5UWHaCzSUUP3LGBpg+5Jt7Q2aQiVfnPoOqin8QeEzFFwWNiCdeiopiiBbyJPcrn0MhZZN+TtfLAwaO8TmSM+QK/Li8ZbRWAnwAAAABJRU5ErkJggg=="}})])])])])},[],!1,null,null,null);"function"==typeof o&&o(r);e.default=r.exports}}]);