context = describe;

<<<<<<< HEAD
describe("`let` vs. `var`.", () => {
  it("the scope for `var` is not restricted to the block", () => {
    if (true) {
      var varX = true;
    }
    expect(varX).toBe(true);
  });

  it("`let` restricts scope to inside the block", () => {
    let letX;
    if (true) {
      letX = true;
    }
    expect(letX).toBe(true);
  });
});

describe("`const` is like `let` plus read-only. ", () => {
  it("primitives declared with `const` cannot be reassigned", () => {
    const x = 0;
    expect(() => {
      x = 1;
    }).toThrow();
  });
  it("objects declared with `const` cannot be reassigned", () => {
    const y = [1, 2, 3];
    expect(() => {
      y = [4, 5, 6];
    }).toThrow();
  });

  it("objects declared with `const` can still be mutated", () => {
    const arr = [42, 23];
    const obj = { x: 1 };

    arr[0] = 0;
    obj.x = 2;

    expect(arr[0]).toBe(0);
    expect(obj.x).toBe(2);
  });

  it("`const` scope leaks too", () => {
    if (true) {
      const notChangeable = 23;
      expect(notChangeable).toBe(23);
    }
  });
});

describe("`string.includes()` finds string within another string. ", () => {
  it("returns `true` if a character is found in a string", () => {
    const char = "x";
    expect("xyz".includes(char)).toBe(true);
  });
  it("returns `false` if character was not found", () => {
    const char = "w";
    expect("xyz".includes(char)).toBe(false);
  });
  it("returns `true` if a string is found in a string", () => {
    const searchString = "Hello";
    expect("Hello World".includes(searchString)).toBe(true);
  });
  it("returns `false` if string was not found", () => {
    const searchString = "Hi";
    expect("Hello World".includes(searchString)).toBe(false);
  });

  it("does not find `a` after position 1 in `abc`", () => {
    const position = 1;
    expect("abc".includes("a", position)).toBe(false);
  });
  it("even the position gets coerced", () => {
    const position = "1";
    expect(typeof position).toBe("string");
    expect("abc".includes("c", position)).toBe(true);
  });

  it("invalid positions get converted to 0`", () => {
    let position;
    expect(position).toBeUndefined();
    expect("abc".includes("a", position)).toBe(true);
  });

  it("negative numbers get converted to 0", () => {
    const position = -1;
    expect(position).toBeLessThan(0);
    expect("abc".includes("a", position)).toBe(true);
  });

  it("NaN", () => {
    const position = 1 * "a";
    expect(position).toBeNaN();
    expect("abc".includes("a", position)).toBe(true);
  });
});

