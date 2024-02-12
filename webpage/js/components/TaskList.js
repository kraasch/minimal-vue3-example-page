import Task from './Task.js';
import TaskTags from './TaskTags.js';

export default {

  components: {
    'task': Task,
    'task-tags': TaskTags,
  },

  template: `
    <section v-show='all_tasks.length'>
      <h2 class='font-bold mb-2'>
        {{ title }}
        <span>
          ({{ all_tasks.length }})
        </span>
      </h2>
      <task-tags :init_tags='all_tasks.map(t => t.tag)' @change='update_tags'/>
      <ul class='border border-gray-600 divide-y divide-gray-600 mt-6'>
        <task 
          v-for='a_task in filtered_tasks'
          :key='a_task.id'
          :task='a_task'
        ></task>
      </ul>
    </section>
  `,

  props: {
    all_tasks: Array,
    title: String,
  },

  data() {
    return {
      show_all: true,
      current_tags: [],
    };
  },

  methods: {
    update_tags(data) {
      this.current_tags = data.current_tags;
      this.show_all = data.show_all;
    },
  },

  computed: {
    filtered_tasks() {
      if (this.show_all) {
        return this.all_tasks;
      } else {
        return this.all_tasks.filter(t => this.current_tags.has(t.tag));
      }
    },
  },

};
