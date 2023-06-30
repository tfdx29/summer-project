import React from 'react'
import * as Form from '@radix-ui/react-form';
import { useForm } from "react-hook-form"
import { MoveRight } from 'lucide-react';
import { toast } from 'react-hot-toast';

const FormFiller = ({ data: session }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()
  const onSubmit = async (data) => {
    const send = {
      data: data,
      session: session
    }
    const res = await fetch('/api/auction/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify(send)
    })
    const json = await res.json()
    if (!res.ok) throw Error(json.message)
    reset()
    toast.success('Item Created')

  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mb-0 mt-8 max-w-xl space-y-4">
      <div>
        <label htmlFor="email" className="sr-only text-white">Name</label>

        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
            placeholder="Name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only text-white">Description</label>

        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
            placeholder="Description"
            {...register('description', { required: 'Description is required' })}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only text-white">Price</label>

        <div className="relative">
          <input
            type="number"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
            placeholder="Price"
            {...register('price', { required: 'Price is required' })}
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only text-white">Image</label>

        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
            placeholder="Image"
            {...register('image', { required: 'Image is required' })}
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only text-white">Auction Start</label>

        <div className="relative">
          <input
            type="date"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
            placeholder="Auction Start"
            {...register('auctionStart', { required: 'Auction Date is required' })}
          />
          {errors.auctionStart && (
            <p className="text-red-500 text-sm mt-1">{errors.auctionStart.message}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only text-white">Auction End</label>

        <div className="relative">
          <input
            type="date"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
            placeholder="Auction End"
            {...register('auctionEnd', { required: 'Auction Date is required' })}
          />
          {errors.auctionEnd && (
            <p className="text-red-500 text-sm mt-1">{errors.auctionEnd.message}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-white focus:outline-none focus:ring active:text-white"

      >
        <span className="absolute -end-full transition-all group-hover:end-4">
          <MoveRight className="h-4 w-4 text-white-600" />
        </span>

        <span className="text-sm font-medium transition-all group-hover:me-4">
          Post
        </span>
      </button>



    </form>
    // <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8">
    //   <Form.Root className="FormRoot">
    //     <Form.Field className="FormField" name="Name">
    //       <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
    //         <Form.Label className="FormLabel">Name</Form.Label>
    //         <Form.Message className="FormMessage" match="valueMissing">
    //           Please enter your email
    //         </Form.Message>
    //         <Form.Message className="FormMessage" match="typeMismatch">
    //           Please provide a valid email
    //         </Form.Message>
    //       </div>
    //       <Form.Control asChild>
    //         <input className="Input" type="email" required />
    //       </Form.Control>
    //     </Form.Field>
    //     <Form.Field className="FormField" name="question">
    //       <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
    //         <Form.Label className="FormLabel">Question</Form.Label>
    //         <Form.Message className="FormMessage" match="valueMissing">
    //           Please enter a question
    //         </Form.Message>
    //       </div>
    //       <Form.Control asChild>
    //         <textarea className="Textarea" required />
    //       </Form.Control>
    //     </Form.Field>
    //     <Form.Submit asChild>
    //       <button className="Button" style={{ marginTop: 10 }}>
    //         Post question
    //       </button>
    //     </Form.Submit>
    //   </Form.Root>
    // </div>
  )
}

export default FormFiller