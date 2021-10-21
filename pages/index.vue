<template>
  <div class="">
    <Paragraph />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  async asyncData({ store }) {
    const sharers = await store.dispatch('sharer/getAll')

    console.log(sharers)
  }
}
</script>
