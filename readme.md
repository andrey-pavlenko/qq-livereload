# Live-reload for Qui-Quo

## How it works

1. Starts HTTP server (params hardcoded)
2. Starts FS watcher (params hardcoded)
3. `livereload.js` connects to server via WebSocket
4. When FS changed server sends message `reload`

## How to use

1. Install dependencies `npm i`
2. Build `npm run build`
3. Start server `npm run start`
4. Add `livereload.js` to code.

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
