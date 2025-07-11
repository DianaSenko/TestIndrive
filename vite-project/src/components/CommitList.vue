<template>
  <v-list class="commits-list">
    <v-list-item
      v-for="commit in commits"
      :key="commit.node_id"
      class="commit-item"
      lines="two"
    >
      <v-list-item-subtitle>
        <div class="text-uppercase text-h6">{{ commit.name }}</div>
      </v-list-item-subtitle>

      <v-list-item-title>
        <a :href="`mailto:${commit.email}`" class="email-link">
          {{ commit.email }}
        </a>
      </v-list-item-title>

      <v-list-item-subtitle>
        <div class="date">{{ date(commit) }}</div>
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

const date = (commit) => {
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "UTC",
    };
    return date.toLocaleDateString("ru-RU", options);
  };
  const date = formatDate(commit.date);

  return `${date}`;
};
</script>

<style scoped>
.commits-list {
  padding: 0;
  text-align: left;
}

.commit-item {
  padding-left: 0;
  margin-left: 0;
  align-items: flex-start;
  position: relative;
}

.date {
  position: absolute;
  top: 8px;
  right: 0;
}

.email-link {
  color: inherit;
  text-decoration: none;
}
.email-link:hover {
  color: #ff5252; /* Красный цвет из палитры Vuetify */
  text-decoration: underline;
}
</style>