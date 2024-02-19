<template>
  <div>
    <h1>Sites</h1>

    <div v-for="site in sites" :key="site.id">
      <h5>[{{ site.id }}] {{ site.name }}</h5>
      <p>{{ site.city }}, {{ site.state }}, {{ site.country }}</p>
      <p>{{ site.description }}</p>
      <p>{{ site.notes }}</p>
      <p v-if="site.needs_permit">Permit needed.</p>


      <button v-on:click="clickEditSite(site.id)">Edit</button>
      <button v-on:click="clickDeleteSite(site.id)">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted} from 'vue';

const sites = ref([])
const API_URL = 'http://localhost:3000/sites'

const emit = defineEmits(['clickEdit'])

onMounted(async() => {
  const res = await fetch(API_URL)
  sites.value = await res.json()
})

const clickDeleteSite = (id) => {
  deleteSite(id)
  sites.value = sites.value.filter(site => site.id !== id)
}

const deleteSite = async(id) => {
  await fetch (`${API_URL}/${id}`,{
    method: 'DELETE'
  }).then(res => {
        console.log(res);
  }).catch((error) => {
    console.log('Looks like there was a problem: \n', error);
    window.alert("An error occurred while deleting the site");
  })
}

const clickEditSite = (id) => {
  emit('clickEdit', id)
}
</script>