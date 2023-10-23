import { useForm, Controller } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch, control,
        formState: { errors },
        reset,
    } = useForm();
    const onFormSubmit = (data) => {
        reset();
    };
    const gender = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
    ]
    const hobbies = [
        { value: 'football', label: 'football' },
        { value: 'basketball', label: 'basketball' },
        { value: 'Art', label: 'Art' },
    ]
    const password = watch('password', '');
    return (
        <div className="container py-5">
            <Form
                className="w-50 mx-auto bg-white p-5 mt-5"
                onSubmit={handleSubmit(onFormSubmit)}
            >
                <Form.Group className="mb-3">
                    <Form.Label>User name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        {...register('name', {
                            required: 'Name is required',
                            pattern: {
                                value: /^[a-zA-Z ]+$/,
                                message: 'Name is not valid',
                            },
                        })}
                    />
                    {errors?.name && (
                        <p className="alert my-2 alert-danger">{errors.name.message}</p>
                    )}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>User age </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter age"
                        {...register('age', {
                            required: 'age is required',
                            min: { value: 18, message: 'min age is 18 ' },
                            max: { value: 80, message: 'max age is 80 ' },
                        })}
                    />
                    {errors.age && (
                        <p className="alert my-2 alert-danger">{errors.age.message}</p>
                    )}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message: 'Email is not valid',
                            },
                        })}
                    />
                    {errors?.email && (
                        <p className="alert my-2 alert-danger">{errors.email.message}</p>
                    )}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        {...register('password', {
                            required: 'Password is required',
                            pattern: {
                                value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                                message:
                                    'Password must be 8-16 characters and contain at least one lowercase letter, one uppercase letter, one number, and one special character.',
                            },
                        })}
                    />
                    {errors.password && (
                        <p className="alert my-2 alert-danger">{errors.password.message}</p>
                    )}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        {...register('confirmPassword', {
                            validate: (value) =>
                                value === password || 'Passwords do not match',
                        })}
                    />
                    {errors?.confirmPassword && (
                        <p className="alert my-2 alert-danger">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </Form.Group>
                <div className='my-3'>
                    <Controller
                        name="gender"
                        control={control}
                        rules={{ required: 'Please select a gender' }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={gender}
                                isClearable={true}
                                isSearchable={true}
                                placeholder="Select Gender"
                            />
                        )}
                    />
                    {errors.gender && (
                        <p className="alert my-2 alert-danger">{errors.gender.message}</p>
                    )}
                </div>
                <div className='my-3'>
                    <Controller
                        name="hobbies"
                        control={control}
                        rules={{ required: 'Please select a hobby' }}
                        render={({ field }) => (
                            <CreatableSelect
                                {...field}
                                options={hobbies}
                                isClearable={true}
                                isSearchable={true}
                                isMulti
                                placeholder="Select Hobbies"
                            />
                        )}
                    />
                    {errors.hobbies && (
                        <p className="alert my-2 alert-danger">{errors.hobbies.message}</p>
                    )}
                </div>
                <Button variant="warning" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};
export default SignUp;

