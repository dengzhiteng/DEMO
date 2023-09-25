<script>
import getData from '../utils/data'
export default {
  async created() {
    
    // this.count = 2000
  },
  data() {
    return {
      count: 100
    }
  },
  async mounted() {
    console.log('mounted')
    // this.count = 200
    // this.$nextTick(() => {
    //   console.log(this.$refs.h1.innerHTML)
    // })
    await this.$nextTick()
    console.log(this.$refs.h1.innerHTML)

    let result = await getData()
    this.count = result
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
  updated() {
    console.log('updated', this.count)
  },
}
</script>

<template>
  <div class="about">
    <h1 ref="h1">{{count}}</h1>
  </div>
</template>
