import Container from '../../libs/Container'
import { randomPlateSet } from './exportedFunction/randomPlateSet'

export default class Plates extends Container {
  constructor() {
    super()

    this.plates = randomPlateSet()
    this.position = { x: -600, y: 0 }

    this.createChildren()
  }

  createChildren() {
    for (let i = this.plates.length - 1; i >= 0; i--) {
      this.addChild(this.plates[i])
    }
  }
}
