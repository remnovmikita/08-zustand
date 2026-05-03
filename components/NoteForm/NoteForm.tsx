"use client";

import css from './NoteForm.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNote, NewNote } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { useNoteDraftStore } from '@/lib/store/noteStore';
import { Tags } from '@/types/note';



export default function NoteForm() {

  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: createNote,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      clearDraft();
      router.push('/notes/filter/all')
    },
  });

const counterStore = useNoteDraftStore()

const {draft, setDraft, clearDraft} = counterStore

const handleChange = (
  event: 
  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) =>{
  setDraft({
    ...draft,
    [event.target.name]: event.target.value
  })
}

const handleSubmit = (formData:FormData)=>{
  const values: NewNote ={
    title: formData.get("title") as string,
    content: formData.get("content") as string,
    tag:formData.get("tag")as Tags
  }
  mutation.mutate(values)
}


  return (
    <form className={css.form} 
      action={handleSubmit} 
      >
      <div className={css.formGroup}>
        <label htmlFor="title">Title</label>
        <input 
          id="title" 
          type="text" 
          name="title" 
          className={css.input} 
          required 
          minLength={3} 
          maxLength={50} 
          value={draft?.title}
          onChange={handleChange}
          />
      </div>

      <div className={css.formGroup}>
        <label htmlFor="content">Content</label>
        <textarea 
          id="content" 
          name="content" 
          rows={8} 
          className={css.textarea} 
          maxLength={500} 
          value={draft?.content}
          onChange={handleChange}
          />
      </div>

      <div className={css.formGroup}>
        <label htmlFor="tag">Tag</label>
        <select 
          id="tag" 
          name="tag" 
          className={css.select} 
          required
          value={draft?.tag}
          onChange={handleChange}
          >
          <option value="Todo">Todo</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Meeting">Meeting</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>

      <div className={css.actions}>
        <button type="button" className={css.cancelButton} 
          onClick={() => router.back()}>
          Cancel
        </button>
        <button type="submit" 
          className={css.submitButton} 
          disabled={mutation.isPending}>
          {mutation.isPending ? 'Creating...' : 'Create note'}
        </button>
      </div>
    </form>
  );
}
