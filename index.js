// TODO - add favicon of the site
// TODO - need sound?
// TODO - battle scenes - remove?
// TODO - see issues in DevTools - add DOCTYPE, etc

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const MAP_WIDTH_TILES = 169
const collisionsMap = []
for (let i = 0; i < collisions.length; i += MAP_WIDTH_TILES) {
    collisionsMap.push(collisions.slice(i, MAP_WIDTH_TILES + i))
}

const battleZonesMap = []
for (let i = 0; i < battleZonesData.length; i += MAP_WIDTH_TILES) {
    battleZonesMap.push(battleZonesData.slice(i, MAP_WIDTH_TILES + i))
}

const charactersMap = []
for (let i = 0; i < charactersMapData.length; i += MAP_WIDTH_TILES) {
    charactersMap.push(charactersMapData.slice(i, MAP_WIDTH_TILES + i))
}

const boundaries = []
const offset = {
    x: -270,
    y: -2355
}

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol !== 0) {
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
        }
    })
})

const battleZones = []
battleZonesMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol !== 0) {
            battleZones.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
        }
    })
})

const characters = []

const villagerNoDialogImg = new Image()
villagerNoDialogImg.src = './img/villager/IdleNoDialog.png'
const villagerWithDialogImg = new Image()
villagerWithDialogImg.src = './img/villager/IdleWithDialog.png'

const villager3NoDialogImg = new Image()
villager3NoDialogImg.src = './img/villager3/IdleNoDialog.png'
const villager3WithDialogImg = new Image()
villager3WithDialogImg.src = './img/villager3/IdleWithDialog.png'

const oldManNoDialogImg = new Image()
oldManNoDialogImg.src = './img/oldMan/IdleNoDialog.png'
const oldManWithDialogImg = new Image()
oldManWithDialogImg.src = './img/oldMan/IdleWithDialog.png'

const boyNoDialogImg = new Image()
boyNoDialogImg.src = './img/boy/IdleNoDialog.png'
const boyWithDialogImg = new Image()
boyWithDialogImg.src = './img/boy/IdleWithDialog.png'

const nobleNoDialogImg = new Image()
nobleNoDialogImg.src = './img/noble/IdleNoDialog.png'
const nobleWithDialogImg = new Image()
nobleWithDialogImg.src = './img/noble/IdleWithDialog.png'

const greenManNoDialogImg = new Image()
greenManNoDialogImg.src = './img/greenMan/IdleNoDialog.png'
const greenManWithDialogImg = new Image()
greenManWithDialogImg.src = './img/greenMan/IdleWithDialog.png'

const masterNoDialogImg = new Image()
masterNoDialogImg.src = './img/master/IdleNoDialog.png'
const masterWithDialogImg = new Image()
masterWithDialogImg.src = './img/master/IdleWithDialog.png'

