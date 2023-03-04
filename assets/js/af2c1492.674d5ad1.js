"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[229],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,b=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(b,i(i({ref:t},c),{},{components:n})):o.createElement(b,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5968:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var o=n(3117),r=(n(7294),n(3905));const a={slug:"no-you-dont-want-to-use-can",title:"No, you don't want to use CAN",authors:["miklschmidt"],tags:["RatOS","CAN","USB","Klipper","Rant"]},i=void 0,s={permalink:"/blog/no-you-dont-want-to-use-can",editUrl:"https://github.com/Rat-OS/RatOS/edit/v2.x/site/blog/2022-11-08-no-you-dont-want-to-use-can.mdx",source:"@site/blog/2022-11-08-no-you-dont-want-to-use-can.mdx",title:"No, you don't want to use CAN",description:"No, you don't want to use CAN.",date:"2022-11-08T00:00:00.000Z",formattedDate:"November 8, 2022",tags:[{label:"RatOS",permalink:"/blog/tags/rat-os"},{label:"CAN",permalink:"/blog/tags/can"},{label:"USB",permalink:"/blog/tags/usb"},{label:"Klipper",permalink:"/blog/tags/klipper"},{label:"Rant",permalink:"/blog/tags/rant"}],readingTime:3.295,hasTruncateMarker:!1,authors:[{name:"Mikkel Schmidt",title:"Creator of RatOS",url:"https://github.com/miklschmidt",imageURL:"https://github.com/miklschmidt.png",key:"miklschmidt"}],frontMatter:{slug:"no-you-dont-want-to-use-can",title:"No, you don't want to use CAN",authors:["miklschmidt"],tags:["RatOS","CAN","USB","Klipper","Rant"]},nextItem:{title:"Moonraker is now safe to update",permalink:"/blog/moonraker-config-changes"}},l={authorsImageUrls:[void 0]},u=[{value:"No, you don&#39;t want to use CAN.",id:"no-you-dont-want-to-use-can",level:2},{value:"What is CAN bus?",id:"what-is-can-bus",level:2},{value:"What is USB?",id:"what-is-usb",level:2},{value:"Why CAN has no benefits over USB for 3d printers running klipper.",id:"why-can-has-no-benefits-over-usb-for-3d-printers-running-klipper",level:2},{value:"But Mikkel, USB cables are so fragile?",id:"but-mikkel-usb-cables-are-so-fragile",level:3},{value:"But Mikkel, USB cables are super susceptible to noise!",id:"but-mikkel-usb-cables-are-super-susceptible-to-noise",level:3},{value:"But what about redundancy?",id:"but-what-about-redundancy",level:3},{value:"But Mikkel, CAN is so much more reliable!",id:"but-mikkel-can-is-so-much-more-reliable",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"no-you-dont-want-to-use-can"},"No, you don't want to use CAN."),(0,r.kt)("p",null,"For some reason, the entire 3d printing community has convinced itself that it needs to use CAN bus connections for everything. I'm here to tell you why that's a waste of your time when running klipper."),(0,r.kt)("h2",{id:"what-is-can-bus"},"What is CAN bus?"),(0,r.kt)("p",null,"CAN bus is a multi-master protocol in which any device can initiate a message to any other on embedded systems where every device is known and there are no strangers. It can work over long distances and is less susceptible to noise than USB.\nCAN bus is also the opposite of plug and play, requiring configuration for each device and setup. It's also not very fast, and requires a lot of overhead to work. It was developed for use in vehicles, where redundancy is critical."),(0,r.kt)("p",null,"The strengths of CAN boil down to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Redundancy"),(0,r.kt)("li",{parentName:"ul"},"Noise tolerance"),(0,r.kt)("li",{parentName:"ul"},"Long distance"),(0,r.kt)("li",{parentName:"ul"},"4 wires (power and data).")),(0,r.kt)("h2",{id:"what-is-usb"},"What is USB?"),(0,r.kt)("p",null,"USB is a strict master/slave protocol, where unknown devices can be connected to a host which controls them. It was made so you grandmother can plug in a keyboard without knowing the intricacy of serial communications, device mapping and drivers. USB is fast, has ultra low latency but works best over short distances."),(0,r.kt)("p",null,"The strengths of USB boil down to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Plug and play"),(0,r.kt)("li",{parentName:"ul"},"Low latency"),(0,r.kt)("li",{parentName:"ul"},"High throughput"),(0,r.kt)("li",{parentName:"ul"},"Low overhead."),(0,r.kt)("li",{parentName:"ul"},"3 wires (usb cable and power)")),(0,r.kt)("h2",{id:"why-can-has-no-benefits-over-usb-for-3d-printers-running-klipper"},"Why CAN has no benefits over USB for 3d printers running klipper."),(0,r.kt)("p",null,"Klippy (the klipper brain that runs on your raspberry pi) is in charge of everything going on in your 3d printer. It's the master. Your control boards are slaves, they do what they're told by Klippy. Latency is critical for homing and nobody likes additional overhead.\nWe have 4 USB ports (and you can add more via hubs) on a standard raspberry pi, that means you can connect a virtually unlimited amount of boards to your printer."),(0,r.kt)("h3",{id:"but-mikkel-usb-cables-are-so-fragile"},"But Mikkel, USB cables are so fragile?"),(0,r.kt)("p",null,"No. Good modern USB cables are made to take years of abuse from teenagers plugging and unplugging their phone, dogs chewing on them, heck some of them can even be used to ",(0,r.kt)("a",{parentName:"p",href:"https://www.indiegogo.com/projects/zus-super-duty-charging-cable-lifetime-guarantee/"},"pull cars and lift weights"),". The bend radius that are tested are far tighter than what you'd ever use in a 3d printer. Durability is really not a concern, and even if your cable breaks, a new one is cheap and takes seconds to swap. Get a good braided USB cable and it will outlast the rest of your wiring."),(0,r.kt)("h3",{id:"but-mikkel-usb-cables-are-super-susceptible-to-noise"},"But Mikkel, USB cables are super susceptible to noise!"),(0,r.kt)("p",null,"Also no. If you use a modern 3.1 or better spec USB cable they come with heavy shielding and have no issues operating inside your 3d printer. You're not running 10 meters of cable here, even on a V-Core 500, you won't need much more than 1.5 meters. It's a non issue."),(0,r.kt)("h3",{id:"but-what-about-redundancy"},"But what about redundancy?"),(0,r.kt)("p",null,"CAN redundancy is wasted on klipper, your raspberry pi is the single point of failure anyway, so it literally doesn't matter if you connect a bunch of can devices together and then to the pi or you connect a bunch of devices via USB directly to the pi. If the pi dies, everything dies, CAN or no CAN."),(0,r.kt)("h3",{id:"but-mikkel-can-is-so-much-more-reliable"},"But Mikkel, CAN is so much more reliable!"),(0,r.kt)("p",null,"Is it? Your control board has run on USB for ever. It's been tested and proven to work. It works just as well for toolboards too."),(0,r.kt)("p",null,"None of the benefits CAN brings are relevant to 3d printing. You're wasting your time trying to get it to work, when you could just plug in a USB cable and be on your way."),(0,r.kt)("p",null,"CAN is slower, has higher latency, uses more system resources, requires more configuration and is more expensive to implement, and you benefit from none of it."),(0,r.kt)("p",null,"Stop worrying about CAN, and save yourself the headache!"))}d.isMDXComponent=!0}}]);