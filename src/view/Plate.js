import Container from '../../libs/Container'
import Sprite from '../../libs/Sprite'
import plateData from '../assets/jsons/platesData.json'

export default class Plate extends Container {
  constructor(plateID) {
    super()

    this.data = JSON.parse(plateData)
    this.id = this.data[plateID].id
    this.sides = this.data[plateID].sides
    this.church = this.data[plateID].church
    this.sprite = new Sprite(this.data[plateID].sprite)

    this.createChildren()
  }

  createChildren() {
    this.addChild(this.sprite)
  }
}
