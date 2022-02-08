"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[932],{346:function(e,n,t){t.d(n,{F:function(){return i},v:function(){return r}});var i="https://www.movienewz.com/img/films/poster-holder.jpg",r="https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg"},932:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var i=t(152),r=t(791),a=t(271),s=t(71),c=t(697),o=t(346),l="MovieDetailsInfo_infoWrap__NYXoh",u="MovieDetailsInfo_imgWrap__KqQCB",h="MovieDetailsInfo_backDropImg__q1k3+",d="MovieDetailsInfo_movieTitle__StdEt",v="MovieDetailsInfo_scoreValue__4r7G9",m="MovieDetailsInfo_overview__S8PSr",_="MovieDetailsInfo_genresList__T2ex1",p="MovieDetailsInfo_genresItem__Bp0r3",f=t(184);function j(e){var n=e.movie;return(0,f.jsx)("div",{className:l,children:n&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:u,children:(0,f.jsx)("img",{className:h,src:n.backdrop_path?"".concat("https://image.tmdb.org/t/p/original").concat(n.backdrop_path):o.v,alt:n.title})}),(0,f.jsxs)("h2",{className:d,children:[n.original_title," ",(0,f.jsxs)("span",{children:["(",n.release_date.slice(0,4),")"]})]}),(0,f.jsxs)("p",{children:["User score:"," ",(0,f.jsxs)("span",{className:v,children:[10*n.vote_average," %"]})]}),(0,f.jsx)("p",{children:"Overview "}),(0,f.jsx)("p",{className:m,children:n.overview}),(0,f.jsx)("p",{children:"Genres"}),(0,f.jsx)("ul",{className:_,children:n.genres.map((function(e){return(0,f.jsx)("li",{className:p,children:e.name},e.id)}))})]})})}var g=t(523),x=t(58);function w(e){var n=e.movie;return(0,f.jsx)("ul",{children:n.credits.cast.map((function(e){return(0,f.jsxs)("li",{children:[e.profile_path?(0,f.jsx)("img",{src:" ".concat("https://image.tmdb.org/t/p/w300").concat(e.profile_path),alt:e.name}):"No image",(0,f.jsx)("p",{children:e.original_name}),(0,f.jsx)("p",{children:e.character})]},e.cast_id)}))})}function k(e){var n=e.movie.reviews.results;return(0,f.jsx)(f.Fragment,{children:n.length>0?(0,f.jsx)("ul",{children:n.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("p",{children:["Author: ",e.author]}),(0,f.jsxs)("p",{children:['"',e.content,'"']})]},e.id)}))}):(0,f.jsx)("p",{children:"We don't have any reviews for this movie"})})}function b(e){var n=e.movie,t=e.match,i=t.url,r=t.path;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(g.OL,{to:"".concat(i,"/cast"),activeClassName:x.Z.activeLink,children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(g.OL,{to:"".concat(i,"/reviews"),activeClassName:x.Z.activeLink,children:"Reviews"})})]}),(0,f.jsx)("hr",{}),(0,f.jsx)(a.AW,{path:"".concat(r,"/cast"),children:n&&(0,f.jsx)(w,{movie:n})}),(0,f.jsx)(a.AW,{path:"".concat(r,"/reviews"),children:n&&(0,f.jsx)(k,{movie:n})})]})}function N(){var e=(0,r.useState)(null),n=(0,i.Z)(e,2),t=n[0],o=n[1],l=(0,a.UO)().movieId,u=(0,a.$B)(),h=(0,a.k6)(),d=(0,a.TH)();(0,r.useEffect)((function(){c.Mc(l).then(o)}),[l]);return(0,f.jsxs)("div",{className:x.Z.ditailsWrap,children:[(0,f.jsx)("div",{children:(0,f.jsxs)("button",{onClick:function(){var e,n;h.push(null!==(e=null===d||void 0===d||null===(n=d.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies")},className:x.Z.goBackBtn,children:[(0,f.jsx)(s.jUh,{})," Go Back"]})}),(0,f.jsx)(j,{movie:t}),(0,f.jsx)("h3",{children:"Additional information"}),(0,f.jsx)(b,{movie:t,match:u})]})}},697:function(e,n,t){t.d(n,{PV:function(){return h},Mc:function(){return d},mv:function(){return v}});var i=t(861),r=t(757),a=t.n(r),s=t(577),c=(t(150),"5fe4e7cb700e0e7e8be54b15a82973ef"),o="https://api.themoviedb.org/3/";function l(){return u.apply(this,arguments)}function u(){return u=(0,i.Z)(a().mark((function e(){var n,t,i=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:"",e.next=3,fetch(n);case 3:return t=e.sent,e.abrupt("return",t.ok?t.json():Promise.reject(new Error(s.Am.error("Something went wrong :(",{theme:"colored"}))));case 5:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function h(){return l("".concat(o,"trending/movie/day?api_key=").concat(c))}function d(e){return l("".concat(o,"movie/").concat(e,"?api_key=").concat(c,"&language=en-US&append_to_response=reviews,credits"))}function v(e){return l(" ".concat(o,"search/movie?api_key=").concat(c,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"))}},58:function(e,n){n.Z={activeLink:"Pages_activeLink__wWiQU",form:"Pages_form__Vg5JS",searchInput:"Pages_searchInput__MR6CM",searchBtn:"Pages_searchBtn__dxFm1",ditailsWrap:"Pages_ditailsWrap__5fjN+",goBackBtn:"Pages_goBackBtn__llaRh"}}}]);
//# sourceMappingURL=932.eee9d704.chunk.js.map