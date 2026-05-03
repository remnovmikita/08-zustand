import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import NoteDetailsClient from './NoteDetails.client';
import { fetchNoteById } from '@/lib/api';
import { Metadata } from 'next';

interface NoteDetailsPageProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({params}: NoteDetailsPageProps):Promise<Metadata> =>{
  const { id } = await params
  const note  = await fetchNoteById(id)
  return {
    title : `Note ${note.title}`, 
    description:  `${note.content}`,
    openGraph:{
       title : `Note ${note.title}`, 
    description:  `${note.content}`,
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

export default async function NoteDetailsPage({ params }: NoteDetailsPageProps) {
  const queryClient = new QueryClient();
  const { id } = await params;

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}
