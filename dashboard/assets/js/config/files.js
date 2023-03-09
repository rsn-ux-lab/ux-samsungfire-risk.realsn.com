/*  cache */
window.cache = "?v=" + new Date().getTime();

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/* HOST */
window.HOST = {
  localhost: /\d+\.\d+\.\d+\.\d/.test(location.hostname) || /^localhost/.test(location.hostname) || /^design.devel.com/.test(location.hostname),    
  publish: /^ux2-samsungfire-risk.realsn.com/.test(location.hostname) ,
  develop: /^samsunghealth.devel.com/.test(location.hostname),
  product: /^samsunghealth.realsn.com/.test(location.hostname),
};


/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/* resources path */
window.SERVER = new Object();

if (HOST.localhost || HOST.publish) { // 로컬 환경
	SERVER.assets = "/dashboard/assets";    
} else if (HOST.develop || HOST.product) { // 개발 및 운영서버
	SERVER.assets = "/dashboard/assets";    
}

try {
	if (Object.keys(SERVER).length === 0) throw new Error("SERVER 환경을 찾을 수 없으므로, 화면을 정상적으로 랜더링 할 수 없습니다.");
} catch (_err) {
	console.log(`%c files.js %c ${_err}`, "color:yellow;background:#ffb6c16b", "color:red;");	
}

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/