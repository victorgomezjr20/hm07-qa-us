// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = 
{
    "products": [
        {
            "id": 1,
            "quantity": 2
        }
    ]
}

test('Status code should be 200...', async () => {
	let actualStatusCode; 
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

test('Response body should contain expected date...', async () => {
	let actualResponseBody; 
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["Everything You Need"]["Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free"]).toBe(false);
	expect(actualResponseBody["Food City"]["Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free"]).toBe(true);
	expect(actualResponseBody["Big World"]["Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free"]).toBe(false);
	expect(actualResponseBody["Fresh Food"]["Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free"]).toBe(true);
});
