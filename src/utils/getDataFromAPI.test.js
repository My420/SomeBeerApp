import getDataFromAPI from './getDataFromAPI';

describe('testing api', () => {
  beforeEach(() => {
    window.fetch.resetMocks();
  });

  test('function should call fatch with transmitted adress', () => {
    window.fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getDataFromAPI('testApi');
    expect(window.fetch.mock.calls.length).toEqual(1);
    expect(window.fetch.mock.calls[0][0]).toBe('testApi');
  });

  test('function should return correct data', async () => {
    window.fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    const res = await getDataFromAPI('testApi');
    expect(res).toEqual({ data: '12345' });
  });

  test('function should throw error when fetch fail', async () => {
    window.fetch.mockRejectOnce(new Error('test fetch error'));

    await expect(getDataFromAPI('testApi')).rejects.toThrow('test fetch error');
  });

  test('function should throw error when response status not 2xx', async () => {
    window.fetch.mockResponses([
      JSON.stringify([{ data: '12345' }]),
      {
        status: 333,
        statusText: 'test error message'
      }
    ]);

    await expect(getDataFromAPI('testApi')).rejects.toThrow(
      'test error message'
    );
  });
});
