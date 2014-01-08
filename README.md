# Bedrock

Bedrock is a highly un-opinionated and minimal front-end toolset built in LESS by [aebsr]

[aebsr]: http://github.com/aebsr

Framework-free, Bedorock attemps to avoid telling how to write your code and instead allows you to just write it.

## Quick Start

* Using [Bower](https://github.com/twitter/bower) run `bower install bedrock`

### Usage
In your less file(s) use `@import 'path/to/bedrock/bedrock';` or cherry pick individual mixing as needed `@import 'path/to/bedrock/mixins/border-radius';`


## Browser and Polyfill Support
Out of the box, Bedrock supports IE9 up. But it is [CSS3PIE](http://css3pie.com) for IE7 &amp; IE8 as well as [BoxSizing](https://github.com/Schepp/box-sizing-polyfill) for IE7.

### Enable Support

```
@support-ie7: true;
@support-ie8: true;
@support-pie: true;
```
*The above support vars are set to false by default*

### Declaring Paths
#### CSS3Pie
If `@support-pie` is set to `true`, you will want to declare your path to your .htc file. *The default is:*

```
@pie_url: '/PIE.htc';
```

#### Boxsizing
If `@support-ie7` is set to `true`, you will need to declare your path the box sizing polyfill. *The default is:*

```
@boxsizing_url: '/boxsizing.htc';
```

### Legacy Support
If updating a pre Bedrock 1.0.0 website enable IE7 & IE8.

## Example
```
@import 'bower_components/bedrock/bedrock';
@support-ie8: true;

h1 {
	#transparent .color(green, 0.5);
}
```

## ToDos
Modularize support for:

* firefox >3.6
* safari >4.0
* mobile/safari (iOS) >3.2
* mobile/safari (iOS) >4.3
* android browser >3.0
* blackberry browser >7.0

## Change Log

- **1.2.0**
    - .size() mixin takes width before height, following traditional syntax.
    - Also added .placeholder() mixin.
- **1.3.0** #sprite mixin set added
- **1.4.0** .ir() Intrinsic Ratio mixin.
- **1.5.0** adding .transition-duration() .transition-property() and .transition-delay() mixin. Deprecating .delay()
- **1.6.0** adding .font-size() mixin to generate pixel and rem based font sizes.
- **1.7.0** adding .transform(@params) mixin
