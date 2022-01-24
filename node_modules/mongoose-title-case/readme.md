## mongoose-title-case
A mongoose.js plugin for titlizing ~& trimming~ schemas.

### Installation
```
$ npm install mongoose-title-case --save
OR
$ yarn add mongoose-title-case
```

### Usage
*NOTE: Schema#trim is now a path option in mongoose. Use of mongoose-title-case's trim option is deprecated and will be removed in a future release.*
Mongoose plugin style.

```javascript
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    titleize = require('mongoose-title-case'),

var userSchema = new Schema({
  name: {
    first: String,
    last:  String
  }
});

// Attach some mongoose hooks
userSchema.plugin(titleize, {
  paths: [ 'name.first', { path: 'name.last', trim: false } ], // Array of paths
  trim: true
});

module.exports = mongoose.model('User', userSchema);
```

And watch it work

```javascript

var User   = require('path/to/model');

var document = new User({
  name: {
    first: ' bob ',
    last:  'ross '
  }
});

document.save().then(record => {
  console.log(record.name.first); // 'Bob'
  console.log(record.name.last); // 'Ross '
});
```

### Options

Options used in mongoose-title-case

+ **options.paths** {[String|{ path: String, surname: Boolean }]} (*Required*) Array of paths to title case & trim
+ **options.paths.*.surname** {Boolean} Tells title-case to respect this field as a surname, meaning it will run it against a prefix dictionary.
+ **options.trim** {Boolean} Trim all paths. `true` by default **DEPRECATED**
+ **options.surnamePrefixes** {[String]} A dictionary of surname prefixes to replace the included dictionary.
