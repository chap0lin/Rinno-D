import Component from './Component.js'
import Sprite from './sprite.js'
import Sound from './sound.js'

export default class Thunder extends Component{
    constructor(size, blackbox){
        super()
        const timeStarted = new Date().getTime()
        this.state={
            sprite: new Sprite('./src/assets/img/thunder.png', 100, 100, 200, 200, 6, 166),
            sound: new Sound('./src/assets/audio/thunder.mp3'),
            blackbox,
            expired:false,
            timeStarted
        }
    }
    hasExpired(){
        const {expired} = this.state
        return expired
    }
    update(){
        const {sprite, timeStarted, blackbox} = this.state
        blackbox.highlight()
        sprite.update(200, 200, 0)
        const now = new Date().getTime()
        var expired = Math.floor((now - timeStarted)/1000)>1
        this.setState({expired})
    }
    render(ctx){
        const {sprite, sound} = this.state
        sound.play()
        sprite.render(ctx)
    }
}