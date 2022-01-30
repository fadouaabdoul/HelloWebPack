import html from "./index.html";
import {Seule} from 'seule'
//where you import your component 
const app = new Seule({
    el: '#app',
    style: 'app',
    data: {
        msg : "Hello Seule"
    }
})
