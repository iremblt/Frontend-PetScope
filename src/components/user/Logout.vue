<template>
    <div>

    </div>
</template>

<script>

import {logout} from '@/utils/user'
export default {
name: "UserLogout",
components: {},
data() {
    return {
        token:'test'
    }
},
created() {
    console.log(this.getToken)
    console.log(this.isAuthenticated)
    this.logoutUser()

},
computed:{
    getToken(){
        return this.$store.getters._currentUserToken
    },
    isAuthenticated(){
        return this.$store.getters._isAuthenticated
    }
},
methods: {
    logoutUser() {
        if(this.isAuthenticated){
            logout(this.getToken)
            .then((response) => {
                console.log(response)
                this.$router.push({name:'home'})
            })
            .catch((error) => console.error(error));
            }
        }
    }
}

</script>
