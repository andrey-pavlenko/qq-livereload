# Live-reload for Qui-Quo

## How it works

1. Starts HTTP server (params hardcoded)
2. Start FS watcher (parsms hardcoded)
3. `livereload.js` connect to server via WedSocket
4. When FS changed server send message `reload`

## How to use

1. Start server `npm run start`
2. Add `livereload.js` to code.

Examples:

```html
<script
  type="text/javascript"
  src="http://localhost:9090/livereload.js"
></script>
```

```clojure
[:script {:src "http://localhost:9090/livereload.js"}]
```

## TODO

- un-hadrcode params
- pass params via js-script
- every socket watch individual folders/files
