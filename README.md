# **Ascentech Assignment**

This project integrates a Spring Boot backend with a React frontend. Follow the steps below to set up and run the application locally.

---

## **Prerequisites**

Ensure the following are installed on your system:

- **Java** (version 17 or later)
- **Node.js** (version 16 or later)
- **npm** or **yarn**
- **Maven** (or Gradle, based on the project setup)
- A compatible **IDE** (e.g., IntelliJ IDEA, VS Code)

---

## **Steps to Run the Application**

### **1. Clone the Repository**
```bash
git clone <repository_url>
cd <repository_directory>
```

---

### **2. Set Up the Backend (Spring Boot)**

#### Navigate to the Backend Directory
```bash
cd backend
```

#### Build the Project
```bash
mvn clean install
```

#### Run the Application
```bash
mvn spring-boot:run
```

#### Verify Backend
The backend runs on [http://localhost:8081](http://localhost:8081).

---

### **3. Set Up the Frontend (React)**

#### Navigate to the Frontend Directory
```bash
cd ../frontend
```

#### Install Dependencies
```bash
npm install
```

#### Start the Development Server
```bash
npm start
```

#### Verify Frontend
The frontend runs on [http://localhost:3000](http://localhost:3000).

---

### **4. Connect Frontend and Backend**

- Ensure the frontend API calls point to the backend's URL (e.g., `http://localhost:8081/api/`).
- Update `proxy` in the **frontend/package.json** (if applicable):
  ```json
  "proxy": "http://localhost:8081"
  ```

---

### **5. Build and Deploy**

#### Build Frontend for Production
```bash
npm run build
```

#### Serve Frontend with Backend
Copy the `build` folder to the backend and configure Spring Boot to serve the React app.

---

## **Project Structure**

```
root/
├── backend/    # Spring Boot backend code
└── frontend/   # React frontend code
```

---

## **Contributing**

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a Pull Request.

---

