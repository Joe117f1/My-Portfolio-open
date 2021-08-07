import { Fragment } from 'react';
import Head from 'next/head';
import { getMongoConnection } from '../../helpers/db-utils';
import GalleryContent from '../../components/ui/GalleryContent';

const WorkGallery = (props) => {
    return (
        <Fragment>
            <Head>
                <title>My Works</title>
                <meta
                    name='description'
                    content='description about my works...'
                />
            </Head>
            <GalleryContent projects={props.projects} />
        </Fragment>
    );
}

export const getStaticProps = async () => {
    try {
        const { client, projectsCollection } = await getMongoConnection();
        if (!client || !projectsCollection) {
            throw new Error('could not connect to database.');
        }
        const projects = await projectsCollection.find().toArray();
        client.close();

        return {
            props: {
                projects: projects.map(project => ({
                    title: project.title,
                    language: project.language,
                    description: project.description,
                    linkToProject: project.link,
                    gitHubLink: project.codeLink,
                    id: project._id.toString()
                }))
            },
            revalidate: 10
        }
    } catch (error) {
        console.log(error.message);
        return { notFound: true };
    };
}

export default WorkGallery;
