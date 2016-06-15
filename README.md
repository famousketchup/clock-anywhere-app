# Clock anywhere

Simple backend-less AngularJS application that lets you find out current
time, date and timezone at your place of choice

## Installation

**TL;DR**:
- `npm i`
- `bower i`,
- `gulp serve` to test on `localhost:3000` and
- `gulp build` or simply `gulp` to build

[Read
more](https://github.com/Swiip/generator-gulp-angular/blob/master/docs/user-guide.md)

[And even
more](https://github.com/Swiip/generator-gulp-angular/blob/master/docs/how-it-works.md)

## Stuff used
- [generator-gulp-angular](https://github.com/swiip/generator-gulp-angular/) as the best Angular 1.x base
- [angular-clock](http://deepu.js.org/angular-clock/) used, surprisingly, as clock
- [ngAutocomplete](https://github.com/wpalahnuk/ngAutocomplete) for search box
- [GeoNames.org](http://www.geonames.org/) as the api for everything except search bar
- and many other nifty angular stuff

## Notes

1. Fetching country capital is almost done, controller part is commented
   out due to more time-requiring implementation
2. Enter is working properly after the second press, having a conflict
   between field validation and form submitting (via click or submit all
   the same)
3. No tests (too simple to require them)
4. Minimum amount of comments to make sure the code is DRY and readable

## License

Read, learn, perfect your skills
