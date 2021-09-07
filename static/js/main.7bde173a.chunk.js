(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2bkPr"}},25:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},26:function(e,t,a){e.exports={Button:"Button_Button__3R1xi"}},31:function(e,t,a){},32:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(22),c=a.n(o),i=(a(31),a(13)),s=a(4),l=a(5),h=a(7),m=a(6),u=(a(32),a(23)),g=a.n(u),p=a(11),b=a(24),j=a.n(b),d=(a(73),a(8)),f=a.n(d),y=a(1),S=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={image:""},e.handleChange=function(t){e.setState({image:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit({image:e.state.image,page:1})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(y.jsx)("header",{className:f.a.Searchbar,children:Object(y.jsxs)("form",{className:f.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(y.jsx)("button",{type:"submit",className:f.a.SearchFormButton,children:Object(y.jsx)("span",{className:f.a.SearchFormButtonLabel,children:"Search"})}),Object(y.jsx)("input",{className:f.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.image,onChange:this.handleChange})]})})}}]),a}(r.Component),O=a(25),v=a.n(O),I=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.children;return Object(y.jsx)("ul",{className:v.a.ImageGallery,children:e})}}]),a}(r.Component),_=a(12),x=a.n(_),F=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.imageGallery;return 0!==e.length&&e.map((function(e){return Object(y.jsx)("li",{className:x.a.ImageGalleryItem,children:Object(y.jsx)("img",{src:e.webformatURL,alt:e.webformatURL,className:x.a.ImageGalleryItemImage})},e.id)}))}}]),a}(r.Component),G=a(26),w=a.n(G),N=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleSubmit=function(t){t.preventDefault(),e.props.onSubmit({page:e.props.page+1})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.imageGallery;return console.log(e),0!==e&&Object(y.jsx)("button",{type:"submit",className:w.a.Button,onClick:this.handleSubmit,children:"Load more"})}}]),a}(r.Component),B=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={images:[],name:"",page:null,showLoader:!1,hits:0},e.getImages=function(t){t.image?e.setState({images:[],name:t.image,page:t.page,hits:0}):e.setState({page:t.page,hits:0})},e.loaderToggle=function(t){return console.log(t),e.setState({showLoader:t})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;if(this.state.name!==t.name||this.state.page!==t.page){this.loaderToggle(!0);var r="https://pixabay.com/api/?q=".concat(this.state.name,"&page=").concat(this.state.page,"&key=23262406-c7298f4dbbc93d98b496e6608&image_type=photo&orientation=horizontal&per_page=12");g.a.get(r).then((function(e){console.log(e),console.log(a.state),0===e.data.hits.length&&p.Notify.failure("Sorry, there are no images matching your search query. Please try again."),a.setState((function(t){return{images:[].concat(Object(i.a)(t.images),Object(i.a)(e.data.hits)),hits:t.hits+e.data.hits.length}})),a.state.hits>=e.data.totalHits&&a.setState({hits:0}),a.loaderToggle(!1)})).catch((function(e){p.Notify.failure("Sorry, there are no images matching your search query. Please try again.")}))}window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.page,r=e.hits;return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(S,{onSubmit:this.getImages}),Object(y.jsx)(I,{children:Object(y.jsx)(F,{imageGallery:t})}),this.state.showLoader&&Object(y.jsx)(j.a,{type:"Audio",color:"#00BFFF",height:80,width:80,timeout:"500",className:"Loader"}),Object(y.jsx)(N,{imageGallery:r,onSubmit:this.getImages,page:a})]})}}]),a}(r.Component);c.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(B,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__8f9cn",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}}},[[75,1,2]]]);
//# sourceMappingURL=main.7bde173a.chunk.js.map