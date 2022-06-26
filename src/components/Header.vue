<template>
  <header class="text-center bg-gradient-to-r from-cyan-500 to-blue-500
   text-white p-4 mb-10 ">
    <div class="text-3xl md:text-5xl font-bold mb-3">
    <i class="fa fa-viruses"></i>新型コロナウィルス感染者数と死者数</div>
    <nav class="fixed top-0 right-0 p-4">
      <router-link to="/" class="text-2xl mr-4 hover:text-gray-300 hover:animate-pulse">HOME</router-link>
      <router-link to="/testpage" class="text-2xl hover:text-gray-300 hover:animate-pulse ">TESTPAGE</router-link>
    </nav>
    <p>利用させていただいたAPI: <a class="text-blue-100" href="https://covid19api.com" target="_blank">
    covid19api.com</a></p>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
  }
}
</script>

