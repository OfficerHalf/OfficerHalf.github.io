(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){e.exports=a(222)},190:function(e,t,a){},202:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){},209:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i,c=a(22),s=a(28),m={root:"/",home:{base:"/"},contact:{base:"/contact"},project:{base:"/project",alloy:{base:"/project/alloy"},homebrewery:{base:"/project/homebrewery-preview"},userManagement:{base:"/work/user-management"},csrg:{base:"/work/service-registry"},bwc:{base:"/work/bwc"}}},u={root:"/dnd"};!function(e){e.Home="/",e.Contact="/contact"}(i||(i={}));var d=a(226),p=a(225),h=a(93),g=Object(s.f)(function(e){return n.createElement(n.Fragment,null,n.createElement("span",{className:"logo",style:{color:"white",paddingRight:20}},"Nathan Smith"),n.createElement(p.a,{type:"vertical"}),n.createElement(h.a,{mode:"horizontal",theme:"dark",style:{lineHeight:"64px",display:"inline-block"}},n.createElement(h.a.Item,null,n.createElement(c.b,{to:m.home.base},"Home")),n.createElement(h.a.Item,null,n.createElement(c.b,{to:m.contact.base},"Contact"))))}),f=a(233),y=function(e){return n.createElement("div",null,"Find me here:",n.createElement(f.a,{icon:"github",style:{backgroundColor:"transparent",borderColor:"transparent",boxShadow:"none",marginLeft:4},href:"https://github.com/OfficerHalf",target:"_blank",rel:"noreferrer"}),n.createElement(f.a,{icon:"linkedin",style:{backgroundColor:"transparent",borderColor:"transparent",boxShadow:"none"},href:"https://www.linkedin.com/in/nathan-r-smith/",target:"_blank",rel:"noreferrer"}),n.createElement("span",{style:{float:"right"}},"\xa9 Nathan Smith 2019"))},b=d.a.Header,E=d.a.Content,w=d.a.Footer,k=function(e){return n.createElement(d.a,{className:"layout",style:{minHeight:"100vh"}},n.createElement(b,null,n.createElement(g,null)),n.createElement(E,{style:{padding:"50px 50px 0px 50px",display:"flex",flexFlow:"column"}},e.children),n.createElement(w,null,n.createElement(y,null)))},v=a(229),S=(a(190),function(e){return n.createElement(v.a,{className:"project",title:e.title,extra:"a"===e.linkType?n.createElement("a",{className:"project-more-link",href:e.link,target:"_blank",rel:"noopener noreferrer"},"More"):n.createElement(c.b,{to:e.link},"More"),style:{margin:8}},n.createElement("p",{className:"project-description",style:{margin:0}},e.description))}),N=[{title:"Alloy",description:"A more monochromatic, desaturated Monokai theme for Visual Studio Code, PrismJS, and Conemu.",link:m.project.alloy.base,linkType:"Link"},{title:"Homebrewery Markdown Preview",description:"An extension for Visual Studio Code that formats the markdown preview in the same manner as the Homebrewery",link:m.project.homebrewery.base,linkType:"Link"},{title:"The Captain's Hooks",description:"A collection of useful React utility hooks.",link:"https://www.npmjs.com/package/the-captains-hooks",linkType:"a"}],x=[{cardProps:{title:"User Management",description:"A directory administration application for managing users, groups, and roles.",link:m.project.userManagement.base,linkType:"Link"},challengesSolutions:"Changing schema, differing apis, inexperienced developers",description:n.createElement(n.Fragment,null,n.createElement("p",null,"When Bentley switched from an internal user database to a 3rd party solution, a new User Management application was created to replace the old solution. The new application was intended to have feature parity with the old,to be more responsive, and to better fit with the company's newer aesthetic style.")),images:[{src:"".concat("","/UserMan1.png"),alt:"User Management main view"},{src:"".concat("","/UserMan2a.png"),alt:"User Profile view"},{src:"".concat("","/UserMan3.png"),alt:"Modify roles view"}],myRole:n.createElement(n.Fragment,null,n.createElement("p",null,"I was a developer on the project but took a lead position, managing and delegating tasks for a rotating group of devs of different experience levels. I guided the development team through architectural and design decisions to produce a consistent product."),n.createElement("p",null),n.createElement("p",null,"It also was my job to know a little bit of everything and communicate between the team and the 3rd party providers we were working with.")),technologies:["ASP.Net Core","React","OIDC","LDAP","SCIMv2","TypeScript","C#"],company:"Bentley Systems",features:[{name:"Manage Users",description:n.createElement("ul",null,n.createElement("li",null,"Create users manually or via CSV upload"),n.createElement("li",null,"Update users manually or via CSV upload"),n.createElement("li",null,"Delete users"),n.createElement("li",null,"Assign roles to users"))},{name:"Manage Groups",description:n.createElement("ul",null,n.createElement("li",null,"Create user groups"),n.createElement("li",null,"Delete user groups"),n.createElement("li",null,"Assign users to groups"),n.createElement("li",null,"Groups can be simple user groups, allocation groups for reporting, or entitlement groups for billing."))},{name:"Manage Owned Domains",description:n.createElement("ul",null,n.createElement("li",null,"Company ABC can claim ownership 'abc.com' so that any users that register with an 'abc.com' email will automatically be associated with ABC's account."),n.createElement("li",null,"New users for an owned domain can be manually or automatically approved."))}]},{cardProps:{title:"Service Registry",description:"",link:m.project.csrg.base,linkType:"Link"},challengesSolutions:"",description:"",images:[],myRole:"",technologies:["ASP.Net Core","React","OIDC","TypeScript","C#"],company:"Bentley Systems",features:[]},{cardProps:{title:"Bentley Web Components",description:"",link:m.project.bwc.base,linkType:"Link"},challengesSolutions:"",description:"",company:"Bentley Systems",images:[],myRole:"",technologies:["React","TypeScript"],features:[]}],C=(a(202),function(e){return n.createElement(k,null,n.createElement("div",{className:"home-wrapper",style:{backgroundColor:"white",padding:24,minHeight:280}},n.createElement("div",{className:"home-section"},n.createElement("div",{className:"home-section-inner"},n.createElement("h2",null,"About"),n.createElement("p",null,"Nathan Smith is an Associate Software Developer at Bentley Systems where he writes full-stack enterprise ASP.NET Core and TypeScript + React web applications and maintains a CSS + React UI library. In his spare time he plays tabletop and video games and takes pictures of his cats.")),n.createElement("div",{className:"home-section-inner home-section-inner-projects"},n.createElement("h2",null,"Projects"),n.createElement("div",{className:"home-project-grid"},N.map(function(e){return n.createElement(S,Object.assign({},e,{key:e.title}))}))),n.createElement("div",{className:"home-section-inner home-section-inner-projects"},n.createElement("h2",null,"Work"),n.createElement("div",{className:"home-project-grid"},x.map(function(e){return n.createElement(S,Object.assign({},e.cardProps,{key:e.cardProps.title}))}))))))}),j=a(52),M=a(2),T=a.n(M),A=(a(203),a(123)),H=a(124),R=a(122),I=a(232),P={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},O=function(e){var t=e.ease,a=void 0===t?"ease":t,r=e.timeout,o=void 0===r?300:r,l=e.in,i=e.children,c=Object(R.a)(e,["ease","timeout","in","children"]),s={opacity:0,transition:"opacity ".concat(o,"ms"),transitionTimingFunction:a};return n.createElement(I.a,Object.assign({timeout:o,in:l},c),function(e){return n.createElement("div",{style:Object(H.a)({},s,P[e]),children:i})})},B=function(e){var t=n.useState(!0),a=Object(j.a)(t,2),r=a[0],o=a[1];return n.createElement("div",{className:"contact-wrapper"},r&&n.createElement(A.a,{className:"contact-spinner"}),n.createElement(O,{in:!r},n.createElement("iframe",{className:T()("contact-iframe"),src:"https://docs.google.com/forms/d/e/1FAIpQLScLKJVojwvtY0TpBPYfaUQEhKjQfa2iAZsitp3iRxkEoAYvmw/viewform?embedded=true",title:"Contact Me",onLoad:function(){return o(!1)}})))},F=function(e){return n.createElement(k,null,n.createElement("div",{style:{flex:"1 1 auto",display:"flex",width:"100%",justifyContent:"center",height:"100%"}},n.createElement(B,null)))},D=a(53),L=(a(204),Object(s.f)(function(e){return n.createElement(k,null,n.createElement("div",{id:"not-found"},n.createElement(D.a,{description:n.createElement("span",null,"Something went wrong or there is nothing here.")},n.createElement(c.b,{to:m.home.base},n.createElement(f.a,{type:"primary"},"Return Home")))))})),U=a(231),V=(a(205),a(11)),W=function(e){var t=e.width,a=void 0===t?700:t,r=e.height,o=void 0===r?500:r,l=e.imageLeftSrc,i=e.imageRightSrc,c=e.labelLeft,s=void 0===c?"":c,m=e.labelRight,u=void 0===m?"":m,d=e.dragHandleColor,p=void 0===d?"white":d,h=e.dragHandleRadius,g=void 0===h?40:h,f=n.useRef(null),y=n.useRef(),b=n.useState(!1),E=Object(j.a)(b,2),w=E[0],k=E[1],v=n.useState(0),S=Object(j.a)(v,2),N=S[0],x=S[1],C=n.useState(a/2),M=Object(j.a)(C,2),T=M[0],A=M[1];n.useEffect(function(){return function(){y.current&&cancelAnimationFrame(y.current)}},[]),n.useEffect(function(){x(f.current.getBoundingClientRect().left)},[f]);var H=n.useCallback(function(){k(!0)},[]),R=n.useCallback(function(e){!0===w&&(k(!1),e.persist(),y.current=requestAnimationFrame(function(){A(Math.min(Math.max(g/2,e.pageX-g/2-N+a/2),a-g/2))}))},[N,a,w,g]),I=n.useCallback(function(e){!0===w&&(e.persist(),y.current=requestAnimationFrame(function(){A(Math.min(Math.max(g/2,e.pageX-g/2-N+a/2),a-g/2))}))},[N,a,w,g]);return n.createElement("div",{className:"image-comparison-container",onMouseMove:I,onMouseUp:R,onMouseLeave:R,draggable:!1},n.createElement("div",{draggable:!1,className:"image-comparison-wrapper",style:{width:T}},n.createElement("div",{draggable:!1,className:"image-comparison-left",style:{width:T,height:o,backgroundImage:'url("'.concat(l,'")'),backgroundSize:"".concat(a,"px ").concat(o,"px")}}),n.createElement("div",{draggable:!1,className:"image-comparison-left-label"},s)),n.createElement("div",{draggable:!1,className:"image-comparison-wrapper",style:{width:a-T}},n.createElement("div",{draggable:!1,className:"image-comparison-right",style:{width:a-T,height:o,backgroundImage:'url("'.concat(i,'")'),backgroundSize:"".concat(a,"px ").concat(o,"px")}}),n.createElement("div",{draggable:!1,className:"image-comparison-right-label"},u)),n.createElement("div",{className:"image-comparison-draggable-container",style:{height:o,transform:"translateX(".concat(T-g/2,"px)")}},n.createElement("div",{style:{width:g,height:g,borderRadius:g/2,backgroundColor:p},onMouseDown:H,ref:f,className:"image-comparison-draggable"},n.createElement(V.a,{className:"image-comparison-draggable-icon",type:"left"}),n.createElement(V.a,{className:"image-comparison-draggable-icon",type:"right"}))))},G=d.a.Content,_=Object(s.f)(function(e){return n.createElement(d.a,{style:{minHeight:"100vh"}},n.createElement(U.a,{onBack:function(){return e.history.push(m.home.base)},title:"Alloy"}),n.createElement(G,{style:{justifyContent:"center",display:"flex",textAlign:"center"}},n.createElement("div",null,n.createElement(W,{imageLeftSrc:"".concat("","/Alloy2.png"),imageRightSrc:"".concat("","/Monokai2.png"),width:1280,height:800,labelLeft:"Alloy",labelRight:"Monokai",dragHandleColor:"#F0558E"}),n.createElement("h2",{style:{marginTop:5}},"About"),n.createElement("p",null,"Alloy is my response to the green and yellow tinted world of Monokai.",n.createElement("br",null),"Alloy has more contrast and clearer color, while maintaining Monokai's vibrant palette."),n.createElement("p",null,n.createElement("a",{href:"https://marketplace.visualstudio.com/items?itemName=officerhalf.alloy-theme",target:"_blank",rel:"noopener noreferrer"},"Get the extension for VS Code."),n.createElement("br",null),n.createElement("a",{href:"https://github.com/OfficerHalf/alloy-theme",target:"_blank",rel:"noopener noreferrer"},"See the source.")))))}),q=(a(206),a(207),a(208),Object(s.f)(function(e){return n.createElement(d.a,{style:{minHeight:"100vh",display:"flex"}},n.createElement(U.a,{onBack:function(){return e.history.push(m.home.base)},title:"Homebrewery Markdown Preview"}),n.createElement("div",{className:"phb",id:"p1",style:{marginBottom:"auto",height:"auto",alignSelf:"center",marginTop:100}},n.createElement("h1",{id:"homebrewery-markdown-preview-1","data-line":"0",className:"code-line"},"Homebrewery Markdown Preview"),n.createElement("p",{"data-line":"2",className:"code-line"},"Greetings friend! Pull up a chair and listen to my tale; it is a story of a GM with grand ideas, but frustrated with an online Markdown editor that isn't quite up to par. He channeled his angst into his own little helper, a Visual Studio Code extension to solve his woes."),n.createElement("h3",{id:"homebrew-dd-1","data-line":"4",className:"code-line"},"Homebrew D&D"),n.createElement("p",{"data-line":"6",className:"code-line"},"The ",n.createElement("a",{href:"https://homebrewery.naturalcrit.com/"},"Homebrewery")," is a wonderful online tool for creating homebrew D&D content that looks like it came straight out of the Player's Handbook. With markdown and a little CSS magic, it turns bland text into readable, flavorful homebrew content. How else are you going to share your custom anime protagonist background or your homemade lightsaber weapon stat block?"),n.createElement("h3",{id:"the-problem--the-solution-1","data-line":"8",className:"code-line"},"The Problem & The Solution"),n.createElement("p",{"data-line":"10",className:"code-line"},"However, the Homebrewery's online editor leaves something to be desired. Bare syntax highlighting combined with minimal tooling can be a frustrating experience."),n.createElement("p",{"data-line":"12",className:"code-line"},"My solution was to create an extension for Visual Studio Code that would allow me to do my homebrew editing there in a much more powerful application."),n.createElement("blockquote",{"data-line":"17",className:"code-line",style:{marginTop:5}},n.createElement("h5",{id:"did-you-know-1","data-line":"17",className:"code-line"},"Did You Know"),n.createElement("p",{"data-line":"18",className:"code-line"},"This extension includes a number of snippets for creating descriptions, statblocks, and notes just like this one? Wow! What a great value!")),n.createElement("h2",{id:"what-it-does-1","data-line":"23",className:"code-line"},"What it does"),n.createElement("p",{"data-line":"24",className:"code-line"},"The extension shows your homebrew content as you type in VS Code's markdown preview window. Toggling the homebrew styling on/off is easy with a command from the command palette."),n.createElement("h2",{id:"where-to-get-it-1","data-line":"26",className:"code-line"},"Where to get it"),n.createElement("p",{"data-line":"27",className:"code-line"},"The extension can be found in the extensions pane of Visual Studio Code or"," ",n.createElement("a",{href:"https://marketplace.visualstudio.com/items?itemName=officerhalf.homebrewery-vscode"},"here"),".",n.createElement("br",null),n.createElement("br",null),"The source is available"," ",n.createElement("a",{href:"https://github.com/OfficerHalf/homebrewery-vscode"},"here"),".")))})),J=a(230),Y=a(228),z=(a(209),d.a.Header),K=d.a.Content,Q=d.a.Footer,X=Object(s.f)(function(e){var t=e.challengesSolutions,a=e.description,r=e.images,o=e.myRole,l=e.technologies,i=e.company,c=e.features,s=e.cardProps.title;return n.createElement(d.a,{id:"work-layout"},n.createElement(z,{id:"work-layout-header"},n.createElement(U.a,{backIcon:n.createElement(V.a,{type:"home"}),title:"Nathan Smith",subTitle:"@ ".concat(i),style:{display:"inline-block"},onBack:function(){return e.history.push(m.home.base)}}),n.createElement(p.a,{type:"vertical",style:{height:18}}),n.createElement("h3",{id:"work-layout-project-title"},s)),n.createElement(K,{id:"work-layout-content"},n.createElement("div",{className:"work-layout-section"},n.createElement("div",{id:"work-layout-description"},a),n.createElement(J.a,{style:{backgroundColor:"white"},id:"work-layout-features",header:n.createElement("h3",{style:{margin:0}},"Features"),bordered:!0,dataSource:c,renderItem:function(e){return n.createElement(J.a.Item,{style:{flexDirection:"column",alignItems:"flex-start"}},n.createElement("h4",null,e.name),e.description)}}),n.createElement(v.a,{id:"work-layout-my-role",title:"My Role"},o),n.createElement(Y.a,{autoplay:!0,easing:"ease-in-out"},r.map(function(e,t){return n.createElement("div",{key:t},n.createElement("img",{className:"work-layout-img",src:e.src,alt:e.alt}))}))),n.createElement("div",{className:"work-layout-section"},n.createElement(J.a,{id:"work-layout-technologies",header:n.createElement("h3",{id:"work-layout-technologies-header"},"Technologies Used"),bordered:!0,dataSource:l,renderItem:function(e){return n.createElement(J.a.Item,null,e)}}),n.createElement("div",{id:"work-layout-challenges-solutions"},t))),n.createElement(Q,null,"Footer"))}),Z=function(e){var t=n.useMemo(function(){var e=x.findIndex(function(e){return e.cardProps.link===m.project.csrg.base});return x[e]},[]);return n.createElement(X,t)},$=function(e){var t=n.useMemo(function(){var e=x.findIndex(function(e){return e.cardProps.link===m.project.userManagement.base});return x[e]},[]);return n.createElement(X,t)},ee=function(e){var t=n.useMemo(function(){var e=x.findIndex(function(e){return e.cardProps.link===m.project.bwc.base});return x[e]},[]);return n.createElement(X,t)},te=function(e){return n.createElement(s.c,null,n.createElement(s.a,{exact:!0,path:m.project.bwc.base,component:ee}),n.createElement(s.a,{exact:!0,path:m.project.userManagement.base,component:$}),n.createElement(s.a,{exact:!0,path:m.project.csrg.base,component:Z}),n.createElement(s.a,{exact:!0,path:m.project.homebrewery.base,component:q}),n.createElement(s.a,{exact:!0,path:m.project.alloy.base,component:_}),n.createElement(s.a,{exact:!0,path:m.contact.base,component:F}),n.createElement(s.a,{exact:!0,path:m.home.base,component:C}),n.createElement(s.a,{component:L}))},ae=function(e){return n.createElement(n.Fragment,null,n.createElement(te,null))},ne=function(e){return n.createElement("div",null,"DndTools")};a(221);l.a.render(r.a.createElement(function(e){return n.createElement(c.a,null,n.createElement(s.c,null,n.createElement(s.a,{path:u.root,component:ne}),n.createElement(s.a,{path:m.root,component:ae})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[126,1,2]]]);
//# sourceMappingURL=main.539610dc.chunk.js.map