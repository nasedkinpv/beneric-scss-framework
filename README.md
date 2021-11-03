# Beneric agency

# SCSS starter pack

## Content

- [@drewbot/sass-flexbox-grid](http://sassflexboxgrid.com/views/documentation.html)
- [modularscale-sass](https://github.com/modularscale/modularscale-sass)
- [sass-mq](https://github.com/sass-mq/sass-mq)

## Testing
Packages can be added to this framework, and tested with dart2js:

    npm run test

## Information

Packages updated to new dart guidelines
Useful on rapid front-end development.
Dont forget to postCSS, and vendor-plugin

## Initialization

Prepare variables:

    $grid-columns: 12; // Set number of columns in the grid
    $xs-max: 40rem; // Set xs breakpoint's max width
    $sm-max: 64rem; // Set sm breakpoint's max width
    $md-max: 90rem; // Set md breakpoint's max width
    $lg-max: 120rem; // Set lg breakpoint's max width

    $gutter: 1rem; // Set gutter size

    $content-well-max-width: 1920px; // Set the max-width of the content well
    $mq-breakpoints: (
        mobile: 320px,
        tablet: 740px,
        desktop: 980px,
        wide: 1650px,
        xwide: 1920px,
    );
    // colors
    $brand-color: rgba(52, 141, 128, 1);
    $background-color: rgba(0, 0, 0, 1);
    $gray-color: rgba(171, 171, 171, 1);
    $black-color: rgba(1, 1, 1, 1);
    $white-color: rgba(255, 255, 255, 1);
    $header-height: 4.75rem;
    :root {
        --brand-color: #{$brand-color};
        --background-color: #{$background-color};
        --text-color: #{$gray-color};
        --gray-color: #{$gray-color};
        --white-color: #{$white-color};
        --white-background-color: #{$white-color};
        --black-color: #{$black-color};
    }
    $modularscale: (
        base: 13px,
        ratio: 1.1,
        400px: (
            base: 13px,
            ratio: 1.1,
        ),
        900px: (
            base: 15px,
            ratio: 1.15,
        ),
        1650px: (
            base: 15px,
            ratio: 1.15,
        ),
        1920px: (
            base: 16px,
            ratio: 1.15,
        ),
    );

## Mixins

### Aspect ratio mixin

    @include fluid-aspect($ratio: 1 1, $selector: "> :first-child")

### Font face import

    @include font-face(
      $name,
      $path,
      $weight: null,
      $style: null,
      $exts: eot woff2 woff ttf svg
    )

### Apply no-selection rule to current container

    @include no-select();
