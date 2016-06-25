export default
function Reducer(state = {path:'/', tree:[], list: []}, action){

    function setTree (state, action) {
        if(state.tree.length === 0){
            return action.data;
        }
        // set the content of the path
        var pathArray = action.path.split('/');

        var tree = state.tree;
        var pathToUpdate = state.tree;
        console.log(pathToUpdate);
        pathArray.forEach((currentPath)=>{

            if(currentPath === '') return;
            var find;
            pathToUpdate.forEach((item)=>{
                if(item.name === currentPath){
                    find = item;
                } else {
                    delete item.content;
                }
            });

            if(find){
                pathToUpdate = find.content || find;
            }
        });

        pathToUpdate.content = action.data;

        return tree;
    }

    console.log(action.type, action);
    switch (action.type) {
        case 'SHOW_LOADER':
            return {
                path: state.path,
                loading: true,
                error: false,
                tree: state.tree,
                list: state.list
            };
        case 'SET_PATH':
            return {
                path: action.path,
                tree: setTree(state, action),
                list: action.data,
                loading: false,
                error: false
            };
        case 'SHOW_ERROR':
            return {
                path: '/',
                loading: false,
                error: true,
                tree: state.tree,
                list: []
            };
        default:
            return state
    }
}


