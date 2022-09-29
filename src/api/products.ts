import https from './https';

export type CategoriesById = {
  message: string;
  category: {
    _id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  };
};

export type GetProducts = {
  message: string;
  products: [
    {
      _id: string;
      name: string;
      avatar: string;
      description: string;
      price: number;
      category: string;
      developerEmail: string;
      createdAt: Date;
      updatedAt: Date;
      __v: number;
    },
  ];
};

export const getProducts = (): Promise<GetProducts> => {
  return https
    .get('/products')
    .then(res => {
      return res;
    })
    .catch(err => {
      return Promise.reject(err);
    });
};

export const getCategorieById = (id: string): Promise<CategoriesById> => {
  return https
    .get(`/categories/${id}`)
    .then(res => {
      return res;
    })
    .catch(err => {
      return Promise.reject(err);
    });
};
