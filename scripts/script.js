const BASE_URL = 'https://corazondiezzel.github.io/TipType.io/';
//const BASE_URL = '';


const cActiveView = (()=>{
    iview = localStorage.getItem('iview')
    return {
        setView:function(cview){
            localStorage.setItem('iview',cview)
        },
        getView: function(){
            if(iview == ''){
                this.setView('menu')
            }
            return iview;
        }
    }
})();

async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text()
}

async function loadScripts(dview, lecall) {
    let scriptURL = BASE_URL+"/scripts/"+dview+".js";
    var nscript = document.createElement("script")
    nscript.type = "text/javascript"
    nscript.id = nscript.view
    nscript.src = scriptURL;
    if(!document.head.contains(nscript)){
        nscript.onload = function(){
            console.log(dview+' loaded!')
            lecall
        }
        document.body.appendChild(nscript)
    }
}
async function unloadScript(dview,lecall){
    let jsonURL = BASE_URL+'scripts/json/meta.json';
    fetch(jsonURL)
    .then(res => res.json())
    .then(data =>{
        data.VIEWS.find(element => element.view == dview).scripts.forEach(element => {
            console.log("Unloading "+element)
        });
    })
}

async function loadView(dview) {
    const contentDiv = document.getElementById("content")
    let loadURL = BASE_URL+"views/"+dview+".view"
    contentDiv.innerHTML = await fetchHtmlAsText(loadURL)
}

async function fadeOutEffect(dnode) {
    var fadeTarget = document.getElementById(dnode)
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1
        } else {
            clearInterval(fadeEffect)
        }
    }, 200)
}
//=============================================
loadScripts('profile',);

loadView(cActiveView.getView()).then(onload => {
    unloadScript(cActiveView.getView()).then(()=>{
        loadScripts('menu')
    })
})