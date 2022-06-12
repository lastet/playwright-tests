import { test, expect } from '@playwright/test'


test.describe('API testing', () => {
const baseUrl = 'https://reqres.in/api'

    test('Simple Api test with Assert Response', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/8`)
    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    console.log(responseBody)
    })

    test('Simple negative Api test with Assert Response', async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/2luv`)
        expect(response.status()).toBe(404)
    })

    test('GET request - Get User Detail', async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/1`)
        const responseBody = JSON.parse(await response.text())

        expect(response.status()).toBe(200)
        expect(responseBody.data.id).toBe(1)
        expect(responseBody.data.first_name).toBeTruthy()
        expect(responseBody.data.last_name).toBeTruthy()
        expect(responseBody.data.email).toBeTruthy()
        console.log(responseBody)

    })

    test('POST request - Create new User', async ({ request }) => {
        const response = await request.post(`${baseUrl}/user`, {
            data: {
              id: 555
            },
        })

        const responseBody = JSON.parse( await response.text ())
        expect(response.status()).toBe(201)
        expect(responseBody.id).toBe(555)
        expect(responseBody.createdAt).toBeTruthy()

    })
    test('POST request - Login', async ({ request }) => {
        const response = await request.post(`${baseUrl}/login`, {
            data: {
              email:'eve.holt@reqres.in',
              password:'cityslicka',
            },
        })

        const responseBody = JSON.parse( await response.text ())
        expect(response.status()).toBe(200)
        expect(responseBody.token).toBeTruthy()

    })
    test('POST request - Login Failure', async ({ request }) => {
        const response = await request.post(`${baseUrl}/login`, {
            data: {
              email:'peter@klaven',
            },
        })

        const responseBody = JSON.parse( await response.text ())
        expect(response.status()).toBe(400)
        expect(responseBody.error).toBe("Missing password")

    })

    test('PUT request - User Update', async ({ request }) => {
        const response = await request.put(`${baseUrl}/api/users/2`, {
            data: {
              name:"morpheus",
              job:"zion resident",
            },
        })

        const responseBody = JSON.parse( await response.text ())
        expect(response.status()).toBe(200)
        expect(responseBody.name).toBe("morpheus")
        expect(responseBody.job).toBe("zion resident")
        expect(responseBody.updatedAt).toBeTruthy()

    })

    test('PUT request 2 - User Update', async ({ request }) => {
        const response = await request.put(`${baseUrl}/api/users/2`, {
            data: {
              name:"lastet",
              job:"luv",
            },
        })

        const responseBody = JSON.parse( await response.text ())
        expect(response.status()).toBe(200)
        expect(responseBody.name).toBe("lastet")
        expect(responseBody.job).toBe("luv")
        expect(responseBody.updatedAt).toBeTruthy()

    })

    test('DELETE request', async ({ request }) => {
        const response = await request.delete(`${baseUrl}/api/users/2`)

        expect(response.status()).toBe(204)

    })
    


})