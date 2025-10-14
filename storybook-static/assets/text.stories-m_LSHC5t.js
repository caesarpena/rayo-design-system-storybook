import{V as c}from"./iframe-BM9OJtzW.js";import{a as i,b as l,c as p,d as m,e as d,f as g,g as h,h as u,i as x,j as y,o as C,s,k as f,p as I}from"./toast.service-BF1dO25s.js";import"./preload-helper-PPVm8Dsz.js";const n=C({tagName:"rayo-text",elementClass:I,react:c,events:{}});n.displayName="rayo-text";const r={None:"",Home:y,"Info (Outline)":x,"Alert Circle":u,Account:h,"Check Circle":g,Close:d,Plus:m,Pencil:p,"Trash Can":l,"Search (Magnify)":i},S=Object.keys(r),H={title:"Rayo/Text",component:n,parameters:{layout:"centered",docs:{description:{component:""}}},argTypes:{text:{control:"text"},tag:{control:"select",options:["h1","h2","h3","h4","h5","h6","span"]},appearance:{control:"select",options:["title","headline","headline-alt"]},size:{control:"select",options:["",...Object.values(s)]},icon:{control:{type:"select"},options:S,mapping:r,description:"Sample MDI icons (mapped to SVG path). Full set: https://pictogrammers.com/library/mdi/"},iconColor:{control:"select",options:["",...Object.values(f)]},iconOpacity:{control:"text"},htmlClass:{control:"text"},htmlID:{control:"text"}},args:{text:"Hello Rayo",tag:"span",appearance:"title",size:"",icon:"None",iconColor:"",iconOpacity:"",htmlClass:"",htmlID:""}},e={},t={args:{text:"Headline",appearance:"headline",size:s.lg,tag:"h2"}},a={args:{text:"Section Title",appearance:"title",size:s.sm,tag:"h3"}},o={args:{text:"Info",icon:"Info (Outline)",appearance:"title",tag:"span"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Headline',
    appearance: 'headline',
    size: sizes.lg,
    tag: 'h2'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Section Title',
    appearance: 'title',
    size: sizes.sm,
    tag: 'h3'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Info',
    icon: 'Info (Outline)',
    appearance: 'title',
    tag: 'span'
  }
}`,...o.parameters?.docs?.source}}};const P=["Primary","HeadlineLg","TitleSm","WithIcon"];export{t as HeadlineLg,e as Primary,a as TitleSm,o as WithIcon,P as __namedExportsOrder,H as default};
