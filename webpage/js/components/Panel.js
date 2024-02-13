export default {

  template: `
     <div 
      :class="{
        'p-4 border rounded-lg' : true,
        'bg-gray-300 text-black border-gray-300' : theme === 'light',
        'bg-gray-700 text-white border-gray-600' : theme === 'dark',
      }"
    >
       <h2 
        v-if='$slots.heading' 
        class='font-bold mb-2'
      >
         <slot name='heading'/>
       </h2>
       <slot name='default'/>
       <footer 
        v-if='$slots.footer' 
        class='font-italic text-xs text-center divide-y divide-white divide-dashed'
      >
        <div class='pt-2'></div>
        <div class='p-2'>
          <slot name='footer'/>
        </div>
       </footer>
     </div>
  `,

  props: {
    heading: String,
    theme: {
      type: String,
      default: 'dark'
    }
  },

};
