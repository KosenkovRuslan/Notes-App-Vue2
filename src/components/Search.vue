<template>
  <div class="wrapper__search">
    <!-- Search -->
    <div class="search">
      <div class="search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          height="25px"
          id="Layer_1"
          style="enable-background: new 0 0 512 512"
          version="1.1"
          viewBox="0 0 512 512"
          width="25px"
          xml:space="preserve"
        >
          <path
            d="M448.3,424.7L335,311.3c20.8-26,33.3-59.1,33.3-95.1c0-84.1-68.1-152.2-152-152.2c-84,0-152,68.2-152,152.2  s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L425,448L448.3,424.7z M120.1,312.6c-25.7-25.7-39.8-59.9-39.8-96.3  s14.2-70.6,39.8-96.3S180,80,216.3,80c36.3,0,70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3  c-25.7,25.7-59.9,39.9-96.2,39.9C180,352.5,145.8,338.3,120.1,312.6z"
          />
        </svg>
      </div>
    </div>

    <!-- Search input -->
    <input type="text" :placeholder="placeholder" v-model="search" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Search',
    },
  },

  data() {
    return {
      search: this.value,
    }
  },

  watch: {
    search(val) {
      this.$emit('search', val)
      // console.log(val);
    },
  },
}
</script>

<style lang="scss">
.wrapper__search {
  position: relative;
  width: 40%;
  input {
    margin-bottom: 0;
    padding-left: 46px;
  }
}

.search {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 20px;
}
</style>
