<template>
    <div>
        <div class="p-4 rounded shadow">
            <h1 class="text-xl font-semibold">
                Permission
            </h1>

            <div class="my-5" v-if="!loading && permissions.data">
                <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-y-1">
                        <p class="text-xs  text-gray-500">Show</p>
                        <select v-model="data.perPage" @change="changePerPage"
                            class="rounded-lg border-2 border-gray-300 focus:border-gray-300 focus:ring-0 text-sm">
                            <option v-for="option in perPageOptions" :key="option" :value="option">{{ option }}
                            </option>
                        </select>
                    </div>
                    <div class="flex flex-col gap-y-1">
                        <p class="text-xs text-gray-500">Pencarian</p>
                        <input type="text" placeholder="pencarian" v-model="data.search" @keypress.enter="searchData"
                            class="rounded-lg border-2 border-gray-300 focus:border-gray-300 focus:ring-0 text-sm">
                    </div>
                </div>



                <div class="overflow-x-auto my-3">
                    <table class="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr class="w-full bg-teal-600">
                                <th class="py-2 px-4 text-white border-b">No</th>
                                <th class="py-2 px-4 text-white border-b">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(permission, index) in permissions.data" :key="permission.id"
                                class="text-center even:bg-teal-50">
                                <td class="py-2 px-4 border-b">{{ (permissions.current_page - 1) * permissions.per_page
                                    + index + 1 }}</td>
                                <td class="py-2 px-4 border-b">{{ permission.name }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-between items-center">

                    <p>Menampilkan {{ permissions.to }} dari {{ permissions.total }}</p>

                    <nav aria-label="Pagination">
                        <ul class="flex justify-end space-x-2">
                            <li :class="{ 'opacity-50 cursor-not-allowed': permissions.current_page === 1 }">
                                <button class="px-3 py-1 bg-teal-600 text-white rounded"
                                    @click="changePage(permissions.current_page - 1)"
                                    :disabled="permissions.current_page === 1" aria-label="Previous">
                                    Previous
                                </button>
                            </li>
                            <li v-for="page in permissions.links" :key="page.label">
                                <button v-if="!page.label.includes('Previous') && !page.label.includes('Next')"
                                    @click="changePage(page.label)" class="px-3 py-1 rounded"
                                    :class="{ 'bg-teal-600 text-white': page.active, 'bg-gray-200': !page.active }">
                                    {{ page.label }}
                                </button>
                            </li>
                            <li
                                :class="{ 'opacity-50 cursor-not-allowed': permissions.current_page === permissions.last_page }">
                                <button class="px-3 py-1 bg-teal-600 text-white rounded"
                                    @click="changePage(permissions.current_page + 1)"
                                    :disabled="permissions.current_page === permissions.last_page" aria-label="Next">
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
            <div v-else>
                <ContentLoader />
            </div>

        </div>
    </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import { ContentLoader } from 'vue-content-loader'

export default {
    name: "PermissionIndex",
    components: {
        ContentLoader,
    },
    setup() {
        const store = useStore();
        const data = reactive({
            perPage: 10,
            search: '',
            pages: "kategorisikap-view"
        });
        const perPageOptions = [5, 10, 15, 25, 50, 100];

        const fetchData = async (page = 1) => {
            const pencarian = data.search;
            const jumlah = data.perPage;
            await store.dispatch("permission/getData", {
                page: page,
                perPage: jumlah,
                search: pencarian
            });
        };

        onMounted(async () => {
            await fetchData();
        });

        const permissions = computed(() => {
            return store.getters["permission/getData"];
        });

        const isLoading = computed(() => {
            return store.getters["permission/isLoading"];
        });

        const changePage = async (page) => {
            await fetchData(page);
        };

        const changePerPage = async () => {
            await fetchData(1);
        };

        const searchData = async () => {
            await fetchData(1);
        };

        return {
            perPageOptions,
            data,
            permissions,
            isLoading,
            changePerPage,
            searchData,
            changePage
        };
    }
}
</script>