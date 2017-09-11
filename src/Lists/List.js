function List (){
    this.listSize = 0;
    this.position = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currentPosition = currentPosition;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}

function currentPosition() { //Returns the current position in list
    return this.position;
}

function length () {
    return this.length;
}

function moveTo(position) { //Moves the current position to specified position
    if(position >= 0 && position <= this.listSize -1){
        this.position = position;
    }
}

function getElement() { //Returns element at current position
    return this.dataStore[this.position];
}

function front() { //Sets current position to first element of list
    this.position = 0;
}

function end() {  //Sets current position to last element of list
    this.position = this.listSize - 1;
}

function prev() { //Moves current positiion back one element
    if(this.position > 0){
        this.position = this.position - 1;
    }
}

function next() { //Moves curent position forward one element
    if(this.position < this.listSize -1) {
        this.position++;
    }
}

function append(element) {  //Adds new elemen from list
    this.dataStore[this.listSize++] = element
}

function remove (element) {
    let foundAt = this.find(element);

    if(foundAt > -1){
        this.dataStore.splice(foundAt,1);
        this.listSize--;
        return true;
    }
    return false;
}

function find (element) {
    for( let i =0; i< this.dataStore.length; i++){
        if(this.dataStore[i] === element){ return i;}
    }
    return -1;
}

function length () {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) { //insert new element after existing element
    let pos = this.find(after);

    if(pos > -1){
        this.dataStore.splice(pos+1,0,element);
        this.listSize++;
        return true;
    }
    return false;
}

function clear() { // Clears all elements from list
    delete this.dataStore;
    this.dataStore = [];
    this.position = 0;
    this.listSize = 0;
}

function contains(element){
    return this.find(element) > -1 ? true : false;
}

function toString() { //Returns string representation of list
    let elements = "";

    for(element in this.dataStore){
        elements = elements + element;
    }
    return elements;
}

export default List;

