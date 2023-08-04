#

# Data Dashboard Web Application (Frontend Only)

Welcome to the Data Dashboard web application! This project serves as a frontend demonstration of various technologies used in building a data dashboard. Please note that this version of the application focuses solely on showcasing the frontend functionalities, and the backend functionalities, such as pulling data from a database, are not implemented.

## Purpose

The primary purpose of this application is to illustrate how modern frontend technologies and libraries can be utilized to create a powerful and interactive data dashboard. We use mock data for the charts and graphs to simulate real-world scenarios, making it easier to understand how the application would function with live data.

## Table of Contents

- [Getting Started](#getting-started)

- [Prerequisites](#prerequisites)

- [Installation](#installation)

- [Development](#development)

- [Features](#features)

- [Technologies](#technologies)

## Getting Started

### Prerequisites

Before you begin, make sure you have the following tools installed on your system:

- [Node.js](https://nodejs.org/) (>= 14.x)

- [npm](https://www.npmjs.com/) (>= 7.x)

### Installation

1. Clone this repository to your local machine:

```bash
git  clone  https://github.com/hberkaykuran/data-dashboard.git
cd  data-dashboard
```

Install the required dependencies:

```bash
npm  install
```

#### Development

To start the development server, use the following command:

```bash
npm  run  dev
```

The application will be accessible at http://localhost:3000.

#### Building

To build the application for production, use:

```bash
npm  run  build
```

#### Starting

To run the built application, use:

```bash
npm  start
```

### Features

The Data Dashboard web application provides the following features:

Interactive data visualization with charts and graphs.

Data grid for managing and displaying tabular data.

User authentication using NextAuth for secure access.

Storybook integration for component development and testing.

Dark mode support for better user experience.

### Technologies

This project is built using the following technologies:

Frontend:

- React (v18.2.0)

- Next.js (v13.4.12)

- Material-UI (v5.14.3)

- Emotion (v11.11.1)

- Chart.js (v4.3.3)

Backend (Authentication):

- NextAuth (v4.22.3)

Styling:

- Sass (v1.64.2)

Type Checking:

- TypeScript (v5.1.6)
