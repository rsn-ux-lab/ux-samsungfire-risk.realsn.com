/*  cache */
window.cache = "?v=" + new Date().getTime();

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/* HOST */
window.HOST = {
    localhost: /\d+\.\d+\.\d+\.\d/.test(location.hostname) || /^localhost/.test(location.hostname) || /^design.devel.com/.test(location.hostname),
    publish: /^ux-samsungfire-risk.realsn.com/.test(location.hostname) ,
    develop: /^devel/.test(location.hostname),
    product: /^prod/.test(location.hostname),
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

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/* access restriction */
if (HOST.localhost || HOST.publish) {

  const targets = [`https://jsonip.com`, `${SERVER.assets}/etc/json/inbound.json`];
  let num = 0;
  let ipAddress;
  let inbound;

  targets.forEach((_target, _idx) => {
    fetch(_target)
    .then((response) => response.json())
    .then((data) => {
      num++;      
      _idx === 0 ? (ipAddress = data.ip) : (inbound = data);
      num === targets.length && callback();
    });
  });

  function callback() {
    if (Object.values(inbound).includes(ipAddress) === false) {
      alert("dsfdsf")
    }    
  }
}



/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/