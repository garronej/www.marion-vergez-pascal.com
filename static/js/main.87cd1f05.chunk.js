(this["webpackJsonpwww.marion-vergez-pascal.com"]=this["webpackJsonpwww.marion-vergez-pascal.com"]||[]).push([[0],{522:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),s=i(227),r=i.n(s),o=i(3),c=i(67),l=i(228),u={home:Object(c.b)("/"),biography:Object(c.b)("/biographie"),media:Object(c.b)("/media"),futureEvents:Object(c.b)("/futures-dates"),legal:Object(c.b)("/mentions-legal")};Object(l.makeThisModuleAnExecutableRouteLister)(u);var d=Object(c.a)(u),m=d.RouteProvider,p=d.routes,b=d.useRoute,g=i(20),h=i(148),j=i(231),f=Object(g.createThemeProvider)({getTypographyDesc:function(e){var t=e.windowInnerWidth,i=e.browserFontSizeFactor,a=e.windowInnerHeight,n=Object(g.defaultGetTypographyDesc)({windowInnerWidth:t,browserFontSizeFactor:i,windowInnerHeight:a});return{fontFamily:'"Open Sans", sans-serif',rootFontSizePx:n.rootFontSizePx,variants:Object(o.a)(Object(o.a)({},n.variants),{},{subtitle:Object(o.a)(Object(o.a)({},n.variants["display heading"]),{},{fontFamily:"'Playfair Display', serif",fontWeight:100}),"my title":{htmlComponent:"h1",fontWeight:"bold",fontSizeRem:2,lineHeightRem:2,fontFamily:"'Cinzel Decorative', cursive"},"section heading":Object(o.a)(Object(o.a)({},n.variants["display heading"]),{},{fontFamily:"'Playfair Display', serif",fontWeight:100,fontSizeRem:2,lineHeightRem:2.5})})}},palette:Object(o.a)(Object(o.a)({},g.defaultPalette),{},{gold:"#e1bf59"})}),v=f.ThemeProvider,O=f.useTheme;function x(){var e=O();return Object(o.a)(Object(o.a)({},e),{},{paddingRightLeft:e.spacing(e.windowInnerWidth>=g.breakpointsValues.lg?7:e.windowInnerWidth>=g.breakpointsValues.sm?6:4),customBackgroundColor:e.isDarkModeEnabled?"linear-gradient(270deg, rgba(36,41,52,1) 0%, rgba(19,22,29,1) 68%)":"linear-gradient(270deg, rgba(240,240,244,1) 0%, rgba(221,219,219,1) 100%)",transparentBackground:function(t){var i=t.direction;return e.isDarkModeEnabled?"linear-gradient(".concat(i,", rgba(44,50,63,0.9), rgba(44,50,63, 1))"):"linear-gradient(".concat(i,", rgba(241,240,235,0.7), rgba(241,240,235,1))")}})}var w,y=Object(j.createMakeStyles)({useTheme:x}).makeStyles,k=Object(h.createText)({useTheme:x}).Text,I=g.breakpointsValues,N=i.p+"static/media/hero.c54060ac.jpeg",C=i(545),S=i(16),W=Object(S.id)(C.a),q={fr:{title:"Titre de l'actualit\xe9",paragraph:"\n\t\t\tLorem ipsum dolor sit amet, \n\t\t\tconsectetur adipiscing elit. Morbi non tristique libero. \n\t\t\tCurabitur lobortis viverra augue, in volutpat neque mattis a. \n\t\t\tPraesent quis erat aliquam nulla vestibulum \n\t\t\ttempus eget nec velit. Nulla facilisi. \n\t\t\tIn hac habitasse platea dictumst.\n\t\t"},en:{title:"Titre de l'actualit\xe9",paragraph:"\n\t\t\tLorem ipsum dolor sit amet, \n\t\t\tconsectetur adipiscing elit. Morbi non tristique libero. \n\t\t\tCurabitur lobortis viverra augue, in volutpat neque mattis a. \n\t\t\tPraesent quis erat aliquam nulla vestibulum \n\t\t\ttempus eget nec velit. Nulla facilisi. \n\t\t\tIn hac habitasse platea dictumst.\n\t\t"},imageUrl:i.p+"static/media/news.24ddba06.jpeg"},P=i(63),L=i.p+"static/media/decoration.d853bbbd.mp4",D=i(1),T=Object(a.memo)((function(e){var t=e.width,i=e.height,a=e.color,n=B({width:t,height:i,color:a}).classes;return Object(D.jsx)("div",{className:n.root})})),B=y()((function(e,t){var i=t.width,a=t.height,n=t.color;return{root:{width:e.spacing(i),height:a,backgroundColor:null!==n&&void 0!==n?n:e.colors.useCases.typography.textSecondary}}})),A=i(246),E=i(203),R=Object(a.memo)((function(e){var t=e.className,i=Object(A.a)(e,["className"]),a=M(),n=a.classes,s=a.cx;return Object(D.jsx)(E.a,Object(o.a)({className:s(n.root,t),variant:"outlined",color:"secondary"},i))})),M=y()((function(e){return{root:Object(o.a)({borderRadius:"unset"},e.spacing.rightLeft("padding","".concat(e.spacing(6),"px")))}})),z=Object(a.memo)((function(e){var t=e.button,i=e.heading,a=e.imageUrl,n=e.paragraph,s=e.title,r=e.className,o=e.imagePosition,c=e.classes,l=e.customButton,u=F({imagePosition:null!==o&&void 0!==o?o:"left"}),d=u.classes,m=u.cx;return Object(D.jsxs)("section",{className:m(d.root,r),children:[void 0!==i&&Object(D.jsxs)("div",{className:d.headerWrapper,children:[Object(D.jsx)(k,{className:m(d.heading,null===c||void 0===c?void 0:c.heading),typo:"subtitle",children:i}),Object(D.jsx)(T,{width:9,height:1})]}),Object(D.jsxs)("div",{className:m(d.textAndImageWrapper,null===c||void 0===c?void 0:c.textAndImageWrapper),children:[Object(D.jsx)(P.GlIllustration,{type:"image",url:a,hasShadow:!0,className:m(d.image,null===c||void 0===c?void 0:c.image)}),Object(D.jsxs)("div",{className:m(d.text,null===c||void 0===c?void 0:c.text),children:[Object(D.jsx)(k,{className:null===c||void 0===c?void 0:c.title,typo:"section heading",children:s}),Object(D.jsx)(T,{color:"#e1bf59",width:6,height:2}),Object(D.jsx)(k,{className:m(d.paragraph,null===c||void 0===c?void 0:c.paragraph),typo:"body 1",children:n}),void 0!==t&&Object(D.jsx)("div",{children:Object(D.jsx)(R,{className:null===c||void 0===c?void 0:c.button,color:"secondary",variant:"outlined",href:t.href,onClick:t.onClick,classes:{},children:t.label})}),void 0!==l&&l]})]})]})})),F=y()((function(e,t){var i=t.imagePosition;return{root:Object(o.a)({display:"flex",flexDirection:"column",gap:e.spacing(8),alignItems:"center"},e.spacing.topBottom("padding","".concat(e.spacing(8),"px"))),heading:{fontWeight:100,marginBottom:e.spacing(5)},headerWrapper:{display:"flex",flexDirection:"column",alignItems:"center"},textAndImageWrapper:Object(o.a)({display:"flex",gap:e.spacing(8),justifyContent:"center",alignItems:"center"},e.windowInnerWidth<I.md?{flexDirection:"column-reverse"}:{flexDirection:function(){switch(i){case"left":return;case"right":return"row-reverse"}}()}),image:Object(o.a)({maxWidth:600},e.windowInnerWidth>=I.md?{minWidth:400}:{maxWidth:"unset",minWidth:"unset"}),text:{maxWidth:500,display:"flex",flexDirection:"column",gap:e.spacing(4)},paragraph:{color:e.colors.useCases.typography.textSecondary}}})),U=i.p+"static/media/contact.0a4251e9.jpeg",H=i.p+"static/media/marion-nabil.10d24b33.jpeg",V=i(225),G=Object(a.memo)((function(e){var t=e.imageUrl,i=e.isImageCovered,a=e.className,n=e.classes,s=e.fadeDirection,r=Q({backgroundImageUrl:t,fadeDirection:null!==s&&void 0!==s?s:"to left"}),o=r.classes,c=r.cx;return Object(D.jsxs)("div",{className:c(o.root,a),children:[void 0!==t&&Object(D.jsx)("div",{className:c(o.background,o.imageBackground,null===n||void 0===n?void 0:n.imageBackground)}),void 0!==i&&i&&Object(D.jsx)("div",{className:c(o.background,o.backgroundCover,null===n||void 0===n?void 0:n.imageCover)})]})})),Q=y()((function(e,t){var i=t.backgroundImageUrl,a=t.fadeDirection;return{root:{width:e.windowInnerWidth,height:"100%",position:"absolute",top:0,left:-e.paddingRightLeft},background:{width:"100%",height:"100%"},imageBackground:{backgroundImage:'url("'.concat(i,'")'),backgroundRepeat:"no-repeat",backgroundSize:"cover",zIndex:-1},backgroundCover:{position:"absolute",top:"0",left:"0",background:e.transparentBackground({direction:a}),zIndex:0}}})),Z=i.p+"static/media/marion-soliste.49145d52.jpeg",J=Object(a.memo)((function(){var e=X(),t=e.classes,i=e.cx,a=e.theme,n=W("Home").t;return Object(D.jsxs)("div",{className:t.root,children:[Object(D.jsx)("section",{className:t.hero,children:Object(D.jsxs)("div",{className:t.titleWrapper,children:[Object(D.jsx)(k,{className:t.title,typo:"my title",children:"Marion Vergez-Pascal"}),Object(D.jsx)(k,{className:t.subtitle,typo:"subtitle",children:"MEZZO-SOPRANO"})]})}),Object(D.jsx)(z,{classes:{image:t.sectionImage},heading:n("newsHeading"),title:n("newsTitle"),paragraph:n("newsParagraph"),imageUrl:q.imageUrl,button:Object(o.a)(Object(o.a)({},p.futureEvents().link),{},{label:n("newsButtonLabel")}),imagePosition:"right"}),Object(D.jsx)("div",{children:Object(D.jsx)(P.GlIllustration,{type:"image",url:L})}),Object(D.jsx)(z,{classes:{image:t.sectionImage},title:n("bioTitle"),paragraph:n("bioParagraph"),button:Object(o.a)(Object(o.a)({},p.biography().link),{},{label:n("bioButtonLabel")}),imageUrl:H}),Object(D.jsxs)("section",{className:t.mediaSection,children:[Object(D.jsx)(G,{isImageCovered:!0,imageUrl:Z,classes:{imageBackground:t.mediaImageBackground}}),Object(D.jsxs)("div",{className:t.mediaSectionInner,children:[Object(D.jsxs)("div",{className:t.mediaTitleWrapper,children:[Object(D.jsx)(k,{typo:"subtitle",children:"MEDIA"}),Object(D.jsx)(T,{width:8,color:a.colors.palette.gold,height:1})]}),Object(D.jsx)("iframe",{className:t.iframe,allowFullScreen:!0,src:"https://www.youtube-nocookie.com/embed/kIdTp7VaLV4",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}),Object(D.jsx)(R,Object(o.a)(Object(o.a)({},p.media().link),{},{variant:"outlined",color:"secondary",children:n("mediaButton")}))]})]}),Object(D.jsx)(z,{classes:{image:i(t.contactImage,t.sectionImage),paragraph:t.contactParagraph},imageUrl:U,title:n("contactTitle"),paragraph:n("contactParagraph"),imagePosition:"right",customButton:Object(D.jsxs)("div",{className:t.contactSocialMedia,children:[Object(D.jsx)(V.a,{className:t.instagramAndFacebookButtons,href:"https://www.facebook.com/marion.vergezpascal.9",underline:"none",children:"FACEBOOK \u2192"}),Object(D.jsx)(V.a,{className:t.instagramAndFacebookButtons,href:"https://www.instagram.com/marion_vergezpascal/",underline:"none",children:"INSTAGRAM \u2192"}),Object(D.jsx)(V.a,{underline:"none",href:"mailto:email@gmail.com",children:Object(D.jsx)(k,{className:t.email,typo:"body 1",children:"email@gmail.com"})})]})})]})})),X=y()((function(e){return{root:Object(o.a)({paddingTop:"0px !important"},e.spacing.rightLeft("padding","".concat(e.paddingRightLeft,"px"))),hero:Object(o.a)(Object(o.a)(Object(o.a)({height:"100vh",width:e.windowInnerWidth,background:'url("'.concat(N,'")'),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",position:"relative",left:-e.paddingRightLeft,display:"flex",alignItems:"center"},e.spacing.rightLeft("padding","".concat(e.paddingRightLeft,"px"))),e.windowInnerWidth<I.lg?{paddingBottom:e.spacing(4)}:{}),e.windowInnerWidth<I.sm?{alignItems:"flex-end"}:{}),title:Object(o.a)({fontWeight:100,color:"#F7BCF7"},e.windowInnerWidth>=I.lg?{fontSize:"3rem"}:{fontSize:"1.5rem"}),titleWrapper:{position:"relative",padding:e.spacing({rightLeft:"".concat(e.spacing(4),"px"),topBottom:"".concat(e.spacing(5),"px")})},subtitle:Object(o.a)({fontSize:"1.5rem",fontWeight:100,letterSpacing:e.spacing(2),textAlign:"right",color:"#F7BCF7"},e.windowInnerWidth<I.lg?{fontSize:"1rem"}:{}),sectionImage:Object(o.a)({},e.windowInnerWidth<I.md?{maxWidth:500}:{}),contactImage:{maxWidth:600},contactParagraph:{maxWidth:400},contactSocialMedia:{display:"flex",flexDirection:"column",alignItems:"end",gap:e.spacing(2),marginTop:e.spacing(4)},instagramAndFacebookButtons:{transition:"transform 500ms",color:e.colors.palette.gold,":hover":{transform:"translateX(".concat(e.spacing(2),"px)")}},email:{color:e.colors.useCases.typography.textSecondary,transition:"color 300ms",":hover":{color:e.colors.palette.gold}},mediaSection:{position:"relative"},mediaSectionInner:Object(o.a)({position:"relative",zIndex:1,display:"flex",flexDirection:"column",gap:e.spacing(8),alignItems:"center"},e.spacing.topBottom("padding","".concat(e.spacing(8),"px"))),mediaTitleWrapper:{display:"flex",flexDirection:"column",alignItems:"center",gap:e.spacing(4)},mediaImageBackground:{backgroundPosition:"right"},iframe:Object(o.a)({width:1e3,height:600},e.windowInnerWidth<I.lg&&e.windowInnerWidth>=I.md?{width:700,height:450}:e.windowInnerWidth<I.md?{width:"100%",height:300}:void 0)}})),_=i(240),K=i(7),Y=i(14),$=i(5),ee=i(243),te=i.n(ee),ie=i(59),ae=i(41),ne=i(151),se=y()((function(e,t){var i=t.headerHeight,a=t.isMenuUnfolded,n=t.linksHeight;return{root:Object(o.a)({},e.spacing.rightLeft("padding","".concat(e.paddingRightLeft,"px"))),headerInner:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",justifyContent:"space-between",alignItems:"center",position:"relative"},unfoldIcon:Object(o.a)(Object(o.a)({display:"none",pointerEvents:"none"},e.windowInnerWidth<$.breakpointsValues.md?{display:"block",pointerEvents:"unset"}:{}),{},{margin:"auto"}),smallDeviceLinksWrapper:Object(o.a)({position:"absolute",backgroundColor:e.colors.useCases.surfaces.background,width:e.windowInnerWidth,left:-e.paddingRightLeft,top:i+e.spacing(3),opacity:0,height:0,overflow:"hidden",pointerEvents:"none",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"height 300ms, border-top-color 300ms"},e.windowInnerWidth<$.breakpointsValues.md?{borderTop:"solid 1px",borderTopColor:a?e.colors.useCases.typography.textSecondary:e.colors.useCases.surfaces.background,height:a?n:0,opacity:.94,pointerEvents:"unset"}:{}),smallDeviceLinksInnerWrapper:Object(o.a)({},e.spacing.topBottom("padding","".concat(e.spacing(6),"px"))),smallDeviceLinks:Object(o.a)({flexDirection:"column",display:"flex"},e.windowInnerWidth<$.breakpointsValues.md?{opacity:1,pointerEvents:"unset"}:{}),darkModeSwitch:{marginLeft:"auto"}}})),re=Object(a.memo)((function(e){var t=e.links,i=e.title,n=Object(a.useState)(!1),s=Object(Y.a)(n,2),r=s[0],o=s[1],c=Object(ie.useDomRect)(),l=c.domRect.height,u=c.ref,d=Object(ie.useDomRect)(),m=d.domRect.height,p=d.ref,b=se({headerHeight:l,isMenuUnfolded:r,linksHeight:m}).classes,g=Object(ae.useClickAway)((function(){r&&o(!1)})).rootRef,h=Object(ae.useConstCallback)((function(){o(!r)}));return Object(D.jsx)("header",{className:b.root,ref:u,children:Object(D.jsxs)("div",{ref:g,className:b.headerInner,children:[Object(D.jsx)("div",{children:i}),Object(D.jsxs)("div",{children:[Object(D.jsx)(oe,{links:t}),Object(D.jsx)("div",{onClick:h,children:Object(D.jsx)(te.a,{className:b.unfoldIcon})})]}),Object(D.jsx)("div",{className:b.smallDeviceLinksWrapper,children:Object(D.jsx)("div",{className:b.smallDeviceLinksInnerWrapper,ref:p,children:Object(D.jsx)(oe,{links:t,className:b.smallDeviceLinks})})}),Object(D.jsx)("div",{className:b.darkModeSwitch,children:Object(D.jsx)(ne.GlDarkModeSwitch,{})})]})})})),oe=function(){var e=y()((function(e){return{links:Object(o.a)({display:"flex",justifyContent:"center",flex:1},e.windowInnerWidth<$.breakpointsValues.md?{display:"none",pointerEvents:"none"}:{}),linkWrapper:{display:"flex",justifyContent:"center"}}}));return{Links:Object(a.memo)((function(t){var i=t.links,a=t.className,n=e(),s=n.classes,r=n.cx;return Object(D.jsx)("div",{className:r(s.links,a),children:i.map((function(e){var t=e.href,i=e.label,a=e.onClick;return Object(D.jsx)("div",{className:s.linkWrapper,children:Object(D.jsx)(ce,{href:t,label:i,onClick:a})},i)}))})}))}}().Links,ce=function(){var e=y()((function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var n=i[1],s={ref:n(),width:0,position:"relative",left:e.windowInnerWidth>=$.breakpointsValues.md?"-5%":"25%",top:e.spacing(1),height:1,backgroundColor:e.colors.useCases.typography.textPrimary,transition:"width 200ms"};return{root:Object(o.a)(Object(o.a)({display:"flex",flexDirection:"column",position:"relative"},e.spacing.rightLeft("margin","".concat(e.spacing(3),"px"))),{},Object(K.a)({"&: hover":{cursor:"pointer"}},"&:hover .".concat(s.ref),Object(o.a)({width:"110%"},e.windowInnerWidth<$.breakpointsValues.md?{width:"50%"}:{})),e.windowInnerWidth<$.breakpointsValues.md?Object(o.a)({},e.spacing.topBottom("margin","".concat(e.spacing(3),"px"))):{}),underline:s,text:Object(o.a)({},e.spacing.rightLeft("padding","".concat(e.spacing(2),"px")))}}));return{Link:Object(a.memo)((function(t){var i=t.href,a=t.label,n=t.onClick,s=e().classes;return Object(D.jsxs)("div",{onClick:null!==n&&void 0!==n?n:function(){return window.location.href=i},className:s.root,children:[Object(D.jsx)(k,{typo:"label 1",className:s.text,children:a}),Object(D.jsx)("div",{className:s.underline})]})}))}}().Link,le=i(73),ue=Object(a.memo)((function(e){var t=e.bottomDiv,i=e.links,a=e.socialMediaLinks,n=e.title,s=de().classes;return Object(D.jsxs)("footer",{className:s.root,children:[Object(D.jsxs)("div",{className:s.upperDivWrapper,children:[Object(D.jsx)("div",{className:s.title,children:n}),Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{className:s.links,children:void 0!==i&&i.map((function(e){var t=e.href,i=e.label,a=e.onClick;return Object(D.jsx)(V.a,{onClick:a,href:t,className:s.muiLink,children:i},i)}))}),Object(D.jsx)("div",{className:s.socialLinks,children:void 0!==a&&a.map((function(e){var t=e.onClick,i=e.href,a=e.iconUrl;return Object(D.jsx)("div",{className:s.socialLink,onClick:null!==t&&void 0!==t?t:function(){return window.location.href=i},children:Object(D.jsx)(le.GlLogo,{width:20,logoUrl:a})},i)}))})]})]}),Object(D.jsx)("div",{className:s.bottomDiv,children:t})]})})),de=y()((function(e){return{root:{background:e.customBackgroundColor},title:Object(o.a)({},e.windowInnerWidth<I.md?{marginBottom:e.spacing(7)}:{}),links:Object(o.a)({display:"flex",flexDirection:"column",position:"relative"},e.windowInnerWidth>=I.md?{left:-e.spacing(9)}:{}),muiLink:Object(o.a)(Object(o.a)({color:e.colors.useCases.typography.textSecondary,textDecoration:"none"},e.spacing.topBottom("margin","".concat(e.spacing(2),"px"))),{},{transition:"transform 400ms",":hover":{transform:"translateX(".concat(e.spacing(2),"px)")}}),socialLinks:Object(o.a)({display:"flex",position:"relative",marginTop:e.spacing(6),gap:e.spacing(4)},e.windowInnerWidth>=I.md?{left:-e.spacing(9)}:{}),socialLink:{cursor:"pointer","& svg":{":hover":{fill:"lightblue"},transition:"fill 400ms"}},upperDivWrapper:Object(o.a)({padding:e.spacing({rightLeft:"".concat(e.spacing(11),"px"),topBottom:"".concat(e.spacing(7),"px")}),display:"flex",justifyContent:"space-between"},e.windowInnerWidth<I.md?Object(o.a)(Object(o.a)({flexDirection:"column"},e.spacing.rightLeft("padding","".concat(e.spacing(5),"px"))),{},{alignItems:"center"}):{}),bottomDiv:Object(o.a)({backgroundColor:e.colors.useCases.surfaces.background},e.windowInnerWidth>=I.md?Object(o.a)({},e.spacing.rightLeft("padding","".concat(e.spacing(11),"px"))):{})}})),me=i.p+"static/media/instagram.3091acf9.svg",pe=i.p+"static/media/facebook.d1accecb.svg",be=Object(a.memo)((function(){var e=W("App").t,t=W("AppFooter").t,i=Object(a.useMemo)((function(){return[Object(o.a)(Object(o.a)({},p.home().link),{},{label:e("home")}),Object(o.a)(Object(o.a)({},p.home().link),{},{label:e("biography")}),Object(o.a)(Object(o.a)({},p.home().link),{},{label:e("futureEvents")}),Object(o.a)(Object(o.a)({},p.home().link),{},{label:e("media")})]}),[e]),n=Object(a.useMemo)((function(){return[{href:"https://www.instagram.com/marion_vergezpascal/",iconUrl:me},{href:"https://www.facebook.com/marion.vergezpascal.9",iconUrl:pe}]}),[]),s=ge(),r=s.classes,c=s.cx;return Object(D.jsx)(ue,{socialMediaLinks:n,links:i,title:Object(D.jsxs)("div",{children:[Object(D.jsx)(k,{className:r.title,typo:"my title",children:"Marion Vergez-Pascal"}),Object(D.jsx)(k,{className:r.subtitle,typo:"subtitle",children:"MEZZO-SOPRANO"})]}),bottomDiv:Object(D.jsxs)("div",{className:r.bottomDiv,children:[Object(D.jsx)(V.a,Object(o.a)(Object(o.a)({className:r.legal},p.legal().link),{},{children:Object(D.jsx)(k,{className:c(r.legalText,r.bottomDivElement),typo:"label 2",children:t("legal")})})),Object(D.jsx)(k,{className:r.bottomDivElement,typo:"label 2",children:t("copyRight")}),Object(D.jsx)(k,{className:r.bottomDivElement,typo:"label 2",children:t("author")})]})})})),ge=y()((function(e){return{bottomDiv:Object(o.a)(Object(o.a)({display:"flex"},e.spacing.topBottom("padding","".concat(e.spacing(2),"px"))),{},{justifyContent:"space-between"},e.windowInnerWidth<I.md?{flexDirection:"column",alignItems:"center"}:{}),bottomDivElement:Object(o.a)({color:e.colors.useCases.typography.textSecondary},e.spacing.topBottom("margin","".concat(e.spacing(2),"px"))),legal:{textDecoration:"none"},legalText:{transition:"color 500ms",":hover":{color:e.colors.useCases.typography.textPrimary}},subtitle:Object(o.a)({fontSize:"1.4rem",fontWeight:100,letterSpacing:e.spacing(2),color:e.colors.useCases.typography.textSecondary,textAlign:"right"},e.windowInnerWidth<I.md?{fontSize:"1rem"}:{}),title:Object(o.a)({},e.windowInnerWidth<I.md?{fontSize:"1.4rem"}:{})}})),he=i.p+"static/media/bio-banner.ca910f90.jpeg",je=i.p+"static/media/bio-portrait.6d4f1277.jpeg",fe=Object(a.memo)((function(){var e=W("Biography").t,t=ve(),i=t.classes,a=t.theme;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("section",{className:i.banner,children:[Object(D.jsx)(G,{className:i.bannerBackground,imageUrl:he,isImageCovered:!0,fadeDirection:"to bottom"}),Object(D.jsxs)("div",{className:i.titleWrapper,children:[Object(D.jsx)(k,{className:i.title,typo:"caption",children:e("bioTitle")}),Object(D.jsx)(T,{height:2,width:6,color:a.colors.palette.gold}),Object(D.jsx)(k,{className:i.subTitle,typo:"section heading",children:e("bioSubtitle")})]})]}),Object(D.jsxs)("section",{className:i.mainSection,children:[Object(D.jsx)(P.GlIllustration,{hasShadow:!0,className:i.illustration,url:je,type:"image"}),Object(D.jsxs)(k,{className:i.text,typo:"body 1",children:[Object(D.jsx)("span",{className:i.textFirstLetter,children:e("textFirstLetter")}),e("bioText")]})]})]})})),ve=y()((function(e){return{root:{},banner:{height:"100vh",position:"relative",display:"flex",alignItems:"flex-end",justifyContent:"center"},bannerBackground:{left:0},titleWrapper:{display:"flex",flexDirection:"column",alignItems:"center",zIndex:1,position:"relative",marginTop:"30%",marginBottom:e.spacing(8),gap:e.spacing(5)},title:{color:e.colors.useCases.typography.textSecondary},subTitle:Object(o.a)({fontSize:"3.5rem"},e.windowInnerWidth<I.sm?{fontSize:"2.5rem"}:{}),mainSection:Object(o.a)(Object(o.a)({},e.windowInnerWidth>=I.md?Object(o.a)({},e.spacing.rightLeft("padding","".concat(e.spacing(12),"px"))):{}),{},{paddingBottom:e.spacing(8),display:"flex",gap:e.spacing(7),justifyContent:"center"},e.windowInnerWidth<I.lg?{flexDirection:"column",alignItems:"center"}:{}),illustration:Object(o.a)({maxWidth:600,minWidth:400},e.windowInnerWidth<I.lg?{minWidth:"unset"}:{}),text:Object(o.a)({color:e.colors.useCases.typography.textSecondary,textAlign:"justify",maxWidth:500,minWidth:400},e.windowInnerWidth<I.lg?{maxWidth:600,minWidth:"unset"}:{}),textFirstLetter:Object(o.a)({color:e.colors.useCases.typography.textPrimary,fontSize:"7rem",float:"left",lineHeight:"5rem",marginRight:e.spacing(3)},e.windowInnerWidth<I.xl?{lineHeight:"6.1rem"}:{})}})),Oe=Object(a.memo)((function(){var e=b(),t=W("App").t,i=Object(a.useMemo)((function(){return[Object(o.a)(Object(o.a)({},p.home().link),{},{label:t("home")}),Object(o.a)(Object(o.a)({},p.biography().link),{},{label:t("biography")}),Object(o.a)(Object(o.a)({},p.futureEvents().link),{},{label:t("futureEvents")}),Object(o.a)(Object(o.a)({},p.media().link),{},{label:t("media")})]}),[t]);return Object(D.jsxs)(_.GlTemplate,{ThemeProvider:v,footer:Object(D.jsx)(be,{}),header:Object(D.jsx)(re,{links:i}),headerOptions:{position:"fixed",isRetracted:"smart"},children:["home"===e.name&&Object(D.jsx)(J,{}),"biography"===e.name&&Object(D.jsx)(fe,{}),"futureEvents"===e.name&&Object(D.jsx)("p",{children:e.name}),"media"===e.name&&Object(D.jsx)("p",{children:e.name})]})})),xe=i(78),we=i(66),ye=i(92),ke=i(93),Ie=(w={},Object(K.a)(w,Object(ye.symToStr)({Home:J}),Object(ke.Reflect)()),Object(K.a)(w,Object(ye.symToStr)({App:Oe}),Object(ke.Reflect)()),Object(K.a)(w,Object(ye.symToStr)({AppFooter:be}),Object(ke.Reflect)()),Object(K.a)(w,Object(ye.symToStr)({Biography:fe}),Object(ke.Reflect)()),Object(S.id)({en:{Home:{newsParagraph:q.en.paragraph,newsTitle:q.en.title,newsHeading:"ACTUALITES",newsButtonLabel:"Voir Plus",bioTitle:"Qui suis-je ?",bioParagraph:"\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n                Morbi non tristique libero. Curabitur lobortis viverra augue, \n                in volutpat neque mattis a. Praesent quis erat aliquam nulla \n                vestibulum tempus eget nec velit. Nulla facilisi. \n                In hac habitasse platea dictumst. Donec hendrerit aliquam nulla, \n                nec gravida nunc semper non. Aenean aliquet tortor nec felis varius, \n                semper ornare nunc ullamcorper. Aenean vel nulla nec \n                dolor pharetra congue vitae quis dui.\n            ",bioButtonLabel:"Biographie",contactHeading:"CONTACT",contactTitle:"Gardons Contact",contactParagraph:"\n                N'h\xe9sitez pas \xe0 m'\xe9crire, j'ai h\xe2te de vous lire ! \n                Soyez aussi les premiers inform\xe9s de mon actualit\xe9 en me \n                suivant sur les r\xe9seaux sociaux.\n            ",mediaButton:"Voir Plus"},App:{biography:"BIOGRAPHIE",futureEvents:"CONCERTS",home:"ACCUEIL",media:"MEDIA"},AppFooter:{author:"Con\xe7u et d\xe9velopp\xe9 par StarkerDesign.",copyRight:"Copyright \xa9 2021 Quatuor Confluence. Tous droits r\xe9serv\xe9s",legal:"Mentions L\xe9gals"},Biography:{bioTitle:"BIOGRAPHIE",bioSubtitle:"MON HISTOIRE",bioText:"\n                orem hac habitasse platea dictumst. Donec vulputate vestibulum iaculis. Cras consequat lobortis enim nec efficitur. Sed volutpat enim id lacus tincidunt, eu dictum neque porttitor. Mauris cursus ligula efficitur eros egestas pharetra. Vestibulum augue dolor, pellentesque at cursus vitae, volutpat et tellus. Ut vel augue id orci interdum commodo. Morbi pharetra iaculis leo ac pellentesque. Pellentesque tincidunt semper efficitur. Quisque venenatis lectus dui, sit amet egestas purus pellentesque sed. Duis id congue erat. Etiam hendrerit mi turpis, id luctus lacus tempor venenatis. Proin imperdiet faucibus tellus. Nam finibus nibh non tincidunt rutrum. Donec pharetra ante erat, sed congue libero molestie vel. Sed eget urna et neque vulputate sollicitudin.\n                Nam ultricies mauris nec pellentesque dapibus. Ut id magna consectetur, vestibulum est et, scelerisque sem. Ut nec risus at diam semper bibendum. Sed aliquet erat ligula, et blandit ipsum dictum sit amet. Praesent a massa id leo condimentum viverra. In placerat ex sit amet ipsum dapibus feugiat. Maecenas vitae mauris aliquet, lacinia urna nec, finibus arcu. Nam euismod suscipit purus, et dignissim eros. Fusce bibendum, urna at suscipit euismod, ligula magna lobortis dolor, vitae venenatis felis ipsum in diam. Quisque hendrerit nec nulla non euismod. Proin faucibus mi quis malesuada congue. Praesent pulvinar aliquam molestie.\n                Curabitur a posuere erat, sit amet congue lorem. Proin quam tortor, aliquet id blandit ac, eleifend ut mi. Nam non enim interdum, porta dolor ut, mattis massa. Etiam tincidunt, ante vitae cursus scelerisque, lectus lectus commodo purus, ac aliquam dolor odio id nibh. Maecenas tempor urna nec nisi elementum, non blandit lacus eleifend. Proin egestas imperdiet mauris, at maximus diam bibendum in. Proin lectus lectus, scelerisque vitae sodales tempor, laoreet sit amet felis. Phasellus eget venenatis odio, eget pretium magna.\n                Proin posuere, nulla id tincidunt congue, purus enim faucibus metus, in cursus lectus metus id lectus. Nunc at luctus elit, pulvinar cursus lorem. Pellentesque a finibus tortor. Nulla erat purus, maximus et mattis et, sagittis in lectus. In tincidunt purus vel velit congue, vel lacinia turpis dictum. Donec posuere eros magna, nec pharetra orci ullamcorper non. Nam dignissim in nunc bibendum dignissim. Aenean auctor, lacus nec pretium malesuada, elit mi dapibus risus, sed tristique nulla purus nec purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse a mi egestas sapien condimentum molestie suscipit eget urna. Praesent lacus erat, aliquam rutrum pellentesque eget, vestibulum at mauris. Curabitur consequat mi ut arcu lobortis ornare a vel massa. Sed blandit posuere dolor vitae laoreet. Nullam consequat vitae libero vel vehicula.\n            ",textFirstLetter:"L"}},fr:{Home:{newsParagraph:q.fr.paragraph,newsTitle:q.fr.title,newsHeading:"ACTUALITES",newsButtonLabel:"Voir Plus",bioTitle:"Qui suis-je ?",bioParagraph:"\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n                Morbi non tristique libero. Curabitur lobortis viverra augue, \n                in volutpat neque mattis a. Praesent quis erat aliquam nulla \n                vestibulum tempus eget nec velit. Nulla facilisi. \n                In hac habitasse platea dictumst. Donec hendrerit aliquam nulla, \n                nec gravida nunc semper non. Aenean aliquet tortor nec felis varius, \n                semper ornare nunc ullamcorper. Aenean vel nulla nec \n                dolor pharetra congue vitae quis dui.\n            ",bioButtonLabel:"Biographie",contactHeading:"CONTACT",contactTitle:"Gardons Contact",contactParagraph:"\n                N'h\xe9sitez pas \xe0 m'\xe9crire, j'ai h\xe2te de vous lire ! \n                Soyez aussi les premiers inform\xe9s de mon actualit\xe9 en me \n                suivant sur les r\xe9seaux sociaux.\n            ",mediaButton:"Voir Plus"},App:{biography:"BIOGRAPHIE",futureEvents:"CONCERTS",home:"ACCUEIL",media:"MEDIA"},AppFooter:{author:"Con\xe7u et d\xe9velopp\xe9 par StarkerDesign.",copyRight:"Copyright \xa9 2021 Quatuor Confluence. Tous droits r\xe9serv\xe9s",legal:"Mentions L\xe9gals"},Biography:{bioTitle:"BIOGRAPHIE",bioSubtitle:"MON HISTOIRE",bioText:"\n                orem hac habitasse platea dictumst. Donec vulputate vestibulum iaculis. Cras consequat lobortis enim nec efficitur. Sed volutpat enim id lacus tincidunt, eu dictum neque porttitor. Mauris cursus ligula efficitur eros egestas pharetra. Vestibulum augue dolor, pellentesque at cursus vitae, volutpat et tellus. Ut vel augue id orci interdum commodo. Morbi pharetra iaculis leo ac pellentesque. Pellentesque tincidunt semper efficitur. Quisque venenatis lectus dui, sit amet egestas purus pellentesque sed. Duis id congue erat. Etiam hendrerit mi turpis, id luctus lacus tempor venenatis. Proin imperdiet faucibus tellus. Nam finibus nibh non tincidunt rutrum. Donec pharetra ante erat, sed congue libero molestie vel. Sed eget urna et neque vulputate sollicitudin.\n                Nam ultricies mauris nec pellentesque dapibus. Ut id magna consectetur, vestibulum est et, scelerisque sem. Ut nec risus at diam semper bibendum. Sed aliquet erat ligula, et blandit ipsum dictum sit amet. Praesent a massa id leo condimentum viverra. In placerat ex sit amet ipsum dapibus feugiat. Maecenas vitae mauris aliquet, lacinia urna nec, finibus arcu. Nam euismod suscipit purus, et dignissim eros. Fusce bibendum, urna at suscipit euismod, ligula magna lobortis dolor, vitae venenatis felis ipsum in diam. Quisque hendrerit nec nulla non euismod. Proin faucibus mi quis malesuada congue. Praesent pulvinar aliquam molestie.\n                Curabitur a posuere erat, sit amet congue lorem. Proin quam tortor, aliquet id blandit ac, eleifend ut mi. Nam non enim interdum, porta dolor ut, mattis massa. Etiam tincidunt, ante vitae cursus scelerisque, lectus lectus commodo purus, ac aliquam dolor odio id nibh. Maecenas tempor urna nec nisi elementum, non blandit lacus eleifend. Proin egestas imperdiet mauris, at maximus diam bibendum in. Proin lectus lectus, scelerisque vitae sodales tempor, laoreet sit amet felis. Phasellus eget venenatis odio, eget pretium magna.\n                Proin posuere, nulla id tincidunt congue, purus enim faucibus metus, in cursus lectus metus id lectus. Nunc at luctus elit, pulvinar cursus lorem. Pellentesque a finibus tortor. Nulla erat purus, maximus et mattis et, sagittis in lectus. In tincidunt purus vel velit congue, vel lacinia turpis dictum. Donec posuere eros magna, nec pharetra orci ullamcorper non. Nam dignissim in nunc bibendum dignissim. Aenean auctor, lacus nec pretium malesuada, elit mi dapibus risus, sed tristique nulla purus nec purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse a mi egestas sapien condimentum molestie suscipit eget urna. Praesent lacus erat, aliquam rutrum pellentesque eget, vestibulum at mauris. Curabitur consequat mi ut arcu lobortis ornare a vel massa. Sed blandit posuere dolor vitae laoreet. Nullam consequat vitae libero vel vehicula.\n            ",textFirstLetter:"L"}}})),Ne=i(544),Ce=i(27),Se=i(33),We=i(244),qe=i(245),Pe=i(51),Le=i.n(Pe)()((function(){return xe.a.use(qe.a).init({fallbackLng:Object(S.id)("fr"),resources:Object(S.id)({fr:{},en:{}})}),xe.a.language.split("-")[0]})),De=Object(ae.createUseGlobalState)("language",Le),Te=De.useLanguage;De.evtLanguage;function Be(e){var t=e.children,i=Te().language,n=Object(a.useState)((function(){return xe.a.use(we.e).init({fallbackLng:Object(S.id)("fr"),debug:!1,interpolation:{escapeValue:!1},resources:Ie}),{i18nInstance:xe.a.cloneInstance({lng:i})}})),s=Object(Y.a)(n,1)[0].i18nInstance;Object(We.useEffectOnValueChange)((function(){s.changeLanguage(i)}),[i]);var r=Object(a.useReducer)((function(e){return e+1}),0),o=Object(Y.a)(r,2)[1];return Object(Se.useEvt)((function(e){return Ce.Evt.from(e,s,"languagechange").attach((function(){return o()}))}),[s]),Object(D.jsx)(Ne.a,{i18n:s,children:t})}r.a.render(Object(D.jsx)(n.a.StrictMode,{children:Object(D.jsx)(m,{children:Object(D.jsx)(Be,{children:Object(D.jsx)(Oe,{})})})}),document.getElementById("root"))}},[[522,152,153]]]);
//# sourceMappingURL=main.87cd1f05.chunk.js.map