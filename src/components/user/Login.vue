<template>
    <div>

    </div>
</template>

<script>

import {login} from '@/utils/user'
export default {
name: "UserLogin",
components: {},
data() {
    return {
        user: {
            email:"test@hotmail.com",
            password:"123456Test?."
        },
    }
},
created() {
    this.postUser()
},
methods: {
    postUser() {
        login(this.user)
        .then((response) => {
            console.log(response.data)
            this.$store.commit('setUser',response?.data);
            this.$router.push({name:'home'})
        })
        .catch((error) => console.error(error));
        }
    }
}

</script>
