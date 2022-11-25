<script>
import DeviceUtil from './assets/js/DeviceUtil'
export default {
  data() {
    return {
      scheme: "niopower://community/topic?id=1"
    }
  },
  methods: {
    submit() {
      if (this.scheme.length == 0) {
        alert('please input shceme!')
        return
      }
      setTimeout(function () {
        window.location.href = "https://www.baidu.com";
      }, 3000)
      window.location.href = this.shceme;

      if (DeviceUtil.android()) {

      } else if (DeviceUtil.ios()) {

      } else if (DeviceUtil.browser()) {

      }
    }
  }
}
</script>

<template>
  <div>
    <div class="div1">
      <p>Scheme:</p>
      <textarea type="text" v-model="scheme" placeholder="scheme://host/path?params" />
    </div>
    <div class="div1">
      <a :href="scheme">open app</a>
    </div>
  </div>
</template>

<style>
div {
  width: 100%;
}

.div1 {
  width: 100%;
  display: flex;
  margin-bottom: 10px;
}

p {
  display: inline;
}

a {
  border: 2px solid rgb(0, 255, 72);
  border-radius: 5px;
  padding: 5px;
  margin: auto;
  width: 50%;
  text-align: center;
}


textarea {
  display: flex;
  flex: 1;
  height: 200px;
  margin-left: 10px;
}
</style>
