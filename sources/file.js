import Axios from 'axios';

const file = () => Axios.get('/file', { responseType: 'arraybuffer' });

export { file };