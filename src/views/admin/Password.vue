<template>
    <div>
        <div class="p-4 rounded shadow">
            <h1 class="text-xl font-semibold">
                Update Profile
            </h1>
            <form @submit.prevent="updatepassword" class="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">

                <div class="flex flex-col gap-y-2 mb-5 w-full">
                    <p :class="validation.oldpassword && validation.password[0] ? 'text-red-500' : ''">
                        Password Lama
                    </p>
                    <div
                        :class="['flex', 'border-2', { 'border-red-500': validation.oldpassword && validation.oldpassword[0] }, 'border-gray-300', 'rounded-lg']">
                        <input v-model="user.password" :type="showPassword ? 'text' : 'password'"
                            class="w-full py-3 px-3 rounded-lg text-sm flex-1 text-gray-500 border-transparent ring-0 focus:border-transparent focus:ring-0 bg-white"
                            placeholder="Password">

                        <span class="p-3 flex-items-center" @click="togglePasswordVisibility" v-if="!showPassword">

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    :fill="validation.oldpassword && validation.oldpassword[0] ? '#FF3131' : '#00a3af'"
                                    d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                            </svg>

                        </span>
                        <span class="p-3 flex-items-center" @click="togglePasswordVisibility" v-else>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    :fill="validation.oldpassword && validation.oldpassword[0] ? '#FF3131' : '#00a3af'"
                                    d="M14.33 7.17A15.642 15.642 0 0 0 12 7c-4.97 0-9 2.239-9 5c0 1.44 1.096 2.738 2.85 3.65l2.362-2.362a4 4 0 0 1 5.076-5.076zm-3.1 8.756a4 4 0 0 0 4.695-4.695l2.648-2.647C20.078 9.478 21 10.68 21 12c0 2.761-4.03 5-9 5c-.598 0-1.183-.032-1.749-.094zm6.563-10.719a1 1 0 1 1 1.414 1.414L6.48 19.35a1 1 0 1 1-1.414-1.414z" />
                            </svg>
                        </span>

                    </div>
                    <p v-if="validation.oldpassword && validation.oldpassword[0]"
                        class="text-[11px] text-red-500 text-sm">
                        {{ validation.oldpassword[0] }}</p>
                </div>
                <div class="flex flex-col gap-y-2 mb-5 w-full">
                    <p :class="validation.password && validation.password[0] ? 'text-red-500' : ''">
                        Konfirmasi Password Lama
                    </p>
                    <div
                        :class="['flex', 'border-2', { 'border-red-500': validation.oldpassword && validation.oldpassword[0] }, 'border-gray-300', 'rounded-lg']">
                        <input v-model="user.password_confirmation"
                            :type="showPasswordConfirmation ? 'text' : 'password'"
                            class="w-full py-3 px-3 rounded-lg text-sm flex-1 text-gray-500 border-transparent ring-0 focus:border-transparent focus:ring-0 bg-white"
                            placeholder="Konfirmasi Password Lama">

                        <span class="p-3 flex-items-center" @click="togglePasswordConfirmationVisibility"
                            v-if="!showPasswordConfirmation">

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    :fill="validation.oldpassword && validation.oldpassword[0] ? '#FF3131' : '#00a3af'"
                                    d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                            </svg>

                        </span>
                        <span class="p-3 flex-items-center" @click="togglePasswordConfirmationVisibility" v-else>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    :fill="validation.oldpassword && validation.oldpassword[0] ? '#FF3131' : '#00a3af'"
                                    d="M14.33 7.17A15.642 15.642 0 0 0 12 7c-4.97 0-9 2.239-9 5c0 1.44 1.096 2.738 2.85 3.65l2.362-2.362a4 4 0 0 1 5.076-5.076zm-3.1 8.756a4 4 0 0 0 4.695-4.695l2.648-2.647C20.078 9.478 21 10.68 21 12c0 2.761-4.03 5-9 5c-.598 0-1.183-.032-1.749-.094zm6.563-10.719a1 1 0 1 1 1.414 1.414L6.48 19.35a1 1 0 1 1-1.414-1.414z" />
                            </svg>
                        </span>

                    </div>
                    <p v-if="validation.password && validation.oldpassword[0]" class="text-[11px] text-red-500 text-sm">
                        {{ validation.oldpassword[0] }}</p>
                </div>



                <div class="flex flex-col gap-y-2 mb-5 w-full">
                    <p :class="validation.password && validation.password[0] ? 'text-red-500' : ''">
                        Password Baru
                    </p>
                    <div
                        :class="['flex', 'border-2', { 'border-red-500': validation.password && validation.password[0] }, 'border-gray-300', 'rounded-lg']">
                        <input v-model="user.password_baru" :type="showPasswordBaru ? 'text' : 'password'"
                            class="w-full py-3 px-3 rounded-lg text-sm flex-1 text-gray-500 border-transparent ring-0 focus:border-transparent focus:ring-0 bg-white"
                            placeholder="Password Baru ">

                        <span class="p-3 flex-items-center" @click="togglePasswordBaruVisibility"
                            v-if="!showPasswordBaru">

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path :fill="validation.password && validation.password[0] ? '#FF3131' : '#00a3af'"
                                    d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                            </svg>

                        </span>
                        <span class="p-3 flex-items-center" @click="togglePasswordBaruVisibility" v-else>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path :fill="validation.password && validation.password[0] ? '#FF3131' : '#00a3af'"
                                    d="M14.33 7.17A15.642 15.642 0 0 0 12 7c-4.97 0-9 2.239-9 5c0 1.44 1.096 2.738 2.85 3.65l2.362-2.362a4 4 0 0 1 5.076-5.076zm-3.1 8.756a4 4 0 0 0 4.695-4.695l2.648-2.647C20.078 9.478 21 10.68 21 12c0 2.761-4.03 5-9 5c-.598 0-1.183-.032-1.749-.094zm6.563-10.719a1 1 0 1 1 1.414 1.414L6.48 19.35a1 1 0 1 1-1.414-1.414z" />
                            </svg>
                        </span>


                    </div>
                    <p v-if="validation.password && validation.password[0]" class="text-[11px] text-red-500 text-sm">
                        {{ validation.password[0] }}</p>
                </div>
                <div class="flex flex-col gap-y-2 mb-5 w-full">
                    <p :class="validation.password && validation.password[0] ? 'text-red-500' : ''">
                        Konfirmasi Password Baru
                    </p>
                    <div
                        :class="['flex', 'border-2', { 'border-red-500': validation.password && validation.password[0] }, 'border-gray-300', 'rounded-lg']">
                        <input v-model="user.password_baru_confirmation"
                            :type="showPasswordBaruConfirmation ? 'text' : 'password'"
                            class="w-full py-3 px-3 rounded-lg text-sm flex-1 text-gray-500 border-transparent ring-0 focus:border-transparent focus:ring-0 bg-white"
                            placeholder="Konfirmasi Password Baru">

                        <span class="p-3 flex-items-center" @click="togglePasswordBaruConfirmationVisibility"
                            v-if="!showPasswordBaruConfirmation">

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path :fill="validation.password && validation.password[0] ? '#FF3131' : '#00a3af'"
                                    d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                            </svg>

                        </span>
                        <span class="p-3 flex-items-center" @click="togglePasswordBaruConfirmationVisibility" v-else>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path :fill="validation.password && validation.password[0] ? '#FF3131' : '#00a3af'"
                                    d="M14.33 7.17A15.642 15.642 0 0 0 12 7c-4.97 0-9 2.239-9 5c0 1.44 1.096 2.738 2.85 3.65l2.362-2.362a4 4 0 0 1 5.076-5.076zm-3.1 8.756a4 4 0 0 0 4.695-4.695l2.648-2.647C20.078 9.478 21 10.68 21 12c0 2.761-4.03 5-9 5c-.598 0-1.183-.032-1.749-.094zm6.563-10.719a1 1 0 1 1 1.414 1.414L6.48 19.35a1 1 0 1 1-1.414-1.414z" />
                            </svg>
                        </span>

                    </div>
                    <p v-if="validation.password && validation.password[0]" class="text-[11px] text-red-500 text-sm">
                        {{ validation.password[0] }}</p>
                </div>




                <div class="flex gap-3">
                    <button
                        class="bg-cyan-600 text-white font-semibold px-5 py-2 rounded-lg shadow-lg hover:bg-cyan-700">Update
                        password</button>
                </div>

            </form>
        </div>

    </div>


