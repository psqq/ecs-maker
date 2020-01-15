import * as ecs from "ecs";

export class Position extends ecs.Component {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}

export class MoveDirection extends ecs.Component {
    constructor() {
        this.dx = 0;
        this.dy = 0;
    }
}
