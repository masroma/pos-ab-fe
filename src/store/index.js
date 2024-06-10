//import vuex
import { createStore } from 'vuex'

//import module auth
import auth from './module/auth'
import permission from './module/permission'
import dashboard from './module/dashboard'
//create store vuex
export default createStore({

    modules: {
        auth,
        permission,
        dashboard      // <-- module auth
    }

})