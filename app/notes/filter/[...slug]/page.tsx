import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getNotes } from '@/lib/api';
import NotesClient from './Notes.client';
import { Metadata } from 'next';


type Props ={
  params : Promise<{ slug: string[] }>
}


export const generateMetadata = async ({params}: Props):Promise<Metadata> =>{
  const { slug } = await params
  const tag = slug[0]
  return {
    title : `Note ${tag}`, 
    description: `Nates fillter by ${tag} categories`,
      openGraph:{
    title : `Note ${tag}`, 
    description: `Nates fillter by ${tag} categories`,
    siteName: "Note-Hub",
    url: "https://08-zustand-two-silk.vercel.app/",
      images:[
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg?_gl=1*17o1uiq*_ga*MTk3OTIxMzA4MS4xNzU1NTQyMDgz*_ga_PW0T7S5LDQ*czE3Nzc4MDMyMTkkbzEwMiRnMCR0MTc3NzgwMzIzMyRqNDYkbDAkaDA.",
        width: 1200,
        height: 630,
        alt: "Note-page"
      }
    ],
  }
  }
}

export default async function NotesPage({ params }: Props ) {
  const queryClient = new QueryClient();

  const { slug } = await params;

  const tag = slug[0];

  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, '', tag],
    queryFn: () => getNotes(1, '', tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
