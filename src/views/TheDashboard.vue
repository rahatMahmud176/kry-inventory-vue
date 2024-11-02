<template>
 
<TheHeaderVue></TheHeaderVue>

<TheSidebarVue></TheSidebarVue>

<router-view></router-view> 

<TheFooter></TheFooter>

</template>

<script>

import TheHeaderVue from '../components/includes/TheHeader.vue';
import TheSidebarVue from '../components/includes/TheSidebar.vue';
import TheFooter from '../components/includes/TheFooter.vue';
import { setAxiosPrivetHeaders } from '../my-services/axiosInstance';

export default {

  mounted(){
    setAxiosPrivetHeaders()
  },
  
  components: {TheHeaderVue,TheSidebarVue,TheFooter},



}
</script>

<style>

</style>