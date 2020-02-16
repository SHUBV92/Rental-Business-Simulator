const request = require('supertest')
const app = require('../app');

describe('Get/users', function () {
    it('respond with json containing a list of all users', function()
    {
        request(app)
            .get('/users')
            .set('/Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    }) 
});