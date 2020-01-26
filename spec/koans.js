context = describe;

describe("`let` vs. `var`.", () => {
  it("the scope for `var` is not restricted to the block", () => {
    if (true) {
      /* use the correct keyword to initialize `varX` here */
    }
    // expect(varX).toBe(true);
  });

  it("`let` restricts scope to inside the block", () => {
    /* initialize the variable `letX` */
    /* here ? */
    if (true) {
      /* or here ? */
    }
    // expect(letX).toBe(true);
  });
});

describe("`const` is like `let` plus read-only. ", () => {
  it("primitives declared with `const` cannot be reassigned", () => {
    /*let or const? x = 0;*/
    // expect(() => { x = 1; }).toThrow()
  });
  it("objects declared with `const` cannot be reassigned", () => {
    /*let or const? y = [1, 2, 3];*/
    // expect(() => { y = [4, 5, 6]; }).toThrow()
  });

  it("objects declared with `const` can still be mutated", () => {
    const arr = [42, 23];
    const obj = { x: 1 };

    /* write your code here */

    // expect(arr[0]).toBe(0);
    // expect(obj.x).toBe(2);
  });

  it("`const` scope leaks too", () => {
    /*`const`? notChangeable = 23;*/
    if (true) {
      // expect(notChangeable).toBe(23);
    }
  });
});

describe("`string.includes()` finds string within another string. ", () => {
  it("returns `true` if a character is found in a string", () => {
    /* const char = ???? */
    // expect('xyz'.includes(char)).toBe(true);
  });
  it("returns `false` if character was not found", () => {
    /* const char = ???? */
    // expect('xyz'.includes(char)).toBe(false);
  });
  it("returns `true` if a string is found in a string", () => {
    /* const searchString = ???? */
    // expect('Hello World'.includes(searchString)).toBe(true);
  });
  it("returns `false` if string was not found", () => {
    /* const searchString = ???? */
    // expect('Hello World'.includes(searchString)).toBe(false);
  });

  it("does not find `a` after position 1 in `abc`", () => {
    /* const position = ???? */
    // expect('abc'.includes('a', position)).toBe(false);
  });
  it("even the position gets coerced", () => {
    /* const position = ???? */
    // expect(typeof position).toBe("string")
    // expect('abc'.includes('c', position)).toBe(true);
  });
  it("invalid positions get converted to 0`", () => {
    /* let position = ???? */
    // expect(position).toBeUndefined()
    // expect('abc'.includes('a', position)).toBe(true);
  });
  it("negative numbers get converted to 0", () => {
    /* const position = ???? */
    // expect(position).toBeLessThan(0)
    // expect('abc'.includes('a', position)).toBe(true);
  });
  it("NaN", () => {
    /* const position = ???? */
    // expect(position).toBeNaN()
    // expect('abc'.includes('a', position)).toBe(true);
  });
});

describe("a template string, is wrapped in ` (backticks) instead of ' or \". ", () => {
  describe("by default, behaves like a normal string", function() {
    it("just surrounded by backticks", function() {
      /* let str = ?????? */
      // expect(str).toEqual('like a string');
    });
  });

  let x = 42;
  let y = 23;

  describe('can evaluate variables, which are wrapped in "${" and "}"', function() {
    it('e.g. a simple variable "${x}" just gets evaluated', function() {
      let evaluated = `x = x`;
      // expect(evaluated).toBe('x = ' + x);
    });

    it("multiple variables get evaluated too", function() {
      var evaluated = `x + y`;
      // expect(evaluated).toBe(x + ' + ' + y);
    });
  });

  describe('can evaluate any expression, wrapped inside "${...}"', function() {
    it('all inside "${...}" gets evaluated', function() {
      var evaluated = Number(`x + y`);
      // expect(evaluated).toBe(x + y);
    });

    it('inside "${...}" can also be a function call', function() {
      function getSchool() {
        return "Ironhack";
      }
      var evaluated = `getSchool()`;
      // expect(evaluated).toBe('Ironhack');
    });
  });
});

describe("The object literal allows for new shorthands. ", () => {
  const x = 1;
  const y = 2;

  describe("with variables", () => {
    it("the short version for `{ y: y }` is { y }", () => {
      /*.....*/
      // expect(short).toEqual({ y: y });
    });
    it("works with multiple variables too", () => {
      /*.....*/
      // expect(short).toEqual({ x: x, y: y });
    });
  });

  describe("with functions", () => {
    const func = () => func;

    it("using the name only uses it as key", () => {
      /*.......*/
      // expect(short).toEqual({func: func});
    });

    it("a different key must be given explicitly, just like before ES6", () => {
      /*.......*/
      // expect(longer).toEqual({ otherKey: func });
    });
  });
});

