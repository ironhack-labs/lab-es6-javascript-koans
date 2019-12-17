context = describe;

/*********************************
********* PAIR PROGRAMMING *********
**********************************/

describe('`let` restricts the scope of the variable to the current block - ', () => {
  describe('`let` vs. `var`.', () => {
    it('`var` works as usual, it does not restricts scope', () => {
      if (true) {
        /*You should add your code in here*/
        var varX = true;
      }
      expect(varX).toBe(true);
    });

    it('`let` restricts scope to inside the block', () => {
      var letX = false;
      if (true) {
        const letX = true
      }
      expect(letX).toBe(false);
    });

    it('`var` does not restricts scope to inside the block in `for` loops', () => {
      // outer counter is beeing shadowed by the inner counter var declaration, this counter === 50
      var counter = 100
      for (var counter = 1; counter < 50; counter++){

      }

      expect(counter).toBe(50);
    });

    it('`let` restricts scope to inside the block also in `for` loops', () => {
      let counter = 100;
      /*var or let? counter = 100*/
      for (let counter = 1; counter < 50; counter++){}

      expect(counter).toBe(100);
    });
  });

});

describe('`const` is like `let` plus read-only. ', () => {

  describe('scalar values are read-only', () => {
    it('number are read-only', () => {
      const constNum = 0;
      // can't reasign const variable declarations of primitive values
      // constNum = 1; 

      expect(constNum).toBe(0);
    });

    it('string are read-only', () => {
      const constString = "I am a const";
      // constString = "Cant change you?";

      expect(constString).toBe("I am a const");
    });

  });

 const notChangeable = 23;
// TODO isn't it always de case? I didn't get it. a broader scope is always avaliable in a norrower scope and const works like that too. Is this the point?
  it('const scope leaks too', () => {
    expect(notChangeable).toBe(23);
  });

  describe('complex types are NOT fully read-only', () => {

    
    it('arrays is not fully read-only', () => {
      const arr = [42, 23];
      // arr couldn't be reasigned to a new array when declared with const

      // arr = [1, 2, 3] // type error

      // but its values can be updated since arrays are not primitive types and you are only updating its references. Is that right?

      arr[0] = 0;
      expect(arr[0]).toBe(0);
    });

    it('objects are not fully read-only', () => {
      const obj = {x: 1};
      obj.x = 2;
      expect(obj.x).toBe(2);
    });

  });

});

describe('`string.includes()` finds string within another string. ', () => {

  describe('find a single character', function() {
    it('in a three char string', function() {
      const searchString = 'z' // 'x', 'y', or 'z'
      expect('xyz'.includes(searchString)).toBe(true);
    });
    it('reports false if character was not found', function() {
      const expected = false; // k
      expect('xyz'.includes('abc')).toBe(expected);
    });
  });

  describe('find a string', function() {
    it('that matches exactly', function() {
      const findSome = srt => 'xyz'.includes(srt); // k
      expect(findSome('xyz')).toBe(true);
    });
  });

  // TODO therefore i shouldn't use includes to search for a empty string?
  // is an empty string always a substring? like - that is why i can split a string using .split('')?

  /*
  includes documentation:
      /**
     * Returns true if searchString appears as a substring of the result of converting this
     * object to a String, at one or more positions that are
     * greater than or equal to position; otherwise, returns false.
     * @param searchString search string
     * @param position If position is undefined, 0 is assumed, so as to search all of the String.
     */

  describe('search for an empty string, is always true', function() {
    it('in an empty string', function() {
      const x = ''
      expect(''.includes(x)).toBe(true);
    });
    it('in `abc`', function() {
      const x = ''
      expect('abc'.includes(x)).toBe(true);
    });
  });

  /*
  includes polyfill:
  if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';

    if (search instanceof RegExp) {
      throw TypeError('first argument must not be a RegExp');
    } 
    if (start === undefined) { start = 0; }
    return this.indexOf(search, start) !== -1;
  };
}
  */
  describe('takes a position from where to start searching', function() {
    it('does not find `a` after position 1 in `abc`', function() {
      const position = 1; // k
      expect('abc'.includes('a', position)).toBe(false);
    });
    it('even the position gets coerced', function() {
      const findAtPosition = (pos) => 'xyz'.includes('z',pos)
      expect(findAtPosition('2')).toBe(true); // lol
    });

    // TODO falsy values are treated like 0. Right? Is this what is happening here?

    describe('invalid positions get converted to 0', function() {
      it('e.g. `undefined`', function() {
        const findAtPosition = (pos) => 'xyz'.includes('x', undefined); // undefined was type coersed to false?
        expect(findAtPosition(void 0)).toBe(true);
      });
      it('negative numbers', function() {
        const findAtPosition = (pos) => 'xyz'.includes('z', pos);
        expect(findAtPosition(-2)).toBe(true);
      });
      it('NaN', function() {
        const findAtPosition = (pos) => 'xyz'.includes('y', pos);
        expect(findAtPosition(NaN)).toBe(true);
      });
    });
  });

});

