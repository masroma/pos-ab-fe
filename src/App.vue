<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-teal-600 text-white flex flex-col h-full overflow-y-auto" v-if="this.$route.name != 'login'">
      <div class=" p-4 flex flex-col">
        <h2 class="text-2xl font-bold">AB Pos</h2>
        <p>{{ user.email }}</p>
      </div>

      <nav class="flex-1 mt-3">
        <ul>
          <li class="px-4 py-2 hover:bg-teal-500 hover:cursor-pointer">
            <NuxtLink to="/">
              <div class="flex gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                  <path fill="white"
                    d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.223a1 1 0 0 1 1.228 0l8 6.223a1 1 0 0 1 .386.79zm-2-1V9.978l-7-5.444l-7 5.444V19z" />
                </svg>
                <p>Dashboad</p>
              </div>
            </NuxtLink>

          </li>
          <li class="px-4 py-2 hover:bg-teal-500 hover:cursor-pointer">
            <NuxtLink to="/setting">
              <div class="flex gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                  <path fill="white"
                    d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.223a1 1 0 0 1 1.228 0l8 6.223a1 1 0 0 1 .386.79zm-2-1V9.978l-7-5.444l-7 5.444V19z" />
                </svg>
                <p>Setting</p>
              </div>
            </NuxtLink>

          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Main Top -->
      <header class="bg-white shadow p-4 sticky top-0 z-10 flex items-center justify-between"
        v-if="this.$route.name != 'login'">

        <div class="flex gap-x-3">
          <NuxtLink to="#" class="flex gap-x-1 hover:bg-teal-100 px-4 py-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
              <path fill="#008080"
                d="M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h72v16H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-16h72a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24m0 144H48a8 8 0 0 1-8-8v-16h176v16a8 8 0 0 1-8 8" />

            </svg>
            <p class="font-semibold text-teal-600">Tampilan User</p>
          </NuxtLink>

          <NuxtLink to="" class="flex gap-x-1 hover:bg-teal-100 px-4 py-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50">
              <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path stroke="#008080"
                  d="M18.75 22.917v-8.334m8.333-6.25V12.5A2.083 2.083 0 0 1 25 14.583H12.5a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 12.5 6.25H25a2.083 2.083 0 0 1 2.083 2.083" />
                <path stroke="#008080"
                  d="M6.25 35.417v6.25a2.083 2.083 0 0 0 2.083 2.083h33.334a2.083 2.083 0 0 0 2.083-2.083v-6.25l-3.687-11.084a2.08 2.08 0 0 0-1.98-1.416H11.917a2.08 2.08 0 0 0-2.084 1.416zm0 0v6.25a2.083 2.083 0 0 0 2.083 2.083h33.334a2.083 2.083 0 0 0 2.083-2.083v-6.25z" />
              </g>
            </svg>
            <p class="font-semibold text-teal-600">Kasir</p>
          </NuxtLink>
        </div>
        <a @click="logout" class="flex gap-x-1 hover:bg-teal-100 px-4 py-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
            <path fill="#008080"
              d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m5-6l5-4l-5-4v3H9v2h8z" />
          </svg>
          <p class="font-semibold text-teal-600">Keluar</p>
        </a>



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

//hook vuex
import { useStore } from 'vuex'

//hook vue router
import { useRouter } from 'vue-router'

//hook vue
import { computed, onMounted } from 'vue'

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


    const user = computed(() => {
      return store.state.auth.user
    })
    //mounted


    //method logout
    function logout() {

      //panggil action "logout" di dalam module "auth"
      store.dispatch('auth/logout')
        .then(() => {

          //jika berhasil, akan di arahkan ke route login
          router.push({
            name: 'login'
          })

          toast.success("Logout Berhasil!")

        })

    }

    //return a state and function
    return {
      logout,
      user
    }

  }
}
</script>
