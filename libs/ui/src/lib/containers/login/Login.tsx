import { useForm } from 'react-hook-form';
import { Button, Input } from '../../common';

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ [key: string]: unknown }>({
    defaultValues: {
      'email': '',
      'password': '',
    },
  });

  const onSubmit = (data: Record<string, unknown>) => console.log(data, errors);

  return (
    <div className="grid grid-cols-2 place-items-stretch min-h-screen">
      <div className="relative w-full h-fulll bg-slate-200 overflow-hidden">
        <img className="absolute object-cover object-center w-full h-full mix-blend-luminosity" src="/assets/dominic-kurniawan-suryaputra-unsplash.jpg" alt="" />
      </div>
      <div className="container flex flex-col justify-center mx-auto w-full h-full">
        <h1 className="text-outer-space text-3xl font-semibold">Welcome to Login!</h1>
        <form className="grid gap-7" noValidate onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="email"
            label="email"
            className="relative z-0 w-full appearance-none bg-slate-100 indent-6 py-4 rounded-md border border-outer-space-500"
            register={register}
            required
            type="email"
            placeholder="yourmail@mail.com"
            errors={errors}
            />
          <Input
            name="password"
            label="password"
            className="relative z-0 w-full appearance-none bg-slate-100 indent-6 py-4 rounded-md border border-outer-space-500"
            register={register}
            required
            type="password"
            placeholder="Your password"
            errors={errors}
          />
          <Button label="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
