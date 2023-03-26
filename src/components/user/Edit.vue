<template>
    <div>

    </div>
</template>

<script>

import {getUserDetail,patchUser,patchEmailUser,patchStatusUser,patchPasswordUser} from '@/utils/user'
export default {
name: "UserCreate",
components: {},
data() {
    return {
        full_name:"test",
        email:"test@hotmail.com",
        password:"123456Test?.",
        telophone_number:"053223223233",
        user_type:1,
        user:{}
    }
},
created() {
    this.getUserDetails()
},
methods: {
    // Daha sonra store dan çek user bilgilerini her zaman get ile alma
    getUserDetails() {
        getUserDetail(this.$route.params.id)
        .then((response) => {
            console.log(response.data);
            this.user = response.data || null;
        })
        .catch((error) => console.error(error))
    },
    editUser() {
        const user = {
            full_name : this.full_name,
            telophone_number : this.telophone_number
        }
        patchUser(user)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => console.error(error));
        }
    },
    editUserEmail() {
        patchEmailUser(this.$route.params.id,this.email)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => console.error(error));
        },
    editUserPassword() {
        patchPasswordUser(this.$route.params.id,this.password)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => console.error(error));
        },
    editUserStatus() {
        patchStatusUser(this.$route.params.id,this.user_type)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => console.error(error));
        }
}

</script>
