<template>
    <div>
        <div class="p-4 rounded shadow">
            <h1 class="text-xl font-semibold">
                Update Profile
            </h1>
            <form @submit.prevent="updateprofile" class="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">

                <div class="flex flex-col gap-y-2  w-full">
                    <p :class="validation.name && validation.name[0] ? 'text-red-500' : ''">
                        Nama Lengkap <span class="text-red-500">*</span>
                    </p>
                    <div
                        :class="['flex', 'border-[1px]', { 'border-red-500': validation.name && validation.name[0] }, 'border-gray-100', 'rounded-lg']">
                        <input type="text" v-model="user.name"
                            class="w-full py-3 px-3 rounded-lg text-sm text-gray-500 focus:outline-none focus:border-[1px] focus:border-gray-100 bg-white"
                            placeholder="Nama Lengkap ">

                    </div>
                    <p v-if="validation.name && validation.name[0]" class="text-[11px] text-red-500 text-sm">
                        {{ validation.name[0] }}</p>
                </div>
                <div class="flex flex-col gap-y-2 w-full">
                    <p>
                        Email
                    </p>
                    <div class="border-[1px] border-gray-100 rounded-lg">
                        <input type="text" v-model="user.email"
                            class="w-full py-3 px-3 rounded-lg text-sm text-gray-500 focus:outline-none bg-gray-200"
                            placeholder="Email" readonly>

                    </div>
                </div>

                <div class="flex flex-col gap-y-2  w-full">
                    <p>Nama Company</p>
                    <div class="border-[1px] border-gray-100 rounded-lg">
                        <input type="text" v-model="user.nama_company"
                            class="w-full py-3 px-3 rounded-lg text-sm text-gray-500 focus:outline-none"
                            placeholder="Nama Company">
                    </div>
                </div>

                <!-- Logo -->
                <div class="flex flex-col gap-y-2 w-full">
                    <img :src="user.logo" alt="logo" class="w-1/2">
                    <br />
                    <p>Logo</p>
                    <div class="border-2 border-gray-300 rounded-lg px-2">
                        <input type="file" @change="handleFileChange"
                            class="w-full py-3 px-3 rounded-lg text-sm text-gray-500 focus:outline-none ">
                    </div>
                </div>



                <div class="flex flex-col gap-y-2  w-full">
                    <p>Alamat</p>
                    <div class="border-[1px] border-gray-100 rounded-lg">
                        <input type="text" v-model="user.alamat"
                            class="w-full py-3 px-3 rounded-lg text-sm text-gray-500 focus:outline-none "
                            placeholder="Alamat">
                    </div>
                </div>

                <!-- WhatsApp -->
                <div class="flex flex-col gap-y-2 w-full">
                    <p>WhatsApp</p>
                    <div class="border-[1px] border-gray-100 rounded-lg">
                        <input type="text" v-model="user.whatsapp"
                            class="w-full py-3 px-3 rounded-lg text-sm text-gray-500 focus:outline-none "
                            placeholder="WhatsApp">
                    </div>
                </div>

                <div class="flex flex-col gap-y-2  w-full">
                    <p>Instagram</p>
                    <div class="border-[1px] border-gray-100 rounded-lg">
                        <input type="text" v-model="user.instagram"
                            class="w-full py-3 px-3 rounded-lg text-sm text-gray-500 focus:outline-none "
                            placeholder="Instagram">
                    </div>
                </div>

                <!-- WhatsApp -->
                <div class="flex flex-col gap-y-2 w-full">
                    <p>Facebook</p>
                    <div class="border-[1px] border-gray-100 rounded-lg">
                        <input type="text" v-model="user.facebook"
                            class="w-full py-3 px-3 rounded-lg text-sm text-gray-500 focus:outline-none "
                            placeholder="Facebook">
                    </div>
                </div>

                <div class="flex flex-col gap-y-2  w-full">
                    <p>Tiktok</p>
                    <div class="border-[1px] border-gray-100 rounded-lg">
                        <input type="text" v-model="user.tiktok"
                            class="w-full py-3 px-3 rounded-lg text-sm text-gray-500 focus:outline-none"
                            placeholder="Tiktok">
                    </div>
                </div>

                <!-- WhatsApp -->
                <div class="flex flex-col gap-y-2 w-full">
                    <p>Youtube</p>
                    <div class="border-[1px] border-gray-100 rounded-lg">
                        <input type="text" v-model="user.youtube"
                            class="w-full py-3 px-3 rounded-lg text-sm text-gray-500 focus:outline-none "
                            placeholder="Youtube">
                    </div>
                </div>

                <div class="flex gap-3">
                    <button
                        class="bg-cyan-600 text-white font-semibold px-5 py-2 rounded-lg shadow-lg hover:bg-cyan-700">Update
                        profile</button>

                </div>

            </form>
        </div>
    </div>