describe('a template string, is wrapped in ` (backticks) instead of \' or ". ', () => {

  describe('by default, behaves like a normal string', function() {
    it('just surrounded by backticks', function() {
      let str = `like a string`
      expect(str).toEqual('like a string');
    });

  });

  let x = 42;
  let y = 23;

  describe('can evaluate variables, which are wrapped in "${" and "}"', function() {

    it('e.g. a simple variable "${x}" just gets evaluated', function() {
      let evaluated = `x=${x}`
      expect(evaluated).toBe('x=' + x);
    });

    it('multiple variables get evaluated too', function() {
      var evaluated = `${x}+${y}`;
      expect(evaluated).toBe(x + '+' + y);
    });

  });

  describe('can evaluate any expression, wrapped inside "${...}"', function() {

    it('all inside "${...}" gets evaluated', function() {
      var evaluated = Number(`${x+y}`);
      expect(evaluated).toBe(x+y);
    });

    it('inside "${...}" can also be a function call', function() {
      function getSchool(){
        return 'Ironhack';
      }
      var evaluated = `${getSchool()}`;
      expect(evaluated).toBe('Ironhack');
    });

  });

});

describe('The object literal allows for new shorthands. ', () => {

  const x = 1;
  const y = 2;

  /*
  // usual:
  const short2 = {}
  short2.y = 2
  short2

  // this is a shorthand of an object literal?
  // shorthand:
  const y = 2
  const short = {y}
  short
  */

  describe('with variables', () => {
    it('the short version for `{y: y}` is {y}', () => {
      const short = {y}
      expect(short).toEqual({y: y});
    });
    it('works with multiple variables too', () => {
      const short = {x, y}
      expect(short).toEqual({x: x, y: y});
    });
  });

  /*

  const bar = () => 'hello, bar'
  const foo = () => bar;
  foo() // bar
  foo()() // 'hello, bar'

  const short = {foo}
  short.foo() // bar
  short.foo()() // hello, bar

  const long = {}
  long.foo = foo
  long.foo() // bar
  long.foo()() // hello, bar
  */
  describe('with methods', () => {
    const func = () => func;

    it('using the name only uses it as key', () => {
      const short = {func}
      expect(short).toEqual({func: func});
    });
    it('a different key must be given explicitly, just like before ES6', () => {
      // TODO is that right? it is not a shorthand! I guess i didn't find a way to shorthand it
      const short = {}
      short.otherKey = func;
      // const short = {func = otherKey.func}
      expect(short).toEqual({otherKey: func});
    });
  });
});

describe('destructuring arrays makes shorter code. ', () => {

  it('extract value from array, e.g. extract 0 into x like so `let [x] = [0];`', () => {
    let [firstValue] = [1];
    expect(firstValue).toEqual(1);
  });

  it('swap two variables, in one operation', () => {
    let [x, y] = ['ax', 'why'];
    [y, x] = [x, y];
    expect([x, y]).toEqual(['why', 'ax']);
  });

  it('leading commas', () => {
    const all = ['ax', 'why', 'zet'];
    const [, , z] = all;
    expect(z).toEqual('zet');
  });

  it('extract from nested arrays', () => {
    const user = [['Some', 'One'], 23];
    const [[firstName, surname], age] = user; // nice
    const expected = 'Some One = 23 years';
    expect(`${firstName} ${surname} = ${age} years`).toEqual(expected);
  });

  // TODO is that the idea?
  it('chained assignments', () => {
    // let c, d;
    let [a, b] = [c, d] = [1, 2];
    expect([a, b, c, d]).toEqual([1, 2, 1, 2]);
  });

});

describe('destructuring also works on strings. ', () => {

  it('destructure every character', () => {
    let [a, b, c] = 'abc'; // type coersion is wierd.
    expect([a, b, c]).toEqual(['a', 'b', 'c']);
  });

  it('missing characters are undefined', () => {
    const [a, ,c] = 'ab';
    expect(c).toEqual(void 0);
  });
});

