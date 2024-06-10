import Api from '../../api/Api'
const dashboard = {

    //set namespace true
    namespaced: true,

    //state
    state: {
        datas: [],
        loading: false
    },

    //mutations
    mutations: {

        SET_DATA(state, datas) {
            state.datas = datas
        },
        SET_LOADING(state, loading) {
            state.loading = loading
        },
    },

    _actions: {

        async getData({ commit }) {
            commit('SET_LOADING', true);
            const token = localStorage.getItem('token')
            Api.defaults.headers.common['Authorization'] = "Bearer " + token
            try {
                const response = await Api.get(`/admin/dashboard`)
                commit('SET_DATA', response.data.data)
            } catch (error) {
                console.error(error);
            } finally {
                commit('SET_LOADING', false);
            }
        },


    },
    get actions() {
        return this._actions
    },
    set actions(value) {
        this._actions = value
    },

    //getters
    getters: {
        getData(state) {
            return state.datas
        },

        isLoading(state) {
            return state.loading
        }
    }

}

export default dashboard