# Steps up to now

## Step 0-3 (Seems like a lot but it's pretty simple)
- Remove the main.js and the line in index.html that included it
- Add @popper-js/core
- create a `src` directory with 3 subdirectories `mkdir -p src/{js,assets,css}` (why? it's a good idea to keep things contained and outside the main root directory)
- move the `index.html` to `src/index.html`
- move the `style.css` to `src/css/style.css` (why are we using css not scss/sass - simple, CSS has improved and now the current CSS3 is pretty powerful and allows all the mixins and variables that scss had)
- slightly change the `vite.config.js` so that it looks in the `src` directory for the index.html etc. Also made it so that it runs on localhost:3000 or 127.0.0.1:3000 (they are the same)

## STEP 0-2
- Added a vite.config.js - we really don't need to add this, but it gives us some flexibility on how we want to make the builds later
- Added bootstrap with `npm i bootstrap@5.3.0-alpha1` We use this version because bootstrap says to use it as the newest version (there must be a problem with 5.2)

## STEP 0-1
- Removed all the unnecessary files
- Cleaned out the index.html