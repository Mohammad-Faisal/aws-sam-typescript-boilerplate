import { handler } from '../app';

const event: any = {
    body: JSON.stringify({}),
    headers: {}
};
describe('log action', () => {
    test('Id is required', async () => {
        const res = await handler(event);
        expect(res.statusCode).toBe(200);
    });
});
