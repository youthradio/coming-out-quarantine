/* eslint-disable no-console */
import ArticleData from './data/data.json'
const content = ArticleData.content[0]

const BASEURL = process.env.BASE_URL_PRODUCTION || '/coming-out-quarantine'
const CAN_URL =
  process.env.BASE_URL_PRODUCTION === ''
    ? `https://youthradio.github.io${BASEURL}`
    : `https://interactive.yr.media${BASEURL}`

console.log(`BASEURL ${BASEURL}`)
console.log(`CAN_URL ${CAN_URL}`)

const POSTCONFIG = {
  baseURL: BASEURL,
  title: content.headline,
  author: content.author,
  publishDate: content.date,
  location: content.location,
  description: content.seo_description || '',
  tweetMessage: '@itsyrmedia',
  url: CAN_URL,
  featureImage: `${CAN_URL}/YR-YRM-210322-ComingOut-header.jpg`,

  featureImagePath: 'images/template-feature-image',
  featureImageDescription: 'People Protesting BLM',
  featureImageCaption: '(Photo: Andersen Ross Photography Inc/Getty Images)',

  wpPostSlug: 'north-carolina-vs-vaping-companies',
  wpPostID: '60986',
  // you might not need to change
  fbAppID: '73080818131',
  twitterHandler: '@itsyrmedia',
  docs: [
    {
      name: 'Coming Out Quarentine - backend',
      id: '17Pi6frDqKrzIzHIrTkRnEuSPhH1xqn3eRP_FJSa7Pwc',
    },
  ],
  dataPath: '../data/data.json',
  POLLSERVER: 'https://ee51aej7u4.execute-api.us-west-2.amazonaws.com/latest',
  POLLID: '6ac25af7-19bf-4888-a068-9be292bd37fa',
}

export default POSTCONFIG
