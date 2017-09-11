import List from './Lists/List'

let myList = new List();

myList.append(1);
myList.append(2);
myList.insert(3, 2);//add 3 after 2 (element, after)
console.log(myList.contains(2));
console.log(myList);

//loop through the list
for (myList.front(); myList.currPos() < myList.length(); myList.next()) {
    print(myList.getElement());
}

for (myList.end(); myList.currPos() >= 0; myList.prev()) {
    print(myList.getElement());
}