const request = require('supertest');
const server = require('../api/server');
describe('auth-router.js', () => {
    describe('GET /users', () => {
        it('returns a JSON', async () => {
            const res = await request(server)
                .get('/api/users')

            expect(res.type).toBe('application/json');
        });
        it('returns status 200', async () => {
            const res = await request(server)
                .get('/api/users')

            expect(res.status).toBe(400)
        });
    });

  });
