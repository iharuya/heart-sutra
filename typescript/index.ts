/**
 * 仏説摩訶般若波羅蜜多心経
 * The sutra in TypeScript
 */

import assert from "node:assert"

/**
 * Define the world
 */

class Emptiness {
	public toString(): string {
		return "emptiness"
	}
}

class Phenomenon extends Emptiness {
	constructor(private _description: string | null) {
		super()
	}

	public toString(): string {
		return this._description ?? super.toString()
	}
}

class Person extends Phenomenon {
	protected memory: Set<Phenomenon> = new Set()
	protected observasions: string[] = []

	constructor(public name: string) {
		super(name)
	}

	public say(message: string): void {
		console.log(`${this.name}> ${message}`)
	}

	public observe(phenomenon: Phenomenon): void {
		const observation = `Oh there exists ${phenomenon.toString()}`
		this.observasions.push(observation)
	}

	public hasMemory(phenomenon: Phenomenon): boolean {
		return this.memory.has(phenomenon)
	}

	public addMemory(phenomenon: Phenomenon): void {
		this.memory.add(phenomenon)
	}

	public deleteMemory(phenomenon: Phenomenon): void {
		this.memory.delete(phenomenon)
	}
}

class Disciple extends Person {
	public nirvanaAchived = false
	public prajnaParamita = false

	constructor(public name: string) {
		super(name)
	}

	public realize(phenomenon: Phenomenon): void {
		const mind = `${phenomenon.toString()} is no other than ${super.toString()}`
		this.observasions.push(mind)
	}
}

class Buddha extends Disciple {
	constructor(public name: string) {
		super(name)
		this.nirvanaAchived = true
		this.prajnaParamita = true
	}

	private getRoot(phenomenon: Phenomenon) {
		let proto = Object.getPrototypeOf(phenomenon);
		let lastProto = null;
		while (Object.getPrototypeOf(proto) !== null) {
			lastProto = proto;
			proto = Object.getPrototypeOf(proto);
		}
		return lastProto;
	}

	public observe(phenomenon: Phenomenon): void {
		const observation = `${phenomenon.toString()} is no other than ${this.getRoot(phenomenon).toString()}`
		this.observasions.push(observation)
	}

	public expound(to: Disciple): void {
		this.say(`Listen, ${to.name}`)
		for (const teaching of this.observasions) {
			this.say(teaching)
		}
	}

	// 何かを持っていると感じるのは、それが自分自身のサブセットであると感じるとき
	public has(phenomenon: Phenomenon) {
		let proto = Object.getPrototypeOf(phenomenon);
		while (proto !== null) {
		  if (proto === this.constructor.prototype) {
			return true;
		  }
		  proto = Object.getPrototypeOf(proto);
		}
		return false;
	}

	public resetObservations(): void {
		this.observasions = []
	}
}

const chant = (mantra: string) => {
	console.log("===============")
	console.log(mantra)
	console.log("===============")
}

// 色受想行識 (五蘊)
const form = new Phenomenon("色")
const sensation = new Phenomenon("受")
const perception = new Phenomenon("想")
const volition = new Phenomenon("行")
const consciousness = new Phenomenon("識")
// 眼耳鼻舌身意
const eye = new Phenomenon("眼")
const ear = new Phenomenon("耳")
const nose = new Phenomenon("鼻")
const tongue = new Phenomenon("舌")
const body = new Phenomenon("身")
const memory = new Phenomenon("意")

// UNIMPLEMENTED: 六根（感覚器官）のようなクラスを作る

// 色声香味触法
const sight = new Phenomenon("色")
const sound = new Phenomenon("聲")
const smell = new Phenomenon("香")
const taste = new Phenomenon("味")
const touch = new Phenomenon("觸")
const dharma = new Phenomenon("法")

// UNIMPLEMENTED: 無眼界乃至無意識界

// 無明 and 老死
const ignorance = new Phenomenon("無明")
const senescence = new Phenomenon("老死")
// 苦集滅道
const suffering = new Phenomenon("苦")
const accumulation = new Phenomenon("集")
const cessation = new Phenomenon("滅")
const path = new Phenomenon("道")
// 智得
const wisdom = new Phenomenon("智")
const attainment = new Phenomenon("得")

