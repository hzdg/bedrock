# Bedrock

This minimal LESS baseline is used for personal and client projects. I took what I liked from [Twitter Bootstrap](http://twitter.github.com/bootstrap/) and nixed the rest.

Frameworks are too limiting. If your truly handwriting code only so much of it can be reused. Your classnames, IDs and markup structure should match what's best for the project. Bedrock attempts to avoid telling how to write your code and instead and instead allows you to just write it.

# Install
To install bedrock, simply download the zip into a folder of your choice or:

Using [Bower](https://github.com/twitter/bower) you can run `bower install bedrock`

Using a git submodule you can run `git submodule add git://github.com/aebsr/bedrock.git bedrock`

# Browser Support

Out of the box, Bedrock supports IE8 up. But it is [CSS3Pie](http://css3pie.com) and [BoxSizing](https://github.com/Schepp/box-sizing-polyfill) ready if you need to support IE7.

To enable support checkout the following steps. I chose to not use Modernizr classes as modernizr builds are all custom, and you may not even be using it.

## CSS3PIE

To enable CSS3PIE, add the `pie` class to the `html` tag.

```html
<!--[if IE 7]> <html class="no-js ie7 pie"> <![endif]-->
```

And then in your LESS file, define the url of your polyfill, otherwise the default path will be used.

`@pie_url: '/PIE.htc';`

## BoxSizing

To enable BoxSizing support in IE7, simply define your polyfill path. Otherwise the default path will be used.

`@boxsizing_url: '/boxsizing.htc';`

