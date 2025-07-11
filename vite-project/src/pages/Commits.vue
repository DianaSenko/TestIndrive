<template>
  <v-container>
    <v-card width="800">
      <v-card-title class="d-flex align-center"> </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="search"
          label="Поиск"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
        />
        <div class="commits-container">
          <v-list>
            <CommitList :commits="filteredCommits" />
          </v-list>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
  
  <script setup>
import { ref, reactive, computed, onMounted } from "vue";
import CommitList from "@/components/CommitList.vue";
import { getUsers } from "../services/userApi";

const search = ref("");

const commits = ref([]);
let commit = reactive({});

const getUsersList = async () => {
  commits.value = await getUsers();
  console.log(commits.value);
};

const filteredCommits = computed(() => {
  const query = search.value.toLowerCase();
  return commits.value.filter(
    (commit) =>
      commit.name?.toLowerCase().includes(query) ||
      commit.email?.toLowerCase().includes(query) 
  );
});

onMounted(getUsersList);
</script>

<style scoped>
.commits-container {
  height: 700px;
  overflow-y: auto;
  border: 1px solid #e0e0e0;
  border-radius: 4px; 
}
</style>