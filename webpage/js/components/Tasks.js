import TaskList from './TaskList.js';

export default {

  template: `
    <section class='space-y-6'>
      <task-list :all_tasks='filters.todo_list' title='todo'/>
      <task-list :all_tasks='filters.done_list' title='done'/>
      <form @submit.prevent='add_item'>
        <div class='border border-gray-600 text-black'>
          <input v-model='new_task' placeholder='New task...' class='p-2'/>
          <button type='submit' class='p-2 bg-white border-l'>Add</button>
        </div>
      </form>
    </section>
  `,

  methods: {
    add_item() {
      this.task_data.push({
        id: this.task_data.length + 1,
        complete: false,
        name: this.new_task,
      });
      this.new_task = '';
    },
  },

  components: {
    'task-list': TaskList,
  },

  computed: {
    filters() {
      return {
        todo_list: this.task_data.filter(task => !task.complete),
        done_list: this.task_data.filter(task => task.complete),
      }
    },
  },

  data() {
    return {
      task_data: [
        { id: 1, complete: false, name: 'Buy wood' },
        { id: 2, complete: false, name: 'Pile up wood' },
        { id: 3, complete: false, name: 'Light wood' },
      ],
      new_task: '',
    }
  },

};
