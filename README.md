# React Native Animated Header ScrollView

[![NPM version][npm-image]][npm-url] [![npm][license-url]][npm-url] [![npm][types-url]][npm-url] [![runs with expo][expo-image]][expo-url]

A performant animated ScrollView component that:
* 🔥Animates an image or a custom component into a navbar header
* 🔥Supports bounce animation on scroll down
* 🔥Supports both iOS and Android devices

![React Native Animated Header ScrollView](./preview-ios.gif)


# Installation
```sh
$ npm install @kanelloc/react-native-animated-header-scroll-view
```

# Usage
```typescript
import { Card, Header, OverflowHeaderComponent } from '../components';
import { AnimatedScrollView } from '@kanelloc/react-native-animated-header-scroll-view';
import * as React from 'react';

export const App = () => {
  const data = Array.from(Array(20).keys());
  return (
    <AnimatedScrollView
      OverflowHeaderComponent={<OverflowHeaderComponent />}
      HeaderComponent={<Header />}
      headerImage={require('../../assets/cabin.jpg')}
    >
      {data.map((e) => {
        return <Card item={e} key={e} />;
      })}
    </AnimatedScrollView>
  );
};
```

You can find a set of detailed examples [here](https://github.com/kanelloc/react-native-animated-header-scroll-view/tree/main/example).

# Props

| Prop name                 | Description                                                                                                        | Type                | Required |
|---------------------------|--------------------------------------------------------------------------------------------------------------------|---------------------|----------|
| `HeaderComponent`         | A header component to show a navbar when scrolling to the top                                                      | JSX.Element         | true     |
| `OverflowHeaderComponent` | An overflow header component to show a navbar on top of the header image or the Foreground component               | JSX.Element         | false    |
| `ForegroundComponent`     | A foreground component to show on top of the image. You can also use it without an image as a standalone component | JSX.Element         | false    |
| `headerMaxHeight`         | Header maximum height. Default value is 300                                                                        | number              | false    |
| `headerMinHeight`         | Header minimum height. Default value is 90                                                                         | number              | false    |
| `headerImage`             | Image header source                                                                                                | ImageSourcePropType | false    |
| `disableScale`            | Disables header scaling when scrolling. Default value is false                                                     | boolean             | false    |



# Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

# License

MIT

[npm-url]: https://www.npmjs.com/package/@kanelloc/react-native-animated-header-scroll-view
[npm-image]: https://img.shields.io/npm/v/@kanelloc/react-native-animated-header-scroll-view?style=flat-square
[license-url]: https://img.shields.io/npm/l/@kanelloc/react-native-animated-header-scroll-view?style=flat-square
[types-url]: https://img.shields.io/badge/types-included-blue?style=flat-square
[expo-image]: https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000
[expo-url]: https://expo.io
