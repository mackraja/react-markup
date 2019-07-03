# react-html-markup

[[react-html-markup]](https://nodei.co/npm/react-html-markup/)

An HTML to React parser that works on the server and the browser:

It converts an HTML string to [React elements](https://facebook.github.io/react/docs/react-api.html#creating-react-elements).

## Example

```js

In React JS
------------

import React from 'react';
import Markup from 'react-html-markup';

export default class DemoClassOne extends React.Component {
  render () {
    const dbString = '<p>Hello from React HTML Markup</p>';
    return (
      <Markup
        htmlString={ dbString } // html string that is coming from database or static html string.
        htmlTag='div' // You can add any html tag
        ... // You can add multiple attributes here like (class, data-title, style), that will apply on htmlTag you defined (div)
      />
    );
  }
}
DemoClassOne.propTypes = {};


Output show in Browser:
-----------------------
<div><p>Hello from React HTML Markup</p></div>
```

## Installation

[NPM](https://www.npmjs.com/package/html-react-parser):
```sh
$ npm install react-html-markup --save
```

[Yarn](https://yarn.fyi/html-react-parser):
```sh
$ yarn add react-html-markup
```

## Support on Beerpay
Hey dude! Help me out for a couple of :beers:!

[![Beerpay](https://beerpay.io/mackraja/react-markup/badge.svg?style=beer-square)](https://beerpay.io/mackraja/react-markup)  [![Beerpay](https://beerpay.io/mackraja/react-markup/make-wish.svg?style=flat-square)](https://beerpay.io/mackraja/react-markup?focus=wish)