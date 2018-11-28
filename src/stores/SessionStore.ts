import { observable, action } from 'mobx';

export default class SearchStore {
    @observable public queryString:string='gggg';
}
export const instance = new SearchStore();