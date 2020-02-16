const app = require('../server.js')
const request = require('supertest')

describe('server routes', () => {
    describe('GET /user', () => {
        it('responds with json', (done) => {
            request(app)
            .get('/')
            .expect('Content-Type', "text/html; charset=utf-8")
            .expect(200, done)
        })
    })
})