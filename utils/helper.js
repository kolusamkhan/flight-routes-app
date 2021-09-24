import dateFormat from "./datetime";
import { APP_ENV, LANG_DIRECTION } from './constants';


const format = (date) => {
    if (!date)
        return '-';
    const newDate = new Date(date);
    return dateFormat(newDate, "fullDate");
}
export const createURL = (relativeUrl) => {
    return `${APP_ENV.APP_PROTOCOLO}://${APP_ENV.APP_HOST}:${APP_ENV.APP_PORT}/${relativeUrl}`;
}
export default format;

export const getLanguageDirection = locale => {
    if (!locale)
        return LANG_DIRECTION.LTR;

    const localeItems = locale.split("-");
    const localLanguage = localeItems[0];
    if (!localLanguage)
        return LANG_DIRECTION.LTR;

    const rltLanguages = process.env.RTL_LANGUAGE_CODES || 'ar,ku,ur,fa,he';
    const rtlLanguagesItems = rltLanguages.split(",");
    if (rtlLanguagesItems.includes(localLanguage))
        return LANG_DIRECTION.RTL;
    return LANG_DIRECTION.LTR;
}

export const getMessageContent = (props) =>{
    return props?.__NEXT_DATA__?.props?.pageProps?.messages?.content;
}

export const getPageName = (props) =>{

    const pageName = props?.__NEXT_DATA__?.page;
    if(!pageName)
        return pageName;
    return (pageName?.replace("/",""));
}
