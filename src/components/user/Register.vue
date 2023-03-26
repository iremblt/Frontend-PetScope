<template>
    <div>

    </div>
</template>

<script>

import {register} from '@/utils/user'
export default {
name: "UserCreate",
components: {},
data() {
    return {
        user: {
            full_name:"test",
            email:"test@hotmail.com",
            password:"123456Test?.",
            telophone_number:"053223223233",
            user_type:1
        },
    }
},
created() {

},
methods: {
    create() {
        register(this.user)
        .then((response) => {
            console.log(response)
            this.$router.push({name:'login'})
        })
        .catch((error) => console.error(error));
        }
    }
}

</script>
