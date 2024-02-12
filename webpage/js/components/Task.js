export default {

  template: `
    <li>
      <label>
        <input type='checkbox' v-model='task.complete'>
        {{ task.name }}
      </label>
    </li>
  `,

  props: {
    task: Object,
  },

};
