(this.webpackJsonplynxholidaybot=this.webpackJsonplynxholidaybot||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(4),s=a.n(l),r=(a(16),a(5)),i=a(6),c=a(9),m=a(7),u=a(1),p=a(10),d=a(8),h=a.n(d),f=a(2),v=(a(17),a(18),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state=void 0,a.inputRef=void 0,a.state={names:[],name:[]},a.updateInput=a.updateInput.bind(Object(u.a)(a)),a.generate=a.generate.bind(Object(u.a)(a)),a.save=a.save.bind(Object(u.a)(a)),a.inputRef=o.a.createRef(),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.inputRef.current.focus()}},{key:"downloadCSV",value:function(e){var t="data:text/csv;charset=utf-8,";e.forEach((function(e){for(var a=0,n=e.length;a<n;a++)"string"==typeof e[a]&&(e[a]=e[a].replace(/<(?:.|\n)*?>/gm,"")),e[a]=e[a].replace(/,/g,"");var o=e.join(",");t+=o+"\r\n"}));var a=encodeURI(t),n=document.createElement("a");n.setAttribute("href",a),n.setAttribute("download","fileName.csv"),document.body.appendChild(n),n.click()}},{key:"openMessagePopupbox",value:function(){var e=o.a.createElement("div",null,o.a.createElement("p",{className:"quotes"},"In order to generate a randomized paired list,"),o.a.createElement("p",{className:"quotes"}," you need to have an even number of persons"),o.a.createElement("p",{className:"quotes"}," and have at least two names added."),o.a.createElement("span",{className:"quotes-from"},"\u2015 Santa Bot"));f.PopupboxManager.open({content:e})}},{key:"openGeneratePopupbox",value:function(e){var t=this,a=o.a.createElement("div",null,o.a.createElement("p",{className:"quotes"},"Your Secret Santa list has been generated!",o.a.createElement("br",null),"Choose an option below."),o.a.createElement("p",{className:"downloadLink"},"Email"),o.a.createElement("p",{className:"blueLink"},"or"),o.a.createElement("p",{className:"downloadLink"},o.a.createElement("a",{href:"javascript:void(0)",onClick:function(){return t.downloadCSV(e)}},"Download")));f.PopupboxManager.open({content:a})}},{key:"generate",value:function(){if(this.state.names.length>=3&&this.state.names.length%2==0){console.log("List is even with total names = ",this.state.names.length),this.state.names.sort((function(){return.5-Math.random()}));for(var e=[];this.state.names.length>=2;){var t=[this.state.names.pop(),this.state.names.pop()];e.push(t)}console.log("All pairs",e),this.openGeneratePopupbox(e)}else this.openMessagePopupbox()}},{key:"updateInput",value:function(e){this.setState({name:e.target.value})}},{key:"save",value:function(e){e.preventDefault(),this.state.names.push(this.state.name),this.setState({name:""}),this.inputRef.current.focus()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:h.a,className:"App-logo"}),o.a.createElement("p",{className:"Holiday-text"},"Holiday Bot"),o.a.createElement("p",null,"A fun Secret Santa Generator for Teams across McKesson."),o.a.createElement("h3",null,"Get Started"),o.a.createElement("ul",{className:"App-normal"},o.a.createElement("li",null,"1. Fill in the names of each individuals in your team"),o.a.createElement("li",null,"2. Press ",o.a.createElement("code",null,"Generate")," to pair teammembers"),o.a.createElement("li",null,"3. Press ",o.a.createElement("code",null,"Print")," or ",o.a.createElement("code",null,"Email")," to finalize")),o.a.createElement("hr",null),o.a.createElement("p",{className:"App-note"},"Your generated list will not be saved so be sure to print or email the list to yourself and your teammembers."),o.a.createElement("section",{className:"App-sectionone"},o.a.createElement("div",{className:"App-formArea"},o.a.createElement("form",null,o.a.createElement("input",{ref:this.inputRef,type:"text",name:"name",className:"App-res",placeholder:"Enter team members name",onChange:this.updateInput,value:this.state.name}),o.a.createElement("button",{onClick:this.save.bind(this),type:"submit"},"Add")))),o.a.createElement("div",null,o.a.createElement("ul",{id:"App-nameslist"},this.state.names.map((function(e,t){return o.a.createElement("li",{key:t},e)})))),o.a.createElement("div",null,o.a.createElement("button",{id:"App-generateButton",onClick:this.generate.bind(this),type:"button"},"Generate"),o.a.createElement(f.PopupboxContainer,null))))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a.p+"static/media/LynxLogo.d23c8b0e.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.4b418c7f.chunk.js.map