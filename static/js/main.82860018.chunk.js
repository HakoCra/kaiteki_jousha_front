(this["webpackJsonpkaiteki-jousha-front"]=this["webpackJsonpkaiteki-jousha-front"]||[]).push([[0],{166:function(e,t,n){},167:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),o=n.n(c),i=(n(68),n(8)),u=n.n(i),s=n(13),l=n(25),p=n(12),f=n(32),m=n(26),h=n(31),d=n(169),v=n(171),w=n(168),b=n(4),k=n.n(b),y=n(170),E=n(60),g=n(42),j=n.n(g),x=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(f.a)(this,Object(m.a)(t).call(this,e))).state={pin:e.pin},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"calcLine",value:function(e){return new Promise((function(t){t({labels:e.map((function(e){return j()(e.created_at).format("HH:mm:ss")})),datasets:[{label:"\u4e0d\u5feb\u6307\u6570",fill:!1,data:e.map((function(e){return e.fukai}))}]})}))}},{key:"componentDidMount",value:function(){var e=Object(s.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fukai.mybluemix.net/get-history/".concat(this.state.pin.uid));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,this.calcLine(n);case 8:a=e.sent,this.setState({data:a});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"nicoIcon",value:function(e,t){var n="";n="fukai"===e?60<t&&t<=70?"fine":"poor":"co2"===e?n=t<=1500?"fine":"poor":"aaa";var a="http://".concat(window.location.host).concat(window.location.pathname,"icons/face_").concat(n,".png");return r.a.createElement("img",{src:a,class:"face",alt:"emo_".concat(n)})}},{key:"render",value:function(){var e=this.state,t=e.pin,n=e.data;return r.a.createElement(y.a,{autoClose:!1},r.a.createElement("p",null,"UID: ",t.uid,r.a.createElement("br",null),"\u6c17\u6e29: ",t.temperature,r.a.createElement("br",null),"\u6e7f\u5ea6: ",t.humidity,r.a.createElement("br",null),"\u4e0d\u5feb\u6307\u6570: ",t.fukai," ",this.nicoIcon("fukai",t.fukai),r.a.createElement("br",null),"\u4e8c\u9178\u5316\u70ad\u7d20\u6fc3\u5ea6: ",t.co2," ",this.nicoIcon("co2",t.co2)),r.a.createElement(E.a,{data:n}))}}]),t}(r.a.Component);function O(e){e&&e.leafletElement.openPopup()}function I(e,t){var n=60<e&&e<=70&&t<=1500?"fine":"poor";return new k.a.Icon({iconUrl:"http://".concat(window.location.host).concat(window.location.pathname,"icons/icon_").concat(n,".png"),iconSize:[61,33],iconAnchor:[61,33],popupAnchor:[-38,-33]})}var S=function(e){var t=e.pin;return r.a.createElement(w.a,{ref:O,position:[t.latitude,t.longitude],icon:I(t.fukai,t.co2)},r.a.createElement(x,{pin:t}))},C=(n(166),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(f.a)(this,Object(m.a)(t).call(this,e))).revival=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,r,c,o,i,s,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a={})[t.target.name]=t.target.value,e.next=4,n.setState(a);case 4:if(r=n.state,c=r.date,o=r.time,c&&o){e.next=8;break}return n.setState({polling:!0}),e.abrupt("return");case 8:return i=new Date("".concat(c," ").concat(o)),e.next=11,fetch("https://fukai.mybluemix.net/at/".concat(i.getTime()));case 11:return s=e.sent,e.next=14,s.json();case 14:l=e.sent,n.setState({now:l,polling:!1});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={polling:!0,now:[]},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.timer=setInterval(Object(s.a)(u.a.mark((function e(){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.state.polling){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("https://fukai.mybluemix.net/now");case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,t.setState({now:a});case 9:case"end":return e.stop()}}),e)}))),5e3);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.state.now.filter((function(e){return"undefined"!==typeof e.latitude&&"undefined"!==typeof e.longitude})).map((function(e){return r.a.createElement(S,{pin:e,key:e._id})}));return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h3",null,"\u516c\u5171\u4ea4\u901a\u6a5f\u95a2\u3092\u5feb\u9069\u306b\u5229\u7528\u3059\u308b\u4f1a"),r.a.createElement("a",{href:"#about"},"About")),r.a.createElement(d.a,{id:"map",center:[41.8327605,140.7515623],zoom:13},r.a.createElement(v.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e),r.a.createElement("form",{id:"revival"},r.a.createElement("input",{type:"date",name:"date",onChange:this.revival}),r.a.createElement("input",{type:"time",name:"time",onChange:this.revival})))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},63:function(e,t,n){e.exports=n(167)},68:function(e,t,n){}},[[63,1,2]]]);
//# sourceMappingURL=main.82860018.chunk.js.map