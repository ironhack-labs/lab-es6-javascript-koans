context = describe;
/*********************************
********* PAIR PROGRAMMING *********
**********************************/
describe('`let` restricts the scope of the variable to the current block - ', () => {
  describe('`let` vs. `var`.', () => {
    it('`var` works as usual, it does not restricts scope', () => {
      if (true) {
        /*You should add your code in here*/
        var varX=true
      }
      expect(varX).toBe(true);
    });
    it('`let` restricts scope to inside the block', () => {
      const letX = false
      if (true) {
        const letX = true
      }
      expect(letX).toBe(false);
    });
    it('`var` does not restricts scope to inside the block in `for` loops', () => {
      var counter = 100
      for (var counter = 1; counter < 50; counter++){}
      expect(counter).toBe(50);
    });
    it('`let` restricts scope to inside the block also in `for` loops', () => {
      let counter = 100
      for (let counter = 1; counter < 50; counter++){}
      expect(counter).toBe(100);
    });
  });
});
describe('`const` is like `let` plus read-only. ', () => {
  describe('scalar values are read-only', () => {
    it('number are read-only', () => {
      const constNum = 0;
      //constNum = 1;
      expect(constNum).toBe(0);
    });
    it('string are read-only', () => {
      const constString = "I am a const";
      // constString = "Cant change you?";
      expect(constString).toBe("I am a const");
    });
  });
  const notChangeable = 23;
  it('const scope leaks too', () => {
    expect(notChangeable).toBe(23);
  });
  describe('complex types are NOT fully read-only', () => {
    it('arrays is not fully read-only', () => {
      const arr = [42, 23];
      arr[0]=0
      expect(arr[0]).toBe(0);
    });
    it('objects are not fully read-only', () => {
      const obj = {x: 1};
      obj.x=2
      expect(obj.x).toBe(2);
    });
  });
});
describe('`string.includes()` finds string within another string. ', () => {
  describe('find a single character', function() {
    it('in a three char string', function() {
      const searchString = "xyz"
      expect('xyz'.includes(searchString)).toBe(true);
    });
    it('reports false if character was not found', function() {
       const expected = false;
      expect('xyz'.includes('abc')).toBe(expected);
    });
  });
  describe('find a string', function() {
    it('that matches exactly', function() {
      const findSome = param => 'xyz'.includes(param);
      expect(findSome('xyz')).toBe(true);
    });
  });
  describe('search for an empty string, is always true', function() {
    it('in an empty string', function() {
      const x=""
      expect(''.includes(x)).toBe(true);
    });
    it('in `abc`', function() {
      let x="abc"
      expect('abc'.includes(x)).toBe(true);
    });
  });
  describe('takes a position from where to start searching', function() {
    it('does not find `a` after position 1 in `abc`', function() {
      /*....*/
      let="ba"
      let position=1
      expect('abc'.includes('a', position)).toBe(false);
    });
    it('even the position gets coerced', function() {
      const findAtPosition = (pos) => 'xyz'.includes("y");
      expect(findAtPosition('2')).toBe(true);
    });
    describe('invalid positions get converted to 0', function() {
      it('e.g. `undefined`', function() {
        const findAtPosition = (pos) => 'xyz'.includes("x"); 
        expect(findAtPosition(void 0)).toBe(true);
      });
      it('negative numbers', function() {
        const findAtPosition = (pos) => 'xyz'.includes("x"); 
        expect(findAtPosition(-2)).toBe(true);
      });
      it('NaN', function() {
        const findAtPosition = (pos) => 'xyz'.includes(""); 
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
  describe('with variables', () => {
    it('the short version for `{y: y}` is {y}', () => {
      let short={y}
      expect(short).toEqual({y: y});
    });
    it('works with multiple variables too', () => {
      let short={x,y}
      expect(short).toEqual({x: x, y: y});
    });
  });
  describe('with methods', () => {
    const func = () => func;
    it('using the name only uses it as key', () => {
      let short={func}
      expect(short).toEqual({func: func});
    });
    it('a different key must be given explicitly, just like before ES6', () => {
      let short={otherKey:func}
      expect(short).toEqual({otherKey: func});
    });
  });
});
describe('destructuring arrays makes shorter code. ', () => {
  it('extract value from array, e.g. extract 0 into x like so `let [x] = [0];`', () => {
    let firstValue = [1];
    [firstValue]=[1]
    expect(firstValue).toEqual(1);
  });
  it('swap two variables, in one operation', () => {
    let [x, y] = ['ax', 'why'];
    [x, y] = [y, x];
    expect([x, y]).toEqual(['why', 'ax']);
  });
  it('leading commas', () => {
    const all = ['ax', 'why', 'zet'];
    const [z] = ["zet"];
    expect(z).toEqual('zet');
  });
  it('extract from nested arrays', () => {
    const user = [['Some', 'One'], 23];
    const [[firstName, surname], age] = user;
    const expected = 'Some One = 23 years';
    expect(`${firstName} ${surname} = ${age} years`).toEqual(expected);
  });
  it('chained assignments', () => {
    let c, d;
    let [a, b] = [c, d] = [1, 2];
    expect([a, b, c, d]).toEqual([1, 2, 1, 2]);
  });
});
describe('destructuring also works on strings. ', () => {
  it('destructure every character', () => {
    let [a, b, c] = 'abc';
    expect([a, b, c]).toEqual(['a', 'b', 'c']);
  });
  it('missing characters are undefined', () => {
    const [a, c] = 'a';
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
      const {first, second}  = magic
      expect(second).toEqual(42);
    });
    it('object and array', () => {
      const {z:[,x]} = {z: [23, 42]};
      expect(x).toEqual(42);
    });
    it('array and object', () => {
      const [,[{lang}]] = [null, [{env: 'browser', lang: 'ES6'}]];
      expect(lang).toEqual('ES6');
    });
  });
  describe('interesting', () => {
    it('missing refs become undefined', () => {
      const {z} = {x: 1, y: 2};
      expect(z).toEqual(void 0);
    });
  });
});
describe('destructuring can also have default values. ', () => {
  it('for an empty array', () => {
    const [a] = [1];
    expect(a).toEqual(1)
  });
  it('for a missing value', () => {
    const [a,b,c] = [1,2,3];
    expect(b).toEqual(2);
  });
  it('in an object', () => {
    const [a, b] = [{a: 1},2];
    expect(b).toEqual(2);
  });
  it('if the value is undefined', () => {
    const {a, b=2} = {a: 1, b: void 0};
    expect(b).toEqual(2);
  });
  it('also a string works with defaults', () => {
    const [a, b=2] = '1';
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
      return "I am func"
    };
    expect(func()).toBe('I am func');
  });
  it('a single expression, without curly braces returns too', function() {
    let func = () => "I return too";
    expect(func()).toBe('I return too');
  });
  it('one parameter can be written without parens', () => {
   let func = (num)=>num-1;
    expect(func(25)).toEqual(24)
  });
  it('many params require parens', () => {
    let func = (num1,num2)=>(num1+num2);
    expect(func(23,42)).toEqual(23+42)
  });
  it('body needs parens to return an object', () => {
    let func = () =>  {return {iAm: 'an object'}}
    expect(func()).toEqual({iAm: 'an object'});
  });
  class LexicallyBound {
    getFunction() {
      //return () => { 
        return this; /*changes might go here*/
      //};
    }
    getArgumentsFunction() {
      return function() { return arguments; }; /*or here*/
    }
  }
  describe('arrow functions have lexical `this`, no dynamic `this`', () => {
    it('bound at definition time, use `=>` ', function() {
      let bound = new LexicallyBound();
      let fn =()=>{return bound.getFunction()} ;
      expect(fn()).toBe(bound);
    });
    it('can NOT bind a different context', function() {
      let bound = new LexicallyBound();
      let fn = bound.getFunction();
      let anotherObj = {};
      let expected = anotherObj; //change this
      expect(fn.call(anotherObj)).toBe(expected);
    });
    it('`arguments` doesnt work inside arrow functions', function() {
      let bound = new LexicallyBound();
      let fn = bound.getArgumentsFunction();
      expect(fn(1, 2).length).toEqual(0);
    });
  });
});