function md5HashForFile(filename, callback) {
    if (typeof callback !== 'function') throw new TypeError('Argument callback must be a function');

    //Using  createHash function of crypto
    const output = crypto.createHash('md5');
    const input = fs.createReadStream(filename);

    input.on('error', function (error) {
        callback(error);
    })

    output.once('readable', function () {
        callback(null, output.read().toString('hex'));
    })

    input.pipe(output);
}

module.exports = md5HashForFile;