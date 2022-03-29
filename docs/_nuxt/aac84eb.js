(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{224:function(t,e,r){var content=r(226);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("5e87da7c",content,!0,{sourceMap:!1})},225:function(t,e,r){"use strict";r(224)},226:function(t,e,r){var o=r(18)((function(i){return i[1]}));o.push([t.i,".details[data-v-5d1f3a8c]{cursor:pointer;position:absolute;top:0;left:0;width:100%;height:100%;z-index:1}.details[data-v-5d1f3a8c]:hover{border:1px solid #51bafc}.button[data-v-5d1f3a8c],.select[data-v-5d1f3a8c]{z-index:2}.select[data-v-5d1f3a8c]{position:absolute;right:15px;bottom:35px}.card-content[data-v-5d1f3a8c]{padding:0}.buttons[data-v-5d1f3a8c]{margin:0}.is-primary[data-v-5d1f3a8c]{background-color:#0e9fe2}",""]),o.locals={},t.exports=o},227:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(26);function o(t,e){var r=e.trim().toLowerCase();return r.length?t.filter((function(t){return t.title.toLowerCase().indexOf(r)>-1})):t}},228:function(t,e,r){"use strict";var o={name:"products",props:["product"],data:function(){return{addToCartLabel:"Add to cart",viewDetailsLabel:"Details",removeFromCartLabel:"Remove from cart",addToFavouriteLabel:"Add to favourite",removeFromFavouriteLabel:"Remove from favourite",selected:1,quantityArray:[]}},mounted:function(){for(var i=1;i<=20;i++)this.quantityArray.push(i);this.$props.product.quantity>1&&(this.selected=this.$props.product.quantity)},computed:{isUserLogged:function(){return this.$store.getters.isUserLoggedIn}},methods:{addToCart:function(t){var data={id:t,status:!0};this.$store.commit("addToCart",t),this.$store.commit("setAddedBtn",data)},removeFromCart:function(t){var data={id:t,status:!1};this.$store.commit("removeFromCart",t),this.$store.commit("setAddedBtn",data)},saveToFavorite:function(t){this.$store.state.userInfo.isLoggedIn?this.$store.commit("addToFavourite",t):this.$store.commit("showLoginModal",!0)},removeFromFavourite:function(t){this.$store.commit("removeFromFavourite",t)},onSelectQuantity:function(t){var data={id:t,quantity:this.selected};this.$store.commit("quantity",data)}}},c=(r(225),r(3)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main"},[r("div",{staticClass:"card-image"},[r("figure",{staticClass:"image is-4by3"},[r("img",{attrs:{src:t.product.image,alt:"Placeholder image"}})])]),t._v(" "),r("div",{staticClass:"card-content"},[r("div",{staticClass:"media"},[r("div",{staticClass:"media-content"},[r("p",{staticClass:"title is-4"},[t._v(t._s(t.product.title))])])]),t._v(" "),r("div",{staticClass:"content is-clearfix"},[r("p",[t._v(t._s(t.product.description))]),t._v(" "),r("div",{staticClass:"is-pulled-left"},[1===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),2===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),2===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),3===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),3===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),3===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),4===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),4===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),4===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),4===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),r("p",[t._v(t._s(t.product.reviews>0?t.product.reviews+" Reviews":"No reviews"))])]),t._v(" "),r("p",{staticClass:"is-pulled-right"},[r("span",{staticClass:"title is-4"},[r("strong",[t._v("$ "+t._s(t.product.price))])])])]),t._v(" "),r("div",{staticClass:"card-footer btn-actions"},[r("div",{staticClass:"card-footer-item field is-grouped"},[r("div",{staticClass:"buttons"},[t.product.isAddedToCart?t._e():r("button",{staticClass:"button is-primary",on:{click:function(e){return t.addToCart(t.product.id)}}},[t._v(t._s(t.addToCartLabel))]),t._v(" "),t.product.isAddedToCart?r("button",{staticClass:"button is-text",on:{click:function(e){return t.removeFromCart(t.product.id,!1)}}},[t._v(t._s(t.removeFromCartLabel))]):t._e()]),t._v(" "),r("div",{staticClass:"select is-rounded is-small"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selected=e.target.multiple?r:r[0]},function(e){return t.onSelectQuantity(t.product.id)}]}},t._l(t.quantityArray,(function(e){return r("option",{domProps:{value:e}},[t._v(t._s(e))])})),0)])])])]),t._v(" "),r("nuxt-link",{staticClass:"details",attrs:{to:{name:"product_detail-id",params:{id:t.product.id,title:t.product.title,price:t.product.price,rating:t.product.ratings,reviews:t.product.reviews,isAddedBtn:t.product.isAddedBtn,image:t.product.image}}}})],1)}),[],!1,null,"5d1f3a8c",null);e.a=component.exports},229:function(t,e,r){var content=r(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("2c7f5172",content,!0,{sourceMap:!1})},233:function(t,e,r){"use strict";r(229)},234:function(t,e,r){var o=r(18)((function(i){return i[1]}));o.push([t.i,".card[data-v-1cc534e0]{margin:10px}",""]),o.locals={},t.exports=o},242:function(t,e,r){"use strict";r.r(e);var o=r(228),c=r(227),d={name:"user-wishlist",data:function(){return{pageTitle:"Your Wishlist",noProductLabel:"Your wishlist is empty"}},components:{VmProductsList:o.a},computed:{productsInWishlist:function(){return this.$store.state.userInfo.hasSearched?this.getProductByTitle():this.$store.getters.productsAddedToFavourite}},methods:{getProductByTitle:function(){var t=this.$store.getters.productsAddedToFavourite,e=this.$store.state.userInfo.productTitleSearched;return this.productsFiltered=Object(c.a)(t,e)}}},n=(r(233),r(3)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section"},[r("h3",{staticClass:"title"},[t._v(t._s(t.pageTitle))]),t._v(" "),r("div",{staticClass:"columns is-centered is-multiline"},[t._l(t.productsInWishlist,(function(t){return r("div",{key:t.id,staticClass:"card column is-one-quarter"},[r("VmProductsList",{attrs:{product:t}})],1)})),t._v(" "),0===t.productsInWishlist.length?r("div",{staticClass:"section"},[r("p",[t._v(t._s(t.noProductLabel))])]):t._e()],2)])}),[],!1,null,"1cc534e0",null);e.default=component.exports}}]);