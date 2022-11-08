import Routes from "./routes/index.mjs";
const onLoad = () => {
  const url = window.location.hash.substring(1);
  const finded = Routes.filter((route) => {
    if (route.routerName.includes(url)) {
      document.getElementById("router").innerHTML = route.HTML;
      window.scrollTo(0, 0);
    }
    return route;
  });
};
export default onLoad;
