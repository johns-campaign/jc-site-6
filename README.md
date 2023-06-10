# [John's Campaign](https://johnscampaign.org.uk)

_for the right to stay with people with dementia_

_for the right of people with dementia to be supported by their family carers_

## A note or two on deployment

Currently deploying with `firebase-tools@11.17.0` because of [`firebase-tools#5482`](https://github.com/firebase/firebase-tools/issues/5482).

Currently using Node.js v16, as Firebase Functions doesn't support v18 yet.
(Specifically, `@16.20.0`.)

## A few notes on the website's major iterations

### `jc-site-1`

- Didn't use a framework.
- Initially thrown together on a train in November 2014.
- Hosted using GitHub Pages.

### `jc-site-2`

- AngularJS (1.x).
- Material Design.
- Bower.
- Grunt.
- Added "the map", which at the time used Leaflet.

### `jc-site-3`

- Stopped using Material Design.

### `jc-site-4`

- Switched from AngularJS to Nuxt.
- Switched from Bower to NPM.
- Switched from Grunt to Webpack.
- Switched from Leaflet to Google Maps.
- Switched from GitHub Pages to Firebase.

### `jc-site-5`

- Switched from Nuxt to Elm.

### `jc-site-6`

- Switched from Elm to SvelteKit.
- Switched from Webpack to Vite.
