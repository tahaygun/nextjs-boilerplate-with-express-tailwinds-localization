import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t, lang } = useTranslation('common');
  const example = t('hello');

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>{example} there</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>{example}</h1>
    </div>
  );
}
