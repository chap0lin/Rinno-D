import Component from './Component.js'

export default class Sound extends Component{
    constructor(src){
        super()
        this.state = {
            audio: new Audio(src)
        }
    }
    play(){
        const {audio} = this.state
        audio.play()
    }
    update(){
        
    }
    render(ctx){

    }
}