import { sdk } from '@lib/datocms';
import { homePageDocument, Maybe, SiteLocale } from '@lib/graphql';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { QueryListenerOptions, useQuerySubscription } from 'react-datocms';

export const getStaticProps = async ({ preview, locale }: GetStaticPropsContext) => {
  const formattedLocale = locale?.split('-')[0] as Maybe<SiteLocale>;

  const homePage: QueryListenerOptions<any, Record<string, any>> = preview
    ? {
        query: homePageDocument.loc?.source.body || '',
        initialData: await sdk.homePage({ locale: formattedLocale }),
        token: process.env.NEXT_CMS_DATOCMS_API_TOKEN || '',
        environment: process.env.NEXT_DATOCMS_ENVIRONMENT,
        enabled: true
      }
    : {
        query: homePageDocument.loc?.source.body || '',
        enabled: false,
        initialData: await sdk.homePage({ locale: formattedLocale })
      };

  return {
    props: {
      homePage
    }
  };
};

const Index = ({ homePage }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    data: { homepage }
  } = useQuerySubscription(homePage);

  const { heading } = homepage;

  console.log({ heading });

  return (
    <>
      <NextSeo title="Red Raccoon Digital" description="Raccoon friendly digital world" />
      <div className="flex flex-col flex-grow font-telescope text-3xl">{heading}</div>
    </>
  );
};

export default Index;
