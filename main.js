function el(x, y, a) {
    let element = document.createElement(x);
    if(y) {
        y.appendChild(element)
    }
    if(a) {
        element.setAttribute(a[0], a[1]);
    }
    return element;
}
function css(x, obj) {
    for(let i in obj) {
        x.style[i] = obj[i]
    }
}
function prependChild(x, y) {
    let firstchildofit = x.firstChild;
    if(firstchildofit) {
        x.insertBefore(y, firstchildofit)
    }
    return y;
}

const CLRUT = {
    ok: '#45f542',
    denied: '#f54842',
    bgacc: 'rgba(19, 255, 224, 0.397)'
}

// done, the funcs are utilities
// common vars
let BODY = document.querySelector('body')
// task class utility
class AppIcs {
    constructor(x, y) {
        this.appImg = x;
        this.appName = y;
        this.curWindow = false;
    }
    onHover() {

    }
    DOM(x) {
        let appEl = el('div', x, ['class', 'appics']);
        appEl.classList.add('bgset')
        appEl.style.backgroundImage = `url('${this.appImg}')`
        appEl.style.transition = '0.4s ease-in-out'
        return appEl;
    }
}
class SrchBr {
    constructor(y) {
        this.appName = y;
    }
    DOM(x) {
        let srbr = el('input', x, ['type', 'text'])
        return srbr;
    }
}

// windows class

class Window {
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

class TskBr {
    constructor(arr) {
        this.taskbr = false;
        this.adjN = [
            new AppIcs('./images/kun.png', 'Start'),
            new SrchBr('', 'Taskbar')
        ]
        this.icontray = this.adjN.concat(arr)
        this.DOMobjapps(this.icontray)
    }
    DOMconstr() {
        let domtsk = el('div', BODY, ['class', 'taskbr']);
        domtsk.classList.add('orgflex')
        this.taskbr = domtsk;
    }
    onDOMappcl(y, domel) {
        css(domel, {
            borderBottom: '3px solid ' + CLRUT.ok,
            backgroundColor: CLRUT.bgacc
        })
        console.log(y.curWindow)
        if(y.curWindow && y.curWindow.stat == 'min') {
            css(y.curWindow.window, {
                left: '40px',
                top: '60px'
            })
        } else if(y.curWindow && y.curWindow.stat == 'close') {
            y.curWindow = new Window(y.appName, domel)
        } else {
            y.curWindow = new Window(y.appName, domel)
        }
    }
    DOMobjapps(items) {
        this.DOMconstr()

        items.forEach(x => {
            let appEl = x.DOM(this.taskbr)
            appEl.onclick = () => {
                this.onDOMappcl(x, appEl)
            }
        })
    }
}

let taskbar = new TskBr(
    [
        new AppIcs('https://pngimg.com/d/ie_logo_PNG8.png', 'IE'),
        new AppIcs('https://winaero.com/blog/wp-content/uploads/2016/05/Windows-XP.png', 'File xp'),
        new AppIcs('https://user-images.githubusercontent.com/8083855/30329899-bffb884c-97e4-11e7-8b93-f8e4bed7338a.png', 'AF termux')
    ]
)