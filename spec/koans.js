
/*********************************
********* DAILY EXERCISE *********
**********************************/

describe("arrow functions. ", () => {
    it("are shorter to write", function() {
    let func = () => {
      return "I am func";
    };
    expect(func()).toBe("I am func");
  });

  it('a single expression, without curly braces returns too', function() {
    let func = () => 'I return too';
    expect(func()).toBe('I return too');
  });

  it('one parameter can be written without parens', () => {
   let func = n => n -1;
    expect(func(25)).toEqual(24)
  });

  it('many params require parens', () => {
    let func = (a, b) => a + b
    expect(func(23,42)).toEqual(23+42)
  });

  it('body needs parens to return an object', () => {
    let func = () => ({iAm: 'an object'})
    expect(func()).toEqual({iAm: 'an object'});
  });

  class LexicallyBound {

    getFunction() {
      return () => this; 
    }

    getArgumentsFunction() {
      return () => arguments;      
    }
  }

  describe('arrow functions have lexical `this`, no dynamic `this`', () => {

    it('bound at definition time, use `=>` ', function() {
      let bound = new LexicallyBound();
      let fn = bound.getFunction();

      expect(fn()).toBe(bound);
    });

    it('can NOT bind a different context', function() {
      let bound = new LexicallyBound();
      let fn = bound.getFunction();
      let anotherObj = {};
      let expected = bound; //change this

      expect(fn.call(anotherObj)).toBe(expected);
    });

    it('`arguments` doesnt work inside arrow functions', function() {
      let bound = new LexicallyBound();
      let fn = bound.getArgumentsFunction();

      expect(fn(1, 2).length).toEqual(0);
    });

  });

});

describe('destructuring function parameters. ', () => {

  describe('destruct parameters', () => {
    it('multiple params from object', () => {
      const fn = ({name, id}) => {
        expect(id).toEqual(42);
        expect(name).toEqual('Wolfram');
      };
      const user = {name: 'Wolfram', id: 42};
      fn(user);
    });

    it('multiple params from array/object', () => {
      const fn = ([,{name}]) => {
        expect(name).toEqual('Alice');
      };
      const users = [{name: 'nobody'}, {name: 'Alice', id: 42}];
      fn(users);
    });
  });

  describe('default values', () => {
    it('for simple values', () => {
      const fn = (id, name = "Bob") => {
        expect(id).toEqual(23);
        expect(name).toEqual('Bob');
      };
      fn(23);
    });

    it('for a missing array value', () => {
      const defaultUser = {id: 23, name: 'Joe'};
      const fn = ([user= defaultUser]) => {
        expect(user).toEqual(defaultUser);
      };
      fn([]);
    });

    it('mix of parameter types', () => {
      const fn = (id = 1, [arr = 2], {obj = 3}) => {
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
      const {x:y=42} = {y: 23};
      expect(y).toEqual(42);
    });
  });

  describe('for function parameter names', function() {
    it('do it the same way, with a colon behind it', () => {
      const fn = ({x:y}) => {
       expect(y).toEqual(1);
      };
      fn({x: 1});
    });

    it('giving it a default value is possible too, like above', () => {
      const fn = ({x:y = 3}) => {
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
    const [,...all] = [1, 2, 3, 4];
    expect(all).toEqual([2, 3, 4]);
  });
});

describe('spread with arrays. ', () => {

  it('extracts each array item', function() {
    const [...[a,b]] = [...[1, 2]];
    expect(a).toEqual(1);
    expect(b).toEqual(2);
  });

  it('in combination with rest', function() {
    const [,a, b, ...rest] = [...[0, 1, 2, 3, 4, 5]];
    expect(a).toEqual(1);
    expect(b).toEqual(2);
    expect(rest).toEqual([3, 4, 5]);
  });

  it('spreading into the rest', function() {
    const [,...rest] = [...[,1, 2, 3, 4, 5]];
    expect(rest).toEqual([1, 2, 3, 4, 5]);
  });

  describe('used as function parameter', () => {
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

    const instance = new TestClass;
    expect(typeof instance).toBe('object');
  });

  it('class is block scoped', () => {
    { class Inside {} 
  }
    expect(typeof Inside).toBe('undefined');
  });

  it('special method is `constructor`', function() {
    class User {
      constructor(id) {this.id= id}
    }

    const user = new User(42);
    expect(user.id).toEqual(42);
  });

  it('defining a method is simple', function() {
    class User {
      writesTests(){
        return false
      }

    }

    const notATester = new User();
    expect(notATester.writesTests()).toBe(false);
  });

  it('multiple methods need no commas (opposed to object notation)', function() {
    class User {
      wroteATest() { this.everWroteATest = true; }
      isLazy()     { return !this.everWroteATest}
    }

    const tester = new User();
    expect(tester.isLazy()).toBe(true);
    tester.wroteATest();
    expect(tester.isLazy()).toBe(false);
  });

  it('anonymous class', () => {
    const classType = typeof class{};
    expect(classType).toBe('function');
  });

});
