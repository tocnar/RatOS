"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8971],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(a),h=r,k=s["".concat(d,".").concat(h)]||s[h]||u[h]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},3287:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p}});var n=a(3117),r=(a(7294),a(3905));const l={sidebar_position:1},i="Configuring RatOS Macros",o={unversionedId:"configuration/macros",id:"configuration/macros",title:"Configuring RatOS Macros",description:"RatOS comes with a bunch of flexible predefined macro's that can be customized via variables and macro hooks.",source:"@site/docs/configuration/macros.md",sourceDirName:"configuration",slug:"/configuration/macros",permalink:"/docs/configuration/macros",draft:!1,editUrl:"https://github.com/Rat-OS/RatOS/edit/v2.x/site/docs/configuration/macros.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Slicer Configuration",permalink:"/docs/slicers"},next:{title:"Adaptive Meshing",permalink:"/docs/configuration/adaptive-meshing"}},d={},p=[{value:"Variables",id:"variables",level:2},{value:"Relative Extrusion",id:"relative-extrusion",level:3},{value:"Speed",id:"speed",level:3},{value:"Homing",id:"homing",level:3},{value:"Heating",id:"heating",level:3},{value:"Bed Mesh Calibration",id:"bed-mesh-calibration",level:3},{value:"Nozzle Priming",id:"nozzle-priming",level:3},{value:"Filament loading/unloading",id:"filament-loadingunloading",level:3},{value:"Parking",id:"parking",level:3},{value:"Stowable probes",id:"stowable-probes",level:3},{value:"Skew profile",id:"skew-profile",level:3},{value:"User macro hooks",id:"user-macro-hooks",level:2},{value:"_USER_START_PRINT_HEAT_CHAMBER",id:"_user_start_print_heat_chamber",level:3},{value:"_USER_START_PRINT_AFTER_HEATING_BED",id:"_user_start_print_after_heating_bed",level:3},{value:"_USER_START_PRINT_BED_MESH",id:"_user_start_print_bed_mesh",level:3},{value:"_USER_START_PRINT_PARK",id:"_user_start_print_park",level:3},{value:"_USER_START_PRINT_AFTER_HEATING_EXTRUDER",id:"_user_start_print_after_heating_extruder",level:3},{value:"Internal macro hooks",id:"internal-macro-hooks",level:2},{value:"_START_PRINT_HEAT_CHAMBER",id:"_start_print_heat_chamber",level:3},{value:"_START_PRINT_AFTER_HEATING_BED",id:"_start_print_after_heating_bed",level:3},{value:"_START_PRINT_BED_MESH",id:"_start_print_bed_mesh",level:3},{value:"_START_PRINT_PARK",id:"_start_print_park",level:3},{value:"_START_PRINT_AFTER_HEATING_EXTRUDER",id:"_start_print_after_heating_extruder",level:3}],m={toc:p};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuring-ratos-macros"},"Configuring RatOS Macros"),(0,r.kt)("p",null,"RatOS comes with a bunch of flexible predefined macro's that can be customized via variables and macro hooks."),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("p",null,"In your printer.cfg at the bottom of the Macro's section, you'll notice this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title="printer.cfg"',title:'"printer.cfg"'},"##########################################\n### MACRO CONFIGURATION\n### Configure the behavior...\n##########################################\n[gcode_macro RatOS]\n....\n")),(0,r.kt)("p",null,"This is a macro that serves as a place to store variables that all the RatOS macro's refer to when they're executed. Since they're gcode variables you can change them on the fly, for example from your slicer's custom gcode sections:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gcode"},"SET_GCODE_VARIABLE MACRO=RatOS VARIABLE=relative_extrusion VALUE=True\nSET_GCODE_VARIABLE MACRO=RatOS VARIABLE=preheat_extruder_temp VALUE=200\n")),(0,r.kt)("p",null,"Not all of the available variables are listed in printer.cfg by default. If you want to change a variable that isn't in printer.cfg simply just add it under the ",(0,r.kt)("inlineCode",{parentName:"p"},"[gcode_macro RatOS]")," section."),(0,r.kt)("p",null,"Below you'll find a list of the available variables and what they do."),(0,r.kt)("h3",{id:"relative-extrusion"},"Relative Extrusion"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_relative_extrusion"),(0,r.kt)("td",{parentName:"tr",align:null},"True / False"),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("p",null,"Controls which extrusion mode START_PRINT ends in. Which value you use here depends on your slicer configuration, in other words this variable should always correspond to the extrusion mode setting in your slicer. It is recommended to configure your slicer for relative extrusion and set this variable to True."),(0,r.kt)("h3",{id:"speed"},"Speed"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_macro_travel_speed"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"300")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_macro_z_speed"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"10")))),(0,r.kt)("p",null,"Travel speed to use for gcode moves in RatOS Macro's in mm/s."),(0,r.kt)("h3",{id:"homing"},"Homing"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_safe_home_x"),(0,r.kt)("td",{parentName:"tr",align:null},'"middle" / number'),(0,r.kt)("td",{parentName:"tr",align:null},'"middle"'),(0,r.kt)("td",{parentName:"tr",align:null},"The x coordinate for where to return the toolhead to when homing Z")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_safe_home_y"),(0,r.kt)("td",{parentName:"tr",align:null},'"middle" / number'),(0,r.kt)("td",{parentName:"tr",align:null},'"middle'),(0,r.kt)("td",{parentName:"tr",align:null},"The y coordinate for where to return the toolhead to when homing Z")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_homing_z_hop"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"How much to raise the toolhead after homing Z. Probe configs may change this value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_driver_type_x"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"tmc2209"'),(0,r.kt)("td",{parentName:"tr",align:null},"The driver type used on X. Used to restore current after sensorless homing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_driver_type_y"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"tmc2209"'),(0,r.kt)("td",{parentName:"tr",align:null},"The driver type used on X. Used to restore current after sensorless homing")))),(0,r.kt)("h3",{id:"heating"},"Heating"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_preheat_extruder"),(0,r.kt)("td",{parentName:"tr",align:null},"True / False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"Enables or disables preheating of the nozzle to 150 degrees during the START_PRINT macro. There are several benefits to preheating the nozzle. 1) Gives the bed additional time to diffuse the heat. 2) Softens plastic that may be stuck in the nozzle so it doesn't block your probe from triggering. 3) If using a non thermally compensated inductive probe, it makes the temperature and thus the offset of the probe more predictable and consistent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_start_print_heat_chamber_bed_temp"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"115"),(0,r.kt)("td",{parentName:"tr",align:null},"The bed temperature to use when heating the chamber when the ",(0,r.kt)("inlineCode",{parentName:"td"},"CHAMBER_TEMP")," parameter is supplied to the ",(0,r.kt)("inlineCode",{parentName:"td"},"START_PRINT")," macro.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_preheat_extruder_temp"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"150"),(0,r.kt)("td",{parentName:"tr",align:null},"The temperature to preheat the extruder to, to soften the material at the nozzle tip")))),(0,r.kt)("h3",{id:"bed-mesh-calibration"},"Bed Mesh Calibration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_calibrate_bed_mesh"),(0,r.kt)("td",{parentName:"tr",align:null},"True / False"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("p",null,"Whether or not to calibrate a bed mesh before each print. If you prefer calibrating your bed mesh manually instead of on each print, you can disable it by setting this to ",(0,r.kt)("inlineCode",{parentName:"p"},"False"),". Disabling ",(0,r.kt)("inlineCode",{parentName:"p"},"variable_calibrate_bed_mesh")," will stop RatOS from loading a bed mesh entirely. If you want it to load a mesh, you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"variable_bed_mesh_profile")," to the name of the profile you want it to load."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_bed_mesh_profile"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined / string"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("p",null,"Use this variable to set name for the bed_mesh profile that RatOS calibrate and loads. If ",(0,r.kt)("inlineCode",{parentName:"p"},"variable_calibrate_bed_mesh")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," you must set this variable to the profile name you wish to load, or no bed mesh will be loaded. If variable_calibrate_bed_mesh is ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," and this variable isn't set, RatOS will use ",(0,r.kt)("inlineCode",{parentName:"p"},"ratos")," as the profile name."),(0,r.kt)("h3",{id:"nozzle-priming"},"Nozzle Priming"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_nozzle_priming"),(0,r.kt)("td",{parentName:"tr",align:null},'"primeline" / "primeblob" / False'),(0,r.kt)("td",{parentName:"tr",align:null},'"primeblob"'),(0,r.kt)("td",{parentName:"tr",align:null},'Whether or not to prime the nozzle during the START_PRINT macro. "primeline" will make START_PRINT draw a short line to prime the nozzle. "primeblob" will put a small blob at the edge of the bed that is intended to wrap around the nozzle, then lifts the toolhead out of it while extruding a small line, effective for cleaning the nozzle and it\'s easy to clean up.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_nozzle_prime_start_x"),(0,r.kt)("td",{parentName:"tr",align:null},'"min" / "max" / number'),(0,r.kt)("td",{parentName:"tr",align:null},'"max"'),(0,r.kt)("td",{parentName:"tr",align:null},'Where to place the primeline or blob in X. "min" starts the blob or line at x=0 + some safety margin. "max" starts the blob or line at x=max - some safety margin. If set to a number, that number will be used as the starting x coordinate of the line or blob.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_nozzle_prime_start_y"),(0,r.kt)("td",{parentName:"tr",align:null},'"min" / "max" / number'),(0,r.kt)("td",{parentName:"tr",align:null},'"min"'),(0,r.kt)("td",{parentName:"tr",align:null},'Where to place the primeline or blob in Y. "min" starts the blob or line at y=0 + some safety margin. "max" starts the blob or line at y=max - some safety margin. If set to a number, that number will be used as the starting y coordinate of the line or blob.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_nozzle_prime_direction"),(0,r.kt)("td",{parentName:"tr",align:null},'"auto" / "forwards" / "backwards'),(0,r.kt)("td",{parentName:"tr",align:null},'"auto"'),(0,r.kt)("td",{parentName:"tr",align:null},'The direction to draw the line or blob in, if "backwards" the toolhead will move toward the front of the printer, if "forwards" it will move towards the back. When set to "auto" it will move towards the middle regardless of ',(0,r.kt)("inlineCode",{parentName:"td"},"variable_nozzle_prime_start_y"),".")))),(0,r.kt)("h3",{id:"filament-loadingunloading"},"Filament loading/unloading"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_filament_unload_length"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"130"),(0,r.kt)("td",{parentName:"tr",align:null},"How much to retract in mm when unloading filament after the tip has been formed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_filament_unload_speed"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"How fast to retract the ",(0,r.kt)("inlineCode",{parentName:"td"},"filament_unload_length")," filament in mm/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_filament_load_length"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"How much to extrude in mm when loading filament to get the filament to the nozzle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_filament_load_speed"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"How fast to extrude the ",(0,r.kt)("inlineCode",{parentName:"td"},"filament_load_length")," in mm/s")))),(0,r.kt)("h3",{id:"parking"},"Parking"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_start_print_park_in"),(0,r.kt)("td",{parentName:"tr",align:null},'"back" / "center" / "front"'),(0,r.kt)("td",{parentName:"tr",align:null},'"back"'),(0,r.kt)("td",{parentName:"tr",align:null},"Where to park the toolhead during final nozzle heating.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_start_print_park_x"),(0,r.kt)("td",{parentName:"tr",align:null},"number / undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom X coordinate to park the toolhead during final nozzle heating.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_start_print_park_z_height"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"The z height at which to park the toolhead during final nozzle heating.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_end_print_park_in"),(0,r.kt)("td",{parentName:"tr",align:null},'"back" / "center" / "front"'),(0,r.kt)("td",{parentName:"tr",align:null},'"back"'),(0,r.kt)("td",{parentName:"tr",align:null},"Where to park the toolhead after ending or canceling a print.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_end_print_park_x"),(0,r.kt)("td",{parentName:"tr",align:null},"number / undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom X coordinate to park the toolhead after ending or canceling a print.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_end_print_park_z_hop"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"How many mm to lift the nozzle when after ending or cancelling a print.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_pause_print_park_in"),(0,r.kt)("td",{parentName:"tr",align:null},'"back" / "center" / "front"'),(0,r.kt)("td",{parentName:"tr",align:null},'"back"'),(0,r.kt)("td",{parentName:"tr",align:null},"Where to park the toolhead when pausing a print.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_pause_print_park_x"),(0,r.kt)("td",{parentName:"tr",align:null},"number / undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom X coordinate to park the toolhead when pausing a print.")))),(0,r.kt)("h3",{id:"stowable-probes"},"Stowable probes"),(0,r.kt)("p",null,"These variables are only relevant when using a stowable probe such as Euclid or Klicky. Use these to customize and finetune the deployment and stowing procedures."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_stowable_probe_position_preflight"),(0,r.kt)("td",{parentName:"tr",align:null},"Tuple"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"The coordinates to move the toolhead to before the probe deployment routine. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"[30, 60]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_stowable_probe_position_side"),(0,r.kt)("td",{parentName:"tr",align:null},"Tuple"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"The coordinates to move the toolhead to before entering the dock during deployment, or exiting the dock while stowing. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"[30, 0]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_stowable_probe_position_dock"),(0,r.kt)("td",{parentName:"tr",align:null},"Tuple"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"The coordinates of the toolhead when it's positioned perfectly inside the dock for pickup. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"[0, 0]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_stowable_probe_position_exit"),(0,r.kt)("td",{parentName:"tr",align:null},"Tuple"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"The coordinates to move the toolhead to when exiting the dock while deploying or entering the dock while stowing. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"[0, 60]"))))),(0,r.kt)("h3",{id:"skew-profile"},"Skew profile"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variable_skew_profile"),(0,r.kt)("td",{parentName:"tr",align:null},"string or undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this if you have calibrated and saved a skew profile that you want to load in the START_PRINT macro. To activate it, set the variable to the name of your saved skew profile.")))),(0,r.kt)("h2",{id:"user-macro-hooks"},"User macro hooks"),(0,r.kt)("p",null,"These hooks do nothing by default, that means you can safely implement them in your USER OVERRIDES section without copy pasting anything from the RatOS config files, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"[gcode_macro _USER_START_PRINT_BED_MESH]\ngcode:\n    SETUP_KAMP_MESHING\n")),(0,r.kt)("h3",{id:"_user_start_print_heat_chamber"},"_","USER_START_PRINT_HEAT_CHAMBER"),(0,r.kt)("p",null,"Runs right after the chamber has started heating, if CHAMBER_TEMP is supplied to START_PRINT."),(0,r.kt)("h3",{id:"_user_start_print_after_heating_bed"},"_","USER_START_PRINT_AFTER_HEATING_BED"),(0,r.kt)("p",null,"Runs right after the bed has reached temp, before the internal ","_","START_PRINT_AFTER_HEATING_BED"),(0,r.kt)("h3",{id:"_user_start_print_bed_mesh"},"_","USER_START_PRINT_BED_MESH"),(0,r.kt)("p",null,"Runs before ","_","START_PRINT_BED_MESH"),(0,r.kt)("h3",{id:"_user_start_print_park"},"_","USER_START_PRINT_PARK"),(0,r.kt)("p",null,"Runs before ","_","START_PRINT_PARK"),(0,r.kt)("h3",{id:"_user_start_print_after_heating_extruder"},"_","USER_START_PRINT_AFTER_HEATING_EXTRUDER"),(0,r.kt)("p",null,"Runs just before ","_","START_PRINT_AFTER_HEATING_EXTRUDER"),(0,r.kt)("h2",{id:"internal-macro-hooks"},"Internal macro hooks"),(0,r.kt)("p",null,"These hooks are used internally, so if you override these be sure to copy paste the original implementation and modify that or you may break some functionality. Remember to check if there's an override in the printer's macro.cfg file, in which case that's the one you would copy."),(0,r.kt)("h3",{id:"_start_print_heat_chamber"},"_","START_PRINT_HEAT_CHAMBER"),(0,r.kt)("p",null,"Heats the chamber, if CHAMBER_TEMP is supplied to START_PRINT."),(0,r.kt)("h3",{id:"_start_print_after_heating_bed"},"_","START_PRINT_AFTER_HEATING_BED"),(0,r.kt)("p",null,"Runs right after the bed has reached temp, after ","_","USER_START_PRINT_AFTER_HEATING_BED. It is usually used for additional bed calibration, such as Z_TILT_ADJUST or QUAD_GANTRY_LEVELING depending on the printer."),(0,r.kt)("h3",{id:"_start_print_bed_mesh"},"_","START_PRINT_BED_MESH"),(0,r.kt)("p",null,"Handles bed meshing logic."),(0,r.kt)("h3",{id:"_start_print_park"},"_","START_PRINT_PARK"),(0,r.kt)("p",null,"Parks the extruder while heating the nozzle to print temperature."),(0,r.kt)("h3",{id:"_start_print_after_heating_extruder"},"_","START_PRINT_AFTER_HEATING_EXTRUDER"),(0,r.kt)("p",null,"Primes the nozzle and loads the skew profile if any is defined in the RatOS variables."))}u.isMDXComponent=!0}}]);