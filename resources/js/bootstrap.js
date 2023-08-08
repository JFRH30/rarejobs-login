import loadash from 'lodash'
window._ = loadash

import * as Popper from '@popperjs/core'
window.Popper = Popper

import 'bootstrap';
import '../sass/app.scss';

import axios from 'axios';

window.axios = axios;
window.axios.defaults.withCredentials = true;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

