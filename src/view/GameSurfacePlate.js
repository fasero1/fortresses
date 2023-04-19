import Container from '../../libs/Container'
import Sprite from '../../libs/Sprite'

export default class GameSurfacePlate extends Container {
  constructor(id) {
    super()

    this.id = id
    this.sides = [
      ['empty', false],
      ['empty', false],
      ['empty', false],
      ['empty', false]
    ]
    this.church = false
    this.sprite = new Sprite('gameSurface.png')

    this.createChildren()
  }

  createChildren() {
    this.addChild(this.sprite)
  }
}
