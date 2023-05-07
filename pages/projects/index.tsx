import Head from 'next/head';
import { getMongoConnection } from '../../helpers/db-utils';
import { GalleryContent } from '../../components/ui/GalleryContent';
import { GellryTypeEnum } from '../../types/enums';

export interface ProjectItem {
  description: string;
  gitHubLink: string;
  id: string;
  language: string;
  linkToProject: string;
  title: string;
}

interface Props {
  projects: ProjectItem[];
}

const ProjectGallery = (props: Props) => {
  const galleryData = {
    galleryType: GellryTypeEnum.PROJECTS,
    items: props.projects,
    galleryTitle: 'My Projects',
  };

  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta
          name='description'
          content='Meta tag content for the ProjectGallery...'
        />
      </Head>
      <GalleryContent data={galleryData} />
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const { client, dataCollection: projectsCollection } =
      await getMongoConnection('collection-name');
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
          id: project._id.toString(),
        })),
      },
      revalidate: 10,
    };
  } catch (error: any) {
    //TODO: handle error...
    return { notFound: true };
  }
};

export default ProjectGallery;
