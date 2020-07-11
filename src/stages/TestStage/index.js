import Component from '../../components/Component.js'
import InputHandler from '../../inputHandler.js'
export default class TestStage extends Component{
    constructor(){
        super()
        this.state = {
            positionX: 0
        }
        var inputHandler = new InputHandler()
        inputHandler.subscribe('keyDown',(key)=>console.log(`Notified with key: ${key}`))
    }
    update(){
        const {positionX} = this.state
        const newPositionX = positionX+10>190?0:positionX+10
        this.setState({positionX: newPositionX})
    }
    render(ctx){
        ctx.fillStyle = "white"
        ctx.fillRect(0,0,400,400)
        ctx.fillStyle="blue"
        ctx.fillRect(this.state.positionX,0,10,10)
    }
}