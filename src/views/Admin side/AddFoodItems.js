

// core components
import Switch from 'react-toggle-switch';
import 'react-toggle-switch/dist/css/switch.min.css';
import nepaliFoodData from './Data for Admin/Fooddata';
import { useState } from "react";
import Headerwithoutstats from "components/Headers/Headerwithoutstats";
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
    Container,
} from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const AddFoodItems = () => {

    const navigate = useNavigate();




    const validationSchema = Yup.object().shape({
        id: Yup.number().required('ID is required'),
        name: Yup.string()
            .matches(/^[a-zA-Z\s]+$/, 'Name should contain only alphabetical characters')
            .min(2, 'Name should be more than 2 characters')
            .max(50, 'Name should be less than 50 characters')
            .required('Name is required'),
        price: Yup.number().required('Price is required'),
        availability: Yup.boolean().required('Availability is required'),
        description: Yup.string()
            .matches(/^[a-zA-Z\s]+$/, 'Description should contain only alphabetical characters')
            .max(350, 'Description should be less than 350 characters')
            .required('Description is required'),
        imgLink: Yup.string()
            .url('Image link should be a valid URL')
            .matches(/^https:/, 'Image link should start with https://')
            .required('Image link is required'),
    });


    const formik = useFormik({
        initialValues: {
            id: "",
            name: "",
            price: "",
            availability: false,
            description: "",
            imgLink: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
            navigate('/admin/food-items')
        },
    })


    return (
        <>
            <Headerwithoutstats />
            <Container className="mt-4" fluid>
                <Row className="justify-content-center">
                    <div className="col-md-9 col-lg-8 col-sm-10">

                        <Card className="bg-secondary shadow border-0">
                            <CardBody className="px-lg-5 py-lg-5">
                                <div className="text-center text-muted mb-4">
                                    <>Add Food Items</>
                                </div>
                                <Form role="form" onSubmit={formik.handleSubmit}>
                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-badge" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="ID"
                                                type="number"
                                                autoComplete="new-id"
                                                {...formik.getFieldProps('id')}
                                            />
                                        </InputGroup>
                                        {formik.touched.id && formik.errors.id ? (
                                            <div className="text-danger">{formik.errors.id}</div>
                                        ) : null}
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-single-02" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Name"
                                                type="text"
                                                autoComplete="new-name"
                                                {...formik.getFieldProps('name')}
                                            />
                                        </InputGroup>
                                        {formik.touched.name && formik.errors.name ? (
                                            <div className="text-danger">{formik.errors.name}</div>
                                        ) : null}
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-money-coins" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Price"
                                                type="number"
                                                autoComplete="new-price"
                                                {...formik.getFieldProps('price')}
                                            />
                                        </InputGroup>
                                        {formik.touched.price && formik.errors.price ? (
                                            <div className="text-danger">{formik.errors.price}</div>
                                        ) : null}
                                    </FormGroup>

                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-align-left-2" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Description"
                                                type="text"
                                                autoComplete="new-description"
                                                {...formik.getFieldProps('description')}
                                            />
                                        </InputGroup>
                                        {formik.touched.description && formik.errors.description ? (
                                            <div className="text-danger">{formik.errors.description}</div>
                                        ) : null}
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-image" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Image Link"
                                                type="text"
                                                autoComplete="new-imgLink"
                                                {...formik.getFieldProps('imgLink')}
                                            />
                                        </InputGroup>
                                        {formik.touched.imgLink && formik.errors.imgLink ? (
                                            <div className="text-danger">{formik.errors.imgLink}</div>
                                        ) : null}
                                    </FormGroup>

                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ marginRight: '10px' }}>Availability:</span>
                                        <Switch
                                            onClick={() => formik.setFieldValue('availability', !formik.values.availability)}
                                            on={formik.values.availability}
                                        />
                                    </div>

                                    {formik.touched.availability && formik.errors.availability ? (
                                        <div className="text-danger">{formik.errors.availability}</div>
                                    ) : null}

                                    <div className="text-center">
                                        <Button className="my-4" color="primary" type="submit">
                                            Add Item
                                        </Button>
                                    </div>
                                </Form>
                            </CardBody>




                        </Card>

                    </div>
                </Row>
            </Container>
        </>

    );
};

export default AddFoodItems;
