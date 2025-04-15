# cv

# Developing

## Update map in Tiled

- Add a house on the "House" layer
  - Select layer: All but foreground > Objects > House
  - On the "cv" tileset select house tiles
  - Add house on the map, flip if needed - on the toolbar (or use X shortcut)
- Add a road on the "Road" layer
  - select 4 road tiles on the "cv" tileset and enable Random Mode on the toolbar (or use D shortcut)
  - add road on the map
  - select road sides tiles and apply to the sides of the road
- Add other objects (grass, flowers, bushes, etc.) as needed
- Add animals
  - Go to the folder and choose an animal: `tileset/Animal-asset-pack-02-by-pixel-Predator`
  - Copy and paste it, e.g., `tileset/Animal-asset-pack-02-by-pixel-Predator/Selection31.png`
  - Rename indicating the size: `tileset/Animal-asset-pack-02-by-pixel-Predator/24x24-sheep.png`
  - Adjust image size:
    - open `tileset/Animal-asset-pack-02-by-pixel-Predator/24x24-sheep.png` in Seashore
    - Image > Scale image:
      - Width = 24px
      - Height = 24px
    - Save image
  - create a new tileset in Tiled:
    - File > New > New Tileset...
    - choose source: `tileset/Animal-asset-pack-02-by-pixel-Predator/24x24-sheep.png`
    - set name: `sheep`
    - set Tile width/height = 12 px
    - Save as: `Tiled/ChrisCourses/SheepTileset.tsx`
  - Select "Animals" layer and add an animal from the new tileset
  - In IDEA
    - commit files
      - `Tiled/ChrisCourses/SheepTileset.tsx`
      - `tileset/Animal-asset-pack-02-by-pixel-Predator/24x24-sheep.png`
- Add a character on the "Characters" layer
  - browse characters in `tileset` folder and choose one, e.g., `tileset/NinjaAdventure/Actor/Characters/SamuraiBlue`
  - create a new tileset in Tiled: 
    - File > New > New Tileset...
    - choose source: `tileset/NinjaAdventure/Actor/Characters/SamuraiBlue/SpriteSheet.png`
    - set name: `SamuraiBlue`
    - set Tile width/height = 16 px
    - Save as: `Tiled/ChrisCourses/SamuraiBlueTileset.tsx`
  - on the newly added tileset, select the top-left tile with character
  - add selected character on the map
  - prepare images under `img/samuraiBlue` folder
    - Faceset image
      - copy `tileset/NinjaAdventure/Actor/Characters/SamuraiBlue/Faceset.png` to `img/samuraiBlue/Faceset.png`
    - Idle images
      - copy `tileset/NinjaAdventure/Actor/Characters/SamuraiBlue/SeparateAnim/Idle.png` to `img/samuraiBlue/IdleWithDialog.png`
      - open `img/samuraiBlue/IdleWithDialog.png` in Seashore
      - Image > Size & Position:
        - Width = 80px
        - Height = 32px
      - Use Position Tool to move image down
      - File > Open: `img/dialog/DialogInfo.png`
      - `img/dialog/DialogInfo.png`: select all, copy, and paste into `img/samuraiBlue/IdleWithDialog.png`.
        It will be added as a new Layer.
      - Adjust characters according to dialogs:
        - select the layer with characters again
        - press M (Rectangle Select tool)
        - select character
        - press Cmd+F - selected character will be extracted as a new layer
        - move it according to the dialog
        - repeat - don't forget to select the first layer with characters again
      - Save image
      - Drop layer with dialogs and save as `img/samuraiBlue/IdleNoDialog.png`
  - In IDEA
    - commit files
      - `img/samuraiBlue/Faceset.png`
      - `img/samuraiBlue/IdleNoDialog.png`
      - `img/samuraiBlue/IdleWithDialog.png`
      - `Tiled/ChrisCourses/SamuraiBlueTileset.tsx`
- Add/update collision markers
- Add/update foreground objects

## Update images and data

- In Tiled export new map as image:
  - Turn off layers
    - "Foreground objects"
    - "Not for background image"
  - Turn other layers on
  - Zoom to expected level (400%)
  - File > Export as image > Save to `img/cv-infinite.png`
- Export foreground objects as image:
  - Turn off all the layers but "Foreground objects"
  - Zoom to expected level (400%)
  - File > Export as image > Save to `img/foregroundObjects.png`
- Export data:
  - File > Export as > save as JSON
  - Find "Collisions marker" object and take `data` array
    - Replace data in `data/collisions.js`
  - Find "Characters" object and take `data` array
    - Replace data in `data/characters.js`
  - Find "Special zone marker" object and take `data` array
    - Replace data in `data/battleZones.js`

## Minify JS

- install Terser:
  ```
  npm install terser
  ```
- run `terser-minifier.js` in Idea
- result is saved to `cv.min.js`

## Test locally



# Deploying

[How to deploy with Github Pages](https://pages.github.com/)

## How to release changes

- Checkout `master` branch
- Make changes to source code
- Minify JS - [see above](#how-to-minify-js)
- Open `index.html` in a browser to check changes
- Commit and push changes to `master`
- Checkout `release` branch
- Merge `master` branch into `release` branch. Accept "yours" changes on conflicts where files are deleted in `release` branch and modified in `master` branch.
- Push `release` branch - GitHub Actions will trigger the build and deploy it.
- Check changes on the site: https://cv.pfilaretov42.dev
  
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