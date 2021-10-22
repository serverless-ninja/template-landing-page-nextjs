import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <>
      <NextSeo title={t('head.title')} description={t('head.description')} />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            {t('main.header.title')}
            &nbsp;
            <button
              type="button"
              className="text-blue-500"
              onClick={() => {
                // eslint-disable-next-line no-alert
                window.alert('With typescript and Jest');
              }}
            >
              {t('main.header.button')}
            </button>
          </h1>
          <div className="mt-3 text-2xl">
            {t('main.subHeader.title')}
            <div className="flex content-between">
              <div className="flex-1 text-blue-500">
                <Link href="/" locale="fr">
                  FR
                </Link>
              </div>
              <div className="flex-1 text-blue-500">
                <button
                  type="button"
                  onClick={async () => {
                    await router.push('/', '/', { locale: 'en' });
                  }}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t">
          <a
            className="flex items-center justify-center"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('footer.title')}
            <Image src="/vercel.svg" alt={t('footer.image.alt')} className="h-4 ml-2" width={72} height={16} />
          </a>
        </footer>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => ({
  props: {
    ...(await serverSideTranslations(context.locale, ['common'])),
  },
});

export default Home;
