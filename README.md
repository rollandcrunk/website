# [RollandCrunk.com](http://www.rollandcrunk.com)
My personal website redo. The original was put together using 
[Plone](https://plone.org/), an open source content management
system (CMS) written in Python. Simple and capable, yet had a 
lot of features that were way overkill for a personal website (who 
visits these anyhow?).
 
The plone version (3.0.3) was getting long in the tooth and
had (barely) survived one OS upgrade, but when it came time to
upgrade again and a trial was run on a virtual machine having
the desired OS and opened a #10 can of worms, it was time 
to retire the site and start over.

That takes us to here. The website re-written using [Angular 2](https://angular.io/) 
[typescript](https://www.typescriptlang.org/) as a web framework,
and styled with [bootstrap 4](https://v4-alpha.getbootstrap.com/) 
and [SCSS](http://sass-lang.com/). Since all of the processing is now done
in the browser, it can be served with a commodity web server and I should
have the server OS upgrade issue solved.

This project was initially put together manually utilizing the Angular 2
[Style Guide](https://angular.io/styleguide) as a blueprint, 
with Angular 2 release candidate 4 (RC4). 
When the release version became available (2.0.1), the site was hand updated, 
and then closely followed by a migration to
[angular-cli](https://github.com/angular/angular-cli) (1.0.0-beta.17).

## Third party styles and fonts
Bootstrap 4 (alpha-3) and Font Awesome (4.6.3) are built with gulp. This is not yet
integrated with the angular-cli (or npm) builds, so gulp will need to be run initially
or whenever there is a style change or modification to one of their supporting scripts.

The default invocation of `gulp` will compile both the `scss` files to `css`
and the bootstrap typescript files to javascript, and place their output in their
corresponding directory under assets. Gulp can be given the `style` and
or `script` arguments for more granularity.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.
Alternatively, run `npm start` to do the same thing, but come up on port 3000.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. 
You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 
Use the `-prod` flag for a production build.

## Running unit tests

There are none (currently). But if there were, you could 
run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.
