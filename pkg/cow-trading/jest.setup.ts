import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()

jest.setMock('cross-fetch', fetchMock)

// @ts-expect-error
global.window = global
