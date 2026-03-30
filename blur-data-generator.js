import sharp from 'sharp'

const images = [
  'https://dlsxqwz0ptmx4.cloudfront.net/residences/residences-villas-bg.webp',

]

const blurData = {}

for (const url of images) {
  const res = await fetch(url)
  const buffer = Buffer.from(await res.arrayBuffer())

  console.log(url)
  console.log(res.status, res.headers.get('content-type'))
  const blur = await sharp(buffer)
    .resize(20)
    .blur()
    .toBuffer()

  blurData[url] = `data:image/webp;base64,${blur.toString('base64')}`
}

console.log(blurData)
