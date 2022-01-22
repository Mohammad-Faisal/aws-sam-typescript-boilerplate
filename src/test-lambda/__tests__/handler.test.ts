import { handler } from '../app';
const event: any = {
    body: JSON.stringify({}),
    headers: {}
};
describe('Demo test', () => {
    test('This is the proof of concept that the test works.', async () => {
        const res = await handler(event);
        expect(res.statusCode).toBe(200);
    });
});
