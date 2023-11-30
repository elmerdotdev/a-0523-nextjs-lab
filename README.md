# NextJS Lab Day - Notes App CRUD

Demo: [https://drive.google.com/file/d/1ZnKOVWMpcPyMF8CCKgEklHoTNT31Y8KL/view?usp=sharing]

## Instructions

1. Run `npm install` after cloning the respository
2. Run `npx prisma migrate dev --name init` to set up the database with the provided *prisma/schema.prisma* file
3. Run `npm run dev` to run your application
4. Recreate the demo video as best as you can. The styling doesn't have to be the same as long as the functionality is there

## Notes

- The **db.ts** file is already provided so you don't need to copy the solution provided here: [https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices]
- Use Tailwind CSS classes to style the elements if you need to
- For the edit form, use the attribute `defaultValue` to set the value of the input field, textarea, and select dropdown. Since we are using Server Components, don't use `onChange` and `useState`
- Use a Parallel Route + Intercepting Route to create the view note modal
- Clicking on `View Note` button will open a modal but accessing the URL in the address bar will instead load the view note page
- Make sure to re-run `npm run dev` after you create or make changes to your parallel or intercepting route. Sometimes the changes do not take effect immediately
- Create a `loading.tsx` file for your View and Edit pages
