export default {

  template: `
      <form @submit.prevent='add_item'>
        <div class='border border-gray-600 text-black flex grow'>
          <input v-model='new_task' placeholder='New task...' class=''/>
          <button type='submit' class='bg-white border-l'>Add</button>
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
