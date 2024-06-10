import Api from '../../api/Api'
const permission = {

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

        async getData({ commit }, payload) {
            commit('SET_LOADING', true);
            let page = payload ? payload.page : ''
            let perpage = payload ? payload.perPage : ''
            let pencarian = payload ? payload.search : ''
            const token = localStorage.getItem('token')
            Api.defaults.headers.common['Authorization'] = "Bearer " + token
            try {
                const response = await Api.get(`/admin/permissions?page=${page}&jumlahperpage=${perpage}&q=${pencarian}`)
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

export default permission