<template>
  <div class="new-note">
    <label>Title</label>
    <input v-model="note.title" type="text" />
    <label>Priority selection</label>
    <select v-model="note.color">
      <option v-for="(priority, index) in priorities" :key="index" :value="priority.color">{{ priority.value }}</option>
    </select>
    <label>Description</label>
    <textarea v-model="note.descr"></textarea>
    <button class="btn btnPrimary" @click="addNote">New Note</button>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },

    priorities: {
      type: Object,
      required: true,
    },

    selected: {
      type: String,
      required: true
    }
  },

  methods: {
    addNote() {
      this.$emit('add-note', this.note)
    },
  },
}
</script>

<style lang="scss">
.new-note {
  text-align: center;
}
</style>
