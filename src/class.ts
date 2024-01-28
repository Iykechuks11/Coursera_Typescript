import { Review } from "./interface"

export class MainProperty {
    src: string
    title: string
    review: Review[]
    constructor(src: string, title: string, review: Review[]) {
        this.src = src
        this.title = title
        this.review = review
    }
}
