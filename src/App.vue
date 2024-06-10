<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside
      class="w-64 px-3 bg-white border-r-[1px] text-teal-600 flex flex-col h-full overflow-y-auto  scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-teal-600"
      v-if="this.$route.name != 'login' && this.$route.name != 'home'">
      <div class=" p-4 flex flex-col">
        <h2 class="text-2xl font-bold">{{ user.general.nama_company }}</h2>
        <p>{{ user.email }}</p>
      </div>

      <nav class="flex-1 mt-3">
        <ul>
          <li class="px-4 py-3 hover:bg-teal-50 hover:cursor-pointer">
            <router-link :to="{ name: 'dashboard' }">
              <div class="flex gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                  <path fill="#008080" stroke="#008080" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1" />
                </svg>
                <p class="font-semibold">Dashboad</p>
              </div>
            </router-link>

          </li>
          <li class="px-4 py-3 flex items-center justify-center gap-x-2">
            <div class="w-1/2 py-[0.5px] bg-teal-600"></div>
            <p class="text-teal-800 text-xs w-fit">User</p>
            <div class="w-1/2 py-[0.5px] bg-teal-600"></div>
          </li>
          <li class="px-4 py-3 hover:bg-teal-50 hover:cursor-pointer">
            <router-link :to="{ name: 'permission' }">
              <div class="flex gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48">
                  <g fill="none" stroke="#008080" stroke-linecap="round" stroke-width="4">
                    <path stroke-linejoin="round" d="M20 10H6a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-2.5" />
                    <path d="M10 23h8m-8 8h24" />
                    <circle cx="34" cy="16" r="6" fill="#008080" stroke-linejoin="round" />
                    <path stroke-linejoin="round" d="M44 28.419C42.047 24.602 38 22 34 22s-5.993 1.133-8.05 3" />
                  </g>
                </svg>
                <p class="font-semibold">Permission</p>
              </div>
            </router-link>

          </li>
          <li class="px-4 py-3 hover:bg-teal-50 hover:cursor-pointer">
            <router-link :to="{ name: 'dashboard' }">
              <div class="flex gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
                  <path fill="#008080"
                    d="M19.307 3.21a2.91 2.91 0 1 0-.223 1.94a11.64 11.64 0 0 1 8.232 7.049l1.775-.698a13.58 13.58 0 0 0-9.784-8.291m-2.822 1.638a.97.97 0 1 1 0-1.939a.97.97 0 0 1 0 1.94m-4.267.805l-.717-1.774a13.58 13.58 0 0 0-8.291 9.784a2.91 2.91 0 1 0 1.94.223a11.64 11.64 0 0 1 7.068-8.233m-8.34 11.802a.97.97 0 1 1 0-1.94a.97.97 0 0 1 0 1.94m12.607 8.727a2.91 2.91 0 0 0-2.599 1.62a11.64 11.64 0 0 1-8.233-7.05l-1.774.717a13.58 13.58 0 0 0 9.813 8.291a2.91 2.91 0 1 0 2.793-3.578m0 3.879a.97.97 0 1 1 0-1.94a.97.97 0 0 1 0 1.94M32 16.485a2.91 2.91 0 1 0-4.199 2.599a11.64 11.64 0 0 1-7.05 8.232l.718 1.775a13.58 13.58 0 0 0 8.291-9.813A2.91 2.91 0 0 0 32 16.485m-2.91.97a.97.97 0 1 1 0-1.94a.97.97 0 0 1 0 1.94" />
                  <path fill="#008080"
                    d="M19.19 16.35a3.879 3.879 0 1 0-5.42 0a4.85 4.85 0 0 0-2.134 4.014v1.939h9.697v-1.94a4.85 4.85 0 0 0-2.143-4.014m-4.645-2.774a1.94 1.94 0 1 1 3.88 0a1.94 1.94 0 0 1-3.88 0m-.97 6.788a2.91 2.91 0 1 1 5.819 0z"
                    class="ouiIcon__fillSecondary" />
                </svg>
                <p class="font-semibold">Roles</p>
              </div>
            </router-link>

          </li>
          <li class="px-4 py-3 hover:bg-teal-50 hover:cursor-pointer">
            <router-link :to="{ name: 'dashboard' }">
              <div class="flex gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                  <path fill="#008080"
                    d="M6 8c0-2.21 1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4m6 10.2c0-.96.5-1.86 1.2-2.46v-.24c0-.39.07-.76.18-1.12c-1.03-.24-2.17-.38-3.38-.38c-4.42 0-8 1.79-8 4v2h10zm10 .1v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V17c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V17h3z" />
                </svg>
                <p class="font-semibold">Akun</p>
              </div>
            </router-link>

          </li>

          <li class="px-4 py-3 flex items-center justify-center gap-x-2">
            <div class="w-1/2 py-[0.5px] bg-teal-600"></div>
            <p class="text-teal-800 text-xs w-fit">Utama</p>
            <div class="w-1/2 py-[0.5px] bg-teal-600"></div>
          </li>
          <li class="px-4 py-3 hover:bg-teal-50 hover:cursor-pointer">
            <router-link :to="{ name: 'dashboard' }">
              <div class="flex gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                  <path fill="#008080" fill-rule="evenodd"
                    d="M17 3a4 4 0 1 0 0 8a4 4 0 0 0 0-8M3 17a4 4 0 1 1 8 0a4 4 0 0 1-8 0m10-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zM3 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                    clip-rule="evenodd" />
                </svg>
                <p class="font-semibold">Kategori</p>
              </div>
            </router-link>

          </li>
          <li class="px-4 py-3 hover:bg-teal-50 hover:cursor-pointer">
            <router-link :to="{ name: 'dashboard' }">
              <div class="flex gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1024 1024">
                  <path fill="#008080" fill-rule="evenodd"
                    d="M160 144h304c8.837 0 16 7.163 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V160c0-8.837 7.163-16 16-16m564.314-25.333l181.019 181.02c6.248 6.248 6.248 16.378 0 22.627l-181.02 181.019c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.378 0-22.627l181.02-181.019c6.248-6.248 16.378-6.248 22.627 0M160 544h304c8.837 0 16 7.163 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.837 7.163-16 16-16m400 0h304c8.837 0 16 7.163 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.837 7.163-16 16-16" />
                </svg>
                <p class="font-semibold">Produk</p>
              </div>
            </router-link>

          </li>

          <li class="px-4 py-3 hover:bg-teal-50 hover:cursor-pointer">
            <router-link :to="{ name: 'dashboard' }">
              <div class="flex gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 15 15">
                  <path fill="#008080" d="M.979.356L.02.644L3.128 11H15V4.5A2.5 2.5 0 0 0 12.5 2H1.472z" />
                  <path fill="#008080" fill-rule="evenodd"
                    d="M5.5 12a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M5 13.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m7.5-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-.5 1.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0"
                    clip-rule="evenodd" />
                </svg>
                <p class="font-semibold">Transaksi</p>
              </div>
            </router-link>

          </li>
          <li class="px-4 py-3 hover:bg-teal-50 hover:cursor-pointer">
            <router-link :to="{ name: 'dashboard' }">
              <div class="flex gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
                  <path fill="#008080"
                    d="M230.4 219.19A8 8 0 0 1 224 232H32a8 8 0 0 1-6.4-12.8A67.9 67.9 0 0 1 53 197.51a40 40 0 1 1 53.93 0a67.4 67.4 0 0 1 21 14.29a67.4 67.4 0 0 1 21-14.29a40 40 0 1 1 53.93 0a67.85 67.85 0 0 1 27.54 21.68M27.2 126.4a8 8 0 0 0 11.2-1.6a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8 0a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 93.51a40 40 0 1 0-53.93 0a67.4 67.4 0 0 0-21 14.29a67.4 67.4 0 0 0-21-14.29a40 40 0 1 0-53.93 0A67.9 67.9 0 0 0 25.6 115.2a8 8 0 0 0 1.6 11.2" />
                </svg>
                <p class="font-semibold">Pelanggan</p>
              </div>
            </router-link>

          </li>
          <li class="px-4 py-3 flex items-center justify-center gap-x-2">
            <div class="w-1/2 py-[0.5px] bg-teal-600"></div>
            <p class="text-teal-800 text-xs w-fit">Laporan</p>
            <div class="w-1/2 py-[0.5px] bg-teal-600"></div>
          </li>
          <li class="px-4 py-2 hover:bg-teal-50 hover:cursor-pointer">
            <router-link :to="{ name: 'setting' }">
              <div class="flex gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48">
                  <defs>
                    <mask id="ipSSalesReport0">
                      <g fill="none" stroke-linejoin="round" stroke-width="4">
                        <path fill="#fff" stroke="#fff" d="M41 14L24 4L7 14v20l17 10l17-10z" />
                        <path stroke="#000" stroke-linecap="round" d="M24 22v8m8-12v12m-16-4v4" />
                      </g>
                    </mask>
                  </defs>
                  <path fill="#008080" d="M0 0h48v48H0z" mask="url(#ipSSalesReport0)" />
                </svg>
                <p>Laporan Penjualan</p>
              </div>
            </router-link>

          </li>
          <li class="px-4 py-2 hover:bg-teal-50 hover:cursor-pointer">
            <router-link :to="{ name: 'setting' }">
              <div class="flex gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                  <path fill="#008080"
                    d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2zm6 1c-.755 0-1.472.163-2.019.48C7.434 5.798 7 6.313 7 7s.434 1.202.981 1.52C8.528 8.837 9.245 9 10 9s1.472-.163 2.019-.48C12.566 8.202 13 7.687 13 7s-.434-1.202-.981-1.52C11.472 5.163 10.755 5 10 5M7.031 9.032A.8.8 0 0 0 7 9.25c0 .3.182.55.33.71c.168.182.393.355.653.505A4.1 4.1 0 0 0 10 11c.788 0 1.498-.236 2.017-.535c.26-.15.485-.323.654-.504c.147-.16.329-.41.329-.711a.8.8 0 0 0-.031-.218q-.218.165-.453.3A5.1 5.1 0 0 1 10 10a5.1 5.1 0 0 1-2.516-.669a4 4 0 0 1-.453-.299m0 2A.8.8 0 0 0 7 11.25c0 .3.182.55.33.71a2.8 2.8 0 0 0 .653.505A4.1 4.1 0 0 0 10 13c.788 0 1.498-.236 2.017-.535c.26-.15.485-.323.654-.504c.147-.16.329-.41.329-.711a.8.8 0 0 0-.031-.218a4 4 0 0 1-.453.3A5.1 5.1 0 0 1 10 12a5.1 5.1 0 0 1-2.516-.669a4 4 0 0 1-.453-.299" />
                </svg>
                <p>Laporan Profit</p>
              </div>
            </router-link>

          </li>
          <li class="px-4 py-2 hover:bg-teal-50 hover:cursor-pointer">
            <router-link :to="{ name: 'setting' }">
              <div class="flex gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48">
                  <defs>
                    <mask id="ipSFileStaff0">
                      <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                        <path fill="#fff" stroke="#fff"
                          d="M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2" />
                        <path stroke="#fff" d="m30 4l10 10" />
                        <circle cx="24" cy="24" r="4" fill="#000" stroke="#000" />
                        <path stroke="#000" d="M32 36a8 8 0 1 0-16 0" />
                      </g>
                    </mask>
                  </defs>
                  <path fill="#008080" d="M0 0h48v48H0z" mask="url(#ipSFileStaff0)" />
                </svg>
                <p>Laporan Kasir</p>
              </div>
            </router-link>

          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Main Top -->
      <header class="bg-white shadow p-4 sticky top-0 z-10 flex items-center justify-between"
        v-if="this.$route.name != 'login' && this.$route.name != 'home'">

        <div class="flex gap-x-3">
          <router-link to="#" class="flex gap-x-1  px-4 py-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
              <path fill="#008080"
                d="M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h72v16H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-16h72a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24m0 144H48a8 8 0 0 1-8-8v-16h176v16a8 8 0 0 1-8 8" />

            </svg>
            <p class="font-semibold text-teal-600">Tampilan User</p>
          </router-link>

          <router-link to="" class="flex gap-x-1 px-4 py-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50">
              <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path stroke="#008080"
                  d="M18.75 22.917v-8.334m8.333-6.25V12.5A2.083 2.083 0 0 1 25 14.583H12.5a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 12.5 6.25H25a2.083 2.083 0 0 1 2.083 2.083" />
                <path stroke="#008080"
                  d="M6.25 35.417v6.25a2.083 2.083 0 0 0 2.083 2.083h33.334a2.083 2.083 0 0 0 2.083-2.083v-6.25l-3.687-11.084a2.08 2.08 0 0 0-1.98-1.416H11.917a2.08 2.08 0 0 0-2.084 1.416zm0 0v6.25a2.083 2.083 0 0 0 2.083 2.083h33.334a2.083 2.083 0 0 0 2.083-2.083v-6.25z" />
              </g>
            </svg>
            <p class="font-semibold text-teal-600">Kasir</p>
          </router-link>
        </div>

        <div class="relative flex gap-x-2">
          <div class="flex flex-col">
            <a @click="toggleDropdown" class="flex gap-x-1  px-4 py-2 cursor-pointer items-center">
              <p class="font-semibold text-teal-600">{{ user.name }}</p>
              <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg>
            </a>
            <div v-if="isDropdownOpen"
              class="absolute top-full left-0 mt-2 w-full flex flex-col bg-white shadow-lg p-5 rounded-lg z-10 gap-y-3">
              <router-link @click="toggleDropdown" :to="{ name: 'profile' }">Profile</router-link>

              <router-link @click="toggleDropdown" :to="{ name: 'password' }">Password</router-link>

              <div class="border-t-[1px] border-t-teal-500 pt-2">
                <a @click="logout" class="cursor-pointer">
                  Keluar
                </a>
              </div>

            </div>
          </div>




        </div>



      </header>

      <!-- Main Content -->
      <main class="flex-1 overflow-y-auto p-4">
        <div class="space-y-4">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>


<script>
import { FwbDropdown } from 'flowbite-vue'
//hook vuex
import { useStore } from 'vuex'

//hook vue router
import { useRouter } from 'vue-router'

//hook vue
import { computed, onMounted, ref } from 'vue'

//hook Toast
import { useToast } from "vue-toastification"

export default {

  name: 'DashboardComponent',

  setup() {

    //store vuex
    const store = useStore()

    //vue router
    const router = useRouter()

    // Same interface as this.$toast
    const toast = useToast()

    const isDropdownOpen = ref(false);


    const user = computed(() => {
      return store.state.auth.user
    })

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };



    onMounted(() => {
      // Ensure dropdown is closed on initial load
      isDropdownOpen.value = false;
    });
    //mounted


    //method logout
    function logout() {

      isDropdownOpen.value = !isDropdownOpen.value;
      //panggil action "logout" di dalam module "auth"
      store.dispatch('auth/logout')
        .then(() => {

          //jika berhasil, akan di arahkan ke route login
          router.push({
            name: 'login'
          })

          // toast.success("Logout Berhasil!")

        })

    }

    //return a state and function
    return {
      logout,
      user,
      isDropdownOpen,
      toggleDropdown,
    }

  }
}
</script>
