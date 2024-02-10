// 仏説摩訶般若波羅蜜多心経
// The sutra in TypeScript

import assert from "assert"

class Emptiness {
  public toString(): string {
    return "emptiness"
  }
}

// 仏教における「空」が単なる「無」ではなく、
// あらゆるものの相互依存性や条件づけられた存在であることを
// `extends`で表現した。
class Phenomenon extends Emptiness {
  constructor(private _description: string | null) {
    super()
  }

  public toString(): string {
    return this._description ?? super.toString()
  }
}

class Diciple extends Emptiness {
  public mind: Set<Phenomenon> = new Set()
  public nirvanaAchived: boolean = false
  public prajnaParamita: boolean = false
  constructor(public name: string) {
    super()
  }
}

class Buddha extends Diciple {
  private _observations: string[] = []

  constructor(public name: string) {
    super(name)
    this.nirvanaAchived = true
    this.prajnaParamita = true
  }

  public observe(phenomenon: Phenomenon): void {
    const observation = `${phenomenon.toString()} is no other than ${super.toString()}`
    this._observations.push(observation)
  }

  public expound(to: Diciple): void {
    console.log(`Listen, ${to.name}`)
    this._observations.forEach((teaching) => console.log(teaching))
    // this._observations = []
  }

  public has(thing: Phenomenon) {
    return thing.toString() === super.toString()
  }

}

function chant(mantra: string): void {
  console.log("===============")
  console.log(mantra+"!!!!!!!")
  console.log("===============")
}

// 空中無色無受想行識
const form = new Phenomenon("色")
const sensation = new Phenomenon("受")
const perception = new Phenomenon("想")
const volition = new Phenomenon("行")
const consciousness = new Phenomenon("識")
// 無眼耳鼻舌身意
const eye = new Phenomenon("眼")
const ear = new Phenomenon("耳")
const nose = new Phenomenon("鼻")
const tongue = new Phenomenon("舌")
const body = new Phenomenon("身")
const mind = new Phenomenon("意")
// UNIMPLEMENTED: 六根（感覚器官）のようなクラスを作る
// 無色声香味触法
const sight = new Phenomenon("色")
const sound = new Phenomenon("聲")
const smell = new Phenomenon("香")
const taste = new Phenomenon("味")
const touch = new Phenomenon("觸")
const dharma = new Phenomenon("法")
// UNIMPLEMENTED: 無眼界乃至無意識界
// 無無明亦無無明尽乃至無老死亦無老死尽
const ignorance = new Phenomenon("無明")
const senescence = new Phenomenon("老死")
// 無苦集滅道無智亦無得
const suffering = new Phenomenon("苦")
const accumulation = new Phenomenon("集")
const cessation = new Phenomenon("滅")
const path = new Phenomenon("道")
const wisdom = new Phenomenon("智")
const attainment = new Phenomenon("得")

const guanyin = new Buddha("観音菩薩")

const shariputra = new Diciple("舎利子")

// He starts 行深般若波羅蜜多
guanyin.observe(form)
guanyin.observe(sensation)
guanyin.observe(perception)
guanyin.observe(volition)
guanyin.observe(consciousness)
// now 照見五蘊皆空
// UNIMPLEMENTED: 度一切苦厄
// そもそも常世は苦しみの連続の世界であることと、
// この悟りがそれから解放してくれたこともうまく表現したい
guanyin.observe(eye)
guanyin.observe(ear)
guanyin.observe(nose)
guanyin.observe(tongue)
guanyin.observe(body)
guanyin.observe(mind)
guanyin.observe(sight)
guanyin.observe(sound)
guanyin.observe(smell)
guanyin.observe(taste)
guanyin.observe(touch)
guanyin.observe(dharma)
guanyin.observe(ignorance)
guanyin.observe(senescence)
guanyin.observe(suffering)
guanyin.observe(accumulation)
guanyin.observe(cessation)
guanyin.observe(path)
guanyin.observe(wisdom)
guanyin.observe(attainment)

// UNIMPLEMENTED: 色不異空空不異色色即是空空即是色受想行識亦復如是
// UNIMPLEMENTED: 諸法空相不生不滅不垢不浄不増不減
guanyin.expound(shariputra)

// 以無所得故菩提薩埵依般若波羅蜜多故心無罣礙無罣礙故無有恐怖
const anything = new Phenomenon("anything")
const obstacle = new Phenomenon("obstacle")
const fear = new Phenomenon("fear")
if (!guanyin.has(anything)) {
  assert.equal(guanyin.prajnaParamita, true)
  if (guanyin.mind.has(obstacle)) {
    guanyin.mind.delete(obstacle)
    guanyin.mind.delete(fear)
  }
  // now he lives in peace
}

// 遠離一切顛倒夢想究竟涅槃
const delusions = ["misconception", "illusion", "dream"];
delusions.forEach((delusion) => {
  const phenomenon = new Phenomenon(delusion)
  if (guanyin.nirvanaAchived && guanyin.mind.has(phenomenon)) {
    guanyin.mind.delete(phenomenon)
  }
})

// 三世諸仏依般若波羅蜜多故得阿耨多羅三藐三菩提
// 空を追求するやつはいつか仏になるらしい
const buddhaPast = new Buddha("Shakyamuni")
const buddhaPresent = new Buddha("Gu") // ?
const buddhaFuture = new Buddha("Maitreya")
const buddhas = [buddhaPast, buddhaPresent, buddhaFuture]
buddhas.forEach((buddha) => {
  assert.equal(buddha.prajnaParamita, true)
  const emptiness = new Phenomenon(null)
  buddha.mind.add(emptiness)
  assert.equal(buddha.has(emptiness), true)
  // NOTE もっと違う表現のほうがいいかも
})

// 故知般若波羅蜜多是大神呪是大明呪是無上呪是無等等呪

// 能除一切苦真実不虚故説般若波羅蜜多呪

// 即説呪曰
const mantra = "羯諦羯諦波羅羯諦波羅僧羯諦菩提薩婆訶"
chant(mantra)

// 最後に「般若心経」と唱える間にこのプログラムを実行する
