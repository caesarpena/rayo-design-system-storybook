import{V as t}from"./iframe-BM9OJtzW.js";import{a as i,b as m,c as l,d as p,e as d,f as u,g as y,h as g,i as C,j as f,o as h,k as s,n as I}from"./toast.service-BF1dO25s.js";import"./preload-helper-PPVm8Dsz.js";const c=h({tagName:"rayo-icon",elementClass:I,react:t,events:{}});c.displayName="rayo-icon";const n={Home:f,"Info (Outline)":C,"Alert Circle":g,Account:y,"Check Circle":u,Close:d,Plus:p,Pencil:l,"Trash Can":m,"Search (Magnify)":i},S=Object.keys(n),O=["",...Object.values(s)],A={title:"Rayo/Icon",component:c,parameters:{layout:"centered",docs:{description:{component:""}}},argTypes:{icon:{control:{type:"select"},options:S,mapping:n,description:"Sample set of MDI icons. Use the dropdown to pick one, or paste any SVG path from @mdi/js. Library: https://pictogrammers.com/library/mdi/"},size:{control:{type:"number",min:12,max:128,step:2}},opacity:{control:{type:"range",min:0,max:1,step:.05}},color:{control:{type:"select"},options:O,description:"Fill color token (maps to CSS var: --color-<token>)."},htmlClass:{control:"text"},htmlID:{control:"text"}},args:{icon:"Home",size:24,opacity:1,color:"",htmlClass:"",htmlID:""}},o={},e={args:{icon:"Info (Outline)",color:s.accent}},r={args:{icon:"Alert Circle",size:48,color:s.accent}},a={args:{icon:"Home",opacity:.5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'Info (Outline)',
    color: colors.accent
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'Alert Circle',
    size: 48,
    color: colors.accent
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'Home',
    opacity: 0.5
  }
}`,...a.parameters?.docs?.source}}};const P=["Primary","InfoColored","WarningLarge","SemiTransparent"];export{e as InfoColored,o as Primary,a as SemiTransparent,r as WarningLarge,P as __namedExportsOrder,A as default};
