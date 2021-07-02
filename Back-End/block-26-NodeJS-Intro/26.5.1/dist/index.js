'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressRescue = require('express-rescue');

var _expressRescue2 = _interopRequireDefault(_expressRescue);

var _promises = require('fs/promises');

require('dotenv/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var app = (0, _express2.default)();


// const soma = (req, res, next) => {
//   const { operacao, numero1, numero2 } = req.params;
//   const resultadoSoma = Number(numero1) + Number(numero2);

//   return operacao !== 'soma' ? next() : res.status(200).json({ resultadoSoma });
// }

// const subtracao = (req, res, next) => {
//   const { operacao, numero1, numero2 } = req.params;
//   const resultadoSubtracao = numero1 - numero2;

//   return operacao !== 'subtracao' ? next() : res.status(200).json({ resultadoSubtracao });
// }

// const divisao = (req, res, next) => {
//   const { operacao, numero1, numero2 } = req.params;
//   const resultadoDivisao = (numero1 / numero2).toFixed(2);

//   return operacao !== 'divisao' ? next() : res.status(200).json({ resultadoDivisao });
// }

// const multiplicacao = (req, res, next) => {
//   const { operacao, numero1, numero2 } = req.params;
//   const resultadoMultiplicacao = numero1 * numero2;

//   return operacao !== 'multiplicacao' ? next() : res.status(200).json({ resultadoMultiplicacao });
// }

// app
//   .get('/:operacao/:numero1/:numero2', soma, subtracao, divisao, multiplicacao);

// app.use((err, _req, res, _next) => {
//   res.status(500).json({ Erro: err.message })
// });

app.route('/recipe/:id').post((0, _expressRescue2.default)(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var id, file, fileToBeDeleted, newFile;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _context.next = 3;
            return (0, _promises.readFile)(process.env.FILE_PATH, "utf-8");

          case 3:
            file = _context.sent;
            fileToBeDeleted = JSON.parse(file).find(function (_ref2) {
              var recipeId = _ref2.id;
              return Number(recipeId) === +id;
            });

            if (fileToBeDeleted) {
              _context.next = 7;
              break;
            }

            throw new Error("Recipe not found");

          case 7:
            newFile = JSON.parse(file).filter(function (_ref3) {
              var recipeId = _ref3.id;
              return Number(recipeId) !== Number(id);
            });
            _context.next = 10;
            return (0, _promises.writeFile)(process.env.FILE_PATH, JSON.stringify(newFile));

          case 10:
            return _context.abrupt('return', res.status(200).json({ fileToBeDeleted: fileToBeDeleted }));

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));

app.use(function (err, _req, res, _next) {
  res.status(500).json({ Erro: err.message });
});

var PORT = 3000;
app.listen(PORT, function () {
  return console.log('App listening on port ' + PORT);
});
//# sourceMappingURL=index.js.map