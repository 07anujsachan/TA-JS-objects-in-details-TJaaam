## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // hello john
console.log(user2.sayHello()); // hello arya 
console.log(user.sayHello.call(user2)); // hello arya
console.log(user.sayHello.call(user2, 'Hey')); // hey arya 
console.log(user.sayHello.apply(user2, ['Hey'])); // hey arya 
console.log(typeof user.sayHello.bind(user2)); // function
console.log(user.sayHello.bind(user2)()); // hello arya
console.log(userSayHello()); // hello undefined
console.log(typeof userSayHello.bind(user2)); // function
console.log(userSayHello.bind(user2)()); // hello arya
console.log(user3.sayHello()); // user3.sayHello is not a function
console.log(userSayHello.apply(user3)); // hello bran 
console.log(userSayHello.call(user3)); //hello bran
console.log(typeof new MainUser()); // object 
console.log(typeof new MainUser()); // object 
console.log(new MainUser().sayHello()); // hello tyrion
console.log(new MainUser().sayHello.call(user2)); // hello arya
console.log(new MainUser().sayHello.call(user)); // hello john 
console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
); // welcome! john
```
