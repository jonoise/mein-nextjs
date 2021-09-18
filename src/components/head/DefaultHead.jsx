import Head from 'next/head'

const DefaultHead = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content={props.type} />
      <meta property="og:url" content={props.url} />
      <meta property="og:image" content={props.image} />
      {props.children}
    </Head>
  )
}

export default DefaultHead
