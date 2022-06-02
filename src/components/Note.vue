<template>
  <div
    class="note"
    :style="{ background: note.color }"
    :class="{ full: !grid }"
  >
    <div class="note-header" :class="{ full: !grid }">
      <p @click="editing = true" v-if="!editing">{{ note.title }}</p>
      <input
        type="text"
        v-if="editing"
        :value="note.title"
        @keydown.enter="editTitle($event)"
        @keydown.esc="cancelEdit"
        @blur="cancelEdit"
      />
      <p style="cursor: pointer" @click="removeNote">x</p>
    </div>
    <div class="note-body">
      <p>{{ note.descr }}</p>
      <span> {{ note.date }} </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    grid: {
      type: Boolean,
      required: true,
    },
    note: {
      type: Object,
      required: true,
    }
  },

  data() {
    return {
      editing: false,
    }
  },

  methods: {
    removeNote() {
      this.$emit('remove-note')
    },

    editTitle(event) {
      this.note.title = event.target.value
      this.editing = false
    },

    cancelEdit() {
      this.editing = false
    },
  },
}
</script>

<style lang="scss">
.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #fff;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s;
  }
  &.full {
    width: 100%;
    text-align: center;
  }
}

.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 32px;
  }

  p {
    font-size: 22px;
    color: rgb(58, 23, 116);
  }

  svg {
    margin-right: 12px;
    color: #999;
    cursor: pointer;
    &.active {
      color: rgb(44, 35, 172);
    }
    &:last-child {
      margin-right: 0;
    }
  }

  &.full {
    justify-content: center;
    p {
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  input {
    width: auto;
    // border: none;
    // background: transparent;
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    font-size: 22px;
    color: rgb(58, 23, 116);
    // padding: 0;
    margin: 0;
  }
}

.note-body {
  p {
    margin: 20px 0;
  }

  span {
    font-size: 14px;
    color: #999;
  }
}
</style>
