# React Native Animated Header ScrollView

[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)

A performant animated ScrollView component that:
* 🔥Supports both iOS and Android devices
* 🔥Animates an image into a navbar header
* 🔥Supports bounce animation on scroll down

![React Native Animated Header ScrollView](./preview-ios.gif)


# Installation
```sh
$ npm install @kanelloc/react-native-animated-header-scroll-view
```

# Usage
```typescript
import { Card, Header, OverflowHeaderComponent } from '../components';
import { AnimatedScrollView } from '@react-native-animated-header-scroll-view';
import * as React from 'react';
import { Platform } from 'react-native';

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

| Prop name                 | Description                                                                                         | Type                                                        | Required |
|---------------------------|-----------------------------------------------------------------------------------------------------|-------------------------------------------------------------|----------|
| `HeaderComponent`         | A header component to show a navbar when scrolling to the top                                       | JSX.Element                                                 | true     |
| `OverflowHeaderComponent` | An overflow header component to show a navbar when scrolling to the bottom                          | JSX.Element                                                 | false    |
| `headerImgHeight`         | Height of the scrollable image. Default value is 300                                                | number                                                      | false    |
| `headerHeight`            | Height of the navbar header. Default value is 90                                                    | number                                                      | false    |
| `headerImage`             | Image header source                                                                                 | ImageSourcePropType                                         | false    |



# Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

# License

MIT
