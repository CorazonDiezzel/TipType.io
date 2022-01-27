const LeMenu = (() => {
    return {
        initialize: function (meta) {
            meta.getViews().forEach(element => {
                if (element.view != cActiveView.getView()) {
                    var nmenu = document.createElement('div')
                    nmenu.setAttribute('id', element.view)
                    nmenu.setAttribute('class', 'le-button bt-menu')
                    nmenu.style = 'background-color:' + element.background + ';';
                    nmenu.innerHTML = element.text
                    nmenu.addEventListener('click',()=>{
                        location.href = element.view;
                    })
                    document.querySelector('#base-menu').appendChild(nmenu);
                }
            })
        }
    }
})();