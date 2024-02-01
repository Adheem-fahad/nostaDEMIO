import { el, css, prependChild } from './utilities.js'
import Window from './window.js';
import { ErrWind } from './window.js'

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
        let textAppear = [
            'setting up code space',
            'loading data',
            'getting gui ready',
            'loading init files'
        ]
        let cnt = 0, snt = 0
        let timing = setInterval(() => {
            let itemnow = el('h4', x)
            // el('br', x)
            itemnow.textContent = textAppear[cnt]; cnt++ 
            x.appendChild(itemnow)
            let dotsgyat = setInterval(() => {
                itemnow.textContent = itemnow.textContent + '.'
                snt++
                if(snt == 4) {
                    clearInterval(dotsgyat)
                }
            }, 500)
            if(cnt == textAppear.length) {
                clearInterval(timing)
            }
        }, 1300)
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