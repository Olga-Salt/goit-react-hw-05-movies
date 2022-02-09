"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[666],{4346:function(e,a,t){t.d(a,{F:function(){return s},v:function(){return n}});var s="https://www.movienewz.com/img/films/poster-holder.jpg",n="https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg"},3899:function(e,a,t){t.r(a),t.d(a,{default:function(){return B}});var s=t(8152),n=t(2791),i=t(9271),r=t(71),c=t(4697),o=t(4346),l="MovieDetailsInfo_infoWrap__NYXoh",u="MovieDetailsInfo_imgWrap__KqQCB",_="MovieDetailsInfo_backDropImg__q1k3+",m="MovieDetailsInfo_movieTitle__StdEt",d="MovieDetailsInfo_scoreValue__4r7G9",v="MovieDetailsInfo_overview__S8PSr",h="MovieDetailsInfo_genresWrap__GY94p",p="MovieDetailsInfo_genresList__T2ex1",f="MovieDetailsInfo_genresItem__Bp0r3",g=t(184);function x(e){var a=e.movie;return(0,g.jsx)("div",{className:l,children:a&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:u,children:(0,g.jsx)("img",{className:_,src:a.backdrop_path?"".concat("https://image.tmdb.org/t/p/original").concat(a.backdrop_path):o.v,alt:a.title})}),(0,g.jsxs)("h2",{className:m,children:[a.original_title," ",(0,g.jsxs)("span",{children:["(",a.release_date.slice(0,4),")"]})]}),(0,g.jsxs)("p",{children:["User score:"," ",(0,g.jsxs)("span",{className:d,children:[10*a.vote_average," %"]})]}),(0,g.jsx)("p",{children:"Overview "}),(0,g.jsx)("p",{className:v,children:a.overview}),(0,g.jsxs)("div",{className:h,children:[(0,g.jsx)("span",{children:"Genres:"}),(0,g.jsx)("ul",{className:p,children:a.genres.map((function(e){return(0,g.jsx)("li",{className:f,children:e.name},e.id)}))})]})]})})}var j=t(1523),N=t(58),k=t(1052),w=t.n(k),I=(t(6505),function(e){return e.preventDefault()});function b(e){var a=e.movie.credits.cast.map((function(e){return(0,g.jsxs)("div",{className:N.Z.carouselItem,children:[(0,g.jsx)("img",{src:e.profile_path?" ".concat("https://image.tmdb.org/t/p/w300").concat(e.profile_path):o.F,alt:e.name,onDragStart:I,className:N.Z.carouselItem__img}),(0,g.jsx)("p",{className:N.Z.carouselItem__txt,children:e.original_name}),(0,g.jsx)("p",{children:e.character})]},e.cast_id)}));return(0,g.jsx)(w(),{autoPlay:!0,responsive:{0:{items:3},512:{items:5},1024:{items:7}},infinite:!0,disableButtonsControls:!0,disableDotsControls:!0,mouseTracking:!0,items:a})}function P(e){var a=e.movie.reviews.results;return(0,g.jsx)(g.Fragment,{children:a.length>0?(0,g.jsx)("ul",{children:a.map((function(e){return(0,g.jsxs)("li",{children:[(0,g.jsxs)("p",{className:N.Z.author,children:[(0,g.jsx)("b",{children:"Author :"})," ",(0,g.jsx)("span",{className:N.Z.authorName,children:e.author})]}),(0,g.jsxs)("p",{className:N.Z.reviewText,children:['"',e.content,'"']})]},e.id)}))}):(0,g.jsx)("p",{className:N.Z.reviewText,children:"We don't have any reviews for this movie"})})}function Z(e){var a=e.movie,t=e.match,s=t.url,n=t.path;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("ul",{className:N.Z.ditalsNavList,children:[(0,g.jsx)("li",{className:N.Z.ditalsNavItem,children:(0,g.jsx)(j.OL,{to:"".concat(s,"/cast"),className:N.Z.detailsNavLink,activeClassName:N.Z.activeLink,children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(j.OL,{to:"".concat(s,"/reviews"),className:N.Z.detailsNavLink,activeClassName:N.Z.activeLink,children:"Reviews"})})]}),(0,g.jsx)(i.AW,{path:"".concat(n,"/cast"),children:a&&(0,g.jsx)(b,{movie:a})}),(0,g.jsx)(i.AW,{path:"".concat(n,"/reviews"),children:a&&(0,g.jsx)(P,{movie:a})})]})}var L=function(e){var a=e.trailer;return(0,g.jsx)("a",{className:N.Z.trailerLink,target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/watch?v=".concat(a),children:"Watch the Trailer"})};function B(){var e=(0,n.useState)(null),a=(0,s.Z)(e,2),t=a[0],o=a[1],l=(0,n.useState)(null),u=(0,s.Z)(l,2),_=u[0],m=u[1],d=(0,i.UO)().movieId,v=(0,i.$B)(),h=(0,i.k6)(),p=(0,i.TH)();(0,n.useEffect)((function(){c.Mc(d).then((function(e){o(e),m(e.videos.results[0].key)}))}),[d]);return(0,g.jsxs)("div",{className:N.Z.ditailsWrap,children:[(0,g.jsx)("div",{children:(0,g.jsxs)("button",{onClick:function(){var e,a;h.push(null!==(e=null===p||void 0===p||null===(a=p.state)||void 0===a?void 0:a.from)&&void 0!==e?e:"/movies")},className:N.Z.goBackBtn,children:[(0,g.jsx)(r.jUh,{})," Go Back"]})}),(0,g.jsx)(x,{movie:t}),(0,g.jsx)("h3",{children:"Additional information"}),(0,g.jsx)(Z,{movie:t,match:v}),_&&(0,g.jsx)(L,{trailer:_})]})}},4697:function(e,a,t){t.d(a,{PV:function(){return _},Mc:function(){return m},mv:function(){return d}});var s=t(5861),n=t(7757),i=t.n(n),r=t(577),c=(t(5462),"5fe4e7cb700e0e7e8be54b15a82973ef"),o="https://api.themoviedb.org/3/";function l(){return u.apply(this,arguments)}function u(){return u=(0,s.Z)(i().mark((function e(){var a,t,s=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>0&&void 0!==s[0]?s[0]:"",e.next=3,fetch(a);case 3:return t=e.sent,e.abrupt("return",t.ok?t.json():Promise.reject(new Error(r.Am.error("Something went wrong :(",{theme:"colored"}))));case 5:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function _(){return l("".concat(o,"trending/movie/day?api_key=").concat(c))}function m(e){return l("".concat(o,"movie/").concat(e,"?api_key=").concat(c,"&language=en-US&append_to_response=reviews,credits,videos"))}function d(e){return l(" ".concat(o,"search/movie?api_key=").concat(c,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"))}},58:function(e,a){a.Z={ditalsNavList:"Pages_ditalsNavList__012re",ditalsNavItem:"Pages_ditalsNavItem__YnURz",detailsNavLink:"Pages_detailsNavLink__XumUd",activeLink:"Pages_activeLink__wWiQU",form:"Pages_form__Vg5JS",searchInput:"Pages_searchInput__MR6CM",searchBtn:"Pages_searchBtn__dxFm1",ditailsWrap:"Pages_ditailsWrap__5fjN+",goBackBtn:"Pages_goBackBtn__llaRh",carouselItem:"Pages_carouselItem__AGbiK",carouselItem__img:"Pages_carouselItem__img__JWJg8",carouselItem__txt:"Pages_carouselItem__txt__XfdB+",author:"Pages_author__UEC5Y",authorName:"Pages_authorName__1z-Nm",reviewText:"Pages_reviewText__bu5bB",trailerLink:"Pages_trailerLink__6IY9d"}}}]);
//# sourceMappingURL=666.7d4fedd5.chunk.js.map