export const createConfig = (src = '', dest = '') => ({
  src,
  dest,
  ignored: [],
  sitemap: {
    hostname: 'https://foo.com'
  },
  favicons: {},
  chokidar: {},
  browsersync: {}
})

export const createPage = (isIndex, embed) =>
!isIndex
? {
  inherit: true,
  body: bodyUnique(embed)
}
: {
  lang: '',
  inherit: false,
  head: {
    title: '',
    og: false,
    ga: '',
    tags: []
  },
  body: Object.assign({ background: 'silver', color: '#ffffff' }, bodyUnique(embed))
}

const bodyUnique = ({ title, hub, hub2 } = {}) => ({
  header: {
    image: 'https://imgplaceholder.com/150x150/f3f3f3/c0c0c0/glyphicon-picture?font-size=90',
    title: title || '{ title }',
    description: '{ description }'
  },
  links: !hub
  ? [ link() ]
  : [ link({ title: 'title' }), link({ hub: hub }), link({ title: 'title', hub: hub2 || hub }) ]
})

const link = ({ title = '', hub = '' } = {}) => ({
  title: title,
  href: 'https://github.com/',
  image: 'https://image.flaticon.com/icons/svg/25/25231.svg',
  hub: hub
})