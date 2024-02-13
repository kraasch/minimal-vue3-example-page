import TaskList from './TaskList.js';
import TaskForm from './TaskForm.js';

export default {

  template: `
    <section class='space-y-6'>
      <task-list :all_tasks='filters.todo_list' title='todo'/>
      <task-list :all_tasks='filters.done_list' title='done'/>
      <task-form @myadd='add_item'/>
    </section>
  `,

  methods: {
    add_item(new_item) {
      this.task_data.push({
        id: this.task_data.length + 1,
        complete: false,
        name: new_item,
        tag: 'new',
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

  created() {
    let url = 'http://localhost:3002/tasks';
    fetch(url)
      .then(response => response.json())
      .then(data => this.task_data.push(...data));
  },

  data() {
    return {
      task_data: [
      ],
    }
  },

};
