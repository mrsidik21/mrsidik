webpackJsonp([0],{FP3a:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,a=t("bOdI"),o=t.n(a),i=t("//Fk"),s=t.n(i),u=t("Xxa5"),c=t.n(u),l=t("exGp"),d=t.n(l),f=(r={name:"Home",data:function(){return{menus:this.$store.getters.menus,loading:!0}},watch:{$route:function(e){}},computed:{hashTag:function(){return this.$route.hash}},mounted:function(){var e=this;return d()(c.a.mark(function n(){return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.handleResize(window);case 1:case"end":return n.stop()}},n,e)}))()}},o()(r,"mounted",function(){var e=this;return d()(c.a.mark(function n(){return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,n.next=3,e.delay(300);case 3:e.loading=!1,e.scrollingTo(e.hashTag);case 5:case"end":return n.stop()}},n,e)}))()}),o()(r,"methods",{replaceTag:function(e){return e.replace("#","")},handleLoading:function(e){},delay:function(e){return new s.a(function(n,t){setTimeout(n,e)})},showingGallery:function(e){var n=this;return d()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.$refs.gallery.showingModal(e);case 1:case"end":return t.stop()}},t,n)}))()},scrollingTo:function(e){var n=this;return d()(c.a.mark(function t(){var r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:if(!(r=document.querySelector(e))){t.next=7;break}return t.next=6,n.delay(100);case 6:document.querySelector(".layout").scrollTo(0,r.offsetTop);case 7:case"end":return t.stop()}},t,n)}))()}}),r),h={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("sidik-loading",{attrs:{loading:e.loading}}),e._v(" "),t("sidik-gallery",{ref:"gallery"}),e._v(" "),e._l(e.menus,function(n,r){return[t("section",{key:r,attrs:{id:e.replaceTag(n.link)}},["home"===n.label?t("sidik-hero"):"about"===n.label?t("sidik-about"):"resume"===n.label?t("sidik-resume"):"portofolio"===n.label?t("sidik-portofolio",{on:{view:e.showingGallery}}):"contact"===n.label?t("sidik-contact"):e._e()],1)]}),e._v(" "),t("footer",[t("sidik-footer")],1)],2)},staticRenderFns:[]};var p=t("VU/8")(f,h,!1,function(e){t("ZIdK")},"data-v-7de23d72",null);n.default=p.exports},ZIdK:function(e,n){}});
//# sourceMappingURL=0.7c073fb91389c4e686be.js.map