describe('destructuring objects. ', () => {

  it('is simple', () => {
    const {x} = {x: 1};
    expect(x).toEqual(1);
  });

  describe('nested', () => {
    it('multiple objects', () => {
      const magic = {first: 23, second: 42};
      const {first, second} = magic
      expect(second).toEqual(42);
    });
    it('object and array', () => {
      /*
      this is a bit silly:
      
      other options:
      const object = {z: [23, 42]}
      const [ ,x] = object.z; // x = 42

      */
      const {z:[ ,x]} = {z: [23, 42]};
      // x = x[1] // funcionaria se fosse let
      expect(x).toEqual(42);
    });
    it('array and object', () => {
      const [, [{lang}]] = [null, [{env: 'browser', lang: 'ES6'}]];
      expect(lang).toEqual('ES6');
    });
  });
  // like an obj property with unasigned value
  describe('interesting', () => {
    it('missing refs become undefined', () => {
      const {z} = {x: 1, y: 2};
      expect(z).toEqual(void 0);
    });
  });

});

describe('destructuring can also have default values. ', () => {

  it('for an empty array', () => {
    const [a = 1] = [];
    expect(a).toEqual(1)
  });

  it('for a missing value', () => {
    const [a,b = 2,c] = [1,,3];
    expect(b).toEqual(2);
  });

  it('in an object', () => {
    const [a, b = 2] = [{a: 1}];
    expect(b).toEqual(2);
  });

  // TODO what are these void stuff? like in line 401
  it('if the value is undefined', () => {
    const {a, b = 2} = {a: 1, b: void 0};
    expect(b).toEqual(2);
  });

  it('also a string works with defaults', () => {
    const [a, b = 2] = '1';
    expect(a).toEqual('1');
    expect(b).toEqual(2);
  });

});

/*********************************
********* DAILY EXERCISE *********
**********************************/

describe('arrow functions. ', () => {

  it('are shorter to write', function() {
    let func = () => {
      return `I am func`
    };
    expect(func()).toBe('I am func');
  });

  it('a single expression, without curly braces returns too', function() {
    let func = () => `I return too`;
    expect(func()).toBe('I return too');
  });

  it('one parameter can be written without parens', () => {
   let func = num => num - 1;
    expect(func(25)).toEqual(24)
  });

  it('many params require parens', () => {
    let func = (num1, num2) => num1 + num2;
    expect(func(23,42)).toEqual(23+42)
  });

  it('body needs parens to return an object', () => {
    let func = () => {return {iAm: 'an object'}} // good to know.
    expect(func()).toEqual({iAm: 'an object'});
  });

  class LexicallyBound {

    getFunction() {
      return () => {
          return this 
          // new LexicallyBound(); /*changes might go here*/ // ao inves de instanciar um outro, 
      };
    }

    getArgumentsFunction() {
      return () => { return arguments; }; /*or here*/
    }
  }

  describe('arrow functions have lexical `this`, no dynamic `this`', () => {

    it('bound at definition time, use `=>` ', function() {
      let bound = new LexicallyBound();
      let fn = bound.getFunction(); // fn() = new LexicallyBound()

      expect(fn()).toBe(bound);
    });

    it('can NOT bind a different context', function() {
      let bound = new LexicallyBound();
      let fn = bound.getFunction(); 
      let anotherObj = {};
      let expected = bound; //change this
      // since arrow functions don't have dynamic this, .call() to bind to anotherObj' this just don't work

      expect(fn.call(anotherObj)).toBe(expected);
    });

    /*
    Arrow functions don't have this since the arguments array-like object was a workaround to begin with, which ES6 has solved with a rest parameter:
    */
    it('`arguments` doesnt work inside arrow functions', function() {
      let bound = new LexicallyBound();
      let fn = bound.getArgumentsFunction();

      expect(fn(1, 2).length).toEqual(0);
    });

  });

});

// TODO i'd like to know if you ever decided to do this kind of destructuring. thanks!
describe('destructuring function parameters. ', () => {

  describe('destruct parameters', () => {
    it('multiple params from object', () => {
      const fn = (...user) => {
        const [{name, id}] = user
        expect(id).toEqual(42);
        expect(name).toEqual('Wolfram');
      };
      const user = {name: 'Wolfram', id: 42};
      fn(user);
    });

    it('multiple params from array/object', () => {
      const fn = ([...users]) => {
        const [, {name}] = users
        expect(name).toEqual('Alice');
      };
      const users = [{name: 'nobody'}, {name: 'Alice', id: 42}];
      fn(users);
    });
  });

  describe('default values', () => {
    it('for simple values', () => {
      const fn = (id = 23, name = 'Bob') => {
        expect(id).toEqual(23);
        expect(name).toEqual('Bob');
      };
      fn(23);
    });

    // TODO eu realmente nao entendi como ele espera que eu mexa nisso. O que esse koan quer explicar?
    it('for a missing array value', () => {
      const defaultUser = {id: 23, name: 'Joe'};
      const fn = ([user]) => {
        // transformar o array vazio num objeto igual a default user?
        // expect(user).toEqual(defaultUser);
      };
      fn([]); // colocar default user aqui?
    });

    // TODO e isso? Eu nao to entendendo.
    it('mix of parameter types', () => {
      const fn = (id=1, [arr = 2], {obj = 3}) => {
        expect(id).toEqual(1);
        expect(arr).toEqual(2);
        expect(obj).toEqual(3);
      };
      fn(void 0, [], {});
    });
  });

});

