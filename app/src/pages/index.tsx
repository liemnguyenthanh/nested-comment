import { HomePage } from '@/components/pages'
import React from 'react'
import { NextPage } from 'next';
import { CommentsProvider } from '@/providers/CommentsContext';

const Home: NextPage = () => {
  return (
    <CommentsProvider>
      <HomePage />
    </CommentsProvider>
  )
}

export default Home;