import Tasks from './Tasks.js';

export default {

  template: `
    <div class='h-screen w-screen bg-gray-800 text-white grid place-items-center'>
      <tasks/>
    </div>
  `,

  components: {
    'tasks': Tasks,
  },

};
