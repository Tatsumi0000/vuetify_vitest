<script lang="ts">
export default {
  name: "MyVDataTable",
  data() {
    return {
      count: 0,
      headers: [
        {
          title: "title1",
          key: "firstName",
        },
        {
          title: "title2",
          key: "middleName",
        },
        {
          title: "title3",
          key: "lastName",
        },
      ],
      items: [
        {
          firstName: "John1",
          middleName: "Doe1",
          lastName: "Smith1",
        },
        {
          firstName: "Jane2",
          middleName: "Doe2",
          lastName: "Smith2",
        },
        {
          firstName: "John3",
          middleName: "Doe3",
          lastName: "Hoge3",
        },
        {
          firstName: "Jane4",
          middleName: "Doe4",
          lastName: "Fuga4",
        },
        {
          firstName: "John5",
          middleName: "Doe5",
          lastName: "Hoga5",
        },
        {
          firstName: "Jane6",
          middleName: "Doe6",
          lastName: "Foga6",
        },
        {
          firstName: "John7",
          middleName: "Doe7",
          lastName: "Yamada7",
        },
        {
          firstName: "Jane8",
          middleName: "Doe8",
          lastName: "Tanaka8",
        },
        {
          firstName: "John9",
          middleName: "Doe9",
          lastName: "Sakuragi9",
        },
        {
          firstName: "Jane10",
          middleName: "Doe10",
          lastName: "Akagi10",
        },
      ],
    };
  },
};
</script>

<template>
  <VDataTable :headers="headers" :items="items">
    <template v-slot:bottom />
  </VDataTable>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