// TODO - add characters' portrait in the interaction box
// ToDO - villager3, noble, etc - cut 1 pixel? there is a border
charactersMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        // 2108 === villager
        if (symbol === 2108) {
            characters.push(
                new Character({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    },
                    image: villagerNoDialogImg,
                    withDialogImage: villagerWithDialogImg,
                    frames: {
                        max: 4,
                        hold: 60
                    },
                    scale: 3,
                    animate: true,
                    dialogue: [summaryText1, summaryText2]
                })
            )
        }
        // 2080 === oldMan
        else if (symbol === 2080) {
            characters.push(
                new Character({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    },
                    image: oldManNoDialogImg,
                    withDialogImage: oldManWithDialogImg,
                    frames: {
                        max: 4,
                        hold: 60
                    },
                    scale: 3,
                    animate: true,
                    dialogue: [contactsText1, contactsText2]
                })
            )
        }
        // 2136 === boy
        else if (symbol === 2136) {
            characters.push(
                new Character({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    },
                    image: boyNoDialogImg,
                    withDialogImage: boyWithDialogImg,
                    frames: {
                        max: 4,
                        hold: 60
                    },
                    scale: 3,
                    animate: true,
                    dialogue: [skillsText1, skillsText2]
                })
            )
        }
        // 3287 === villager3
        else if (symbol === 3287) {
            characters.push(
                new Character({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    },
                    image: villager3NoDialogImg,
                    withDialogImage: villager3WithDialogImg,
                    frames: {
                        max: 4,
                        hold: 60
                    },
                    scale: 3,
                    animate: true,
                    dialogue: [educationText1, educationText2]
                })
            )
        }
        // 3259 === noble
        else if (symbol === 3259) {
            characters.push(
                new Character({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    },
                    image: nobleNoDialogImg,
                    withDialogImage: nobleWithDialogImg,
                    frames: {
                        max: 4,
                        hold: 60
                    },
                    scale: 3,
                    animate: true,
                    dialogue: [okkoExperienceText1, okkoExperienceText2]
                })
            )
        }
        // 3203 === greenman
        else if (symbol === 3203) {
            characters.push(
                new Character({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    },
                    image: greenManNoDialogImg,
                    withDialogImage: greenManWithDialogImg,
                    frames: {
                        max: 4,
                        hold: 60
                    },
                    scale: 3,
                    animate: true,
                    dialogue: [epamExperienceText1, epamExperienceText2]
                })
            )
        }
        // 3231 === master
        else if (symbol === 3231) {
            characters.push(
                new Character({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    },
                    image: masterNoDialogImg,
                    withDialogImage: masterWithDialogImg,
                    frames: {
                        max: 4,
                        hold: 60
                    },
                    scale: 3,
                    animate: true,
                    dialogue: [bccExperienceText1, bccExperienceText2]
                })
            )
        }

        if (symbol !== 0) {
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
        }
    })
})

const backgroundImage = new Image()
backgroundImage.src = './img/cv-infinite.png'

const foregroundImage = new Image()
foregroundImage.src = './img/foregroundObjects.png'

const playerDownImage = new Image()
playerDownImage.src = './img/playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = './img/playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = './img/playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = './img/playerRight.png'

const player = new Sprite({
    position: {
        x: 560,
        y: 250
    },
    image: playerDownImage,
    frames: {
        max: 4,
        hold: 10
    },
    sprites: {
        up: playerUpImage,
        left: playerLeftImage,
        right: playerRightImage,
        down: playerDownImage
    },
    // This is for initial dialog of user instructions
    isInteracting: true,
    interactionAsset: {
        dialogueIndex: -1,
        dialogue: [
            welcomeText1,
            welcomeText2,
            welcomeText3,
        ]
    }
})

const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: backgroundImage
})

const foreground = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: foregroundImage
})

const keys = {
    up: {
        pressed: false
    },
    left: {
        pressed: false
    },
    down: {
        pressed: false
    },
    right: {
        pressed: false
    }
}

const movables = [
    background,
    ...boundaries,
    foreground,
    ...battleZones,
    ...characters
]
const renderables = [
    background,
    ...boundaries,
    ...battleZones,
    ...characters,
    player,
    foreground
]

const battle = {
    initiated: false
}

