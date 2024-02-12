import Task from './Task.js';

export default {

  template: `
    <section v-show='all_tasks.length'>
      <h2 class='font-bold mb-2'>{{ title }}</h2>
      <ul>
        <task 
          v-for='a_task in all_tasks'
          :key='a_task.id'
          :task='a_task'
        ></task>
      </ul>
    </section>
  `,

  components: {
    'task': Task,
  },

  props: {
    all_tasks: Array,
    title: String,
  },

};
