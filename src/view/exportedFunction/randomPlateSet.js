import Plate from '../Plate'
import { lastRiverPlate, platesNumber } from './constants'

export function randomPlateSet() {
  let riverPlates = []
  let otherPlates = []

  for (let i = 1; i < lastRiverPlate; i++) {
    riverPlates.push(new Plate(i))
  }

  for (let i = lastRiverPlate + 1; i < platesNumber + 1; i++) {
    otherPlates.push(new Plate(i))
  }

  riverPlates.sort(() => Math.random() - 0.5).unshift(new Plate(0))
  riverPlates.push(new Plate(lastRiverPlate))

  otherPlates.sort(() => Math.random() - 0.5)

  let plates = riverPlates.concat(otherPlates)
  return plates
}
