import Head from 'next/head'
import { useTranslations } from 'next-intl';
import FlightRoutes from '../../organisms/flight-routes';
import {createURL} from '../../utils/helper'; 
import {APP_ENV} from '../../utils/constants';

export default function PageFlightRoutes(props) {
  const {routes, pageName} = props;
  const t = useTranslations('content');
  return (
    <>
    <Head>
      <title>{t("common.title")} | {t(`${pageName}.title`)}</title>
    </Head>
    <FlightRoutes routes={routes} pageName={pageName}/>
    </>
  )
};

PageFlightRoutes.getInitialProps = async function getInitialProps(ctx) {

  const {locale} = ctx;
  const pageName = ctx.pathname?.replace('/','');
  const apiRoutesEndpoint = APP_ENV.API_ROUTES_ENDPOINT || '/api/routes/flight-routes';
  const apiRoutesEndpointUrl = createURL(apiRoutesEndpoint);
  console.log('getinitialprops',apiRoutesEndpointUrl);
  const flightRoutesRes = await fetch(apiRoutesEndpointUrl);
  const flightRoutes = await flightRoutesRes.json();
  ctx.appData = flightRoutes.data?.flightRouteResponse?.routes;
  const messages = require(`../../locales/${locale}.json`);
  ctx.messages = messages;
  return( {
          routes: ctx.appData,
          messages,
          pageName
      }
  )
}

/*
export async function getServerSideProps(ctx) {
  const apiRoutesEndpoint = APP_ENV.API_ROUTES_ENDPOINT || '/api/routes/flight-routes';
  const apiRoutesEndpointUrl = createURL(apiRoutesEndpoint);
  console.log('getinitialprops',apiRoutesEndpointUrl);
  const flightRoutesRes = await fetch(apiRoutesEndpointUrl);
  const flightRoutes = await flightRoutesRes.json();
  ctx.appData = flightRoutes.data?.flightRouteResponse?.routes;
  return( {
          routes: ctx.appData
      }
  )
}
*/