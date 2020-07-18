import Component from '../../components/Component.js'
import Sprite from '../../components/sprite.js'

import ShadowMenu from '../../components/shadowMenu.js'
import InputHandler from '../../inputHandler.js'


export default class Credits extends Component{
    constructor(gameCallback){
        super()
        this.active = true
        const inputHandler = new InputHandler()
        inputHandler.subscribe('mouseClick',(param)=>this.mouseClick(param))
        this.state = {
            background: new Sprite('./src/assets/img/capa.png', 1280, 720, 0, 0),
            shadow: new ShadowMenu(0.9),
            gameCallback,
        }
    }
    mouseClick(mouseObject){
        if(this.active){
            this.state.gameCallback({
                currentStage: 'Credits',
                nextStage: 'MainMenu'
            })
            this.active = false
        }    
    }
    update(){
    }
    render(ctx){
        const {background, shadow} = this.state
        if(!!background)background.render(ctx)
        
        ctx.fillStyle = "white"
        ctx.font = "40px Calibri"
        ctx.fillText('Desenvolvimento:', 200, 200)
        ctx.fillText('Colaboradores:', 200, 350)
        ctx.font = "60px Calibri"
        ctx.fillText('Carlos Rocha', 200, 270)
        ctx.fillText('Alexander Paschoaletto', 200, 420)
        ctx.fillText('Rodrigo Lima', 200, 480)

        if(!!shadow)shadow.render(ctx)

    }
}