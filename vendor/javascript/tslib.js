// tslib@2.8.1 downloaded from https://ga.jspm.io/npm:tslib@2.8.1/tslib.es6.mjs

var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};function __extends(e,t){if(typeof t!=="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=t===null?Object.create(t):(__.prototype=t.prototype,new __)}var __assign=function(){__assign=Object.assign||function __assign(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e};return __assign.apply(this,arguments)};function __rest(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols==="function"){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function __decorate(e,t,r,n){var o,a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i}function __param(e,t){return function(r,n){t(r,n,e)}}function __esDecorate(e,t,r,n,o,a){function accept(e){if(e!==void 0&&typeof e!=="function")throw new TypeError("Function expected");return e}var i=n.kind,c=i==="getter"?"get":i==="setter"?"set":"value";var s=!t&&e?n.static?e:e.prototype:null;var u=t||(s?Object.getOwnPropertyDescriptor(s,n.name):{});var l,_=false;for(var f=r.length-1;f>=0;f--){var p={};for(var y in n)p[y]=y==="access"?{}:n[y];for(var y in n.access)p.access[y]=n.access[y];p.addInitializer=function(e){if(_)throw new TypeError("Cannot add initializers after decoration has completed");a.push(accept(e||null))};var d=(0,r[f])(i==="accessor"?{get:u.get,set:u.set}:u[c],p);if(i==="accessor"){if(d===void 0)continue;if(d===null||typeof d!=="object")throw new TypeError("Object expected");(l=accept(d.get))&&(u.get=l);(l=accept(d.set))&&(u.set=l);(l=accept(d.init))&&o.unshift(l)}else(l=accept(d))&&(i==="field"?o.unshift(l):u[c]=l)}s&&Object.defineProperty(s,n.name,u);_=true}function __runInitializers(e,t,r){var n=arguments.length>2;for(var o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0}function __propKey(e){return typeof e==="symbol"?e:"".concat(e)}function __setFunctionName(e,t,r){typeof t==="symbol"&&(t=t.description?"[".concat(t.description,"]"):"");return Object.defineProperty(e,"name",{configurable:true,value:r?"".concat(r," ",t):t})}function __metadata(e,t){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)}function __awaiter(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function fulfilled(e){try{step(n.next(e))}catch(e){o(e)}}function rejected(e){try{step(n.throw(e))}catch(e){o(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))}function __generator(e,t){var r,n,o,a={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i=Object.create((typeof Iterator==="function"?Iterator:Object).prototype);return i.next=verb(0),i.throw=verb(1),i.return=verb(2),typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function verb(e){return function(t){return step([e,t])}}function step(c){if(r)throw new TypeError("Generator is already executing.");while(i&&(i=0,c[0]&&(a=0)),a)try{if(r=1,n&&(o=c[0]&2?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;(n=0,o)&&(c=[c[0]&2,o.value]);switch(c[0]){case 0:case 1:o=c;break;case 4:a.label++;return{value:c[1],done:false};case 5:a.label++;n=c[1];c=[0];continue;case 7:c=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){a=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(c[0]===6&&a.label<o[1]){a.label=o[1];o=c;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(c);break}o[2]&&a.ops.pop();a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e];n=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:true}}}var e=Object.create?function(e,t,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:true,get:function(){return t[r]}});Object.defineProperty(e,n,o)}:function(e,t,r,n){n===void 0&&(n=r);e[n]=t[r]};function __exportStar(t,r){for(var n in t)n==="default"||Object.prototype.hasOwnProperty.call(r,n)||e(r,t,n)}function __values(e){var t=typeof Symbol==="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length==="number")return{next:function(){e&&n>=e.length&&(e=void 0);return{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(e,t){var r=typeof Symbol==="function"&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{while((t===void 0||t-- >0)&&!(n=a.next()).done)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}
/** @deprecated */function __spread(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e}
/** @deprecated */function __spreadArrays(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,o++)n[o]=a[i];return n}function __spreadArray(e,t,r){if(r||arguments.length===2)for(var n,o=0,a=t.length;o<a;o++)if(n||!(o in t)){n||(n=Array.prototype.slice.call(t,0,o));n[o]=t[o]}return e.concat(n||Array.prototype.slice.call(t))}function __await(e){return this instanceof __await?(this.v=e,this):new __await(e)}function __asyncGenerator(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),a=[];return n=Object.create((typeof AsyncIterator==="function"?AsyncIterator:Object).prototype),verb("next"),verb("throw"),verb("return",awaitReturn),n[Symbol.asyncIterator]=function(){return this},n;function awaitReturn(e){return function(t){return Promise.resolve(t).then(e,reject)}}function verb(e,t){if(o[e]){n[e]=function(t){return new Promise((function(r,n){a.push([e,t,r,n])>1||resume(e,t)}))};t&&(n[e]=t(n[e]))}}function resume(e,t){try{step(o[e](t))}catch(e){settle(a[0][3],e)}}function step(e){e.value instanceof __await?Promise.resolve(e.value.v).then(fulfill,reject):settle(a[0][2],e)}function fulfill(e){resume("next",e)}function reject(e){resume("throw",e)}function settle(e,t){(e(t),a.shift(),a.length)&&resume(a[0][0],a[0][1])}}function __asyncDelegator(e){var t,r;return t={},verb("next"),verb("throw",(function(e){throw e})),verb("return"),t[Symbol.iterator]=function(){return this},t;function verb(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:__await(e[n](t)),done:false}:o?o(t):t}:o}}function __asyncValues(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=typeof __values==="function"?__values(e):e[Symbol.iterator](),t={},verb("next"),verb("throw"),verb("return"),t[Symbol.asyncIterator]=function(){return this},t);function verb(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){t=e[r](t),settle(n,o,t.done,t.value)}))}}function settle(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)}}function __makeTemplateObject(e,t){Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t;return e}var t=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e.default=t};var ownKeys=function(e){ownKeys=Object.getOwnPropertyNames||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[t.length]=r);return t};return ownKeys(e)};function __importStar(r){if(r&&r.__esModule)return r;var n={};if(r!=null)for(var o=ownKeys(r),a=0;a<o.length;a++)o[a]!=="default"&&e(n,r,o[a]);t(n,r);return n}function __importDefault(e){return e&&e.__esModule?e:{default:e}}function __classPrivateFieldGet(e,t,r,n){if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t==="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}function __classPrivateFieldSet(e,t,r,n,o){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t==="function"?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?o.call(e,r):o?o.value=r:t.set(e,r),r}function __classPrivateFieldIn(e,t){if(t===null||typeof t!=="object"&&typeof t!=="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e==="function"?t===e:e.has(t)}function __addDisposableResource(e,t,r){if(t!==null&&t!==void 0){if(typeof t!=="object"&&typeof t!=="function")throw new TypeError("Object expected.");var n,o;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(n===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose];r&&(o=n)}if(typeof n!=="function")throw new TypeError("Object not disposable.");o&&(n=function(){try{o.call(this)}catch(e){return Promise.reject(e)}});e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:true});return t}var r=typeof SuppressedError==="function"?SuppressedError:function(e,t,r){var n=new Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};function __disposeResources(e){function fail(t){e.error=e.hasError?new r(t,e.error,"An error was suppressed during disposal."):t;e.hasError=true}var t,n=0;function next(){while(t=e.stack.pop())try{if(!t.async&&n===1)return n=0,e.stack.push(t),Promise.resolve().then(next);if(t.dispose){var r=t.dispose.call(t.value);if(t.async)return n|=2,Promise.resolve(r).then(next,(function(e){fail(e);return next()}))}else n|=1}catch(e){fail(e)}if(n===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return next()}function __rewriteRelativeImportExtension(e,t){return typeof e==="string"&&/^\.\.?\//.test(e)?e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,(function(e,r,n,o,a){return r?t?".jsx":".js":!n||o&&a?n+o+"."+a.toLowerCase()+"js":e})):e}var n={__extends:__extends,__assign:__assign,__rest:__rest,__decorate:__decorate,__param:__param,__esDecorate:__esDecorate,__runInitializers:__runInitializers,__propKey:__propKey,__setFunctionName:__setFunctionName,__metadata:__metadata,__awaiter:__awaiter,__generator:__generator,__createBinding:e,__exportStar:__exportStar,__values:__values,__read:__read,__spread:__spread,__spreadArrays:__spreadArrays,__spreadArray:__spreadArray,__await:__await,__asyncGenerator:__asyncGenerator,__asyncDelegator:__asyncDelegator,__asyncValues:__asyncValues,__makeTemplateObject:__makeTemplateObject,__importStar:__importStar,__importDefault:__importDefault,__classPrivateFieldGet:__classPrivateFieldGet,__classPrivateFieldSet:__classPrivateFieldSet,__classPrivateFieldIn:__classPrivateFieldIn,__addDisposableResource:__addDisposableResource,__disposeResources:__disposeResources,__rewriteRelativeImportExtension:__rewriteRelativeImportExtension};export{__addDisposableResource,__assign,__asyncDelegator,__asyncGenerator,__asyncValues,__await,__awaiter,__classPrivateFieldGet,__classPrivateFieldIn,__classPrivateFieldSet,e as __createBinding,__decorate,__disposeResources,__esDecorate,__exportStar,__extends,__generator,__importDefault,__importStar,__makeTemplateObject,__metadata,__param,__propKey,__read,__rest,__rewriteRelativeImportExtension,__runInitializers,__setFunctionName,__spread,__spreadArray,__spreadArrays,__values,n as default};

