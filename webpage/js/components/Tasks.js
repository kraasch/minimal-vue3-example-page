import TaskList from './TaskList.js';
import TaskForm from './TaskForm.js';

export default {

  template: `
    <section class='space-y-6'>
      <task-list :all_tasks='filters.todo_list' title='todo'/>
      <task-list :all_tasks='filters.done_list' title='done'/>
      <task-form/>
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
    'task-form': TaskForm,
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
    }
  },

};
