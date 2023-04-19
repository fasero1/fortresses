import Container from '../../libs/Container'
import GameSurfacePlate from './GameSurfacePlate'
import { Graphics } from 'pixi.js'
import { setPlates } from './exportedFunction/setPlates'
import { findClosestSprite } from './exportedFunction/findClosestSprite'
import {
  downButton,
  leftButton,
  plateHeight,
  plateWidth,
  rightButton,
  surfacePlates,
  surfacePlatesRow,
  surfacePlatesСolumn,
  upButton
} from './exportedFunction/constants'

export default class GameSurface extends Container {
  constructor(width, height) {
    super()

    this.position = { x: -400, y: -450 }
    this.gameSurfaces = []

    this.createBackground(width, height)
    this.createMask(width, height)
    this.createField()
    this.subscribe()
  }

  createBackground(width, height) {
    this.background = new Graphics()
    this.background.beginFill(0x000000)
    this.background.drawRect(0, 0, width, height)
    this.background.endFill()
    this.addChild(this.background)
  }

  createMask(width, height) {
    this.mask = new Graphics()
    this.mask.beginFill(0xffffff)
    this.mask.drawRect(0, 0, width, height)
    this.mask.endFill()
    this.addChild(this.mask)
  }

  createField() {
    for (let i = 0; i < surfacePlates; i++) {
      this.gameSurfaces[i] = new GameSurfacePlate(i)
      this.gameSurfaces[i].x = (i % surfacePlatesRow) * plateWidth
      this.gameSurfaces[i].y = Math.floor(i / surfacePlatesСolumn) * plateHeight
      this.addChild(this.gameSurfaces[i])
    }
  }

  subscribe() {
    window.addEventListener('keydown', (event) => {
      this.gameSurfaces.forEach((gameSurface) => {
        if (event.keyCode === rightButton) gameSurface.x -= plateWidth
        if (event.keyCode === leftButton) gameSurface.x += plateWidth
        if (event.keyCode === upButton) gameSurface.y += plateHeight
        if (event.keyCode === downButton) gameSurface.y -= plateHeight
      })
    })
  }

  setPlate(draggedElement) {
    return setPlates(this.gameSurfaces, draggedElement, findClosestSprite(this.gameSurfaces, draggedElement))
  }
}