describe("destructuring arrays makes shorter code. ", () => {
  it("extract value from array, e.g. extract 0 into x like so `let [x] = [0];`", () => {
    const arr = [1];
    /* let [???] = arr */
    // expect(firstValue).toEqual(1);
  });

  it("swap two variables, in one operation", () => {
    let [x, y] = ["ax", "why"];
    /* [x, y] = [????, ????] */
    // expect([x, y]).toEqual(["why", "ax"]);
  });

  it("leading commas", () => {
    const all = ["ax", "why", "zet"];
    const [z] = all;
    // expect(z).toEqual('zet');
  });

  it("extract from nested arrays", () => {
    const user = [["Some", "One"], 23];
    /* const [firstName, surname, age] = user */

    const expected = "Some One = 23 years";
    // expect(`${firstName} ${surname} = ${age} years`).toEqual(expected);
  });

  it("chained assignments", () => {
    let c, d;
    /* let a, b = c, d = [1, 2] */
    // expect([a, b, c, d]).toEqual([1, 2, 1, 2]);
  });
});

describe("destructuring also works on strings. ", () => {
  it("destructure every character", () => {
    /* let [????] = "abc" */
    // expect([x, y, z]).toEqual(['a', 'b', 'c']);
  });

  it("missing characters are undefined", () => {
    /* const [a, c] = "ab" */
    // expect(c).toBeUndefined();
  });
});

describe("destructuring objects. ", () => {
  it("is simple", () => {
    const obj = { x: 1 };
    /* const {????} = obj */
    // expect(x).toEqual(1);
  });

  describe("nested", () => {
    it("multiple objects", () => {
      const magic = { first: 23, second: 42 };
      /* const first, second  = ?????? */
      // expect(first).toEqual(23);
      // expect(second).toEqual(42);
    });
    it("object and array", () => {
      /* const { z: [????] } = { z: [23, 42] } */
      // expect(x).toEqual(42);
    });
    it("array and object", () => {
      /* const [????] = [null, [{ env: "browser", lang: "ES6" }]] */
      // expect(lang).toEqual('ES6');
    });
  });

  describe("interesting", () => {
    it("missing refs become undefined", () => {
      /* const {????} = { x: 1, y: 2 } */
      // expect(z).toBeUndefined();
    });
  });
});

describe("destructuring can also have default values. ", () => {
  it("for an empty array", () => {
    /* const [????] = [] */
    // expect(a).toEqual(1);
  });

  it("for a missing value", () => {
    /* const [a, ????, c] = [1, , 3] */
    // expect(b).toEqual(2);
  });

  it("in an object", () => {
    /* const { a, ???? } = { a: 1 } */
    // expect(b).toEqual(2);
  });

  it("if the value is undefined", () => {
    /* const { a, ???? } = { a: 1, b: undefined } */
    // expect(b).toEqual(2);
  });

  it("also a string works with defaults", () => {
    /* const [a, ????] = "1" */
    // expect(a).toEqual("1");
    // expect(b).toEqual(2);
  });
});

describe("arrow functions. ", () => {
  it("are shorter to write", function() {
    let func = () => {
      /*........*/
    };
    // expect(func()).toBe("I am func");
  });

  it("a single expression, without curly braces returns too", function() {
    /*let func = () => .........;*/
    // expect(func()).toBe('I return too');
  });

  it("one parameter can be written without parens", () => {
    /* let func = ........;*/
    // expect(func(25)).toEqual(24)
  });

  it("many params require parens", () => {
    /* let func = ........;*/
    // expect(func(23,42)).toEqual(23+42)
  });

  it("body needs parentheses to return an object", () => {
    let func = () => {
      iAm: "an object";
    };
    // expect(func()).toEqual({iAm: 'an object'});
  });

  class LexicallyBound {
    getFunction() {
      /* changes could come here... */
      return function() {
        return this;
      };
    }

    getArgumentsFunction() {
      /* ... and here */
      return () => {
        return arguments;
      }; /*or here*/
    }
  }

  describe("arrow functions have lexical `this`, no dynamic `this`", () => {
    it("bound at definition time, use `=>` ", function() {
      let bound = new LexicallyBound();
      let fn = bound.getFunction();

      /* HINT: nothing should change here... ^ */

      // expect(fn()).toBe(bound);
    });

    it("`arguments` doesnt work inside arrow functions", function() {
      let bound = new LexicallyBound();
      let fn = bound.getArgumentsFunction();

      /* HINT: nothing should change here... ^ */

      // expect(fn(1, 2).length).toEqual(2);
    });
  });
});

