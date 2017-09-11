function Stack () {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}

function push ( element ) {
    this.dataStore[this.top++] = element;
}

function pop () {
    return this.dataStore.splice(--this.top,1);
}

function peek () {
    return this.dataStore[this.top - 1];
}

function length () {
    return this.top;
}

function clear () {
    delete this.dataStore;
    this.dataStore = [];
    this.top = 0;
}

export default Stack;