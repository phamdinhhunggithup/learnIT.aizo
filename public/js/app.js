var course = new Vue({
    el : "#site",
    data : {
        pageSelected : 1,
        loadPage : null,
        openInfoMySelf : false,
        openBackGroundInfoMySelf : false,
        textInfo : "Uống miến nước trà trước nhé .!",
        boxInfoIndex : 1,
    },
    computed : {

    },
    methods : {
        loadNextPageSelected(pageIndex) {
            this.pageSelected = pageIndex + 1;
            if(this.pageSelected === 2) {
                clearInterval(this.loadPage);
                setTimeout(() => {
                    this.openBackGroundInfoMySelf = true;
                },1000);
                setTimeout(() => {
                    this.openInfoMySelf = true,
                    this.textInfo = 'Mình là quen một chúc bạn nhé .!';
                },1500);
            }
        },
        nextIntro(index) {
            if(index !== 'readDone') {
                this.boxInfoIndex = index;
            } else {
                this.pageSelected = 3;
            }
        }
    },
    mounted() {
        this.loadPage = setInterval(() => {
            this.loadNextPageSelected(this.pageSelected);
        },3000);
    }
});