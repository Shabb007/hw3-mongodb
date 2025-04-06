import { Router } from 'express';
import {
  getAllContactsController,
  getContactByIdController,
  createContactController,
  deleteContactController,
  updatePutContactController,
  updataPatchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const contactRouter = Router();

contactRouter.get('/', ctrlWrapper(getAllContactsController));

contactRouter.get('/:contactId', ctrlWrapper(getContactByIdController));
contactRouter.post('/', ctrlWrapper(createContactController));
contactRouter.delete('/:contactId', ctrlWrapper(deleteContactController));
contactRouter.put('/:contactId', ctrlWrapper(updatePutContactController));
contactRouter.patch('/:contactId', ctrlWrapper(updataPatchContactController));

export default contactRouter;
