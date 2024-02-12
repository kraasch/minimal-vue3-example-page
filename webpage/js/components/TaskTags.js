
export default {

  template: `
      <div class='flex gap-2'>
        <button
          @click='toggle_tag(a_tag)'
          v-for='a_tag in all_tags' 
          class='border rounded px-1 py-px text-xs'
          :class="{'border-blue-500 text-blue-500' : is_active_tag(a_tag)}"
        >{{ a_tag }}</button>
      </div>
      `,

  props: {
    init_tags: Array,
  },

  computed: {
    all_tags() {
      return new Set(['all', ...this.init_tags]);
    },
  },

  data() {
    return {
      current_tags: new Set(),
      show_all: true,
    };
  },

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
          // if last tag was deactivated re-activate all.
          if (this.current_tags.size <= 0) {
            this.show_all = true;
          }
        } else {
          this.current_tags.add(tag);
          this.show_all = false;
        }
      }
      let data = {
        'current_tags': this.current_tags,
        'show_all': this.show_all,
      };
      this.$emit('change', data);
    },
  },

}
