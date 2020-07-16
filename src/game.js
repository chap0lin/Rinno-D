import Component from './components/Component.js'
import TestStage from './stages/TestStage/index.js'
import FirstLevel from './stages/firstLevel/index.js'

export default class Game extends Component{
    constructor(canv){
        super()
        this.state = {
            
        }
        this.canv = canv
        this.stage = new FirstLevel()
    }
    update(){
        this.stage.update()
        //this.render()
    }
    render(ctx){
        this.stage.render(ctx)
    }
}