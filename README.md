![npm downloads total](https://img.shields.io/npm/dt/solidjs-material-spinner.svg) ![npm version](https://img.shields.io/npm/v/solidjs-material-spinner.svg) ![npm license](https://img.shields.io/npm/l/solidjs-material-spinner.svg)

# solidjs-material-spinner
A simple solid-js spinner following Material UI's using only css.

![Example of Spinner](https://raw.githubusercontent.com/icarus-sullivan/solidjs-material-spinner/master/example.gif)

### Installation
```
npm install --save solidjs-material-spinner
```
or
```
yarn add solidjs-material-spinner
```

### Props
|Name|Type|Default|Description|
|-----|-----|-----|-----|
|radius |Number |40 |The radius of the spinner |
|color |String |#333333 |The color of the spinner |
|stroke |Number |5 |The spinner's stroke width |
|visible|() => false|true |Whether to show the spinner or not|

### Usage
Example:
```
import Spinner from 'solidjs-material-spinner';

export default () => (
  <div>
    <Spinner radius={40} color="#333" stroke={5} />
  </div>
)
```

### Changelog

**1.0.0**
- Initial publication