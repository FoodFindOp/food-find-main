import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import {fetchAllProfiles} from '../../store/profile'
import { useSelector, useDispatch } from 'react-redux'
import {SignUpForm} from "./sign-up/SignUpForm";
import {SignInForm} from "./sign-in/SignInForm";
import { SignOutComponent } from './sign-out/sign-out'

export const ProfilePage = () => {


  return (
    <>

      {/*Title*/}
<div className="bg-dark bg-opacity-50 mx-5 py-4">
      <Container>
        <Row>
          <Col>
            <h1 className="d-flex justify-content-center text-white">Create Your Profile!</h1>
          </Col>
        </Row>
      </Container>

      {/*Form*/}
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <SignUpForm/>
          </Col>
          <Col className="d-flex justify-content-center">
            <SignInForm/>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <SignOutComponent/>
          </Col>
        </Row>
      </Container>
</div>

    </>
  )
}


// <Form className="ms-5">
//   <Container className="form-group text-white mt-2">
//     <Row className="form-group">
//       <Col className="col-8 col-md-6 col-lg-4">
//         <label htmlFor="firstname">First Name</label>
//         <input name="firstname" type="text" className="form-control" id="firstname" placeholder="John"/>
//       </Col>
//     </Row>
//   </Container>
//
//   <Container className="form-group text-white mt-2">
//     <Row className="form-group">
//       <Col className="col-8 col-md-6 col-lg-4">
//         <label htmlFor="lastname">Last Name</label>
//         <input name="lastname" type="text" className="form-control" id="lastname" placeholder="Doe"/>
//       </Col>
//     </Row>
//   </Container>
//
//   <Container className="form-group text-white mt-2">
//     <Row className="form-group">
//       <Col className="col-8 col-md-6 col-lg-4">
//         <label htmlFor="email">Email address</label>
//         <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp"
//                placeholder="lol@example.com"/>
//       </Col>
//     </Row>
//   </Container>
//
//   <Container className="form-group text-white mt-2">
//     <Row className="form-group">
//       <Col className="col-8 col-md-6 col-lg-4">
//         <label htmlFor="password">Password</label>
//         <input name="password" type="password" className="form-control" id="password"
//                placeholder="Password"/>
//       </Col>
//     </Row>
//   </Container>
//
//   <Container className="form-group text-white mt-2">
//     <Row className="form-group">
//       <Col className="col-8 col-md-6 col-lg-4">
//         <label htmlFor="confirmpassword">Confirm Password</label>
//         <input name="confirmpassword" type="password" className="form-control" id="confirmpassword"
//                placeholder="Password"/>
//
//         <Button type="submit" className="btn btn-primary mt-4">Submit</Button>
//
//       </Col>
//     </Row>
//   </Container>
// </Form>