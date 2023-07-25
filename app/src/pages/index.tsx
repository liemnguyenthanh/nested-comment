import { HomePage } from '@/components/pages';
import { CommentsProvider } from '@/providers/CommentsContext';
import { NextPage } from 'next';

const Home: NextPage = () => {

  return (
    <CommentsProvider>
      <HomePage />
    </CommentsProvider>
  )
}

export default Home;