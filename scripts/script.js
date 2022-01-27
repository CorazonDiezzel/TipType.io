const META = (() => {
    const PROFILE = [
        {
            "username": "Timeus",
            "description": "Deeznutz",
            "lastview": "main"
        }
    ]
    const VIEWS = [
        {
            "text": "Home",
            "view": "index",
            "background": "#03fc07"
        },
        {
            "text": "Pengenalan",
            "view": "pengenalan",
            "background": "#03fc07"
        },
        {
            "text": "Teori Dasar",
            "view": "teoridasar",
            "background": "#03fcec"
        },
        {
            "text": "Test Mengetik",
            "view": "test_typing",
            "background": "#6a00ff"
        },
        {
            "text": "Tentang",
            "view": "tentang",
            "background": "#f478ff"
        }
    ]
    const QUOTES = [
        {
            "id": 1,
            "length": "",
            "difficulty": 1,
            "content": "Purbararang pun kemudian pergi ke nenek sihir dan mengutuk Purbasari sehingga menjadi buruk rupa, kulitnya dipenuhi bintik hitam. Purbasari pun kemudian diasingkan ke hutan dan Purbararang yang menjadi pemimpin penerus ayahnya."
        },
        {
            "id": 2,
            "length": "",
            "difficulty": 1,
            "content": "Pada suatu ketika, Purbasari ditemani oleh seekor lutung dan menyuruh Purbasari untuk berendam di dalam telaga, seketika Purbasari pun sembuh dan kembali menjadi cantik jelita."
        },
        {
            "id": 3,
            "length": "",
            "difficulty": 1,
            "content": "Naga tersebut diselamatkan oleh seorang raja dan pangeran. Menangis kesakitan, ketika diselamatkan, naga pun menggeser tubuhnya menuju laut secara perlahat."
        },
        {
            "id": 4,
            "length": "",
            "difficulty": 1,
            "content": "Seketika, daerah tersebut kemudian membentuk sebuah alur sungai kecil yang dipenuhi oleh rawa dan genangan air. Raja dan pangeran pun kemudian memberi nama tempat tersebut sebagai Alue Naga, berdasarkan apa yang dialami."
        },
        {
            "id": 5,
            "length": "",
            "difficulty": 1,
            "content": "Nenek tua tersebut diberi pesan untuk mengambil sebuah lisung ketika mendengar suara gemuruh yang besar. Tidak lama, suara gemuruh pun terdengar dan muncul air dari tanah dan menenggelamkan semua masyarakat yang ada di desa tersebut yang sedang berpesta."
        },
        {
            "id": 6,
            "length": "",
            "difficulty": 1,
            "content": "Tanpa sepengetahuan anaknya, mereka berdua memiliki seekor anjing yang bernama si Tumang. Anjing tersebut adalah jelmaan ayah Sangkurian atau suami dari Dayang Sumbi."
        },
        {
            "id": 7,
            "length": "",
            "difficulty": 1,
            "content": "Dayang Sumbi pun tidak mengetahui bahwa Sangkuriang adalah anaknya. Sangkuriang pun melamar Dayang Sumbi, Dayang Sumbi pun menerimanya. Sampai suatu ketika, Dayang Sumbi mengetahui bahwa Sangkuriang adalah anaknya dan berusaha membatalkan pernikahannya."
        }
    ]
    return {
        getView: function (index) {
            return VIEWS[index]
        },
        getViews: function () {
            return VIEWS.map(v => v)
        },
        getQuote: function (index) {
            return QUOTES.find(q => q.id == index)
        },
        getRandomQuote: function () {
            let randQ = Math.floor(QUOTES.length * Math.random())
            return QUOTES[randQ].content
        },
        getProfile: function () {
            return PROFILE.map(v => v)
        }
    }
})();

const cActiveView = (() => {
    iview = localStorage.getItem('iview')
    return {
        setView: function (cview) {
            localStorage.setItem('iview', cview)
        },
        getView: function () {
            if (iview == '') {
                this.setView(META.getView(0).view)
            }
            return iview;
        },
        clearView: function () {
            localStorage.removeItem('iview');
        }
    }
})();