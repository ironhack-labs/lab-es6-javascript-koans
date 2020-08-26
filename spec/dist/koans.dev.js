"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

context = describe;
/*********************************
********* PAIR PROGRAMMING *********
**********************************/

describe('`let` restricts the scope of the variable to the current block - ', function () {
  describe('`let` vs. `var`.', function () {
    it('`var` works as usual, it does not restricts scope', function () {
      if (true) {
        var varX = true;
        /*You should add your code in here*/
      }

      expect(varX).toBe(true);
    });
    it('`let` restricts scope to inside the block', function () {
      /*var or const? letX = false*/
      if (true) {
        var letX = false;
        /*var or const? letX = true*/
      }

      expect(letX).toBe(false);
    });
    it('`var` does not restricts scope to inside the block in `for` loops', function () {
      /*var or let? counter = 100*/
      var counter = 50;
      /*for (var or let? counter = 1; counter < 50; counter++){}*/

      expect(counter).toBe(50);
    });
    it('`let` restricts scope to inside the block also in `for` loops', function () {
      /*var or let? counter = 100*/

      /*for (var or let? counter = 1; counter < 50; counter++){}*/
      var counter = 100;
      expect(counter).toBe(100);
    });
  });
});
describe('`const` is like `let` plus read-only. ', function () {
  describe('scalar values are read-only', function () {
    it('number are read-only', function () {
      var constNum = 0; //   constNum = 1;

      expect(constNum).toBe(0);
    });
    it('string are read-only', function () {
      var constString = "I am a const"; // constString = "Cant change you?";

      expect(constString).toBe("I am a const");
    });
  });
  /*var, let or const? notChangeable = 23;*/

  it('const scope leaks too', function () {
    var notChangeable = 23;
    expect(notChangeable).toBe(23);
  });
  describe('complex types are NOT fully read-only', function () {
    it('arrays is not fully read-only', function () {
      var arr = [42, 23];
      arr[0] = 0;
      expect(arr[0]).toBe(0);
    });
    it('objects are not fully read-only', function () {
      var obj = {
        x: 1
      };
      obj.x = 2;
      expect(obj.x).toBe(2);
    });
  });
});
describe('`string.includes()` finds string within another string. ', function () {
  describe('find a single character', function () {
    it('in a three char string', function () {
      var searchString = 'xyz';
      expect('xyz'.includes(searchString)).toBe(true);
    });
    it('reports false if character was not found', function () {
      var expected = false;
      expect('xyz'.includes('abc')).toBe(expected);
    });
  });
  describe('find a string', function () {
    it('that matches exactly', function () {
      var findSome = function findSome() {
        return 'xyz'.includes();
      };

      expect(findSome('xyz')).toBe(false);
    });
  });
  describe('search for an empty string, is always true', function () {
    it('in an empty string', function () {
      var x = '';
      expect(''.includes(x)).toBe(true);
    });
    it('in `abc`', function () {
      var x = 'abc';
      expect('abc'.includes(x)).toBe(true);
    });
  });
  describe('takes a position from where to start searching', function () {
    it('does not find `a` after position 1 in `abc`', function () {
      var position = 1;
      expect('abc'.includes('a', position)).toBe(false);
    });
    it('even the position gets coerced', function () {
      var findAtPosition = function findAtPosition(pos) {
        return 'xyz'.includes('z');
      };

      expect(findAtPosition('2')).toBe(true);
    });
    describe('invalid positions get converted to 0', function () {
      it('e.g. `undefined`', function () {
        var findAtPosition = function findAtPosition(pos) {
          return 'xyz'.includes('');
        };

        expect(findAtPosition(void 0)).toBe(true);
      });
      it('negative numbers', function () {
        var findAtPosition = function findAtPosition(pos) {
          return 'xyz'.includes('x');
        };

        expect(findAtPosition(-2)).toBe(true);
      });
      it('NaN', function () {
        var findAtPosition = function findAtPosition(pos) {
          return 'xyz'.includes('');
        };

        expect(findAtPosition(NaN)).toBe(true);
      });
    });
  });
});
describe('a template string, is wrapped in ` (backticks) instead of \' or ". ', function () {
  describe('by default, behaves like a normal string', function () {
    it('just surrounded by backticks', function () {
      var str = 'like a string';
      expect(str).toEqual('like a string');
    });
  });
  var x = 42;
  var y = 23;
  describe('can evaluate variables, which are wrapped in "${" and "}"', function () {
    it('e.g. a simple variable "${x}" just gets evaluated', function () {
      var evaluated = "x=".concat(x);
      expect(evaluated).toBe('x=' + x);
    });
    it('multiple variables get evaluated too', function () {
      var evaluated = "".concat(x, "+").concat(y);
      expect(evaluated).toBe(x + '+' + y);
    });
  });
  describe('can evaluate any expression, wrapped inside "${...}"', function () {
    it('all inside "${...}" gets evaluated', function () {
      var evaluated = Number("65");
      expect(evaluated).toBe(x + y);
    });
    it('inside "${...}" can also be a function call', function () {
      function getSchool() {
        return 'Ironhack';
      }

      var evaluated = "Ironhack";
      expect(evaluated).toBe('Ironhack');
    });
  });
});
describe('The object literal allows for new shorthands. ', function () {
  var x = 1;
  var y = 2;
  describe('with variables', function () {
    it('the short version for `{y: y}` is {y}', function () {
      var _short = {
        y: y
      };
      expect(_short).toEqual({
        y: y
      });
    });
    it('works with multiple variables too', function () {
      var _short2 = {
        x: x,
        y: y
      };
      expect(_short2).toEqual({
        x: x,
        y: y
      });
    });
  });
  describe('with methods', function () {
    var func = function func() {
      return func;
    };

    it('using the name only uses it as key', function () {
      var _short3 = {
        func: func
      };
      expect(_short3).toEqual({
        func: func
      });
    });
    it('a different key must be given explicitly, just like before ES6', function () {
      var _short4 = {
        otherKey: func
      };
      expect(_short4).toEqual({
        otherKey: func
      });
    });
  });
});
describe('destructuring arrays makes shorter code. ', function () {
  it('extract value from array, e.g. extract 0 into x like so `let [x] = [0];`', function () {
    var firstValue = 1;
    expect(firstValue).toEqual(1);
  });
  it('swap two variables, in one operation', function () {
    var x = 'ax',
        y = 'why';
    var _ref = [y, x];
    x = _ref[0];
    y = _ref[1];
    expect([x, y]).toEqual(['why', 'ax']);
  });
  it('leading commas', function () {
    var all = ['ax', 'why', 'zet'];
    var z = 'zet';
    expect(z).toEqual('zet');
  });
  it('extract from nested arrays', function () {
    var user = [['Some', 'One'], 23];

    var _user$ = _slicedToArray(user[0], 2),
        firstName = _user$[0],
        surname = _user$[1],
        age = user[1];

    var expected = 'Some One = 23 years';
    expect("".concat(firstName, " ").concat(surname, " = ").concat(age, " years")).toEqual(expected);
  });
  it('chained assignments', function () {
    var _ref4;

    var c, d;

    var _ref2 = (_ref4 = [1, 2], c = _ref4[0], d = _ref4[1], _ref4),
        _ref3 = _slicedToArray(_ref2, 2),
        a = _ref3[0],
        b = _ref3[1];

    expect([a, b, c, d]).toEqual([1, 2, 1, 2]);
  });
});
describe('destructuring also works on strings. ', function () {
  it('destructure every character', function () {
    var _abc = 'abc',
        _abc2 = _slicedToArray(_abc, 3),
        a = _abc2[0],
        b = _abc2[1],
        c = _abc2[2];

    expect([a, b, c]).toEqual(['a', 'b', 'c']);
  });
  it('missing characters are undefined', function () {
    var _ab = 'ab',
        _ab2 = _slicedToArray(_ab, 3),
        a = _ab2[0],
        b = _ab2[1],
        c = _ab2[2];

    expect(c).toEqual(void 0);
  });
});
describe('destructuring objects. ', function () {
  it('is simple', function () {
    var x = {
      x: 1
    };
    expect(x.x).toEqual(1);
  });
  describe('nested', function () {
    it('multiple objects', function () {
      var magic = {
        first: 23,
        second: 42
      };
      var first = magic.first,
          second = magic.second;
      expect(second).toEqual(42);
    });
    it('object and array', function () {
      var _z = {
        z: [23, 42]
      },
          _z$z = _slicedToArray(_z.z, 2),
          x = _z$z[1];

      expect(x).toEqual(42);
    });
    it('array and object', function () {
      var lang = [null, [{
        env: 'browser',
        lang: 'ES6'
      }]];
      expect(lang[1][0].lang).toEqual('ES6');
    });
  });
  describe('interesting', function () {
    it('missing refs become undefined', function () {
      var z = {
        x: 1,
        y: 2
      };
      expect(z.z).toEqual(void 0);
    });
  });
});
describe('destructuring can also have default values. ', function () {
  it('for an empty array', function () {
    var _ref5 = [],
        _ref5$ = _ref5[0],
        a = _ref5$ === void 0 ? 1 : _ref5$;
    expect(a).toEqual(1);
  });
  it('for a missing value', function () {
    var a = 1,
        _ref6,
        b = _ref6 === void 0 ? 2 : _ref6,
        c = 3;

    expect(b).toEqual(2);
  });
  it('in an object', function () {
    var _ref7 = [{
      a: 1
    }],
        a = _ref7[0],
        _ref7$ = _ref7[1],
        b = _ref7$ === void 0 ? 2 : _ref7$;
    expect(b).toEqual(2);
  });
  it('if the value is undefined', function () {
    var _a$b = {
      a: 1,
      b: void 0
    },
        a = _a$b.a,
        _a$b$b = _a$b.b,
        b = _a$b$b === void 0 ? 2 : _a$b$b;
    expect(b).toEqual(2);
  });
  it('also a string works with defaults', function () {
    var _ = '1',
        _ref8 = _slicedToArray(_, 2),
        a = _ref8[0],
        _ref8$ = _ref8[1],
        b = _ref8$ === void 0 ? 2 : _ref8$;

    expect(a).toEqual('1');
    expect(b).toEqual(2);
  });
});
/*********************************
********* DAILY EXERCISE *********
**********************************/

