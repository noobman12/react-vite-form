import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Field should contain a valid e-mail")
      .max(255)
      .required("E-mail is required"),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='border w-[400px] m-auto h-[300px]'
    >
      <h3 className='text-2xl pb-5 font-bold'>Login</h3>
      <input
        {...register("email")}
        placeholder='Your Email'
        className='loginInput'
      />
      <p>{errors.email?.message}</p>
      <input
        {...register("password")}
        placeholder='Password'
        className='loginInput'
        type='password'
      />
      <p>{errors.password?.message}</p>

      <input
        type='submit'
        value='Login'
        className='text-white bg-orange-600 py-3 px-[160px] mt-[5px]'
      />
      <p className=' mt-3'>
        <span className='text-gray-500'>You dont have account ? </span>
      </p>
    </form>
  );
}