</template>


<script>
import { ref, reactive } from 'vue'
import { useToast } from "vue-toastification"
import { useStore } from 'vuex'
export default {
    name: 'PasswordComponent',

    setup() {
        const password = ref('');
        const showPassword = ref(false);
        const showPasswordConfirmation = ref(false);
        const showPasswordBaru = ref(false);
        const showPasswordBaruConfirmation = ref(false);
        // Methods
        const togglePasswordVisibility = () => {
            showPassword.value = !showPassword.value;
        };

        const togglePasswordConfirmationVisibility = () => {

            showPasswordConfirmation.value = !showPasswordConfirmation.value;
        };

        const togglePasswordBaruVisibility = () => {
            showPasswordBaru.value = !showPasswordBaru.value;
        };

        const togglePasswordBaruConfirmationVisibility = () => {

            showPasswordBaruConfirmation.value = !showPasswordBaruConfirmation.value;
        };

        const validation = ref([])
        const toast = useToast()
        const store = useStore()

        const user = reactive({
            password: '',
            password_confirmation: '',
            password_baru: '',
            password_baru_confirmation: ''

        })

        function updatepassword() {
            let formData = new FormData();
            formData.append('oldpassword', user.password)
            formData.append('oldpassword_confirmation', user.password_confirmation)
            formData.append('password', user.password_baru)
            formData.append('password_confirmation', user.password_baru_confirmation)


            formData.append("_method", "POST");
            // console.log(formData);
            // panggil actions "register" dari module "auth"
            store
                .dispatch("auth/updatePassword", formData)
                .then(() => {
                    validation.value = {};
                    toast.success("Update password berhasil")
                })
                .catch((error) => {
                    //show validaation message

                    // console.log('e', error.error)
                    // validation.value = error;
                    validation.value = error.errors;
                    if (error.error) {
                        toast.error(`${error.error}`)
                    }

                    // Swal.fire({
                    //     title: "GAGAL!",
                    //     text: "Kolom wajib diisi",
                    //     icon: "error",
                    //     showConfirmButton: false,
                    //     timer: 2000,
                    // });
                    // toast.error(validation.value)

                    // console.error("An error occurred:", error);
                });
        }

        return {
            updatepassword,
            password,
            showPassword,
            showPasswordConfirmation,
            togglePasswordVisibility,
            togglePasswordConfirmationVisibility,
            showPasswordBaru,
            showPasswordBaruConfirmation,
            togglePasswordBaruVisibility,
            togglePasswordBaruConfirmationVisibility,
            user,
            validation

        }



    }
}
</script>