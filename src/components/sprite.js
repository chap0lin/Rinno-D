import Component from './Component.js'
export default class Sprite extends Component{
    constructor(src, w, h, posX, posY, tileCount=1, timeFrame=0){
        super()
        const timeStarted = new Date().getTime()
        this.state={
            img: null,
            width: w,
            height: h,
            X: posX,
            Y: posY,
            tileCount,
            currentTile: 0,
            timeFrame,
            timeStarted
        }
        this.loadAssets(src)
    }
    loadAssets(src){
        var img = new Image()
        img.src=src
        console.log('Natural:' + img.naturalWidth)
        this.setState({img})
    }
    update(posX, posY){
        const {tileCount, timeStarted, timeFrame} = this.state
        if(tileCount!=1){
            const now = new Date().getTime()
            var currentTile = Math.floor((now - timeStarted)/timeFrame)%tileCount
            //console.log('Tile:' + currentTile)
        }
        this.setState({X: posX, Y: posY, currentTile})
    }
    render(ctx){
        const {img, width, height, X, Y, currentTile, tileCount} = this.state
        var size = img.naturalWidth/tileCount
        //console.log('crop:' + currentTile*size)
        ctx.drawImage(img, currentTile*size, 0, size, img.naturalHeight,  X, Y, width, height)
    }
}