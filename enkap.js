class cetaknama { 
    #name;
    constructor(name){
        this.#name = name;
    }
    get getname() {
        return this.#name;
    }
    set setname(value) {
        this.#name = value;
    }
    #sayhello(name){
        console.log(`hello,${name}`);subi
    }
}subi