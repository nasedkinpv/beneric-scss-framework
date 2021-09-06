# Beneric SCSS development framework

## Content

- [@drewbot/sass-flexbox-grid](http://sassflexboxgrid.com/views/documentation.html)
- [modularscale-sass](https://github.com/modularscale/modularscale-sass)
- [sass-mq](https://github.com/sass-mq/sass-mq)

## Mixins

apply no-selection rule to current container

    @include no-select();

### Aspect ratio mixin

    @include fluid-aspect($ratio: 1 1, $selector: "> :first-child")

font face import

    @include font-face(
      $name,
      $path,
      $weight: null,
      $style: null,
      $exts: eot woff2 woff ttf svg
    )
