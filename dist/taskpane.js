!function(){"use strict";({4183:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,a)}c((r=r.apply(e,n||[])).next())}))},r=this&&this.__generator||function(e,n){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(e,u)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function o(){return t(this,void 0,void 0,(function(){var e,n=this;return r(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,Excel.run((function(e){return t(n,void 0,void 0,(function(){var n;return r(this,(function(t){switch(t.label){case 0:return(n=e.workbook.getSelectedRange()).load("address"),n.format.fill.color="yellow",[4,e.sync()];case 1:return t.sent(),console.log("The range address was "+n.address+"."),[2]}}))}))}))];case 1:return o.sent(),[3,3];case 2:return e=o.sent(),console.error(e),[3,3];case 3:return[2]}}))}))}Object.defineProperty(n,"__esModule",{value:!0}),n.run=void 0,Office.initialize=function(){document.getElementById("sideload-msg").style.display="none",document.getElementById("app-body").style.display="flex",document.getElementById("run").onclick=o},n.run=o}})[4183](0,{})}();
//# sourceMappingURL=taskpane.js.map