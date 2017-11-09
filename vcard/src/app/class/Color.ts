export class Color {

    public red: number;
    public green: number;
    public blue: number;
    public alpha: number;

    constructor() {
        this.red    = 0;
        this.green  = 0;
        this.blue   = 0;
        this.alpha  = 1;
    }

    toString(): string {
        return 'rgba(' + this.red + ', ' + this.green + ', ' + this.blue + ', ' + this.alpha + ')';
    }

}
