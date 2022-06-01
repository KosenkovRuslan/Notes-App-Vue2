<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <h1>{{ title }}</h1>

          <message v-if="message" :message="message" />

          <!-- TODO New note -->
          <newNote 
            :note="note" 
            @add-note="addNote"
          /> 

          <!-- TODO Note list -->
          <div class="notes">
            <div class="note" v-for="(note, index) in notes" :key="index">
              <div class="note-header">
                <p>{{ note.title }}</p>
              </div>
              <div class="note-body">
                <p>{{ note.descr }}</p>
                <span> {{ note.date }} </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import message from '@/components/Message.vue'
import newNote from '@/components/NewNote.vue'
export default {
  name: 'App',
  components: {
    message, newNote
  },
  data() {
    return {
      title: 'Notes App',
      message: null,
      note: {
        title: '',
        descr: '',
      },
      notes: [
        {
          title: 'First Note',
          descr: 'Description for first Note',
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: 'Second Note',
          descr: 'Description for second Note',
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: 'Third Note',
          descr: 'Description for third Note',
          date: new Date(Date.now()).toLocaleString(),
        },
      ],
    }
  },

  methods: {
    //TODO Adding new note with validation
    addNote() {
      const { title, descr } = this.note

      if (title === '') {
        this.message = 'Заголовок не может быть пустым'
        return false
      }

      this.notes.push({
        title,
        descr,
        date: new Date(Date.now()).toLocaleString(),
      })

      this.message = null
      this.note.title = ''
      this.note.descr = ''
    },
  },
}
</script>

<style></style>
