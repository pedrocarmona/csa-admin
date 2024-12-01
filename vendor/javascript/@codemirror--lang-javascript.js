// @codemirror/lang-javascript@6.2.2 downloaded from https://ga.jspm.io/npm:@codemirror/lang-javascript@6.2.2/dist/index.js

import{parser as e}from"@lezer/javascript";import{syntaxTree as t,continuedIndent as n,flatIndent as o,delimitedIndent as r,indentNodeProp as a,foldInside as i,foldNodeProp as l,LRLanguage as s,defineLanguageFacet as c,sublanguageProp as p,LanguageSupport as m}from"@codemirror/language";import{EditorSelection as f}from"@codemirror/state";import{EditorView as u}from"@codemirror/view";import{snippetCompletion as d,completeFromList as y,ifNotIn as g}from"@codemirror/autocomplete";import{NodeWeakMap as b,IterMode as h}from"@lezer/common";const S=[d("function ${name}(${params}) {\n\t${}\n}",{label:"function",detail:"definition",type:"keyword"}),d("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}",{label:"for",detail:"loop",type:"keyword"}),d("for (let ${name} of ${collection}) {\n\t${}\n}",{label:"for",detail:"of loop",type:"keyword"}),d("do {\n\t${}\n} while (${})",{label:"do",detail:"loop",type:"keyword"}),d("while (${}) {\n\t${}\n}",{label:"while",detail:"loop",type:"keyword"}),d("try {\n\t${}\n} catch (${error}) {\n\t${}\n}",{label:"try",detail:"/ catch block",type:"keyword"}),d("if (${}) {\n\t${}\n}",{label:"if",detail:"block",type:"keyword"}),d("if (${}) {\n\t${}\n} else {\n\t${}\n}",{label:"if",detail:"/ else block",type:"keyword"}),d("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}",{label:"class",detail:"definition",type:"keyword"}),d('import {${names}} from "${module}"\n${}',{label:"import",detail:"named",type:"keyword"}),d('import ${name} from "${module}"\n${}',{label:"import",detail:"default",type:"keyword"})];const $=S.concat([d("interface ${name} {\n\t${}\n}",{label:"interface",detail:"definition",type:"keyword"}),d("type ${name} = ${type}",{label:"type",detail:"definition",type:"keyword"}),d("enum ${name} {\n\t${}\n}",{label:"enum",detail:"definition",type:"keyword"})]);const w=new b;const v=new Set(["Script","Block","FunctionExpression","FunctionDeclaration","ArrowFunction","MethodDeclaration","ForStatement"]);function defID(e){return(t,n)=>{let o=t.node.getChild("VariableDefinition");o&&n(o,e);return true}}const x=["FunctionDeclaration"];const k={FunctionDeclaration:defID("function"),ClassDeclaration:defID("class"),ClassExpression:()=>true,EnumDeclaration:defID("constant"),TypeAliasDeclaration:defID("type"),NamespaceDeclaration:defID("namespace"),VariableDefinition(e,t){e.matchContext(x)||t(e,"variable")},TypeDefinition(e,t){t(e,"type")},__proto__:null};function getScope(e,t){let n=w.get(t);if(n)return n;let o=[],r=true;function def(t,n){let r=e.sliceString(t.from,t.to);o.push({label:r,type:n})}t.cursor(h.IncludeAnonymous).iterate((t=>{if(r)r=false;else if(t.name){let e=k[t.name];if(e&&e(t,def)||v.has(t.name))return false}else if(t.to-t.from>8192){for(let n of getScope(e,t.node))o.push(n);return false}}));w.set(t,o);return o}const C=/^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/;const D=["TemplateString","String","RegExp","LineComment","BlockComment","VariableDefinition","TypeDefinition","Label","PropertyDefinition","PropertyName","PrivatePropertyDefinition","PrivatePropertyName",".","?."];function localCompletionSource(e){let n=t(e.state).resolveInner(e.pos,-1);if(D.indexOf(n.name)>-1)return null;let o=n.name=="VariableName"||n.to-n.from<20&&C.test(e.state.sliceDoc(n.from,n.to));if(!o&&!e.explicit)return null;let r=[];for(let t=n;t;t=t.parent)v.has(t.name)&&(r=r.concat(getScope(e.state.doc,t)));return{options:r,from:o?n.from:e.pos,validFor:C}}function pathFor(e,t,n){var o;let r=[];for(;;){let a,i=t.firstChild;if((i===null||i===void 0?void 0:i.name)=="VariableName"){r.push(e(i));return{path:r.reverse(),name:n}}if((i===null||i===void 0?void 0:i.name)!="MemberExpression"||((o=a=i.lastChild)===null||o===void 0?void 0:o.name)!="PropertyName")return null;r.push(e(a));t=i}}function completionPath(e){let read=t=>e.state.doc.sliceString(t.from,t.to);let n=t(e.state).resolveInner(e.pos,-1);return n.name=="PropertyName"?pathFor(read,n.parent,read(n)):n.name!="."&&n.name!="?."||n.parent.name!="MemberExpression"?D.indexOf(n.name)>-1?null:n.name=="VariableName"||n.to-n.from<20&&C.test(read(n))?{path:[],name:read(n)}:n.name=="MemberExpression"?pathFor(read,n,""):e.explicit?{path:[],name:""}:null:pathFor(read,n.parent,"")}function enumeratePropertyCompletions(e,t){let n=[],o=new Set;for(let r=0;;r++){for(let a of(Object.getOwnPropertyNames||Object.keys)(e)){if(!/^[a-zA-Z_$\xaa-\uffdc][\w$\xaa-\uffdc]*$/.test(a)||o.has(a))continue;o.add(a);let i;try{i=e[a]}catch(e){continue}n.push({label:a,type:typeof i=="function"?/^[A-Z]/.test(a)?"class":t?"function":"method":t?"variable":"property",boost:-r})}let a=Object.getPrototypeOf(e);if(!a)return n;e=a}}function scopeCompletionSource(e){let t=new Map;return n=>{let o=completionPath(n);if(!o)return null;let r=e;for(let e of o.path){r=r[e];if(!r)return null}let a=t.get(r);a||t.set(r,a=enumeratePropertyCompletions(r,!o.path.length));return{from:n.pos-o.name.length,options:a,validFor:C}}}const T=s.define({name:"javascript",parser:e.configure({props:[a.add({IfStatement:n({except:/^\s*({|else\b)/}),TryStatement:n({except:/^\s*({|catch\b|finally\b)/}),LabeledStatement:o,SwitchBody:e=>{let t=e.textAfter,n=/^\s*\}/.test(t),o=/^\s*(case|default)\b/.test(t);return e.baseIndent+(n?0:o?1:2)*e.unit},Block:r({closing:"}"}),ArrowFunction:e=>e.baseIndent+e.unit,"TemplateString BlockComment":()=>null,"Statement Property":n({except:/^{/}),JSXElement(e){let t=/^\s*<\//.test(e.textAfter);return e.lineIndent(e.node.from)+(t?0:e.unit)},JSXEscape(e){let t=/\s*\}/.test(e.textAfter);return e.lineIndent(e.node.from)+(t?0:e.unit)},"JSXOpenTag JSXSelfClosingTag"(e){return e.column(e.node.from)+e.unit}}),l.add({"Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType":i,BlockComment(e){return{from:e.from+2,to:e.to-2}}})]}),languageData:{closeBrackets:{brackets:["(","[","{","'",'"',"`"]},commentTokens:{line:"//",block:{open:"/*",close:"*/"}},indentOnInput:/^\s*(?:case |default:|\{|\}|<\/)$/,wordChars:"$"}});const I={test:e=>/^JSX/.test(e.name),facet:c({commentTokens:{block:{open:"{/*",close:"*/}"}}})};const J=T.configure({dialect:"ts"},"typescript");const P=T.configure({dialect:"jsx",props:[p.add((e=>e.isTop?[I]:void 0))]});const X=T.configure({dialect:"jsx ts",props:[p.add((e=>e.isTop?[I]:void 0))]},"typescript");let kwCompletion=e=>({label:e,type:"keyword"});const O="break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(kwCompletion);const A=O.concat(["declare","implements","private","protected","public"].map(kwCompletion));function javascript(e={}){let t=e.jsx?e.typescript?X:P:e.typescript?J:T;let n=e.typescript?$.concat(A):S.concat(O);return new m(t,[T.data.of({autocomplete:g(D,y(n))}),T.data.of({autocomplete:localCompletionSource}),e.jsx?F:[]])}function findOpenTag(e){for(;;){if(e.name=="JSXOpenTag"||e.name=="JSXSelfClosingTag"||e.name=="JSXFragmentTag")return e;if(e.name=="JSXEscape"||!e.parent)return null;e=e.parent}}function elementName(e,t,n=e.length){for(let o=t===null||t===void 0?void 0:t.firstChild;o;o=o.nextSibling)if(o.name=="JSXIdentifier"||o.name=="JSXBuiltin"||o.name=="JSXNamespacedName"||o.name=="JSXMemberExpression")return e.sliceString(o.from,Math.min(o.to,n));return""}const E=typeof navigator=="object"&&/Android\b/.test(navigator.userAgent);const F=u.inputHandler.of(((e,n,o,r,a)=>{if((E?e.composing:e.compositionStarted)||e.state.readOnly||n!=o||r!=">"&&r!="/"||!T.isActiveAt(e.state,n,-1))return false;let i=a(),{state:l}=i;let s=l.changeByRange((e=>{var n;let o,{head:a}=e,i=t(l).resolveInner(a-1,-1);i.name=="JSXStartTag"&&(i=i.parent);if(l.doc.sliceString(a-1,a)!=r||i.name=="JSXAttributeValue"&&i.to>a);else{if(r==">"&&i.name=="JSXFragmentTag")return{range:e,changes:{from:a,insert:"</>"}};if(r=="/"&&i.name=="JSXStartCloseTag"){let e=i.parent,t=e.parent;if(t&&e.from==a-2&&((o=elementName(l.doc,t.firstChild,a))||((n=t.firstChild)===null||n===void 0?void 0:n.name)=="JSXFragmentTag")){let e=`${o}>`;return{range:f.cursor(a+e.length,-1),changes:{from:a,insert:e}}}}else if(r==">"){let t=findOpenTag(i);if(t&&t.name=="JSXOpenTag"&&!/^\/?>|^<\//.test(l.doc.sliceString(a,a+2))&&(o=elementName(l.doc,t,a)))return{range:e,changes:{from:a,insert:`</${o}>`}}}}return{range:e}}));if(s.changes.empty)return false;e.dispatch([i,l.update(s,{userEvent:"input.complete",scrollIntoView:true})]);return true}));function esLint(e,t){if(!t){t={parserOptions:{ecmaVersion:2019,sourceType:"module"},env:{browser:true,node:true,es6:true,es2015:true,es2017:true,es2020:true},rules:{}};e.getRules().forEach(((e,n)=>{e.meta.docs.recommended&&(t.rules[n]=2)}))}return n=>{let{state:o}=n,r=[];for(let{from:n,to:a}of T.findRegions(o)){let i=o.doc.lineAt(n),l={line:i.number-1,col:n-i.from,pos:n};for(let i of e.verify(o.sliceDoc(n,a),t))r.push(translateDiagnostic(i,o.doc,l))}return r}}function mapPos(e,t,n,o){return n.line(e+o.line).from+t+(e==1?o.col-1:-1)}function translateDiagnostic(e,t,n){let o=mapPos(e.line,e.column,t,n);let r={from:o,to:e.endLine!=null&&e.endColumn!=1?mapPos(e.endLine,e.endColumn,t,n):o,message:e.message,source:e.ruleId?"eslint:"+e.ruleId:"eslint",severity:e.severity==1?"warning":"error"};if(e.fix){let{range:t,text:a}=e.fix,i=t[0]+n.pos-o,l=t[1]+n.pos-o;r.actions=[{name:"fix",apply(e,t){e.dispatch({changes:{from:t+i,to:t+l,insert:a},scrollIntoView:true})}}]}return r}export{F as autoCloseTags,completionPath,esLint,javascript,T as javascriptLanguage,P as jsxLanguage,localCompletionSource,scopeCompletionSource,S as snippets,X as tsxLanguage,J as typescriptLanguage,$ as typescriptSnippets};

