// pages/_app.tsx

import RootLayout from '@/app/layout';
import { AppProps } from 'next/app';
import '@/app/globals.css'
import Head from 'next/head';
import FlareCursor from "@/components/FlareCursor"; // Don't forget to update this path to your own component file.
 
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <RootLayout>
             <Head>
            <title>Penguen Sanat | Sanat ve Eğitimde Yeni Bir Bakış</title>
        <meta 
          name="description" 
          content="Penguen Sanat, sanat ve eğitim alanında yenilikçi yaklaşımlar sunarak öğrencilerin yeteneklerini geliştirmelerine yardımcı olur." 
        />
        <meta name="keywords" content="Penguen Sanat, sanat eğitimi, tiyatro, drama, müzik, resim, satranç, robotik" />
        <meta name="author" content="Penguen Sanat" />
        <meta property="og:title" content="Penguen Sanat | Sanat ve Eğitimde Yeni Bir Bakış" />
        <meta 
          property="og:description" 
          content="Sanat ve eğitim alanında fark yaratan Penguen Sanat ile öğrenciler yeteneklerini keşfetsin." 
        />
        <meta property="og:image" content="/penguensanateskilogo.png" />
        <meta property="og:url" content="https://penguensanat.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="/penguensanatmerkezi.png" />
        <meta name="twitter:title" content="Penguen Sanat | Sanat ve Eğitimde Yeni Bir Bakış" />
        <meta 
          name="twitter:description" 
          content="Penguen Sanat, sanat ve eğitim alanında yenilikçi yaklaşımlar sunarak öğrencilerin yeteneklerini geliştirmelerine yardımcı olur." 
        />
        <meta name="twitter:image" content="/penguensanateskilogo.png" />
        <link rel="icon" href="/favicon_package/favicon.ico" />
                <link rel="apple-touch-icon" sizes="57x57" href="/favicon_package/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/favicon_package/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/favicon_package/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/favicon_package/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/favicon_package/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/favicon_package/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/favicon_package/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/favicon_package/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/favicon_package/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon_package/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package/favicon-16x16.png" />
                <link rel="manifest" href="/favicon_package/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/favicon_package/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <FlareCursor/>

            <Component {...pageProps} />
        </RootLayout>
    );
};

export default MyApp;