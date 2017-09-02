# pure-deep-equal

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/shisama/pure-deep-equal/blob/master/LICENSE)
<a href="https://david-dm.org/shisama/pure-deep-equal/"><img src="https://david-dm.org/shisama/pure-deep-equal.svg" alt="Dependency Status"></a>
<a href="https://david-dm.org/shisama/pure-deep-equal/?type=dev"><img src="https://david-dm.org/shisama/pure-deep-equal/dev-status.svg" alt="devDependency Status"></a>
[![npm](https://img.shields.io/npm/dt/pure-deep-equal.svg)](https://www.npmjs.com/package/pure-deep-equal)

overwrite your react component's shouldComponentUpdate to compare deeply

## Why?
React.PureComponent is very useful to make your react application faster. 
However, since React.PureComponent use 'shallow comparison', render method is not invoked when value of Object or array in props (or state) is changed.
I think it may make some bugs and hope to compare props or state deeply.
So, I developed this. That's more, I made this library as decorator because I hope to apply 'deep comparison' simply to existing codes.
I feel happy that this library helps you. Thanks.

## Install
```
npm install --save pure-deep-equal
```

## Usage
```
import React from "react";
import PureDeepEqual from "pure-deep-equal"

@PureDeepEqual
class Test extends React.Component {
  // ...
}
```

if you use babel but you haven't yet install `babel-plugin-transform-decorator-legacy`, install it and setup.
- install
```
npm install --save-dev babel-plugin-transform-decorator-legacy
```

- setup `.babelrc`
```
"plugins": ["transform-decorators-legacy"]
```


## License
This project is licensed under the terms of the
[MIT license](https://github.com/shisama/pure-deep-equal/blob/master/LICENSE)