</template>


<script>

import { ref, reactive, watch, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useToast } from "vue-toastification"
export default {
    name: 'DashboardComponent',
    setup() {

        //user state
        const user = reactive({
            id: '',
            email: '',
            name: '',

            nama_company: '',
            logo: null,
            alamat: '',
            whatsapp: '',
            instagram: '',
            facebook: '',
            tiktok: '',
            youtube: '',
        })

        //validation state
        const validation = ref([])

        //store vuex
        const store = useStore()

        //route
        const router = useRouter()
        const toast = useToast()
        //method login
        onMounted(() => {

            //panggil action "getUser" dari module "auth" vuex
            store.dispatch('auth/getUser')

        })

        const users = computed(() => {
            //panggil getters dengan nama "currentUser" dari module "auth"
            return store.getters['auth/currentUser']
        })


        function updateprofile() {

            let formData = new FormData();
            formData.append('email', user.email)
            formData.append('name', user.name)
            formData.append('nama_company', user.nama_company)
            formData.append('alamat', user.alamat)
            formData.append('whatsapp', user.whatsapp)
            formData.append('instagram', user.instagram)
            formData.append('facebook', user.facebook)
            formData.append('tiktok', user.tiktok)
            formData.append('youtube', user.youtube)
            console.log("adsjds", formData);
            formData.append("_method", "POST");

            //panggil actions "register" dari module "auth"
            store
                .dispatch("auth/updateProfile", formData)
                .then(() => {
                    //redirect ke dashboard
                    store.dispatch('auth/getUser')
                    validation.value = {};
                    // router.push({ name: 'profile' })
                    toast.success("Update data Profile berhasil")
                })
                .catch((error) => {
                    //show validaation message

                    validation.value = error;
                    // console.log(validation.value);
                    // toast.error(validation.value.error[0])


                    // console.error("An error occurred:", error);
                });
        }

        watch(
            () => store.state.auth.user,
            (newuser) => {
                if (newuser) {
                    const {
                        id,
                        name,
                        email,
                        general

                    } = newuser;
                    user.id = id;
                    user.email = email;
                    user.name = name;
                    user.logo = general.logo;
                    user.nama_company = general.nama_company;


                }
            }
        );

        async function handleFileChange(e) {

            // //console.log('ini adalah', e.target.attributes[1].nodeValue);
            let file = user.logo = e.target.files[0];

            if (!file.type.match('image.*')) {

                //if fileType not allowed, then clear value and set null


                //set state "category.image" to null
                user.logo = user.logo
                toast.error("Format File Tidak Didukung!, gunakan format jpg, png")
                //show sweet alert

            }

            let formData = new FormData();
            // formData.append('kelasId', this.$route.params.id)
            formData.append('logo', user.logo)
            // formData.append('id', user.id)
            formData.append('email', user.email)
            formData.append('name', user.name)
            formData.append('nama_company', user.nama_company)
            formData.append('alamat', user.alamat)
            formData.append('whatsapp', user.whatsapp)
            formData.append('instagram', user.instagram)
            formData.append('facebook', user.facebook)
            formData.append('tiktok', user.tiktok)
            formData.append('youtube', user.youtube)

            // console.log('form', formData)

            await store.dispatch('auth/updateProfile', formData)
                //success
                .then(() => {


                    // this.$router.push({
                    //     // path:'/admin'
                    //     name: 'profile',
                    // })

                    // toast.success("photo berhasil diupdate!")

                    store.dispatch('auth/getUser');
                    // refs.fileupload = null;


                }).catch((error) => {
                    //show validaation message
                    //console.log(error);

                    validation.value = error;
                });


        }

        //return object
        return {
            users,
            user,
            validation,
            updateprofile,
            handleFileChange,
            toast
        }

    }

}
</script>
