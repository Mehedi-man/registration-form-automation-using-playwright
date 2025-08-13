# Registration Form Automation using Playwright

This project automates the registration process on the [QA Harbor Job Portal] using **Playwright** in Node.js.

## 📌 Features
- Fills in the registration form automatically (username, email, first name, last name)
- Checks the agreement checkbox
- Submits the form
- (Optional) Navigates to the login page after registration
- Keeps the browser open for result inspection

## 🛠️ Tech Stack
- **Node.js** (JavaScript)
- **Playwright**

## 📂 Project Structure
QA_Project/
└── nodeJS/
└── form_automation/
├── index.js # Main automation script
├── package.json # Project dependencies
└── README.md # Documentation


## 🚀 How to Run

### 1. Install Dependencies
```bash
npm install playwright


The browser will remain open after execution so you can verify that the user was created.

⚙️ Script Overview
Step 1: Opens the candidate registration page
Step 2: Fills in:
Username
Email
First name
Last name
Step 3: Clicks on Register Now
Step 4: Redirects to login page
📄 License
This project is licensed under the MIT License.

yaml
Copy
Edit

---

If you want, I can also **include example Playwright code** in the README so anyone cloning it kn
