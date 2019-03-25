// Callbacks ///////////////////////////////////////////////////////////////

function fetchData(callback) {
    callback('peanut butter')
}

test('the data is peanut butter', done => {
    function callback(data) {
        expect(data).toBe('peanut butter');
        done();
    }

    fetchData(callback);
});