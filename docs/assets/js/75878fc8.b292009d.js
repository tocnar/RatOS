"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[990],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7867:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},p="Changelog",s={type:"mdx",permalink:"/changelog",source:"@site/src/pages/changelog.md"},u=[{value:"RatOS V1.0",id:"ratos-v10",children:[{value:"Updating from V-CoreOS-RC2",id:"updating-from-v-coreos-rc2",children:[],level:3},{value:"General",id:"general",children:[],level:3},{value:"Printers",id:"printers",children:[],level:3},{value:"Boards",id:"boards",children:[],level:3},{value:"Macros",id:"macros",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"changelog"},"Changelog"),(0,i.kt)("h2",{id:"ratos-v10"},"RatOS V1.0"),(0,i.kt)("h3",{id:"updating-from-v-coreos-rc2"},"Updating from V-CoreOS-RC2"),(0,i.kt)("p",null,"Updating to RatOS v1.0 requires you to flash the SD Card in your Raspberry Pi, as well as your control board following the usual steps found in the (has to be done manually via SD card transfer) ",(0,i.kt)("a",{parentName:"p",href:"docs/installation"},"Installation Section"),". That also means that any changes you've made to your Raspberry Pi setup will be lost unless you make a backup first. If you want to be absolutely sure you don't loose something, you can use a new SD card for RatOS v1.0. These are common things you'll probably want to backup:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"printer.cfg (you can download this from Fluidd)"),(0,i.kt)("li",{parentName:"ul"},".moonraker_database (located in /home/pi/.moonraker_database on your Raspberry Pi. Download this with SCP/WinSCP)"),(0,i.kt)("li",{parentName:"ul"},"Any custom setup you've done.")),(0,i.kt)("p",null,"If you're reuploading your printer.cfg from V-CoreOS-RC2 you'll need to add this to the bottom of printer.cfg (right above the ### USER OVERRIDES section):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},'### MACRO CONFIGURATION\n[gcode_macro RatOS]\n# Use relative extrusion mode\n# Set to False to use absolute extrusion mode\nvariable_relative_extrusion: True\n# Wait for extruder to reach 150 so an inductive probe (if present) is at a predictable temp.\n# Also allows the bed heat to spread a little, and softens any plastic that might be stuck to the nozzle.\n# Set to False to disable\nvariable_preheat_extruder: True\n# Calibrate the bed mesh in the START_PRINT macro.\n# Set to false to skip BED_MESH_CALIBRATE, it will still load the BED_MESH\n# with the name "ratos", be sure to save your bed_mesh profile with that name.\n# or override the _START_PRINT_BED_MESH macro to implement your own mesh handling logic.\nvariable_calibrate_bed_mesh: True\n# Print a prime line at the end of the START_PRINT macro\n# set to False to disable nozzle_priming.\nvariable_nozzle_priming: "primeline"\n# Park in the back when waiting for the extruder to heat up\n# set to "front" to park in the front, or "center" to park in the center.\nvariable_start_print_park_in: "back"\n# Height to park it when waiting for extruder to heat.\nvariable_start_print_park_z_height: 50\n# Skew profile to load before starting the print\n# uncomment this to use your calibrated skew correction profile.\n#variable_skew_profile: "my_skew_profile"\n# Park in the back after the print has ended or was cancelled.\n# set to "front" to park in the front, or "center" to park in the center.\nvariable_end_print_park_in: "back"\n# Park in the back when the print is paused.\n# set to "front" to park in the front, or "center" to park in the center.\nvariable_pause_print_park_in: "back"\n# Set the speed for travel moves in RatOS Macros in mm/s.\nvariable_macro_travel_speed: 150\n')),(0,i.kt)("h3",{id:"general"},"General"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Since the future of Fluidd is uncertain, RatOS has migrated to Mainsail."),(0,i.kt)("li",{parentName:"ul"},"KlipperScreen now comes preinstalled.")),(0,i.kt)("h3",{id:"printers"},"Printers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add V-Core Pro 1.3 support")),(0,i.kt)("h3",{id:"boards"},"Boards"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Firmware compilation has been automated! Firmware compilation and flashing is now attempted when the klipper repository is updated."),(0,i.kt)("li",{parentName:"ul"},"Fysetc Spider v1.1 support added"),(0,i.kt)("li",{parentName:"ul"},"SKR 2 /w STM32F429 support added"),(0,i.kt)("li",{parentName:"ul"},"Udev symlinks are now automatically updated when the ratos config is updated. That means new boards are mapped automatically."),(0,i.kt)("li",{parentName:"ul"},"RPi MCU added (automatically updated with klipper)"),(0,i.kt)("li",{parentName:"ul"},"make-and-flash-mcu.sh now copies the firmware binary into a firmware_binaries folder browsable in mainsail for manual flashing via SD Card if needed.")),(0,i.kt)("h3",{id:"macros"},"Macros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Macro's now have configurable behavior, the following variables are available: ",(0,i.kt)("inlineCode",{parentName:"li"},"relative_extrusion"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"preheat_extruder"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"calibrate_bed_mesh"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"nozzle_priming"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"start_print_park_in"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"start_print_park_z_height"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"end_print_park_in"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"pause_print_park_in")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"macro_travel_speed"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"START_PRINT")," now has 4 hooks: ",(0,i.kt)("inlineCode",{parentName:"li"},"_START_PRINT_AFTER_HEATING_BED"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"_START_PRINT_BED_MESH"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"_START_PRINT_PARK")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"_START_PRINT_AFTER_HEATING_EXTRUDER"),". You can override these in your printer.cfg to further customize the way your ",(0,i.kt)("inlineCode",{parentName:"li"},"START_PRINT")," macro behaves."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"END_PRINT")," now has 2 hooks: ",(0,i.kt)("inlineCode",{parentName:"li"},"_END_PRINT_AFTER_HEATERS_OFF")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"_END_PRINT_PARK"),". You can override these in your printer.cfg to further customize the way your END_PRINT macro behaves."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"END_PRINT")," and PAUSE now moves to a safe Z distance instead of always moving the same distance which could lead to errors."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"M600")," is now supported.")))}d.isMDXComponent=!0}}]);