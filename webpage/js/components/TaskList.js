import Task from './Task.js';

export default {

  template: `
    <section v-show='all_tasks.length'>
      <h2 class='font-bold mb-2'>
        {{ title }}
        <span>
          ({{ all_tasks.length }})
        </span>
      </h2>
      <div class='flex gap-2'>
        <button
          @click='toggle_tag(a_tag)'
          v-for='a_tag in list_tags' 
          class='border rounded px-1 py-px text-xs'
          :class="{'border-blue-500 text-blue-500' : is_active_tag(a_tag)}"
        >{{ a_tag }}</button>
      </div>
      <ul class='border border-gray-600 divide-y divide-gray-600 mt-6'>
        <task 
          v-for='a_task in filtered_tasks'
          :key='a_task.id'
          :task='a_task'
        ></task>
      </ul>
    </section>
  `,

  methods: {
    is_active_tag(tag) {
      if (tag === 'all') {
        return this.show_all;
      } else {
        return this.current_tags.has(tag);
      }
    },
    toggle_tag(tag) {
      if (tag === 'all') {
        this.show_all = !this.show_all;
        this.current_tags.clear();
      } else {
        if (this.is_active_tag(tag)) {
          this.current_tags.delete(tag);
        } else {
          this.current_tags.add(tag);
          this.show_all = false;
        }
      }
    },
  },

  computed: {
    list_tags() {
      return ['all', ...new Set(this.all_tasks.map(t => t.tag))];
    },
    filtered_tasks() {
      if (this.show_all) {
        return this.all_tasks;
      } else {
        return this.all_tasks.filter(t => this.current_tags.has(t.tag))
      }
    },
  },

  components: {
    'task': Task,
  },

  data() {
    return {
      current_tags: new Set(),
      show_all: true,
    };
  },

  props: {
    all_tasks: Array,
    title: String,
  },

};
