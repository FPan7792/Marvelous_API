module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   mode: 'jit',
   theme: {
      extend: {
         fontFamily: {
            Cabin: ['Cabin Condensed', 'sans-serif'],
            PTSans: ['PT Sans Narrow', 'sans-serif'],
            Andika: ['Andika', 'sans-serif'],
         },
         backgroundImage: {
            'home-bg-main':
               'url(/Users/franck/Desktop/EXOS_REACT/marvelous-api/src/ressources/images/image_accueil_marvel.jpg)',
         },
      },
   },
   plugins: [],
};
