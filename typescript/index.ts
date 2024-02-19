import assert from 'assert';

class Emptiness {
    public toString(): string {
        return 'emptiness';
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

class Disciple extends Emptiness {
    public mind: Set<Phenomenon> = new Set()
    public nirvanaAchived: boolean = false
    public prajnaParamita: boolean = false

    constructor(public name: string) {
        super()
    }
}

class Buddha extends Disciple {
    private _observations: string[] = []
    
    constructor(public name: string) {
        super(name)
        this.nirvanaAchived = true
        this.prajnaParamita = true
    }

    public observe(phenomenon: Phenomenon): void {
        const observations = `${phenomenon.toString()} is no other than ${super.toString()}`
        this._observations.push(observations)
    }
    
    public expound(to: Disciple): void {
        console.log(`Listen, ${to.name}`)

        this._observations.forEach(p => console.log(p))
        this._observations = []
    }

    public has(thing: Phenomenon) {
        return thing.toString() === super.toString()
    }
}

const chant = (mantra: string): void => {
    console.log('===============')
    console.log(mantra+"!!!!!!!")
    console.log('===============')
}

const form = new Phenomenon("色")
const suffering = new Phenomenon("苦")

const guanyin = new Buddha("観音菩薩")
const shariptra = new Disciple("舎利弗")

guanyin.observe(form)
guanyin.mind.delete(suffering)
guanyin.expound(shariptra)

const anything = new Phenomenon("anything")
const obstacle = new Phenomenon("obstacle")
const fear = new Phenomenon("fear")
if (!guanyin.has(anything)) {
    guanyin.mind.delete(obstacle)
    guanyin.mind.delete(fear)    
}

const delusions = ["misconception", "illusion", "dream"]
delusions.forEach(delusion => {
    const p = new Phenomenon(delusion)
    if (guanyin.nirvanaAchived && guanyin.mind.has(p)) {
        guanyin.mind.delete(p)
    }
})

const buddhaPast = new Buddha("Shakyamuni")
const buddhaPresent = new Buddha("gu")
const buddhaFuture = new Buddha("Maitreya")
const buddhas = [buddhaPast, buddhaPresent, buddhaFuture]
buddhas.forEach(buddha => {
    assert.equal(buddha.prajnaParamita, true)
    const emptiness = new Phenomenon(null)
    buddha.mind.add(emptiness)
    assert.equal(buddha.has(emptiness), true)
})

const prajnaParamita = new Phenomenon("般若波羅蜜多")
shariptra.mind.add(prajnaParamita)
shariptra.mind.delete(suffering)

const mantra = "羯諦羯諦波羅羯諦波羅僧羯諦菩提薩婆訶"
chant(mantra)
