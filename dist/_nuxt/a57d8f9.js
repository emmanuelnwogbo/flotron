(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{160:function(t,e,o){var content=o(168);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("03dd53d3",content,!0,{sourceMap:!1})},167:function(t,e,o){"use strict";o(160)},168:function(t,e,o){(e=o(43)(!1)).push([t.i,"@-webkit-keyframes fadeIn-data-v-4ac5d3e5{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-4ac5d3e5{0%{opacity:0}to{opacity:1}}@-webkit-keyframes container-data-v-4ac5d3e5{to{transform:translateX(-350rem)}}@keyframes container-data-v-4ac5d3e5{to{transform:translateX(-350rem)}}@-webkit-keyframes progress-data-v-4ac5d3e5{to{width:100vw}}@keyframes progress-data-v-4ac5d3e5{to{width:100vw}}.post[data-v-4ac5d3e5]{color:#000;min-height:100vh;background:#fff;margin-top:10rem;padding-top:6rem}.post__content[data-v-4ac5d3e5]{width:100rem;margin:0 auto}@media only screen and (max-width:75em){.post__content[data-v-4ac5d3e5]{width:100vw;margin:0 auto;padding:0 1rem}}.post__content--centertext[data-v-4ac5d3e5]{text-align:center}.post__content--tag[data-v-4ac5d3e5]{font-size:2rem;font-weight:500;margin-bottom:2rem}.post__content--title[data-v-4ac5d3e5]{font-size:5.5rem;font-weight:700;width:80rem;margin:0 auto}@media only screen and (max-width:75em){.post__content--title[data-v-4ac5d3e5]{font-size:2.8rem;font-weight:700;width:85vw;margin:2rem auto}}.post__content--titleimage[data-v-4ac5d3e5]{height:50rem;width:100rem}@media only screen and (max-width:75em){.post__content--titleimage[data-v-4ac5d3e5]{width:94vw;margin:0 auto}}.post__content--body[data-v-4ac5d3e5]{margin-top:4rem}",""]),t.exports=e},177:function(t,e,o){"use strict";o.r(e);var n={mounted:function(){window.matchMedia("(max-width: 1024px)").matches||(document.getElementsByTagName("body")[0].style.minHeight="100vh")},computed:{blog_post:function(){var t=this,e=this.$store.getters.blog_posts.filter((function(e){return e.id==t.$route.params.id}))[0];return e}}},d=(o(167),o(17)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"post"},[o("div",{staticClass:"post__content"},[o("div",{staticClass:"post__content--tag post__content--centertext"},[o("p",[t._v(t._s(t.blog_post.tag))])]),t._v(" "),o("h1",{staticClass:"post__content--title post__content--centertext"},[t._v("\n      "+t._s(t.blog_post.title)+"\n    ")]),t._v(" "),o("div",{staticClass:"post__content--body"},[o("figure",{staticClass:"post__content--titleimage"},[o("img",{attrs:{src:t.blog_post.title_image,alt:""}})])])])])}),[],!1,null,"4ac5d3e5",null);e.default=component.exports}}]);