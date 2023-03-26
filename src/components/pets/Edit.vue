<template>
    <div>

    </div>
</template>

<script>

import {patchPet, getPetDetail} from '@/utils/pets'
export default {
name: "PetCreate",
components: {},
data() {
    return {
        editedPet: {
            record_type : 0,
            date_time: "14/03/2023",
            pet_name: "Test 2",
            pet_breed: "Cat",
            pet_color: "White",
            pet_age: 5,
            pet_gender: "Female",
            pet_image: "https://petharbor.com/get_image.asp?RES=Detail&LOCATION=PUBLIC&ID=2073353",
            pet_lost_location:"Eyüp/istanbul",
            pet_details: null,
            created_id: 1
        },
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
    },
    edit() {
        patchPet(this.$route.params.id,this.editedPet)
        .then((response) => {
            console.log(response)
        })
        //toast mesajı belki yok diye?
        .catch((error) => console.error(error));
        }
    }
}

</script>
