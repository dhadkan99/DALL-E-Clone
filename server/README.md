# DALL-E Server

This is the backend server for the DALL-E image generation application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the server directory with the following variables:
```
MONGODB_URL=your_mongodb_connection_string_here
OPENAI_API_KEY=your_openai_api_key_here
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

3. Start the server:
```bash
npm start
```

## Required Services

- **MongoDB**: Database for storing posts
- **OpenAI**: DALL-E API for image generation
- **Cloudinary**: Image hosting service

## API Endpoints

- `GET /api/v1/post` - Get all posts
- `POST /api/v1/post` - Create a new post
- `POST /api/v1/dalle` - Generate image using DALL-E
