(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],[,,function(e,t,a){e.exports={Portfolio:"Projects_Portfolio__3tgAk",Project:"Projects_Project__3VkFS",ProjectContainer:"Projects_ProjectContainer__3ajfo",Thumbnail:"Projects_Thumbnail__3sMJs",Text:"Projects_Text__HVSPJ",TextContainer:"Projects_TextContainer__3g6vi",LanguageContainer:"Projects_LanguageContainer__3sMrF",LanguageList:"Projects_LanguageList__2re6Q"}},function(e,t,a){e.exports={Contact:"Contact_Contact__2CqGJ",ContactIcons:"Contact_ContactIcons__2ptuo",ContactInfo:"Contact_ContactInfo__3RaIR",Phone:"Contact_Phone__YusGM",Email:"Contact_Email__QCX05",Message:"Contact_Message__3plvu"}},function(e,t,a){e.exports={AboutMe:"About_AboutMe__1mXOH",Container:"About_Container__1tPbZ",Text:"About_Text__3JV-V",Myself:"About_Myself__1uqdf"}},function(e,t,a){e.exports={Home:"Home_Home__Hrybx",Container:"Home_Container__v5Syz"}},,,function(e,t,a){e.exports={NavBar:"NavBar_NavBar__-XYZQ"}},function(e,t,a){e.exports={Container:"PageHeader_Container__33Pan"}},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(7),o=a.n(i),c=(a(15),a(16),a(8)),r=a.n(c),l=a(0),d=function(){return Object(l.jsx)("div",{className:r.a.NavBar,children:Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"/#home",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"/#about",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"/#projects",children:"Projects"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"/#contact",children:"Contact"})})]})})})},j=a(4),h=a.n(j),b=a(9),m=a.n(b),u=function(e){return Object(l.jsxs)("div",{className:m.a.Container,children:[Object(l.jsx)("hr",{}),Object(l.jsx)("h1",{children:e.title})]})},p=a.p+"static/media/80.273a5198.png",x=a.p+"static/media/me.271e2f83.png",g=function(){return Object(l.jsxs)("div",{className:h.a.AboutMe,style:{backgroundImage:"url(".concat(p,")"),backgroundPosition:"center",backgroundSize:"cover"},id:"about",children:[Object(l.jsx)(u,{title:"About Me"}),Object(l.jsxs)("div",{className:h.a.Container,children:[Object(l.jsxs)("div",{className:h.a.Text,children:[Object(l.jsx)("h1",{children:"Welcome to my portfolio!"}),Object(l.jsx)("p",{children:" I am an undergraduate student of Simon Fraser University at Surrey, BC, presently working towards a degree in BSc. Computer Science - Software Systems since 2017."}),Object(l.jsx)("p",{children:"Programming is my passion. I love the pleasant feeling that comes from solving complex problems. Although I\u2019m currently a university student seeking co-op jobs, my career goal is to become a professional software developer. I am interested in building and designing websites as well."}),Object(l.jsx)("p",{style:{paddingBottom:"50px"},children:"Besides coding, I love to travel and hike to various locations. Wandering around beautiful streets or nature is the way I relieve the stress. I also love to build new relationships with different people by having conversations to get to know each other."})]}),Object(l.jsx)("img",{className:h.a.Myself,src:x,alt:"Myself"})]})]})},_=a(5),f=a.n(_),O=function(){return Object(l.jsx)("div",{className:f.a.Home,id:"home",children:Object(l.jsxs)("div",{className:f.a.Container,children:[Object(l.jsx)("h1",{className:f.a.Hello,children:"Hello, world!"}),Object(l.jsx)("h1",{style:{color:"#000000"},children:"I am Jiwon Jun, "}),Object(l.jsx)("h1",{children:"who love building software."})]})})},v=a(2),C=a.n(v),y=a.p+"static/media/gitlab.31b66045.png",w=a.p+"static/media/starseeker.46073334.png",P=a.p+"static/media/gpa_calc.6664b91c.png",N=a.p+"static/media/inspection.b0604f0b.png",A=a.p+"static/media/maze_game.ceb01cca.png",S=["Java"],I=["HTML","CSS","JavaScript","Java"],M=["Android Studio","Java","XML"],k=["Flask","React.js","Node.js"],z=["Android Studio","Java","XML"],T=function(e,t,a){return Object(l.jsxs)("div",{className:C.a.TextContainer,children:[Object(l.jsx)("p",{style:{color:"#9F149F",fontSize:"20px",marginRight:"10px"},children:e}),Object(l.jsx)("p",{children:t}),Object(l.jsx)("p",{children:(n=a,Object(l.jsx)("ul",{className:C.a.LanguageContainer,children:n.map((function(e){return Object(l.jsx)("li",{className:C.a.LanguageList,children:e},e)}))}))})]});var n},L=function(e,t){return Object(l.jsxs)("div",{className:C.a.ProjectContainer,children:[Object(l.jsx)("div",{className:C.a.Thumbnail,children:Object(l.jsx)("img",{src:e,alt:"thumbnail"})}),Object(l.jsx)("div",{className:C.a.Text,children:Object(l.jsx)("project_description",{children:t})})]})},H=function(){return Object(l.jsxs)("div",{className:C.a.Portfolio,id:"projects",children:[Object(l.jsx)(u,{title:"Projects"}),Object(l.jsxs)("div",{className:C.a.Project,children:[L(w,T("Star Seeker","A single-player puzzle game to find a certain number of randomly hidden stars in the cells on the game board. Using the hints about the number of stars remaining on the cell, the player attempts to find all the stars with the minimum number of scans. ",M)),L(y,T("GitLab Iteration Analyzer","A web application designed to estimate the team members\u2019 work during an iteration of a project by analyzing the GitLab contributions. Based on the number of code reviews and commits in the repository, the system computes the total score to summarize how frequently each member contributed to the project.",k)),L(N,T("Surrey Restaurant Inspector","An Android application that displays the health inspection results of the restaurants located in Surrey, BC. The system analyzes the inspection report by calling Surrey\u2019s Open Data API into an ordered list of restaurants.",z)),L(P,T("GPA Calculator","A web application for students of Simon Fraser University to help calculate their GPA and CGPA. ",I)),L(A,T("Maze Game","A command line game where the player becomes a mouse who wants to escape the maze while finding the certain number of cheeses and avoiding the blind cats. The overview of the maze is hidden until the player moves around the maze and reveals its adjacent cells.",S))]})]})},J=a(10),B=a(3),G=a.n(B),F=function(){return Object(l.jsxs)("div",{className:G.a.Contact,id:"contact",children:[Object(l.jsx)(u,{title:"Contact"}),Object(l.jsx)("div",{className:G.a.ContactIcons,children:Object(l.jsx)(J.a,{color:"white",size:"30px",style:{padding:"1%"},onClick:(e="https://github.com/berryomi?tab=repositories",function(){return window.open(e,"_blank")})})}),Object(l.jsxs)("div",{className:G.a.ContactInfo,children:[Object(l.jsx)("p",{className:G.a.Email,children:"jiwonj@sfu.ca"}),Object(l.jsx)("p",{className:G.a.Phone,children:"236)888-1136"})]}),Object(l.jsx)("p",{className:G.a.Message,children:"Please feel free to get in touch with me!"})]});var e},R=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsx)(O,{}),Object(l.jsx)(g,{}),Object(l.jsx)(H,{}),Object(l.jsx)(F,{})]})};o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(R,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.ce0c3259.chunk.js.map