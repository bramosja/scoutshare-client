<template>
  <div>
    <h1>Sites</h1>

    <!--  Create or Post  -->
    <div class="inputs-container">
      <input type="text"
             v-model="name"
             placeholder="Name"
             class="name-input model-input"/>

      <LocationInput @selectLocation="onSelectLocation"
                     :data-location="location"
                     :is-editing="isEditing"
      ></LocationInput>

      <textarea v-model="description"
             placeholder="Description"
             class="name-input model-input"></textarea>

      <input type="text"
             v-model="notes"
             placeholder="Notes"
             class="name-input model-input"/>

      <div style="display: flex;">
        <input type="checkbox"
               id="permit"
               v-model="needs_permit"
               name="permit"
               class=""/>
        <label for="permit">Permit Needed</label>
      </div>

      <!--  only render if editing site  -->
      <button
          v-if="isEditing"
          @click="updateSite"
      >Update</button>

      <button
          v-if="isEditing"
          @click="cancelEdit"
      >Cancel</button>

      <!--  only render if not editing site  -->
      <button
          class="create-button"
          v-else @click="createSite"
      >Create</button>

    </div>

   <SitesList @click-edit="onEditSite" />
  </div>
</template>

<script setup>
import { onMounted,  ref } from 'vue';
import LocationInput from "@/components/LocationInput.vue";
import SitesList from "@/components/Sites/SitesList.vue";


const sites = ref([])
const name = ref('')
const description = ref('')
const location = ref([])
const needs_permit = ref(false)
const notes = ref('')
const site_id = ref(0)
const isEditing  = ref(false)
const API_URL = 'http://localhost:3000/sites'

onMounted(async() => {
  const res = await fetch(API_URL)
  sites.value = await res.json()
})

function onSelectLocation(selectedLocation) {
  console.log(selectedLocation)
  location.value = selectedLocation
}

const valueReset = () => {
  name.value = ''
  description.value = ''
  // location.value = []
  needs_permit.value = false
  notes.value = ''
  site_id.value = 0;
}

const createSite = async() => {
  console.log(location.value)
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name.value,
      description: description.value,
      city: location.value[0],
      state: location.value[1],
      country: location.value[2],
      needs_permit: needs_permit.value,
      notes: notes.value
    })
  })

  const data = await res.json()

  console.log(location.value)
  sites.value.push(data)
  valueReset()
}

const updateSite = async() => {
  const res = await fetch (`${API_URL}/${site_id.value}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name.value,
      description: description.value,
      city: location.value[0],
      state: location.value[1],
      country: location.value[2],
      needs_permit: needs_permit.value,
      notes: notes.value,
      id: site_id.value
    })
  })

  const data = await res.json()

  const index = sites.value.findIndex(site => site.id === data.id)
  sites.value[index] = data
  valueReset()
}

const cancelEdit = () => {
  valueReset()
  isEditing.value = false
}

const onEditSite = async(id) => {
  isEditing.value = true

  const site = sites.value.find(site => site.id === id)
  name.value = site.name
  description.value = site.description
  location.value = [site.city, site.state, site.country]
  needs_permit.value = site.needs_permit
  notes.value = site.notes
  site_id.value = site.id


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
</style>