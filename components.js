import { el, css, prependChild } from './utilities.js'
import Window from './window.js';
import { ErrWind } from './window.js'

const CLRUT = {
    ok: '#45f542',
    denied: '#f54842',
    bgacc: 'rgba(19, 255, 224, 0.397)'
}

class AppIcs {
    constructor(x, y) {
        this.appImg = x;
        this.appName = y;
        this.curWindow = false;
        this.domAS = false
    }
    onHover() {

    }
    DOM(x) {
        let appEl = el('div', x, ['class', 'appics']);
        appEl.classList.add('bgset')
        appEl.style.backgroundImage = `url('${this.appImg}')`
        appEl.style.transition = '0.4s ease-in-out'
        this.domAS = appEl
        return appEl;
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
        if(y.curWindow) {
            if(y.appName == 'AF termux') {
                objWindows.AFtermux(y.curWindow.active)
            } else if(y.appName == 'wisher') {
                objWindows.Wisher(y.curWindow.active)
            }
        }
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

class UpdateMod {
    constructor(x, y) {
        this.updateTyep = x;
    }
}
class DgradeMod {
    constructor(x) {
        this.degradeType = x;
    }
    showMessage() {
        let windows = new Window('andi kumar')
        console.log(windows)
    }
}

let objWindows = {
    AFtermux: (x) => {
        x.classList.add('black-bg')



        // first screen
        const addTextI = async (itemText) => {
            await randomDelay()
            let itemnow = el('h4', x);
            itemText = 'FW C:/User/Termux >>> ' + itemText
            itemnow.textContent = itemText 
            // last = itemnow;
        }
        const randomDelay = (randomNumber = (1 + Math.floor(Math.random() * 6)) * 1000) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, randomNumber)
            })
        }
        const mainAF = async () => {
            let t = setInterval(() => {
                let last = x.getElementsByTagName('h4')
                // last = last[last.length - 1]

                for(let i = 0; i < last.length; i++) { 
                    console.log(last[i].textContent)
                    if(last[i].textContent.endsWith('...')) {
                        last[i].textContent = last[i].textContent.slice(0, last[i].textContent.length-3)
                    } else {
                        last[i].textContent = last[i].textContent +'.'
                    }
                }
            }, 300)

            let textAppear = [
                'setting up code space',
                'loading data',
                'getting gui ready',
                'loading init files'
            ]

            for (let j in textAppear) {
                await addTextI(textAppear[j])
            }

            await randomDelay(4500)
            clearInterval(t)
            x.innerHTML = ''
        }
        mainAF()
    },
    Wisher: (x) => {
        x.classList.add('white-bg')

        let imageLink = 'https://freepngimg.com/save/153883-logo-google-png-free-photo/550x185'
    }
}

let errorTyFunc = {
    typeOne: (x = 5) => {
        const BODY = document.querySelector('body')
        const OFFZ = ['3.5_0.5', '3_1', '2.5_2', '2_3', '1.5_4', '1_4.5']

        async function t1call() {
            for(let i = 0; i< OFFZ.length; i++) {
                let f = OFFZ[i]
                await new Promise(resolve => setTimeout(resolve, 200))
                let currErrWind = new ErrWind('IIFE crash diagnosis under', 'Undefined bullshit', ['report crash', 'diagnose'])
                currErrWind.changeOffset( BODY.clientWidth* +(f.split('_')[0]) /5, BODY.clientHeight* +(f.split('_')[1]) /6)

                let audioERR = new Audio('audio/erroraud.mp3')
                audioERR.play()
            }
        }
        t1call()
    },
    nani: async function() {
        for(let i = 0; i< 5; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000))
                console.log(i)
        }
    }
}

export { AppIcs, SrchBr, UpdateMod, DgradeMod, objWindows, errorTyFunc }