function animate() {
    const animationId = window.requestAnimationFrame(animate)
    renderables.forEach((renderable) => {
        renderable.draw()
    })

    let moving = true
    player.animate = false

    if (battle.initiated) return

    // activate a battle
    if (keys.up.pressed || keys.left.pressed || keys.down.pressed || keys.right.pressed) {
        for (const battleZone of battleZones) {
            const overlappingArea =
                (Math.min(player.position.x + player.width, battleZone.position.x + battleZone.width) -
                    Math.max(player.position.x, battleZone.position.x)) *
                (Math.min(player.position.y + player.height, battleZone.position.y + battleZone.height) -
                    Math.max(player.position.y, battleZone.position.y))

            if (rectangularCollision({
                    rectangle1: player,
                    rectangle2: battleZone
                }) &&
                overlappingArea > (player.width * player.height) / 2 &&
                Math.random() < 0.01
            ) {
                // deactivate current animation loop
                window.cancelAnimationFrame(animationId)

                audio.initBattle.play()
                audio.battle.play()

                battle.initiated = true
                gsap.to('#overlappingDiv', {
                    opacity: 1,
                    repeat: 3,
                    yoyo: true,
                    duration: 0.4,
                    onComplete() {
                        gsap.to('#overlappingDiv', {
                            opacity: 1,
                            duration: 0.4,
                            onComplete() {
                                // activate a new animation loop
                                initBattle()
                                animateBattle()
                                gsap.to('#overlappingDiv', {
                                    opacity: 0,
                                    duration: 0.4
                                })
                            }
                        })
                    }
                })
                break
            }
        }
    }

    if (keys.up.pressed && lastKey === KeysPressed.UP) {
        player.animate = true
        player.image = player.sprites.up

        checkForCharacterCollision({
            characters,
            player,
            characterOffset: {x: 0, y: 3}
        })

        for (const boundary of boundaries) {
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 3
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }

        if (moving) {
            movables.forEach((movable) => {
                movable.position.y += 3
            })
        }
    } else if (keys.left.pressed && lastKey === KeysPressed.LEFT) {
        player.animate = true
        player.image = player.sprites.left

        checkForCharacterCollision({
            characters,
            player,
            characterOffset: {x: 3, y: 0}
        })

        for (const boundary of boundaries) {
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x + 3,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }

        if (moving) {
            movables.forEach((movable) => {
                movable.position.x += 3
            })
        }
    } else if (keys.down.pressed && lastKey === KeysPressed.DOWN) {
        player.animate = true
        player.image = player.sprites.down

        checkForCharacterCollision({
            characters,
            player,
            characterOffset: {x: 0, y: -3}
        })

        for (const boundary of boundaries) {
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 3
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }

        if (moving) {
            movables.forEach((movable) => {
                movable.position.y -= 3
            })
        }
    } else if (keys.right.pressed && lastKey === KeysPressed.RIGHT) {
        player.animate = true
        player.image = player.sprites.right

        checkForCharacterCollision({
            characters,
            player,
            characterOffset: {x: -3, y: 0}
        })

        for (const boundary of boundaries) {
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x - 3,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }

        if (moving) {
            movables.forEach((movable) => {
                movable.position.x -= 3
            })
        }
    }
}

// animate()

let lastKey = ''
const KeysPressed = {
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right',
}
window.addEventListener('keydown', (e) => {
    if (player.isInteracting) {
        switch (e.key) {
            case ' ':
                player.interactionAsset.dialogueIndex++

                const {dialogueIndex, dialogue} = player.interactionAsset
                if (dialogueIndex <= dialogue.length - 1) {
                    document.querySelector('#characterDialogueBox').innerHTML =
                        player.interactionAsset.dialogue[dialogueIndex]
                    document.querySelector('#characterPressSpaceBox').style.display = 'flex'
                    return
                }

                // finish conversation
                player.isInteracting = false
                player.interactionAsset.dialogueIndex = 0
                document.querySelector('#characterDialogueBox').style.display = 'none'
                document.querySelector('#characterPressSpaceBox').style.display = 'none'

                break
        }
        return
    }

    switch (e.key) {
        case ' ':
            if (!player.interactionAsset) return

            // beginning the conversation
            const firstMessage = player.interactionAsset.dialogue[0]
            document.querySelector('#characterDialogueBox').innerHTML = firstMessage
            document.querySelector('#characterDialogueBox').style.display = 'flex'
            document.querySelector('#characterPressSpaceBox').style.display = 'flex'
            player.isInteracting = true
            break
        case 'w':
        case 'ArrowUp':
            keys.up.pressed = true
            lastKey = KeysPressed.UP
            break
        case 'a':
        case 'ArrowLeft':
            keys.left.pressed = true
            lastKey = KeysPressed.LEFT
            break
        case 's':
        case 'ArrowDown':
            keys.down.pressed = true
            lastKey = KeysPressed.DOWN
            break
        case 'd':
        case 'ArrowRight':
            keys.right.pressed = true
            lastKey = KeysPressed.RIGHT
            break
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
        case 'ArrowUp':
            keys.up.pressed = false
            break
        case 'a':
        case 'ArrowLeft':
            keys.left.pressed = false
            break
        case 's':
        case 'ArrowDown':
            keys.down.pressed = false
            break
        case 'd':
        case 'ArrowRight':
            keys.right.pressed = false
            break
    }
})
