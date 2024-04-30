// eslint-disable-next-line no-undef
const config = require('../config');

test('should return 200 status code....', async () => {
	let actualStatusCode; 
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});


test('Body should Recieve the following kit ', async () => {
	let actualResponseBody; 
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}


	expect(actualResponseBody.name).toBe("For movies and series");
});
