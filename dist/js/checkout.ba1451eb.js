(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["checkout"],{1063:function(t,e,a){},"1f68":function(t,e,a){"use strict";var s=a("c693"),i=a.n(s);i.a},"55ec":function(t,e,a){},"5c6b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"volver mb-2"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row d-flex justify-conted-around"},[a("div",{staticClass:"col-12 mx-auto pl-4"},[a("div",[a("ol",{staticClass:"breadcrumb mb-0 bg-white"},[t._l(t.breadcrumbList,function(e,s){return a("router-link",{key:s,staticClass:"link breadcrumb-item",class:{active:!!e.link},attrs:{to:"/"+e.link,tag:"li"}},[t._v("\n              "+t._s(e.name)+"\n            ")])}),a("li",{staticClass:"text-primary breadcrumb-item"},[t._v(t._s(t.url))])],2)])])])])])},i=[],n=a("2ef0"),o={name:"breadcrumb",data:function(){return{breadcrumbList:[]}},mounted:function(){this.updateList()},computed:{url:function(){return Object(n["startCase"])(Object(n["last"])(Object(n["split"])(this.$route.path,"/")))}},methods:{updateList:function(){this.breadcrumbList=this.$route.meta.breadcrumb}}},r=o,c=(a("e967"),a("2877")),l=Object(c["a"])(r,s,i,!1,null,"676e7f7c",null);e["a"]=l.exports},"62a5":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("volver"),a("section",{attrs:{id:"pagos"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row pt-3"},[a("div",{staticClass:"col-12 col-md order-1 order-md-0 bg-white"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"container mt-5 mb-2 "},[t._m(0),a("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[a("div",{staticClass:"tab-pane fade show active",attrs:{id:"informacion",role:"tabpanel","aria-labelledby":"informacion-tab"}},[a("informacion-cliente")],1),a("div",{staticClass:"tab-pane fade",attrs:{id:"envios",role:"tabpanel","aria-labelledby":"envios-tab"}},[null!=t.me?a("datos-envio"):t._e()],1),a("div",{staticClass:"tab-pane fade",attrs:{id:"metodo-pago",role:"tabpanel","aria-labelledby":"metodo-pago-tab"}},[null!=t.me?a("seleccionar-pago"):t._e()],1)])])])])]),a("div",{staticClass:"col-md-auto order-0 order-md-1"},[a("tu-carrito")],1)])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav nav-tabs justify-content-center",attrs:{id:"myTab",role:"tablist"}},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active h6 font-weight-bold font-italic mb-0 ",attrs:{id:"informacion-tab","data-toggle":"tab",href:"#informacion",role:"tab","aria-controls":"informacion","aria-selected":"true"}},[t._v("01\n                      INFORMACIÓN DEL CLIENTE")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link font-weight-bold h6 font-italic mb-0 disabled",attrs:{id:"envios-tab","data-toggle":"tab",href:"#envios",role:"tab","aria-controls":"envios","aria-selected":"false"}},[t._v("02\n                      DATOS DE ENVIO")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link font-weight-bold h6 font-italic mb-0 disabled",attrs:{id:"metodo-pago-tab","data-toggle":"tab",href:"#metodo-pago",role:"tab","aria-controls":"metodo-pago","aria-selected":"false"}},[t._v("03\n                      SELECCIÓN DEL PAGO")])])])}],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"informacion-cliente"}},[t._m(0),a("div",{staticClass:"row mb-5"},[a("form",{staticClass:"needs-validation",attrs:{novalidate:""}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",[t._v("NOMBRE COMPLETO")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.cliente.name,expression:"cliente.name"}],staticClass:"form-control",class:{"is-invalid":t.errors.first("name")},attrs:{name:"name",type:"text"},domProps:{value:t.cliente.name},on:{input:function(e){e.target.composing||t.$set(t.cliente,"name",e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("\n            Se requiere un nombre.\n          ")])]),a("div",{staticClass:"form-group col-md-6"},[a("label",[t._v("CEDULA")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.cliente.identification,expression:"cliente.identification"}],staticClass:"form-control",class:{"is-invalid":t.errors.first("cedula")},attrs:{name:"cedula",type:"text"},domProps:{value:t.cliente.identification},on:{change:t.checkDocumento,input:function(e){e.target.composing||t.$set(t.cliente,"identification",e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Se requiere de una cedula")])]),a("div",{staticClass:"form-group col-md-12"},[a("label",[t._v("DIRECCIÓN")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.address.address,expression:"address.address"}],staticClass:"form-control",class:{"is-invalid":t.errors.first("direccion")},attrs:{name:"direccion",type:"text"},domProps:{value:t.address.address},on:{input:function(e){e.target.composing||t.$set(t.address,"address",e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Se requiere de una dirección")])]),a("div",{staticClass:"form-group col-md-6"},[a("label",[t._v("DEPARTAMENTO")]),a("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.cliente.department,expression:"cliente.department"}],staticClass:"form-control",class:{"is-invalid":t.errors.first("departamento")},attrs:{name:"departamento"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.cliente,"department",e.target.multiple?a:a[0])},t.changeCiudades]}},t._l(t.departments,function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])}),0),a("div",{staticClass:"invalid-feedback"},[t._v("Se requiere de un departamento")])]),a("div",{staticClass:"form-group col-md-6"},[a("label",[t._v("CIUDAD")]),a("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.address.city_id,expression:"address.city_id"}],staticClass:"form-control",class:{"is-invalid":t.errors.first("ciudad")},attrs:{name:"ciudad"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.address,"city_id",e.target.multiple?a:a[0])}}},t._l(t.cities,function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])}),0),a("div",{staticClass:"invalid-feedback"},[t._v("Se requiere de una ciudad")])]),a("div",{staticClass:"form-group col-md-12"},[a("label",[t._v("CORREO")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:t.cliente.email,expression:"cliente.email"}],staticClass:"form-control",class:{"is-invalid":t.errors.first("email")},attrs:{name:"email",type:"email"},domProps:{value:t.cliente.email},on:{input:function(e){e.target.composing||t.$set(t.cliente,"email",e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Se requiere de un correo válido")])]),a("div",{staticClass:"form-group col-md-6"},[a("label",[t._v("TELEFONO")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.cliente.phone,expression:"cliente.phone"}],staticClass:"form-control",class:{"is-invalid":t.errors.first("telefono")},attrs:{name:"telefono",type:"tel"},domProps:{value:t.cliente.phone},on:{input:function(e){e.target.composing||t.$set(t.cliente,"phone",e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Se requiere de un teléfono")])]),a("div",{staticClass:"form-group col-md-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6  align-self-center "},[a("a",{staticClass:"text-dark text-decoration-none",attrs:{href:"#"},on:{click:t.back}},[a("font-awesome-icon",{attrs:{icon:"arrow-left",size:"xs"}}),t._v("\n                Regresa a comprar")],1)]),a("div",{staticClass:"col-sm-6  text-right"},[a("button",{staticClass:"btn btn-primary text-white  btn-lg w-md-100 font-italic font-weight-bold ",attrs:{type:"button"},on:{click:t.next}},[t._v("\n                CONTINUA A ENVIO\n              ")])])])])])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("span",{staticClass:"h3 font-italic text-primary font-weight-bold titulo"},[t._v("\n        Información del cliente\n    ")])])}],r=a("1a72"),c=a("2ef0"),l={name:"informacionCliente",data:function(){return{cities:[],cliente:{name:null,identification:null,email:null,phone:null,department:null,gender:"masculino"},address:{user_id:null,name:"casa",address:null,city_id:null}}},computed:{departments:function(){return this.$store.state.departments},citiesall:function(){return this.$store.state.cities},me:function(){return this.$store.state.me}},mounted:function(){null!=this.me&&(this.cliente=this.me,!Object(c["isEmpty"])(this.me)&&!Object(c["isEmpty"])(this.me.discounts)&&this.me.addresses.length>0?(this.address=this.me.addresses[0],this.changeDepartment()):this.address.user_id=this.me.id)},methods:{checkDocumento:function(){var t=this;r["a"].Users().checkDocumento(this.cliente.identification).then(function(e){e.data.data.length>0?(t.$store.commit("set_me",e.data.data[0]),t.me.addresses.length>0&&(t.address=t.me.addresses[0],t.changeDepartment())):t.me.id||(t.$store.commit("set_me",{}),t.cliente.id=null)})},next:function(){var t=this;this.$validator.validateAll().then(function(e){e&&(t.nextViewSend||(null==t.me||Object(c["isEmpty"])(t.me)?r["a"].Users().create(t.cliente).then(function(e){t.$store.commit("set_me",e.data.data),t.address.user_id=e.data.data.id,r["a"].Addresses().create(t.address).then(function(e){t.address=e.data.data,t.gotonext()})}):(t.address.id||r["a"].Addresses().create(t.address).then(function(e){t.address=e.data.data,t.gotonext()}),r["a"].Users().update(t.me.id,t.cliente).then(function(t){console.log(t)}),t.gotonext())))})},changeCiudades:function(){var t=this;this.cities=this.departments.filter(function(e){return e.id==t.cliente.department})[0].cities},changeDepartment:function(){var t=this;this.cliente.department=this.departments.filter(function(e){return e.id==t.citiesall.filter(function(e){return e.id==t.address.city_id})[0].department_id})[0].id,this.changeCiudades()},back:function(){},gotonext:function(){this.$store.commit("set_address",this.address),$("#envios-tab").removeClass("disabled").tab("show")}}},d=l,m=(a("ccad"),a("2877")),u=Object(m["a"])(d,n,o,!1,null,"9e6b0740",null),v=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container h-100 d-flex  flex-column"},[t._m(0),a("div",{staticClass:"row  my-3 flex-fill"},[a("div",{staticClass:"col-sm-12 mt-3"},t._l(t.cart.items,function(e){return a("div",{key:e.id,staticClass:"row flex-nowrap my-li-own mb-3"},[a("div",{staticClass:"col-auto px-0"},[a("div",{staticClass:"card border-0"},[a("v-lazy-image",{staticClass:"img-fluid image-product rounded-left",attrs:{src:e.images.length>0?e.images[0].url:t.imageDefault,"src-placeholder":t.imageDefault}})],1)]),a("div",{staticClass:"col-sm div-va"},[a("div",{staticClass:"row py-1"},[a("div",{staticClass:"col-sm-12 mb-1 text-left"},[a("p",{staticClass:"m-0 font-weight-bold text-capitalize"},[t._v("\n                "+t._s(e.name)+"\n              ")])]),a("div",{staticClass:"col-auto div-va "},[a("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group","aria-label":"Basic example"}},[a("button",{staticClass:"btn btn-outline-secondary rounded-0 br-left",attrs:{type:"button"},on:{click:function(t){e.quantity--}}},[t._v("-\n                ")]),a("button",{staticClass:"btn btn-outline-secondary"},[t._v(t._s(e.quantity))]),a("button",{staticClass:"btn btn-outline-secondary rounded-0 br-right",attrs:{type:"button"},on:{click:function(t){e.quantity++}}},[t._v("+\n                ")])])]),a("div",{staticClass:"col-auto div-va px-0"},[a("p",{staticClass:"m-0 price font-weight-bold"},[t._v("\n                "+t._s(t._f("money")(e.price))+"\n              ")])])])]),a("div",{staticClass:"col-auto div-va pl-0"},[a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.remove_product_cart(e)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])}),0)]),a("div",{staticClass:"row bg-white mt-3 mt-auto p-2 "},[a("div",{staticClass:"col-sm-12 p-4"},[a("div",{staticClass:"row  px-5 d-flex justify-content-between lh-condensed"},[t._m(1),a("span",{staticClass:"text-muted font-weight-bold"},[t._v(t._s(t._f("money")(t.total)))])]),a("div",{staticClass:"row  pb-1 px-5 d-flex justify-content-between lh-condensed"},[t._m(2),a("span",{staticClass:"text-muted font-weight-bold"},[t._v(t._s(t._f("money")(t.$store.state.tool_paying.costSend)))])]),a("div",{staticClass:"row  pb-1 px-5 d-flex justify-content-between lh-condensed"},[t._m(3),a("span",{staticClass:"text-muted font-weight-bold"},[t._v(t._s(t._f("money")(t.descuento)))])]),a("div",{staticClass:"row pt-3 pb-1 px-5 d-flex justify-content-between lh-condensed"},[t._m(4),a("span",{staticClass:"font-weight-bold font-italic text-dark h5"},[t._v(t._s(t._f("money")(t.total+t.$store.state.tool_paying.costSend-t.descuento)))])])])])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 bg-white py-5 px-4 "},[a("h3",{staticClass:"h2 font-italic font-weight-bold text-left text-primary"},[t._v("Tu carrito")]),a("span",{staticClass:"texto-resumen text-dark font-weight-bold"},[t._v("Resumen del pedido")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h6",{staticClass:"my-0 font-weight-bold"},[t._v("Subtotal")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h6",{staticClass:"my-0 font-weight-bold"},[t._v("Costo envio")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h6",{staticClass:"my-0 font-weight-bold"},[t._v("Descuento")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h6",{staticClass:"my-0 font-weight-bold"},[t._v("Precio Total")])])}],h=a("bda5"),C=a.n(h),_={name:"tuCarrito",data:function(){return{listaCarrito:[],imageDefault:C.a}},computed:{open:function(){return this.$store.state.open_cart},cart:function(){return this.$store.state.cart},me:function(){return this.$store.state.me},total:function(){return Object(c["sumBy"])(this.cart.items,function(t){return t.quantity*t.price})},descuento:function(){return!Object(c["isEmpty"])(this.me)&&!Object(c["isEmpty"])(this.me.discounts)&&this.me.discounts.length>0?parseInt(this.me.discounts[0].value/100*this.total):0},quantityCart:function(){return Object(c["sumBy"])(this.$store.state.cart.items,function(t){return t.quantity})}},methods:{open_menu:function(){this.$store.commit("open_cart",!this.open)},remove_product_cart:function(t){this.$store.commit("removeProductCart",t)}}},b=_,g=(a("9743"),Object(m["a"])(b,f,p,!1,null,"712dd9be",null)),x=g.exports,y=a("5c6b"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"informacion-cliente"}},[t._m(0),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[t._v("\n          Direccion\n        ")]),a("div",{staticClass:"col-12 ml-3"},[t.me.addresses&&t.me.addresses.length>0?a("span",{staticClass:"text-dark font-weight-bold h4 text-capitalize"},[t._v(t._s(t.me.addresses[0].address))]):t._e()]),a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.otherAddress,expression:"otherAddress"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"otra-direccion"},domProps:{checked:Array.isArray(t.otherAddress)?t._i(t.otherAddress,null)>-1:t.otherAddress},on:{change:function(e){var a=t.otherAddress,s=e.target,i=!!s.checked;if(Array.isArray(a)){var n=null,o=t._i(a,n);s.checked?o<0&&(t.otherAddress=a.concat([n])):o>-1&&(t.otherAddress=a.slice(0,o).concat(a.slice(o+1)))}else t.otherAddress=i}}}),a("label",{staticClass:"form-check-label",attrs:{for:"otra-direccion"}},[t._v("utilizar otra dirección")])])])]),t.otherAddress?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputAddressAux"}},[t._v("Dirección")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.address.address,expression:"address.address"}],staticClass:"form-control",class:{"is-invalid":t.errors.first("direccion")},attrs:{name:"direccion",type:"text",id:"inputAddressAux"},domProps:{value:t.address.address},on:{input:function(e){e.target.composing||t.$set(t.address,"address",e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("Se requiere de una dirección")])])]),a("div",{staticClass:"form-group col-md-6"},[a("label",[t._v("DEPARTAMENTO")]),a("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.department,expression:"department"}],staticClass:"form-control",class:{"is-invalid":t.errors.first("departamento")},attrs:{name:"departamento"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.department=e.target.multiple?a:a[0]},t.changeCiudades]}},t._l(t.departments,function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])}),0),a("div",{staticClass:"invalid-feedback"},[t._v("Se requiere de un departamento")])]),a("div",{staticClass:"form-group col-md-6"},[a("label",[t._v("CIUDAD")]),a("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.address.city_id,expression:"address.city_id"}],staticClass:"form-control",class:{"is-invalid":t.errors.first("ciudad")},attrs:{name:"ciudad"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.address,"city_id",e.target.multiple?a:a[0])}}},t._l(t.cities,function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])}),0),a("div",{staticClass:"invalid-feedback"},[t._v("Se requiere de una ciudad")])])]):t._e(),a("div",{staticClass:"row pt-4"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"row my-li-own mb-3 p-4"},[a("div",{staticClass:"col-sm-3 px-0 align-self-center"},[a("div",{staticClass:"custom-control custom-radio  text-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.domicile,expression:"domicile"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"armenia",name:"domicilio",value:"armenia"},domProps:{checked:t._q(t.domicile,"armenia")},on:{change:[function(e){t.domicile="armenia"},t.selectDomicile]}}),a("label",{staticClass:"custom-control-label",attrs:{for:"armenia"}})])]),t._m(1),t._m(2)])]),a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"row my-li-own mb-3 p-4"},[a("div",{staticClass:"col-sm-3 px-0 align-self-center"},[a("div",{staticClass:"custom-control custom-radio  text-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.domicile,expression:"domicile"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"quindio",name:"domicilio",value:"quindio"},domProps:{checked:t._q(t.domicile,"quindio")},on:{change:[function(e){t.domicile="quindio"},t.selectDomicile]}}),a("label",{staticClass:"custom-control-label",attrs:{for:"quindio"}})])]),t._m(3),t._m(4)])]),a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"row my-li-own mb-3 p-4"},[a("div",{staticClass:"col-sm-3 px-0 align-self-center"},[a("div",{staticClass:"custom-control custom-radio  text-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.domicile,expression:"domicile"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"otro",name:"domicilio",value:"otro"},domProps:{checked:t._q(t.domicile,"otro")},on:{change:[function(e){t.domicile="otro"},t.selectDomicile]}}),a("label",{staticClass:"custom-control-label",attrs:{for:"otro"}})])]),t._m(5),t._m(6)])])]),a("div",{staticClass:"row p-5"},[a("div",{staticClass:"col-sm-6  align-self-center"},[a("a",{staticClass:"text-dark text-decoration-none",attrs:{href:"#"},on:{click:t.back}},[a("font-awesome-icon",{attrs:{icon:"arrow-left",size:"xs"}}),t._v("\n            Información del cliente")],1)]),a("div",{staticClass:"col-sm-6  text-right"},[a("button",{staticClass:"btn btn-primary text-white  btn-lg w-md-100  font-italic font-weight-bold",attrs:{type:"submit"},on:{click:t.next}},[t._v("CONTINUA A PAGO\n          ")])])])])])])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("span",{staticClass:"h3 font-italic text-primary font-weight-bold titulo"},[t._v("\n                  Datos de envío\n              ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-6"},[a("h4",{staticClass:"text-primary"},[t._v("Domicilio en Armenia")]),a("p",{staticClass:"text-muted"},[t._v("\n                Debe ser pagado contraentrega en efectivo al domicilio. Revise las politicas de envio.\n              ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-3 d-flex flex-column justify-content-center align-items-center"},[a("small",{staticClass:"text-muted font-italic"},[t._v("Valor Envío")]),a("h5",{staticClass:"text-dark font-weight-bold font-italic"},[t._v("$3.000")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-6"},[a("h4",{staticClass:"text-primary"},[t._v("Domicilio en Quindio")]),a("p",{staticClass:"text-muted"},[t._v("\n                Debe ser pagado contraentrega en efectivo al domicilio. Revise las politicas de envio.\n              ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-3 d-flex flex-column justify-content-center align-items-center"},[a("small",{staticClass:"text-muted font-italic"},[t._v("Valor Envío")]),a("h5",{staticClass:"text-dark font-weight-bold font-italic"},[t._v("$8.000")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-6"},[a("h4",{staticClass:"text-primary"},[t._v("Domicilio fuera del Quindío")]),a("p",{staticClass:"text-muted"},[t._v("\n                Debe ser pagado contraentrega en efectivo al domicilio. Revise las politicas de envio.\n              ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-3 d-flex flex-column justify-content-center align-items-center"},[a("small",{staticClass:"text-muted font-italic"},[t._v("Pago")]),a("h5",{staticClass:"text-dark font-weight-bold font-italic"},[t._v("Contraentrega")])])}],E={name:"datosEnvio",data:function(){return{otherAddress:!1,address:{address:null,city_id:null,name:"segunda casa"},domicile:"armenia",department:null,cities:[]}},created:function(){this.selectDomicile()},computed:{departments:function(){return this.$store.state.departments},me:function(){return this.$store.state.me},cart:function(){return this.$store.state.cart},total:function(){return Object(c["sumBy"])(this.cart.items,function(t){return t.quantity*t.price})},descuento:function(){return null!=this.me&&this.me.discounts.length>0?parseInt(this.me.discounts[0].value/100*this.total):0}},methods:{changeCiudades:function(){var t=this;this.cities=this.departments.filter(function(e){return e.id==t.department})[0].cities},next:function(){var t=this;this.$validator.validateAll().then(function(e){e&&(t.otherAddress&&r["a"].Addresses().update(t.me.addresses[0].id,t.address).then(function(e){t.$store.state.me.addresses[0]=e.data.data}),$("#metodo-pago-tab").removeClass("disabled").tab("show"),t.descuento>0&&$("#modalDescuento").modal("show"))})},back:function(){$("#informacion-tab").tab("show")},selectDomicile:function(){var t=0;switch(this.domicile){case"armenia":t=3e3;break;case"quindio":t=8e3;break;default:t=0}this.$store.state.tool_paying.costSend=t}}},A=E,q=(a("1f68"),Object(m["a"])(A,w,k,!1,null,"67e76e3a",null)),P=q.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"informacion-cliente"}},[t._m(0),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-uppercase"},[t._v("\n          Direccion de envio\n        ")]),a("div",{staticClass:"col-12 ml-3"},[t.me.addresses&&t.me.addresses.length>0?a("span",{staticClass:"text-dark font-weight-bold h4 text-capitalize"},[t._v(t._s(t.me.addresses[0].address))]):t._e()])]),a("div",{staticClass:"row pt-4"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"row my-li-own mb-3 p-4 "},[a("div",{staticClass:"col-sm-3 px-0 align-self-center"},[a("div",{staticClass:"custom-control custom-radio  text-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.metodoPago,expression:"metodoPago"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"domicilio-armenia",name:"metodo-pago",value:"1"},domProps:{checked:t._q(t.metodoPago,"1")},on:{change:function(e){t.metodoPago="1"}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"domicilio-armenia"}})])]),t._m(1)])]),a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"row my-li-own mb-3 p-4"},[a("div",{staticClass:"col-sm-3 px-0 align-self-center"},[a("div",{staticClass:"custom-control custom-radio  text-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.metodoPago,expression:"metodoPago"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"pago-pse",name:"metodo-pago",value:"2"},domProps:{checked:t._q(t.metodoPago,"2")},on:{change:function(e){t.metodoPago="2"}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"pago-pse"}})])]),t._m(2)])]),a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"row my-li-own mb-3 p-4"},[a("div",{staticClass:"col-sm-3 px-0 align-self-center"},[a("div",{staticClass:"custom-control custom-radio  text-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.metodoPago,expression:"metodoPago"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"pago-credito",name:"metodo-pago",value:"3"},domProps:{checked:t._q(t.metodoPago,"3")},on:{change:function(e){t.metodoPago="3"}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"pago-credito"}})])]),t._m(3)])])]),a("div",{staticClass:"row p-5"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.factura,expression:"factura"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"facturaCheck"},domProps:{checked:Array.isArray(t.factura)?t._i(t.factura,null)>-1:t.factura},on:{change:function(e){var a=t.factura,s=e.target,i=!!s.checked;if(Array.isArray(a)){var n=null,o=t._i(a,n);s.checked?o<0&&(t.factura=a.concat([n])):o>-1&&(t.factura=a.slice(0,o).concat(a.slice(o+1)))}else t.factura=i}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"facturaCheck"}},[t._v("Necesita Factura")])])]),a("div",{staticClass:"col-12"},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.condiciones,expression:"condiciones"}],staticClass:"custom-control-input",class:{"is-invalid":!t.condiciones},attrs:{type:"checkbox",name:"condiciones",id:"condiciones"},domProps:{checked:Array.isArray(t.condiciones)?t._i(t.condiciones,null)>-1:t.condiciones},on:{change:function(e){var a=t.condiciones,s=e.target,i=!!s.checked;if(Array.isArray(a)){var n=null,o=t._i(a,n);s.checked?o<0&&(t.condiciones=a.concat([n])):o>-1&&(t.condiciones=a.slice(0,o).concat(a.slice(o+1)))}else t.condiciones=i}}}),t._m(4),a("div",{staticClass:"invalid-feedback"},[t._v("Se requiere confirmación")])])])]),a("div",{staticClass:"row p-5"},[a("div",{staticClass:"col-sm-6  align-self-center "},[a("a",{staticClass:"text-dark text-decoration-none",attrs:{href:"#"},on:{click:t.back}},[a("font-awesome-icon",{attrs:{icon:"arrow-left",size:"xs"}}),t._v("\n            Regresa a comprar")],1)]),a("div",{staticClass:"col-sm-6  text-right"},[a("button",{staticClass:"btn btn-primary text-white font-italic font-weight-bold  btn-lg w-md-100 text-uppercase",attrs:{type:"submit"},on:{click:t.next}},[t._v("\n            Realizar pedido\n          ")])])])])]),t.descuento?a("descuento",{attrs:{discount:t.me.discounts[0]}}):t._e()],1)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("span",{staticClass:"h3 font-italic text-primary font-weight-bold titulo"},[t._v("\n                  Método de pago\n              ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-9"},[a("h4",{staticClass:"text-primary"},[t._v("Contraentrega en Armenia")]),a("p",{staticClass:"text-muted"},[t._v("\n                Debe ser pagado contraentrega en efectivo al domiciliario. Revise las politicas de envio.\n              ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-9"},[a("h4",{staticClass:"text-primary"},[t._v("Pago con PSE")]),a("p",{staticClass:"text-muted"},[t._v('\n                Las transacciones son seguras y estan cifradas. Luego de hacer click en "finalizar pedido", serás\n                redirigido a Davivienda para completar tu compra de forma segura.\n              ')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-9"},[a("h4",{staticClass:"text-primary"},[t._v("Paga con tarjeta de crédito")]),a("p",{staticClass:"text-muted"},[t._v("\n                Serás redirigido a Davivienda para completar tu compra de forma segurá.\n              ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"custom-control-label",attrs:{for:"condiciones"}},[t._v(" He leído estoy de acuerdo con los\n              "),a("span",{staticClass:"font-weight-bold text-primary"},[t._v("términos y condíciones ")]),t._v(" y\n              "),a("span",{staticClass:"font-weight-bold text-primary"},[t._v("politicas de privaidad.")])])}],O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"modal fade",attrs:{id:"modalDescuento",tabindex:"-1",role:"dialog","aria-labelledby":"modalDescuentoTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content btn-lg"},[t._m(0),s("div",{staticClass:"modal-body text-center"},[s("img",{staticClass:"img-fluid",attrs:{src:a("acd3")}}),s("h1",{staticClass:"descuento"},[t._v(t._s(t.discount.value)+"%")])]),t._m(1)])])])])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header border-0"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer d-flex flex-column border-0"},[a("span",{staticClass:"text-muted font-italic small"},[t._v("Ha sido activado")]),a("h3",{staticClass:"text-primary font-weight-bold font-italic"},[t._v("Tu Descuento")]),a("p",{staticClass:"text-muted small"},[t._v("Has sido seleccionado para disfrutar de nuestro descuento")])])}],S={name:"descuento",props:{discount:{require:!0}}},I=S,T=(a("b678"),Object(m["a"])(I,O,j,!1,null,"51570f16",null)),R=T.exports,L={name:"seleccionarPago",components:{descuento:R},data:function(){return{metodoPago:"1",factura:!1,condiciones:!1,items:[]}},mounted:function(){},computed:{me:function(){return this.$store.state.me},shopping:function(){return{status_order_id:1,user_id:this.me.id,address_id:this.me.addresses[0].id,items:this.cart.items,total:this.total+this.costo_envio-this.descuento,discount_id:null,payment_id:this.metodoPago}},cart:function(){return this.$store.state.cart},total:function(){return Object(c["sumBy"])(this.cart.items,function(t){return t.quantity*t.price})},costo_envio:function(){return this.$store.state.tool_paying.costSend},discount:function(){return!Object(c["isEmpty"])(this.me)&&!Object(c["isEmpty"])(this.me.discounts)&&this.me.discounts.length>0?this.me.discounts[0]:null},descuento:function(){return!Object(c["isEmpty"])(this.me)&&!Object(c["isEmpty"])(this.me.discounts)&&this.me.discounts.length>0?parseInt(this.me.discounts[0].value/100*this.total):0}},methods:{next:function(){var t=this;this.condiciones&&(this.$store.state.loading=!0,this.shopping.discount_id=this.discount?this.discount.id:null,r["a"].Shopping().create(this.shopping).then(function(e){t.cart.items=t.shopping.items.map(function(t){return t.shopping_id=e.data.data.id,t.product_id=t.id,t.value=t.price,t}),r["a"].DetailShopping().create(t.cart).then(function(e){t.$store.state.loading=!1,t.me.discounts[0].id&&r["a"].Discounts().Users(t.me.discounts[0].id).delete(t.me.id).then(function(e){t.$store.state.me.discounts=t.me.discounts.filter(function(e){return e.id!=t.me.discounts[0].id})}),t.$router.push("thankyou"),t.$store.state.cart.items=[],"1"!=t.metodoPago&&window.open("https://www.zonapagos.com/t_feelfit/")})}).catch(function(t){console.log(t)}))},back:function(){$("#envios-tab").tab("show")}}},z=L,U=(a("871c"),Object(m["a"])(z,D,N,!1,null,"0cad56b0",null)),V=U.exports,B={name:"pago",metaInfo:function(){return{title:"Pagos | Feelfit",meta:[{name:"description",content:"pagos"},{name:"keywords",content:"pagos, feelfit, venta de productos fitness"}],link:[{rel:"canonical",href:"https://feelfitmarket.com"+this.$route.fullPath}]}},components:{SeleccionarPago:V,DatosEnvio:P,TuCarrito:x,InformacionCliente:v,volver:y["a"]},created:function(){this.$store.dispatch("getDepartments"),this.$store.dispatch("getCities")},computed:{nextViewSend:function(){return this.$store.state.tool_paying.nextViewSend},nextViewPay:function(){return this.$store.state.tool_paying.nextViewPay},me:function(){return this.$store.state.me}}},M=B,F=(a("be56"),Object(m["a"])(M,s,i,!1,null,"88f69462",null));e["default"]=F.exports},"871c":function(t,e,a){"use strict";var s=a("55ec"),i=a.n(s);i.a},9657:function(t,e,a){},9743:function(t,e,a){"use strict";var s=a("f532"),i=a.n(s);i.a},acd3:function(t,e,a){t.exports=a.p+"img/des.24febeb8.png"},b678:function(t,e,a){"use strict";var s=a("9657"),i=a.n(s);i.a},be56:function(t,e,a){"use strict";var s=a("1063"),i=a.n(s);i.a},c693:function(t,e,a){},ccad:function(t,e,a){"use strict";var s=a("d796"),i=a.n(s);i.a},d640:function(t,e,a){},d796:function(t,e,a){},e967:function(t,e,a){"use strict";var s=a("d640"),i=a.n(s);i.a},f532:function(t,e,a){}}]);