import React from 'react';
import './Form.css';
import { useForm } from 'react-hook-form';

const Form = () => {
  //Invocar el hook 'useForm':
  const { handleSubmit, register, formState } = useForm({
    defaultValues: { name: '', email: '', password: '' }
  });
  console.log('Errores:', formState.errors);

  // Crear la función 'onSubmit' para que se ejecute cuando se 'envía':
  const onSubmit = (values) => {
    console.log('Datos enviados:', values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='name'>Nombre de usuario</label>
      <input
        {...register('name', {
          required: {
            value: true,
            message: 'El nombre de usuario es obligatorio'
          }
        })}
        type='text'
        id='name'
        placeholder='Nombre de usuario'
      />
      {formState.errors.name ? <p>{formState.errors.name.message}</p> : null}
      <br />

      <label htmlFor='email'>Correo electrónico</label>
      <input
        {...register('email', {
          required: {
            value: true,
            message: 'El correo electrónico es obligatorio.'
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'El formato del correo electrónico no es válido.'
          }
        })}
        type='email'
        id='email'
        placeholder='example@example.com'
      />
      {formState.errors.email ? <p>{formState.errors.email.message}</p> : null}
      <br />

      <label htmlFor='password'>Contraseña</label>
      <input
        {...register('password', {
          required: {
            value: true,
            message: 'La contraseña es obligatoria'
          },
          pattern: {
            value:
              /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            message:
              'La contraseña debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial'
          }
        })}
        type='password'
        id='password'
        placeholder='********'
      />
      {formState.errors.password ? (
        <p>{formState.errors.password.message}</p>
      ) : null}
      <button type='submit'>Registrar</button>
    </form>
  );
};

export default Form;
