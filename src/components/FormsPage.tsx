import React from 'react'
import { useForm } from 'react-hook-form'

type FormInput = {
    email: string;
    password: string;
}

const FormsPage = () => {

    const {register, handleSubmit, watch} = useForm<FormInput>({
        defaultValues: {
            email: 'hernan@gmail.com',
            password: '123456'
        }
    })

    const onSubmit = (myForm: FormInput) => {
        console.log(myForm);
    }

    console.log(watch('email'))

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Form</h3>
            <div>
                <input type="text" placeholder='email' {...register('email')} />
                <input type="text" placeholder='password' {...register('password')} />
                <button type='submit'>Ingresar</button>

            </div>
        </form>
    </>
  )
}

export default FormsPage