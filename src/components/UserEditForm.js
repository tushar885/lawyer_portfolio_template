import React, { useContext } from "react";
import { Field, FieldArray, Form, Formik } from "formik";
import userInitalValues from "../utils/userFromInitialValues.js";
import UserContext from "../utils/UserContest.js";
import { useNavigate } from "react-router-dom";

const UserEditForm = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  return (
    <Formik
      initialValues={userInitalValues(user)}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        const jsonData = JSON.stringify(values);
        localStorage.setItem("user", jsonData);
        setUser(values);
        setSubmitting(false);
        navigate("/");
      }}
    >
      {(props) => {
        return (
          <Form className="flex flex-col justify-center gap-8 my-16 mx-32">
            <div className=" flex items-center gap-2">
              <label htmlFor="name" className="font-bold">
                Name :{" "}
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                required="true"
                className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
              />
            </div>
            <div className=" flex items-center gap-2">
              <label htmlFor="navbar_title" className="font-bold">
                Navbar title :{" "}
              </label>
              <Field
                id="navbar_title"
                name="navbar_title"
                type="text"
                required="true"
                className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
              />
            </div>
            <div className=" flex items-center gap-2">
              <label htmlFor="header_phase" className="font-bold">
                Header Phrase :{" "}
              </label>
              <Field
                id="header_phase"
                name="header_phase"
                type="text"
                required="true"
                className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
              />
            </div>
            <div className=" flex items-center gap-2">
              <label htmlFor="mobileNumber" className="font-bold">
                Mobile Number :{" "}
              </label>
              <Field
                id="mobileNumber"
                name="mobileNumber"
                type="text"
                required="true"
                className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
              />
            </div>
            <div className=" flex items-center gap-2">
              <label htmlFor="totalCases" className="font-bold">
                Total Cases :{" "}
              </label>
              <Field
                id="totalCases"
                name="totalCases"
                type="number"
                required="true"
                className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
              />
            </div>
            <div className=" flex items-center gap-2">
              <label htmlFor="casesWon" className="font-bold">
                Cases Won :{" "}
              </label>
              <Field
                id="casesWon"
                name="casesWon"
                type="number"
                required="true"
                className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
              />
            </div>
            <div className=" flex items-center gap-2">
              <label htmlFor="totalClients" className="font-bold">
                Total Clients :{" "}
              </label>
              <Field
                id="totalClients"
                name="totalClients"
                type="number"
                required="true"
                className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
              />
            </div>
            <div className=" flex items-center gap-2">
              <label htmlFor="yearOfExperience" className="font-bold">
                Year Of Experience :{" "}
              </label>
              <Field
                id="yearOfExperience"
                name="yearOfExperience"
                type="number"
                required="true"
                className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
              />
            </div>
            <div className=" flex items-center gap-2">
              <label
                htmlFor="aboutUs_description"
                className="font-bold self-start"
              >
                About_Description :{" "}
              </label>
              <Field
                id="aboutUs_description"
                name="aboutUs_description"
                type="number"
                as="textarea"
                required="true"
                className="grow h-32 rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
              />
            </div>

            <div className=" flex items-center gap-4">
              <p className="font-bold self-start">Services : </p>
              <div className="flex flex-col gap-12 grow border px-4 py-6">
                <FieldArray
                  name="services"
                  render={(helper) => {
                    return props.values.services.map((service, index) => {
                      return (
                        <div className="flex flex-col gap-4 grow">
                          <div className="flex gap-2 items-center">
                            <label
                              htmlFor={`services[${index}].title`}
                              className="font-semibold"
                            >
                              Title :{" "}
                            </label>
                            <Field
                              id={`services[${index}].title`}
                              name={`services[${index}].title`}
                              type="text"
                              required="true"
                              className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
                            />
                          </div>
                          <div className="flex gap-2 items-center">
                            <label
                              htmlFor={`services[${index}].description`}
                              className="font-semibold self-start"
                            >
                              Description :{" "}
                            </label>
                            <Field
                              id={`services[${index}].description`}
                              name={`services[${index}].description`}
                              type="text"
                              as="textarea"
                              required="true"
                              className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
                            />
                          </div>
                        </div>
                      );
                    });
                  }}
                />
              </div>
            </div>

            <div className=" flex items-center gap-2">
              <label htmlFor="affiliate" className="font-bold">
                Affiliate :{" "}
              </label>
              <Field
                id="affiliate"
                name="affiliate"
                type="text"
                required="true"
                className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
              />
            </div>

            <div className=" flex items-center gap-4">
              <p className="font-bold self-start">Testmonials : </p>
              <div className="flex flex-col gap-12 grow border px-4 py-6">
                <FieldArray
                  name="testmonials"
                  render={(helper) => {
                    return props.values.testmonials.map((testmonial, index) => {
                      return (
                        <div className="flex flex-col gap-4 grow">
                          <div className="flex gap-2 items-center">
                            <label
                              htmlFor={`testmonials[${index}].reviewerName`}
                              className="font-semibold"
                            >
                              Title :{" "}
                            </label>
                            <Field
                              id={`testmonials[${index}].reviewerName`}
                              name={`testmonials[${index}].reviewerName`}
                              type="text"
                              required="true"
                              className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
                            />
                          </div>
                          <div className="flex gap-2 items-center">
                            <label
                              htmlFor={`testmonials[${index}].reviewPara`}
                              className="font-semibold self-start"
                            >
                              Description :{" "}
                            </label>
                            <Field
                              id={`testmonials[${index}].reviewPara`}
                              name={`testmonials[${index}].reviewPara`}
                              type="text"
                              as="textarea"
                              required="true"
                              className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
                            />
                          </div>
                        </div>
                      );
                    });
                  }}
                />
              </div>
            </div>

            <div className=" flex items-center gap-4">
              <p className="font-bold self-start">News : </p>
              <div className="flex flex-col gap-12 grow border px-4 py-6">
                <FieldArray
                  name="news"
                  render={(helper) => {
                    return props.values.news.map((newsObj, index) => {
                      return (
                        <div className="flex flex-col gap-4 grow">
                          <div className="flex gap-2 items-center">
                            <label
                              htmlFor={`news[${index}].title`}
                              className="font-semibold"
                            >
                              Title :{" "}
                            </label>
                            <Field
                              id={`news[${index}].title`}
                              name={`news[${index}].title`}
                              type="text"
                              required="true"
                              className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
                            />
                          </div>
                          <div className="flex gap-2 items-center">
                            <label
                              htmlFor={`news[${index}].description`}
                              className="font-semibold self-start"
                            >
                              Description :{" "}
                            </label>
                            <Field
                              id={`news[${index}].description`}
                              name={`news[${index}].description`}
                              type="text"
                              as="textarea"
                              required="true"
                              className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
                            />
                          </div>
                        </div>
                      );
                    });
                  }}
                />
              </div>
            </div>

            <div className=" flex items-center gap-4">
              <p className="font-bold self-start">Quotes : </p>
              <div className="flex flex-col gap-12 grow border px-4 py-6">
                <FieldArray
                  name="quotes"
                  render={(helper) => {
                    return props.values.quotes.map((quote, index) => {
                      return (
                        <div className="flex flex-col gap-4 grow">
                          <Field
                            name={`quotes[${index}]`}
                            type="text"
                            required="true"
                            className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
                          />
                        </div>
                      );
                    });
                  }}
                />
              </div>
            </div>

            <div className=" flex items-center gap-2">
              <label htmlFor="instagram" className="font-bold">
                Instagram :{" "}
              </label>
              <Field
                id="instagram"
                name="instagram"
                type="text"
                required="true"
                className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
              />
            </div>
            <div className=" flex items-center gap-2">
              <label htmlFor="twitter" className="font-bold">
                Twitter :{" "}
              </label>
              <Field
                id="twitter"
                name="twitter"
                type="text"
                required="true"
                className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
              />
            </div>
            <div className=" flex items-center gap-2">
              <label htmlFor="linkedIn" className="font-bold">
                LinkedIn :{" "}
              </label>
              <Field
                id="linkedIn"
                name="linkedIn"
                type="text"
                required="true"
                className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
              />
            </div>
            <div className=" flex items-center gap-2">
              <label htmlFor="youtube" className="font-bold">
                Youtube :{" "}
              </label>
              <Field
                id="youtube"
                name="youtube"
                type="text"
                required="true"
                className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
              />
            </div>
            <div className=" flex items-center gap-2">
              <label htmlFor="facebook" className="font-bold">
                FaceBook :{" "}
              </label>
              <Field
                id="facebook"
                name="facebook"
                type="text"
                required="true"
                className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
              />
            </div>
            <div className=" flex items-center gap-2">
              <label htmlFor="email" className="font-bold">
                E-mail :{" "}
              </label>
              <Field
                id="email"
                name="email"
                type="text"
                required="true"
                className="grow rounded-lg py-1 px-3 border-2 border-black focus:outline-0"
              />
            </div>

            <button
              type="submit"
              // disabled={formik.isSubmitting}
              className="px-5 py-1 border border-[#3DEFE9] shadow-md shadow-[#3DEFE9] hover:cursor-pointer  rounded-md text-[#3DEFE9] mt-2  tracking-widest select-none self-center"
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default UserEditForm;