describe("destructuring function parameters. ", () => {
  describe("destruct parameters", () => {
    it("multiple params from object", () => {
      const fn = (/* { ???? } */) => {
        // expect(id).toEqual(42);
        // expect(name).toEqual("Wolfram");
      };
      const user = { name: "Wolfram", id: 42 };
      fn(user);
    });

    it("multiple params from array/object", () => {
      const fn = (/* [????] */) => {
        // expect(name).toBe("Alice");
      };
      const users = [{ name: "nobody" }, { name: "Alice", id: 42 }];
      fn(users);
    });
  });

  describe("default values", () => {
    it("for simple values", () => {
      const fn = (id, name) => {
        // expect(id).toEqual(23);
        // expect(name).toEqual('Bob');
      };
      fn(23);
    });

    it("for a missing array value", () => {
      const defaultUser = { id: 23, name: "Joe" };
      const fn = ([user]) => {
        // expect(user).toEqual(defaultUser);
      };
      fn([]);
    });

    it("mix of parameter types", () => {
      const fn = (id, [arr], { obj }) => {
        // expect(id).toEqual(1);
        // expect(arr).toEqual(2);
        // expect(obj).toEqual(3);
      };
      fn(undefined, [], {});
    });
  });
});

describe("spread with arrays. ", () => {
  it("spread every element of an array", () => {
    const [all] = [1, 2, 3, 4];
    // expect(all).toEqual([1, 2, 3, 4]);
  });

  it("spread rest of an array to a variable", () => {
    const [butTheFirst] = [1, 2, 3, 4];
    // expect(butTheFirst).toEqual([2, 3, 4]);
  });

  it("extracts each array item", function() {
    const [] = [...[1, 2]];
    // expect(a).toEqual(1);
    // expect(b).toEqual(2);
  });

  it("in combination with rest", function() {
    const [a, b, ...theRest] = [...[0, 1, 2, 3, 4, 5]];
    // expect(a).toEqual(1);
    // expect(b).toEqual(2);
    // expect(theRest).toEqual([3, 4, 5]);
  });

  it("spreading into the rest", function() {
    const [...rest] = [...[, 1, 2, 3, 4, 5]];
    // expect(rest).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("spread with strings", () => {
  it("simply spread each char of a string", function() {
    const [b, a] = ["xy"];
    // expect(a).toEqual("y");
    // expect(b).toEqual("x");
  });

  it("works anywhere inside an array (does not have to be last)", function() {
    const letters = ["a", "bcd", "e", "f"];
    // expect(letters.length).toEqual(6);
  });
});

describe("class creation", () => {
  it("is as simple as `class XXX {}`", function() {
    let TestClass = {};

    // const instance = new TestClass();
    // expect(typeof instance).toBe('object');
  });

  it("special method is `constructor`", function() {
    class User {
      constructor(id) {}
    }

    const user = new User(42);
    // expect(user.id).toEqual(42);
  });

  it("defining a method is simple", function() {
    class User {}

    const notATester = new User();
    // expect(notATester.writesTests()).toBe(false);
  });

  it("multiple methods need no commas (opposed to object notation)", function() {
    class User {
      wroteATest() {
        this.everWroteATest = true;
      }
      isLazy() {}
    }

    const tester = new User();
    // expect(tester.isLazy()).toBe(true);
    tester.wroteATest();
    // expect(tester.isLazy()).toBe(false);
  });
});

/* ADVANCED */

describe("assign object property values to new variables while destructuring. ", () => {
  describe("for simple objects", function() {
    it("use a colon after the property name, like so `propertyName: newName`", () => {
      const { x } = { x: 1 };
      // expect(y).toEqual(1);
    });

    it("assign a new name and give it a default value using `= <default value>`", () => {
      const { x } = { y: 23 };
      // expect(y).toEqual(42);
    });
  });

  describe("for function parameter names", function() {
    it("do it the same way, with a colon behind it", () => {
      const fn = ({ x }) => {
        // expect(y).toEqual(1);
      };
      fn({ x: 1 });
    });

    it("giving it a default value is possible too, like above", () => {
      const fn = ({ x }) => {
        // expect(y).toEqual(3);
      };
      fn({});
    });
  });
});
