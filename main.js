import { el, css, prependChild } from './utilities.js'
import Window from './window.js';
import TskBr from './taskbr.js';
import { AppIcs, SrchBr } from './components.js'
import { ErrWind } from './window.js';

// done, the funcs are utilities

let minKundi = new ErrWind('YOU ACTUA;LLY NFV/*CKED UP, sorry hacked.', ['check', 'troubleshoot'])
console.log(minKundi)

let taskbar = new TskBr(
    [
        new AppIcs('https://pngimg.com/d/ie_logo_PNG8.png', 'IE'),
        new AppIcs('https://winaero.com/blog/wp-content/uploads/2016/05/Windows-XP.png', 'File xp'),
        new AppIcs('https://user-images.githubusercontent.com/8083855/30329899-bffb884c-97e4-11e7-8b93-f8e4bed7338a.png', 'AF termux')
    ]
)