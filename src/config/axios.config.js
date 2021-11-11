import axios from 'axios';

axios.defaults.baseURL = 'https://dev.to/api';
axios.defaults.headers.common['api-key'] = 'DVqQ7YcKdeiBSgXcBeW8owB5';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

export default axios;
