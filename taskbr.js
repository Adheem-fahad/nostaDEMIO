import { el, css, prependChild } from './utilities.js'
import Window from './window.js';
import { AppIcs, SrchBr, objWindows } from './components.js'

let BODY = document.querySelector('body');
const CLRUT = {
    ok: '#45f542',
    denied: '#f54842',
    bgacc: 'rgba(19, 255, 224, 0.397)'
}

export default class TskBr {
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
    
    DOMobjapps(items) {
        this.DOMconstr()

        items.forEach(x => {
            let appEl = x.DOM(this.taskbr)
            appEl.onclick = () => {
                x.onDOMappcl(x, appEl)
            }
        })
    }
}