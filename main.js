import { el, css, prependChild } from './utilities.js'
import Window from './window.js';
import TskBr from './taskbr.js';
import { AppIcs, SrchBr, UpdateMod, DgradeMod, objWindows, errorTyFunc } from './components.js'
import { ErrWind } from './window.js';

// done, the funcs are utilities

const APPS = [
    new AppIcs('https://pngimg.com/d/ie_logo_PNG8.png', 'wisher'),
    new AppIcs('https://winaero.com/blog/wp-content/uploads/2016/05/Windows-XP.png', 'File xp'),
    new AppIcs('https://user-images.githubusercontent.com/8083855/30329899-bffb884c-97e4-11e7-8b93-f8e4bed7338a.png', 'AF termux'),
    new AppIcs('https://cdn-images-1.medium.com/max/1200/1*77186G18HyivYBneOHRZRw.png', 'Market')
]

let taskbar = new TskBr(APPS)

console.log(taskbar)

taskbar.icontray[0].domAS.onclick = () => {
    errorTyFunc.typeOne()
}