/*
  Mongoose Title Case
*/
const SURNAME_PREFIX_DICT = [
  'mc',
  'mac',
  'fitz'
];

function titleize (str, options = {}) {
  let expression = options.prefixes ?
    new RegExp('^.| .|\'.|-.|' + options.prefixes.map(p => `(?<=${p}).`).join('|'), 'gi') :
    /^.| .|'.|-./g;

  return str.toLowerCase().replace(expression, match => match.toUpperCase());
}

/**
 * Title Case Plugin Signature
 * @identity
 *
 * @param  {Object} schema  Mongoose Schema
 * @param  {Object} options Options Hash
 * @return {Object}         Mongoose Schema
 */
function MongooseTitleCase (schema, options) {
  if (!options.paths) {
    throw new Error('Mongoose Title Case requires "paths" to be specified in the options hash');
  }

  var paths = options.paths;

  schema.pre('save', function (next) {
    var doc = this;

    var parse = previous => {
      paths.forEach(path => {
        var _path = path ? typeof path === 'string' ? path : path.path : path;

        var raw = this.get(_path),
            previousValue = previous ? previous.get(_path) : false;

        if (!raw || !!previousValue && previousValue === raw) {
          return;
        }

        const titleizeArgs = [ raw ];

        if (path.surname) {
          titleizeArgs.push({
            prefixes: options.surnamePrefixes || SURNAME_PREFIX_DICT
          });
        }

        var updateValue = titleize.apply(null, titleizeArgs);

        if (path.trim !== false && options.trim !== false) {
          updateValue = updateValue.trim();
        }

        this.set(_path, updateValue);
      });

      next();
    };

    if (this.isNew) {
      parse();
    } else {
      doc.constructor.findById(this._id)
      .exec()
      .then(parse)
      .catch(next);
    }
  });

  return schema;
}

module.exports = MongooseTitleCase;
