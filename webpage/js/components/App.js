import Tasks from './Tasks.js';
import Panel from './Panel.js';

export default {

  template: `
    <div class='h-screen w-screen bg-gray-800 text-white grid place-items-center'>
      <div class='grid gap-6'>

        <tasks/>

        <panel>
          How are you doing?
          <template #footer>
            This is the end, my friend.
          </template>
        </panel>

        <panel theme='light'>
          <template #heading>
            Hello World!
          </template>
          How are you doing?
          <template #footer>
            This is the end, my friend.
          </template>
        </panel>

        <panel>
          <template #heading>
            Hello World!
          </template>
          How are you doing?
        </panel>

      </div>
    </div>
  `,

  components: {
    'tasks': Tasks,
    'panel': Panel,
  },

};
