"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[697],{697:(M,_,s)=>{s.r(_),s.d(_,{ProductsComponent:()=>E});var p=s(6895),g=s(2080),m=s(4349),c=s(433),l=s(4333),t=s(1571),h=s(9531),C=s(910),P=s(2018);function v(r,a){if(1&r&&t._UZ(0,"i",20),2&r){const e=a.$implicit,o=t.oxw().$implicit;t.ekj("rating-color",o.ratingsAverage>=e)}}const T=function(r){return["/product-details",r]},f=function(){return[1,2,3,4,5]};function x(r,a){if(1&r){const e=t.EpF();t.TgZ(0,"div",7)(1,"div",8)(2,"a",9),t._UZ(3,"img",10),t.TgZ(4,"div",11)(5,"p",12),t._uU(6),t.qZA(),t.TgZ(7,"h5",13),t._uU(8),t.qZA(),t.TgZ(9,"div",14)(10,"span"),t._uU(11),t.qZA(),t.TgZ(12,"div"),t.YNc(13,v,1,2,"i",15),t.TgZ(14,"span"),t._uU(15),t.qZA()()()()(),t.TgZ(16,"button",16,17),t.NdJ("click",function(){const i=t.CHM(e).$implicit,d=t.MAs(17),u=t.oxw();return t.KtG(u.addToCart(i._id,d))}),t._uU(18," + Add TO Cart "),t.qZA(),t.TgZ(19,"i",18,19),t.NdJ("click",function(){const i=t.CHM(e).$implicit,d=t.MAs(20),u=t.oxw();return t.KtG(u.addToWishlist(i._id,d))}),t.qZA()()()}if(2&r){const e=a.$implicit;let o,n;t.xp6(2),t.Q6J("routerLink",t.VKq(7,T,e._id)),t.xp6(1),t.Q6J("src",null==e?null:e.imageCover,t.LSH),t.xp6(3),t.hij(" ",e.category.name," "),t.xp6(2),t.hij(" ",null==e||null==e.title||null==(o=e.title.split(" "))||null==(n=o.slice(0,2))?null:n.join(" ")," "),t.xp6(3),t.hij("",e.price," EGP"),t.xp6(2),t.Q6J("ngForOf",t.DdM(9,f)),t.xp6(2),t.Oqu(e.ratingsAverage)}}const A=function(r,a,e){return{id:"productPagination",itemsPerPage:r,currentPage:a,totalItems:e}};let E=(()=>{class r{constructor(e,o,n,i){this._productsService=e,this._CartService=o,this._ToastrService=n,this._Renderer2=i,this.allProducts=[],this.searchWord="",this.pageSize=0,this.currentPage=0,this.total=0}ngOnInit(){this.getAllProducts()}getAllProducts(e=1){this._productsService.getAllProducts(e).subscribe({next:o=>{this.allProducts=o.data,this.pageSize=o.metadata.limit,this.currentPage=o.metadata.currentPage,this.total=o.results}})}addToWishlist(e,o){this._CartService.addToWishlist(e).subscribe({next:n=>{this._ToastrService.success(n.message),this._Renderer2.setStyle(o,"color","red")}})}addToCart(e,o){this._Renderer2.setAttribute(o,"disabled","true"),this._CartService.addToCart(e).subscribe({next:n=>{console.log(n),this._ToastrService.success(n.message),this._CartService.cartNumber.next(n.numOfCartItems),this._Renderer2.removeAttribute(o,"disabled")},error:n=>{this._Renderer2.removeAttribute(o,"disabled")}})}pageChanged(e){console.log(e),this.getAllProducts(e)}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(h.R),t.Y36(C.N),t.Y36(P._W),t.Y36(t.Qsj))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-products"]],standalone:!0,features:[t.jDz],decls:12,vars:20,consts:[[1,"products"],[1,"text-center","my-5","heading","txt-color"],["type","text","placeholder","Search By Product Name",1,"form-control","mx-auto","my-4","rounded","txt-color","bg-color","searchInput",3,"ngModel","ngModelChange"],[1,"d-flex","justify-content-center"],["id","productPagination","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"maxSize","directionLinks","autoHide","responsive","pageChange","pageBoundsCorrection"],[1,"row","g-2","my-5"],["class","col-xl-2 col-lg-3 col-md-4 col-sm-6 my-2","role","button",4,"ngFor","ngForOf"],["role","button",1,"col-xl-2","col-lg-3","col-md-4","col-sm-6","my-2"],[1,"product","position-relative"],[1,"txt-color","text-decoration-none",3,"routerLink"],["alt","product-image",1,"w-100",3,"src"],[1,"content","p-2"],[1,"text-main","fw-normnal","mt-3","txt-color","my-0"],[1,"txt-color","h6"],[1,"d-flex","justify-content-between","txt-color"],["class","fa fa-star ",3,"rating-color",4,"ngFor","ngForOf"],[1,"btn","bg-main","text-white",3,"click"],["addBtn",""],["role","a",1,"fa-solid","fa-heart","position-absolute","loveIcon",3,"click"],["addtowishlist",""],[1,"fa","fa-star"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0)(1,"h2",1),t._uU(2,"Shop With Our Products"),t.qZA(),t.TgZ(3,"input",2),t.NdJ("ngModelChange",function(i){return o.searchWord=i}),t.qZA(),t.TgZ(4,"div",3)(5,"pagination-controls",4),t.NdJ("pageChange",function(i){return o.pageChanged(i)})("pageBoundsCorrection",function(i){return o.pageChanged(i)}),t.qZA()(),t.TgZ(6,"div",5),t.YNc(7,x,21,10,"div",6),t.ALo(8,"searchPipe"),t.ALo(9,"paginate"),t.qZA(),t.TgZ(10,"div",3)(11,"pagination-controls",4),t.NdJ("pageChange",function(i){return o.pageChanged(i)})("pageBoundsCorrection",function(i){return o.pageChanged(i)}),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("ngModel",o.searchWord),t.xp6(2),t.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0),t.xp6(2),t.Q6J("ngForOf",t.xi3(8,10,t.xi3(9,13,o.allProducts,t.kEZ(16,A,o.pageSize,o.currentPage,o.total)),o.searchWord)),t.xp6(4),t.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0))},dependencies:[p.ez,p.sg,m.rH,c.u5,c.Fj,c.JJ,c.On,g.C,l.JX,l._s,l.LS],styles:[".searchInput[_ngcontent-%COMP%]{width:min(450px,100%)}.loveIcon[_ngcontent-%COMP%]{bottom:1rem;right:1rem;color:#303030;font-size:1.5rem;cursor:pointer;z-index:100}"]}),r})()}}]);