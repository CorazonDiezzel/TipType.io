const PROFILE_SRC = BASE_URL+'scripts/json/profile.json'

const LeProfile = (() => {
    const username = document.querySelector('.profile-username')
    const description = document.querySelector('.profile-description')
    const lastview = document.querySelector('.profile-lastview');
    return {
        setData: async function(data) {
            username.textContent = `${data.username}`
            description.textContent = `${data.description}`
            lastview.textContent = `${data.lastview}`
        }
    }
})();

async function fetchProfile(){
    return (await fetch(PROFILE_SRC)
    .then((resp) => resp.json())
    .then((data) => {
    LeProfile.setData(data.profile[0])
    }))
}

fetchProfile()