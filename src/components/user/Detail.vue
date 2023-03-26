<template>
    <div>

    </div>
</template>

<script>

import {getUserDetail,getActiveUser,getUserPetFlyers} from '@/utils/user'
export default {
name: "UserDetail",
components: {},
data() {
    return {
        user:{},
        token:'kfdfsd',
        userFlyers:[]
    }
},
created() {
    this.getUserDetails()
},
methods: {
    getUserDetails() {
        getUserDetail(this.$route.params.id)
        .then((response) => {
            console.log(response.data);
            this.user = response.data || null;
            console.log(this.user)
        })
        .catch((error) => console.error(error))
    },
    getCurrentUser() {
        getActiveUser(this.token)
        .then((response) => {
            console.log(response.data);
            this.user = response.data || null;
        })
        .catch((error) => console.error(error))
    },
    getUserFlyers() {
        getUserPetFlyers(this.$route.params.id)
        .then((response) => {
            console.log(response.data);
            this.userFlyers = response.data || [];
        })
        .catch((error) => console.error(error))
    }
}
}

</script>
