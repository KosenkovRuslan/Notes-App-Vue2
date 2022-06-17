export default {
  state: {
    notes: [
      {
        title: 'First Note',
        descr: 'Description for first Note',
        date: new Date(Date.now()).toLocaleString(),
        color: '#fff'
      },
      {
        title: 'Second Note',
        descr: 'Description for second Note',
        date: new Date(Date.now()).toLocaleString(),
        color: 'yellow'
      },
      {
        title: 'Third Note',
        descr: 'Description for third Note',
        date: new Date(Date.now()).toLocaleString(),
        color: 'red'
      },
    ],
  },
  mutations: {
    addNote(state, payload) {
      state.notes.push(payload)
    }
  },
  actions: {
    addNote({ commit }, payload) {
      commit(this.addNote, payload)
    }
  },
  getters: {
    getNotes(state) {
      return state.notes
    }
  }
}