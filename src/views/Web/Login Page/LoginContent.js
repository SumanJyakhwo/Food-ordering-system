import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
    CarouselItem,
    CardFooter,
} from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const LoginContent = () => {
    const [storedUserCredentials, setStoredUserCredentials] = useState({})
    
    
    useEffect(()=>{
        
        const localUserData = JSON.parse(localStorage.getItem('userAccount'));
        setStoredUserCredentials(localUserData)
    }, [])
   
    

   



    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required').matches(/.*@.*\.com/, 'Invalid email format'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
    })


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (storedUserCredentials &&
                storedUserCredentials.email===values.email &&
                storedUserCredentials.password === values.password)
                {
                    Swal.fire({
                        icon: "success",
                        title: "Logged in Successfully",
                       
                    });
                    localStorage.setItem('loggedIn', JSON.stringify({ signedInStatus: true }));

                }
                else
                {
                    Swal.fire({
                        icon: "error",
                        title: "Wrong Email or Password",
                        text: "Please enter correct user credentials.",
                      });
                }
          
            console.log("Entered login values were:", values)
        },
    })



    return (


        <div>
            <div className="text-center">
                <span>Sign in with credentials</span>
            </div>
            <form onSubmit={formik.handleSubmit} className="px-5 pt-5 mb-4">
                <div className=" mb-3">
                    <div className="d-flex">

                        <i className="ni ni-email-83 mt-3 mr-3" />

                        <Input
                            placeholder="Email"
                            type="email"
                            autoComplete="new-email"
                            {...formik.getFieldProps('email')}
                        />
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                        <div className="text-danger">{formik.errors.email}</div>
                    ) : null}
                </div>
                <div>
                    <div className="d-flex">

                        <i className="ni ni-lock-circle-open mt-3 mr-3" />

                        <Input
                            placeholder="Password"
                            type="password"
                            autoComplete="new-password"
                            {...formik.getFieldProps('password')}
                        />
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                        <div className="text-danger">{formik.errors.password}</div>
                    ) : null}
                </div>
                <div className=" mt-4 custom-control custom-control-alternative custom-checkbox">
                    <input
                        className="custom-control-input "
                        id=" customCheckLogin"
                        type="checkbox"
                    />
                    <label
                        className="custom-control-label "
                        htmlFor=" customCheckLogin"
                    >
                        <span className="text-dark">Remember me</span>
                    </label>
                </div>
                <div className="text-center">
                    <Button className="my-4" color="primary" type="submit">
                        Sign in
                    </Button>
                </div>
            </form>

            <Row className="mx-2">
                <Col xs="6">
                    <a
                        className="text-dark"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                    >
                        <span>Forgot password?</span>
                    </a>
                </Col>
                <Col className="text-right" >
                    <a
                        className="text-dark"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                    >
                        <span>Create new account</span>
                    </a>
                </Col>
            </Row>
        </div>


    );
};

export default LoginContent;
