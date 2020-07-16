import Component from '../../components/Component.js'
import InputHandler from '../../inputHandler.js'
import Tiles from '../../components/tiles.js'
import Player from '../../components/player.js'
import BlackBox from '../../components/blackBox.js'

const STEP = 5

export default class TestStage extends Component{
    constructor(){
        super()
        this.state = {
            positionX: 0,
            map: [],
            tiles: null,
            xv:0,
            yv:0,
            x:50,
            y:1920,
            playerSize: 40,
            tileSize: 60
        }
        var inputHandler = new InputHandler()
        inputHandler.subscribe('keyDown',(key)=>this.moveCamera('down', key))
        inputHandler.subscribe('keyUp', (key)=>this.moveCamera('up', key))
        this.load()
    }
    load(){
        const {playerSize, tileSize} = this.state
        const map = [
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 6, 8, 13, 6, 8, 8, 8, 7, 4, 4, 4, 2, 8, 7, 6, 7, 6, 8, 8, 10, 8, 8, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 6, 8, 3, 8, 8, 7, 0, 14, 3, 11, 2, 7, 0, 0, 12, 0, 6, 7, 14, 13, 4, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 5, 8, 8, 8, 15, 14, 8, 8, 15, 0, 12, 14, 3, 8, 15, 0, 14, 8, 8, 15, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 5, 8, 8, 8, 8, 8, 7, 6, 13, 2, 8, 8, 8, 8, 7, 0, 6, 10, 8, 8, 15, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 6, 7, 6, 7, 6, 7, 14, 1, 8, 15, 6, 8, 8, 7, 0, 0, 0, 0, 6, 8, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 12, 2, 15, 14, 15, 14, 7, 14, 8, 8, 15, 5, 7, 0, 0, 0, 0, 0, 0, 6, 15, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 2, 15, 6, 11, 4, 6, 8, 13, 14, 8, 8, 7, 6, 10, 11, 12, 0, 0, 12, 0, 0, 14, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 14, 8, 15, 14, 15, 14, 8, 8, 8, 8, 7, 0, 0, 0, 14, 7, 0, 2, 7, 0, 0, 6, 15, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 6, 8, 8, 8, 10, 8, 8, 8, 10, 7, 0, 0, 0, 2, 13, 0, 0, 0, 0, 0, 0, 0, 4, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 6, 8, 8, 3, 8, 8, 7, 0, 12, 0, 14, 15, 0, 6, 15, 0, 12, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 6, 8, 8, 8, 7, 0, 0, 6, 3, 8, 8, 15, 14, 8, 3, 8, 11, 0, 12, 14, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 12, 14, 7, 6, 7, 0, 0, 0, 0, 5, 8, 8, 8, 8, 10, 8, 7, 12, 0, 6, 8, 15, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 14, 7, 6, 15, 0, 12, 0, 0, 0, 2, 8, 7, 6, 8, 13, 14, 7, 14, 7, 0, 14, 7, 4, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 4, 0, 14, 7, 14, 7, 0, 0, 0, 0, 4, 0, 14, 8, 8, 7, 14, 7, 12, 14, 8, 15, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 14, 8, 3, 13, 0, 0, 0, 0, 14, 15, 0, 6, 10, 7, 14, 7, 14, 8, 8, 7, 6, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 2, 8, 8, 8, 7, 0, 0, 0, 14, 8, 8, 15, 0, 0, 14, 8, 15, 6, 7, 4, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 6, 8, 7, 0, 0, 0, 0, 6, 8, 7, 4, 0, 0, 6, 8, 8, 15, 14, 15, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 6, 15, 0, 0, 0, 12, 14, 13, 0, 0, 0, 14, 15, 6, 8, 8, 8, 8, 15, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 4, 14, 3, 15, 5, 8, 8, 11, 2, 11, 6, 8, 3, 7, 6, 8, 7, 5, 15, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 14, 7, 6, 8, 8, 8, 8, 15, 12, 0, 0, 5, 8, 11, 14, 7, 0, 6, 8, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 14, 8, 15, 14, 8, 8, 8, 7, 6, 8, 15, 0, 5, 8, 3, 8, 15, 0, 0, 6, 15, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 2, 3, 8, 8, 10, 8, 7, 6, 13, 0, 0, 5, 8, 3, 8, 8, 8, 8, 13, 0, 12, 14, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 5, 8, 8, 3, 13, 14, 3, 8, 3, 3, 8, 8, 8, 8, 8, 8, 8, 8, 3, 8, 8, 15, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        ]
        var tiles = new Tiles('./src/assets/img/tilesLab2.png', map, tileSize,tileSize, 8)
        var player = new Player(playerSize)
        var blackBox = new BlackBox(38*60)
        this.setState({tiles, map, player, blackBox})
    }
    moveCamera(evt, key){
        var {xv, yv} = this.state
        switch(key){
            case 'ArrowRight':
                xv=evt=='down'?1:0
                break
            case 'ArrowLeft':
                xv=evt=='down'?-1:0
                break
            case 'ArrowUp':
                yv=evt=='down'?-1:0
                break
            case 'ArrowDown':
                yv=evt=='down'?1:0
                break
        }
        this.setState({xv, yv})
    }
    findTile(x, y){
        const {playerSize, tileSize, map} = this.state
        const mazeX = Math.floor((x)/tileSize)
        const mazeY = Math.floor((y)/tileSize)
        const type = map[mazeY][mazeX]
        //console.log('Tile:' + `mX:${mazeX}, my:${mazeY} - ${type}`)
        //console.log(type)
        return(
            {mazeX, mazeY, type}
        )
    }
    movePlayer(xv, yv){
        var {x, y, playerSize, tileSize, map} = this.state
        const mazeX = (x + 640)
        const mazeY = (y + 360)
        console.log(`Tx:${mazeX}, Ty:${mazeY} - 11x(${tileSize*11} , ${(map.length - 11)*tileSize})`)
        if(yv==-1){ //UP
            if(mazeY%tileSize<=playerSize/2){
                if((mazeX%tileSize<=playerSize/4 || mazeX%tileSize>=tileSize-playerSize/4) && (mazeY >= tileSize*11) && (mazeY<= (map.length-11)*tileSize) ){
                    console.log('WallJump1')
                }else{
                    const tile = this.findTile(mazeX, mazeY-tileSize).type
                    if(tile==3 || tile==5 || tile==8 || tile==12 || tile==13 || tile==14 || tile==15 || tile==9){
                        console.log('NOT PASSSS')
                    }else{
                        y += yv*STEP
                    }
                }
            }else{
                y += yv*STEP
            }
        }else if(yv==1){
            if(mazeY%tileSize>=tileSize-playerSize/2){
                if((mazeX%tileSize<=playerSize/4 || mazeX%tileSize>=tileSize-playerSize/4) && (mazeY >= tileSize*11) && (mazeY<= (map.length-11)*tileSize)){
                    console.log('WallJump2')
                }else{
                    const tile = this.findTile(mazeX, mazeY+tileSize).type
                    if(tile==4 || tile==5 || tile==6 || tile==7 || tile==8 || tile==10 || tile==13 || tile==9){
                        console.log('NOT PASSSS')
                    }else{
                        y += yv*STEP
                    }
                }
            }else{
                y += yv*STEP
            }
        }
        if(xv==1){
            if(mazeX%tileSize>=tileSize-playerSize/2){
                if((mazeY%tileSize<=playerSize/4 || mazeY%tileSize>=tileSize-playerSize/4) && (mazeY >= tileSize*11) && (mazeY<= (map.length-11)*tileSize)){
                    console.log('WallJump3')
                }else{
                    const tile = this.findTile(mazeX+tileSize, mazeY).type
                    if(tile==0 || tile==2 || tile==4 || tile==5 || tile==6 || tile==9 || tile==12 || tile==14){
                        console.log('NOT PASSSS')
                    }else{
                        x += xv*STEP
                    }
                }
            }else{
                x += xv*STEP
            }
        }else if(xv==-1){
            if(mazeX%tileSize<=playerSize/2){
                if((mazeY%tileSize<=playerSize/4 || mazeY%tileSize>=tileSize-playerSize/4) && (mazeY >= tileSize*11 && mazeY<= (map.length-11)*tileSize)){
                    console.log('WallJump4')
                }else{
                    const tile = this.findTile(mazeX-tileSize, mazeY).type
                    if(tile==0 || tile==4 || tile==7 || tile==9 || tile==11 || tile==12 || tile==13 || tile==15){
                        console.log('NOT PASSSS')
                    }else{
                        x += xv*STEP
                    }
                }
            }else{
                x += xv*STEP
            }
        }
        return([ x, y ])
    }
    update(){
        var {player, tiles, blackBox, x, xv, y, yv} = this.state;
        [x, y] = this.movePlayer(xv, yv)
        //console.log(`X:${x}, Y:${y}`)
        if(!!tiles)tiles.update(x, y)
        blackBox.update(1, y)
        player.update(xv, yv)
        this.setState({x, y})
    }
    render(ctx){
        const {tiles, blackBox, player} = this.state
        ctx.fillStyle = "white"
        ctx.fillRect(0,0,1280,720)
        if(!!tiles)tiles.render(ctx)
        if(!!blackBox)blackBox.render(ctx)
        if(!!player)player.render(ctx)
        // ctx.fillStyle="blue"
        // ctx.fillRect(this.state.positionX,0,10,10)
    }
}