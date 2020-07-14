<template>
  <div>
    <button v-asyncClick="{ event: confirm}">btn</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods:{
      async confirm(){
          const a = new Promise(r=>{
              console.log(1111111111);
              setTimeout(() => {
                  r()
              }, 2000);
          })
          await a
      }
  }
}
</script>

<style lang="postcss" scoped></style>
