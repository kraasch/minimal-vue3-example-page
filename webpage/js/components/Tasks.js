import TaskList from './TaskList.js';

export default {

  template: `
    <section class='space-y-6'>
      <task-list :all_tasks='filters.todo_list' title='todo'/>
      <task-list :all_tasks='filters.done_list' title='done'/>
    </section>
  `,

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
    }
  },

};
