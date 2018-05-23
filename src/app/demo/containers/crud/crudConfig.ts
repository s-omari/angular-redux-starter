export const CategoryFormFields = [
{
  type: 'input',
  label: 'Category Title',
  name: 'title',
  value: '',
  placeholder: 'enter title for category',
},

{
  type: 'input',
  label: 'description',
  name: 'description',
  value: '',
  placeholder: 'enter category description',
}
];

export const Categories = {
      apiPath: 'http://localhost:3000/categories',   // api url of entity
      FormConfig: CategoryFormFields,                // form fields object
      entityTitle: 'category',                      // title
      entityTitlePlural: 'categories',              // plural title
      showColumns: [ 'title' , 'description']       // choose which columns to display in table
    };






    export const UserFormFields = [
      {
        type: 'input',
        label: 'first name',
        name: 'first_name',
        value: '',
        placeholder: 'enter first name',
      },
      {
        type: 'input',
        label: 'last name',
        name: 'last_name',
        value: '',
        placeholder: 'enter last name',
      },
      {
        type: 'input',
        label: 'email',
        name: 'email',
        value: '',
        placeholder: 'enter email',
      }
      ];

      export const Users = {
            apiPath: 'http://localhost:3000/users',
            FormConfig: UserFormFields,
            entityTitle: 'user',
            entityTitlePlural: 'users',
            showColumns: [ 'first_name' , 'email']
          };

