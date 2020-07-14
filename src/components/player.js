import Component from './Component.js'
import Sprite from './sprite.js'

export default class Player extends Component{
    constructor(){
        super()
        this.sprite = new Sprite('./src/assets/img/WalkingUp.png', 40,40, 630, 350, 4, 200)
    }
    update(xv, yv){
        if(!!this.sprite)this.sprite.update(630, 350)
    }
    render(ctx){
        this.sprite.render(ctx)
    }
}