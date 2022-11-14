import Routes from "./routes/index.mjs";
const onLoad = () => {
    const url = window.location.hash.substring(1);
    const queryParamsStr = "?" + url.split("?")[1];
    const queryParams = new URLSearchParams(queryParamsStr);
    const finded = Routes.filter((route) => {
        if (route.routerName.includes(url)) {
            document.getElementById("router-view").innerHTML = route.HTML;
            window.scrollTo(0, 0);
        }
        return route;
    });
};
export default onLoad;