/**
 * The sutra begins
 */

const avalokiteshvara = new Buddha("観音菩薩")
const shariputra = new Disciple("舎利子")

// 観自在菩薩行深般若波羅蜜多
avalokiteshvara.say("I am going to practice prajna-paramita")

// 照見五蘊皆空
avalokiteshvara.observe(form)
avalokiteshvara.observe(sensation)
avalokiteshvara.observe(perception)
avalokiteshvara.observe(volition)
avalokiteshvara.observe(consciousness)

// 度一切苦厄
avalokiteshvara.deleteMemory(suffering)
avalokiteshvara.resetObservations()

// そもそも常世は苦しみの連続の世界であることと、
// この悟りがそれから解放してくれたこともうまく表現したい

// UNIMPLEMENTED: 色不異空空不異色色即是空空即是色受想行識亦復如是
// avalokiteshvara.expound(shariputra)
// avalokiteshvara.resetObservations()

// UNIMPLEMENTED: 諸法空相不生不滅不垢不浄不増不減

// 無眼界乃至無意識界無無明亦無無明尽乃至無老死亦無老死尽無苦集滅道無智亦無得
avalokiteshvara.observe(eye)
avalokiteshvara.observe(ear)
avalokiteshvara.observe(nose)
avalokiteshvara.observe(tongue)
avalokiteshvara.observe(body)
avalokiteshvara.observe(memory)
avalokiteshvara.observe(sight)
avalokiteshvara.observe(sound)
avalokiteshvara.observe(smell)
avalokiteshvara.observe(taste)
avalokiteshvara.observe(touch)
avalokiteshvara.observe(dharma)
avalokiteshvara.observe(ignorance)
avalokiteshvara.observe(senescence)
avalokiteshvara.observe(suffering)
avalokiteshvara.observe(accumulation)
avalokiteshvara.observe(cessation)
avalokiteshvara.observe(path)
avalokiteshvara.observe(wisdom)
avalokiteshvara.observe(attainment)

avalokiteshvara.expound(shariputra)
avalokiteshvara.resetObservations()

// 以無所得故菩提薩埵依般若波羅蜜多故心無罣礙無罣礙故無有恐怖
const anything = new Phenomenon("anything")
const obstacle = new Phenomenon("罣礙")
const fear = new Phenomenon("恐怖")
avalokiteshvara.addMemory(obstacle)
avalokiteshvara.addMemory(fear)
if (!avalokiteshvara.has(anything)) {
	assert.equal(avalokiteshvara.prajnaParamita, true)
	avalokiteshvara.deleteMemory(obstacle)
	avalokiteshvara.deleteMemory(fear)
}

// 遠離一切顛倒夢想究竟涅槃
const delusions = ["顛倒", "夢想", "究竟"]
for (const delusion of delusions) {
	const phenomenon = new Phenomenon(delusion)
	avalokiteshvara.addMemory(phenomenon)
	if (avalokiteshvara.nirvanaAchived && avalokiteshvara.hasMemory(phenomenon)) {
		avalokiteshvara.deleteMemory(phenomenon)
	}
}

// 三世諸仏依般若波羅蜜多故得阿耨多羅三藐三菩提
const buddhaPast = new Buddha("Shakyamuni")
const buddhaPresent = new Buddha("Gu") // ?
const buddhaFuture = new Buddha("Maitreya")
const buddhas = [buddhaPast, buddhaPresent, buddhaFuture]
for (const buddha of buddhas) {
	assert.equal(buddha.prajnaParamita, true)
	assert.equal(buddha.nirvanaAchived, true)
}

// 故知般若波羅蜜多是大神呪是大明呪是無上呪是無等等呪
const prajnaParamita = new Phenomenon("般若波羅蜜多")
shariputra.addMemory(prajnaParamita)
// 能除一切苦真実不虚故説般若波羅蜜多呪
shariputra.deleteMemory(suffering)

// 即説呪曰
const mantra = "羯諦羯諦波羅羯諦波羅僧羯諦菩提薩婆訶"
chant(mantra)
