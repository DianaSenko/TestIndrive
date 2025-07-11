<template>
  <v-list class="commits-list">
    <v-list-item
      v-for="commit in commits"
      :key="commit.node_id"
      class="commit-item"
      lines="two"
    >
      <v-list-item-subtitle>
        <div class="text-uppercase text-h5">{{ commit.name }}</div>
      </v-list-item-subtitle>

      <v-list-item-title>
        <a :href="`mailto:${commit.email}`" class="email-link">
          {{ commit.email }}
        </a>
      </v-list-item-title>

      <v-list-item-subtitle>
        <div class="date">{{ commit.date }}</div>
      </v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>

<script setup>
const props = defineProps({
  commits: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.commits-list {
  padding: 0;
  text-align: left;
}
.commit-item {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}
.date {
  position: absolute;
  top: 2px;
  right: 15px;
}
.email-link {
  color: inherit;
  text-decoration: none;
}
.email-link:hover {
  color: #ff5252;
  text-decoration: underline;
}
</style>