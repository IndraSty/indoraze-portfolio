import { contactList } from "@/constants/contactList";
import React from "react";
import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";
import Link from "next/link";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { sendEmail } from "@/service/sendEmail";
import { validateForm } from "@/utils/validateForm";

const ContactSection = () => {
  const { contact, icon, platform } = contactList;
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  };

  const ContactBox = ({ icon, platform, contact, link }) => {
    return (
      <div className="w-full lg:w-[32%] p-5 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border-b-2 rounded-lg border-primary group">
        <Link href={`${link}`} target="_blank">
          <div className="flex w-full items-center justify-start gap-7">
            <Image
              src={icon}
              width={50}
              height={50}
              className="transform group-hover:-translate-y-3 hover:shadow-sm transition-all duration-300 ease-in-out"
            />
            <div className="flex flex-col gap-3">
              <div>
                <h2 className="text-xl font-bold dark:text-white">
                  {platform}
                </h2>
                <span className="text-sm text-secondary">{contact}</span>
              </div>
              <span className="text-sm text-primary font-semibold">
                Send Me A Message
              </span>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <section id="contact">
      <div className="min-h-screen w-full py-10 px-5 flex-col md:py-20 md:px-20 dark:bg-gray-900">
        {/* section title */}
        <div className="flex justify-center w-full">
          <div className="relative text-center whitespace-nowrap">
            <h1 className="text-gray-300 dark:text-gray-700 text-5xl font-bold z-10 opacity-40">
              Contact
            </h1>
            <h2 className="absolute left-8 top-5 text-4xl font-semibold text-black dark:text-white z-20">
              Contact
            </h2>
          </div>
        </div>
        {/* content section */}
        <div className="flex flex-col mt-20 md:mt-28 w-full mb-10">
          {/* description */}
          <div className="flex flex-col w-full text-center md:text-left gap-3">
            <h2 className="text-3xl text-primary font-semibold">
              Feel Free To Contact Me
            </h2>
            <p className="text-sm lg:w-3/5 dark:text-white">
              I'am always open to discussing product design, collaborating work
              or partnerships. Just contact me with this media below
            </p>
          </div>
          {/* contact list */}
          <div className="flex flex-wrap lg:flex-row lg:justify-between w-full gap-4 mt-10">
            {contactList.map(({ contact, icon, platform, link }, index) => (
              <ContactBox key={index}
                contact={contact}
                icon={icon}
                platform={platform}
                link={link}
              />
            ))}
          </div>
          <div className="relative my-14 p-4">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white text-sm dark:text-white dark:bg-gray-900">
                Or
              </span>
            </div>
          </div>

          {/* form message */}
          <Formik
            initialValues={initialValues}
            validationSchema={validateForm}
            onSubmit={sendEmail}
          >
            {({ isSubmitting, isValid }) => (
              <Form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2">
                  <Field name="first_name">
                    {({ field, form }) => (
                      <div className="flex flex-col space-y-2 gap-2">
                        <label htmlFor="first_name" className="text-white">
                          Your Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          placeholder="Your First Name. Example: John"
                          className={`w-full px-8 py-4 bg-white dark:bg-gray-900 border-2 rounded ${
                            form.errors.first_name && form.touched.first_name
                              ? "border-red-300"
                              : "border-primary"
                          }`}
                          {...field}
                        />
                        {form.errors.first_name && form.touched.first_name ? (
                          <div className="text-red-500">
                            {form.errors.first_name}
                          </div>
                        ) : null}
                      </div>
                    )}
                  </Field>
                  <Field name="last_name">
                    {({ field, form }) => (
                      <div className="flex flex-col space-y-2 gap-2">
                        <label htmlFor="last_name" className="text-white">
                          Your Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="last_name"
                          placeholder="Your Last Name. Example: Doe"
                          className={`w-full px-8 py-4 bg-white dark:bg-gray-900 border-2 rounded ${
                            form.errors.last_name && form.touched.last_name
                              ? "border-red-300"
                              : "border-primary"
                          }`}
                          {...field}
                        />
                        {form.errors.last_name && form.touched.last_name ? (
                          <div className="text-red-500">
                            {form.errors.last_name}
                          </div>
                        ) : null}
                      </div>
                    )}
                  </Field>

                  <Field name="email">
                    {({ field, form }) => (
                      <div className="flex flex-col gap-2 mt-3 lg:mt-0">
                        <label htmlFor="email" className="dark:text-white">
                          Your Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Your Email. Example: johndoe@gmail.com"
                          className={`flex-1 px-8 w-full py-4 bg-white dark:bg-gray-900 border-2 border-primary rounded ${
                            form.errors.email && form.touched.email
                              ? "border-red-300"
                              : "border-primary"
                          }`}
                          {...field}
                        />
                        {form.errors.email && form.touched.email ? (
                          <div className="text-red-500">
                            {form.errors.email}
                          </div>
                        ) : null}
                      </div>
                    )}
                  </Field>

                  <Field name="subject">
                    {({ field, form }) => (
                      <div className="flex flex-col space-y-2 mt-3 lg:mt-0">
                        <label htmlFor="subject" className="text-white">
                          Your Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          placeholder="Your Subject. Example: Hey, I Wanna Collaborate"
                          className={`w-full px-8 py-4 bg-white dark:bg-gray-900 border-2 rounded ${
                            form.errors.subject && form.touched.subject
                              ? "border-red-300"
                              : "border-primary"
                          }`}
                          {...field}
                        />
                        {form.errors.subject && form.touched.subject ? (
                          <div className="text-red-500">
                            {form.errors.subject}
                          </div>
                        ) : null}
                      </div>
                    )}
                  </Field>
                </div>
                <Field name="message">
                  {({ field, form }) => (
                    <div className="flex flex-col space-y-2 py-3">
                      <label htmlFor="message" className="text-white">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        placeholder="Your Message. Example: Hey, I Wanna Collaborate Because I Have A Project"
                        className={`w-full min-h-[320px] px-8 py-4 bg-transparent border-2 dark:text-white rounded ${
                          form.errors.message && form.touched.message
                            ? "border-primary"
                            : "border-primary"
                        }`}
                        {...field}
                      />
                      {form.errors.message && form.touched.message ? (
                        <div className="text-red-500">
                          {form.errors.message}
                        </div>
                      ) : null}
                    </div>
                  )}
                </Field>

                <button
                  type="submit"
                  className={`flex items-center gap-3 py-3 px-8 bg-primary text-white font-semibold text-lg rounded-md ${
                    isSubmitting || !isValid
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-primary-hover"
                  }`}
                  disabled={isSubmitting || !isValid}
                >
                  Submit
                  <FaPaperPlane />
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
