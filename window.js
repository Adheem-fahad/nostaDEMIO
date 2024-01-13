import { el, css, prependChild } from './utilities'

export default class Window {
    constructor(winTit) {
        this.title = winTit;
        this.actions = [
            'minimise',
            'resize',
            'close'
        ]
        this.active = this.DOM()
    }
    DOM() {
        let winDom = el('div', BODY, ['class', 'window']);
        this.window = winDom;

        let tPrtsDOM = [
            el('div', winDom),
            el('div', winDom)
        ]
        tPrtsDOM[0].textContent = this.title
        tPrtsDOM[0].classList.add('orgflex'); tPrtsDOM[0].style.justifyContent = 'space-between'
        let actbr = el('div', tPrtsDOM[0])
        actbr.classList.add('orgflex')
        this.actions.forEach(x => {
            let btnCver = el('div', actbr); btnCver.textContent = x
            css(btnCver, {
                cursor: 'pointer'
            })

        })
        return tPrtsDOM[1]
    }
}