class Emptiness {}

class Phenomenon extends Emptiness {
	public arise(): void {
		console.log("This phenomenon arises from emptiness.")
		// this.emptiness.manifest();
	}

	public cease(): void {
		console.log("This phenomenon ceases and returns to emptiness.")
	}
}

const phenomenon = new Phenomenon()

phenomenon.arise()
phenomenon.cease()
