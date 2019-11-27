import {
    commonApi
} from '../../constant';

export default class {
    constructor(initApi) {
        this.initApi = initApi;
    }
    getJson = () => {
        return this.initApi.get(commonApi.fetch);
    }
}