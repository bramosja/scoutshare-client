<template>
  <div>
    <h1>Locations</h1>

    <!--  Create or Post  -->
    <input type="text"
           v-model="name"
           placeholder="Name"
           class="name-input"/>
    <input type="text"
           v-model="city"
           placeholder="City"
           class="city-input"/>

    <!--  only render if editing location  -->
    <button v-if="isEditing" @click="updateLocation">Update</button>
    <button v-if="isEditing" @click="cancelEdit">Cancel</button>

    <!--  only render if not editing location  -->
    <button v-else @click="createLocation">Create</button>

    <!--  list of locations  -->
    <div v-for="location in locations" :key="location.id">
      <h5>[{{ location.id }}] {{ location.name }}</h5>
      <p>{{ location.city }}</p>

      <button @click="editLocation(location.id)">Edit</button>
      <button @click="deleteLocation(location.id)">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const locations = ref([])
const name = ref('')
const city = ref('')
const location_id = ref(0)
const isEditing  = ref(false)
const API_URL = 'http://localhost:3000/locations'

onMounted(async() => {
  const res = await fetch(API_URL)
  locations.value = await res.json()
})

const createLocation = async() => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name.value,
      city: city.value
    })
  })

  const data = await res.json()

  locations.value.push(data)
  name.value = ''
  city.value = ''
  location_id.value = 0;
}
const updateLocation = async() => {
  const res = await fetch (`${API_URL}/${location_id.value}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name.value,
      city: city.value,
      id: location_id.value
    })
  })

  const data = await res.json()

  const index = locations.value.findIndex(location => location.id === data.id)
  locations.value[index] = data
  name.value = ''
  city.value = ''
  location_id.value = 0;
}

const cancelEdit = () => {
  name.value = ''
  city.value = ''
  location_id.value = 0;
  isEditing.value = false
}

const deleteLocation = async(id) => {
  await fetch (`${API_URL}/${id}`,{
    method: 'DELETE'
  })
  locations.value = locations.value.filter(location => location.id !== id)
}

const editLocation = async(id) => {
  const location = locations.value.find(location => location.id === id)
  name.value = location.name
  city.value = location.city
  location_id.value = location.id
  isEditing.value = true

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.name-input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  background-color: #f8f8f8;
  color: #111;
  border-radius: 4px;
  resize: vertical;
}

.city-input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  background-color: #f8f8f8;
  color: #111;
  border-radius: 4px;
  resize: vertical;
}
</style>