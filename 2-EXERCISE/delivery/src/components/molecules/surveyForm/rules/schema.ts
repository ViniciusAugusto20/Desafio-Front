import * as Yup from 'yup';

export const formSchema = Yup.object({
  name: Yup.string().required('Campo obrigatório'),
}).defined();
