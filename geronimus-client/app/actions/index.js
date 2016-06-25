import store from '../stores/index';

import DataService from '../utils/DataService';
const dataService = new DataService();

function move(path) {
    store.dispatch({
        type: 'SHOW_LOADER'
    });
    dataService.ls(path)
        .then((data) => {

            store.dispatch({
                type: 'SET_PATH',
                data: data,
                path: path
            });

        })
        .catch((e)=>{
            console.log(e)
            store.dispatch({
                type: 'SHOW_ERROR'
            });
        });
}


export default {
    move
};