describe('arrow functions. ', function () {
  it('are shorter to write', function () {
    var func = function func() {
      return 'I am func';
    };

    expect(func()).toBe('I am func');
  });
  it('a single expression, without curly braces returns too', function () {
    var func = function func() {
      return 'I return too';
    };

    expect(func()).toBe('I return too');
  });
  it('one parameter can be written without parens', function () {
    var func = function func(num) {
      return num - 1;
    };

    expect(func(25)).toEqual(24);
  });
  it('many params require parens', function () {
    var func = function func(num1, num2) {
      return num1 + num2;
    };

    expect(func(23, 42)).toEqual(23 + 42);
  });
  it('body needs parens to return an object', function () {
    var func = function func() {
      return {
        iAm: 'an object'
      };
    };

    expect(func()).toEqual({
      iAm: 'an object'
    });
  });

  var LexicallyBound =
  /*#__PURE__*/
  function () {
    function LexicallyBound() {
      _classCallCheck(this, LexicallyBound);
    }

    _createClass(LexicallyBound, [{
      key: "getFunction",
      value: function getFunction() {
        var _this = this;

        return function () {
          return function () {
            return _this;
          };
          /*changes might go here*/
        };
      }
    }, {
      key: "getArgumentsFunction",
      value: function getArgumentsFunction() {
        var _arguments = arguments;
        return function () {
          return _arguments;
        };
        /*or here*/
      }
    }]);

    return LexicallyBound;
  }();

  describe('arrow functions have lexical `this`, no dynamic `this`', function () {
    it('bound at definition time, use `=>` ', function () {
      var bound = new LexicallyBound();
      var fn = bound.getFunction();
      expect(fn()).toBe(bound);
    });
    it('can NOT bind a different context', function () {
      var bound = new LexicallyBound();
      var fn = bound.getFunction();
      var anotherObj = {};
      var expected = bound;
      expect(fn.call(anotherObj)).toBe(expected);
    });
    it('`arguments` doesnt work inside arrow functions', function () {
      var bound = new LexicallyBound();
      var fn = bound.getArgumentsFunction();
      expect(fn(1, 2).length).toEqual(0);
    });
  });
});
describe('destructuring function parameters. ', function () {
  describe('destruct parameters', function () {
    it('multiple params from object', function () {
      var fn = function fn() {
        var id = 42;
        expect(id).toEqual(42);
        var name = 'Wolfram';
        expect(name).toEqual('Wolfram');
      };

      var user = {
        name: 'Wolfram',
        id: 42
      };
      fn(user);
    });
    it('multiple params from array/object', function () {
      var fn = function fn(_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
            name = _ref10[1].name;

        expect(name).toEqual('Alice');
      };

      var users = [{
        name: 'nobody'
      }, {
        name: 'Alice',
        id: 42
      }];
      fn(users);
    });
  });
  describe('default values', function () {
    it('for simple values', function () {
      var fn = function fn(id) {
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Bob";
        expect(id).toEqual(23);
        expect(name).toEqual("Bob");
      };

      fn(23);
    });
    it('for a missing array value', function () {
      var defaultUser = {
        id: 23,
        name: "Joe"
      };

      var fn = function fn(_ref11) {
        var _ref12 = _slicedToArray(_ref11, 1),
            user = _ref12[0];

        expect(user).toEqual(defaultUser);
      };

      fn([]);
    });
    it('mix of parameter types', function () {
      var fn = function fn() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        var _ref13 = arguments.length > 1 ? arguments[1] : undefined,
            _ref14 = _slicedToArray(_ref13, 1),
            _ref14$ = _ref14[0],
            arr = _ref14$ === void 0 ? 2 : _ref14$;

        var _ref15 = arguments.length > 2 ? arguments[2] : undefined,
            _ref15$obj = _ref15.obj,
            obj = _ref15$obj === void 0 ? 3 : _ref15$obj;

        expect(id).toEqual(1);
        expect(arr).toEqual(2);
        expect(obj).toEqual(3);
      };

      fn(void 0, [], {});
    });
  });
});
describe('assign object property values to new variables while destructuring. ', function () {
  describe('for simple objects', function () {
    it('use a colon after the property name, like so `propertyName: newName`', function () {
      var _x = {
        x: 1
      },
          y = _x.x;
      expect(y).toEqual(1);
    });
    it('assign a new name and give it a default value using `= <default value>`', function () {
      var _x2 = {
        x: 23
      },
          _x2$y = _x2.y,
          y = _x2$y === void 0 ? 42 : _x2$y;
      expect(y).toEqual(42);
    });
  });
  describe('for function parameter names', function () {
    it('do it the same way, with a colon behind it', function () {
      var fn = function fn(_ref16) {
        var x = _ref16.x,
            _ref16$y = _ref16.y,
            y = _ref16$y === void 0 ? 1 : _ref16$y;
        expect(y).toEqual(1);
      };

      fn({
        x: 1
      });
    });
    it('giving it a default value is possible too, like above', function () {
      var fn = function fn(_ref17) {
        var x = _ref17.x,
            _ref17$y = _ref17.y,
            y = _ref17$y === void 0 ? 3 : _ref17$y;
        expect(y).toEqual(3);
      };

      fn({});
    });
  });
});
describe('rest with destructuring', function () {
  it('rest parameter must be last', function () {
    var all = [1, 2, 3, 4];
    expect(all).toEqual([1, 2, 3, 4]);
  });
  it('assign rest of an array to a variable', function () {
    var _ref18 = [1, 2, 3, 4],
        all = _ref18.slice(1);

    expect(all).toEqual([2, 3, 4]);
  });
});
describe('spread with arrays. ', function () {
  it('extracts each array item', function () {
    var _ref19 = [1, 2].concat(),
        _ref19$slice = _slicedToArray(_ref19.slice(0), 2),
        a = _ref19$slice[0],
        b = _ref19$slice[1];

    expect(a).toEqual(1);
    expect(b).toEqual(2);
  });
  it('in combination with rest', function () {
    var _ref20 = [0, 1, 2, 3, 4, 5].concat(),
        a = _ref20[1],
        b = _ref20[2],
        rest = _ref20.slice(3);

    expect(a).toEqual(1);
    expect(b).toEqual(2);
    expect(rest).toEqual([3, 4, 5]);
  });
  it('spreading into the rest', function () {
    var _ref21 = [, 1, 2, 3, 4, 5].concat(),
        rest = _ref21.slice(0);

    expect(rest).toEqual([1, 2, 3, 4, 5]);
  });
  describe('used as function parameter', function () {
    it('prefix with `...` to spread as function params', function () {
      var magicNumbers = [];

      var fn = function fn(_ref22) {
        var _ref23 = _slicedToArray(_ref22, 2),
            magicA = _ref23[0],
            magicB = _ref23[1];

        expect(magicNumbers[0]).toEqual(magicA);
        expect(magicNumbers[1]).toEqual(magicB);
      };

      fn(magicNumbers);
    });
  });
});
describe('spread with strings', function () {
  it('simply spread each char of a string', function () {
    var _ref24 = _toConsumableArray("ba"),
        b = _ref24[0],
        a = _ref24[1];

    expect(a).toEqual('a');
    expect(b).toEqual('b');
  });
  it('works anywhere inside an array (must not be last)', function () {
    var letters = ['a'].concat(_toConsumableArray('bcd'), ['e', 'f']);
    expect(letters.length).toEqual(6);
  });
});
describe('class creation', function () {
  it('is as simple as `class XXX {}`', function () {
    var TestClass = function TestClass() {
      _classCallCheck(this, TestClass);
    };

    ;
    var instance = new TestClass();
    expect(_typeof(instance)).toBe('object');
  });
  it('class is block scoped', function () {
    var User = function User() {
      _classCallCheck(this, User);
    };

    {
      var _Inside = function _Inside() {
        _classCallCheck(this, _Inside);
      };
    }
    expect(typeof Inside === "undefined" ? "undefined" : _typeof(Inside)).toBe('undefined');
  });
  it('special method is `constructor`', function () {
    var User = function User(id) {
      _classCallCheck(this, User);

      this.id = id;
    };

    var user = new User(42);
    expect(user.id).toEqual(42);
  });
  it('defining a method is simple', function () {
    var User =
    /*#__PURE__*/
    function () {
      function User() {
        _classCallCheck(this, User);
      }

      _createClass(User, [{
        key: "writesTests",
        value: function writesTests() {
          return false;
        }
      }]);

      return User;
    }();

    var notATester = new User();
    expect(notATester.writesTests()).toBe(false);
  });
  it('multiple methods need no commas (opposed to object notation)', function () {
    var User =
    /*#__PURE__*/
    function () {
      function User() {
        _classCallCheck(this, User);
      }

      _createClass(User, [{
        key: "wroteATest",
        value: function wroteATest() {
          this.everWroteATest = true;
        }
      }, {
        key: "isLazy",
        value: function isLazy() {
          return false;
        }
      }]);

      return User;
    }();

    var tester = new User();
    expect(tester.isLazy()).toBe(true);
    tester.wroteATest();
    expect(tester.isLazy()).toBe(false);
  });
  it('anonymous class', function () {
    var classType = _typeof(function () {});

    expect(classType).toBe("function");
  });
});