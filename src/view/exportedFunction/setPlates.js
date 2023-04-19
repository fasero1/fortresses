export function setPlates(gameSurfaces, draggedElement, closestSprite) {
  let riverFirstIndex = 0
  let riverSecondIndex = 0
  let neighbourElementProperty = [
    gameSurfaces[closestSprite.id - 20].sides[2],
    gameSurfaces[closestSprite.id + 1].sides[3],
    gameSurfaces[closestSprite.id + 20].sides[0],
    gameSurfaces[closestSprite.id - 1].sides[1]
  ]

  for (let i = 0; i < draggedElement.sides.length; i++) {
    riverFirstIndex = draggedElement.sides.findIndex(([element]) => element === 'river')
    riverSecondIndex = draggedElement.sides.findLastIndex(([element]) => element === 'river')
    if (draggedElement.id === 0) continue
    if (draggedElement.id < 12) {
      if (
        draggedElement.sides[riverFirstIndex][0] !== neighbourElementProperty[riverFirstIndex][0] &&
        draggedElement.sides[riverSecondIndex][0] !== neighbourElementProperty[riverSecondIndex][0]
      ) {
        return false
      }
    }

    if (draggedElement.sides[i][0] !== neighbourElementProperty[i][0] && neighbourElementProperty[i][0] !== 'empty') {
      return false
    }
  }

  closestSprite.sprite.texture = draggedElement.sprite.texture
  closestSprite.angle = draggedElement.angle
  closestSprite.sides = draggedElement.sides
  return true
}
