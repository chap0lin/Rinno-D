import Component from './Component.js'
export default class Sprite extends Component{
    constructor(src, w, h, posX, poxY, tileCount=1, timeFrame=0){
        super()
        this.state={
            img: null,
            width: w,
            height: h,
            X: poxX,
            Y: posY,
            tileCount,
            timeFrame
        }
        this.loadAssets(src)
    }
    loadAssets(src){
        var img = new Image()
        img.src=src
        this.setState({img})
    }
    update(posX, posY){
        this.setState({X: posX, Y: posY})
    }
    render(ctx){
        const {img, width, height, X, Y} = this.state
        ctx.drawImage(img, X, Y, width, height)
    }
}