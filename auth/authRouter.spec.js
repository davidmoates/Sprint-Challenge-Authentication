const request = require('supertest');
const server = require('../api/server');
describe('POST /register', () => {
    it('return a JSON', async () => {
        const res = await request(server).post('/api/auth/register')
        .send({
            "username": "fuq",
            "password": "password"
        });
        expect(res.type).toEqual('application/json');
    });
    it('return status 500', async () => {
        const res = await request(server).post('/api/auth/register')
        .send({
            "username": "fuq",
            "password": "password"
        })
        expect(res.status).toEqual(500);
    })
});
describe('POST /login', () => {
    it('return a JSON', async () => {
        const res = await request(server).post('/api/auth/login')
        .send({
            "username": "fuq",
            "password": "password"
        });
        expect(res.type).toEqual('application/json');
    });
    it('return status 500', async () => {
        const res = await request(server).post('/api/auth/login')
        .send({
            "username": "fuq",
            "password": "password"
        })
        expect(res.status).toEqual(500);
    })
});
