import { Loader, Spritesheet } from 'pixi.js'

export default class AssetsPreloader {
  constructor(assets) {
    this.loader = Loader.shared

    this.assets = assets

    this.totalItems = Object.values(this.assets).flat().length
    this.loadedItems = 0

    this.images = []
    this.fonts = []
    this.atlases = []

    this.onComplete = null
  }

  preload() {
    // if (this.assets.atlases) this.loadAtlases()
    if (this.assets.images) this.loadImages()
    if (this.assets.fonts) this.loadFonts()

    this.loader.load(() => this.onCompletePreload())
  }

  // loadAtlases() {
  //   this.loader.add(this.assets.atlases[0].id, this.assets.atlases[0].src)
  //   this.loader.add(this.assets.atlases[1].id, this.assets.atlases[1].src)
  //   const jsonData = this.loader.resources[this.assets.atlases[0].id].data
  //   const imageData = this.loader.resources[this.assets.atlases[1].id].texture
  //   const spritesheet = new Spritesheet(imageData, jsonData)
  //   spritesheet.parse(() => {
  //     console.log(spritesheet)
  //   })
  // }

  loadImages() {
    this.assets.images.forEach((img) => {
      this.loader.add(img.id, img.src, (res) => {
        this.images.push(res.texture)
        this.loadedItems++
      })
    })
  }

  loadFonts() {
    const head = document.getElementsByTagName('head')[0]

    this.assets.fonts.forEach((font) => {
      this.loader.add(font.id, font.src, (res) => {
        this.loadedItems++

        const s = document.createElement('style')
        s.type = 'text/css'
        s.appendChild(
          document.createTextNode('@font-face {font-family: ' + font.id + '; src: url(' + font.src + ');' + '}')
        )

        head.appendChild(s)
      })
    })
  }

  onCompletePreload() {
    this.onComplete()
  }
}
