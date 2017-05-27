import Vue = require('vue')
import {Trait, Component, Mixin} from  "av-ts"

@Trait
class Pen extends Vue {
    havePen() {
        alert('I have a pen')
    }
}
@Trait
class Apple extends Vue {
    haveApple() {
        alert('I have an apple')
    }
}

// compiles under TS2.2
@Component({
    template: `<div>
<span @click="Uh">apple-pen</span>
  
</div>  `
})
class ApplePen extends Mixin(Apple, Pen) {

    Uh() {
        this.havePen();
        this.haveApple();
        alert('Apple pen')
    }
}

export  default  ApplePen
