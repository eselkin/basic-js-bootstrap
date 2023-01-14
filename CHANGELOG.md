# Steps up to now
## Step 2-0 (final)
- Now we're getting something interesting
- The select suddenly has some things to select in it! How? The HTML didn't change! Look at the main.js file
- The main.js file has more comments than code, but read it carefully. There's some things in there that are cool (like ternary/conditional operators and magic arrays)

## Step 1-1 (getting more interesting)
- Connected the button to a modal (just like we normally do - but in Bootstrap 5 the data names are a little different)
- But it still looks super simple and the select has nothing in it, and the Reserve button is disabled, why? See next step

## Step 1-0 (set up simple bootstrap page)
- Put back in a main.js in the js directory
- Made that js file include the bootstrap stuff
- Made vite.config.js pick up where the bootstrap files are (in node_modules)
- Added some HTML with some bootstrap stuff

## Step 0-3 (Seems like a lot but it's pretty simple)
- Remove the main.js and the line in index.html that included it
- Add @popper-js/core (for bootstrap popups)
- create a `src` directory with 3 subdirectories `mkdir -p src/{js,assets,css}` (why? it's a good idea to keep things contained and outside the main root directory)
- move the `index.html` to `src/index.html`
- move the `style.css` to `src/css/style.css` (why are we using css not scss/sass - simple, CSS has improved and now the current CSS3 is pretty powerful and allows all the mixins and variables that scss had)
- slightly change the `vite.config.js` so that it looks in the `src` directory for the index.html and that it outputs with build to `dist` instead of `src/dist`. Also made it so that it runs on localhost:3000 or 127.0.0.1:3000 (they are the same)

## STEP 0-2
- Added a vite.config.js - we really don't need to add this, but it gives us some flexibility on how we want to make the builds later
- Added bootstrap with `npm i bootstrap@5.3.0-alpha1` We use this version because bootstrap says to use it as the newest version (there must be a problem with 5.2)

## STEP 0-1
- Removed all the unnecessary files
- Cleaned out the index.html