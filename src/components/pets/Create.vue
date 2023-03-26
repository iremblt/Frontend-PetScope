<template>
    <div>

    </div>
</template>

<script>

import {postPet} from '@/utils/pets'
export default {
name: "PetCreate",
// pet breed database'den gelebilir
components: {},
data() {
    return {
        pet: {
            record_type : 0,
            date_time: "14/03/2023",
            pet_name: "Test 2",
            pet_breed: "Dog",
            pet_color: "White",
            pet_age: 5,
            pet_gender: "Female",
            pet_image: "https://petharbor.com/get_image.asp?RES=Detail&LOCATION=PUBLIC&ID=2073353",
            pet_lost_location:"Eyüp/istanbul",
            pet_details: null,
            created_id: 1
        },
    }
},
created() {

},
methods: {
    create() {
        postPet(this.pet)
        .then((response) => {
            console.log(response)
        })
        //toast mesajı belki yok diye?
        .catch((error) => console.error(error));
        }
    }
}

</script>
