import Tasks from './Tasks.js';

export default {

  template: `
    <div class='h-screen w-screen bg-gray-800 text-white grid place-items-center'>
      <div class='grid gap-6'>
        <tasks/>
        <div class='bg-gray-700 p4 border border-gray-600 rounded-lg'>
          <h2 class='font-bold'>Hello World</h2>
        </div>
      </div>
    </div>
  `,

  components: {
    'tasks': Tasks,
  },

};
