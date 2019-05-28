import { AxiosInstance } from 'axios';
import { EndpointClass } from './types';
declare const EndpointFactory: (axiosInstance: AxiosInstance) => typeof EndpointClass;
export default EndpointFactory;
