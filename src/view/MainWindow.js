import GameWindow from '../../libs/GameWindow'
import LayoutHelper from '../../libs/LayoutHelper'
import GameContainer from './GameContainer'

export default class MainWindow extends GameWindow {
  constructor() {
    super()
    this.gameContainer = new GameContainer()

    this.createChildren()
  }

  createChildren() {
    this.addChild(this.gameContainer)
  }

  subscribe(event) {}

  onResize() {
    const { gameWidth, gameHeight, aspectRatio } = LayoutHelper
  }

  onTick() {}
}
