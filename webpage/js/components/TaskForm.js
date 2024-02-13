export default {

  template: `
      <form @submit.prevent='add_item'>
        <div class='border border-gray-600 text-black flex'>
          <input v-model='new_task' placeholder='New task...' class='w-10 flex-auto'/>
          <button type='submit' class='bg-white border-l w-10'>Add</button>
        </div>
      </form>
  `,

  methods: {
    add_item() {
      this.$emit('myadd', this.new_task);
      this.new_task = '';
    },

  },
  data() {
    return {
      new_task: '',
    }
  },

};
