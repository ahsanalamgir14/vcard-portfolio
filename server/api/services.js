import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Laravel',
      description: {
        en: 'I build modern and advanced websites and applications with Laravel, the PHP framework.',
        tr: 'PHP frameworkü olan Laravel ile modern ve gelişmiş web siteleri ve uygulamaları yapıyorum.',
      },
      icon: 'logo-laravel',
      image: null,
    },
    {
      id: 2,
      title: 'Vue JS',
      description: {
        en: 'I use VueJS, a modern JavaScript framework, while making dynamic and static websites and applications.',
        tr: 'Dinamik ve statik web site ve uygulamaları yaparken modern JavaScript framework olan VueJS kullanıyorum.',
      },
      icon: 'logo-vue',
      image: null,
    },
    {
      id: 3,
      title: 'Angular',
      description: {
        en: 'I use Angular, a modern JavaScript framework, while making dynamic and static websites and applications.',
        tr: 'Dinamik ve statik web site ve uygulamaları yaparken modern JavaScript framework olan VueJS kullanıyorum.',
      },
      icon: 'logo-angular',
      image: null,
    },
    {
      id: 4,
      title: 'React Js',
      description: {
        en: 'I use React JS, a modern JavaScript framework, while making dynamic and static websites and applications.',
        tr: 'Dinamik ve statik web site ve uygulamaları yaparken modern JavaScript framework olan VueJS kullanıyorum.',
      },
      icon: 'logo-react',
      image: null,
    },
    {
      id: 4,
      title: 'Node Js',
      description: {
        en: 'I use Node.js, a modern JavaScript framework, while making dynamic and static websites and applications.',
        tr: 'Dinamik ve statik web site ve uygulamaları yaparken modern JavaScript framework olan VueJS kullanıyorum.',
      },
      icon: 'logo-nodejs',
      image: null,
    },
    // {
    //   id: 5,
    //   title: 'Next Js',
    //   description: {
    //     en: 'I use React JS, a modern JavaScript framework, while making dynamic and static websites and applications.',
    //     tr: 'Dinamik ve statik web site ve uygulamaları yaparken modern JavaScript framework olan VueJS kullanıyorum.',
    //   },
    //   icon: 'logo-next',
    //   image: null,
    // },
    // {
    //   id: 6,
    //   title: 'Nuxt Js',
    //   description: {
    //     en: 'I use Nuxt JS, a modern JavaScript framework, while making dynamic and static websites and applications.',
    //     tr: 'Dinamik ve statik web site ve uygulamaları yaparken modern JavaScript framework olan VueJS kullanıyorum.',
    //   },
    //   icon: 'logo-nuxt',
    //   image: null,
    // },
  ]
})
