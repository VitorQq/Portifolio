class MobileNavBar {
    constructor(responsiveImgNav, navList, navLinks) {
        this.responsiveImgNav = document.querySelector(responsiveImgNav)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active";
        
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) =>{
            console.log()
            link.style.animation ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        });

    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }



    addClicEvent() {
        this.responsiveImgNav.addEventListener("click", this.handleClick);
    }
    init() {
        if (this.responsiveImgNav) {
            this.addClicEvent();
        }
        return this;
    }
}

const responsiveImgNav = new MobileNavBar(
    ".responsiveImgNav",
    ".nav-list",
    ".nav-list li"
);

responsiveImgNav.init();


