import Component from './components/Component.js'
export default class InputHandler extends Component{
    constructor(){
        super()
        if(!!InputHandler.instance){
            return InputHandler.instance
        }
        InputHandler.instance = this
        this.state = {
            observers: {
                "keyDown": [],
                "keyUp": []
            },
        }
        
        document.addEventListener('keydown', this.handleKeydown.bind(this))
        document.addEventListener('keyup', this.handleKeyUp.bind(this))
    }
    isTopic(topic){
        return !!this.state.observers[topic]
    }
    subscribe(topic, observerFunction){
        if(this.isTopic(topic)){
            var {observers} = this.state
            observers[topic].push(observerFunction)
            this.setState({observers})
        }else{
            console.log(`The topic ${topic} does not exist!`)
        }
    }
    notifyAll(topic, command){
        const functionList = this.state.observers[topic]
        functionList.forEach(callFunction => callFunction(command))
    }
    handleKeydown(evt){
        //console.log(`Key down event with key: ${evt.key}`)
        this.notifyAll("keyDown", evt.key)
    }
    handleKeyUp(evt){
        this.notifyAll("keyUp", evt.key)
    }
}