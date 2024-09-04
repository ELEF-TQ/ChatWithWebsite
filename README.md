# RAG Application : ChatWithWebsite

## Overview
ChatWithWebsite is a dynamic web application that enables users to interact with websites via a chat interface. By appending a website link to localhost:3000, users can query and receive AI-generated responses based on the website's content. This application integrates advanced AI technologies to provide relevant and contextually accurate information.

## Features
- **Interactive Chat:**: Users can ask questions about the content of any website.
- **AI-Driven Responses**: Provides accurate and contextually relevant information based on the website's content.
- **User-Friendly Interface:**: Simple and intuitive chat experience.


## Technologies Used
- **Next.js**:  Framework for server-rendered React applications.
- **AI SDK(meta-llama/Meta-Llama-3-8B-Instruct):**: For generating AI-driven responses.
- **Upstash**: For vector storage and retrieval.

## Installation
To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/chatwithwebsite.git
    cd chatwithwebsite
    ```


2. **Install dependencies**:
    ```bash
   yarn install
    ```
    
3. **Start the development server**:
    ```bash
   yarn dev
    ```

## Configuration
Ensure you have the following environment variables set up:

- `UPSTASH_VECTOR_REST_URL`: Your Upstash Vector REST API URL.
- `UPSTASH_VECTOR_REST_TOKEN`: Your Upstash Vector REST API Token.
- `QSTASH_TOKEN`: Your QStash API Token.
- `UPSTASH_REDIS_REST_TOKEN`: Your Upstash Redis REST API Token.
- `UPSTASH_REDIS_REST_URL`: Your Upstash Redis REST API URL.

You can set these environment variables in a `.env` file at the root of your project.


## Demo video




