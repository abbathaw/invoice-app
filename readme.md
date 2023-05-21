![Tests](https://github.com/abbathaw/invoice-app/actions/workflows/test.yml/badge.svg)

# InvoicePage API Frontend

A React application that renders an invoice UI application to handle viewing invoices. The frontend allows the user to view an invoice for a project.

Built with Vitejs, React, react-router. Styling is done with scss.

## Demo



## Run locally

- Clone the Repository
- (Optional) add .env file and add the values in sample.env. It's optional because all current used .env values have the same default in this application.
- `npm ci`
- `npm run dev`
- App should open in `http://localhost:3000`

To run the tests, `npm run test`

### Decisions

#### Vite

This is now the recommended approach for react single page applications. It provides very fast server start and HMR. It also features a lot of plugins and fully typed APIs.

#### React router

This is a small app, however, adding the react-router to application is beneficial for url and browser history.

## Screenshots
