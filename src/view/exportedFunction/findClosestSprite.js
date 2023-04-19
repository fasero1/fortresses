import { surfacePlates } from './constants'

export function findClosestSprite(spritesArray, sprite) {
  let closestSprite = null
  let closestDistance = Infinity

  for (let i = 0; i < surfacePlates; i++) {
    let distance = Math.hypot(
      spritesArray[i].getBounds().x - sprite.getBounds().x,
      spritesArray[i].getBounds().y - sprite.getBounds().y
    )
    if (distance < closestDistance) {
      closestSprite = spritesArray[i]
      closestDistance = distance
    }
  }

  return closestSprite
}
