<template>
    <div>

    </div>
</template>

<script>

import {getPetList} from '@/utils/pets'
export default {
name: "PetList",
components: {},
data() {
    return {
        petList: [],
    }
},
created() {
    this.getAllPetList()
},
methods: {
    getAllPetList() {
        getPetList()
        .then((response) => {
            console.log(response.data);
            this.petList = response.data || [];
            this.$store.commit('setPet',response?.data);
        })
        //toast mesajı belki yok diye?
        .catch((error) => console.error(error));
        }
    }
}

</script>
