"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[263],{8263:(y,u,s)=>{s.r(u),s.d(u,{HomeComponent:()=>U});var c=s(6895),_=s(8912),d=s(4349),l=s(433),g=s(2080),t=s(1571),h=s(9531),x=s(910),C=s(2018);function f(o,n){1&o&&t._UZ(0,"img",13)}function v(o,n){1&o&&t._UZ(0,"img",14)}function T(o,n){1&o&&t._UZ(0,"img",15)}function Z(o,n){if(1&o&&(t._UZ(0,"img",16),t.TgZ(1,"h5",17),t._uU(2),t.qZA()),2&o){const e=t.oxw().$implicit;t.Q6J("src",e.image,t.LSH),t.xp6(2),t.Oqu(e.name)}}function O(o,n){1&o&&(t.ynx(0),t.YNc(1,Z,3,2,"ng-template",3),t.BQk())}function D(o,n){if(1&o&&t._UZ(0,"i",31),2&o){const e=n.$implicit,i=t.oxw().$implicit;t.ekj("rating-color",i.ratingsAverage>=e)}}const M=function(o){return["/product-details",o]},A=function(){return[1,2,3,4,5]},E=function(o){return{"text-danger":o}};function P(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",18)(1,"div",19)(2,"a",20),t._UZ(3,"img",21),t.TgZ(4,"div",22)(5,"p",23),t._uU(6),t.qZA(),t.TgZ(7,"h5",24),t._uU(8),t.qZA(),t.TgZ(9,"div",25)(10,"span"),t._uU(11),t.qZA(),t.TgZ(12,"div"),t.YNc(13,D,1,2,"i",26),t.TgZ(14,"span"),t._uU(15),t.qZA()()()()(),t.TgZ(16,"button",27,28),t.NdJ("click",function(){const a=t.CHM(e).$implicit,m=t.MAs(17),p=t.oxw();return t.KtG(p.addToCart(a._id,m))}),t._uU(18," + Add TO Cart "),t.qZA(),t.TgZ(19,"i",29,30),t.NdJ("click",function(){const a=t.CHM(e).$implicit,m=t.MAs(20),p=t.oxw();return t.KtG(p.addToWishlist(a._id,m))}),t.qZA()()()}if(2&o){const e=n.$implicit,i=t.oxw();let r,a;t.xp6(2),t.Q6J("routerLink",t.VKq(8,M,e._id)),t.xp6(1),t.Q6J("src",null==e?null:e.imageCover,t.LSH),t.xp6(3),t.hij(" ",e.category.name," "),t.xp6(2),t.hij(" ",null==e||null==e.title||null==(r=e.title.split(" "))||null==(a=r.slice(0,2))?null:a.join(" ")," "),t.xp6(3),t.hij("",e.price," EGP"),t.xp6(2),t.Q6J("ngForOf",t.DdM(10,A)),t.xp6(2),t.Oqu(e.ratingsAverage),t.xp6(4),t.Q6J("ngClass",t.VKq(11,E,i.wishlistData.includes(e._id)))}}let U=(()=>{class o{constructor(e,i,r,a){this._productsService=e,this._CartService=i,this._ToastrService=r,this._Renderer2=a,this.mainSlider={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!0,autoplay:!0,autoplayTimeout:2e3,navSpeed:700,responsive:{0:{items:1}}},this.categories=[],this.allProducts=[],this.wishlistData=[],this.searchWord="",this.categorySlider={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!0,navSpeed:700,autoplay:!0,autoplayTimeout:2e3,responsive:{0:{items:1},400:{items:2},600:{items:3},900:{items:4},1200:{items:6},1400:{items:7}}}}ngOnInit(){this._productsService.getCategories().subscribe({next:e=>{this.categories=e.data}}),this._productsService.getAllProducts().subscribe({next:e=>{this.allProducts=e.data}}),this._CartService.getUserWishlist().subscribe({next:e=>{const i=e.data.map(r=>r._id);this.wishlistData=i}})}addToWishlist(e,i){this._CartService.addToWishlist(e).subscribe({next:r=>{this._ToastrService.success(r.message),this._Renderer2.setStyle(i,"color","red"),this._CartService.wishlistNumber.next(r.data.length),this.wishlistData=r.data}})}addToCart(e,i){this._CartService.addToCart(e).subscribe({next:r=>{this._ToastrService.success(r.message),this._CartService.cartNumber.next(r.numOfCartItems)}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h.R),t.Y36(x.N),t.Y36(C._W),t.Y36(t.Qsj))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],standalone:!0,features:[t.jDz],decls:20,vars:12,consts:[[1,"row","my-3"],[1,"col-md-9","p-0"],[3,"options"],["carouselSlide",""],[1,"col-md-3","p-0"],["src","assets/images/fresh-fruit-berry-.jpg","alt","slider-img","height","225px",1,"w-100"],["src","assets/images/colorful-fruits.jpg","alt","slider-img","height","225px",1,"w-100"],[4,"ngFor","ngForOf"],[1,"products"],[1,"text-center","my-5","heading","txt-color"],["type","text","placeholder","Search By Product Name",1,"form-control","mx-auto","my-4","rounded","txt-color","bg-color","searchInput",3,"ngModel","ngModelChange"],[1,"row","g-2","my-5"],["class","col-xl-2 col-lg-3 col-md-4 col-sm-6 my-2",4,"ngFor","ngForOf"],["src","assets/images/slider-image-1.jpeg","alt","slider-img","height","450px",1,"w-100"],["src","assets/images/slider-image-2.jpeg","alt","slider-img","height","450px",1,"w-100"],["src","assets/images/slider-image-3.jpeg","alt","slider-img","height","450px",1,"w-100"],["alt","",2,"width","200px","height","200px","border-radius","50%","margin","1rem auto",3,"src"],[1,"text-center","txt-color"],[1,"col-xl-2","col-lg-3","col-md-4","col-sm-6","my-2"],[1,"product","position-relative"],[1,"txt-color","text-decoration-none",3,"routerLink"],["alt","product-image",1,"w-100",3,"src"],[1,"content","p-2"],[1,"text-main","fw-normnal","txt-color","my-0"],[1,"txt-color","h6"],[1,"d-flex","justify-content-between","txt-color","font-sm"],["class","fa fa-star txt-color",3,"rating-color",4,"ngFor","ngForOf"],[1,"btn","bg-main","text-white",3,"click"],["addBtn",""],["role","a",1,"fa-solid","fa-heart","position-absolute","loveIcon",3,"ngClass","click"],["addtowishlist",""],[1,"fa","fa-star","txt-color"]],template:function(e,i){1&e&&(t.TgZ(0,"section")(1,"div",0)(2,"div",1)(3,"owl-carousel-o",2),t.YNc(4,f,1,0,"ng-template",3),t.YNc(5,v,1,0,"ng-template",3),t.YNc(6,T,1,0,"ng-template",3),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"img",5)(9,"img",6),t.qZA()()(),t.TgZ(10,"owl-carousel-o",2),t.YNc(11,O,2,0,"ng-container",7),t.qZA(),t.TgZ(12,"section",8)(13,"h2",9),t._uU(14,"Shop With Our Products"),t.qZA(),t.TgZ(15,"input",10),t.NdJ("ngModelChange",function(a){return i.searchWord=a}),t.qZA(),t.TgZ(16,"div",11),t.YNc(17,P,21,13,"div",12),t.ALo(18,"slice"),t.ALo(19,"searchPipe"),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("options",i.mainSlider),t.xp6(7),t.Q6J("options",i.categorySlider),t.xp6(1),t.Q6J("ngForOf",i.categories),t.xp6(4),t.Q6J("ngModel",i.searchWord),t.xp6(2),t.Q6J("ngForOf",t.Dn7(18,5,t.xi3(19,9,i.allProducts,i.searchWord),0,18)))},dependencies:[c.ez,c.mk,c.sg,c.OU,_.bB,_.Fy,_.Mp,d.rH,l.u5,l.Fj,l.JJ,l.On,g.C],styles:[".searchInput[_ngcontent-%COMP%]{width:min(450px,100%)}.loveIcon[_ngcontent-%COMP%]{top:1rem;right:1rem;color:var(--main-color);font-size:1.5rem;cursor:pointer;z-index:100}"]}),o})()}}]);