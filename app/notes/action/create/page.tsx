import NoteForm from "@/components/NoteForm/NoteForm";
import css from "@/components/CreateNote/Create.module.css"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Created notes',
  description: 'Create notes',
    openGraph:{
        title: 'Created notes',
        description: 'Create our notes',
        url: "https://08-zustand-two-silk.vercel.app/notes/action/create",
    images:[
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg?_gl=1*17o1uiq*_ga*MTk3OTIxMzA4MS4xNzU1NTQyMDgz*_ga_PW0T7S5LDQ*czE3Nzc4MDMyMTkkbzEwMiRnMCR0MTc3NzgwMzIzMyRqNDYkbDAkaDA.",
        width: 1200,
        height: 630,
        alt: "Create note page"
      }
    ],
    siteName: "Note-Hub",
    
  }
};

export default function createPage(){
    return(
           <main className={css.main}>
        <div className={css.container}>
            <h1 className={css.title}>Create note</h1>
	        {<NoteForm />}
        </div>
        </main>
    )
}