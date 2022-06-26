<template>
  <!-- IF NOT LOADING -->
  <main v-if="!loading">
   <DataTitle :text="title" :dataDate="dataDate"/>

   <DataBoxes :stats="stats"/>
  </main>
  
  <!-- IF LOADING -->
  <main class="flex flex-col align-center justify-center text-center" v-else>
    <div class="text-gray-500 text-3xl mt-10 mb-6">
      fetching data
    </div>
    <img :src="loadingImage" alt="A spinning hourglass" class="w-24 m-auto">
  </main>

  <CountrySelect @get-country="getCountryData" :countries="countries"/>

  <button @click="clearCountryData"
     class="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none
   hover:bg-green-600" v-if="stats.Country">
    リセット
  </button>
</template>

<script>
import DataTitle from '@/components/DataTitle'
import DataBoxes from '@/components/DataBoxes'
import CountrySelect from '@/components/CountrySelect'

export default {
  name: 'HomeView',
  components: {
    DataTitle,
    DataBoxes,
    CountrySelect,
  },
  data() {
    return {
      loading: true,
      title: '全世界',
      dataDate: '',
      stats: {},
      countries: [],
      loadingImage: require('../assets/hourglass.gif'),
    }
  },
  methods: {
    async fetchCovidData() {
      const res = await fetch('https://api.covid19api.com/summary')
      const data = await res.json()
      return data
    },
    getCountryData(country) {
      this.stats = country
      this.title = country.Country
    },
    async clearCountryData() {
      this.loading = true
      const data = await this.fetchCovidData()
      this.title = 'Global'
      this.stats = data.Global
      this.loading = false
    }
  },
  async created() {
    const data = await this.fetchCovidData()
    this.dataDate = data.Date
    this.stats = data.Global
    this.countries = data.Countries
    this.loading = false
    console.log(data)
  }
}
</script>
