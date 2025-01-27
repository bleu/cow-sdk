const mockGetOrder = jest.fn()

jest.mock('../api', () => ({
  OrderBookApi: class MockedOrderBookApi {
    getOrder = mockGetOrder
  },
}))

export { mockGetOrder }
