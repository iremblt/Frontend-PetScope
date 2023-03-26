<template>
    <div class="home">
      <Logout />
    </div>
  </template>
  
  <script>
  import Logout from "@/components/user/Logout.vue";
  export default {
    name: "UserLogout",
    components: {
        Logout,
    },
    data() {
      return {};
    },
    created() {},
    methods: {},
  };
  </script>
  