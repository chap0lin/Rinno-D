import Component from './Component.js'

export default class BlackBox extends Component{
    constructor(height){
        super()
        this.state = {
            alpha: 1,
            lanternSize: 120,
            max: height
        }
    }
    update(lantern, yLevel){
        var {alpha} = this.state
        alpha = yLevel>1680?yLevel>1950?0:(1-(yLevel-1680)/270):yLevel>=0?yLevel>270?1:(yLevel)/270:0
        this.setState({alpha})
    }
    render(ctx){
        const {alpha} = this.state
        var grd = ctx.createRadialGradient(640, 360, 20, 640, 360, 120)
        grd.addColorStop(0, "transparent");
        grd.addColorStop(1, `rgba(0,0,0,${alpha})`);
        ctx.fillStyle = grd
        ctx.fillRect(0, 0, 1280,720)
    }
}