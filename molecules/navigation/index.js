import { useTranslations } from 'next-intl';

import styles from './navigation.module.scss';
export default function Navigation() {
    const t = useTranslations('content');
    return (
        <>
            <div className={styles.header_container}>
                <header>
                    <div className={styles.logo}>
                        <svg height="512" viewBox="0 0 511.059 511.059" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m301.323 448.669c11.661 0 22.113 5.15 29.228 13.291 10.195-25.956 35.459-44.341 65.033-44.341 38.585 0 69.864 31.279 69.864 69.864h-202.938c0-21.437 17.377-38.814 38.813-38.814z" fill="#d3e1f5" /><path d="m301.32 448.672c7.138 0 13.822 1.926 19.559 5.294-3.625 4.882-6.623 10.259-8.878 16.006-7.107-8.147-17.561-13.297-29.221-13.297-1.885 0-3.739.134-5.562.391 6.623-5.253 14.997-8.394 24.102-8.394z" fill="#c0d6f2" /><path d="m465.448 487.481h-19.003c-3.976-34.813-33.526-61.851-69.411-61.851-6.252 0-12.319.824-18.086 2.369 10.65-6.592 23.195-10.382 36.637-10.382 38.582.001 69.863 31.281 69.863 69.864z" fill="#c0d6f2" /><path d="m163.86 85.987c-8.769 0-16.629 3.873-21.98 9.995-7.667-19.519-26.665-33.345-48.905-33.345-29.016 0-52.538 23.522-52.538 52.538h152.611c0-16.121-13.068-29.188-29.188-29.188z" fill="#d3e1f5" /><path d="m140.808 93.472c-7.622.731-14.379 4.398-19.137 9.857-7.674-19.529-26.667-33.351-48.914-33.351-2.534 0-5.026.175-7.457.525 8.034-4.985 17.52-7.869 27.676-7.869 21.268 0 39.581 12.659 47.832 30.838z" fill="#c0d6f2" /><path d="m193.048 115.174h-21.146c-3.193-12.298-14.183-21.444-27.387-21.825 5.15-4.584 11.917-7.364 19.343-7.364 16.12-.001 29.19 13.069 29.19 29.189z" fill="#c0d6f2" /><path d="m363.649 39.202c8.769 0 16.629 3.873 21.98 9.995 7.667-19.519 26.665-33.345 48.905-33.345 29.016 0 52.538 23.522 52.538 52.538h-152.611c0-16.12 13.068-29.188 29.188-29.188z" fill="#d3e1f5" /><path d="m363.644 39.202c5.459 0 10.557 1.493 14.924 4.11-3.873 4.47-7.004 9.589-9.198 15.192-5.356-6.118-13.215-9.991-21.98-9.991-1.916 0-3.79.185-5.603.546 5.336-6.046 13.154-9.857 21.857-9.857z" fill="#c0d6f2" /><path d="m487.077 68.392h-17.087c-4.398-24.576-25.873-43.229-51.715-43.229-6.139 0-12.03 1.051-17.51 2.997 9.126-7.684 20.909-12.308 33.773-12.308 29.015 0 52.539 23.525 52.539 52.54z" fill="#c0d6f2" /><g><path d="m487.072 495.207h-246.186c-4.266 0-7.725-3.458-7.725-7.725s3.459-7.725 7.725-7.725h246.186c4.266 0 7.725 3.458 7.725 7.725s-3.459 7.725-7.725 7.725z" fill="#98bce5" /></g><g><path d="m209.31 122.899h-185.135c-4.266 0-7.725-3.458-7.725-7.725s3.459-7.725 7.725-7.725h185.135c4.266 0 7.725 3.458 7.725 7.725s-3.458 7.725-7.725 7.725z" fill="#98bce5" /></g><g><path d="m503.334 76.115h-185.135c-4.266 0-7.725-3.458-7.725-7.725s3.459-7.725 7.725-7.725h185.135c4.266 0 7.725 3.458 7.725 7.725s-3.459 7.725-7.725 7.725z" fill="#98bce5" /></g></g><path d="m318.131 220.24-69.292-59.207h-48.904l64.309 70.96 29.142 4.163z" fill="#fccd7f" /><path d="m318.132 220.24-24.522 5.348-55.77-47.646h-22.578l-15.325-16.905h48.903z" fill="#e9b665" /><path d="m54.981 294.702-54.981-111.62 44.684 13.745 68.582 68.093-21.421 25.639z" fill="#fccd7f" /><path d="m113.264 264.919-16.5 8.427-56.581-56.175-27.56-8.478-12.621-25.616 44.679 13.745z" fill="#e9b665" /><g fill="#fdf6ec"><path d="m127.728 340.248-52.799-12.779 52.795 12.783s325.627-45.551 325.648-45.554c.071-.01.137-.024.208-.034-.07.01-.136.024-.207.034-.02 0-325.645 45.55-325.645 45.55z" /><path d="m35.413 304.706 8.64-4.416 86.086 20.845s311.607-43.595 311.627-43.595c26.298-3.681 36.476-24.043 46.081-45.565l-103.664 19.045c-.464.085-.926.125-1.382.125-3.595 0-6.79-2.563-7.463-6.225-.758-4.127 1.972-8.086 6.099-8.845l98.184-18.039c-11.247-5.045-27.818-12.195-38.232-15.407-10.458-3.225-21.392-4.606-33.535-1.958-.041.009-294.589 64.248-294.589 64.248l-77.856 39.781c-3.539 2.577-4.046 7.165-2.05 10.423-1.99-3.256-1.483-7.842 2.054-10.417z" /><path d="m500.341 229.956c-.644-.897-1.373-1.735-2.172-2.499 0 0-.001.001-.001.001.799.763 1.528 1.601 2.173 2.498z" /></g><path d="m33.361 315.124c.906 1.481 2.329 2.688 4.22 3.306l37.348 9.039-37.345-9.042c-1.892-.616-3.316-1.822-4.223-3.303z" fill="#fae2c0" /><path d="m500.341 229.956c3.137 4.368 4.285 10.137 1.892 15.523-10.229 23.019-20.68 45.169-48.653 49.186 27.97-4.011 38.421-26.167 48.656-49.183 2.393-5.39 1.244-11.159-1.895-15.526z" fill="#fae2c0" /><path d="m502.232 245.478c2.394-5.385 1.245-11.155-1.892-15.523-.645-.897-1.373-1.734-2.172-2.497-1.084 1.802-2.901 3.153-5.132 3.563l-5.19.953c-9.606 21.522-19.783 41.885-46.081 45.565-.02 0-311.627 43.595-311.627 43.595l-86.086-20.845-8.64 4.416c-3.537 2.576-4.044 7.162-2.052 10.419.907 1.48 2.332 2.686 4.224 3.303l37.345 9.042 52.799 12.779s325.625-45.55 325.646-45.55c.07-.01.137-.024.207-.034 27.972-4.016 38.423-26.167 48.651-49.186z" fill="#fae2c0" /><path d="m479.622 218.037-98.184 18.039c-4.126.759-6.857 4.718-6.099 8.845.673 3.662 3.868 6.225 7.463 6.225.456 0 .917-.041 1.382-.125l103.664-19.045c.228-.511.456-1.022.684-1.534 1.155-2.593 1.448-5.287 1.074-7.85z" fill="#d3e1f5" /><path d="m489.605 222.59c.375 2.563.081 5.257-1.074 7.85-.228.512-.456 1.023-.684 1.534l5.19-.953c2.231-.41 4.048-1.76 5.132-3.563-1.848-1.764-4.072-3.13-6.508-3.906 0 0-.74-.344-2.056-.962z" fill="#c0d6f2" /><g><g><path d="m346.574 257.891c-3.588 0-6.778-2.551-7.46-6.206-.769-4.124 1.952-8.091 6.076-8.86l5.974-1.114c4.127-.771 8.091 1.952 8.86 6.076s-1.952 8.091-6.076 8.86l-5.975 1.114c-.469.088-.938.13-1.399.13z" fill="#d3e1f5" /></g><g><path d="m173.015 290.255c-3.587 0-6.778-2.551-7.46-6.205-.769-4.125 1.951-8.091 6.075-8.861l12.397-2.312c4.126-.773 8.092 1.951 8.861 6.075.769 4.125-1.951 8.091-6.075 8.861l-12.397 2.312c-.47.088-.939.13-1.401.13zm43.39-8.092c-3.587 0-6.778-2.551-7.46-6.205-.769-4.125 1.951-8.091 6.075-8.861l12.397-2.312c4.128-.772 8.091 1.951 8.861 6.075.769 4.125-1.951 8.091-6.075 8.861l-12.397 2.312c-.471.089-.939.13-1.401.13zm43.389-8.09c-3.587 0-6.778-2.551-7.46-6.205-.769-4.125 1.951-8.091 6.075-8.861l12.397-2.312c4.125-.771 8.092 1.951 8.861 6.075.769 4.125-1.951 8.091-6.075 8.861l-12.397 2.312c-.47.089-.939.13-1.401.13zm43.39-8.091c-3.587 0-6.778-2.551-7.46-6.205-.769-4.125 1.951-8.091 6.075-8.861l12.397-2.312c4.126-.774 8.091 1.951 8.861 6.075.769 4.125-1.951 8.091-6.075 8.861l-12.397 2.312c-.47.088-.939.13-1.401.13z" fill="#d3e1f5" /></g><g><path d="m136.048 297.148c-3.587 0-6.778-2.551-7.459-6.204-.77-4.125 1.95-8.092 6.074-8.862l5.974-1.115c4.12-.766 8.091 1.951 8.861 6.074.77 4.125-1.95 8.092-6.074 8.862l-5.974 1.115c-.47.089-.94.13-1.402.13z" fill="#d3e1f5" /></g></g><path d="m361.206 288.705-84.334 12.072-99.422 95.07 50.087 3.428z" fill="#fccd7f" /><path d="m361.205 288.7-133.664 110.572-50.092-3.428 20.022-19.148 15.535 1.063c3.631.249 7.22-.906 10.024-3.227l96.558-79.878z" fill="#e9b665" /><path d="m104.19 323.468-71.992 67.127h40.582l85.662-73.195z" fill="#fccd7f" /><path d="m158.44 317.397-85.66 73.202h-40.577l22.172-20.673h15.406c3.375 0 6.635-1.23 9.17-3.459l52.334-46.031z" fill="#e9b665" /></g></svg>
                        <span>{t("common.title")}</span>
                    </div>
                    <div className={styles.menu}>
                        <ul>
                            <li><a className={styles.link} href="#"> {t("common.nav.home")}</a></li>
                            <li><a className={styles.link} href="#">{t("common.nav.manageBooking")}</a></li>
                            <li><a className={styles.link} href="#">{t("common.nav.myAccount")}</a></li>
                        </ul>
                    </div>
                </header>
            </div>
            </>
    );
}