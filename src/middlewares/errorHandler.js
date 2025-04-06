import { HttpError } from 'http-errors';

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    return res.status(err.status).send({
      message: err.message,
      status: err.status,
    });
  }

  res.status(500).send({
    message: '500 Internal server error',
    status: 500,
  });
};