describe("a template string, is wrapped in ` (backticks) instead of ' or \". ", () => {
  describe("by default, behaves like a normal string", function () {
    it("just surrounded by backticks", function () {
=======
/*********************************
 ********* PAIR PROGRAMMING *********
 **********************************/

describe("`let` restricts the scope of the variable to the current block - ", () => {
  describe("`let` vs. `var`.", () => {
    it("`var` works as usual, it does not restricts scope", () => {
      if (true) {
        /*You should add your code in here*/
        var varX = true;
      }
      expect(varX).toBe(true);
    });

    it("`let` restricts scope to inside the block", () => {
      const letX = false;
      if (true) {
        const letX = true;
      }
      expect(letX).toBe(false);
    });

    it("`var` does not restricts scope to inside the block in `for` loops", () => {
      var counter = 100;
      for (var counter = 1; counter < 50; counter++) {}
      expect(counter).toBe(50);
    });

    it("`let` restricts scope to inside the block also in `for` loops", () => {
      var counter = 100;
      for (let counter = 1; counter < 50; counter++) {}
      expect(counter).toBe(100);
    });
  });
});

describe("`const` is like `let` plus read-only. ", () => {
  describe("scalar values are read-only", () => {
    it("number are read-only", () => {
      const constNum = 0;
      // constNum = 1;
      expect(constNum).toBe(0);
    });

    it("string are read-only", () => {
      const constString = "I am a const";
      // constString = "Cant change you?";
      expect(constString).toBe("I am a const");
    });
  });

  const notChangeable = 23;

  it("const scope leaks too", () => {
    expect(notChangeable).toBe(23);
  });

  describe("complex types are NOT fully read-only", () => {
    it("arrays is not fully read-only", () => {
      const arr = [42, 23];
      arr[0] = 0;

      expect(arr[0]).toBe(0);
    });

    it("objects are not fully read-only", () => {
      const obj = { x: 1 };
      obj.x = 2;
      expect(obj.x).toBe(2);
    });
  });
});

describe("`string.includes()` finds string within another string. ", () => {
  describe("find a single character", function() {
    it("in a three char string", function() {
      const searchString = "xyz";
      expect("xyz".includes(searchString)).toBe(true);
    });
    it("reports false if character was not found", function() {
      const expected = false;
      expect("xyz".includes("abc")).toBe(expected);
    });
  });

  describe("find a string", function() {
    it("that matches exactly", function() {
      const findSome = string => "xyz".includes(string);
      expect(findSome("xyz")).toBe(true);
    });
  });

  describe("search for an empty string, is always true", function() {
    it("in an empty string", function() {
      const x = "";
      expect("".includes(x)).toBe(true);
    });
    it("in `abc`", function() {
      const x = "abc";
      expect("abc".includes(x)).toBe(true);
    });
  });

  describe("takes a position from where to start searching", function() {
    it("does not find `a` after position 1 in `abc`", function() {
      const position = 1;
      expect("abc".includes("a", position)).toBe(false);
    });
    it("even the position gets coerced", function() {
      const findAtPosition = pos => "xyz".includes("z", pos);
      expect(findAtPosition("2")).toBe(true);
    });
    describe("invalid positions get converted to 0", function() {
      it("e.g. `undefined`", function() {
        const findAtPosition = pos => "xyz".includes("x", pos);
        expect(findAtPosition(void 0)).toBe(true);
      });
      it("negative numbers", function() {
        const findAtPosition = pos => "xyz".includes("x", pos);
        expect(findAtPosition(-2)).toBe(true);
      });
      it("NaN", function() {
        const findAtPosition = pos => "xyz".includes("x", pos);
        expect(findAtPosition(NaN)).toBe(true);
      });
    });
  });
});

describe("a template string, is wrapped in ` (backticks) instead of ' or \". ", () => {
  describe("by default, behaves like a normal string", function() {
    it("just surrounded by backticks", function() {
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
      let str = `like a string`;
      expect(str).toEqual("like a string");
    });
  });

  let x = 42;
  let y = 23;

<<<<<<< HEAD
  describe('can evaluate variables, which are wrapped in "${" and "}"', function () {
    it('e.g. a simple variable "${x}" just gets evaluated', function () {
      let evaluated = `x = ${x}`;
      expect(evaluated).toBe("x = " + x);
    });

    it("multiple variables get evaluated too", function () {
      var evaluated = `${x} + ${y}`;
      expect(evaluated).toBe(x + " + " + y);
    });
  });

  describe('can evaluate any expression, wrapped inside "${...}"', function () {
    it('all inside "${...}" gets evaluated', function () {
=======
  describe('can evaluate variables, which are wrapped in "${" and "}"', function() {
    it('e.g. a simple variable "${x}" just gets evaluated', function() {
      let evaluated = `x=${x}`;
      expect(evaluated).toBe("x=" + x);
    });

    it("multiple variables get evaluated too", function() {
      var evaluated = `${x}+${y}`;
      expect(evaluated).toBe(x + "+" + y);
    });
  });

  describe('can evaluate any expression, wrapped inside "${...}"', function() {
    it('all inside "${...}" gets evaluated', function() {
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
      var evaluated = Number(`${x + y}`);
      expect(evaluated).toBe(x + y);
    });

<<<<<<< HEAD
    it('inside "${...}" can also be a function call', function () {
=======
    it('inside "${...}" can also be a function call', function() {
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
      function getSchool() {
        return "Ironhack";
      }
      var evaluated = `${getSchool()}`;
      expect(evaluated).toBe("Ironhack");
    });
  });
});

describe("The object literal allows for new shorthands. ", () => {
  const x = 1;
  const y = 2;

  describe("with variables", () => {
<<<<<<< HEAD
    it("the short version for `{ y: y }` is { y }", () => {
      let short = { y };
      expect(short).toEqual({ y: y });
    });
    it("works with multiple variables too", () => {
      let short = { x, y };
=======
    it("the short version for `{y: y}` is {y}", () => {
      const short = { y };
      expect(short).toEqual({ y: y });
    });
    it("works with multiple variables too", () => {
      const short = { x, y };
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
      expect(short).toEqual({ x: x, y: y });
    });
  });

<<<<<<< HEAD
  describe("with functions", () => {
    const func = () => func;

    it("using the name only uses it as key", () => {
      let short = { func };
=======
  describe("with methods", () => {
    const func = () => func;

    it("using the name only uses it as key", () => {
      const short = { func };
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
      expect(short).toEqual({ func: func });
    });

    it("a different key must be given explicitly, just like before ES6", () => {
<<<<<<< HEAD
      let longer = { otherKey: func };
      expect(longer).toEqual({ otherKey: func });
=======
      const short = { otherKey: func };
      expect(short).toEqual({ otherKey: func });
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
    });
  });
});

describe("destructuring arrays makes shorter code. ", () => {
  it("extract value from array, e.g. extract 0 into x like so `let [x] = [0];`", () => {
<<<<<<< HEAD
    const arr = [1];

    let [firstValue] = arr;
=======
    let [firstValue] = [1];
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
    expect(firstValue).toEqual(1);
  });

  it("swap two variables, in one operation", () => {
<<<<<<< HEAD
    let [y, x] = ["ax", "why"];

    expect([x, y]).toEqual(["why", "ax"]);
  });

  it("leading commas", () => {
    const all = ["ax", "why", "zet"];
    const [, , z] = all;

    expect(z).toEqual("zet");
  });

  it("extract from nested arrays", () => {
    const user = [["Some", "One"], 23];

    // const [name, age] = user;
    // const [firstName, surname] = name;
    const [[firstName, surname], age] = user;

    const expected = "Some One = 23 years";
    expect(`${firstName} ${surname} = ${age} years`).toEqual(expected);
  });

  it("chained assignments", () => {
    // let a = (c = 1),
    //   b = (d = 2);
    let [c, d] = [1, 2];
    let [a, b] = [c, d];
    expect([a, b, c, d]).toEqual([1, 2, 1, 2]);
  });
=======
    let [x, y] = ["ax", "why"];
    [x, y] = [y, x];
    expect([x, y]).toEqual(["why", "ax"]);
  });

  it("leading commas", () => {
    const all = ["ax", "why", "zet"];
    const [, , z] = all;
    expect(z).toEqual("zet");
  });

  it("extract from nested arrays", () => {
    const user = [["Some", "One"], 23];
    const [[firstName, surname], age] = user;

    const expected = "Some One = 23 years";
    expect(`${firstName} ${surname} = ${age} years`).toEqual(expected);
  });

  it("chained assignments", () => {
    let c, d;
    let [a, b] = ([c, d] = [1, 2]);
    expect([a, b, c, d]).toEqual([1, 2, 1, 2]);
  });
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
});

describe("destructuring also works on strings. ", () => {
  it("destructure every character", () => {
<<<<<<< HEAD
    let [x, y, z] = "abc";

    expect([x, y, z]).toEqual(["a", "b", "c"]);
  });

  it("missing characters are undefined", () => {
    const [a, b, c] = "ab";
    expect(c).toBeUndefined();
=======
    let [a, b, c] = "abc";
    expect([a, b, c]).toEqual(["a", "b", "c"]);
  });

  it("missing characters are undefined", () => {
    const [a, , c] = "ab";
    expect(c).toEqual(void 0);
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
  });
});

describe("destructuring objects. ", () => {
  it("is simple", () => {
<<<<<<< HEAD
    const obj = { x: 1 };

    const { x } = obj;
=======
    const { x } = { x: 1 };
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
    expect(x).toEqual(1);
  });

  describe("nested", () => {
    it("multiple objects", () => {
      const magic = { first: 23, second: 42 };
<<<<<<< HEAD

      const { first, second } = magic;

      expect(first).toEqual(23);
      expect(second).toEqual(42);
    });

    it("object and array", () => {
      const {
        z: [, x],
      } = { z: [23, 42] };
      expect(x).toEqual(42);
    });

=======
      const { first, second } = magic;
      expect(second).toEqual(42);
    });
    it("object and array", () => {
      const {
        z: [, x]
      } = { z: [23, 42] };
      expect(x).toEqual(42);
    });
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
    it("array and object", () => {
      const [, [{ lang }]] = [null, [{ env: "browser", lang: "ES6" }]];
      expect(lang).toEqual("ES6");
    });
  });

  describe("interesting", () => {
    it("missing refs become undefined", () => {
      const { z } = { x: 1, y: 2 };
<<<<<<< HEAD
      expect(z).toBeUndefined();
=======
      expect(z).toEqual(void 0);
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
    });
  });
});

describe("destructuring can also have default values. ", () => {
  it("for an empty array", () => {
    const [a = 1] = [];
    expect(a).toEqual(1);
  });

  it("for a missing value", () => {
    const [a, b = 2, c] = [1, , 3];
    expect(b).toEqual(2);
  });

  it("in an object", () => {
<<<<<<< HEAD
    const { a, b = 2 } = { a: 1 };
=======
    const [a, b = 2] = [{ a: 1 }];
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
    expect(b).toEqual(2);
  });

  it("if the value is undefined", () => {
<<<<<<< HEAD
    const { a, b = 2 } = { a: 1, b: undefined };
=======
    const { a, b = 2 } = { a: 1, b: void 0 };
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
    expect(b).toEqual(2);
  });

  it("also a string works with defaults", () => {
    const [a, b = 2] = "1";
    expect(a).toEqual("1");
    expect(b).toEqual(2);
  });
});

<<<<<<< HEAD
describe("arrow functions. ", () => {
  it("are shorter to write", function () {
    let func = () => "I am func";
    expect(func()).toBe("I am func");
  });

  it("a single expression, without curly braces returns too", function () {
    let func = () => "I return too";

    expect(func()).toBe("I return too");
  });

  it("one parameter can be written without parens", () => {
    let func = (x) => x - 1;
    expect(func(25)).toEqual(24);
  });

  it("many params require parens", () => {
    let func = (a, b) => a + b;

    expect(func(23, 42)).toEqual(23 + 42);
  });

  it("body needs parentheses to return an object", () => {
    let func = () => {
      return { iAm: "an object" };
    };
=======
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

  it("a single expression, without curly braces returns too", function() {
    let func = () => "I return too";
    expect(func()).toBe("I return too");
  });

  it("one parameter can be written without parens", () => {
    let func = par => (par -= 1);
    expect(func(25)).toEqual(24);
  });

  it("many params require parens", () => {
    let func = (um, dois) => um + dois;
    expect(func(23, 42)).toEqual(23 + 42);
  });

  it("body needs parens to return an object", () => {
    let func = () => ({ iAm: "an object" });
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
    expect(func()).toEqual({ iAm: "an object" });
  });

  class LexicallyBound {
    getFunction() {
<<<<<<< HEAD
      return () => this;
    }

    getArgumentsFunction() {
      return function () {
        return arguments;
      };
=======
      return () => {
        return this; /*changes might go here*/
      };
    }

    getArgumentsFunction() {
      return () => arguments; /*or here*/
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
    }
  }

  describe("arrow functions have lexical `this`, no dynamic `this`", () => {
<<<<<<< HEAD
    it("bound at definition time, use `=>` ", function () {
      let bound = new LexicallyBound();
      let fn = bound.getFunction();

      expect(fn()).toBe(bound);
    });

    it("`arguments` doesnt work inside arrow functions", function () {
      let bound = new LexicallyBound();
      let fn = bound.getArgumentsFunction();

      expect(fn(1, 2).length).toEqual(2);
=======
    it("bound at definition time, use `=>` ", function() {
      let bound = new LexicallyBound();
      let fn = bound.getFunction();

      expect(fn()).toBe(bound);
    });

    it("can NOT bind a different context", function() {
      let bound = new LexicallyBound();
      let fn = bound.getFunction();
      let anotherObj = {};
      let expected = bound;

      expect(fn.call(anotherObj)).toBe(expected);
    });

    it("`arguments` doesnt work inside arrow functions", function() {
      let bound = new LexicallyBound();
      let fn = bound.getArgumentsFunction();

      expect(fn(1, 2).length).toEqual(0);
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
    });
  });
});

describe("destructuring function parameters. ", () => {
  describe("destruct parameters", () => {
    it("multiple params from object", () => {
<<<<<<< HEAD
      const fn = ({ name, id }) => {
=======
      const fn = ({ id, name }) => {
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
        expect(id).toEqual(42);
        expect(name).toEqual("Wolfram");
      };
      const user = { name: "Wolfram", id: 42 };
      fn(user);
    });

    it("multiple params from array/object", () => {
      const fn = ([, { name }]) => {
<<<<<<< HEAD
        expect(name).toBe("Alice");
=======
        expect(name).toEqual("Alice");
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
      };
      const users = [{ name: "nobody" }, { name: "Alice", id: 42 }];
      fn(users);
    });
  });

  describe("default values", () => {
    it("for simple values", () => {
      const fn = (id, name = "Bob") => {
        expect(id).toEqual(23);
        expect(name).toEqual("Bob");
      };
      fn(23);
    });

    it("for a missing array value", () => {
      const defaultUser = { id: 23, name: "Joe" };
      const fn = ([user = defaultUser]) => {
        expect(user).toEqual(defaultUser);
      };
      fn([]);
    });

    it("mix of parameter types", () => {
      const fn = (id = 1, [arr = 2], { obj = 3 }) => {
        expect(id).toEqual(1);
        expect(arr).toEqual(2);
        expect(obj).toEqual(3);
      };
      fn(undefined, [], {});
    });
  });
});

<<<<<<< HEAD
describe("spread with arrays. ", () => {
  it("spread every element of an array", () => {
    const [...all] = [1, 2, 3, 4];

    expect(all).toEqual([1, 2, 3, 4]);
  });

  it("spread rest of an array to a variable", () => {
    const [, ...butTheFirst] = [1, 2, 3, 4];
    expect(butTheFirst).toEqual([2, 3, 4]);
  });

  it("extracts each array item", function () {
    const [a, b] = [...[1, 2]];
    expect(a).toEqual(1);
    expect(b).toEqual(2);
=======
describe("assign object property values to new variables while destructuring. ", () => {
  describe("for simple objects", function() {
    it("use a colon after the property name, like so `propertyName: newName`", () => {
      const { x } = { x: 1 };
      const y = x;
      expect(y).toEqual(1);
    });

    it("assign a new name and give it a default value using `= <default value>`", () => {
      const { x } = { y: 23 };
      y = 42;
      expect(y).toEqual(42);
    });
  });

  describe("for function parameter names", function() {
    it("do it the same way, with a colon behind it", () => {
      const fn = ({ x, y = 1 }) => {
        expect(y).toEqual(1);
      };
      fn({ x: 1 });
    });

    it("giving it a default value is possible too, like above", () => {
      const fn = ({ x, y = 3 }) => {
        expect(y).toEqual(3);
      };
      fn({});
    });
  });
});

describe("rest with destructuring", () => {
  it("rest parameter must be last", () => {
    const [...all] = [1, 2, 3, 4];
    expect(all).toEqual([1, 2, 3, 4]);
  });

  it("assign rest of an array to a variable", () => {
    const [, ...all] = [1, 2, 3, 4];
    expect(all).toEqual([2, 3, 4]);
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
  });

<<<<<<< HEAD
  it("in combination with rest", function () {
    const [, a, b, ...theRest] = [...[0, 1, 2, 3, 4, 5]];

    expect(a).toEqual(1);
    expect(b).toEqual(2);
    expect(theRest).toEqual([3, 4, 5]);
  });

  it("spreading into the rest", function () {
    const [, ...rest] = [...[, 1, 2, 3, 4, 5]];

    expect(rest).toEqual([1, 2, 3, 4, 5]);
=======
describe("spread with arrays. ", () => {
  it("extracts each array item", function() {
    const [a, b] = [...[1, 2]];
    expect(a).toEqual(1);
    expect(b).toEqual(2);
  });

  it("in combination with rest", function() {
    const [, a, b, ...rest] = [...[0, 1, 2, 3, 4, 5]];
    expect(a).toEqual(1);
    expect(b).toEqual(2);
    expect(rest).toEqual([3, 4, 5]);
  });

  it("spreading into the rest", function() {
    const [, ...rest] = [...[, 1, 2, 3, 4, 5]];
    expect(rest).toEqual([1, 2, 3, 4, 5]);
  });

  describe("used as function parameter", () => {
    it("prefix with `...` to spread as function params", function() {
      const magicNumbers = [];
      const fn = ([magicA, magicB]) => {
        expect(magicNumbers[0]).toEqual(magicA);
        expect(magicNumbers[1]).toEqual(magicB);
      };
      fn(magicNumbers);
    });
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
  });
});

describe("spread with strings", () => {
<<<<<<< HEAD
  it("simply spread each char of a string", function () {
    const [b, a] = [..."xy"];

    expect(a).toEqual("y");
    expect(b).toEqual("x");
  });

  it("works anywhere inside an array (does not have to be last)", function () {
    const letters = ["a", ..."bcd", "e", "f"];

    expect(letters.length).toEqual(6);
=======
  it("simply spread each char of a string", function() {
    const [b, a] = [..."ba"];
    expect(a).toEqual("a");
    expect(b).toEqual("b");
  });

  it("works anywhere inside an array (must not be last)", function() {
    const letters = ["a", ..."bcd", "e", "f"];
    expect(letters.length).toEqual(6);
  });
});

describe("class creation", () => {
  it("is as simple as `class XXX {}`", function() {
    let TestClass = class XXX {};

    const instance = new TestClass();
    expect(typeof instance).toBe("object");
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
  });
});

<<<<<<< HEAD
describe("class creation", () => {
  it("is as simple as `class XXX {}`", function () {
    class TestClass {}
    const instance = new TestClass();
    expect(typeof instance).toBe("object");
  });

  it("special method is `constructor`", function () {
=======
  it("class is block scoped", () => {
    class Outside {}
    {
      class Inside {}
    }
    expect(typeof Inside).toBe("undefined");
  });

  it("special method is `constructor`", function() {
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
    class User {
      constructor(id) {
        this.id = id;
      }
    }

    const user = new User(42);
    expect(user.id).toEqual(42);
  });

<<<<<<< HEAD
  it("defining a method is simple", function () {
=======
  it("defining a method is simple", function() {
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
    class User {
      writesTests() {
        return false;
      }
    }

    const notATester = new User();
    expect(notATester.writesTests()).toBe(false);
  });

<<<<<<< HEAD
  it("multiple methods need no commas (opposed to object notation)", function () {
    class User {
      wroteATest() {
        this.everWroteATest = true;
      }
      isLazy() {
        return !this.everWroteATest;
=======
  it("multiple methods need no commas (opposed to object notation)", function() {
    class User {
      wroteATest() {
        this.isLazy = () => false;
      }
      isLazy() {
        return true;
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
      }
    }

    const tester = new User();
    expect(tester.isLazy()).toBe(true);
    tester.wroteATest();
    expect(tester.isLazy()).toBe(false);
  });
});

/* ADVANCED */

describe("assign object property values to new variables while destructuring. ", () => {
  describe("for simple objects", function () {
    it("use a colon after the property name, like so `propertyName: newName`", () => {
      const { x, y } = { x: 1, y: 1 };

      expect(y).toEqual(1);
    });

<<<<<<< HEAD
    it("assign a new name and give it a default value using `= <default value>`", () => {
      const { y = 42 } = { x: 23 };
      expect(y).toEqual(42);
    });
  });

  describe("for function parameter names", function () {
    it("do it the same way, with a colon behind it", () => {
      const fn = ({ x, y }) => {
        expect(y).toEqual(1);
      };
      fn({ x: 1, y: 1 });
    });

    it("giving it a default value is possible too, like above", () => {
      const fn = ({ x, y = 3 }) => {
        expect(y).toEqual(3);
      };
      fn({});
    });
  });
=======
  it("anonymous class", () => {
    const classType = typeof class {};
    expect(classType).toBe("function");
  });
>>>>>>> f1b80db2a1153d175ce23c11e958f832ef79c526
});
