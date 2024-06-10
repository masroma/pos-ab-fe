<template>
    <div class="flex items-center justify-center  min-h-screen m-0">
        <div class="max-w-xl mx-auto bg-white p-8 rounded shadow">
            <div class="flex flex-col justify-center items-center">
                <img src="/cashier.png" class="w-1/4 text-center py-2" alt="logo pos cod">
                <p class="text-cyan-600 text-center font-semibold">
                    Silahkan login untuk masuk
                </p>
                <div v-if="validation.message" class="bg-red-100 w-full py-2 text-center my-3 text-red-700">{{
                    validation.message
                }}
                </div>

            </div>



            <form @submit.prevent="login" class="my-5 flex flex-col gap-y-5">
                <div class="flex flex-col gap-y-2">
                    <p :class="validation.email ? 'text-red-500' : ''">
                        Email
                    </p>

                    <div
                        :class="['flex', 'border-2', { 'border-red-500': validation.email }, 'border-gray-300', 'rounded-lg']">
                        <input v-model="user.email" type="text"
                            class="flex-1 py-3 px-3 border-none rounded-lg focus:border-transparent focus:ring-0"
                            placeholder="email">
                        <div class="p-3 flex-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path :fill="validation.email ? '#FF3131' : '#00a3af'"
                                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z" />
                            </svg>
                        </div>
                    </div>
                    <p v-if="validation.email" class="text-[11px] text-red-500 text-sm">
                        {{ validation.email[0] }}</p>
                </div>
                <div class="flex flex-col gap-y-2">
                    <p :class="validation.password ? 'text-red-500' : ''">
                        Password
                    </p>
                    <div
                        :class="['flex', 'border-2', { 'border-red-500': validation.password }, 'border-gray-300', 'rounded-lg']">
                        <input v-model="user.password" :type="showPassword ? 'text' : 'password'"
                            class="flex-1 border-transparent ring-0  py-3 px-3 rounded-lg focus:border-transparent focus:ring-0"
                            placeholder="password">
                        <span class="p-3 flex-items-center" @click="togglePasswordVisibility" v-if="!showPassword">

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path :fill="validation.password ? '#FF3131' : '#00a3af'"
                                    d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                            </svg>

                        </span>
                        <span class="p-3 flex-items-center " @click="togglePasswordVisibility" v-else>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path :fill="validation.password ? '#FF3131' : '#00a3af'"
                                    d="M14.33 7.17A15.642 15.642 0 0 0 12 7c-4.97 0-9 2.239-9 5c0 1.44 1.096 2.738 2.85 3.65l2.362-2.362a4 4 0 0 1 5.076-5.076zm-3.1 8.756a4 4 0 0 0 4.695-4.695l2.648-2.647C20.078 9.478 21 10.68 21 12c0 2.761-4.03 5-9 5c-.598 0-1.183-.032-1.749-.094zm6.563-10.719a1 1 0 1 1 1.414 1.414L6.48 19.35a1 1 0 1 1-1.414-1.414z" />
                            </svg>
                        </span>

                    </div>
                    <p v-if="validation.password" class="text-[11px] text-red-500 text-sm">
                        {{ validation.password[0] }}</p>
                </div>

                <button class="bg-cyan-600 p-3 text-white font-semibold rounded-lg">
                    <p v-if="!loading" class="font-semibold text-white ">Masuk</p>
                    <p v-else class="font-semibold text-white ">Loading ...</p>
                </button>




            </form>
        </div>


    </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { useToast } from "vue-toastification"

export default {

    name: 'LoginComponent',

    setup() {

        const password = ref('');
        const showPassword = ref(false);
        const loading = ref(false);
        const message = ref('');
        const route = useRoute();

        const store = useStore()

        //route
        const router = useRouter()


        // Methods
        const togglePasswordVisibility = () => {

            showPassword.value = !showPassword.value;
        };

        //user state
        const user = reactive({
            email: '',
            password: ''
        })

        //validation state
        const validation = ref([])
        const toast = useToast()
        //method login
        function login() {

            loading.value = true;
            //define variable 
            let email = user.email
            let password = user.password



            //panggil action "login" dari module "auth" di vuex
            store.dispatch('auth/login', {
                email,
                password
            })
                .then(() => {
                    //redirect ke dashboard
                    router.push({ name: 'dashboard' })
                    toast.success("Login Berhasil!")
                }).catch(error => {

                    //assign validaation message
                    loading.value = false;
                    validation.value = error
                    // console.log("ero", validation.value.error)

                    // if (validation.value.error) {
                    //     toast.error(`${validation.value.error}`)
                    // }
                    // if (validation.value.message) {
                    //     toast.error(`${validation.value.message}`)
                    // }

                }).finally(() => {
                    // Set loading to false setelah proses login selesai
                    loading.value = false;
                });
        }

        onMounted(() => {
            if (store.getters['auth/isLoggedIn']) {
                router.push({ name: 'dashboard' })
            }

            const params = new URLSearchParams(route.fullPath);
            console.log('params', params.get('/login?message'))
            if (params.get('/login?message')) {
                message.value = params.get('/login?message');
            }

        })






        //return object
        return {
            message,
            password,
            showPassword,
            togglePasswordVisibility,
            toast,
            user,
            validation,
            login,
            loading
        }

    }

}
</script>