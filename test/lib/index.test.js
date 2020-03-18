const process = require('process');
const child = require('child_process');
const path = require('path');

// shows how the runner will run a javascript action with env / stdout protocol
test.skip('test runs', () => {
    process.env['INPUT_MILLISECONDS'] = 500;
    const main = path.join(__dirname, '../../index.js');
    console.log(child.execSync(`node ${main}`).toString());
})
