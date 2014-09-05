# Bedrock

Bedrock is a highly un-opinionated and minimal front-end toolset built in LESS by [aebsr]. Bedrock attempts to avoid telling how to write your code by providing some handy shortcuts and gets out of the way.

[aebsr]: http://github.com/aebsr

## Quick Start

* Using [Bower](https://github.com/twitter/bower) run `bower install bedrock`

### Usage

In your less file(s) use `@import 'path/to/bedrock/bedrock';`

## v2.0 Breaking Changes Log

- Removed all mixins that provided solely browser prefixes. We recommend using a buildstep for that on your own.
- - Backface visibility
- - Background clip
- - Background size
- - Border radius
- - Box shadow
- - Box Sizing
- - Columns
- - Transitions
- - Transforms
- - Gradients
- - Hyphens
- - Rotate
- - Scale
- - Skew
- - Translate
- Removed mixins that duplicated existing less functionality
- - Transparency
- Rename Mixins to better state their purpose
- - .replace-text() has become .hide-text()
- - .unstyle-list() has become .reset-list()
- - .unstyle-form() has become .reset-form()
- Remove all support for IE8 and below

## For Discussion

### Do we want/need:

- the sticky footer mixin
- a horizontal version of .ir()
- resizable() *as it accounts solely for a lone Safari bug*

## Contribute

This should be a major release, not only through the removal code but by the addition of new shortcuts as well. Please submit ideas as issues, and code as pull requests.
