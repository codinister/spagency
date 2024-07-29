import { useForm } from 'react-hook-form';
import Errorbox from './Errorbox';
import axios from 'axios';
import {useState} from 'react'

const Contactform = () => {

  const [getStatus,setStatus] = useState(false)


  type FS = {
    fullname: string;
    company: string;
    email: string;
    phone: string;
    message: string;
  };

  const form = useForm({
    defaultValues: {
      fullname: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors,isSubmitSuccessful, isSubmitting } = formState;

  const submitForm = (data: FS) => {
    axios
      .post('api/sendmail', {
        data
      })
      .then((resp) => (resp?.data?.status))
      .catch((err) => console.log(err));
  };




  if(isSubmitSuccessful){
    return <div className="email-sent"> Email sent!</div>
  }

  return (
    <div className="contactform">
      <h4>GET IN TOUCH</h4>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="form-control">
          <input
            type="text"
            placeholder=""
            {...register('fullname', {
              required: {
                value: true,
                message: 'Fullname field required!',
              },
            })}
          />
          <label htmlFor="">Full Name</label>
          <Errorbox err={errors?.fullname?.message} />
        </div>

        <div className="form-control">
          <input
            type="text"
            placeholder=""
            {...register('company', {
              required: {
                value: true,
                message: 'Company field required!',
              },
            })}
          />
          <label htmlFor="">Company</label>
          <Errorbox err={errors?.company?.message} />
        </div>

        <div className="form-control">
          <input
            type="text"
            placeholder=""
            {...register('email', {
              required: {
                value: true,
                message: 'Email field required!',
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
              },
            })}
          />
          <label htmlFor="">Email</label>
          <Errorbox err={errors?.email?.message} />
        </div>

        <div className="form-control">
          <input
            type="text"
            placeholder=""
            {...register('phone', {
              required: {
                value: true,
                message: 'Phone field required!',
              },
              minLength: {
                value: 10, 
                message: 'Valid phone number required!'
              }
            })}
          />
          <label htmlFor="">Phone</label>
          <Errorbox err={errors?.phone?.message} />
        </div>

        <div className="form-control">
          <textarea
            placeholder="Your Message"
            {...register('message', {
              required: {
                value: true,
                message: 'Message field required!',
              },
            })}
          ></textarea>
          <Errorbox err={errors?.message?.message} />
        </div>

        <button>SEND</button>
      </form>
    </div>
  );
};

export default Contactform;
