<template>
    <div>

    </div>
</template>

<script>

import {getPetDetail} from '@/utils/pets'
export default {
name: "PetDetail",
components: {},
data() {
    return {
        pet:{}
    }
},
created() {
    this.getPetDetails()
},
methods: {
    getPetDetails() {
        getPetDetail(this.$route.params.id)
        .then((response) => {
            console.log(response.data);
            this.pet = response.data || null;
            console.log(this.pet)
        })
        //toast mesajı belki yok diye?
        .catch((error) => console.error(error))
        }
    }
}

</script>
