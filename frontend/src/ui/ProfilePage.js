import React from "react";
import {Form} from "react-bootstrap";

export const ProfilePage = () => {

    return (
        <>
            <h1 className="d-flex justify-content-center">Create Your Profile!</h1>

            <form>
                <div className="form-group">
                    <div className="col-sm-4">
                        <label htmlFor="firstname">First Name</label>
                        <input type="email" className="form-control" id="firstname" placeholder="name@example.com">
                    </div>
                </div>


                <div className="form-group">
                    <div className="col-sm-4">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="email" className="form-control" id="lastname" placeholder="name@example.com">
                    </div>
                </div>


                <div className="form-group">
                    <div className="form-group">
                        <div className="col-sm-4">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                                   placeholder="Enter email">

                        </div>
                        <div className="form-group">
                            <div className="form-group">
                                <div className="col-sm-4">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password"
                                           placeholder="Password"/>
                                </div>

                                <div className="form-group">
                                    <div className="form-group">
                                        <div className="col-sm-4">
                                            <label htmlFor="confirmpassword">Confirm Password</label>
                                            <input type="password" className="form-control" id="confirmpassword"
                                                   placeholder="Password"/>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}


