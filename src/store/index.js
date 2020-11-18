import { init } from '@rematch/core';
// import { logger } from 'redux-logger';
import createLoadingPlugin from '@rematch/loading';
import models from '../models/index';

const loading = createLoadingPlugin({});

const store = init({
    models,
    redux: {
        // middlewares: [logger],
    },
    plugins: [loading],
});

export default store;
