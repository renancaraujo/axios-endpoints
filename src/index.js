import axios from "axios";
import EndpointFactory from "./EndpointFactory"
export const Endpoint = EndpointFactory(axios);
export default EndpointFactory;