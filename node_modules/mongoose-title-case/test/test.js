const { expect } = require('chai'),
      mongoose   = require('mongoose');

const createModel = (name, schema) => {
  try {
    return mongoose.model(name);
  } catch (err) {
    return mongoose.model(name, schema);
  }
};

const transform = (data) => {
  return [ 'someFieldTitleized', 'someOtherFieldTitleized', 'someFieldNotTouched', 'nameAwareTitleized' ].reduce((obj, key) => {
    if (data[key]) {
      obj[key] = data[key];
    }

    return obj;
  }, {});
};

describe('mongoose-title-case', function () {
  var _model, testModel,
      plugin = require('../' + require('../package.json').main);

  before(async () => {
    mongoose.connect('mongodb://localhost/cryptify-test', { useNewUrlParser: true });

    _model = new mongoose.Schema({
      someFieldTitleized:      String,
      someOtherFieldTitleized: String,
      someFieldNotTouched:     String,
      nameAwareTitleized:      String
    });

    var _schema = _model.plugin(plugin, {
      paths: [ 'someFieldTitleized', 'someOtherFieldTitleized', {
        path:    'nameAwareTitleized',
        surname: true
      }]
    });

    testModel = createModel('CryptifyTest', _schema);
  });

  after(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.disconnect();
  });

  it('should titleize simple words', async () => {
    var testRecord = await (new testModel({
      someFieldTitleized:      'apple Bee cAt',
      someOtherFieldTitleized: 'Beer cat Elliptical',
      someFieldNotTouched:     'Dont touch mE!'
    })).save();

    expect(testRecord.toObject({ transform })).to.deep.equal({
      someFieldTitleized:      'Apple Bee Cat',
      someOtherFieldTitleized: 'Beer Cat Elliptical',
      someFieldNotTouched:     'Dont touch mE!'
    });

    testRecord.someFieldTitleized = 'aaaapple bee Cat';
    await testRecord.save();

    expect(testRecord.toObject({ transform })).to.deep.equal({
      someFieldTitleized:      'Aaaapple Bee Cat',
      someOtherFieldTitleized: 'Beer Cat Elliptical',
      someFieldNotTouched:     'Dont touch mE!'
    });
  });

  it('should handle undefined paths', async () => {
    var testRecord = await (new testModel({
      someFieldTitleized:  'apple Bee cAt',
      someFieldNotTouched: 'Dont touch mE!'
    })).save();

    expect(testRecord.toObject({ transform })).to.deep.equal({
      someFieldTitleized:  'Apple Bee Cat',
      someFieldNotTouched: 'Dont touch mE!'
    });
  });

  it('should handle apostrophes', async () => {
    var testRecord = await (new testModel({
      someFieldTitleized:  'd\'angElo',
      someFieldNotTouched: 'Dont touch mE!'
    })).save();

    expect(testRecord.toObject({ transform })).to.deep.equal({
      someFieldTitleized:  'D\'Angelo',
      someFieldNotTouched: 'Dont touch mE!'
    });
  });

  it('should handle dashes', async () => {
    var testRecord = await (new testModel({
      someFieldTitleized:  'horOwitz-trEe',
      someFieldNotTouched: 'Dont touch mE!'
    })).save();

    expect(testRecord.toObject({ transform })).to.deep.equal({
      someFieldTitleized:  'Horowitz-Tree',
      someFieldNotTouched: 'Dont touch mE!'
    });
  });

  it('should handle double cased surnames', async () => {
    var testRecord = await (new testModel({
      someFieldTitleized:  'horOwitz-trEe',
      nameAwareTitleized:  'mcandrews',
      someFieldNotTouched: 'Dont touch mE!'
    })).save();

    expect(testRecord.toObject({ transform })).to.deep.equal({
      someFieldTitleized:  'Horowitz-Tree',
      someFieldNotTouched: 'Dont touch mE!',
      nameAwareTitleized:  'McAndrews'
    });

    testRecord.nameAwareTitleized = 'macAndrews';
    await testRecord.save();
    expect(testRecord.nameAwareTitleized).to.equal('MacAndrews');

    testRecord.nameAwareTitleized = 'FiTzGerAlD';
    await testRecord.save();
    expect(testRecord.nameAwareTitleized).to.equal('FitzGerald');

    testRecord.nameAwareTitleized = 'o\'brian';
    await testRecord.save();
    expect(testRecord.nameAwareTitleized).to.equal('O\'Brian');

    testRecord.nameAwareTitleized = 'o\'brian';
    await testRecord.save();
    expect(testRecord.nameAwareTitleized).to.equal('O\'Brian');
  });
});
