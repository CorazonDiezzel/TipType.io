//const PROFILE_SRC = './scripts/json/profile.json'

const LeProfile = (() => {
    const username = document.querySelector('.profile-username')
    const description = document.querySelector('.profile-description')
    const lastview = document.querySelector('.profile-lastview');
    return {
        initialize:function(){

        },
        setData: async function(data) {
            username.textContent = `${data.username}`
            description.textContent = `${data.description}`
            lastview.textContent = `${data.lastview}`
        }
    }
})();