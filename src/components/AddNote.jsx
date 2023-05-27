import React from 'react';

// Import Formik and Yup
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

const AddNote = ({ AddNote }) => {

  // add form logic here
  const intialValues = {
    name: '',
    content: ''
  }
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    content: Yup.string().required("Content is required"),

  });

  const handleSubmit = (values) => {

    AddNote({
      name: values.name,
      content: values.content
    })

    console.log(values)
  }

  return (
    <div>

      <Formik

        initialValues={intialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}

      >

        <Form className='w-full bg-white rounded-lg px-7 py-6'>
          <div className='mb-4'>
            <Field

              as="text"
              name="name"
              content="content"
              rows="4"

              className="flex items-center border border-gray-300 rounded px-2 py-1"
            />
            <ErrorMessage
              name="content"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-5">
            <Field
              as="textarea"
              name="content"
              placeholder="Body"
              rows="4"
              className="w-full flex items-centen border border-gray-300 rounded px-2 py-1"

            />
            <ErrorMessage
              name="content"
              component="div"
              className="text-red-500"
            />
          </div>

          <button type='submit'
            className='w-full bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >add note</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNote;
