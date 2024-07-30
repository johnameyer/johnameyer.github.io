import{H as u,Ha as c,Ia as d,Ja as E,Ka as b,Ma as h,S as m,Ua as F,V as T,Y as i,fa as v,ha as p,ia as k,ka as f,kb as M,ma as C,mb as D,na as _,oa as y,pa as l,qa as a,ra as x,xa as g,ya as w,za as I}from"./chunk-GMWIKUXY.js";var Z=(()=>{let t=class t{constructor(){this.message=m()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u({type:t,selectors:[["not-found"]],inputs:{message:[1,"message"]},standalone:!0,features:[h],decls:3,vars:1,consts:[[1,"container-xl","mx-auto"]],template:function(n,r){n&1&&(l(0,"div",0)(1,"p"),c(2),a()()),n&2&&(i(2),d(r.message()||"Not found"))}});let e=t;return e})();function O(e,t){if(e&1&&(l(0,"div")(1,"h5"),c(2),a(),l(3,"p"),c(4),a()()),e&2){let o=g();i(2),d(o.title),i(2),d(o.text)}}var B=(()=>{let t=class t{constructor(){}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u({type:t,selectors:[["text-section"]],inputs:{title:"title",text:"text"},standalone:!0,features:[h],decls:1,vars:1,template:function(n,r){n&1&&v(0,O,5,2,"div"),n&2&&f(r.text?0:-1)}});let e=t;return e})();function A(e,t){if(e&1&&(l(0,"span",1),x(1,"app-technology-badge",2),a()),e&2){let o=t.$implicit;i(),p("tech",o)}}function $(e,t){if(e&1&&(l(0,"span")(1,"span",0),c(2,"Built on:"),a(),_(3,A,2,1,"span",1,C),a()),e&2){let o=g();i(3),y(o.technologies)}}var P=(()=>{let t=class t{constructor(){}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u({type:t,selectors:[["technology-badge-list"]],inputs:{technologies:"technologies"},standalone:!0,features:[h],decls:1,vars:1,consts:[[1,"me-1"],[1,"ms-1"],[3,"tech"]],template:function(n,r){n&1&&v(0,$,5,0,"span"),n&2&&f(r.technologies&&r.technologies.length?0:-1)},dependencies:[D]});let e=t;return e})();function j(e,t){if(e&1&&(l(0,"span")(1,"a",0),x(2,"fa-icon",1),c(3),a()()),e&2){let o=g();i(),p("href",o.link.link,T),i(),p("icon",o.getIcon(o.link.type)),i(),E(" ",o.link.title||o.link.link," ")}}function z(e,t){if(e&1&&(l(0,"a",0),c(1),a()),e&2){let o=g();p("href",o.link,T),i(),d(o.link)}}var L=(()=>{let t=class t{constructor(){this.getIcon=s=>Array.isArray(s)?s:["fab",s]}isString(s){return typeof s=="string"}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u({type:t,selectors:[["link-item"]],inputs:{link:"link"},standalone:!0,features:[h],decls:2,vars:1,consts:[[3,"href"],[3,"icon"]],template:function(n,r){n&1&&v(0,j,4,3,"span")(1,z,2,2,"a",0),n&2&&f(r.isString(r.link)?1:0)},dependencies:[M]});let e=t;return e})();function U(e,t){if(e&1&&(l(0,"figcaption",3),c(1),a()),e&2){let o=g(2);i(),d(o.img.description)}}function q(e,t){if(e&1&&(l(0,"div",2),v(1,U,2,1,"figcaption",3),a()),e&2){let o=g();i(),f(o.img.description?1:-1)}}var V=(()=>{let t=class t{constructor(){}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u({type:t,selectors:[["screenshot-item"]],inputs:{img:"img"},standalone:!0,features:[h],decls:3,vars:5,consts:[[1,"card"],[1,"img-fluid","d-block","card-img-top",3,"src","alt"],[1,"card-body"],[1,"card-text"]],template:function(n,r){n&1&&(l(0,"figure",0),x(1,"img",1),v(2,q,2,1,"div",2),a()),n&2&&(i(),k("rounded-bottom",!r.img.description),p("src",r.img.src,T)("alt",r.img.description||"Screenshot image"),i(),f(r.img.description?2:-1))}});let e=t;return e})();function N(e,t){e&1&&(l(0,"h5"),c(1,"Description"),a())}function G(e,t){if(e&1&&(l(0,"div")(1,"b"),c(2),a(),c(3),x(4,"br"),a()),e&2){let o=t.$implicit;i(2),d(o.award),i(),b(" (",o.from,") - ",o.date," ")}}function H(e,t){if(e&1&&(l(0,"h5",6),c(1,"Awards"),a(),_(2,G,5,3,"div",null,C)),e&2){let o=g();i(2),y(o.awards())}}function J(e,t){if(e&1&&(l(0,"div"),x(1,"link-item",7)(2,"br"),a()),e&2){let o=t.$implicit;i(),p("link",o)}}function K(e,t){if(e&1&&(l(0,"h5",6),c(1,"Links"),a(),_(2,J,3,1,"div",null,C)),e&2){let o=g();i(2),y(o.links())}}function Q(e,t){if(e&1&&x(0,"screenshot-item",9),e&2){let o=t.$implicit;p("img",o)}}function R(e,t){if(e&1&&(l(0,"div",5)(1,"h5",8),c(2,"Screenshots"),a(),_(3,Q,1,1,"screenshot-item",9,C),a()),e&2){let o=g();i(3),y(o.imgs())}}var fe=(()=>{let t=class t{constructor(){this.description=m(),this.imgs=m([]),this.links=m([]),this.awards=m([]),this.outcomes=m(),this.challenge=m(),this.future=m(),this.technologies=m([]),this.flush=m(!1,{transform:F})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u({type:t,selectors:[["app-view"]],inputs:{description:[1,"description"],imgs:[1,"imgs"],links:[1,"links"],awards:[1,"awards"],outcomes:[1,"outcomes"],challenge:[1,"challenge"],future:[1,"future"],technologies:[1,"technologies"],flush:[1,"flush"]},standalone:!0,features:[h],decls:14,vars:13,consts:[[1,"row","justify-content-md-center"],["title","Outcomes",3,"text"],["title","Favorite Challenge",3,"text"],["title","Future",3,"text"],[3,"technologies"],[1,"col-lg-5"],[1,"mt-3"],[3,"link"],[1,"mt-3","d-lg-none"],[3,"img"]],template:function(n,r){n&1&&(l(0,"div",0)(1,"div")(2,"div"),v(3,N,2,0,"h5"),l(4,"p"),c(5),a()(),x(6,"text-section",1)(7,"text-section",2)(8,"text-section",3)(9,"technology-badge-list",4)(10,"br"),v(11,H,4,0)(12,K,4,0),a(),v(13,R,5,0,"div",5),a()),n&2&&(k("flush",r.flush()),i(),k("col-lg-7",r.imgs()),i(2),f(r.outcomes()||r.challenge()||r.future()?3:-1),i(2),d(r.description()),i(),p("text",r.outcomes()),i(),p("text",r.challenge()),i(),p("text",r.future()),i(),p("technologies",r.technologies()),i(2),f(r.awards().length?11:-1),i(),f(r.links().length?12:-1),i(),f(r.imgs()?13:-1))},dependencies:[B,P,L,V],styles:[".flush[_ngcontent-%COMP%]{margin:0 calc(var(--bs-gutter-x) * -.5)}.img-wrapper-lg[_ngcontent-%COMP%]{margin-left:30px;margin-bottom:30px;float:right;max-width:40vw}img[_ngcontent-%COMP%]{margin-bottom:20px}.img-wrapper-sm[_ngcontent-%COMP%]{margin:auto}.badge[_ngcontent-%COMP%]{margin-right:5px}"],changeDetection:0});let e=t;return e})();var W=["*"],xe=(()=>{let t=class t{constructor(){this.title=m.required(),this.subtitle=m.required()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u({type:t,selectors:[["detail-view"]],inputs:{title:[1,"title"],subtitle:[1,"subtitle"]},standalone:!0,features:[h],ngContentSelectors:W,decls:6,vars:2,consts:[[1,"m-2"],[1,"mb-0"]],template:function(n,r){n&1&&(w(),l(0,"div",0)(1,"h1",1),c(2),a(),l(3,"h2"),c(4),a(),I(5),a()),n&2&&(i(2),d(r.title()),i(2),d(r.subtitle()))}});let e=t;return e})();export{fe as a,xe as b,Z as c};
