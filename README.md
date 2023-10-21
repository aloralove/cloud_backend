
# Backend Service for Angular Dashboard App

## Description
This is the backend service for an Angular-based dashboard application. The backend is responsible for serving API endpoints and handling data processing tasks for the frontend. To see the frontend repository, click [here](https://github.com/aloralove/cloud_frontend/tree/main#readme).

## Features
- RESTful API endpoints
- Data processing
- Integration with Frontend

## Prerequisites
- Node.js and npm
- Docker (for local development)

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/your-username/your-backend-app.git
cd your-backend-app
```

### Install Dependencies
```bash
npm install
```

### Run Locally
```bash
npm start
```
The backend service will start and listen for incoming requests on the specified port.

### Local Development with Docker 

1. **Navigate to the Location of Dockerfile**: Navigate to the folder where the backend Dockerfile is located.

2. **Build and Tag the Images**: Build the Docker image for the backend locally, which will package your application along with all its dependencies.

    ```bash
    docker build -t backend-image:latest .
    ```

3. **Run the Docker Container Locally**: After the image is built, run it as a container locally. Replace `:latest` with your preferred tag if needed.

    ```bash
    docker run -p 8081:8081 backend-image:latest
    ```

    This will run the backend service on `http://localhost:8081`.

### Automated Deployment on Google Cloud Platform (GCP)

#### Prerequisites
- Google Cloud SDK
- GCP account with App Engine enabled

#### Steps
1. **Authenticate with Google Cloud**: Run `gcloud auth login`.
2. Navigate to your project's App Engine Dashboard in the GCP Console.
3. Set up a Cloud Build trigger pointing to your GitHub repository.
4. Configure the build to deploy to App Engine upon a successful build.

## Contributing
Feel free to fork the repository and make changes. Pull requests are warmly welcome.

## License
This project is open-sourced under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

## Author
- [Alora Greer](mailto:alora.greer@gmail.com)
