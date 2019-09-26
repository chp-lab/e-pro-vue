/* eslint-disable */
<template>
  <div class="master">
      <Navbar />
      <Detail />
      <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import Detail from '../components/Detail';
import Footer from '../components/Footer';
export default {
  components: {
    Navbar,
    Detail,
    Footer
  },
};
</script>
