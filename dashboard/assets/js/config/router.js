/* JS loader */
let routes = [
  {
    path: "/dashboard/member/login/",
    script: `${SERVER.assets}/js/pages/login.js`,
  },
  {
    path: "/dashboard/member/pw_set/",
    script: `${SERVER.assets}/js/pages/pwSet.js`,
  },
  {
    path: "/dashboard/moral/",
    script: [`${SERVER.assets}/js/pages/moral.js`, `${SERVER.assets}/js/pages/moral_chart.js`,],
  },
  {
    path: "/dashboard/keyword/",
    script: `${SERVER.assets}/js/pages/keyword.js`,
  },
  {
    path: "/dashboard/medical/",
    script: `${SERVER.assets}/js/pages/medical.js`,
  },
  {
    path: "/dashboard/expired/",
    script: `${SERVER.assets}/js/pages/expired.js`,
  },
];
const url = location.pathname;
const hasPath = routes.filter((_route) => {
  return Array.isArray(_route.path) ? _route.path.find((_path) => _path === url) : _route.path === url;
});
if (hasPath[0]) window.loadScript({ src: hasPath[0].script });
