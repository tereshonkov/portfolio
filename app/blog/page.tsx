import FormComment from '@/components/FormComment/FormComment'
import Head from 'next/head'


export default async function Blog() {

  return (
    <>
        <Head>
            <title>Blog</title>
            <meta name="description" content="Blog" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    
        <FormComment />
    </>
  )
}

