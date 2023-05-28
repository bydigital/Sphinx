import NextHead from 'next/head';

interface HeadInterface {
    title: string;
}
export const Head = (props: HeadInterface) => {
    return (
        <NextHead>
            <title>{props?.title}</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
        </NextHead>
    );
};
