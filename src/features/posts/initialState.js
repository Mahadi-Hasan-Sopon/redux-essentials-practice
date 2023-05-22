import { sub } from 'date-fns'
import { nanoid } from '@reduxjs/toolkit'


export const initialState = [
  {
    id: nanoid(),
    title: 'First Post',
    content: 'Hello World!',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    user: '1',
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
  {
    id: nanoid(),
    title: 'React Redux',
    content: 'React Redux Essentials !',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    user: '0',
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
]
