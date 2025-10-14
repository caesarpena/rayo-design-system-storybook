import{V as r}from"./iframe-BM9OJtzW.js";import{m as a,a as i,b as c,c as l,d as m,e as d,f as p,g as u,h as g,i as h,j as b,o as y,s as C,R as f}from"./toast.service-BF1dO25s.js";import"./preload-helper-PPVm8Dsz.js";const x=["",...Object.values(C)],n={None:"",Home:b,"Info (Outline)":h,"Alert Circle":g,Account:u,"Check Circle":p,Close:d,Plus:m,Pencil:l,"Trash Can":c,"Search (Magnify)":i,"Arrow Right":a},D=Object.keys(n),s=y({tagName:"rayo-button",elementClass:f,react:r,events:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur",onMouseover:"onMouseover"}});s.displayName="rayo-button";const A={title:"Rayo/Button",component:s,parameters:{layout:"centered",docs:{description:{component:""}}},argTypes:{appearance:{control:"select",options:["solid","accent","quiet","outline","danger","link"]},alignment:{control:"radio",options:["","left","right"]},iconPlacement:{control:"radio",options:["left","right"]},htmlType:{control:"select",options:["button","submit","reset","menu"]},isDisabled:{control:"boolean"},text:{control:"text"},icon:{control:{type:"select"},options:D,mapping:n,description:"Sample MDI icons (mapped to SVG path). Full set: https://pictogrammers.com/library/mdi/"},size:{control:"select",options:x},hrefLink:{control:"text"},htmlClass:{control:"text"},htmlID:{control:"text"},onClick:{action:"clicked"},onFocus:{action:"focused"},onBlur:{action:"blurred"},onMouseover:{action:"mouse-over"}},args:{appearance:"solid",text:"Button",icon:"None",iconPlacement:"left",isDisabled:!1,alignment:"",htmlType:"button",size:"",hrefLink:"",htmlClass:"",htmlID:""}},o={},e={args:{icon:"Arrow Right",iconPlacement:"right",text:"Next"}},t={args:{isDisabled:!0,text:"Disabled",icon:"None"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'Arrow Right',
    iconPlacement: 'right',
    text: 'Next'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    text: 'Disabled',
    icon: 'None'
  }
}`,...t.parameters?.docs?.source}}};const I=["Primary","WithIconRight","Disabled"];export{t as Disabled,o as Primary,e as WithIconRight,I as __namedExportsOrder,A as default};
