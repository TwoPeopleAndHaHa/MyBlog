---
title: Oasis-Engine学习(2023.4.14已经更名为 Galacean)
description: 详细见官网 https://galacean.antgroup.com/#/
tag:
  - Galacean
  - Vue2
# 置文章左侧展示的 推荐文章 顺序（越小越靠前），或者在推荐列表中隐藏掉不展示
recommend: false
---

# Oasis - Engine(Fly-bird-Demo)

- 参考地址 :   [https://galacean.antgroup.com/#/](https://galacean.antgroup.com/#/)

## 环境版本

**Node**  : 16.17.1

**npm** : 8.15.0

**Node**  : 16.17.1

**oasis-engine** : ^0.8.3

**oasis-engine-toolkit** : ^0.8.1

**oasis-engine/lottie**: ^0.9.2,

**tweenjs/tween**: ^18.6.4

## 安装

- Engine

```javascript
npm install --save oasis-engine
```

- Engine toolkit

```javascript
npm install --save oasis-engine-toolkit
```

## 引入

- Engine

```javascript
import { WebGLEngine, Camera } from 'oasis-engine'
```

- Engine toolkit

```javascript
import { OrbitControl, Stats } from 'oasis-engine-toolkit'
```

## 脚手架创建

使用  Create Oasis App   快速生成的 demo   模板 , vue 和 react 的都有 , 然后根据提示直接生成

## 页面初始化

```html
//HTML <canvas id="canvas_id" class="canvas_class" ref="canvas_ref" />
```

## 按需引入

```javascript
import {
  Camera,
  Color,
  DirectLight,
  MeshRenderer,
  PrimitiveMesh,
  Vector3,
  WebGLEngine,
  AssetType,
  SpriteRenderer,
  Sprite,
  UnlitMaterial,
  Entity,
  Script,
  StaticCollider,
  BoxColliderShape,
  Keys,
  Engine,
  Vector2,
  Rect
} from 'oasis-engine'
//物理属性
import { LitePhysics } from '@oasis-engine/physics-lite'
//缓动动画库
import * as TWEEN from '@tweenjs/tween.js'
```

## 游戏资源加载

- 首先在 script 声明需要请求资源的数组
- 其次创建 Engine 实例 , 并通过 Engine 实例中的 resourceManager 管理与加载资源
  - 在加载资源的同时 , 创建场景和相机 , 无论是 2D 还是 3D 的 , 相机和场景都是必须要的
- 调用 load 方法 ,加载资源 , onProgress 获取加载进度

```javascript
// 1.资源路径和格式数组
const resourceList = [
  {
    url: require('../assets/img/game/background.png'),
    type: AssetType.Texture2D
  },
  {
    url: require('../assets/img/game/pipe.png'),
    type: AssetType.Texture2D
  },
  {
    url: require('../assets/img/game/ground.png'),
    type: AssetType.Texture2D
  },
  {
    url: require('../assets/img/game/bird.png'),
    type: AssetType.Texture2D
  },
  {
    url: require('../assets/img/game/restart.png'),
    type: AssetType.Texture2D
  },
  {
    url: require('../assets/img/game/527-number.png'),
    type: AssetType.Texture2D
  }
]
// 2.创建 Engine 实例
    initEngine() {
      engine = new WebGLEngine('canvas_id')
      // 根据 canvas 元素的 css 样式自动适配
      engine.canvas.resizeByClientSize()
      // 初始化其他必要元素(场景和相机)
      this.initScene()
      this.initCamera()
      // 资源加载
      this.loadResource()
      // 当所有准备工作做好之后调用 , 显示到页面上(必须加)
      engine.run()
    },
// 3.调用 load 方法加载资源, onProgress 监听资源加载进度
    loadResource() {
      engine.resourceManager
        .load(resourceList)
        .onProgress(progress => {
          console.log(' 资源加载进度 ::> ', progress)
        })
        .then(resource => {
          texture2DArr = resource
          console.log(' 资源加载完毕初始化游戏 ::> ', resource)

        })
    },
// 4.创建场景
    initScene() {
      scene = engine.sceneManager.activeScene
      // 创建场景根实体,添加其他组件时直接创建在场景根实体上
      rootEntity = scene.createRootEntity('root')
    },
// 5.创建相机
    initCamera() {
      // 场景相机实体创建相机组件
      cameraEntity = rootEntity.createChild('camera_entity')
      // 设置相机位置
      cameraEntity.transform.setPosition(0.3, 0, 5)
      // 创建相机实例 , 相机实体添加引入的 Camera 组件
      const cameraData = cameraEntity.addComponent(Camera)
      // 相机实例设置属性
      cameraData.isOrthographic = true
      cameraData.orthographicSize =
        engine.canvas.height / Engine._pixelsPerUnit / 2
    },
```

## 初始化游戏元素与逻辑

- 每个模块进行拆分,方便之后维护和更改
- 最好都在 load 返回之后进行初始化

```javascript
this.initBackground()
this.initPipe()
this.initGround()
this.initBird()
this.initDeathEffect()
this.initGUI()
this.initRestart()
this.initScore()
```

## 加载游戏场景

```javascript
    initBackground() {
      const nodeBg = rootEntity.createChild('nodeBg')
      nodeBg.transform.setPosition(0.3, 0, -10)
      // texture2DArr[0]  是加载好的背景资源下标
      nodeBg.addComponent(SpriteRenderer).sprite = new Sprite(
        engine,
        texture2DArr[0]
      )
    },
```

## 加载管道

```javascript
    initPipe() {
      const nodePipe = rootEntity.createChild('nodePipe')
      nodePipe.transform.setPosition(0, 0, -3)
      // 添加脚本组件
      nodePipe.addComponent(ScriptPipe)
    },
```

## 加载背景

```javascript
    initGround() {
      const nodeGround = rootEntity.createChild('nodeGround')
      nodeGround.transform.setPosition(0.3, -4.125, -2)
      nodeGround.transform.setRotation(90, 0, 0)
      const groundRenderer = nodeGround.addComponent(MeshRenderer)
      groundRenderer.mesh = PrimitiveMesh.createPlane(engine, 7.68, 1.28)
      const groundMaterial = new UnlitMaterial(engine)
      groundRenderer.setMaterial(groundMaterial)
      groundMaterial.baseTexture = texture2DArr[2]
      groundMaterial.tilingOffset.set(21, 1, 0, 0)
       // 添加脚本组件
      nodePipe.addComponent(ScriptGround)
    },
```

## 加载小鸟

```javascript
    initBird() {
      const nodeBird = rootEntity.createChild('nodeBird')
      nodeBird.transform.setPosition(-1, 1.15, 0)
      nodeBird.addComponent(SpriteRenderer).sprite = new Sprite(
        engine,
        texture2DArr[3]
      )
       // this.addSpriteRender(nodeBird, texture2DArr[3])
      nodeBird.addComponent(ScriptBird)
    },
```

## 加载死亡效果

```javascript
    initDeathEffect() {
      const nodeDeathEff = rootEntity.createChild('nodeEff')
      nodeDeathEff.transform.setPosition(0, 0, -1)
      nodeDeathEff.transform.setRotation(90, 0, 0)
      const effRenderer = nodeDeathEff.addComponent(MeshRenderer)
      effRenderer.mesh = PrimitiveMesh.createPlane(engine, 20, 20)
      const material = new UnlitMaterial(engine)
      effRenderer.setMaterial(material)
      // 可以是透明的
      material.isTransparent = true
      material.baseColor.set(0, 0, 0, 0)
      nodeDeathEff.addComponent(ScriptDeathEff)
    },
```

## 加载图形用户界面(用来做 canvas 内置交互)

```javascript
    initGUI() {
      nodeGui = rootEntity.createChild('nodeGui')
      nodeGui.transform.setPosition(0.3, 0, 1)
      nodeGui.addComponent(ScriptGUI)
    },
```

## 加载重来按钮

```javascript
    initRestart() {
      const nodeRestart = nodeGui.createChild('nodeRestart')
      nodeRestart.addComponent(SpriteRenderer).sprite = new Sprite(
        engine,
        texture2DArr[4]
      )
    },
```

## 加载分数

```javascript
    initScore() {
      const nodeScore = nodeGui.createChild('nodeScore')
      nodeScore.transform.setPosition(0, 3.2, 0)
      nodeScore.transform.setScale(0.3, 0.3, 0.3)
      nodeScore.addComponent(ScriptScore)
    },
```

## 加载各元素的逻辑(⭐)

- 到此所有的游戏所需要的元素就已经准备完毕,接下来需要去完成每个地方的模块的相关逻辑,这里要介绍到引擎的一个系统, Script 脚本系统 , 脚本系统是连接引擎能力和游戏逻辑的纽带

### 管道脚本逻辑

```javascript
class ScriptPipe extends Script {
  /** 当池中没有管道时，使用该实例进行克隆。 */
  _originPipe
  /** 所有当前管道。 */
  _nowPipeArr = []
  /** 重用池 */
  _pipePool = []
  /** 游戏开始的时间戳。 */
  _curStartTimeStamp
  /**  当管道的x坐标小于-4.6时隐藏。 */
  _pipeHideX = 4.6
  /**  管道的垂直距离。 */
  _pipeVerticalDis = 10.8
  /**  管道水平距离. */
  _pipeHorizontalDis = 4
  /**  管道产生的随机位置范围. */
  _pipeRandomPosY = 3.5
  /**  水管首次亮相时间（ms）。 */
  _pipeDebutTime = 3000
  /**  水平移动速度。 */
  _pipeHorizontalV = 0.003

  onAwake() {
    // 初始化管道实例
    const pipe = (this._originPipe = new Entity(engine))
    const node1 = pipe.createChild('node1')
    const node2 = pipe.createChild('node2')
    const verticalDis = this._pipeVerticalDis
    node1.transform.setPosition(0, -verticalDis / 2, 0)
    node2.transform.setPosition(0, verticalDis / 2, 0)
    node2.transform.setScale(1, -1, 1)
    node1.addComponent(SpriteRenderer).sprite = new Sprite(engine, texture2DArr[1])
    node2.addComponent(SpriteRenderer).sprite = new Sprite(engine, texture2DArr[1])
    this._pipePool.push(pipe)

    // 根据游戏状态的变化控制管道的性能。
    engine.on(GameEvent.stateChange, (gameState) => {
      switch (gameState) {
        case EnumGameState.Idel:
          this.enabled = false
          this._destroyPipe()
          break
        case EnumGameState.Start:
          this.enabled = true
          this._curStartTimeStamp = engine.time.nowTime
          break
        case EnumGameState.End:
          this.enabled = false
          break
      }
    })

    // checkHit 监听时，检查管道和小鸟的碰撞。
    engine.on(GameEvent.checkHit, (birdY) => {
      let len = this._nowPipeArr.length
      for (let i = 0; i < len; i++) {
        let pipePos = this._nowPipeArr[i].transform.position
        if (Math.abs(pipePos.x) < 0.9) {
          if (Math.abs(pipePos.y - birdY) > 1.2) {
            engine.dispatch(GameEvent.gameOver)
          }
          break
        }
      }
    })
  }

  /**
   * 这里每一帧都会做三件事：
   *    1.调整管道的生成
   *    2.调整管道位置。
   *    3.判断是否得分。
   * @param deltaTime - 脚本更新时的deltaTime
   */
  onUpdate(deltaTime) {
    const debutTime = this._pipeDebutTime
    // 水管会在游戏开始后显示 pipeDebutTime。
    if (engine.time.nowTime - this._curStartTimeStamp >= debutTime) {
      let bAddScore = false
      // 在 deltaTime 之后，管道移动的距离。
      const changeVal = deltaTime * this._pipeHorizontalV
      const pipeLen = this._nowPipeArr.length
      const {
        _pipeHorizontalDis: horizontalDis,
        _pipeRandomPosY: randomPosY,
        _pipeHideX: hideX
      } = this
      // 调整所有管道的位置。
      if (pipeLen > 0) {
        for (let i = pipeLen - 1; i >= 0; i--) {
          const pipe = this._nowPipeArr[i]
          const pipeTrans = pipe.transform
          const pipePos = pipeTrans.position
          if (pipePos.x < -hideX) {
            // 隐形管道可以被摧毁。
            this._destroyPipe(i)
          } else {
            if (!bAddScore && pipePos.x > -1 && pipePos.x - changeVal <= -1) {
              // 得到一分。
              engine.dispatch(GameEvent.addScore)
              bAddScore = true
            }
            pipeTrans.setPosition(pipePos.x - changeVal, pipePos.y, pipePos.z)
          }
          // 根据X坐标判断管道是否需要再生。
          if (i == pipeLen - 1 && pipePos.x <= hideX - horizontalDis) {
            this._createPipe(hideX, randomPosY * Math.random() - randomPosY / 2 + 0.8, 0)
          }
        }
      } else {
        // 需要重新生成管道。
        this._createPipe(hideX, randomPosY * Math.random() - randomPosY / 2 + 0.8, 0)
      }
    }
  }

  _createPipe(posX, posY, posZ) {
    const pipePool = this._pipePool
    const pipe = pipePool.length > 0 ? pipePool.pop() : this._originPipe.clone()
    pipe.transform.setPosition(posX, posY, posZ)
    this.entity.addChild(pipe)
    this._nowPipeArr.push(pipe)
  }

  /**
   * 它并没有真正被破坏，我们只是把它放在池子里。
   * @param pipeIndex - 如果 pipeIndex 小于 0，我们回收所有管道
   */
  _destroyPipe(pipeIndex = -1) {
    const { entity, _pipePool, _nowPipeArr } = this
    const removePipe = (pipe) => {
      entity.removeChild(pipe)
      _pipePool.push(pipe)
    }
    if (pipeIndex >= 0) {
      removePipe(_nowPipeArr[pipeIndex])
      _nowPipeArr.splice(pipeIndex, 1)
    } else {
      for (let index = _nowPipeArr.length - 1; index >= 0; index--) {
        removePipe(_nowPipeArr[index])
      }
      _nowPipeArr.length = 0
    }
  }
}
```

### 背景脚本逻辑

```javascript
//背景的脚本
class ScriptGround extends Script {
  /** 交换两块地面以实现不断移动。 */
  _groundMaterial
  /** 水平移动速度。 */
  _groundHorizontalV = 0.0082

  onAwake() {
    this._groundMaterial = this.entity.getComponent(MeshRenderer).getMaterial()
    // 根据游戏状态的变化控制地面的性能。
    engine.on(GameEvent.stateChange, (gameState) => {
      switch (gameState) {
        case EnumGameState.Idel:
        case EnumGameState.Start:
          this.enabled = true
          break
        case EnumGameState.End:
          this.enabled = false
          break
        default:
          break
      }
    })

    //监听checkHit时，检查地面与小鸟的碰撞情况。
    engine.on(GameEvent.checkHit, (birdY) => {
      birdY < groundY && engine.dispatch(GameEvent.gameOver)
    })
  }

  onUpdate(deltaTime) {
    // 在 deltaTime 之后，地面移动的距离。
    this._groundMaterial.tilingOffset.z += deltaTime * this._groundHorizontalV
  }
}
```

### 小鸟脚本逻辑

```javascript
//小鸟脚本
class ScriptBird extends Script {
  /** 精灵表动画的偏移量。 */
  _regions = [new Vector2(0, 0), new Vector2(1 / 3, 0), new Vector2(2 / 3, 0)]
  /** SliceWidth 的倒数。 */
  _reciprocalSliceWidth = 1 / 3
  /** SliceHeight 的倒数 */
  _reciprocalSliceHeight = 1
  /** 帧间隔时间，时间单位为ms。 */
  _frameInterval = 150
  /** 总帧数. */
  _totalFrames = 3
  /** 最大下降速度 */
  _maxDropV = -8
  /** 重力加速度 */
  _gravity = -35
  /** 飞行时给出的初始向上速度 */
  _startFlyV = 10

  _cumulativeTime = 0
  _birdState = EnumBirdState.Alive

  _sprite
  _curFrameIndex
  _startY
  _flyStartTime
  _gameState
  _yoyoTween
  _dropTween

  onAwake() {
    this._initDataAndUI()
    this._initTween()
    this._initListener()
  }

  onUpdate(deltaTime) {
    // 更新小鸟的表现。
    switch (this._birdState) {
      case EnumBirdState.Alive:
        const { _frameInterval, _totalFrames } = this
        this._cumulativeTime += deltaTime
        if (this._cumulativeTime >= _frameInterval) {
          //需要更新 frameIndex。
          const addFrameCount = Math.floor(this._cumulativeTime / _frameInterval)
          this._cumulativeTime -= addFrameCount * _frameInterval
          this._setFrameIndex((this._curFrameIndex + addFrameCount) % _totalFrames)
        }

        //更新鸟类的位置信息。
        if (_gameState == EnumGameState.Start) {
          // 自由落体和匀速运动叠加得到当前位置。
          let endY
          const { _maxDropV, _startFlyV, _gravity } = this
          const transform = this.entity.transform
          const position = transform.position
          // 过了多少时间。
          const subTime = (engine.time.nowTime - this._flyStartTime) / 1000
          // 自由落体多久了。
          const addToMaxUseTime = (_maxDropV - _startFlyV) / _gravity
          if (subTime <= addToMaxUseTime) {
            //自由落体.
            endY = ((_startFlyV + (_startFlyV + subTime * _gravity)) * subTime) / 2 + this._startY
          } else {
            // 以恒定的速度下降。
            endY =
              ((_maxDropV + _startFlyV) * addToMaxUseTime) / 2 +
              _maxDropV * (subTime - addToMaxUseTime) +
              this._startY
          }
          transform.setPosition(position.x, endY, position.z)
        }
        break
      case EnumBirdState.Dead:
        this._setFrameIndex(0)
        break
    }
  }

  onLateUpdate() {
    // 更新位置后，检查碰撞。
    engine.dispatch(GameEvent.checkHit, this.entity.transform.position.y)
  }

  _initDataAndUI() {
    const { entity } = this
    const renderer = entity.getComponent(SpriteRenderer)
    renderer.sprite = this._sprite = new Sprite(engine, texture2DArr[3])
    this._setFrameIndex(0)
  }

  _initTween() {
    const transform = this.entity.transform
    const rotation = transform.rotation
    const position = transform.position
    this._yoyoTween = new TWEEN.Tween(position)
      .to({ y: 0.25 }, 380)
      .repeat(Infinity)
      .onUpdate((target) => {
        transform.position = target
      })
      .yoyo(true)
      .easing(TWEEN.Easing.Sinusoidal.InOut)
    this._dropTween = new TWEEN.Tween(rotation)
      .to({ z: -90 }, 380)
      .onUpdate((target) => {
        transform.rotation = target
      })
      .delay(520)
  }

  _initListener() {
    const transform = this.entity.transform
    engine.on(GameEvent.fly, () => {
      // 记录开始时间和地点。
      this._startY = transform.position.y
      this._flyStartTime = engine.time.nowTime
      //飞行表演。
      this._yoyoTween.stop()
      this._dropTween.stop()
      transform.setRotation(transform.rotation.x, transform.rotation.y, 20)
      this._dropTween.start()
    })

    // 根据游戏状态的变化控制小鸟的表现。
    engine.on(GameEvent.stateChange, (gameState) => {
      _gameState = gameState
      switch (gameState) {
        case EnumGameState.Idel:
          transform.setPosition(0, 0, 0)
          transform.rotation = new Vector3(0, 0, 0)
          this._birdState = EnumBirdState.Alive
          this._yoyoTween.start()
          break
        case EnumGameState.Start:
          break
        case EnumGameState.End:
          this._birdState = EnumBirdState.Dead
          setTimeout(() => {
            const { position, rotation } = transform
            const birdPosY = position.y
            if (birdPosY > groundY) {
              this._yoyoTween.stop()
              this._dropTween.stop()
              new TWEEN.Tween(rotation)
                .duration((birdPosY - groundY) * 40)
                .to({ z: -90 })
                .onUpdate((target) => {
                  transform.rotation = target
                })
                .start()
              new TWEEN.Tween(position)
                .duration((birdPosY - groundY) * 120)
                .to({ y: groundY })
                .onUpdate((target) => {
                  transform.position = target
                })
                .onComplete(() => {
                  engine.dispatch(GameEvent.showGui)
                })
                .start()
            } else {
              engine.dispatch(GameEvent.showGui)
            }
          }, 300)
          break
      }
    })
  }

  _setFrameIndex(frameIndex) {
    if (this._curFrameIndex !== frameIndex) {
      this._curFrameIndex = frameIndex
      const frameInfo = this._regions[frameIndex]
      const region = this._sprite.region
      region.set(frameInfo.x, frameInfo.y, this._reciprocalSliceWidth, this._reciprocalSliceHeight)
      this._sprite.region = region
    }
  }
}
```

### 死亡效果脚本逻辑

```javascript
class ScriptDeathEff extends Script {
  onAwake() {
    const entity = this.entity
    const renderer = entity.getComponent(MeshRenderer)
    const material = renderer.getMaterial()

    // init Tween.
    const baseColor = material.baseColor
    const shockTween = new TWEEN.Tween(baseColor).to({ a: 1 }, 80).repeat(1).yoyo(true).delay(20)
    engine.on(GameEvent.stateChange, (gameState) => {
      switch (gameState) {
        case EnumGameState.End:
          shockTween.start()
          break
      }
    })
  }
}
```

### 交互脚本逻辑

```javascript
class ScriptGUI extends Script {
  onAwake() {
    const { entity } = this
    const resetBtnNode = entity.findByName('nodeRestart')

    // 添加 BoxCollider。
    const boxCollider = resetBtnNode.addComponent(StaticCollider)
    const boxColliderShape = new BoxColliderShape()
    boxColliderShape.setSize(2.14, 0.75, 0.001)
    boxCollider.addShape(boxColliderShape)
    resetBtnNode.addComponent(Script).onPointerClick = () => {
      this.engine.dispatch(GameEvent.reStartGame)
    }

    // 根据游戏状态的变化控制GUI的表现。
    engine.on(GameEvent.stateChange, (gameState) => {
      switch (gameState) {
        case EnumGameState.Idel:
        case EnumGameState.Start:
          resetBtnNode.isActive = false
          break
        case EnumGameState.End:
          break
        default:
          break
      }
    })

    engine.on(GameEvent.showGui, () => {
      resetBtnNode.isActive = true
    })
  }
}
```

### 分数脚本逻辑

```javascript
class ScriptScore extends Script {
  /** 分数使用的精灵数组（0～9）。 */
  _spriteArray = []
  /** 每个数字之间的间隔。 */
  _numInv = 2
  /** 分数中的每个数字。 */
  _scoreEntitys = []
  _scoreRenderer = []
  _myScore = 0

  onAwake() {
    // 初始化精灵数组。
    const spriteArray = this._spriteArray
    // 将数字资源一分为二。
    for (let i = 0; i < 10; i++) {
      spriteArray.push(new Sprite(engine, texture2DArr[5], new Rect(i * 0.1, 0, 0.1, 1)))
    }
    console.log(' spriteArray ::> ', spriteArray)
    console.log(' this ::> ', this)

    engine.on(GameEvent.addScore, () => {
      ++this._myScore
      this._showScore('' + this._myScore)
    })

    // 根据游戏状态的变化来控制分数的表现。
    engine.on(GameEvent.stateChange, (gameState) => {
      switch (gameState) {
        case EnumGameState.Idel:
          this.entity.isActive = false
          break
        case EnumGameState.Start:
          this.entity.isActive = true
          this._myScore = 0
          this._showScore('0')
          break
        case EnumGameState.End:
          break
      }
    })
  }

  _showScore(scoreNumStr) {
    const scoreLen = scoreNumStr.length
    const {
      entity,
      _numInv: inv,
      _scoreEntitys: scoreEntitys,
      _spriteArray,
      _scoreRenderer: scoreRenderers
    } = this
    var nowEntityLen = scoreEntitys.length
    let scoreEntity
    let scoreRenderer
    // 如果实体不够，请新建一个。
    if (scoreLen > nowEntityLen) {
      for (let i = nowEntityLen; i < scoreLen; i++) {
        scoreEntity = new Entity(engine)
        scoreRenderer = scoreEntity.addComponent(SpriteRenderer)
        scoreRenderers.push(scoreRenderer)
        scoreEntitys.push(scoreEntity)
        entity.addChild(scoreEntity)
      }
    }

    // 目前 nowEntityLen >= scoreLen。
    nowEntityLen = scoreEntitys.length
    const startX = ((1 - scoreLen) * inv) / 2
    for (let i = 0; i < nowEntityLen; i++) {
      scoreEntity = scoreEntitys[i]
      if (i >= scoreLen) {
        scoreEntity.isActive = false
      } else {
        scoreEntity.isActive = true
        scoreEntity.transform.setPosition(startX + i * inv, 0, 0)
        console.log(' spriteArray ::> ', _spriteArray)
        console.log(' scoreNumStr[i] ::> ', scoreNumStr[i])
        scoreRenderers[i].sprite = _spriteArray[parseInt(scoreNumStr[i])]
      }
    }
  }
}
```

### 场景根实体的脚本逻辑

```javascript
class GameCtrl extends Script {
  onAwake() {
    engine.on(GameEvent.reStartGame, () => {
      this._setGameState(EnumGameState.Idel)
    })

    engine.on(GameEvent.gameOver, () => {
      this._setGameState(EnumGameState.End)
    })

    const boxCollider = this.entity.addComponent(StaticCollider)
    const boxColliderShape = new BoxColliderShape()
    boxColliderShape.setSize(10, 10, 0.001)
    boxCollider.addShape(boxColliderShape)
  }

  onStart() {
    this._setGameState(EnumGameState.Idel)
  }

  onUpdate() {
    TWEEN.update()
    if (this.engine.inputManager.isKeyDown(Keys.Space)) {
      this._dispatchFly()
    }
  }

  onPointerDown() {
    this._dispatchFly()
  }

  _dispatchFly() {
    switch (_gameState) {
      case EnumGameState.Idel:
        this._setGameState(EnumGameState.Start)
        engine.dispatch(GameEvent.fly)
        break
      case EnumGameState.Start:
        engine.dispatch(GameEvent.fly)
        break
      default:
        break
    }
  }

  /**
   * The status will be distributed to all objects in the game.
   * @param state - EnumGameState
   */
  _setGameState(state) {
    if (_gameState != state) {
      _gameState = state
      engine.dispatch(GameEvent.stateChange, state)
    }
  }
}
```

## 定义变量

```javascript
// 游戏脚本时间的定义
const GameEvent = {
  fly: 'fly',
  stateChange: 'stateChange',
  showGui: 'showGui',
  checkHitGui: 'checkHitGui',
  checkHit: 'checkHit',
  gameOver: 'gameOver',
  addScore: 'addScore',
  reStartGame: 'reStartGame'
}
// 枚举值 , 游戏状态
const EnumGameState = {
  Idel: 0,
  Start: 1,
  End: 2
}
// 枚举值 , 小鸟状态
const EnumBirdState = {
  Alive: 0,
  Dead: 1
}
// 管道检测 Y 的对比值
const groundY = -3.1
// 资源管理器返回的纹理资源数组
let texture2DArr = []
let engine = null
let scene = null
let rootEntity = null
let cameraEntity = null
let nodeGui = null
// 全局的游戏状态,在 GameCtrl 里频繁修改,然后供全局使用
let _gameState = null
```

## 完整 Demo 代码

```html
<template>
  <div class="canvas_wrap">
    <canvas id="canvas_id" class="canvas_class" ref="canvas_ref" />
  </div>
</template>
```

```javascript
<script>
import {
  Camera,
  Color,
  DirectLight,
  MeshRenderer,
  PrimitiveMesh,
  Vector3,
  WebGLEngine,
  AssetType,
  SpriteRenderer,
  Sprite,
  UnlitMaterial,
  Entity,
  Script,
  StaticCollider,
  BoxColliderShape,
  Keys,
  Engine,
  Vector2,
  Rect
} from 'oasis-engine'
import { LitePhysics } from '@oasis-engine/physics-lite'
import * as TWEEN from '@tweenjs/tween.js'
const resourceList = [
  {
    url: require('../assets/img/game/background.png'),
    type: AssetType.Texture2D
  },
  {
    url: require('../assets/img/game/pipe.png'),
    type: AssetType.Texture2D
  },
  {
    url: require('../assets/img/game/ground.png'),
    type: AssetType.Texture2D
  },
  {
    url: require('../assets/img/game/bird.png'),
    type: AssetType.Texture2D
  },
  {
    url: require('../assets/img/game/restart.png'),
    type: AssetType.Texture2D
  },
  {
    url: require('../assets/img/game/527-number.png'),
    type: AssetType.Texture2D
  }
]
const GameEvent = {
  fly: 'fly',
  stateChange: 'stateChange',
  showGui: 'showGui',
  checkHitGui: 'checkHitGui',
  checkHit: 'checkHit',
  gameOver: 'gameOver',
  addScore: 'addScore',
  reStartGame: 'reStartGame'
}
const EnumGameState = {
  Idel: 0,
  Start: 1,
  End: 2
}
const EnumBirdState = {
  Alive: 0,
  Dead: 1
}
const groundY = -3.1
let texture2DArr = []
let engine = null
let scene = null
let rootEntity = null
let cameraEntity = null
let light = null
// let sprite = null
let nodeGui = null
let _gameState = null

export default {
  data() {
    return {}
  },
  methods: {
    initEngine() {
      const designWidth = 768
      const designHeight = 896
      const aspectRatio = designWidth / designHeight
      const canvas = document.querySelector('#canvas_id')
      const parentEle = canvas.parentElement
      let { clientWidth, clientHeight } = parentEle
      if (clientWidth / clientHeight > aspectRatio) {
        clientWidth = clientHeight * aspectRatio
        canvas.style.width = clientWidth + 'px'
      } else {
        clientHeight = clientWidth / aspectRatio
        canvas.style.height = clientHeight + 'px'
      }

      engine = new WebGLEngine('canvas_id')
      engine.physicsManager.initialize(LitePhysics)
      // 根据 canvas 元素的 css 样式自动适配
      engine.canvas.resizeByClientSize(designHeight / clientHeight)

      // 初始化其他
      this.initScene()
      this.initCamera()
      // this.initLight()
      this.loadResource()
      engine.run()
    },
    initScene() {
      // 创建场景
      scene = engine.sceneManager.activeScene
      rootEntity = scene.createRootEntity('root')
    },
    initCamera() {
      //创建相机
      cameraEntity = rootEntity.createChild('camera_entity')
      cameraEntity.transform.setPosition(0.3, 0, 5)

      const cameraData = cameraEntity.addComponent(Camera)
      cameraData.isOrthographic = true
      cameraData.orthographicSize =
        engine.canvas.height / Engine._pixelsPerUnit / 2
    },
    initLight() {
      //创建灯光
      light = rootEntity.createChild('light')
      let directLight = light.addComponent(DirectLight)
      directLight.color = new Color(1.0, 1.0, 1.0)
      directLight.intensity = 0.5
      light.transform.rotation = new Vector3(45, 45, 45)
    },
    loadResource() {
      engine.resourceManager
        .load(resourceList)
        .onProgress(progress => {
          console.log(' 资源加载进度 ::> ', progress)
        })
        .then(resource => {
          texture2DArr = resource
          console.log(' 资源加载完毕初始化游戏 ::> ', resource)
          this.initBackground()
          this.initPipe()
          this.initGround()
          this.initBird()
          this.initDeathEffect()
          this.initGUI()
          this.initRestart()
          this.initScore()
          class GameCtrl extends Script {
            onAwake() {
              engine.on(GameEvent.reStartGame, () => {
                this._setGameState(EnumGameState.Idel)
              })

              engine.on(GameEvent.gameOver, () => {
                this._setGameState(EnumGameState.End)
              })

              const boxCollider = this.entity.addComponent(StaticCollider)
              const boxColliderShape = new BoxColliderShape()
              boxColliderShape.setSize(10, 10, 0.001)
              boxCollider.addShape(boxColliderShape)
            }

            onStart() {
              this._setGameState(EnumGameState.Idel)
            }

            onUpdate() {
              TWEEN.update()
              if (this.engine.inputManager.isKeyDown(Keys.Space)) {
                this._dispatchFly()
              }
            }

            onPointerDown() {
              this._dispatchFly()
            }

            _dispatchFly() {
              switch (_gameState) {
                case EnumGameState.Idel:
                  this._setGameState(EnumGameState.Start)
                  engine.dispatch(GameEvent.fly)
                  break
                case EnumGameState.Start:
                  engine.dispatch(GameEvent.fly)
                  break
                default:
                  break
              }
            }

            /**
             * The status will be distributed to all objects in the game.
             * @param state - EnumGameState
             */
            _setGameState(state) {
              if (_gameState != state) {
                _gameState = state
                engine.dispatch(GameEvent.stateChange, state)
              }
            }
          }
          // GameCtrl controls the global game.
          rootEntity.addComponent(GameCtrl)
        })
    },
    initBackground() {
      const nodeBg = rootEntity.createChild('nodeBg')
      nodeBg.transform.setPosition(0.3, 0, -10)
      // texture2DArr[0]  是加载好的背景资源下标
      nodeBg.addComponent(SpriteRenderer).sprite = new Sprite(
        engine,
        texture2DArr[0]
      )
    },
    initPipe() {
      const nodePipe = rootEntity.createChild('nodePipe')
      nodePipe.transform.setPosition(0, 0, -3)
      // 为管道实体添加管道脚本
      class ScriptPipe extends Script {
        /** 当池中没有管道时，使用该实例进行克隆。 */
        _originPipe
        /** 所有当前管道。 */
        _nowPipeArr = []
        /** 重用池 */
        _pipePool = []
        /** 游戏开始的时间戳。 */
        _curStartTimeStamp
        /**  当管道的x坐标小于-4.6时隐藏。 */
        _pipeHideX = 4.6
        /**  管道的垂直距离。 */
        _pipeVerticalDis = 10.8
        /**  管道水平距离. */
        _pipeHorizontalDis = 4
        /**  管道产生的随机位置范围. */
        _pipeRandomPosY = 3.5
        /**  水管首次亮相时间（ms）。 */
        _pipeDebutTime = 3000
        /**  水平移动速度。 */
        _pipeHorizontalV = 0.003

        onAwake() {
          // 初始化管道实例
          const pipe = (this._originPipe = new Entity(engine))
          const node1 = pipe.createChild('node1')
          const node2 = pipe.createChild('node2')
          const verticalDis = this._pipeVerticalDis
          node1.transform.setPosition(0, -verticalDis / 2, 0)
          node2.transform.setPosition(0, verticalDis / 2, 0)
          node2.transform.setScale(1, -1, 1)
          node1.addComponent(SpriteRenderer).sprite = new Sprite(
            engine,
            texture2DArr[1]
          )
          node2.addComponent(SpriteRenderer).sprite = new Sprite(
            engine,
            texture2DArr[1]
          )
          this._pipePool.push(pipe)

          // 根据游戏状态的变化控制管道的性能。
          engine.on(GameEvent.stateChange, gameState => {
            switch (gameState) {
              case EnumGameState.Idel:
                this.enabled = false
                this._destroyPipe()
                break
              case EnumGameState.Start:
                this.enabled = true
                this._curStartTimeStamp = engine.time.nowTime
                break
              case EnumGameState.End:
                this.enabled = false
                break
            }
          })

          // checkHit 监听时，检查管道和小鸟的碰撞。
          engine.on(GameEvent.checkHit, birdY => {
            let len = this._nowPipeArr.length
            for (let i = 0; i < len; i++) {
              let pipePos = this._nowPipeArr[i].transform.position
              if (Math.abs(pipePos.x) < 0.9) {
                if (Math.abs(pipePos.y - birdY) > 1.2) {
                  engine.dispatch(GameEvent.gameOver)
                }
                break
              }
            }
          })
        }

        /**
         * 这里每一帧都会做三件事：
         *    1.调整管道的生成
         *    2.调整管道位置。
         *    3.判断是否得分。
         * @param deltaTime - 脚本更新时的deltaTime
         */
        onUpdate(deltaTime) {
          const debutTime = this._pipeDebutTime
          // 水管会在游戏开始后显示 pipeDebutTime。
          if (engine.time.nowTime - this._curStartTimeStamp >= debutTime) {
            let bAddScore = false
            // 在 deltaTime 之后，管道移动的距离。
            const changeVal = deltaTime * this._pipeHorizontalV
            const pipeLen = this._nowPipeArr.length
            const {
              _pipeHorizontalDis: horizontalDis,
              _pipeRandomPosY: randomPosY,
              _pipeHideX: hideX
            } = this
            // 调整所有管道的位置。
            if (pipeLen > 0) {
              for (let i = pipeLen - 1; i >= 0; i--) {
                const pipe = this._nowPipeArr[i]
                const pipeTrans = pipe.transform
                const pipePos = pipeTrans.position
                if (pipePos.x < -hideX) {
                  // 隐形管道可以被摧毁。
                  this._destroyPipe(i)
                } else {
                  if (
                    !bAddScore &&
                    pipePos.x > -1 &&
                    pipePos.x - changeVal <= -1
                  ) {
                    // 得到一分。
                    engine.dispatch(GameEvent.addScore)
                    bAddScore = true
                  }
                  pipeTrans.setPosition(
                    pipePos.x - changeVal,
                    pipePos.y,
                    pipePos.z
                  )
                }
                // 根据X坐标判断管道是否需要再生。
                if (i == pipeLen - 1 && pipePos.x <= hideX - horizontalDis) {
                  this._createPipe(
                    hideX,
                    randomPosY * Math.random() - randomPosY / 2 + 0.8,
                    0
                  )
                }
              }
            } else {
              // 需要重新生成管道。
              this._createPipe(
                hideX,
                randomPosY * Math.random() - randomPosY / 2 + 0.8,
                0
              )
            }
          }
        }

        _createPipe(posX, posY, posZ) {
          const pipePool = this._pipePool
          const pipe =
            pipePool.length > 0 ? pipePool.pop() : this._originPipe.clone()
          pipe.transform.setPosition(posX, posY, posZ)
          this.entity.addChild(pipe)
          this._nowPipeArr.push(pipe)
        }

        /**
         * 它并没有真正被破坏，我们只是把它放在池子里。
         * @param pipeIndex - 如果 pipeIndex 小于 0，我们回收所有管道
         */
        _destroyPipe(pipeIndex = -1) {
          const { entity, _pipePool, _nowPipeArr } = this
          const removePipe = pipe => {
            entity.removeChild(pipe)
            _pipePool.push(pipe)
          }
          if (pipeIndex >= 0) {
            removePipe(_nowPipeArr[pipeIndex])
            _nowPipeArr.splice(pipeIndex, 1)
          } else {
            for (let index = _nowPipeArr.length - 1; index >= 0; index--) {
              removePipe(_nowPipeArr[index])
            }
            _nowPipeArr.length = 0
          }
        }
      }
      nodePipe.addComponent(ScriptPipe)
    },
    initGround() {
      const nodeGround = rootEntity.createChild('nodeGround')
      nodeGround.transform.setPosition(0.3, -4.125, -2)
      nodeGround.transform.setRotation(90, 0, 0)
      const groundRenderer = nodeGround.addComponent(MeshRenderer)
      groundRenderer.mesh = PrimitiveMesh.createPlane(engine, 7.68, 1.28)
      const groundMaterial = new UnlitMaterial(engine)
      groundRenderer.setMaterial(groundMaterial)
      groundMaterial.baseTexture = texture2DArr[2]
      groundMaterial.tilingOffset.set(21, 1, 0, 0)
      class ScriptGround extends Script {
        /** 交换两块地面以实现不断移动。 */
        _groundMaterial
        /** 水平移动速度。 */
        _groundHorizontalV = 0.0082

        onAwake() {
          this._groundMaterial = this.entity
            .getComponent(MeshRenderer)
            .getMaterial()
          // 根据游戏状态的变化控制地面的性能。
          engine.on(GameEvent.stateChange, gameState => {
            switch (gameState) {
              case EnumGameState.Idel:
              case EnumGameState.Start:
                this.enabled = true
                break
              case EnumGameState.End:
                this.enabled = false
                break
              default:
                break
            }
          })

          //监听checkHit时，检查地面与小鸟的碰撞情况。
          engine.on(GameEvent.checkHit, birdY => {
            birdY < groundY && engine.dispatch(GameEvent.gameOver)
          })
        }

        onUpdate(deltaTime) {
          // 在 deltaTime 之后，地面移动的距离。
          this._groundMaterial.tilingOffset.z +=
            deltaTime * this._groundHorizontalV
        }
      }

      nodeGround.addComponent(ScriptGround)
    },
    initBird() {
      const nodeBird = rootEntity.createChild('nodeBird')
      nodeBird.transform.setPosition(-1, 1.15, 0)
      nodeBird.addComponent(SpriteRenderer).sprite = new Sprite(
        engine,
        texture2DArr[3]
      )
      class ScriptBird extends Script {
        /** 精灵表动画的偏移量。 */
        _regions = [
          new Vector2(0, 0),
          new Vector2(1 / 3, 0),
          new Vector2(2 / 3, 0)
        ]
        /** SliceWidth 的倒数。 */
        _reciprocalSliceWidth = 1 / 3
        /** SliceHeight 的倒数 */
        _reciprocalSliceHeight = 1
        /** 帧间隔时间，时间单位为ms。 */
        _frameInterval = 150
        /** 总帧数. */
        _totalFrames = 3
        /** 最大下降速度 */
        _maxDropV = -8
        /** 重力加速度 */
        _gravity = -35
        /** 飞行时给出的初始向上速度 */
        _startFlyV = 10

        _cumulativeTime = 0
        _birdState = EnumBirdState.Alive

        _sprite
        _curFrameIndex
        _startY
        _flyStartTime
        _gameState
        _yoyoTween
        _dropTween

        onAwake() {
          this._initDataAndUI()
          this._initTween()
          this._initListener()
        }

        onUpdate(deltaTime) {
          // 更新小鸟的表现。
          switch (this._birdState) {
            case EnumBirdState.Alive:
              const { _frameInterval, _totalFrames } = this
              this._cumulativeTime += deltaTime
              if (this._cumulativeTime >= _frameInterval) {
                //需要更新 frameIndex。
                const addFrameCount = Math.floor(
                  this._cumulativeTime / _frameInterval
                )
                this._cumulativeTime -= addFrameCount * _frameInterval
                this._setFrameIndex(
                  (this._curFrameIndex + addFrameCount) % _totalFrames
                )
              }

              //更新鸟类的位置信息。
              if (_gameState == EnumGameState.Start) {
                // 自由落体和匀速运动叠加得到当前位置。
                let endY
                const { _maxDropV, _startFlyV, _gravity } = this
                const transform = this.entity.transform
                const position = transform.position
                // 过了多少时间。
                const subTime =
                  (engine.time.nowTime - this._flyStartTime) / 1000
                // 自由落体多久了。
                const addToMaxUseTime = (_maxDropV - _startFlyV) / _gravity
                if (subTime <= addToMaxUseTime) {
                  //自由落体.
                  endY =
                    ((_startFlyV + (_startFlyV + subTime * _gravity)) *
                      subTime) /
                      2 +
                    this._startY
                } else {
                  // 以恒定的速度下降。
                  endY =
                    ((_maxDropV + _startFlyV) * addToMaxUseTime) / 2 +
                    _maxDropV * (subTime - addToMaxUseTime) +
                    this._startY
                }
                transform.setPosition(position.x, endY, position.z)
              }
              break
            case EnumBirdState.Dead:
              this._setFrameIndex(0)
              break
          }
        }

        onLateUpdate() {
          // 更新位置后，检查碰撞。
          engine.dispatch(GameEvent.checkHit, this.entity.transform.position.y)
        }

        _initDataAndUI() {
          const { entity } = this
          const renderer = entity.getComponent(SpriteRenderer)
          renderer.sprite = this._sprite = new Sprite(engine, texture2DArr[3])
          this._setFrameIndex(0)
        }

        _initTween() {
          const transform = this.entity.transform
          const rotation = transform.rotation
          const position = transform.position
          this._yoyoTween = new TWEEN.Tween(position)
            .to({ y: 0.25 }, 380)
            .repeat(Infinity)
            .onUpdate(target => {
              transform.position = target
            })
            .yoyo(true)
            .easing(TWEEN.Easing.Sinusoidal.InOut)
          this._dropTween = new TWEEN.Tween(rotation)
            .to({ z: -90 }, 380)
            .onUpdate(target => {
              transform.rotation = target
            })
            .delay(520)
        }

        _initListener() {
          const transform = this.entity.transform
          engine.on(GameEvent.fly, () => {
            // 记录开始时间和地点。
            this._startY = transform.position.y
            this._flyStartTime = engine.time.nowTime
            //飞行表演。
            this._yoyoTween.stop()
            this._dropTween.stop()
            transform.setRotation(
              transform.rotation.x,
              transform.rotation.y,
              20
            )
            this._dropTween.start()
          })

          // 根据游戏状态的变化控制小鸟的表现。
          engine.on(GameEvent.stateChange, gameState => {
            _gameState = gameState
            switch (gameState) {
              case EnumGameState.Idel:
                transform.setPosition(0, 0, 0)
                transform.rotation = new Vector3(0, 0, 0)
                this._birdState = EnumBirdState.Alive
                this._yoyoTween.start()
                break
              case EnumGameState.Start:
                break
              case EnumGameState.End:
                this._birdState = EnumBirdState.Dead
                setTimeout(() => {
                  const { position, rotation } = transform
                  const birdPosY = position.y
                  if (birdPosY > groundY) {
                    this._yoyoTween.stop()
                    this._dropTween.stop()
                    new TWEEN.Tween(rotation)
                      .duration((birdPosY - groundY) * 40)
                      .to({ z: -90 })
                      .onUpdate(target => {
                        transform.rotation = target
                      })
                      .start()
                    new TWEEN.Tween(position)
                      .duration((birdPosY - groundY) * 120)
                      .to({ y: groundY })
                      .onUpdate(target => {
                        transform.position = target
                      })
                      .onComplete(() => {
                        engine.dispatch(GameEvent.showGui)
                      })
                      .start()
                  } else {
                    engine.dispatch(GameEvent.showGui)
                  }
                }, 300)
                break
            }
          })
        }

        _setFrameIndex(frameIndex) {
          if (this._curFrameIndex !== frameIndex) {
            this._curFrameIndex = frameIndex
            const frameInfo = this._regions[frameIndex]
            const region = this._sprite.region
            region.set(
              frameInfo.x,
              frameInfo.y,
              this._reciprocalSliceWidth,
              this._reciprocalSliceHeight
            )
            this._sprite.region = region
          }
        }
      }

      nodeBird.addComponent(ScriptBird)
    },
    // 死亡效果
    initDeathEffect() {
      const nodeDeathEff = rootEntity.createChild('nodeEff')
      nodeDeathEff.transform.setPosition(0, 0, -1)
      nodeDeathEff.transform.setRotation(90, 0, 0)
      const effRenderer = nodeDeathEff.addComponent(MeshRenderer)
      effRenderer.mesh = PrimitiveMesh.createPlane(engine, 20, 20)
      const material = new UnlitMaterial(engine)
      effRenderer.setMaterial(material)
      // 可以是透明的
      material.isTransparent = true
      material.baseColor.set(0, 0, 0, 0)

      class ScriptDeathEff extends Script {
        onAwake() {
          const entity = this.entity
          const renderer = entity.getComponent(MeshRenderer)
          const material = renderer.getMaterial()

          // init Tween.
          const baseColor = material.baseColor
          const shockTween = new TWEEN.Tween(baseColor)
            .to({ a: 1 }, 80)
            .repeat(1)
            .yoyo(true)
            .delay(20)
          engine.on(GameEvent.stateChange, gameState => {
            switch (gameState) {
              case EnumGameState.End:
                shockTween.start()
                break
            }
          })
        }
      }

      nodeDeathEff.addComponent(ScriptDeathEff)
    },
    initGUI() {
      nodeGui = rootEntity.createChild('nodeGui')
      nodeGui.transform.setPosition(0.3, 0, 1)
    },
    initRestart() {
      const nodeRestart = nodeGui.createChild('nodeRestart')
      nodeRestart.addComponent(SpriteRenderer).sprite = new Sprite(
        engine,
        texture2DArr[4]
      )
    },
    initScore() {
      const nodeScore = nodeGui.createChild('nodeScore')
      nodeScore.transform.setPosition(0, 3.2, 0)
      nodeScore.transform.setScale(0.3, 0.3, 0.3)

      class ScriptScore extends Script {
        /** 分数使用的精灵数组（0～9）。 */
        _spriteArray = []
        /** 每个数字之间的间隔。 */
        _numInv = 2
        /** 分数中的每个数字。 */
        _scoreEntitys = []
        _scoreRenderer = []
        _myScore = 0

        onAwake() {
          // 初始化精灵数组。
          const spriteArray = this._spriteArray
          // 将数字资源一分为二。
          for (let i = 0; i < 10; i++) {
            spriteArray.push(
              new Sprite(engine, texture2DArr[5], new Rect(i * 0.1, 0, 0.1, 1))
            )
          }
          console.log(' spriteArray ::> ', spriteArray)
          console.log(' this ::> ', this)

          engine.on(GameEvent.addScore, () => {
            ++this._myScore
            this._showScore('' + this._myScore)
          })

          // 根据游戏状态的变化来控制分数的表现。
          engine.on(GameEvent.stateChange, gameState => {
            switch (gameState) {
              case EnumGameState.Idel:
                this.entity.isActive = false
                break
              case EnumGameState.Start:
                this.entity.isActive = true
                this._myScore = 0
                this._showScore('0')
                break
              case EnumGameState.End:
                break
            }
          })
        }

        _showScore(scoreNumStr) {
          const scoreLen = scoreNumStr.length
          const {
            entity,
            _numInv: inv,
            _scoreEntitys: scoreEntitys,
            _spriteArray,
            _scoreRenderer: scoreRenderers
          } = this
          var nowEntityLen = scoreEntitys.length
          let scoreEntity
          let scoreRenderer
          // 如果实体不够，请新建一个。
          if (scoreLen > nowEntityLen) {
            for (let i = nowEntityLen; i < scoreLen; i++) {
              scoreEntity = new Entity(engine)
              scoreRenderer = scoreEntity.addComponent(SpriteRenderer)
              scoreRenderers.push(scoreRenderer)
              scoreEntitys.push(scoreEntity)
              entity.addChild(scoreEntity)
            }
          }

          // 目前 nowEntityLen >= scoreLen。
          nowEntityLen = scoreEntitys.length
          const startX = ((1 - scoreLen) * inv) / 2
          for (let i = 0; i < nowEntityLen; i++) {
            scoreEntity = scoreEntitys[i]
            if (i >= scoreLen) {
              scoreEntity.isActive = false
            } else {
              scoreEntity.isActive = true
              scoreEntity.transform.setPosition(startX + i * inv, 0, 0)
              console.log(' spriteArray ::> ', _spriteArray)
              console.log(' scoreNumStr[i] ::> ', scoreNumStr[i])
              scoreRenderers[i].sprite = _spriteArray[parseInt(scoreNumStr[i])]
            }
          }
        }
      }
      class ScriptGUI extends Script {
        onAwake() {
          const { entity } = this
          const resetBtnNode = entity.findByName('nodeRestart')

          // 添加 BoxCollider。
          const boxCollider = resetBtnNode.addComponent(StaticCollider)
          const boxColliderShape = new BoxColliderShape()
          boxColliderShape.setSize(2.14, 0.75, 0.001)
          boxCollider.addShape(boxColliderShape)
          resetBtnNode.addComponent(Script).onPointerClick = () => {
            this.engine.dispatch(GameEvent.reStartGame)
          }

          // 根据游戏状态的变化控制GUI的表现。
          engine.on(GameEvent.stateChange, gameState => {
            switch (gameState) {
              case EnumGameState.Idel:
              case EnumGameState.Start:
                resetBtnNode.isActive = false
                break
              case EnumGameState.End:
                break
              default:
                break
            }
          })

          engine.on(GameEvent.showGui, () => {
            resetBtnNode.isActive = true
          })
        }
      }
      nodeGui.addComponent(ScriptGUI)
      nodeScore.addComponent(ScriptScore)
    },
    addSpriteRender(node, texture2D) {
      let renderer = node.addComponent(SpriteRenderer)
      renderer.sprite = new Sprite(this.engine, texture2D, null, null, 100)
    }
  },
  mounted() {
    this.initEngine()
  }
}
</script>

<style lang="less" scoped>
.canvas_wrap {
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.canvas_class {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  .wh(100%, 100vh);
}
</style>
```

# -----------------分割-----------------

# Oasis-Engine 核心板块(⭐⭐⭐)

## 引擎

## 场景

## 实体与组件

### Oasis-Engine 内置常用组件

| 名称                                                                                | 描述           |
| ----------------------------------------------------------------------------------- | -------------- |
| [Camera](https://oasisengine.cn/#/api/latest/core/Camera)                           | 相机           |
| [MeshRenderer](https://oasisengine.cn/#/api/latest/core/MeshRenderer)               | 静态模型渲染器 |
| [SkinnedMeshRenderer](https://oasisengine.cn/#/api/latest/core/SkinnedMeshRenderer) | 骨骼模型渲染器 |
| [Animator](https://oasisengine.cn/#/api/latest/core/Animator)                       | 动画控制组件   |
| [DirectLight](https://oasisengine.cn/#/api/latest/core/DirectLight)                 | 方向光         |
| [PointLight](https://oasisengine.cn/#/api/latest/core/PointLight)                   | 点光源         |
| [SpotLight](https://oasisengine.cn/#/api/latest/core/SpotLight)                     | 聚光灯         |
| [ParticleRenderer](https://oasisengine.cn/#/api/latest/core/ParticleRenderer)       | 粒子系统       |
| [BoxCollider](https://oasisengine.cn/#/api/latest/core/BoxCollider)                 | 盒碰撞体       |
| [SphereCollider](https://oasisengine.cn/#/api/latest/core/SphereCollider)           | 球碰撞体       |
| [PlaneCollider](https://oasisengine.cn/#/api/latest/core/PlaneCollider)             | 平面碰撞体     |
| [Script](https://oasisengine.cn/#/api/latest/core/Script)                           | 脚本           |

### 组件使用

```javascript
// 创建引擎
engine = new WebGLEngine('canvas_id')
// 创建场景
const scene = engine.sceneManager.activeScene
// 创建根实体
const rootEntity = scene.createRootEntity('root')
// 方法一 : 在根实体上添加一个子实体
const newEntity = rootEntity.createChild('firstEntity')
// 方法二 : 直接创建一个实体,只用添加到根实体上的时候才显示
const secondEntity = new Entity(engine, 'secondEntity')
rootEntity.addChild(secondEntity)
```

### 删除实体

```javascript
rootEntity.removeChild(newEntity)
//需要注意这种方式只是移除与根实体的绑定,如需彻底销毁还得 :
newEntity.destroy()
```

### 查找实体上的组件

- getComponent 返回第一个找到的组件

```javascript
const component = newEntity.getComponent('组件名称')
//例如
const component = newEntity.getComponent(Animator)
```

- getComponents 返回多个同一类型的组件(Array)

```javascript
const components = []
const component = newEntity.getComponents('组件名称', '数组名称')
//例如
const component = newEntity.getComponents(Animator, components)
```

## 脚本

### 基础使用

```javascript
import { Entity, Script } from 'oasis-engine'

// 1.创建实体
const entity = new Entity(engine)

// 2. 继承Script
class MyScript extends Script {
  //组件生命周期执行
  onUpdate() {}
}

// 3. 给实体添加脚本组件
entity.addComponent(MyScript)
```

### 生命周期

<!-- ![](oasis.assets/scriptLifeCycle.png#id=dmhwN&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=) -->

##### onAwake

- 一般做些初始化的相关工作 , 当定义的 Script 组件添加到 Entity 实体 , 并且实体处于激活状态,就是实体的 isActiveInHierarchy 为 true 的时候  onAwake 就会被调用 , 如果 isActiveInHierarchy 为 false , 则实体被激活时才会调用 , 可以通过 isActive 判断 , 为 true 时调用一次 onAwake

```javascript
onAwake() {
	this.child = this.entity.getChild(0);
	this.child.isActive = false;
}
// 这里需要注意在 Script 组件中, class 的方式去继承 , 所有里面的 this 指向不同于 vue
```

##### onEnable

- 当脚本的 enabled 属性从 false 变为 true 时，或者所在实体的 isActiveInHierarchy 属性从 false 变为 true 时，会激活 onEnable 回调。倘若实体第一次被创建且 enabled 为 true，则会在 onAwake 之后，onStart 之前被调用。

##### onDisable

当组件的 enabled 属性从 true 变为 false 时，或者所在实体的 isActiveInHierarchy 属性从 true 变为 false 时，会激活 onDisable 回调

注意：isActiveInHierarchy 的判断方法为实体在层级树中是被激活状态即该实体为激活状态，它的父亲及父亲的父亲直到根实体都为激活状态 isActiveInHierarchy 才为 true

##### onStart

onStart 回调函数会在脚本第一次进入帧循环，也就是第一次执行 onUpdate 之前触发。onStart 通常用于初始化一些需要经常修改的数据，这些数据可能在 onUpdate 时会发生改变。

```javascript
onStart() {
	this.updateCount = 0
}

onUpdate() {
	this.updateCount++;
}
```

值得注意的是 Oasis 是批量执行完 onStart 回调之后再批量执行 onUpdate 这样做的好处是，可以在 onUpdate 中访问其他实体初始化的值：

```javascript
import { TheScript } from './TheScript'
onStart() {
	this.otherEntity = Entity.findByName('otherEntity');
	this.otherEntityScript = this.otherEntity.getComponent(TheScript)
}

onUpdate() {
	console.log(this.otherEntityScript.updateCount)
}
```

##### onPhysicsUpdate

onPhysicsUpdate 回调函数调用频率与物理引擎更新频率保持一致。每个渲染帧可能会调用多次。

##### onTriggerEnter

onTriggerEnter 回调函数会在触发器相互接触时调用，以处理触发器相遇时的逻辑，例如在触发发生时删除实体。

##### onTriggerStay

onTriggerStay 回调函数会在触发器接触过程中持续调用，每帧调用一次。

##### onTriggerExit

onTriggerExit 回调函数会在两个触发器分离时被调用，即触发关系发生改变，只调用一次。

##### onCollisionEnter

onCollisionEnter 回调函数会在碰撞器碰撞时调用，以处理碰撞体相遇时的逻辑，例如在碰撞发生时删除实体。

##### onCollisionStay

onCollisionStay 回调函数会在碰撞器碰撞过程中持续调用，每帧调用一次。

##### onCollisionExit

onCollisionExit 回调函数会在两个碰撞器分离时被调用，即碰撞关系发生改变，只调用一次。

##### onUpdate

游戏/动画开发的一个关键点是在每一帧渲染前更新物体的行为，状态和方位。这些更新操作通常都放在 onUpdate 回调中。接收与上一次 onUpdate 执行时间差参数, 类型是 number

```javascript
onStart() {
	this.rotationY = 0
}

onUpdate(deltaTime: number) {
	this.entity.transform.rotate(new Vector3(0, this.rotationY++, 0))
}
```

##### onLateUpdate

onUpdate   会在所有动画更新前执行，但如果我们要在动效（如动画、粒子等）更新之后才进行一些额外操作，或者希望在所有组件的 onUpdate 都执行完之后才进行其它操作比如相机跟随，那就需要用到 onLateUpdate 回调。接收与上一次 onLateUpdate 执行时间差参数, 类型是 number

```javascript
onStart() {
	this.rotationY = 0
}

onUpdate() {
	this.entity.transform.rotate(new Vector3(0, this.rotationY++, 0))
}

onLateUpdate(deltaTime: number) {
	this.rotationY %= 360;
}
```

##### onBeginRender

当实体被作为相机使用，也就是添加了相机组件，那么当相机组件的 render 方法调用之前 onBeginRender 回调将被调用。

##### onEndRender

当实体被作为相机使用，也就是添加了相机组件，那么当相机组件的 render 方法调用之后 onEndRender 调将被调用。

##### onDestroy

当组件或者所在实体调用了 destroy，则会调用 onDestroy 回调，并在当帧结束时统一回收组件。

# Oasis-Engine 相机

### 使用

- 相机分为正交和透视两个模式, 正交对应的就是 2D 效果 , 透视就是对应的 3D 效果

```javascript
// 创建实体
const entity = root.createChild('cameraEntity')
// 创建相机组件
const camera = entity.addComponent(Camera)
// 近剪裁平面
// camera.nearClipPlane = 0.1;
// 远剪裁平面
// camera.farClipPlane = 100;

// 设置透视投影属性
// camera.fieldOfView = 60;

// 通过 entity 获取相机
entity.engine.sceneManager.activeScene._activeCameras[0]
```

### 透视投影

<!-- ![](oasis.assets/camera.png#id=ucKXA&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=) -->

### 正交投影

<!-- ![](oasis.assets/camera2.png#id=ClivK&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=) -->

| 类型     | 属性                                                                                 | 解释                                                                   |
| -------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| 通用     | [isOrthographic](https://oasisengine.cn/#/api/latest/core/Camera#isOrthographic)     | 是否正交投影，默认是 `false`                                           |
|          | [aspectRatio](https://oasisengine.cn/#/api/latest/core/Camera#aspectRatio)           | 画布宽高比，一般是根据 canvas 大小自动计算，也可以手动改变（不推荐）   |
|          | [cullingMask](https://oasisengine.cn/#/api/latest/core/Camera#cullingMask)           | 裁剪遮罩，用来选择性地渲染场景中的渲染组件。                           |
|          | [priority](https://oasisengine.cn/#/api/latest/core/Camera#priority)                 | 渲染优先级，用来确定在多相机的情况下按照什么顺序去渲染相机包含的内容。 |
|          | [renderTarget](https://oasisengine.cn/#/api/latest/core/Camera#renderTarget)         | 渲染目标，确定内容最后被渲染到哪个目标上。                             |
|          | [viewport](https://oasisengine.cn/#/api/latest/core/Camera#viewport)                 | 视口，确定内容最后被渲染到目标设备里的范围。                           |
|          | [nearClipPlane](https://oasisengine.cn/#/api/latest/core/Camera#nearClipPlane)       | 近裁剪平面                                                             |
|          | [farClipPlane](https://oasisengine.cn/#/api/latest/core/Camera#farClipPlane)         | 远裁剪平面                                                             |
|          | [clearFlags](https://oasisengine.cn/#/api/latest/core/Camera#clearFlags)             | 在渲染这个相机前清理画布缓冲的标记                                     |
| 透视投影 | [fieldOfView](https://oasisengine.cn/#/api/latest/core/Camera#fieldOfView)           | 视角                                                                   |
| 正交投影 | [orthographicSize](https://oasisengine.cn/#/api/latest/core/Camera#orthographicSize) | 正交模式下相机的一半尺寸                                               |

### 正交控制器

```javascript
import { OrthoControl } from '@oasis-engine-toolkit/controls'

const engine = new WebGLEngine('canvas')
engine.canvas.resizeByClientSize()
// 创建场景
const scene = engine.sceneManager.activeScene
const rootEntity = scene.createRootEntity()
// 创建相机
const cameraEntity = rootEntity.createChild('Camera')
cameraEntity.transform.setPosition(0, 0, 50)
const camera = cameraEntity.addComponent(Camera)
// true 为 正交
camera.isOrthographic = true
//添加正交控制器
const cameraControl = cameraEntity.addComponent(OrthoControl)
//此为获取到引擎的节点 , 方便为其绑定事件
const mainElement = engine.canvas._webCanvas
// 添加事件
mainElement.addEventListener(
  'wheel',
  (e) => {
    if (e.deltaY < 0) {
      cameraControl.zoomIn()
    } else {
      cameraControl.zoomOut()
    }
  },
  false
)
mainElement.addEventListener('mousedown', (e) => {
  cameraControl.panStart(e.clientX, e.clientY)
})
mainElement.addEventListener('mousemove', (e) => {
  cameraControl.panMove(e.clientX, e.clientY)
})
mainElement.addEventListener('mouseup', (e) => {
  cameraControl.panEnd()
})
```

# Oasis-Engine 精灵渲染器

### 引入

```javascript
import {
  AssetType,
  Camera,
  Script,
  Sprite,
  SpriteRenderer,
  Texture2D,
  Vector3,
  WebGLEngine
} from 'oasis-engine'
```

### 使用

```javascript
const engine = new WebGLEngine('canvas')

engine.resourceManager.load <
  Texture2D >
  {
    url: 'https://gw.alipayobjects.com/mdn/rms_7c464e/afts/img/A*d3N9RYpcKncAAAAAAAAAAAAAARQnAQ',
    type: AssetType.Texture2D
  }.then((texture) => {
    const spriteEntity = rootEntity.createChild(`sprite`)
    // 给实体添加 SpriteRenderer 组件
    const spriteRenderer = spriteEntity.addComponent(SpriteRenderer)
    // 通过 texture 创建 sprite 对象
    const sprite = new Sprite(engine, texture)
    // 设置 sprite
    spriteRenderer.sprite = sprite
  })
```

### 设置颜色

```javascript
spriteRenderer.color.set(1, 0, 0, 1)
```

# Oasis-Engine 动画

## lottie 动画

### 安装

```javascript
npm i @oasis-engine/lottie --save
```

### 引入

```javascript
import { LottieAnimation } from '@oasis-engine/lottie'
```

### 使用

```javascript
// 要注意这里的 json 资源获取的时候也需要带上 atlas 文件 , 详情看下方介绍
engine.resourceManager
  .load({
    urls: [
      'https://gw.alipayobjects.com/os/bmw-prod/b46be138-e48b-4957-8071-7229661aba53.json',
      'https://gw.alipayobjects.com/os/bmw-prod/6447fc36-db32-4834-9579-24fe33534f55.atlas'
    ],
    type: 'lottie'
  })
  .then((lottieEntity) => {
    // Add lottie entity created to scene
    root.addChild(lottieEntity)

    // Get `LottieAnimation` component and play the animation
    const lottie = lottieEntity.getComponent(LottieAnimation)
    lottie.isLooping = true
    lottie.speed = 1
    lottie.play()
  })
```

### atlas 文件介绍

.ATLAS 文件是 Phaser 编辑器创建的设置文件，Phaser 编辑器是用于开发 HTML5 游戏的 IDE。 它用于生成一个纹理.ATLAS ，这是一个.PNG 图像，其中包含一组精灵，用于游戏中对象和角色的纹理。.ATLAS 文件包含纹理.ATLAS 的设置以及游戏构建时要打包到 PNG 图像中的每个精灵的路径。

**所以这里建议只是用于 lottie 动画的时候还是采用原生的 lottie-web**

### 监听动画结束

调用   lottie.play() 的时候会返回一个 promise  , 可以采用

```javascript
const lottie = lottieEntity.getComponent(LottieAnimation)
await lottie.play()
// 动画播放完毕, 继续执行
```

### 属性

| 名称        | 描述             |
| ----------- | ---------------- |
| `isLooping` | 是否无限循环播放 |
| `repeats`   | 重复播放次数     |
| `speed`     | 播放倍速         |

### 方法

| 名称    | 描述                                             |
| ------- | ------------------------------------------------ |
| `play`  | 播放动画，传入动画片段名参数会播放特定的动画片段 |
| `pause` | 暂停动画                                         |

# Oasis-Engine 交互

### 事件系统

- 采用 on 监听
-

```javascript
this.engine.on('event-test', () => {
  console.log('call event-test')
})
```

- 采用 once 监听
-

```javascript
this.engine.once('event-test', () => {
  console.log('call event-test')
})
```

- 事件移除监听
-

```javascript
// 移除指定事件
this.engine.off('event-test', fun)
// 移除全部事件
this.engine.off('event-test')
```

- 事件派发
- 调用 dispatch 方法派发事件，派发对应事件会触发监听事件回调函数的执行。
-

```javascript
this.engine.dispatch('event-test', { eventData: 'mydata' })
```

# Oasis-Engine 资源管理

### 批量加载

加载 2D 资源时创建一个加载数组 , url 可以是本地资源也可以是网络资源 , 资源的 type 建议直接定义好

```javascript
//type 为 AssetType.Texture2D
const resourceList = [
  {
    url: require('../assets/img/game/background.png'),
    type: AssetType.Texture2D
  },
  {
    url: require('../assets/img/game/pipe.png'),
    type: AssetType.Texture2D
  },
  {
    url: require('../assets/img/game/ground.png'),
    type: AssetType.Texture2D
  },
  {
    url: require('../assets/img/game/bird.png'),
    type: AssetType.Texture2D
  },
  {
    url: require('../assets/img/game/restart.png'),
    type: AssetType.Texture2D
  },
  {
    url: require('../assets/img/game/527-number.png'),
    type: AssetType.Texture2D
  }
]
//type 为 AssetType.TextureCube
const resourceList = {
  urls: [
    require('../assets/img/game/background.png'),
    require('../assets/img/game/pipe.png'),
    require('../assets/img/game/ground.png'),
    require('../assets/img/game/bird.png'),
    require('../assets/img/game/restart.png'),
    require('../assets/img/game/527-number.png')
  ],
  type: AssetType.TextureCube
}
```

### 使用

```javascript
engine.resourceManager
  .load(resourceList)
  .onProgress((progress) => {
    console.log(' 资源加载进度 ::> ', progress)
  })
  .then((resource) => {
    console.log(' 资源加载完毕初始化游戏 ::> ', resource)
  })
```

# Oasis-Engine 性能统计

### 使用

```javascript
import { Engine } from 'oasis-engine'
import { Stats } from '@oasis-engine-toolkit/stats'

Engine.registerFeature(Stats)
```

# Oasis-Engine 物理

在 Oasis-Engine 中的物理引擎分为两种,如果只是轻量级的碰撞检测可以使用 Lite , 如果追求完整物理引擎功能选择 PhysX

### 使用

```javascript
// Lite
import { LitePhysics } from '@oasis-engine/physics-lite'

const engine = new WebGLEngine('canvas')
engine.physicsManager.initialize(LitePhysics)

engine.run()
// PhysX , 需要异步加载 , 所以引擎的初始化需要放在 Promise 回调
import { PhysXPhysics } from '@oasis-engine/physics-physx'

PhysXPhysics.initialize().then(() => {
  const engine = new WebGLEngine('canvas')
  engine.physicsManager.initialize(PhysXPhysics)

  engine.run()
})
```

### 碰撞器组件

- 触发器模式 : 物理不具备刚体特性 , 但是发生接触的时候执行特定的脚本函数
- 碰撞器模式 : 物理具备刚体特性 , 并且发生碰撞接触的时候会根据物理特性改变自己的规律

### 碰撞器与碰撞器外形

使用 Collider 来检测 Entity 上的碰撞体与场景中其他碰撞体的碰撞情况,无论是动态的还是静态的 Collider 都是 ColliderShape 的集合 , 可以通过多个 ColliderShape 来设置组合的碰撞器外形

- StaticCollider
  - 静态碰撞器,用于场景中静止的物体
- DynamicCollider
  - 动态碰撞器 , 用于场景中需要收到脚本控制 , 或者相应物理反馈的物体

### ColliderShape 类型

| 名称                                                                                         | 解释             | 支持的后端物理包             |
| -------------------------------------------------------------------------------------------- | ---------------- | ---------------------------- |
| [BoxColliderShape](https://oasis-engine.gitee.io/#/api/latest/core/BoxColliderShape)         | 盒形碰撞外形     | physics-lite， physics-physx |
| [SphereColliderShape](https://oasis-engine.gitee.io/#/api/latest/core/SphereColliderShape)   | 球形碰撞外形     | physics-lite， physics-physx |
| [PlaneColliderShape](https://oasis-engine.gitee.io/#/api/latest/core/PlaneColliderShape)     | 无界平面碰撞外形 | physics-physx                |
| [CapsuleColliderShape](https://oasis-engine.gitee.io/#/api/latest/core/CapsuleColliderShape) | 胶囊碰撞外形     | physics-physx                |

### 触发器脚本函数

- [onTriggerEnter](https://oasis-engine.gitee.io/#/docs/latest/cn/script#ontriggerenter)：相互接触时调用
- [onTriggerStay](https://oasis-engine.gitee.io/#/docs/latest/cn/script#ontriggerstay)：接触过程中循环调用
- [onTriggerExit](https://oasis-engine.gitee.io/#/docs/latest/cn/script#ontriggerexit)：接触结束时调用

ps:可以通过 ColliderShape 上的 isTrigger 开启触发器模式，但需要特别强调的是，两个 StaticCollider 之间不会调用触发器事件，除非其中一个是 DynamicCollider。

### 碰撞器脚本函数

- [onCollisionEnter](https://oasis-engine.gitee.io/#/docs/latest/cn/script#oncollisionenter)：碰撞触发时调用
- [onCollisionStay](https://oasis-engine.gitee.io/#/docs/latest/cn/script#oncollisionstay)：碰撞过程中*循环*调用
- [onCollisionExit](https://oasis-engine.gitee.io/#/docs/latest/cn/script#oncollisionexit)：碰撞结束时调用

### 生命周期

详情可看  [脚本](#script_id) 板块

<!-- ![](oasis.assets/image-20230308105954087.png#id=hoARg&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=) -->
