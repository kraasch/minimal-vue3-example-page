import Task from './Task.js';
import TaskTags from './TaskTags.js';

export default {

  components: {
    'task': Task,
    'task-tags': TaskTags,
  },

  template: `
    <section v-show='! is_hidden && all_tasks.length' class='w-60'>
      <div class='flex justify-between items-start'>
        <h2 class='font-bold mb-2'>
          {{ title }}
          <span>
            ({{ all_tasks.length }})
          </span>
        </h2>
        <button @click='is_hidden=true' v-show='can_hide'>&times;</button>
      </div>
      <task-tags 
        :init_tags='all_tasks.map(t => t.tag)' 
        v-model:current_tags='current_tags'
        v-model:show_all='show_all'
      />
      <ul class='border border-gray-600 divide-y divide-gray-600 mt-6'>
        <task 
          v-for='a_task in filtered_tasks'
          :key='a_task.id'
          :task='a_task'
        ></task>
      </ul>
      <slot/>
    </section>
  `,

  props: {
    all_tasks: Array,
    title: String,
    can_hide: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      is_hidden: false,
      show_all: true,
      current_tags: new Set(),
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
