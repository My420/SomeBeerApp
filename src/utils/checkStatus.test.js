import checkStatus from './checkStatus';

/* eslint func-names: ["error", "never"] */

describe('testing checkStatus function', () => {
  test('function should return response with status 2xx', () => {
    const response1 = {
      status: 200,
      statusText: 'ok'
    };

    const response2 = {
      status: 250,
      statusText: 'test'
    };

    expect(checkStatus(response1)).toEqual(response1);
    expect(checkStatus(response2)).toEqual(response2);
  });

  test('function should throw Error when response status not 2xx ', () => {
    const response1 = {
      status: 100,
      statusText: 'Error 100'
    };

    const response2 = {
      status: 404,
      statusText: 'Not Found'
    };

    expect(function() {
      checkStatus(response1);
    }).toThrow('Error 100');
    expect(function() {
      checkStatus(response2);
    }).toThrow('Not Found');
  });
});
