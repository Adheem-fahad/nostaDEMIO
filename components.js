import { el, css, prependChild } from './utilities.js'
import Window from './window.js';

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

export { AppIcs, SrchBr }