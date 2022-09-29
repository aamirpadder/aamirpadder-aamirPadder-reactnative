import https from './https';

type CategoriesById = {
  message: string;
  category: {
    _id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  };
};

type GetCategories = {
  message: string;
  categories: [
    {
      _id: string;
      name: string;
      createdAt: Date;
      updatedAt: Date;
      __v: number;
    },
  ];
};

export const getCategories = (): Promise<GetCategories> => {
  return https
    .get('/categories')
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


export const addProduct = (data):Promise<any> =>{
  return https
    .Post(`products`,data)
    .then(res => {
      return res;
    })
    .catch(err => {
      return Promise.reject(err);
    });
}