// eslint-disable-next-line no-undef
const config = require('../config');

test('Code Should be 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		expect(response.status).toBe(200);
	} catch (error) {
		console.error(error);
	}
});

test('Response body should delete..', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBe(true);
});