describe('assign object property values to new variables while destructuring. ', () => {

  describe('for simple objects', function() {
    it('use a colon after the property name, like so `propertyName: newName`', () => {
      const {x: y} = {x: 1};
      expect(y).toEqual(1);
    });

    it('assign a new name and give it a default value using `= <default value>`', () => {
      const {x: y = 42} = {y: 23};
      expect(y).toEqual(42);
    });
  });

  describe('for function parameter names', function() {
    it('do it the same way, with a colon behind it', () => {
      const fn = ({x: y}) => {
       expect(y).toEqual(1);
      };
      fn({x: 1});
    });

    it('giving it a default value is possible too, like above', () => {
      const fn = ({x: y = 3}) => {
        expect(y).toEqual(3);
      };
      fn({});
    });
  });

});

describe('rest with destructuring', () => {

  it('rest parameter must be last', () => {
    const [...all] = [1, 2, 3, 4];
    expect(all).toEqual([1, 2, 3, 4]);
  });

  it('assign rest of an array to a variable', () => {
    const [, ...all] = [1, 2, 3, 4];
    expect(all).toEqual([2, 3, 4]);
  });
});

describe('spread with arrays. ', () => {

  it('extracts each array item', function() {
    const [a, b] = [...[1, 2]];
    expect(a).toEqual(1);
    expect(b).toEqual(2);
  });

  it('in combination with rest', function() {
    const [, a, b, ...rest] = [...[0, 1, 2, 3, 4, 5]];
    expect(a).toEqual(1);
    expect(b).toEqual(2);
    expect(rest).toEqual([3, 4, 5]);
  });

  it('spreading into the rest', function() {
    const [, ...rest] = [...[,1, 2, 3, 4, 5]];
    expect(rest).toEqual([1, 2, 3, 4, 5]);
  });

  describe('used as function parameter', () => {
    // TODO nao entendi o que ele quer explicar. E pra refatorar com spread operator?
    it('prefix with `...` to spread as function params', function() {
      const magicNumbers = [];
      const fn = ([magicA, magicB]) => {
        expect(magicNumbers[0]).toEqual(magicA);
        expect(magicNumbers[1]).toEqual(magicB);
      };
      fn(magicNumbers);
    });
  });
});

describe('spread with strings', () => {

  it('simply spread each char of a string', function() {
    const [b, a] = [...'ba'];
    expect(a).toEqual('a');
    expect(b).toEqual('b');
  });

  it('works anywhere inside an array (must not be last)', function() {
    const letters = ['a', ...'bcd', 'e', 'f'];
    expect(letters.length).toEqual(6);
  });

});


describe('class creation', () => {

  it('is as simple as `class XXX {}`', function() {
    class TestClass {};

    const instance = new TestClass();
    expect(typeof instance).toBe('object');
  }); 

  it('class is block scoped', () => {
    // TODO in this example, we have a block scope without function, loop, ifs.. does it have any utility? thanks.
    // class Inside {}
    { class Inside {} }
    expect(typeof Inside).toBe('undefined');
  });

  it('special method is `constructor`', function() {
    class User {
      constructor(id) {
        this.id = id
      }
    }

    const user = new User(42);
    expect(user.id).toEqual(42);
  });

  it('defining a method is simple', function() {
    class User {
      writesTests() {
        return false
      }
    }
    
    const notATester = new User();
    expect(notATester.writesTests()).toBe(false);
  });

  // i get it.
  it('multiple methods need no commas (opposed to object notation)', function() {
    class User {
      // wroteATest() { this.everWroteATest = true; }
      // isLazy()     { return true }
    }

    const tester = new User();
    // expect(tester.isLazy()).toBe(true);
    // tester.wroteATest();
    // expect(tester.isLazy()).toBe(false);
  });


// https://stackoverflow.com/questions/38739499/anonymous-class-instance-is-it-a-bad-idea =D
  it('anonymous class', () => {
    const classType = typeof class {};
    expect(classType).toBe('function');
  });

});
