class Sprite {
    constructor({
                    position,
                    image,
                    frames = {max: 1, hold: 10},
                    sprites,
                    animate = false,
                    scale = 1,
                    isInteracting = false,
                    interactionAsset = null,
                }) {
        this.position = position
        this.image = new Image()
        this.frames = {...frames, val: 0, elapsed: 0}
        this.image.onload = () => {
            this.width = (this.image.width / this.frames.max) * scale
            this.height = this.image.height * scale
        }
        this.image.src = image.src

        this.animate = animate
        this.sprites = sprites
        this.opacity = 1

        this.scale = scale
        this.isInteracting = isInteracting
        this.interactionAsset = interactionAsset
    }

    draw() {
        c.save()
        c.globalAlpha = this.opacity

        const crop = {
            position: {
                x: this.frames.val * (this.width / this.scale),
                y: 0
            },
            width: this.image.width / this.frames.max,
            height: this.image.height
        }

        const image = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            width: this.image.width / this.frames.max,
            height: this.image.height
        }

        c.drawImage(
            this.image,
            crop.position.x,
            crop.position.y,
            crop.width,
            crop.height,
            image.position.x,
            image.position.y,
            image.width * this.scale,
            image.height * this.scale
        )

        c.restore()

        if (!this.animate) return

        if (this.frames.max > 1) {
            this.frames.elapsed++
        }

        if (this.frames.elapsed % this.frames.hold === 0) {
            if (this.frames.val < this.frames.max - 1) this.frames.val++
            else this.frames.val = 0
        }
    }
}

class Map {
    static WIDTH_TILES = 169
    static TILE_SIZE = 12
    static ZOOM = 4
}

class Boundary {
    static width = Map.TILE_SIZE * Map.ZOOM
    static height = Map.TILE_SIZE * Map.ZOOM

    constructor({position}) {
        this.position = position
        this.width = Boundary.width
        this.height = Boundary.height
    }

    draw() {
        c.fillStyle = 'rgba(255, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class Character extends Sprite {
    constructor({
                    position,
                    image,
                    frames = {max: 1, hold: 10},
                    sprites,
                    animate = false,
                    scale = 1,
                    dialogue = [''],
                    noDialogImage = image,
                    withDialogImage = image,
                    portrait = null,
                }) {
        super({
            position,
            image,
            frames,
            sprites,
            animate,
            scale
        })

        this.dialogue = dialogue
        this.dialogueIndex = 0
        this.noDialogImage = noDialogImage
        this.withDialogImage = withDialogImage
        this.portrait = portrait
    }
}
