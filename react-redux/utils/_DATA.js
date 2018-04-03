import axios from 'axios';
let users = {
  sarah_edo: {
    id: 'sarah_edo',
    name: 'Sarah Drasner',
    avatarURL: 'https://tylermcginnis.com/would-you-rather/sarah.jpg',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'a',
      "6ni6ok3ym7mf1p33lnez": 'a',
      "am8ehyc8byjqgar0jgpub9": 'b',
      "loxhs1bqm25b708cmbf3g": 'd'
    },
    polls: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: 'https://tylermcginnis.com/would-you-rather/tyler.jpg',
    answers: {
      "vthrdm985a262al8qx3do": 'a',
      "xj352vofupe1dqz9emx13r": 'a',
    },
    polls: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  dan_abramov: {
    id: 'dan_abramov',
    name: 'Dan Abramov',
    avatarURL: 'https://tylermcginnis.com/would-you-rather/dan.jpg',
    answers: {
      "xj352vofupe1dqz9emx13r": 'a',
      "vthrdm985a262al8qx3do": 'd',
      "6ni6ok3ym7mf1p33lnez": 'd'
    },
    polls: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

export function getCategories(name) {
    return new Promise((res, rej) => {
        let url = '/api/category/' + name;
        return axios.get(url).then(({data}) => res(data)).catch(err => rej(err));
    })
}
