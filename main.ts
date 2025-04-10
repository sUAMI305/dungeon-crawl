namespace SpriteKind {
    export const Collectible = SpriteKind.create()
    export const Treasure = SpriteKind.create()
    export const Wand = SpriteKind.create()
}
namespace StatusBarKind {
    export const Stamina = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    Main_Player.setPosition(37, 11)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Animation == Player_Animation) {
        Position = 3
        if (Shield_guy == true) {
            animation.runImageAnimation(
            Main_Player,
            assets.animation`myAnim1`,
            100,
            true
            )
        } else if (Shield_guy == false) {
            animation.runImageAnimation(
            Main_Player,
            assets.animation`myAnim0`,
            100,
            true
            )
        }
    } else if (Animation == Cutscene_Lock) {
        animation.stopAnimation(animation.AnimationTypes.All, Main_Player)
    } else {
    	
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("Fire Wand", 1000, function () {
        if (Wand_Equipped == true) {
            if (Position == 1) {
                projectile = sprites.createProjectileFromSprite(assets.image`myImage19`, Main_Player, -50, 0)
            } else if (Position == 2) {
                projectile = sprites.createProjectileFromSprite(assets.image`myImage19`, Main_Player, 50, 0)
            } else if (Position == 3) {
                projectile = sprites.createProjectileFromSprite(assets.image`myImage19`, Main_Player, 0, -50)
            } else if (Position == 4) {
                projectile = sprites.createProjectileFromSprite(assets.image`myImage19`, Main_Player, 0, 50)
            }
        } else if (Wand_Equipped == false) {
        	
        }
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
    mySprite2 = sprites.create(assets.image`myImage3`, SpriteKind.Collectible)
    Main_Player.setPosition(5, 14)
    mySprite2.setPosition(49, 7)
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Main_Player)
    if (Shield_guy == true) {
        if (Position == 1) {
            Main_Player.setImage(img`
                . . . . . f f f f f f . . . . . 
                . . . . f b f e e e e f f . . . 
                . . . f b b b f e e e e f f . . 
                . . . f d d d d f f e e e f . . 
                . . f d b b b b d d f f f f . . 
                . . f b e f f f f b b b e f . . 
                . . f f f e e e f f f f f f f . 
                . . f e e 4 4 f b e 4 4 e f f . 
                . . f f e d d f 1 4 d 4 e e f . 
                . f d d f d d d d 4 e e e f . . 
                . f b b f e e e 4 e e f f . . . 
                . f b b e d d 4 b b b f . . . . 
                . . f b e d d e b b b e . . . . 
                . . . f f e e f 4 4 4 f . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . . . . f f f . . . . . . 
                `)
        } else if (Position == 2) {
            Main_Player.setImage(img`
                . . . . . f f f f f f . . . . . 
                . . . f f e e e e f b f . . . . 
                . . f f e e e e f b b b f . . . 
                . . f e e e f f d d d d f . . . 
                . . f f f f d d b b b b d f . . 
                . . f e b b b f f f f e b f . . 
                . f f f f f f f e e e f f f . . 
                . f f e 4 4 e b f 4 4 e e f . . 
                . f e e 4 d 4 1 f d d e f f . . 
                . . f e e e 4 d d d d f d d f . 
                . . . f f e e 4 e e e f b b f . 
                . . . . f b b b 4 d d e b b f . 
                . . . . e b b b e d d e b f . . 
                . . . . f 4 4 4 f e e f f . . . 
                . . . . . f f f f f f . . . . . 
                . . . . . . f f f . . . . . . . 
                `)
        } else if (Position == 3) {
            Main_Player.setImage(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f b b f f f f f . . 
                . . f f e b e b b e b e f f . . 
                . . f e b f b f f b f b e f . . 
                . . f f f b b e e b b f f f . . 
                . f f e f b f e e f b f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f d f . 
                . . e 4 f b b b b b b f 4 b f . 
                . . 4 d f b b b b b b f d b f . 
                . . 4 4 f e e e e e e f 4 c f . 
                . . . . . f f f f f f . . f . . 
                . . . . . f f . . f f . . . . . 
                `)
        } else if (Position == 4) {
            Main_Player.setImage(assets.image`myImage13`)
        }
    } else if (Shield_guy == false) {
        if (Position == 1) {
            Main_Player.setImage(img`
                . . . . f f f f f f . . . . . . 
                . . . f b f e e e e f f . . . . 
                . . f b b b f e e e e f f . . . 
                . . f 1 1 1 1 f f e e e f . . . 
                . f 1 b b b b 1 1 f f f f . . . 
                . f b e f f f f b b b e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f b b b e d d 4 . . . . . 
                . . . f b b b e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `)
        } else if (Position == 2) {
            Main_Player.setImage(img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f b f . . . 
                . . . f f e e e e f b b b f . . 
                . . . f e e e f f 1 1 1 1 f . . 
                . . . f f f f 1 1 b b b b 1 f . 
                . . . f e b b b f f f f e b f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e b b b f . . . 
                . . . . . e d d e b b b f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `)
        } else if (Position == 3) {
            Main_Player.setImage(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f b b f f f f f . . 
                . . f f e b e b b e b e f f . . 
                . . f e b f b f f b f b e f . . 
                . . f f f b b e e b b f f f . . 
                . f f e f b f e e f b f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f b b b b b b f 4 e . . 
                . . 4 d f b b b b b b f d 4 . . 
                . . 4 4 f e e e e e e f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `)
        } else if (Position == 4) {
            Main_Player.setImage(assets.image`myImage12`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tilePath5`, function (sprite, location) {
    Cutscene_Player()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level17`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level10`)
    Main_Player.setPosition(11, 39)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Animation == Player_Animation) {
        Position = 1
        if (Shield_guy == true) {
            animation.runImageAnimation(
            Main_Player,
            assets.animation`heroWalkShieldLeft`,
            100,
            true
            )
        } else if (Shield_guy == false) {
            animation.runImageAnimation(
            Main_Player,
            assets.animation`myAnim4`,
            100,
            true
            )
        }
    } else if (Animation == Cutscene_Lock) {
        animation.stopAnimation(animation.AnimationTypes.All, Main_Player)
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Wand, function (sprite, otherSprite) {
    Main_Player.sayText("Hey, Look a Wand!", 2000, true)
    sprites.destroy(otherSprite)
    Wand_Equipped = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level21`)
    Main_Player.setPosition(36, 9)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level13`)
    Main_Player.setPosition(97, 3)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chestClosed`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, sprites.castle.tileGrass3)
    }
})
function Cutscene_Player () {
    Animation = Cutscene_Lock
    if (CutscenePlayed == 0) {
        story.startCutscene(function () {
            scene.cameraShake(4, 500)
            controller.moveSprite(Main_Player, 0, 0)
            pause(1000)
            Main_Player.sayText("What was that Noise?!", 2000, true)
            pause(1000)
            Main_Player.sayText("Should I go Up, Down, Or Right?", 2000, true)
            story.showPlayerChoices("Go Down", "Go Right", "Go Up")
            if (story.checkLastAnswer("Go Down")) {
                tiles.setCurrentTilemap(tilemap`level0`)
                Main_Player.setPosition(37, 11)
            }
            if (story.checkLastAnswer("Go Right")) {
                tiles.setCurrentTilemap(tilemap`level10`)
                Main_Player.setPosition(11, 39)
            }
            if (story.checkLastAnswer("Go Up")) {
                tiles.setCurrentTilemap(tilemap`level`)
                Main_Player.setPosition(30, 240)
            }
            CutscenePlayed += 1
            controller.moveSprite(Main_Player, 100, 100)
            story.cancelAllCutscenes()
        })
        Animation = Player_Animation
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Animation == Player_Animation) {
        Position = 2
        if (Shield_guy == true) {
            animation.runImageAnimation(
            Main_Player,
            assets.animation`heroWalkShieldLeft0`,
            100,
            true
            )
        } else if (Shield_guy == false) {
            animation.runImageAnimation(
            Main_Player,
            assets.animation`myAnim2`,
            100,
            true
            )
        }
    } else if (Animation == Cutscene_Lock) {
        animation.stopAnimation(animation.AnimationTypes.All, Main_Player)
    } else {
    	
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (Animation == Player_Animation) {
        if (Shield_guy == true) {
            if (Position == 4) {
                animation.runImageAnimation(
                Main_Player,
                assets.animation`myAnim3`,
                100,
                false
                )
            } else if (Position == 1) {
                animation.runImageAnimation(
                Main_Player,
                assets.animation`heroSideAttackLeft`,
                100,
                false
                )
            } else if (Position == 2) {
                animation.runImageAnimation(
                Main_Player,
                assets.animation`heroSideAttackRight`,
                100,
                false
                )
            }
        }
    } else if (Animation == Cutscene_Lock) {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chestClosed1`, function (sprite, location) {
    if (controller.A.isPressed()) {
    	
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Animation == Player_Animation) {
        Position = 4
        if (Shield_guy == true) {
            animation.runImageAnimation(
            Main_Player,
            assets.animation`Walking Animation`,
            100,
            true
            )
        } else if (Shield_guy == false) {
            animation.runImageAnimation(
            Main_Player,
            assets.animation`myAnim`,
            100,
            true
            )
        }
    } else if (Animation == Cutscene_Lock) {
        animation.stopAnimation(animation.AnimationTypes.All, Main_Player)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chestClosed0`, function (sprite, location) {
    if (controller.A.isPressed()) {
    	
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(img`
        .......................................
        .......................................
        .......................................
        .......................................
        .......................................
        .......................................
        .......................................
        .......................................
        .......................................
        .......................................
        fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff
        ff1111f1111f1111f1111f1111f1111f1111fff
        ff1111f1111f1111f1111f1111f1111f1111fff
        ff1111f1111f1111f1111f1111f1111f1111fff
        ff1111f1111f1111f1111f1111f1111f1111fff
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level16`)
    Main_Player.setPosition(8, 21)
    Wand = sprites.create(assets.image`myImage15`, SpriteKind.Wand)
    Wand.setPosition(220, 36)
})
sprites.onOverlap(SpriteKind.Collectible, SpriteKind.Player, function (sprite, otherSprite) {
    Main_Player.setImage(assets.image`myImage13`)
    sprites.destroy(sprite)
    Main_Player.sayText("Huh, This Looks Cool!", 2000, true)
    Shield_guy = true
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    if (Note2 == 0) {
        game.splash("This is a Message to whoever is still alive out there... ")
        game.splash("Please help Us...")
        pause(2000)
        Main_Player.sayText("I wonder where they could be?", 2000, true)
        Note2 += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark2, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level27`)
    Main_Player.setPosition(237, 6)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight2, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level27`)
    Main_Player.setPosition(5, 6)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level26`)
    Main_Player.setPosition(41, 9)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level8`)
    Main_Player.setPosition(49, 7)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level10`)
    Main_Player.setPosition(11, 39)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level12`)
    Main_Player.setPosition(58, 6)
})
let Note2 = 0
let Wand: Sprite = null
let CutscenePlayed = 0
let mySprite2: Sprite = null
let projectile: Sprite = null
let Wand_Equipped = false
let Shield_guy = false
let Cutscene_Lock = 0
let Position = 0
let Player_Animation = 0
let Animation = 0
let Main_Player: Sprite = null
tiles.setCurrentTilemap(tilemap`level22`)
Main_Player = sprites.create(assets.image`myImage12`, SpriteKind.Player)
controller.moveSprite(Main_Player, 100, 100)
Animation = Player_Animation
scene.cameraFollowSprite(Main_Player)
Position = 4
Main_Player.setPosition(5, 14)
