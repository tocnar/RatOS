"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9028],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2857:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var n=t(3117),o=(t(7294),t(3905));const a={sidebar_position:10,sidebar_label:"Manual Firmware Compilation"},i="Manual klipper firmware compilation",l={unversionedId:"manual-firmware-compilation",id:"version-1.2.x/manual-firmware-compilation",title:"Manual klipper firmware compilation",description:"RatOS automatically compiles firmware for your board when klipper is updated. You shouldn't have to do this unless something is broken.",source:"@site/versioned_docs/version-1.2.x/manual-firmware-compilation.md",sourceDirName:".",slug:"/manual-firmware-compilation",permalink:"/docs/1.2.x/manual-firmware-compilation",draft:!1,editUrl:"https://github.com/Rat-OS/RatOS/edit/v2.x/site/versioned_docs/version-1.2.x/manual-firmware-compilation.md",tags:[],version:"1.2.x",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"Manual Firmware Compilation"},sidebar:"docsSidebar",previous:{title:"Troubleshooting",permalink:"/docs/1.2.x/troubleshooting"},next:{title:"Octopus v1.1 F407",permalink:"/docs/1.2.x/boards/btt/octopus-11-407"}},p={},s=[{value:"SSH into the Raspberry Pi",id:"ssh-into-the-raspberry-pi",level:2},{value:"Download the firmware from the Pi",id:"download-the-firmware-from-the-pi",level:2}],c={toc:s};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manual-klipper-firmware-compilation"},"Manual klipper firmware compilation"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"RatOS automatically compiles firmware for your board when klipper is updated. You shouldn't have to do this unless something is broken.")),(0,o.kt)("p",null,"If you need to compile the firmware for your board yourself, here's how you do it."),(0,o.kt)("h2",{id:"ssh-into-the-raspberry-pi"},"SSH into the Raspberry Pi"),(0,o.kt)("p",null,"You're need to log into the Pi via SSH. The default username is ",(0,o.kt)("inlineCode",{parentName:"p"},"pi")," and the password is ",(0,o.kt)("inlineCode",{parentName:"p"},"raspberry")," (sidenote: it's a good idea to change this via ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo raspi-config"),"). If you're on linux or Mac OS, you can do this by opening a terminal and type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh pi@ratos.local\n")),(0,o.kt)("p",null,"Now navigate to the klipper directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/klipper\n")),(0,o.kt)("p",null,"The configuration klipper needs to compile the firmware for your board is stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/klipper_config/config/boards/[BOARD_NAME]/firmware.config"),". To list the board names execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ls -la ~/klipper_config/config/boards\n")),(0,o.kt)("p",null,"Let's say we need to compile the firmware for the octopus. We then need to copy the configuration file from ",(0,o.kt)("inlineCode",{parentName:"p"},"~/klipper_config/config/boards/btt-octopus-11/firmware.config")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp -f ~/klipper_config/config/boards/btt-octopus-11/firmware.config ~/klipper/.config\n")),(0,o.kt)("p",null,"Now we're ready to compile the firmware!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make olddefconfig\nmake clean\nmake\n")),(0,o.kt)("h2",{id:"download-the-firmware-from-the-pi"},"Download the firmware from the Pi"),(0,o.kt)("p",null,"Now klipper has compiled it's firmware to ",(0,o.kt)("inlineCode",{parentName:"p"},"~/klipper/out/klipper.bin"),". We can download that to our machine via ",(0,o.kt)("inlineCode",{parentName:"p"},"scp")," or ",(0,o.kt)("a",{parentName:"p",href:"https://winscp.net/eng/download.php"},"WinSCP")," (for windows users)."),(0,o.kt)("p",null,"Linux and Mac OS users can use scp from their local machines like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scp pi@ratos.local:klipper/out/klipper.bin firmware.bin\n")))}u.isMDXComponent=!0}}]);