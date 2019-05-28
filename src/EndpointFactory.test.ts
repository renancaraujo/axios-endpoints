import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import EndpointFactory from './EndpointFactory';
import { EndpointClass } from './types';

let MockedService: typeof EndpointClass;

describe('mocking axios', function(): void {
  beforeAll((): void => {
    const axiosInstance = axios.create();
    const mock = new MockAdapter(axiosInstance);
    mock.onGet('/test').reply(200, 'was a get');
    mock.onPost('/test').reply(200, 'was a post');
    mock.onPut('/test').reply(200, 'was a put');
    mock.onPatch('/test').reply(200, 'was a patch');
    mock.onDelete('/test').reply(200, 'was a delete');
    mock.onAny('/error').reply(500);

    mock.onAny('/dynamic').reply(200, 'was a dynamic endpoint');
    mock.onAny('/dynamicPost').reply(200, 'was a dynamic endpoint post');
    mock.onAny('/dynamicPut').reply(200, 'was a dynamic endpoint put');
    mock.onAny('/dynamicPatch').reply(200, 'was a dynamic endpoint patch');
    mock.onAny('/dynamicDelete').reply(200, 'was a dynamic endpoint delete');

    MockedService = EndpointFactory(axiosInstance);
  });

  it('should the request be a get', async (): Promise<void> => {
    const testService = new MockedService('/test');
    const { data } = await testService.get();
    expect(data).toEqual('was a get');
  });

  it('should the request be a post', async (): Promise<void> => {
    const testService = new MockedService('/test');
    const { data } = await testService.post();
    expect(data).toEqual('was a post');
  });

  it('should the request be a put', async (): Promise<void> => {
    const testService = new MockedService('/test');
    const { data } = await testService.put();
    expect(data).toEqual('was a put');
  });

  it('should the request be a patch', async (): Promise<void> => {
    const testService = new MockedService('/test');
    const { data } = await testService.patch();
    expect(data).toEqual('was a patch');
  });

  it('should the request be a delete', async (): Promise<void> => {
    const testService = new MockedService('/test');
    const { data } = await testService.delete();
    expect(data).toEqual('was a delete');
  });

  it('should the request be a delete', async (): Promise<void> => {
    const testService = new MockedService('/error');
    try {
      await testService.get();
    } catch ({ message }) {
      expect(message).toEqual('Request failed with status code 500');
    }
  });

  it('should the request be a dynamic get', async (): Promise<void> => {
    const testService = new MockedService<{id: string}>(({ id }): string => `/${id}`);
    const { data } = await testService.get<string>({
      uriParams: {
        id: 'dynamic',
      },
    });
    expect(data).toEqual('was a dynamic endpoint');
  });

  it('should the request be a dynamic post', async (): Promise<void> => {
    const testService = new MockedService(({ id }): string => `/${id}`);
    const { data } = await testService.post(
      {},
      {
        uriParams: {
          id: 'dynamicPost',
        },
      }
    );
    expect(data).toEqual('was a dynamic endpoint post');
  });

  it('should the request be a dynamic put', async (): Promise<void> => {
    interface UriParamInterface { id: string };
    const testService = new MockedService<UriParamInterface>(({ id }): string => `/${id}`);
    const { data } = await testService.put(
      {},
      {
        uriParams: {
          id: 'dynamicPut',
        },
      }
    );
    expect(data).toEqual('was a dynamic endpoint put');
  });

  it('should the request be a dynamic patch', async (): Promise<void> => {
    const testService = new MockedService(({ id }): string => `/${id}`);
    const { data } = await testService.patch(
      {},
      {
        uriParams: {
          id: 'dynamicPatch',
        },
      }
    );
    expect(data).toEqual('was a dynamic endpoint patch');
  });

  it('should the request be a dynamic delete', async (): Promise<void> => {
    const testService = new MockedService(({ id }): string => `/${id}`);
    const { data } = await testService.delete({
      uriParams: {
        id: 'dynamicDelete',
      },
    });
    expect(data).toEqual('was a dynamic endpoint delete');
  });
});
