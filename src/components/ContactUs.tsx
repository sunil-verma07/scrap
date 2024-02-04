import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { FormControl, InputLabel, Select, MenuItem, Box, TextField } from '@mui/material';
import { useState, ChangeEvent, FormEvent } from 'react';
import { contact } from '../actions';
import { SelectChangeEvent } from '@mui/material';

interface IProps {
    name: string;
    email: string;
    number: number;
    message: string;
    cause: string;
}

const Contact = (props: any) => {

    type DivStyle = {
        fontWeight: string;
        top: string;
        position?: Position; // Making 'position' optional
        left: string;
        backgroundColor: string;
        padding: string;
        zIndex: number;
      };

      type Position = "absolute" | "relative" | "fixed" | "static";


    const divStyle: DivStyle = {
  fontWeight: 'bold',
  top: '-17px',
  position: "absolute",
  left: "24px",
  backgroundColor: "white",
  padding: "4px 4px",
  zIndex: 1,
};
    const [values, setValues] = useState({
        name: '',
        email: '',
        number: '',
        message: '',
        cause: ''
    })

    const { name, email, number, message, cause } = values;


    const handleChange = (name: string | number) => (event: SelectChangeEvent<string>) => {
        console.log(name);
        // Access the selected value using event.target.value
        setValues({ ...values, [name]: event.target.value });
      };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formElements = e.currentTarget.elements as HTMLFormControlsCollection;
        const user = {
            name: formElements['name'].value,
            email: formElements['email'].value,
            number: formElements['number'].value,
            message: formElements['message'].value,
            cause: formElements['cause'].value
        };

        try {
            let data = await contact(user);

            if (data.error) {
                console.log("user", data);
            } else {
                console.log(data.message);
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    number: '',
                    message: '',
                    cause: ''
                });
            }
        } catch (err) {
            console.log(err);
            // Handle the error if needed
        }
    };


    return (
        <section >
            <form action="" className="rounded-3xl bg-white px-4 py-8 lg:w-[580px] lg:h-[390px]"
                style={{ boxShadow: '-8px 11px 70px rgba(78.95, 155.73, 34.66, 0.40)' }}
                onSubmit={handleSubmit}
            >
                <div className="grid gap-10 sm:grid-cols-2">

                    <div className="relative flex items-center">
                        <input
                            type="text"
                            name="name"
                            value={name}
                            className="w-full h-5/6 rounded-2xl border-2 border-defaultLime/20 bg-transparent p-4 font-bold outline-none transition focus:border-defaultLime"
                            onChange={handleChange('name')}
                            required
                        />
                        <label
                            htmlFor=""
                            className="absolute -top-3 bg-white px-2 font-bold left-6"
                        >
                            Full Name
                        </label>

                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-1/2 -translate-y-1/2 right-4"
                        >
                            <path
                                d="M5.42855 5.57875C5.42855 8.10348 7.47525 10.1502 9.99998 10.1502C12.5247 10.1502 14.5714 8.10348 14.5714 5.57875C14.5714 3.05402 12.5247 1.00732 9.99998 1.00732"
                                stroke="#71bf44"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                            <path
                                d="M2 16.9328C2 15.9495 2.61812 15.0724 3.5441 14.7417V14.7417C7.71891 13.2507 12.2811 13.2507 16.4559 14.7417V14.7417C17.3819 15.0724 18 15.9495 18 16.9328V18.7014C18 19.9185 16.922 20.8535 15.7172 20.6813L13.8184 20.4101C11.2856 20.0483 8.71435 20.0483 6.18162 20.4101L4.28284 20.6813C3.07798 20.8535 2 19.9185 2 18.7014V16.9328Z"
                                stroke="#71bf44"
                                strokeWidth="1.8"
                            />
                        </svg>

                    </div>

                    <div className="relative flex items-center">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            className="w-full  h-5/6 rounded-2xl border-2 border-defaultLime/20 bg-transparent p-4 font-bold outline-none transition focus:border-defaultLime"
                            onChange={handleChange('email')}
                            required
                        />
                        <label
                            htmlFor=""
                            className="absolute -top-3 bg-white px-2 font-bold left-6"
                        >
                            Email Address
                        </label>
                        <svg
                            width="22"
                            height="19"
                            viewBox="0 0 22 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                        >
                            <path
                                d="M1 8.00732V7.00732C1 4.2459 3.23858 2.00732 6 2.00732H16C18.7614 2.00732 21 4.2459 21 7.00732V13.0073C21 15.7687 18.7614 18.0073 16 18.0073H6C3.23858 18.0073 1 15.7687 1 13.0073V12.0073"
                                stroke="#71bf44"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                            <path
                                d="M5 7.00732L9.8 10.6073C10.5111 11.1407 11.4889 11.1407 12.2 10.6073L17 7.00732"
                                stroke="#71bf44"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <div className="relative flex items-center">
                        <input
                            type="tel"
                            name="mobile"
                            value={number}
                            className="w-full h-5/6 rounded-2xl border-2 border-defaultLime/20 bg-transparent p-4 font-bold outline-none transition focus:border-defaultLime"
                            onChange={handleChange('number')}
                            maxLength={10}
                            minLength={10}
                            required
                        />
                        <label
                            htmlFor=""
                            className="absolute -top-3 bg-white px-2 font-bold left-6"
                        >
                            Mobile Number
                        </label>
                        <svg
                            width="22"
                            height="20"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-1/2 -translate-y-1/2 right-4"
                        >
                            <path
                                d="M6.45241 1.40806C5.45292 0.783702 4.14202 0.887138 3.2983 1.73086L1.86856 3.1606C-0.302899 5.33207 1.73747 10.8931 6.42586 15.5815C11.1142 20.2699 16.6753 22.3102 18.8467 20.1388L20.2765 18.709C21.2635 17.722 21.2374 16.0956 20.2182 15.0764L18.0036 12.8619C16.9844 11.8426 15.358 11.8165 14.371 12.8036L14.0639 13.1107C13.531 13.6436 12.6713 13.6957 12.0713 13.2005C11.4925 12.7229 10.9159 12.208 10.3576 11.6497C9.79933 11.0914 9.28441 10.5149 8.80678 9.93607C8.31161 9.33601 8.36374 8.47631 8.89666 7.9434L9.20375 7.63631C9.98187 6.85819 10.1303 5.68271 9.65898 4.72062"
                                stroke="#71bf44"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <div className="relative flex items-center">
                        {/* <input
                            type="text"
                            name="city"
                            className="w-full  h-5/6 rounded-2xl border-2 border-defaultLime/20 bg-transparent p-4 font-bold outline-none transition focus:border-defaultLime" /> */}
                        {/* <label
                            htmlFor=""
                            className="absolute -top-3 bg-white px-2 font-bold left-6"
                        >
                            Cause
                        </label>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-1/2 -translate-y-1/2 right-4"
                        >
                            <path
                                d="M1 6.61621L9.38253 18.1422C10.1812 19.2404 11.8188 19.2404 12.6175 18.1422L21 6.61621"
                                stroke="#71bf44"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </svg> */}
                        {/* className="w-full  h-5/6 rounded-2xl border-2 border-defaultLime/20 bg-transparent p-4 font-bold outline-none transition focus:border-defaultLime" */}
                        <Box sx={{ width: '100%', }}>
                            <FormControl fullWidth >
                                <label style={divStyle}
                                >Cause
                                </label>
                                <Select
                                    value={cause}
                                    sx={{
                                        borderRadius: "16px",
                                        '.MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'rgb(113 191 68 / 0.2)',
                                            borderWidth: '2px',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'rgb(113 191 68 / 0.2)',
                                            borderWidth: '2px',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'rgb(113 191 68 / 0.2)',
                                            borderWidth: '2px',
                                        }
                                    }}
                                    label="cause"
                                    onChange={handleChange('cause')}
                                    required
                                >
                                    <MenuItem value='leads'>Leads</MenuItem>
                                    <MenuItem value="careers">Careers</MenuItem>
                                    <MenuItem value="community">Community</MenuItem>
                                    <MenuItem value="volunteer">Volunteer</MenuItem>
                                    <MenuItem value="feedback">Feedback</MenuItem>
                                    <MenuItem value="support">Support</MenuItem>
                                    <MenuItem value="donation">Donation</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                </div>
                <div className="relative mt-10 flex items-center">
                    <input
                        type="text"
                        name="message"
                        value={message}
                        className="w-full h-4/5 rounded-2xl border-2 border-defaultLime/20 bg-transparent p-4 font-bold outline-none transition focus:border-defaultLime"
                        onChange={handleChange('message')}
                        required
                    />
                    <label htmlFor="" className="absolute -top-3 bg-white px-2 font-bold left-6">
                        Message
                    </label>
                    <svg
                        width="22"
                        height="20"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-1/2 -translate-y-1/2 right-4"
                    >
                        <path
                            d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
                            stroke="#71bf44"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />
                        <circle cx="6.05005" cy="9.05713" r="1.25" fill="#71bf44" />
                        <circle cx="11.05" cy="9.05713" r="1.25" fill="#71bf44" />
                        <circle cx="16.05" cy="9.05713" r="1.25" fill="#71bf44" />
                    </svg>
                </div>

                <div className="mt-6 text-center lg:text-right">
                    <button type="submit" className="btn px-8 capitalize text-white bg-defaultLime">
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contact;
