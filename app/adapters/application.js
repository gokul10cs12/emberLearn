import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = 'http://localhost:5000';
  namespace = 'api';
  // buildURL(...args){
  //   return `${super.buildURL(...args)}`;
  // }
}
