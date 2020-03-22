const request = require('supertest');
const app = require('../lib/app');

describe('routes', () => {
    it('should get response \'hi\' from "/"', () => {
        return request(app)
            .get('/')
            .then(res => {
                expect(res.text).toEqual('hi');
            });
    });

    it('should POST body', () => {
        return request(app)
            .post('/echo')
            .send('soup')
            .then(res => {
                expect(res.text).toEqual('soup');
            });
    });

    it('should get response \'<h1>red</h1>\' from "/red"', () => {
        return request(app)
            .get('/red')
            .then(res => {
                expect(res.text).toEqual('<h1>red</h1>');
            });
    });

    it('should get response \'<h1>green</h1>\' from "/green"', () => {
        return request(app)
            .get('/green')
            .then(res => {
                expect(res.text).toEqual('<h1>green</h1>');
            });
    });

    it('should get response \'<h1>blue</h1>\' from "/blue"', () => {
        return request(app)
            .get('/blue')
            .then(res => {
                expect(res.text).toEqual('<h1>blue</h1>');
            });
    });

    it('should return a 404 if path not found', () => {
        return request(app)
            .get('/sammyjackson')
            .then(res => {
                expect(res.text).toEqual('Not Found');
            });
    });
});
