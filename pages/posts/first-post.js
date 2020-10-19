import Link from 'next/link';
import Head from 'next/head';
import styles from './styles.module.scss';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            <p className={styles.weight}>Strong font</p>
            <h2>
                <Link href="/">
                    <a>Home page</a>
                </Link>
            </h2>
        </Layout>
    )
}