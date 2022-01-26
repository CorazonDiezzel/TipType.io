const LeMenu = (() => {
    const METAURL = 'scripts/json/meta.json'
    return {
        initialize: function () {
            fetch(METAURL)
                .then(res => res.json())
                .then(data => {
                    data.VIEWS.forEach(element => {
                        if(element.view != cActiveView.getView()){
                        var nmenu = document.createElement('div')
                        nmenu.setAttribute('id', element.view)
                        nmenu.setAttribute('class', 'le-button bt-menu')
                        nmenu.style = 'background-color:'+element.background+';';
                        nmenu.innerHTML = element.text
                        nmenu.addEventListener('click', () => {
                            loadView(element.view).then(onload => {
                                unloadScript(cActiveView.getView()).then(onunload=>{
                                    loadScripts(element.view)
                                })
                            })
                        })
                        document.querySelector('#base-menu').appendChild(nmenu);
                    }
                    });
                })
        }
    }
})();

LeMenu.initialize()