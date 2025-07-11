<template>
  <v-container>
    <v-card max-width="1000" class="mx-auto">
      <v-card-title class="d-flex align-center"> </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="search"
          label="Поиск"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
        />
        <div class="commits-container">
          <v-list class="commits-list">
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
  return commits.value.filter((commit) => {
    const commitDate = commit.date
      ? new Date(commit.date).toLocaleDateString("ru-RU")
      : "";
    return (
      commit.name?.toLowerCase().includes(query) ||
      commit.email?.toLowerCase().includes(query) ||
      commitDate.includes(query)
    );
  });
});

onMounted(getUsersList);
</script>
<style scoped>
.commits-container {
  max-height: 500px; /* или любая другая высота */
  overflow-y: auto;
  border: 1px solid #e0e0e0; /* необязательная граница */
  border-radius: 4px; /* скругление углов */
}

.commits-list {
  padding: 0;
}
</style>