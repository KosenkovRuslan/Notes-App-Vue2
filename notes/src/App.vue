<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <!-- TODO message -->
          <message v-if="message" :message="message" />

          <!-- TODO New note -->
          <newNote
            :note="note"
            :priorities="priorities"
            @add-note="addNote"
          />

          <div class="note-header" style="margin: 36px 0">
            <!-- TODO title -->
            <h1>{{ title }}</h1>

            <!-- TODO search -->
            <search
              :value="search"
              @search="search = $event"
              placeholder="Найти записи"
            />

            <!-- TODO icons controls -->
            <div class="icons">
              <svg
                :class="{ active: grid }"
                @click="grid = true"
                xmlns="http://www.w3.org/2000/svg"
                style="
                  width: 24px;
                  height: 24px;
                  vertical-align: middle;
                  fill: currentColor;
                  overflow: hidden;
                "
                viewBox="0 0 1024 1024"
                version="1.1"
              >
                <path
                  d="M426.666667 469.333333 42.666667 469.333333c-25.6 0-42.666667-17.066667-42.666667-42.666667L0 42.666667c0-25.6 17.066667-42.666667 42.666667-42.666667l384 0c25.6 0 42.666667 17.066667 42.666667 42.666667l0 384C469.333333 452.266667 452.266667 469.333333 426.666667 469.333333zM85.333333 384l298.666667 0L384 85.333333 85.333333 85.333333 85.333333 384z"
                />
                <path
                  d="M981.333333 469.333333l-384 0c-25.6 0-42.666667-17.066667-42.666667-42.666667L554.666667 42.666667c0-25.6 17.066667-42.666667 42.666667-42.666667l384 0c25.6 0 42.666667 17.066667 42.666667 42.666667l0 384C1024 452.266667 1006.933333 469.333333 981.333333 469.333333zM640 384l298.666667 0L938.666667 85.333333l-298.666667 0L640 384z"
                />
                <path
                  d="M426.666667 1024 42.666667 1024c-25.6 0-42.666667-17.066667-42.666667-42.666667l0-384c0-25.6 17.066667-42.666667 42.666667-42.666667l384 0c25.6 0 42.666667 17.066667 42.666667 42.666667l0 384C469.333333 1006.933333 452.266667 1024 426.666667 1024zM85.333333 938.666667l298.666667 0 0-298.666667L85.333333 640 85.333333 938.666667z"
                />
                <path
                  d="M981.333333 1024l-384 0c-25.6 0-42.666667-17.066667-42.666667-42.666667l0-384c0-25.6 17.066667-42.666667 42.666667-42.666667l384 0c25.6 0 42.666667 17.066667 42.666667 42.666667l0 384C1024 1006.933333 1006.933333 1024 981.333333 1024zM640 938.666667l298.666667 0 0-298.666667-298.666667 0L640 938.666667z"
                />
              </svg>
              <svg
                :class="{ active: !grid }"
                @click="grid = false"
                xmlns="http://www.w3.org/2000/svg"
                style="
                  width: 24px;
                  height: 24px;
                  vertical-align: middle;
                  fill: currentColor;
                  overflow: hidden;
                "
                viewBox="0 0 1024 1024"
                version="1.1"
              >
                <path
                  d="M280.3 181.3h708.8v93.09H280.3zM173.05 297.67H36.41c-0.83 0-1.5-0.67-1.5-1.5V159.53c0-0.83 0.67-1.5 1.5-1.5h136.64c0.83 0 1.5 0.67 1.5 1.5v136.64c0 0.83-0.68 1.5-1.5 1.5zM280.3 478.78h708.8v93.09H280.3zM173.05 595.14H36.41c-0.83 0-1.5-0.67-1.5-1.5V457.01c0-0.83 0.67-1.5 1.5-1.5h136.64c0.83 0 1.5 0.67 1.5 1.5v136.64c0 0.82-0.68 1.49-1.5 1.49z"
                />
                <path
                  d="M280.3 776.26h708.8v93.09H280.3zM173.05 892.62H36.41c-0.83 0-1.5-0.67-1.5-1.5V754.48c0-0.83 0.67-1.5 1.5-1.5h136.64c0.83 0 1.5 0.67 1.5 1.5v136.64c0 0.83-0.68 1.5-1.5 1.5z"
                />
              </svg>
            </div>
          </div>

          <!-- TODO Note list -->
          <notes
            :notes="notesFiltered"
            :grid="grid"
            :color="selected"
            @remove-note="removeNote"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import message from '@/components/Message.vue'
import notes from '@/components/Notes.vue'
import newNote from '@/components/NewNote.vue'
import search from '@/components/Search.vue'
export default {
  name: 'App',
  components: {
    message,
    notes,
    newNote,
    search,
  },
  data() {
    return {
      title: 'Notes App',
      search: '',
      message: null,
      grid: true,
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

      priorities: {
        standart: {
          value: 'Standart',
          color: '#fff',
        },
        important: {
          value: 'Important',
          color: 'yellow',
        },
        veryImportant: {
          value: 'Very important',
          color: 'red',
        },
      },
    }
  },

  computed: {
    notesFiltered() {
      let array = this.notes,
        search = this.search

      if (!search) {
        return array
      }

      // Small
      search = search.trim().toLowerCase()

      // Filtered
      array = array.filter((item) => !item.title.toLowerCase().indexOf(search))

      // Error
      return array
    },
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

    removeNote(index) {
      this.notes.splice(index, 1)
    },
  },
}
</script>

<style></style>
