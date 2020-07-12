import Component from '../../components/Component.js'
import InputHandler from '../../inputHandler.js'
import Tiles from '../../components/tiles.js'
export default class TestStage extends Component{
    constructor(){
        super()
        this.state = {
            positionX: 0,
            tiles: null
        }
        var inputHandler = new InputHandler()
        inputHandler.subscribe('keyDown',(key)=>console.log(`Notified with key: ${key}`))
        this.load()
    }
    load(){
        const map = [
            [6, 8, 13, 6, 8, 8, 8, 7, 4, 4, 4, 2, 8, 7, 6, 7, 6, 8, 8, 10, 8, 8, 7],
            [0, 6, 8, 3, 8, 8, 7, 0, 14, 3, 11, 2, 7, 0, 0, 12, 0, 6, 7, 14, 13, 4, 0],
            [0, 0, 5, 8, 8, 8, 15, 14, 8, 8, 15, 0, 12, 14, 3, 8, 15, 0, 14, 8, 8, 15, 0],
            [0, 0, 5, 8, 8, 8, 8, 8, 7, 6, 13, 2, 8, 8, 8, 8, 7, 0, 6, 10, 8, 8, 15],
            [0, 0, 6, 7, 6, 7, 6, 7, 14, 1, 8, 15, 6, 8, 8, 7, 0, 0, 0, 0, 6, 8, 7],
            [0, 0, 12, 2, 15, 14, 15, 14, 7, 14, 8, 8, 15, 5, 7, 0, 0, 0, 0, 0, 0, 6, 15],
            [2, 15, 6, 11, 4, 6, 8, 13, 14, 8, 8, 7, 6, 10, 11, 12, 0, 0, 12, 0, 0, 14, 7],
            [14, 8, 15, 14, 15, 14, 8, 8, 8, 8, 7, 0, 0, 0, 14, 7, 0, 2, 7, 0, 0, 6, 15],
            [6, 8, 8, 8, 10, 8, 8, 8, 10, 7, 0, 0, 0, 2, 13, 0, 0, 0, 0, 0, 0, 0, 4],
            [0, 6, 8, 8, 3, 8, 8, 7, 0, 12, 0, 14, 15, 0, 6, 15, 0, 12, 0, 0, 0, 0, 0],
            [0, 0, 6, 8, 8, 8, 7, 0, 0, 6, 3, 8, 8, 15, 14, 8, 3, 8, 11, 0, 12, 14, 11],
            [0, 12, 14, 7, 6, 7, 0, 0, 0, 0, 5, 8, 8, 8, 8, 10, 8, 7, 12, 0, 6, 8, 15],
            [14, 7, 6, 15, 0, 12, 0, 0, 0, 2, 8, 7, 6, 8, 13, 14, 7, 14, 7, 0, 14, 7, 4],
            [4, 0, 14, 7, 14, 7, 0, 0, 0, 0, 4, 0, 14, 8, 8, 7, 14, 7, 12, 14, 8, 15, 0],
            [0, 14, 8, 3, 13, 0, 0, 0, 0, 14, 15, 0, 6, 10, 7, 14, 7, 14, 8, 8, 7, 6, 11],
            [2, 8, 8, 8, 7, 0, 0, 0, 14, 8, 8, 15, 0, 0, 14, 8, 15, 6, 7, 4, 0, 0, 0],
            [0, 6, 8, 7, 0, 0, 0, 0, 6, 8, 7, 4, 0, 0, 6, 8, 8, 15, 14, 15, 0, 0, 0],
            [0, 0, 6, 15, 0, 0, 0, 12, 14, 13, 0, 0, 0, 14, 15, 6, 8, 8, 8, 8, 15, 0, 0],
            [0, 0, 0, 4, 14, 3, 15, 5, 8, 8, 11, 2, 11, 6, 8, 3, 7, 6, 8, 7, 5, 15, 0],
            [0, 0, 0, 14, 7, 6, 8, 8, 8, 8, 15, 12, 0, 0, 5, 8, 11, 14, 7, 0, 6, 8, 11],
            [0, 0, 14, 8, 15, 14, 8, 8, 8, 7, 6, 8, 15, 0, 5, 8, 3, 8, 15, 0, 0, 6, 15],
            [2, 3, 8, 8, 10, 8, 7, 6, 13, 0, 0, 5, 8, 3, 8, 8, 8, 8, 13, 0, 12, 14, 7],
            [0, 5, 8, 8, 3, 13, 14, 3, 8, 3, 3, 8, 8, 8, 8, 8, 8, 8, 8, 3, 8, 8, 15]
        ]
        var tiles = new Tiles('./src/assets/img/tilesLab2.png', map, 20,20, 8)
        this.setState({tiles})
    }
    update(){
        const {positionX} = this.state
        const newPositionX = positionX+10>190?0:positionX+10
        this.setState({positionX: newPositionX})
    }
    render(ctx){
        const {tiles} = this.state
        ctx.fillStyle = "white"
        ctx.fillRect(0,0,1280,720)
        if(!!tiles)tiles.render(ctx)
        // ctx.fillStyle="blue"
        // ctx.fillRect(this.state.positionX,0,10,10)
    }
}