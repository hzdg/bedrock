# Bedrock

Bedrock is a highly unopinionated and minimal front-end baseline built in LESS

Frameworks are too limiting. If your truly handwriting code only so much of it can be reused. Your classnames, IDs and markup structure should match what's best for the project. Bedrock attempts to avoid telling how to write your code and instead allows you to just write it.

## Quick Start
4 options are available

* [download the latest](https://github.com/aebsr/bedrock/zipball/1.0.0-wip)
* Using [Bower](https://github.com/twitter/bower) you can run `bower install bedrock`
* Using [Volo](https://github.com/volojs/volo) you can run `volo install aebsr/bedrock`
* Using a git submodule you can run `git submodule add git://github.com/aebsr/bedrock.git bedrock`

### Usage
In your less files use `@import 'path/to/bedrock/bedrock'`


## Browser and Polyfill Support
Out of the box, Bedrock supports IE8 up. But it is [CSS3PIE](http://css3pie.com) and [BoxSizing](https://github.com/Schepp/box-sizing-polyfill) ready if you need to support IE7.

### Enable Support

```
@support-ie7: true;
@support-pie: true;
```

### Declaring Paths
Both these are false by default. If CSS3PIE support is enabled you should update your polyfill paths.

```
@pie_url: '/PIE.htc';
@boxsizing_url: '/boxsizing.htc';
```
**default paths above*

