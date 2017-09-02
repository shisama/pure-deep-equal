# pure-deep-equal
overwrite your react component's shouldComponentUpdate to compare deeply

## Why?
React.PureComponent is very useful to make your react application faster. 
However, since React.PureComponent use 'shallow comparison', render method is not invoked when value of Object or array in props (or state) is changed.
I think it may make some bugs and hope to compare props or state deeply.
So, I developed this. That's more, I made this library as decorator because I hope to apply 'deep comparison' simply to existing codes.
I feel happy that this library helps you. Thanks.

## Usage
```
import React from "react";
import PureDeepEqual from "pure-deep-equal"

@PureDeepEqual
class Test extends React.Component {
  // ...
}
```
