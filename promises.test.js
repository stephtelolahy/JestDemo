// Promises ///////////////////////////////////////////////////////////////

const fetchData = new Promise((resolve, reject) => {
    resolve('peanut butter');
});

test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});