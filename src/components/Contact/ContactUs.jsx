import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    subject: yup.string().max(64),
    message: yup.string().min(10).max(255),
}).required();

const ContactUs = () => {

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = (data) => {
        // console.log(data);
    }

    return (
        <div className="container-fluid pt-5">
            <div className="text-center mb-4">
                <h2 className="section-title px-5"><span className="px-2">Contact For Any Queries</span></h2>
            </div>
            <div className="row px-xl-5">
                <div className="col-lg-7 mb-5">
                    <div className="contact-form">
                        <div id="success"></div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="control-group">
                                <input type="text" className="form-control" placeholder="Your Name" {...register("name")} />
                                <p className="help-block text-danger">{errors.name?.message}</p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control" placeholder="Your Email" {...register("email")} />
                                <p className="help-block text-danger">{errors.email?.message}</p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control" placeholder="Subject" {...register("subject")} />
                                <p className="help-block text-danger">{errors.subject?.message}</p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" rows="6" placeholder="Message" {...register("message")}></textarea>
                                <p className="help-block text-danger">{errors.message?.message}</p>
                            </div>
                            <div>
                                <button className="btn btn-primary py-2 px-4" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 mb-5">
                    <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
                    <p>Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sed.</p>
                    <div className="d-flex flex-column mb-3">
                        <h5 className="font-weight-semi-bold mb-3">Store 1</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                        <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                    </div>
                    <div className="d-flex flex-column">
                        <h5 className="font-weight-semi-bold mb-3">Store 2</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                        <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;