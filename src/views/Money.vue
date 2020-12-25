<template>

  <Layout class-prefix="layout">
    <Numbers/>
    <Types :xxx ='333'/>
    <Notes/>
    <Tags/>
  </Layout>

</template>



<script lang="ts">
import Numbers from '@/components/Money/Numbers.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';

export default {
  name: 'Money',
  components: {Tags, Notes, Types, Numbers},
};
</script>




<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse
}
</style>


