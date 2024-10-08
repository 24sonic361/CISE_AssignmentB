// src/components/ArticleSubmissionForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@material-ui/core';



const ArticleSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  authors: Yup.string().required('Required'),
  journal: Yup.string().required('Required'),
  year: Yup.number().required('Required').min(1900, 'Invalid Year'),
  volume: Yup.string(),
  doi: Yup.string().required('Required'),
});

const ArticleSubmissionForm = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Submit an Article</Typography>
    <Formik
      initialValues={{ title: '', authors: '', journal: '', year: '', volume: '', doi: '' }}
      validationSchema={ArticleSchema}
      onSubmit={(values) => {
        console.log(values); // Replace with API call
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field as={TextField} name="title" label="Title" fullWidth margin="normal" />
          {errors.title && touched.title ? <div>{errors.title}</div> : null}

          <Field as={TextField} name="authors" label="Authors" fullWidth margin="normal" />
          {errors.authors && touched.authors ? <div>{errors.authors}</div> : null}

          <Field as={TextField} name="journal" label="Journal" fullWidth margin="normal" />
          {errors.journal && touched.journal ? <div>{errors.journal}</div> : null}

          <Field as={TextField} name="year" label="Year" fullWidth margin="normal" />
          {errors.year && touched.year ? <div>{errors.year}</div> : null}

          <Field name="volume" as={TextField} label="Volume" fullWidth margin="normal" />

          <Field as={TextField} name="doi" label="DOI" fullWidth margin="normal" />
          {errors.doi && touched.doi ? <div>{errors.doi}</div> : null}

          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </Form>
      )}
    </Formik>
    </Container>
  );
};

export default ArticleSubmissionForm;
