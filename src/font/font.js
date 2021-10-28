import { createGlobalStyle } from 'styled-components';

import SCDream9Woff from './SCDream9.woff';
import SpoqaHanSansNeoBoldWoff from './SpoqaHanSansNeo-Bold.woff';
import SpoqaHanSansNeoLightWoff from './SpoqaHanSansNeo-Light.woff';
import SpoqaHanSansNeoMediumWoff from './SpoqaHanSansNeo-Medium.woff';
import SpoqaHanSansNeoRegularWoff from './SpoqaHanSansNeo-Regular.woff';
import SpoqaHanSansNeoThinWoff from './SpoqaHanSansNeo-Thin.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'SCD-9';
        src: local('SCD-9'),
        url(${SCDream9Woff}) format('woff');
    }
    @font-face {
        font-family: 'SHSN-B';
        src: local('SHSN-B'),
        url(${SpoqaHanSansNeoBoldWoff}) format('woff');
    }
    @font-face {
        font-family: 'SHSN-L';
        src: local('SHSN-L'),
        url(${SpoqaHanSansNeoLightWoff}) format('woff');
    }
    @font-face {
        font-family: 'SHSN-M';
        src: local('SHSN-M'),
        url(${SpoqaHanSansNeoMediumWoff}) format('woff');
    }
    @font-face {
        font-family: 'SHSN-R';
        src: local('SHSN-R'),
        url(${SpoqaHanSansNeoRegularWoff}) format('woff');
    }
    @font-face {
        font-family: 'SHSN-T';
        src: local('SHSN-T'),
        url(${SpoqaHanSansNeoThinWoff}) format('woff');
    }
`;
