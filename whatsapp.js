const _0x41da7d=_0x1ac5;(function(_0x1a11a9,_0xc6f301){const _0x1fe810=_0x1ac5,_0x1e8a42=_0x1a11a9();while(!![]){try{const _0xf81539=parseInt(_0x1fe810(0x272))/0x1*(-parseInt(_0x1fe810(0x253))/0x2)+-parseInt(_0x1fe810(0x289))/0x3+-parseInt(_0x1fe810(0x1fd))/0x4*(parseInt(_0x1fe810(0x1e1))/0x5)+-parseInt(_0x1fe810(0x1e5))/0x6+parseInt(_0x1fe810(0x21e))/0x7*(-parseInt(_0x1fe810(0x1ef))/0x8)+parseInt(_0x1fe810(0x1ad))/0x9+parseInt(_0x1fe810(0x1ac))/0xa;if(_0xf81539===_0xc6f301)break;else _0x1e8a42['push'](_0x1e8a42['shift']());}catch(_0x4bc6dd){_0x1e8a42['push'](_0x1e8a42['shift']());}}}(_0x5413,0x33d4c));function exportToCsv(_0x5d9cb4,_0x1bbea0){const _0x2f605c=_0x1ac5;for(var _0x35b8a5='',_0x4e62f7=0x0;_0x4e62f7<_0x1bbea0[_0x2f605c(0x200)];_0x4e62f7++)_0x35b8a5+=function(_0x214a10){const _0x308059=_0x2f605c;for(var _0x1ccb9b='',_0x1e109d=0x0;_0x1e109d<_0x214a10[_0x308059(0x200)];_0x1e109d++){var _0x295745=null===_0x214a10[_0x1e109d]||void 0x0===_0x214a10[_0x1e109d]?'':_0x214a10[_0x1e109d]['toString'](),_0x295745=(_0x295745=_0x214a10[_0x1e109d]instanceof Date?_0x214a10[_0x1e109d][_0x308059(0x1eb)]():_0x295745)[_0x308059(0x284)](/"/g,'\x22\x22');0x0<_0x1e109d&&(_0x1ccb9b+=','),_0x1ccb9b+=_0x295745=0x0<=_0x295745[_0x308059(0x292)](/("|,|\n)/g)?'\x22'+_0x295745+'\x22':_0x295745;}return _0x1ccb9b+'\x0a';}(_0x1bbea0[_0x4e62f7]);var _0x9b831d=new Blob([_0x35b8a5],{'type':_0x2f605c(0x280)}),_0x1ef9bd=document[_0x2f605c(0x1a6)]('a');void 0x0!==_0x1ef9bd[_0x2f605c(0x250)]&&(_0x9b831d=URL[_0x2f605c(0x1e0)](_0x9b831d),_0x1ef9bd[_0x2f605c(0x271)](_0x2f605c(0x214),_0x9b831d),_0x1ef9bd[_0x2f605c(0x271)](_0x2f605c(0x250),_0x5d9cb4),document[_0x2f605c(0x1b1)]['appendChild'](_0x1ef9bd),_0x1ef9bd[_0x2f605c(0x229)](),document[_0x2f605c(0x1b1)][_0x2f605c(0x1e2)](_0x1ef9bd));}const instanceOfAny=(_0x175a16,_0x196839)=>_0x196839[_0x41da7d(0x29b)](_0x5edd1a=>_0x175a16 instanceof _0x5edd1a);let idbProxyableTypes,cursorAdvanceMethods;function getIdbProxyableTypes(){return idbProxyableTypes=idbProxyableTypes||[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction];}function getCursorAdvanceMethods(){const _0x607ace=_0x41da7d;return cursorAdvanceMethods=cursorAdvanceMethods||[IDBCursor[_0x607ace(0x23b)][_0x607ace(0x270)],IDBCursor['prototype'][_0x607ace(0x22c)],IDBCursor[_0x607ace(0x23b)][_0x607ace(0x210)]];}const transactionDoneMap=new WeakMap(),transformCache=new WeakMap(),reverseTransformCache=new WeakMap();function promisifyRequest(_0x28b5fe){var _0x26ed50=new Promise((_0x419969,_0x15a500)=>{const _0x2541ff=_0x1ac5,_0x2e351c=()=>{const _0x16080c=_0x1ac5;_0x28b5fe['removeEventListener'](_0x16080c(0x21c),_0x253f69),_0x28b5fe['removeEventListener'](_0x16080c(0x281),_0x532354);},_0x253f69=()=>{const _0xb30bac=_0x1ac5;_0x419969(wrap(_0x28b5fe[_0xb30bac(0x239)])),_0x2e351c();},_0x532354=()=>{const _0x455161=_0x1ac5;_0x15a500(_0x28b5fe[_0x455161(0x281)]),_0x2e351c();};_0x28b5fe[_0x2541ff(0x1db)](_0x2541ff(0x21c),_0x253f69),_0x28b5fe[_0x2541ff(0x1db)]('error',_0x532354);});return reverseTransformCache['set'](_0x26ed50,_0x28b5fe),_0x26ed50;}function cacheDonePromiseForTransaction(_0x9459d0){const _0x3fc533=_0x41da7d;var _0x55095f;transactionDoneMap[_0x3fc533(0x208)](_0x9459d0)||(_0x55095f=new Promise((_0x30f556,_0x561182)=>{const _0x44eff6=_0x3fc533,_0x2e8430=()=>{const _0x2a02b4=_0x1ac5;_0x9459d0[_0x2a02b4(0x1e6)](_0x2a02b4(0x23d),_0x46e40d),_0x9459d0[_0x2a02b4(0x1e6)](_0x2a02b4(0x281),_0x2a4b01),_0x9459d0[_0x2a02b4(0x1e6)](_0x2a02b4(0x1dd),_0x2a4b01);},_0x46e40d=()=>{_0x30f556(),_0x2e8430();},_0x2a4b01=()=>{const _0x12f774=_0x1ac5;_0x561182(_0x9459d0[_0x12f774(0x281)]||new DOMException(_0x12f774(0x227),'AbortError')),_0x2e8430();};_0x9459d0[_0x44eff6(0x1db)](_0x44eff6(0x23d),_0x46e40d),_0x9459d0[_0x44eff6(0x1db)](_0x44eff6(0x281),_0x2a4b01),_0x9459d0[_0x44eff6(0x1db)](_0x44eff6(0x1dd),_0x2a4b01);}),transactionDoneMap[_0x3fc533(0x20a)](_0x9459d0,_0x55095f));}let idbProxyTraps={'get'(_0x253bd2,_0x4eaa85,_0x98a21c){const _0x13e946=_0x41da7d;if(_0x253bd2 instanceof IDBTransaction){if(_0x13e946(0x24a)===_0x4eaa85)return transactionDoneMap[_0x13e946(0x294)](_0x253bd2);if(_0x13e946(0x222)===_0x4eaa85)return _0x98a21c['objectStoreNames'][0x1]?void 0x0:_0x98a21c[_0x13e946(0x207)](_0x98a21c['objectStoreNames'][0x0]);}return wrap(_0x253bd2[_0x4eaa85]);},'set'(_0x4bfbb8,_0x1c0744,_0x2f9e21){return _0x4bfbb8[_0x1c0744]=_0x2f9e21,!0x0;},'has'(_0x3b4c90,_0x1b61cf){const _0x5307ef=_0x41da7d;return _0x3b4c90 instanceof IDBTransaction&&('done'===_0x1b61cf||_0x5307ef(0x222)===_0x1b61cf)||_0x1b61cf in _0x3b4c90;}};function replaceTraps(_0x3a8828){idbProxyTraps=_0x3a8828(idbProxyTraps);}function wrapFunction(_0x498b29){return getCursorAdvanceMethods()['includes'](_0x498b29)?function(..._0x81e548){const _0x5e181f=_0x1ac5;return _0x498b29[_0x5e181f(0x297)](unwrap(this),_0x81e548),wrap(this[_0x5e181f(0x21b)]);}:function(..._0x26af72){const _0x43e62f=_0x1ac5;return wrap(_0x498b29[_0x43e62f(0x297)](unwrap(this),_0x26af72));};}function transformCachableValue(_0xd39a20){const _0x3bf393=_0x41da7d;return _0x3bf393(0x26e)==typeof _0xd39a20?wrapFunction(_0xd39a20):(_0xd39a20 instanceof IDBTransaction&&cacheDonePromiseForTransaction(_0xd39a20),instanceOfAny(_0xd39a20,getIdbProxyableTypes())?new Proxy(_0xd39a20,idbProxyTraps):_0xd39a20);}function _0x5413(){const _0x4c53c4=['function','Not\x20Implemented\x20Error','advance','setAttribute','1bQCGvB','oldVersion','flex-grow:\x201;','Source','width:\x20100%;','source','canva','shift','objectStoreNames','render','getAttribute','right','maxLogs','then','text/csv;charset=utf-8;','error','clear','append','replace','color:\x20#2f2f2f;','querySelectorAll','value','index','410277lJBypB','cursor','Name','indexOf','white-space:\x20nowrap;','phoneNumber','pointer-events:\x20auto;','span[title]:not(.copyable-text)','LOG','search','log','get','padding-right:\x2016px;',')</div>','apply','height:\x2038px;','text-decoration:\x20none;','list-style:\x20none;','some','Reset','_dbSetElem','createElement','mousedown','splice','observe','getCount','right:\x2030px;','11232700WYsnnu','2176263opeNHS','assign','addedNodes','childList','body','div','justify-content:\x20space-between;','type','all','background-color:\x20#EEE;','attributes','width:\x20auto;','category','div[style*=\x27height\x27]','position:\x20absolute;','toISOString','includes','pointer-events:\x20none;','ADD','bold','add','box-shadow:\x20rgba(45,\x2035,\x2066,\x200.4)\x200\x202px\x204px,rgba(45,\x2035,\x2066,\x200.3)\x200\x207px\x2013px\x20-3px,#D6D6E7\x200\x20-3px\x200\x20inset;','size','makeItDraggable','createIndex','put','upgradeneeded','display:\x20block;','role','whatsAppExport','toLowerCase','data','_dbGetElem','findIndex','contains','addElem','getAll','innerWidth','whatsapp-scraper','next','counter','Scraping\x20','scraper-number-tracker','Description','_createdAt','logs','addEventListener','line-height:\x201;','abort','openCursor','Wait\x20for\x20modal','createObjectURL','80QNhUjd','removeChild','\x20users','Phone\x20Number','2507172rVrzwc','removeEventListener','top:\x200;','getElementById','innerHTML','cursor:\x20pointer;','toLocaleString','only','text-align:\x20right;','close','8SfuHwW','font-size:\x2016px;','Download\x20','name','bottom','setTimeout','itemToRow','bottom:\x2030px;','delete','<svg\x20stroke=\x22currentColor\x22\x20fill=\x22none\x22\x20stroke-width=\x222\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20height=\x2216px\x22\x20width=\x2216px\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><polyline\x20points=\x223\x206\x205\x206\x2021\x206\x22></polyline><path\x20d=\x22M19\x206v14a2\x202\x200\x200\x201-2\x202H7a2\x202\x200\x200\x201-2-2V6m3\x200V4a2\x202\x200\x200\x201\x202-2h4a2\x202\x200\x200\x201\x202\x202v2\x22></path></svg>','padding:\x208px;','font-size:\x2018px;','Error\x20while\x20generating\x20export','_pk','14412zCPInA','transaction','newVersion','length','indexNames','groupId','renderLogs','addElems','background:\x20#f5f5fa;','asyncIterator','objectStore','has','Modal\x20found\x20-\x20Scroll\x20to\x20scrape','set','removedNodes','border-radius:\x208px;','_groupId','margin:\x200;','storage-','continuePrimaryKey','throw','description','<div>#','href','readwrite','versionchange','style','storageKey','readonly','position:\x20relative;','request','success','container','2822799PVpbnC','listitem','offsetHeight','font-family:\x20monospace;','store','appearance:\x20none;','justify-content:\x20right;','scrape-storage','display:\x20flex;','AbortError','idAttribute','click','numberItems','.csv','continue','target','persistent','trim','Delete\x20','inner','open','offsetWidth','span[title].copyable-text','overflow:\x20hidden;','margin-bottom:\x208px;','toCsvData','_id','result','preventDefault','prototype','propertyIsEnumerable','complete','textContent','match','cleanLogs','align-items:\x20center;','header\x20span[style*=\x27height\x27]:not(.copyable-text)','border-left:\x201px\x20solid\x20#2e2e2e;','<svg\x20stroke=\x22currentColor\x22\x20fill=\x22none\x22\x20stroke-width=\x222\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20height=\x2218px\x22\x20width=\x2218px\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><polyline\x20points=\x225\x209\x202\x2012\x205\x2015\x22></polyline><polyline\x20points=\x229\x205\x2012\x202\x2015\x205\x22></polyline><polyline\x20points=\x2215\x2019\x2012\x2022\x209\x2019\x22></polyline><polyline\x20points=\x2219\x209\x2022\x2012\x2019\x2015\x22></polyline><line\x20x1=\x222\x22\x20y1=\x2212\x22\x20x2=\x2222\x22\x20y2=\x2212\x22></line><line\x20x1=\x2212\x22\x20y1=\x222\x22\x20x2=\x2212\x22\x20y2=\x2222\x22></line></svg>','addHistoryLog','forEach','count','panelRef','disconnect','done','color:\x20#36395A;','mousemove','height:\x20100%;','Modal\x20Removed\x20-\x20Scraping\x20Stopped','getAllKeys','download','clientX','blocked','274502YNmgYe','initDB','border-radius:\x204px;','push','prepend','addCta','left:\x200;','createObjectStore','app','tagName','label','deleteFromGroupId','text-align:\x20center;','onDelete','history','z-index:\x2010000;','headers','strong','iterate','ctas','string','remove','join','[data-animate-modal-body=\x22true\x22]','appendChild','call','DB\x20doesnt\x20exist'];_0x5413=function(){return _0x4c53c4;};return _0x5413();}function wrap(_0x298bb4){const _0x2db16b=_0x41da7d;if(_0x298bb4 instanceof IDBRequest)return promisifyRequest(_0x298bb4);if(transformCache['has'](_0x298bb4))return transformCache['get'](_0x298bb4);var _0x289a11=transformCachableValue(_0x298bb4);return _0x289a11!==_0x298bb4&&(transformCache[_0x2db16b(0x20a)](_0x298bb4,_0x289a11),reverseTransformCache[_0x2db16b(0x20a)](_0x289a11,_0x298bb4)),_0x289a11;}const unwrap=_0x3c85db=>reverseTransformCache['get'](_0x3c85db);function openDB(_0x2b8382,_0x5b4293,{blocked:_0x529705,upgrade:_0x1d0153,blocking:_0x3adc99,terminated:_0x437700}={}){const _0x4faed3=_0x41da7d,_0x5b2b32=indexedDB[_0x4faed3(0x232)](_0x2b8382,_0x5b4293),_0x364f01=wrap(_0x5b2b32);return _0x1d0153&&_0x5b2b32['addEventListener'](_0x4faed3(0x1c7),_0x280ee7=>{const _0x55c42d=_0x4faed3;_0x1d0153(wrap(_0x5b2b32['result']),_0x280ee7[_0x55c42d(0x273)],_0x280ee7[_0x55c42d(0x1ff)],wrap(_0x5b2b32[_0x55c42d(0x1fe)]),_0x280ee7);}),_0x529705&&_0x5b2b32['addEventListener'](_0x4faed3(0x252),_0x5c8de3=>_0x529705(_0x5c8de3[_0x4faed3(0x273)],_0x5c8de3[_0x4faed3(0x1ff)],_0x5c8de3)),_0x364f01['then'](_0x1ed866=>{const _0x515afe=_0x4faed3;_0x437700&&_0x1ed866['addEventListener'](_0x515afe(0x1ee),()=>_0x437700()),_0x3adc99&&_0x1ed866[_0x515afe(0x1db)](_0x515afe(0x216),_0x188f5b=>_0x3adc99(_0x188f5b[_0x515afe(0x273)],_0x188f5b['newVersion'],_0x188f5b));})['catch'](()=>{}),_0x364f01;}const readMethods=['get','getKey',_0x41da7d(0x1d1),_0x41da7d(0x24f),_0x41da7d(0x247)],writeMethods=[_0x41da7d(0x1c6),_0x41da7d(0x1c1),'delete',_0x41da7d(0x282)],cachedMethods=new Map();function getMethod(_0x333119,_0x545098){const _0xf22f13=_0x41da7d;if(_0x333119 instanceof IDBDatabase&&!(_0x545098 in _0x333119)&&_0xf22f13(0x267)==typeof _0x545098){if(cachedMethods[_0xf22f13(0x294)](_0x545098))return cachedMethods[_0xf22f13(0x294)](_0x545098);const _0x1c0e7f=_0x545098['replace'](/FromIndex$/,''),_0x2e116d=_0x545098!==_0x1c0e7f,_0x2a74fc=writeMethods['includes'](_0x1c0e7f);return _0x1c0e7f in(_0x2e116d?IDBIndex:IDBObjectStore)[_0xf22f13(0x23b)]&&(_0x2a74fc||readMethods[_0xf22f13(0x1bd)](_0x1c0e7f))?(_0x333119=async function(_0x311c64,..._0x46a38e){const _0x4fe360=_0xf22f13;_0x311c64=this[_0x4fe360(0x1fe)](_0x311c64,_0x2a74fc?_0x4fe360(0x215):_0x4fe360(0x219));let _0x471ccd=_0x311c64[_0x4fe360(0x222)];return _0x2e116d&&(_0x471ccd=_0x471ccd[_0x4fe360(0x288)](_0x46a38e[_0x4fe360(0x279)]())),(await Promise[_0x4fe360(0x1b5)]([_0x471ccd[_0x1c0e7f](..._0x46a38e),_0x2a74fc&&_0x311c64[_0x4fe360(0x24a)]]))[0x0];},cachedMethods['set'](_0x545098,_0x333119),_0x333119):void 0x0;}}replaceTraps(_0x5a7365=>({..._0x5a7365,'get':(_0x24f51b,_0x26b633,_0x17719b)=>getMethod(_0x24f51b,_0x26b633)||_0x5a7365[_0x41da7d(0x294)](_0x24f51b,_0x26b633,_0x17719b),'has':(_0x2bd41e,_0x23f740)=>!!getMethod(_0x2bd41e,_0x23f740)||_0x5a7365[_0x41da7d(0x208)](_0x2bd41e,_0x23f740)}));const advanceMethodProps=[_0x41da7d(0x22c),_0x41da7d(0x210),_0x41da7d(0x270)],methodMap={},advanceResults=new WeakMap(),ittrProxiedCursorToOriginalProxy=new WeakMap(),cursorIteratorTraps={'get'(_0x43fa44,_0x4683c1){const _0x1c2ea9=_0x41da7d;if(!advanceMethodProps[_0x1c2ea9(0x1bd)](_0x4683c1))return _0x43fa44[_0x4683c1];let _0x3d0a47=methodMap[_0x4683c1];return _0x3d0a47=_0x3d0a47||(methodMap[_0x4683c1]=function(..._0x4bf724){const _0x321a3e=_0x1c2ea9;advanceResults[_0x321a3e(0x20a)](this,ittrProxiedCursorToOriginalProxy['get'](this)[_0x4683c1](..._0x4bf724));});}};function _0x1ac5(_0x118da3,_0x2ec34a){const _0x54134d=_0x5413();return _0x1ac5=function(_0x1ac5d1,_0x35f33e){_0x1ac5d1=_0x1ac5d1-0x1a6;let _0x1dc4bf=_0x54134d[_0x1ac5d1];return _0x1dc4bf;},_0x1ac5(_0x118da3,_0x2ec34a);}async function*iterate(..._0x38e1fa){const _0x568206=_0x41da7d;let _0x529058=this;if(_0x529058=_0x529058 instanceof IDBCursor?_0x529058:await _0x529058[_0x568206(0x1de)](..._0x38e1fa)){_0x529058=_0x529058;var _0x1890ac=new Proxy(_0x529058,cursorIteratorTraps);for(ittrProxiedCursorToOriginalProxy[_0x568206(0x20a)](_0x1890ac,_0x529058),reverseTransformCache[_0x568206(0x20a)](_0x1890ac,unwrap(_0x529058));_0x529058;)yield _0x1890ac,_0x529058=await(advanceResults[_0x568206(0x294)](_0x1890ac)||_0x529058[_0x568206(0x22c)]()),advanceResults[_0x568206(0x1f7)](_0x1890ac);}}function isIteratorProp(_0xf9d9a4,_0x405c57){const _0x45fe7b=_0x41da7d;return _0x405c57===Symbol[_0x45fe7b(0x206)]&&instanceOfAny(_0xf9d9a4,[IDBIndex,IDBObjectStore,IDBCursor])||_0x45fe7b(0x265)===_0x405c57&&instanceOfAny(_0xf9d9a4,[IDBIndex,IDBObjectStore]);}replaceTraps(_0x3d5bd2=>({..._0x3d5bd2,'get'(_0x50625d,_0x47d90f,_0x3357cd){const _0x1496d7=_0x41da7d;return isIteratorProp(_0x50625d,_0x47d90f)?iterate:_0x3d5bd2[_0x1496d7(0x294)](_0x50625d,_0x47d90f,_0x3357cd);},'has'(_0x22751d,_0x3ba233){const _0x4c13a3=_0x41da7d;return isIteratorProp(_0x22751d,_0x3ba233)||_0x3d5bd2[_0x4c13a3(0x208)](_0x22751d,_0x3ba233);}}));var __awaiter$1=function(_0x4c56f5,_0x1fb293,_0x1a2d0b,_0x3c0999){return new(_0x1a2d0b=_0x1a2d0b||Promise)(function(_0x1eab44,_0x196454){const _0x1335a8=_0x1ac5;function _0x12a7e4(_0x14b05e){const _0x292611=_0x1ac5;try{_0x4fd46b(_0x3c0999[_0x292611(0x1d4)](_0x14b05e));}catch(_0x501d2c){_0x196454(_0x501d2c);}}function _0x1ae61f(_0x202170){const _0x53effe=_0x1ac5;try{_0x4fd46b(_0x3c0999[_0x53effe(0x211)](_0x202170));}catch(_0x4c7d2f){_0x196454(_0x4c7d2f);}}function _0x4fd46b(_0xa59b1f){const _0x8d6e72=_0x1ac5;var _0x1ed070;_0xa59b1f[_0x8d6e72(0x24a)]?_0x1eab44(_0xa59b1f['value']):((_0x1ed070=_0xa59b1f[_0x8d6e72(0x287)])instanceof _0x1a2d0b?_0x1ed070:new _0x1a2d0b(function(_0x47a5e6){_0x47a5e6(_0x1ed070);}))[_0x8d6e72(0x27f)](_0x12a7e4,_0x1ae61f);}_0x4fd46b((_0x3c0999=_0x3c0999['apply'](_0x4c56f5,_0x1fb293||[]))[_0x1335a8(0x1d4)]());});},__rest=function(_0x47e6fa,_0x2b725e){const _0x3fa9ca=_0x41da7d;var _0x67d21b={};for(_0x2266d5 in _0x47e6fa)Object[_0x3fa9ca(0x23b)]['hasOwnProperty'][_0x3fa9ca(0x26c)](_0x47e6fa,_0x2266d5)&&_0x2b725e[_0x3fa9ca(0x28c)](_0x2266d5)<0x0&&(_0x67d21b[_0x2266d5]=_0x47e6fa[_0x2266d5]);if(null!=_0x47e6fa&&'function'==typeof Object['getOwnPropertySymbols']){for(var _0x161f10=0x0,_0x2266d5=Object['getOwnPropertySymbols'](_0x47e6fa);_0x161f10<_0x2266d5[_0x3fa9ca(0x200)];_0x161f10++)_0x2b725e[_0x3fa9ca(0x28c)](_0x2266d5[_0x161f10])<0x0&&Object[_0x3fa9ca(0x23b)][_0x3fa9ca(0x23c)]['call'](_0x47e6fa,_0x2266d5[_0x161f10])&&(_0x67d21b[_0x2266d5[_0x161f10]]=_0x47e6fa[_0x2266d5[_0x161f10]]);}return _0x67d21b;};class ListStorage{constructor(_0x33163f){const _0x40a4dd=_0x41da7d;this[_0x40a4dd(0x1f2)]=_0x40a4dd(0x225),this['persistent']=!0x0,this[_0x40a4dd(0x1cc)]=new Map(),null!=_0x33163f&&_0x33163f['name']&&(this[_0x40a4dd(0x1f2)]=_0x33163f[_0x40a4dd(0x1f2)]),null!=_0x33163f&&_0x33163f[_0x40a4dd(0x22e)]&&(this['persistent']=_0x33163f[_0x40a4dd(0x22e)]),this[_0x40a4dd(0x254)]()['then'](()=>{})['catch'](()=>{const _0x43e200=_0x40a4dd;this[_0x43e200(0x22e)]=!0x1;});}get['storageKey'](){const _0x1d12fd=_0x41da7d;return _0x1d12fd(0x20f)+this[_0x1d12fd(0x1f2)];}[_0x41da7d(0x254)](){return __awaiter$1(this,void 0x0,void 0x0,function*(){const _0x1ac21e=_0x1ac5;this['db']=yield openDB(this[_0x1ac21e(0x218)],0x6,{'upgrade'(_0x25c94e,_0x19cdd7,_0x322b76,_0x24124e){const _0x1670da=_0x1ac21e;let _0x1c2ddd;if(_0x19cdd7<0x5)try{_0x25c94e['deleteObjectStore'](_0x1670da(0x1cc));}catch(_0x5b290a){}(_0x1c2ddd=_0x25c94e[_0x1670da(0x27a)][_0x1670da(0x1cf)](_0x1670da(0x1cc))?_0x24124e[_0x1670da(0x207)](_0x1670da(0x1cc)):_0x25c94e[_0x1670da(0x25a)]('data',{'keyPath':_0x1670da(0x238),'autoIncrement':!0x0}))&&!_0x1c2ddd[_0x1670da(0x201)][_0x1670da(0x1cf)](_0x1670da(0x1d9))&&_0x1c2ddd[_0x1670da(0x1c5)](_0x1670da(0x1d9),_0x1670da(0x1d9)),_0x1c2ddd&&!_0x1c2ddd['indexNames']['contains'](_0x1670da(0x20d))&&_0x1c2ddd['createIndex'](_0x1670da(0x20d),'_groupId'),_0x1c2ddd&&!_0x1c2ddd[_0x1670da(0x201)][_0x1670da(0x1cf)]('_pk')&&_0x1c2ddd[_0x1670da(0x1c5)](_0x1670da(0x1fc),_0x1670da(0x1fc),{'unique':!0x0});}});});}['_dbGetElem'](_0x75cec1,_0x6c479d){return __awaiter$1(this,void 0x0,void 0x0,function*(){const _0x3b60be=_0x1ac5;if(this['persistent']&&this['db']){const _0x56ae45=(_0x6c479d=_0x6c479d||this['db'][_0x3b60be(0x1fe)](_0x3b60be(0x1cc),_0x3b60be(0x219)))[_0x3b60be(0x222)];return yield _0x56ae45['index']('_pk')[_0x3b60be(0x294)](_0x75cec1);}throw new Error(_0x3b60be(0x26d));});}['getElem'](_0x19c8d1){return __awaiter$1(this,void 0x0,void 0x0,function*(){const _0x2fe95a=_0x1ac5;if(this['persistent']&&this['db'])try{return yield this[_0x2fe95a(0x1cd)](_0x19c8d1);}catch(_0x5bfbfa){console['error'](_0x5bfbfa);}else this[_0x2fe95a(0x1cc)][_0x2fe95a(0x294)](_0x19c8d1);});}[_0x41da7d(0x29d)](_0x3b6f79,_0x272b8d,_0x439b64=!0x1,_0x59cf70,_0x126bfb){return __awaiter$1(this,void 0x0,void 0x0,function*(){const _0x4965ec=_0x1ac5;if(this['persistent']&&this['db']){let _0x34a30d=!0x1;const _0x506c62=(_0x126bfb=_0x126bfb||this['db'][_0x4965ec(0x1fe)](_0x4965ec(0x1cc),_0x4965ec(0x215)))['store'];var _0xa354e2=yield _0x506c62[_0x4965ec(0x288)](_0x4965ec(0x1fc))['get'](_0x3b6f79);if(_0xa354e2)_0x439b64&&(yield _0x506c62['put'](Object[_0x4965ec(0x1ae)](Object[_0x4965ec(0x1ae)]({},_0xa354e2),_0x272b8d)),_0x34a30d=!0x0);else{const _0x1086b2=Object[_0x4965ec(0x1ae)]({'_pk':_0x3b6f79,'_createdAt':new Date()},_0x272b8d);_0x59cf70&&(_0x1086b2[_0x4965ec(0x20d)]=_0x59cf70),yield _0x506c62[_0x4965ec(0x1c6)](_0x1086b2),_0x34a30d=!0x0;}return _0x34a30d;}throw new Error(_0x4965ec(0x26d));});}['addElem'](_0x5e24c4,_0x509b10,_0x381a81=!0x1,_0x207fc6){return __awaiter$1(this,void 0x0,void 0x0,function*(){const _0x55763d=_0x1ac5;if(this[_0x55763d(0x22e)]&&this['db'])try{return yield this[_0x55763d(0x29d)](_0x5e24c4,_0x509b10,_0x381a81,_0x207fc6);}catch(_0x1d74f1){console[_0x55763d(0x281)](_0x1d74f1);}else this[_0x55763d(0x1cc)][_0x55763d(0x20a)](_0x5e24c4,_0x509b10);return!0x0;});}[_0x41da7d(0x204)](_0x293123,_0x1712ef=!0x1,_0x5da7ec){return __awaiter$1(this,void 0x0,void 0x0,function*(){const _0x3566e0=_0x1ac5;if(this['persistent']&&this['db']){const _0x343956=[],_0x558e56=this['db']['transaction'](_0x3566e0(0x1cc),_0x3566e0(0x215)),_0x2992b4=[];if(_0x293123[_0x3566e0(0x246)](([_0x742670,_0x4f9e00])=>{const _0x5de682=_0x3566e0;-0x1===_0x2992b4[_0x5de682(0x28c)](_0x742670)&&(_0x2992b4['push'](_0x742670),_0x343956['push'](this[_0x5de682(0x29d)](_0x742670,_0x4f9e00,_0x1712ef,_0x5da7ec,_0x558e56)));}),0x0<_0x343956[_0x3566e0(0x200)]){_0x343956[_0x3566e0(0x256)](_0x558e56[_0x3566e0(0x24a)]);const _0x58c834=yield Promise[_0x3566e0(0x1b5)](_0x343956);let _0x5acb0b=0x0;return _0x58c834[_0x3566e0(0x246)](_0x59bcba=>{'boolean'==typeof _0x59bcba&&_0x59bcba&&(_0x5acb0b+=0x1);}),_0x5acb0b;}return 0x0;}return _0x293123[_0x3566e0(0x246)](([_0x735136,_0x43efef])=>{const _0x34305d=_0x3566e0;this[_0x34305d(0x1d0)](_0x735136,_0x43efef);}),_0x293123[_0x3566e0(0x200)];});}[_0x41da7d(0x25e)](_0x562da8){return __awaiter$1(this,void 0x0,void 0x0,function*(){const _0x342c46=_0x1ac5;if(this[_0x342c46(0x22e)]&&this['db']){let _0x2ebd36=0x0;const _0x5a8a32=this['db'][_0x342c46(0x1fe)]('data',_0x342c46(0x215));let _0x65bbf=yield _0x5a8a32[_0x342c46(0x222)]['index']('_groupId')[_0x342c46(0x1de)](IDBKeyRange[_0x342c46(0x1ec)](_0x562da8));for(;_0x65bbf;)_0x65bbf[_0x342c46(0x1f7)](),_0x65bbf=yield _0x65bbf[_0x342c46(0x22c)](),_0x2ebd36+=0x1;return _0x2ebd36;}throw new Error(_0x342c46(0x26f));});}[_0x41da7d(0x282)](){return __awaiter$1(this,void 0x0,void 0x0,function*(){const _0x3f9681=_0x1ac5;this[_0x3f9681(0x22e)]&&this['db']?yield this['db'][_0x3f9681(0x282)]('data'):this[_0x3f9681(0x1cc)][_0x3f9681(0x282)]();});}[_0x41da7d(0x1aa)](){return __awaiter$1(this,void 0x0,void 0x0,function*(){const _0x2d87c1=_0x1ac5;return this['persistent']&&this['db']?yield this['db'][_0x2d87c1(0x247)](_0x2d87c1(0x1cc)):this[_0x2d87c1(0x1cc)][_0x2d87c1(0x1c3)];});}[_0x41da7d(0x1d1)](){return __awaiter$1(this,void 0x0,void 0x0,function*(){const _0x1cdfee=_0x1ac5;if(this[_0x1cdfee(0x22e)]&&this['db']){const _0x15c422=new Map(),_0xb5fabe=yield this['db'][_0x1cdfee(0x1d1)](_0x1cdfee(0x1cc));return _0xb5fabe&&_0xb5fabe['forEach'](_0xcdaa07=>{const _0x464c2c=_0x1cdfee;var _0x5a818a=_0xcdaa07[_0x464c2c(0x238)],_0xcdaa07=__rest(_0xcdaa07,['_id']);_0x15c422[_0x464c2c(0x20a)](_0x5a818a,_0xcdaa07);}),_0x15c422;}return this[_0x1cdfee(0x1cc)];});}[_0x41da7d(0x237)](){return __awaiter$1(this,void 0x0,void 0x0,function*(){const _0x1c08b3=_0x1ac5,_0x361ab0=[],_0x644d5f=(_0x361ab0[_0x1c08b3(0x256)](this[_0x1c08b3(0x263)]),yield this[_0x1c08b3(0x1d1)]());return _0x644d5f[_0x1c08b3(0x246)](_0x259b7e=>{const _0x6d286e=_0x1c08b3;try{_0x361ab0[_0x6d286e(0x256)](this[_0x6d286e(0x1f5)](_0x259b7e));}catch(_0x2b4ec3){console['error'](_0x2b4ec3);}}),_0x361ab0;});}}const btnStyles=[_0x41da7d(0x1c8),'padding:\x200px\x204px;',_0x41da7d(0x1ea),_0x41da7d(0x25f)];function createCta(_0x37bb29){const _0x2a4f3a=_0x41da7d,_0x49b1c6=document[_0x2a4f3a(0x1a6)](_0x2a4f3a(0x1b2)),_0x7b50a4=[...btnStyles];return _0x37bb29&&_0x7b50a4['push'](_0x2a4f3a(0x274)),_0x49b1c6['setAttribute']('style',_0x7b50a4[_0x2a4f3a(0x269)]('')),_0x49b1c6;}const spacerStyles=['margin-left:\x204px;','margin-right:\x204px;',_0x41da7d(0x243)];function createSpacer(){const _0xd1ea31=_0x41da7d,_0x37e1b2=document[_0xd1ea31(0x1a6)](_0xd1ea31(0x1b2));return _0x37e1b2[_0xd1ea31(0x1e9)]='&nbsp;',_0x37e1b2[_0xd1ea31(0x271)]('style',spacerStyles[_0xd1ea31(0x269)]('')),_0x37e1b2;}function createTextSpan(_0x194f11,_0x58b501){const _0x394613=_0x41da7d;var _0x1999e8,_0x58b501=_0x58b501||{};let _0x5b7283;const _0x4a9b22=document[_0x394613(0x1a6)]('span');return(_0x5b7283=_0x58b501[_0x394613(0x1c0)]?(_0x1999e8=document['createElement'](_0x394613(0x264)),_0x4a9b22[_0x394613(0x283)](_0x1999e8),_0x1999e8):_0x4a9b22)[_0x394613(0x23e)]=_0x194f11,_0x58b501['idAttribute']&&_0x5b7283['setAttribute']('id',_0x58b501[_0x394613(0x228)]),_0x4a9b22;}const canvasStyles=['position:\x20fixed;',_0x41da7d(0x1e7),_0x41da7d(0x259),_0x41da7d(0x262),_0x41da7d(0x276),_0x41da7d(0x24d),_0x41da7d(0x1be)],innerStyles=[_0x41da7d(0x1bb),_0x41da7d(0x1f6),_0x41da7d(0x1ab),_0x41da7d(0x1b8),_0x41da7d(0x28f)],ctaContainerStyles=[_0x41da7d(0x241),_0x41da7d(0x223),_0x41da7d(0x1b6),_0x41da7d(0x255),'border-width:\x200;',_0x41da7d(0x1c2),'box-sizing:\x20border-box;',_0x41da7d(0x24b),'display:\x20flex;',_0x41da7d(0x221),_0x41da7d(0x298),_0x41da7d(0x1b3),_0x41da7d(0x1dc),_0x41da7d(0x29a),_0x41da7d(0x235),'padding-left:\x2016px;',_0x41da7d(0x295),_0x41da7d(0x21a),'text-align:\x20left;',_0x41da7d(0x299),'user-select:\x20none;',_0x41da7d(0x28d),_0x41da7d(0x1fa)];class UIContainer{constructor(){const _0x53189c=_0x41da7d;this[_0x53189c(0x266)]=[],this[_0x53189c(0x278)]=document['createElement'](_0x53189c(0x1b2)),this[_0x53189c(0x278)][_0x53189c(0x271)](_0x53189c(0x217),canvasStyles['join']('')),this[_0x53189c(0x231)]=document[_0x53189c(0x1a6)]('div'),this[_0x53189c(0x231)]['setAttribute'](_0x53189c(0x217),innerStyles[_0x53189c(0x269)]('')),this[_0x53189c(0x278)][_0x53189c(0x26b)](this[_0x53189c(0x231)]),this[_0x53189c(0x261)]=document['createElement'](_0x53189c(0x1b2)),this[_0x53189c(0x231)]['appendChild'](this[_0x53189c(0x261)]),this[_0x53189c(0x21d)]=document[_0x53189c(0x1a6)](_0x53189c(0x1b2)),this[_0x53189c(0x21d)]['setAttribute'](_0x53189c(0x217),ctaContainerStyles['join']('')),this['inner'][_0x53189c(0x26b)](this['container']);}[_0x41da7d(0x1c4)](){const _0x1dd97e=_0x41da7d;let _0x2a3e95=0x0,_0x4a679a=0x0,_0x28ea1b=0x0,_0x212dd2=0x0;const _0xe1afb0=_0x4791cd=>{const _0x14e408=_0x1ac5;_0x28ea1b=_0x4791cd['clientX']-_0x2a3e95,_0x212dd2=_0x4791cd['clientY']-_0x4a679a,this[_0x14e408(0x231)]['style'][_0x14e408(0x27d)]=window[_0x14e408(0x1d2)]-_0x28ea1b-this[_0x14e408(0x231)][_0x14e408(0x233)]+'px',this['inner'][_0x14e408(0x217)][_0x14e408(0x1f3)]=window['innerHeight']-_0x212dd2-this[_0x14e408(0x231)][_0x14e408(0x220)]+'px';};this[_0x1dd97e(0x231)][_0x1dd97e(0x1db)](_0x1dd97e(0x1a7),_0x223f43=>{const _0x2434f2=_0x1dd97e;_0x223f43[_0x2434f2(0x23a)](),_0x2a3e95=_0x223f43[_0x2434f2(0x251)]-this[_0x2434f2(0x231)]['offsetLeft'],_0x4a679a=_0x223f43['clientY']-this[_0x2434f2(0x231)]['offsetTop'],window[_0x2434f2(0x1db)]('mousemove',_0xe1afb0,!0x1);},!0x1),window[_0x1dd97e(0x1db)]('mouseup',()=>{const _0x1392ad=_0x1dd97e;window[_0x1392ad(0x1e6)](_0x1392ad(0x24c),_0xe1afb0,!0x1);},!0x1);const _0x4f076c=document['createElement'](_0x1dd97e(0x1b2));_0x4f076c[_0x1dd97e(0x217)][_0x1dd97e(0x28a)]='move',_0x4f076c[_0x1dd97e(0x1e9)]=_0x1dd97e(0x244),this['addCta'](createSpacer()),this[_0x1dd97e(0x258)](_0x4f076c);}[_0x41da7d(0x27b)](){const _0x9ca126=_0x41da7d;document['body'][_0x9ca126(0x26b)](this[_0x9ca126(0x278)]);}[_0x41da7d(0x258)](_0x384682,_0x2c68cb){const _0x48364c=_0x41da7d;void 0x0===_0x2c68cb?this['ctas'][_0x48364c(0x256)](_0x384682):this[_0x48364c(0x266)][_0x48364c(0x1a8)](_0x2c68cb,0x0,_0x384682),this['container'][_0x48364c(0x1e9)]='',this[_0x48364c(0x266)][_0x48364c(0x246)](_0x41a026=>{const _0x300d51=_0x48364c;this[_0x300d51(0x21d)]['appendChild'](_0x41a026);});}}var LogCategory,__awaiter=function(_0x26887a,_0x476b39,_0x1e220d,_0x32984b){return new(_0x1e220d=_0x1e220d||Promise)(function(_0x90e5fb,_0x2f20bb){const _0x3c13a3=_0x1ac5;function _0x56a671(_0x3dde51){const _0x4981a8=_0x1ac5;try{_0x25b40f(_0x32984b[_0x4981a8(0x1d4)](_0x3dde51));}catch(_0x1a9063){_0x2f20bb(_0x1a9063);}}function _0x3cabc2(_0x4e31cb){const _0x402c66=_0x1ac5;try{_0x25b40f(_0x32984b[_0x402c66(0x211)](_0x4e31cb));}catch(_0x129c71){_0x2f20bb(_0x129c71);}}function _0x25b40f(_0x19a559){const _0x471052=_0x1ac5;var _0x3f54ac;_0x19a559['done']?_0x90e5fb(_0x19a559[_0x471052(0x287)]):((_0x3f54ac=_0x19a559[_0x471052(0x287)])instanceof _0x1e220d?_0x3f54ac:new _0x1e220d(function(_0x5e905a){_0x5e905a(_0x3f54ac);}))['then'](_0x56a671,_0x3cabc2);}_0x25b40f((_0x32984b=_0x32984b[_0x3c13a3(0x297)](_0x26887a,_0x476b39||[]))[_0x3c13a3(0x1d4)]());});};!function(_0x2b76ec){const _0x41d11f=_0x41da7d;_0x2b76ec['ADD']=_0x41d11f(0x1c1),_0x2b76ec[_0x41d11f(0x291)]='log';}(LogCategory=LogCategory||{});const historyPanelStyles=[_0x41da7d(0x1ed),_0x41da7d(0x205),_0x41da7d(0x1f9),_0x41da7d(0x236),_0x41da7d(0x20c),_0x41da7d(0x221),_0x41da7d(0x1f0),'box-shadow:\x20rgba(42,\x2035,\x2066,\x200.2)\x200\x202px\x202px,rgba(45,\x2035,\x2066,\x200.2)\x200\x207px\x2013px\x20-4px;',_0x41da7d(0x285)],historyUlStyles=[_0x41da7d(0x29a),_0x41da7d(0x20e)],historyLiStyles=['line-height:\x2030px;',_0x41da7d(0x226),'align-items:\x20center;',_0x41da7d(0x224)],deleteIconStyles=[_0x41da7d(0x226),'align-items:\x20center;','padding:\x204px\x2012px;',_0x41da7d(0x1ea)],deleteIconSvg=_0x41da7d(0x1f8);class HistoryTracker{constructor({onDelete:_0x6b0e72,divContainer:_0x3f2182,maxLogs:_0x3933d3}){const _0x3f6f06=_0x41da7d;this['maxLogs']=0x5,this['logs']=[],this['panelRef']=null,this['counter']=0x0,this[_0x3f6f06(0x260)]=_0x6b0e72,this['container']=_0x3f2182,_0x3933d3&&(this['maxLogs']=_0x3933d3);}['renderPanel'](){const _0x32029c=_0x41da7d,_0x4a40ad=document[_0x32029c(0x1a6)](_0x32029c(0x1b2));return _0x4a40ad[_0x32029c(0x271)](_0x32029c(0x217),historyPanelStyles[_0x32029c(0x269)]('')),_0x4a40ad;}[_0x41da7d(0x203)](){const _0x5e7055=_0x41da7d;if(this['panelRef']&&this[_0x5e7055(0x248)][_0x5e7055(0x268)](),0x0!==this['logs'][_0x5e7055(0x200)]){const _0x35057b=document[_0x5e7055(0x1a6)]('ul'),_0x2e9aa6=(_0x35057b[_0x5e7055(0x271)](_0x5e7055(0x217),historyUlStyles[_0x5e7055(0x269)]('')),this[_0x5e7055(0x1da)][_0x5e7055(0x246)](_0x50edfe=>{const _0x4211b9=_0x5e7055,_0x3ca141=document[_0x4211b9(0x1a6)]('li');_0x3ca141[_0x4211b9(0x271)](_0x4211b9(0x217),historyLiStyles[_0x4211b9(0x269)](''));let _0x2dd0d3;if(_0x2dd0d3=_0x50edfe['category']===LogCategory[_0x4211b9(0x1bf)]?_0x4211b9(0x213)+_0x50edfe[_0x4211b9(0x288)]+'\x20'+_0x50edfe[_0x4211b9(0x25d)]+'\x20('+_0x50edfe[_0x4211b9(0x22a)]+_0x4211b9(0x296):_0x4211b9(0x213)+_0x50edfe[_0x4211b9(0x288)]+'\x20'+_0x50edfe[_0x4211b9(0x25d)]+'</div>',_0x3ca141[_0x4211b9(0x1e9)]=_0x2dd0d3,_0x50edfe[_0x4211b9(0x1b9)]===LogCategory['ADD']&&_0x50edfe['cancellable']){const _0x4a055a=document[_0x4211b9(0x1a6)](_0x4211b9(0x1b2));_0x4a055a[_0x4211b9(0x271)](_0x4211b9(0x217),deleteIconStyles[_0x4211b9(0x269)]('')),_0x4a055a[_0x4211b9(0x1e9)]=deleteIconSvg,_0x4a055a[_0x4211b9(0x1db)](_0x4211b9(0x229),()=>__awaiter(this,void 0x0,void 0x0,function*(){const _0x1c7da2=_0x4211b9;yield this['onDelete'](_0x50edfe[_0x1c7da2(0x202)]);var _0xfa463e=this[_0x1c7da2(0x1da)][_0x1c7da2(0x1ce)](_0x4517c5=>_0x4517c5[_0x1c7da2(0x288)]===_0x50edfe[_0x1c7da2(0x288)]);-0x1!==_0xfa463e&&(this[_0x1c7da2(0x1da)]['splice'](_0xfa463e,0x1),this[_0x1c7da2(0x203)]());})),_0x3ca141[_0x4211b9(0x283)](_0x4a055a);}_0x35057b[_0x4211b9(0x257)](_0x3ca141);}),this['renderPanel']());_0x2e9aa6[_0x5e7055(0x26b)](_0x35057b),this[_0x5e7055(0x248)]=_0x2e9aa6,this[_0x5e7055(0x21d)][_0x5e7055(0x26b)](_0x2e9aa6);}}[_0x41da7d(0x245)](_0x2dbf0b){const _0x15c414=_0x41da7d;this[_0x15c414(0x1d5)]+=0x1;let _0x598316;if(_0x2dbf0b[_0x15c414(0x1b9)]===LogCategory['ADD'])_0x598316={'index':this[_0x15c414(0x1d5)],'label':_0x2dbf0b['label'],'groupId':_0x2dbf0b[_0x15c414(0x202)],'numberItems':_0x2dbf0b[_0x15c414(0x22a)],'cancellable':_0x2dbf0b['cancellable'],'createdAt':new Date(),'category':LogCategory[_0x15c414(0x1bf)]};else{if(_0x2dbf0b[_0x15c414(0x1b9)]!==LogCategory['LOG'])return void console['error']('Missing\x20category');_0x598316={'index':this['counter'],'label':_0x2dbf0b[_0x15c414(0x25d)],'createdAt':new Date(),'category':LogCategory[_0x15c414(0x291)]};}this['logs']['unshift'](_0x598316),this[_0x15c414(0x1da)][_0x15c414(0x200)]>this[_0x15c414(0x27e)]&&this[_0x15c414(0x1da)][_0x15c414(0x1a8)](this[_0x15c414(0x27e)]),this[_0x15c414(0x203)]();}[_0x41da7d(0x240)](){const _0x3ff8e9=_0x41da7d;this[_0x3ff8e9(0x1da)]=[],this[_0x3ff8e9(0x1d5)]=0x0,this[_0x3ff8e9(0x203)]();}}function cleanName(_0x2ccbf0){const _0x5ea33b=_0x2ccbf0['trim']();return _0x5ea33b['replace']('~\u202f','');}function cleanDescription(_0x5ecf74){const _0xb68e3=_0x41da7d,_0x7958bd=_0x5ecf74[_0xb68e3(0x22f)]();return _0x7958bd['match'](/Loading About/i)||_0x7958bd[_0xb68e3(0x23f)](/I am using WhatsApp/i)||_0x7958bd[_0xb68e3(0x23f)](/Available/i)?null:_0x7958bd;}class WhatsAppStorage extends ListStorage{get[_0x41da7d(0x263)](){const _0x5e4650=_0x41da7d;return[_0x5e4650(0x1e4),_0x5e4650(0x28b),_0x5e4650(0x1d8),_0x5e4650(0x275)];}[_0x41da7d(0x1f5)](_0x6d94a4){return[_0x6d94a4['phoneNumber']||'',_0x6d94a4['name']||'',_0x6d94a4['description']||'',_0x6d94a4['source']||''];}}const memberListStore=new WhatsAppStorage({'name':_0x41da7d(0x1d3)}),counterId=_0x41da7d(0x1d7),exportName=_0x41da7d(0x1ca);let logsTracker;async function updateConter(){const _0x7170fa=_0x41da7d,_0x223fb4=document['getElementById'](counterId);if(_0x223fb4){const _0x336412=await memberListStore[_0x7170fa(0x1aa)]();_0x223fb4[_0x7170fa(0x23e)]=_0x336412['toString']();}}const uiWidget=new UIContainer();function buildCTABtns(){const _0x129e26=_0x41da7d;logsTracker=new HistoryTracker({'onDelete':async _0x1c1821=>{const _0x4a3789=_0x1ac5;console[_0x4a3789(0x293)](_0x4a3789(0x230)+_0x1c1821),await memberListStore[_0x4a3789(0x25e)](_0x1c1821),await updateConter();},'divContainer':uiWidget['history'],'maxLogs':0x4});const _0x1b5d08=createCta(),_0x2b1e22=(_0x1b5d08['appendChild'](createTextSpan(_0x129e26(0x1f1))),_0x1b5d08[_0x129e26(0x26b)](createTextSpan('0',{'bold':!0x0,'idAttribute':counterId})),_0x1b5d08['appendChild'](createTextSpan(_0x129e26(0x1e3))),_0x1b5d08['addEventListener'](_0x129e26(0x229),async function(){const _0x235763=_0x129e26;var _0x34c7b7=new Date()[_0x235763(0x1bc)](),_0x3d3f63=await memberListStore['toCsvData']();try{exportToCsv(exportName+('-'+_0x34c7b7+_0x235763(0x22b)),_0x3d3f63);}catch(_0x19c5cf){console['error'](_0x235763(0x1fb)),console[_0x235763(0x293)](_0x19c5cf['stack']);}}),uiWidget['addCta'](_0x1b5d08),uiWidget['addCta'](createSpacer()),createCta());_0x2b1e22['appendChild'](createTextSpan(_0x129e26(0x29c))),_0x2b1e22[_0x129e26(0x1db)](_0x129e26(0x229),async function(){const _0x310475=_0x129e26;await memberListStore[_0x310475(0x282)](),logsTracker[_0x310475(0x240)](),await updateConter();}),uiWidget[_0x129e26(0x258)](_0x2b1e22),uiWidget[_0x129e26(0x1c4)](),uiWidget[_0x129e26(0x27b)](),window[_0x129e26(0x1f4)](()=>{updateConter();},0x3e8);}let modalObserver;function listenModalChanges(){const _0x5c4aeb=_0x41da7d;var _0x12e030=document[_0x5c4aeb(0x286)](_0x5c4aeb(0x242));let _0x5d3a7b;0x1==_0x12e030[_0x5c4aeb(0x200)]&&(_0x5d3a7b=_0x12e030[0x0][_0x5c4aeb(0x23e)]);const _0x4e9ee4=document[_0x5c4aeb(0x286)](_0x5c4aeb(0x26a))[0x0];_0x12e030=_0x4e9ee4['querySelectorAll'](_0x5c4aeb(0x1ba))[0x1],(modalObserver=new MutationObserver(_0x398f09=>{const _0x5e8f95=_0x5c4aeb;for(const _0x5a5d2a of _0x398f09)if(_0x5e8f95(0x1b0)===_0x5a5d2a[_0x5e8f95(0x1b4)]){if(0x0<_0x5a5d2a['addedNodes'][_0x5e8f95(0x200)]){const _0x41d365=_0x5a5d2a[_0x5e8f95(0x1af)][0x0][_0x5e8f95(0x23e)];if(_0x41d365){const _0xd7a79c=_0x41d365['trim']();0x0<_0xd7a79c[_0x5e8f95(0x200)]&&(_0xd7a79c[_0x5e8f95(0x23f)](/Loading About/i)||_0xd7a79c['match'](/I am using WhatsApp/i)||_0xd7a79c[_0x5e8f95(0x23f)](/Available/i));}}}else{if(_0x5e8f95(0x1b7)===_0x5a5d2a[_0x5e8f95(0x1b4)]){const _0x3c49b6=_0x5a5d2a[_0x5e8f95(0x22d)],_0x26f189=_0x3c49b6[_0x5e8f95(0x25c)];if(-0x1!==[_0x5e8f95(0x1b2)]['indexOf'](_0x26f189[_0x5e8f95(0x1cb)]())&&_0x5e8f95(0x21f)===_0x3c49b6[_0x5e8f95(0x27c)](_0x5e8f95(0x1c9))){const _0x3584ef=_0x3c49b6;window['setTimeout'](async()=>{const _0x1f4dc3=_0x5e8f95;let _0x145e4e='',_0x3f676b='',_0xb2dd46='';var _0x3bef0a=_0x3584ef[_0x1f4dc3(0x286)](_0x1f4dc3(0x290));if(0x0<_0x3bef0a['length']&&(!(_0x3bef0a=_0x3bef0a[0x0][_0x1f4dc3(0x23e)])||(_0x3bef0a=cleanName(_0x3bef0a))&&0x0<_0x3bef0a[_0x1f4dc3(0x200)]&&(_0x145e4e=_0x3bef0a)),0x0!==_0x145e4e[_0x1f4dc3(0x200)]){var _0x3bef0a=_0x3584ef[_0x1f4dc3(0x286)](_0x1f4dc3(0x234)),_0x3bef0a=(0x0<_0x3bef0a[_0x1f4dc3(0x200)]&&(!(_0x3bef0a=_0x3bef0a[0x0][_0x1f4dc3(0x23e)])||(_0x3bef0a=cleanDescription(_0x3bef0a))&&0x0<_0x3bef0a[_0x1f4dc3(0x200)]&&(_0x3f676b=_0x3bef0a)),_0x3584ef['querySelectorAll']('span[style*=\x27height\x27]:not([title])'));if(0x0<_0x3bef0a[_0x1f4dc3(0x200)]){const _0x32489a=_0x3bef0a[0x0][_0x1f4dc3(0x23e)];!_0x32489a||(_0x3bef0a=_0x32489a[_0x1f4dc3(0x22f)]())&&0x0<_0x3bef0a[_0x1f4dc3(0x200)]&&(_0xb2dd46=_0x3bef0a);}if(_0x145e4e){_0x3bef0a=_0xb2dd46||_0x145e4e,console[_0x1f4dc3(0x293)](_0x3bef0a);const _0x51a6e4={};_0x5d3a7b&&(_0x51a6e4[_0x1f4dc3(0x277)]=_0x5d3a7b),_0x3f676b&&(_0x51a6e4[_0x1f4dc3(0x212)]=_0x3f676b),_0xb2dd46?(_0x51a6e4[_0x1f4dc3(0x28e)]=_0xb2dd46,_0x145e4e&&(_0x51a6e4[_0x1f4dc3(0x1f2)]=_0x145e4e)):_0x145e4e&&(_0x51a6e4['phoneNumber']=_0x145e4e),await memberListStore['addElem'](_0x3bef0a,{'profileId':_0x3bef0a,..._0x51a6e4},!0x0),logsTracker[_0x1f4dc3(0x245)]({'label':_0x1f4dc3(0x1d6)+_0x145e4e,'category':LogCategory[_0x1f4dc3(0x291)]}),updateConter();}}},0xa);}}}}))[_0x5c4aeb(0x1a9)](_0x12e030,{'attributes':!0x0,'childList':!0x0,'subtree':!0x0});}function stopListeningModalChanges(){const _0x457aa0=_0x41da7d;modalObserver&&modalObserver[_0x457aa0(0x249)]();}function main(){const _0x369865=_0x41da7d;buildCTABtns(),logsTracker[_0x369865(0x245)]({'label':_0x369865(0x1df),'category':LogCategory[_0x369865(0x291)]});const _0x178e73=new MutationObserver(function(_0x1353c8){const _0x409787=_0x369865;for(const _0x122c7e of _0x1353c8)_0x409787(0x1b0)===_0x122c7e[_0x409787(0x1b4)]&&(0x0<_0x122c7e[_0x409787(0x1af)]['length']&&_0x122c7e[_0x409787(0x1af)][_0x409787(0x246)](_0x2f0872=>{const _0x41450c=_0x409787,_0x48a49a=_0x2f0872;0x0<_0x48a49a[_0x41450c(0x286)](_0x41450c(0x26a))[_0x41450c(0x200)]&&window[_0x41450c(0x1f4)](()=>{const _0x3b5d23=_0x41450c;listenModalChanges(),logsTracker[_0x3b5d23(0x245)]({'label':_0x3b5d23(0x209),'category':LogCategory[_0x3b5d23(0x291)]});},0xa);}),0x0<_0x122c7e[_0x409787(0x20b)][_0x409787(0x200)]&&_0x122c7e['removedNodes']['forEach'](_0x59359b=>{const _0x425959=_0x409787,_0x3e5e2b=_0x59359b;0x0<_0x3e5e2b[_0x425959(0x286)](_0x425959(0x26a))[_0x425959(0x200)]&&(stopListeningModalChanges(),logsTracker[_0x425959(0x245)]({'label':_0x425959(0x24e),'category':LogCategory['LOG']}));}));});var _0x335e5b=document[_0x369865(0x1e8)](_0x369865(0x25b));_0x335e5b&&_0x178e73[_0x369865(0x1a9)](_0x335e5b,{'attributes':!0x0,'childList':!0x0,'subtree':!0x0});}main();