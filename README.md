# cv

# Developing

## When map is updated in Tiled

- Export new map as image
  - Turn off layers
    - Foreground objects
    - Special zone marker
    - Collisions marker
    - Characters
  - Turn other layers on
  - Zoom to expected level (400%)
  - File > Export as image > Save to `img/cv-infinite.png`
- Export foreground objects as image
  - Turn off all the layers but Foreground objects
  - Zoom to expected level (400%)
  - File > Export as image > Save to `img/foregroundObjects.png`
- Export data
  - File > Export as > save as JSON
  - Find "Collisions marker" object and take `data` array
    - Replace data in `data/collisions.js`
  - Find "Characters" object and take `data` array
    - Replace data in `data/characters.js`
  - Find "Special zone marker" object and take `data` array
    - Replace data in `data/battleZones.js`

## How to minify JS

- install Terser:
  ```
  npm install terser
  ```
- run `terser-minifier.js` in Idea
- result is saved to `cv.min.js`

# Links

## [React example games](https://reactjsexample.com/tag/games/)

- [Top-down pokemon-like game on map!](https://reactjsexample.com/little-pokemon-game-made-in-react-with-hooks/)
  - [github](https://github.com/Underewarrr/pokemon-javascript-react-game?ref=reactjsexample.com)
  - [Develop game from scratch](https://youtu.be/yP5DKzriqXA) - video
  - [Tiled](https://www.mapeditor.org/) - map editor
  - [Top-down game assets](https://itch.io/game-assets/tag-top-down)
- [Another pokemon-like game](https://reactjsexample.com/a-pokemon-like-project-game-where-you-level-up-by-hacking-your-neighbor/)
- [Royal madness](https://reactjsexample.com/client-for-royal-madness-online-game-using-react/) - move man with mouse
- [Shooting ninja](https://reactjsexample.com/shooting-ninja-game-built-with-react/) - cool background
- [Make fish swim](https://reactjsexample.com/arcade-game-on-phaser3-make-that-fish-swim-and-dont-touch-the-spikes-how-long-will-you-last/) - 
  mouse controls, music

## Fonts

- [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)
- [Space Mono](https://fonts.google.com/specimen/Space+Mono)
- [Orbitron](https://fonts.google.com/specimen/Orbitron)
- [Trispace](https://fonts.google.com/specimen/Trispace)
- [VT323](https://fonts.google.com/specimen/VT323)

## Sample Interactive CVs

http://www.rleonardi.com/interactive-resume/