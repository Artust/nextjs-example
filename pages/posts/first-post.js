import Link from 'next/link';
import Head from 'next/head';

export default function FirstPost() {
    return (
        <div>
            <Head>
                <title>First post</title>
            </Head>
            <h2>
                <Link href="/">
                    <a>Home page</a>
                </Link>
            </h2>
        </div>
    )
}