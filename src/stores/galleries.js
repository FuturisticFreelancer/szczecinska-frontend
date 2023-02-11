import { defineStore } from 'pinia'

export const useGalleriesStore = defineStore('galleries', {
  state: () => ({
    list: [
      {
        id: 'a0',
        name: 'Ala',
        text: 'Ala ma kota',
        year: 1991,
        month: 9,
        day: 10,
        created_at: Date(),
        updated_at: Date(),
        image: 'Path/To/Image',
        images: []
      },
      {
        id: 'a1',
        name: 'Kot',
        text: 'Kot ma Alę',
        year: 1991,
        month: 9,
        day: 10,
        created_at: Date(),
        updated_at: Date(),
        image: 'Path/To/Image',
        images: []
      },
      {
        id: 'a2',
        name: 'Ala',
        text: 'Ala ma kota',
        year: 1992,
        month: 9,
        day: 10,
        created_at: Date(),
        updated_at: Date(),
        image: 'Path/To/Image',
        images: []
      },
      {
        id: 'a3',
        name: 'Ala',
        text: 'Ala ma kota',
        year: 1993,
        month: 9,
        day: 10,
        created_at: Date(),
        updated_at: Date(),
        image: 'Path/To/Image',
        images: []
      }
    ]
  }),
  getters: {
    listOfYears: (state) => {
      let years = [];
      state.list.forEach(gallery => {
        if (!years.includes(gallery.year)) {
          years.push(gallery.year)
        }
      });
      return years;
    }
  }
})

