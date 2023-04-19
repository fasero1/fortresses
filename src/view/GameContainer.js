import Container from '../../libs/Container'
import GameSurface from './GameSurface'
import Plates from './Plates'
import { gameSurfaceHeight, gameSurfaceWigth, rotateAngle, rotateButton } from './exportedFunction/constants'

export default class GameContainer extends Container {
  constructor() {
    super()

    this.gameSurface = new GameSurface(gameSurfaceWigth, gameSurfaceHeight)
    this.tile = new Plates()
    this.draggedElement = null
    this.dragging = false
    this.pointerData = null

    this.createChildren()
    this.subscribe()
  }

  createChildren() {
    this.addChild(this.gameSurface)
    this.addChild(this.tile)
  }

  subscribe() {
    this.tile.plates.forEach((plate) => {
      plate.on('pointerdown', this.onPointerDownPlate.bind(this, plate))
      plate.on('pointerup', this.onPointerUpPlate.bind(this, plate))
      plate.on('pointerupoutside', this.onPointerUpPlate.bind(this, plate))
      plate.on('pointermove', this.onPointerMovePlate.bind(this, plate.id))
    })

    window.addEventListener('keydown', this.onKeyDown.bind(this))
  }

  onPointerDownPlate(plate, event) {
    this.dragging = true
    this.pointerData = event.data
    this.id = plate.id
    this.draggedElement = plate
  }

  onPointerUpPlate(plate, event) {
    if (this.gameSurface.setPlate(this.draggedElement)) {
      this.tile.removeChild(this.draggedElement)
    }
    this.id = null
    this.draggedElement = null
    this.dragging = false
    this.pointerData = null
  }

  onPointerMovePlate(id, event) {
    if (this.dragging) {
      const newPosition = this.pointerData.getLocalPosition(this.tile)
      this.draggedElement.x = newPosition.x
      this.draggedElement.y = newPosition.y
    }
  }

  onKeyDown(event) {
    if (this.dragging && event.keyCode === rotateButton) {
      this.draggedElement.angle += rotateAngle
      this.draggedElement.sides.unshift(this.draggedElement.sides.pop())
    }
  }
}
