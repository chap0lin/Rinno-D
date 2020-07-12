import Component from './Component.js'
export default class Tiles extends Component{
    constructor(src, map, w, h, nRow){
        super()
        this.state = {
            img: null,
            map,
            width: w,
            height: h,
            nRow
        }
        this.loadAssets(src)
    }
    loadAssets(source){
        var img = new Image();
        console.log(source)
        img.src=source;
        this.setState({img})
    }
    update(){

    }
    render(ctx){
        const {img, map, width, height, nRow} = this.state
        if(!!img){
            for(let i=0;i<map.length; i++){
                for(let j=0;j<map[i].length; j++){
                    ctx.drawImage(img, 50*(map[i][j]%8), 50*Math.floor(map[i][j]/8), width, width, j*width, i*width, width, width)
                }
            }
        }
    }
}