import Head from 'next/head';
import { getMongoConnection } from '../../helpers/db-utils';
import { GalleryContent } from '../../components/ui/GalleryContent';
import { GellryTypeEnum } from '../../types/enums';

interface WorkItem {
  title: string;
  language: string;
  description: string;
  id: string;
}

interface Props {
  works: WorkItem[];
}

const WorkGallery = ({ works }: Props) => {
  const galleryData = {
    galleryType: GellryTypeEnum.WORKS,
    items: works,
    galleryTitle: 'What do you want to do?',
  };
  return (
    <>
      <Head>
        <title>What do you wnat to do?</title>
        <meta
          name='description'
          content='Meta tag content for the WorkGallery...'
        />
      </Head>
      <GalleryContent data={galleryData} />
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const { client, dataCollection: worksCollection } =
      await getMongoConnection('collection-name');
    if (!client || !worksCollection) {
      throw new Error('could not connect to database.');
    }
    const works = await worksCollection.find().toArray();
    client.close();

    return {
      props: {
        works: works.map(work => ({
          title: work.title,
          language: work.language,
          description: work.description,
          id: work._id.toString(),
        })),
      },
      revalidate: 10,
    };
  } catch (error: any) {
    //handle error...
    return { notFound: true };
  }
};

export default WorkGallery;
