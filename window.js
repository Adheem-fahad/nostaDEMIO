import { el, css, prependChild } from './utilities.js'
import { AppIcs, SrchBr } from './components.js'

let BODY = document.querySelector('body')

export default class Window {
    constructor(winTit, domel) {
        this.title = winTit;
        this.header = '';
        this.tbicon = domel;
        this.actions = ['minimise','resize','close']
        this.icons = ['./images/minimise.png','./images/resize.png','https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/1200px-VisualEditor_-_Icon_-_Close_-_white.svg.png']
        this.stat = 'open'
        this.active = this.DOM()
    }
    closeDrag() {
        document.onmousemove = null
    }
    draggas(n, m) {
        document.onmousemove = (e) => {
            e.preventDefault();

            // this.header.textContent = e.clientX + ' ' + e.clientY
            css(this.window, {
                left: `${e.clientX - n}px`,
                top: `${e.clientY - m}px`
            })
            document.onmouseup = (e) => {
                e.preventDefault();
                this.closeDrag()
            }
        }
    }
    mousetouch() {
        this.header.onmousedown = (e) => {
            e.preventDefault();

            // this.header.textContent = e.clientX + ' ' + e.clientY
            // alert(e.offsetX, e.offsetY)
            // console.log([e.target, e.offsetY, e.target.clientWidth])
            this.draggas(e.offsetX, e.offsetY)
        }
    }
    DOM() {
        let winDom = el('div', BODY, ['class', 'window']);
        this.window = winDom;

        let tPrtsDOM = [
            el('div', winDom),
            el('div', winDom)
        ]
        this.header = tPrtsDOM[0]

        tPrtsDOM[0].textContent = this.title
        tPrtsDOM[0].classList.add('bluegradfrbr')
        tPrtsDOM[0].classList.add('orgflex'); tPrtsDOM[0].style.justifyContent = 'space-between'
        let actbr = el('div', tPrtsDOM[0])
        actbr.classList.add('orgflex')  
        this.actions.forEach((x, y) => {
            let btnCver = el('div', actbr);
            // btnCver.textContent = x
            btnCver.style.backgroundImage = `url(${this.icons[y]})`
            btnCver.classList.add('bgset')
            btnCver.classList.add('smbtn')
            if(x == 'close') {
                btnCver.classList.add('close')
                btnCver.addEventListener('click', () => {
                    this.window.parentElement.removeChild(this.window)
                    css(this.tbicon, {borderBottom: 'none',
                    backgroundColor: 'transparent'})
                    this.stat = 'close'
                })
            } else if(x == 'resize') {
                btnCver.addEventListener('click', () => {
                    css(this.window, {
                        width: '100vw',
                        height: `100vh`,
                        top: 0,
                        left: 0
                    })
                }, false)
            } else if(x == 'minimise') {
                this.stat = 'min'
                btnCver.addEventListener('click', () => {
                winDom.style.transition = '0.7s ease-in-out'
                css(winDom, {
                    scale: 0.8,
                    left: '3000px',
                    top: '3599px'
                })
                css(this.tbicon, {
                    borderBottom: '2.7px solid ' + CLRUT.denied,
                    backgroundColor: CLRUT.bgacc
                })
            }, false)
            }
        })

        this.mousetouch()

        return tPrtsDOM[1]
    }
}

class ErrWind extends Window {
    constructor(a, x, y) {
        super(`🚫${a}`, '')
        this.error = x;
        this.options = y;
        this.reduceSTYLE()
    }
    reduceSTYLE() {
        this.window.classList.add('errW')
        this.window.children[0].classList.add('warnerrW')
    }
    changeOffset(x, y) {
        css(this.window, {
            top: y + 'px',
            left: x + 'px'
        })
    }
}

export { ErrWind }