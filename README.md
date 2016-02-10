# React Native Redux Mocha Example

It's no secret that the JavaScript ecosystem can be a little hard to
maneuver around right now. I had been playing around with React Native
but couldn't settle on an enjoyable unit testing solution (something
that is very important to my development), mainly due to the fact that
React Native doesn't render to a DOM and therefore breaks most
JavaScript testing libraries.

There were several hurdles to jump through, but I finally got
[Mocha](https://mochajs.org/), a dapper testing library, to work with
React Native (and Redux, but that came for free). This repository takes
the example Counter app from
[here](https://github.com/alinz/example-react-native-redux) and unit
tests all of the actions, components, containers, and reducers.

The test harness  was heavily influenced by [this blog post](https://blog.formidable.com/unit-testing-react-native-with-mocha-and-enzyme-51518f13ba73#.1n4621sby) and [this set of gists](https://gist.github.com/jmreidy/4145809229195441d4d4)

## Getting Started

Clone the project and install dependencies:

    git clone git@github.com:tigershen23/react-native-redux-mocha-example.git
    cd react-native-redux-mocha-example
    npm install

Start the React Native packager in one terminal session:

    npm run start

Build and launch the iPhone app in another terminal session:

    react-native run-ios

To run the test suite once:

    npm run test

To run the test suite and watch for file changes to automatically run
again:

    npm run test:watch

## Technologies

- [React Native](https://github.com/facebook/react-native): A framework
  for building native apps with React.
- [Redux](https://github.com/rackt/redux)
- [Mocha](https://github.com/mochajs/mocha)
- [expect.js](https://github.com/Automattic/expect.js)
- [sinon](https://github.com/sinonjs/sinon): A library for test spies,
  stubs, and mocks that is useful for e.g. spying on a component's dummy
  props/event handlers.
- [babel](https://github.com/babel/babel): An ES6 transpiler we use for
  our test files since React Native's packager/transpiler is hidden.

## Test Setup

The test setup here closely mirrors the one described in [this blog
post]() from Formidable. Essentially, the `npm run test` script (defined
in package.json) runs the mocha CLI with two special arguments -
`compiler` and `require`.

The compiler (found at
`test/support/compiler.js`) does two main things: transpile the test
code from ES6 to ES5 using babel, and mock out the react native package
with the object constructed in `test/support/mocks/react-native.js` (see
line 16).

This second action is what tricks the normally browser- and
DOM-dependent libraries we are using (i.e. React test utils, Mocha) into
accepting React Native components (View, Text, etc.) as valid input. In
the mocks file, you can see that we export an "RN" object that has some
common RN components (you must add to this to be able to test with
native components). The `render` methods of these dummy components are
just stubbed to render a "div", which doesn't exist in
native-land but is recognized by React's test utils.

The `require`d file (`test/support/init.js`) simply sets up some globals
(expect and sinon) that would otherwise have to be required at the
beginning of each test file. This is loaded before all tests are run, so
it would be appropriate to put other items such as widely-used helper
functions in here.

Under the `test` directory, you will find example tests for the
`actions`, `components`, `containers`, and `reducers` in our sample app.

Cheers.
