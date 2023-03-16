// Import Terser so we can use it
const {minify} = require('terser');

// Import fs so we can read/write files
const fs = require('fs');

// Define the config for how Terser should minify the code
const config = {
    compress: {
        dead_code: true,
        drop_console: true,
        drop_debugger: true,
        keep_classnames: false,
        keep_fargs: true,
        keep_fnames: false,
        keep_infinity: false
    },
    mangle: {
        eval: false,
        keep_classnames: false,
        keep_fnames: false,
        toplevel: false,
        safari10: false
    },
    module: false,
    sourceMap: false,
    output: {
        comments: 'some'
    }
};


(async () => {
    // Load in code to minify
    const js1 = fs.readFileSync('data/battleZones.js', 'utf8');
    const js2 = fs.readFileSync('data/collisions.js', 'utf8');
    const js3 = fs.readFileSync('data/characters.js', 'utf8');
    const js4 = fs.readFileSync('data/text.js', 'utf8');
    const js5 = fs.readFileSync('js/utils.js', 'utf8');
    const js6 = fs.readFileSync('classes.js', 'utf8');
    const js7 = fs.readFileSync('index.js', 'utf8');

    // Minify the code with Terser
    const minified = await minify([js1, js2, js3, js4, js5, js6, js7], config);

    // Save the code!
    fs.writeFileSync('cv.min.js', minified.code);
})();
