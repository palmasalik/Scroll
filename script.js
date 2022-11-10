class SCROLL {
    constructor(set) {
        if (typeof set.el == 'string') {
            this.el = document.querySelector(set.el)
        } else if (set.el instanceof HTMLElement) {
            this.el = set.el
        }

        this.el.style.position = 'fixed'
        this.top = set.top - this.el.clientHeight
        this.unit = set.unit
        this.el.style.top = this.scroll()
        window.addEventListener('scroll', () => this.scroll())
    }
    scroll() {
        this.window = this.scrollNumber()
        if(this.window - scrollY > 0){
             this.el.style.top = this.window - scrollY + 'px'
        }else {
            this.el.style.top = 0
        }
    }
    scrollNumber(){
        if(this.unit == 'px'){
           return this.top >= 0 ? this.top : 0
        }else{
            return 200
        }
    }
}
const header = document.querySelector ('.header')
console.log(header.clientHeight);
const mySCROLL = new SCROLL({
    el: '.header__nav',
    top: header.clientHeight,
    unit: 'px'
})

class TYPING {
    constructor(options){
        this.el = document.querySelector(options.element)
        this.speed = options.speed != undefined && options.speed > 0 ? options.speed : 100
        this.content = this.el.innerHTML
        this.fullText = ''
        this.type()
    }
    type(i = 0){
        this.fullText += this.content[i]
        this.el.innerHTML = this.fullText
        
    if (this.fullText != this.content) {
        i++
        setTimeout(() => this.type(i),this.speed);
    }
    }
}
const typing = new TYPING({
    element: '.header__content h1'
})

function rand(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let headerContent = document.querySelector(".header__content");

let headerContentHeight = headerContent.clientHeight;
let headerContentWidth = headerContent.clientWidth;

let height = header.clientHeight - headerContentHeight;
let width = header.clientWidth -  headerContentWidth;

console.log(height);

headerContent.addEventListener("mouseover", ()=>{
    headerContent.style.marginRight = `${rand(width - headerContentWidth, 0)}px`;
    headerContent.style.marginTop = `${rand(height - headerContentHeight, 0)}px`;
});
